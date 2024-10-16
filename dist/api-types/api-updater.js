import { pathToImportPath, toValidVariable } from '../utils/string.js';
import fs from 'fs';
import { resolve, relative } from 'path';
import { debugging } from '../internal.js';
const cwd = process.cwd();
let running = false;
function deleteNestedEmptyObjects(obj) {
    // modify by reference
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'object') {
            deleteNestedEmptyObjects(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                delete obj[key];
            }
        }
    });
}
function parsePath(resolutionPath, path) {
    const _relative = relative(resolutionPath, path).replace('..', '.');
    const importName = pathToImportPath(_relative);
    const alias = toValidVariable(importName);
    return { importName, alias };
}
/** Is run when file changes has been detected */
export function apiUpdater(config, 
/** Resolved to real path i.e. `src/routes = C:/current/project/src/routes` */
routesDirectory) {
    if (running)
        return;
    running = true;
    let apiTypes = {};
    let importStatements = '';
    const { tempOutput, outputDir = 'src' } = config;
    const resolution = tempOutput ?
        resolve(cwd, tempOutput) : resolve(cwd, outputDir, 'sveltekit-zero-api.d.ts');
    debugging && console.time(`[DEBUG] Updated generated types at ${resolution} ...`);
    function recursiveLoad(dir, directory) {
        const files = fs.readdirSync(dir);
        // ex. src/routes/(app)/api/somedir/index.ts
        for (let fileName of files) {
            const path = resolve(dir, fileName);
            const metadata = fs.statSync(path);
            if (metadata.isDirectory()) {
                if (!directory[fileName]) {
                    if (fileName.match(/\[(.*?)\]/)) {
                        // this should be a promise, it should resolve when dirText is parsed...
                        const { alias } = parsePath(resolution, path + '\\+server.ts'); // comply with pathToImportPath
                        fileName = fileName.replace(/\[(.*?)\]/, `[$1]${alias}`);
                    }
                    directory[fileName] = {};
                }
                recursiveLoad(path, directory[fileName]);
                continue;
            }
            if (!/\+server.(ts|js)/gm.test(fileName))
                continue;
            const { alias, importName } = parsePath(resolution, path);
            importStatements += `import * as ${alias} from '${importName}'\n`;
            // Read file
            const contents = fs.readFileSync(path, 'utf8');
            const regex = /(GET|HEAD|POST|PUT|DELETE|PATCH|OPTIONS)([\s]*=?[\s]*)</g;
            const genericMethods = [];
            let match;
            while ((match = regex.exec(contents)) !== null) {
                const [, method] = match;
                genericMethods.push(method);
            }
            const key = fileName.replace(/\.(ts|js)$/g, '');
            directory[key] = `Z<typeof ${alias}>`;
            if (genericMethods.length > 0) {
                const omitted = genericMethods.map(method => `'${method}'`).join('|');
                // Take a look at `routes/genericEndpoints.ts` to make sense of this bad boy
                const type = genericMethods.map(method => `${method}: EP<typeof ${alias}.${method}> extends { body: any } | { query: any } ? <const T extends EP<typeof ${alias}.${method}>>(request: T, fetch?: Fetch) => R<typeof ${alias}.${method}<T>> : <const T extends EP<typeof ${alias}.${method}>>(request?: T, fetch?: Fetch) => R<typeof ${alias}.${method}<T>>`).join(',');
                directory[key] =
                    `Z<Omit<typeof ${alias}, ${omitted}>> & { ${type}`;
            }
        }
    }
    recursiveLoad(routesDirectory, apiTypes);
    function fixKeys(obj) {
        for (let key of Object.keys(obj)) {
            if (typeof obj[key] === 'object')
                obj[key] = fixKeys(obj[key]);
            const isGroup = key.startsWith('(') && key.endsWith(')');
            if (!isGroup)
                continue;
            let content = obj[key];
            delete obj[key];
            obj = { ...obj, ...content };
        }
        return obj;
    }
    deleteNestedEmptyObjects(apiTypes);
    apiTypes = fixKeys(apiTypes);
    let dirText = JSON.stringify(apiTypes, null, 2);
    dirText = dirText
        // Transform routes into API types
        .replaceAll(/\"\+server\"\: \"Z/g, '} & Z')
        .replaceAll(/(__server\>\",)|(__server\>\")/g, '__server> & {')
        // Transform slugs e.g. "[slug]": into functions slug$: (slug: S) =>
        // TODO: Allow ex. [slug].[second] to become slug$second$: (slug: S, second: S) =>
        .replaceAll(/\"\[(.*?)\](.*?)\"\:/g, (match, p1, p2) => {
        // FIXME: check for other cases
        const alias = p2 || '{}';
        return `${p1}$: (${p1}: Slug<typeof ${alias}>) =>`;
    })
        .replaceAll(/=\w+(?=:|\$)/g, '')
        .replaceAll(/"(\s*[},])/g, '$1');
    const folder = resolve(resolution, '..');
    if (!fs.existsSync(folder))
        fs.mkdirSync(folder, { recursive: true });
    debugging && console.timeEnd(`[DEBUG] Updated generated types at ${resolution} ...`);
    try {
        // Flag is required to make it a writeable stream. Replacing file messes with TypeScript.
        fs.writeFileSync(resolution, file(dirText, importStatements), { flag: 'w+' });
    }
    catch (error) {
        console.warn(error);
    }
    running = false;
}
/**
 * This is required because for some reason,
 * "sveltekit-zero-api" becomes "../../../dist/types/zeroapi",
 * when developing sveltekit-zero-api and is an incorrect path.
*/
const z = debugging ?
    `import type { EP, Fetch, Z, R } from '../../../dist/z'`
    :
        `import type { EP, Fetch, Z, R } from 'sveltekit-zero-api/z'`;
const file = (dirText, importCode) => `/* eslint-disable */
/* 
    -- Generated sveltekit-zero-api --
          Do not edit this file
*/
${z}
${importCode}

type Slug<Module> = Module extends { Slug: infer S } ? S : string | number

export type GeneratedAPI = ${dirText}`;
