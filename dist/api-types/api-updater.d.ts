import type { ZeroAPIPluginConfig } from '../vitePlugin.js';
/** Is run when file changes has been detected */
export declare function apiUpdater(config: ZeroAPIPluginConfig, 
/** Resolved to real path i.e. `src/routes = C:/current/project/src/routes` */
routesDirectory: string): void;
