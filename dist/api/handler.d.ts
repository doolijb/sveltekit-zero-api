import type { ZeroAPIConfig } from '../types/options';
interface APIContent {
    headers: Record<string, string>;
    body: any;
    query: Record<any, any>;
    method: string;
}
interface IOptions {
    path: string;
    config: ZeroAPIConfig;
    fetch: typeof fetch;
}
export default function handler(options: IOptions, api: APIContent): Record<any, any>;
export {};
