import type { Plugin } from 'vite';
export interface ZeroAPIPluginConfig {
    /**
     * Where should the api-file be located?
     * @default src
    */
    outputDir?: string;
    /**
     * The name of the api file?
     * @default api
    */
    apiName?: string;
    /**
     * Alternative output for the generated api types
     *
     * By default, it will be relative to the api outputDir inside `.svelte-kit/generated`
     *
     * @example tempOutput: './src/__generated.d.ts'
    */
    tempOutput?: string;
    /**
     * Where to look for +server.ts files
     * @default routesDir: './src/routes'
    */
    routesDir?: string;
}
export default function zeroApi(config?: ZeroAPIPluginConfig): Plugin;
