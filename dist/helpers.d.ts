/** Ex. `errors: { one?: string } | { two?: string }` becomes `{ one?: string } & {two?: string }` */
export declare function intersect<T>(obj: T): UnionToIntersection<T>;
export type { RequestParams, ResponseBody, GetResponse } from './types/zeroapi.js';
