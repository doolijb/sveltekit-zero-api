import * as HTTP from './http.js';
import type { CreateResponse } from './http.js';
type Type = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
export declare const err: {
    handler<E extends (Record<any, any> | null)[]>(...args: E): (<K extends Readonly<StatusCodeFn["Error"]>, T extends Parameters<(typeof HTTP)[K]>[0] = {}>(response: K, options?: T, message?: string) => CreateResponse<K, StatusText[K], false, {
        body: {
            errors: Simplify<UnionToIntersection<NonNullable<E[number]>>>;
            message: string | undefined;
        };
    } & T>) | null;
    /** Results in error if value(s) are undefined or null */
    require<T extends Record<any, any>>(obj: T, errorMessage?: string): { [P in keyof T]?: string; } | null;
    /** If conditions aren't met, will result it errors specified */
    test<K extends Record<any, string>>(condition: any, obj: K): Partial<K> | null;
    /** Ignores undefined/null values — checks if the value of each key is a specified type */
    type<T extends Record<any, any>>(obj: T, typing: { [K in keyof T]: Type; } | Type): { [P in keyof T]?: string; } | null;
    /** Ignores undefined/null values — if value(s) does not match, will result in error. */
    match<T extends Record<any, any>>(obj: T, regex: Record<keyof T, RegExp> | RegExp, errorMsg: string): { [P in keyof T]?: string; } | null;
};
export {};
