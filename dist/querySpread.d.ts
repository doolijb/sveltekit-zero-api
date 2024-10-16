import type { InferAPI } from './types/zeroapi';
type formattedValues = string | number | boolean | null | undefined | any[];
type DetermineValueTypes<T extends Record<any, any>> = {
    [K in keyof T]: T[K] extends Date ? Date : T[K] extends Record<any, any> ? DetermineValueTypes<T[K]> : T[K] extends formattedValues ? T[K] : string;
};
type AllStrings<T extends Record<any, any>> = {
    [K in keyof T]: T[K] extends Date ? string : T[K] extends Record<any, any> ? AllStrings<T[K]> : T[K] extends any[] ? string[] : string;
};
/**
 * Determination rules:
 * ```ts
 * "abc"       => "abc"
 * "123.12"    => 123.12      // Only contains numbers
 * "$123.123"  => "$123.123"  // NaN
 * "123.12.12" => "123.12.12" // NaN
 * "true"      => true
 * "TRUE"      => "TRUE"      // Booleans has to be lowercase
 * "false"     => false
 * "undefined" => undefined
 * "null"      => null
 * "NULL"      => "NULL"      // `null` and `undefined` has to be lowercase
 * "{...}":    => {...}
 * "[...]"     => [...]
 * "2022-05-06T22:15:11.244Z" => new Date("2022-05-06T22:15:11.244Z") // Only accepts ISO-date strings (i.e. `new Date().toISOString()`)
 * '"2022-05-06T22:15:11.244Z"' => new Date("2022-05-06T22:15:11.244Z") // Has quotes around the ISO-string (from `new Date()`)
 * ```
*/
export declare function querySpread<T>(event: T): InferAPI<T> extends {
    query?: infer Q;
} ? Q extends Record<any, any> ? DetermineValueTypes<Q> : Record<any, any> : Record<any, any>;
export declare function querySpread<T, B extends boolean>(event: T, formatTypes: B): InferAPI<T> extends {
    query?: infer Q;
} ? Q extends Record<any, any> ? B extends true | null | undefined ? DetermineValueTypes<Q> : AllStrings<Q> : Record<any, any> : Record<any, any>;
export default querySpread;
