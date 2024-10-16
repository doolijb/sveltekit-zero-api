import fs from 'fs';
import { resolve } from 'path';
import apiTemplate from './api-types/api-template.js';
import { apiUpdater } from './api-types/api-updater.js';
const cwd = process.cwd();
export default function zeroApi(config = {}) {
    if (process.env.NODE_ENV === 'production')
        return { name: 'svelte-plugin-zero-api' };
    const { outputDir = 'src', apiName = 'api', routesDir = './src/routes' } = config;
    // Create src/api.ts if doesn't exist
    const outputPath = resolve(cwd, outputDir, apiName + '.ts');
    if (!fs.existsSync(outputPath)) {
        fs.writeFile(outputPath, apiTemplate, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
    const resolvedRoutes = resolve(cwd, routesDir);
    apiUpdater(config, resolvedRoutes);
    return {
        name: 'svelte-plugin-zero-api',
        configureServer(vite) {
            vite.watcher.on('change', (path) => {
                apiUpdater(config, resolvedRoutes);
            });
        }
    };
}
