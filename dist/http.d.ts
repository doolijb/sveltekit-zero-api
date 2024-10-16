interface Options {
    body?: any;
    headers?: Record<any, any>;
    /** `content-type`, default value: If body is an object "application/json", otherwise "text/plain;charset=UTF-8" */
    contentType?: string;
}
type SimplifyResponse<T, Status, Ok> = Simplify<DeepWriteable<{
    status: Status;
    ok: Ok;
} & (T extends {
    body: any;
} ? T : T & {
    body: undefined;
})>>;
export type CreateResponse<K extends Readonly<keyof StatusText>, Status extends number, OK extends boolean, T extends Record<any, any>> = APIResponse<{
    [Key in K]: () => SimplifyResponse<T, Status, OK>;
}> | GeneralResponse<K, Status, OK, T>;
type GeneralResponse<K extends Readonly<keyof StatusText>, Status extends Readonly<number>, OK extends Readonly<boolean>, T extends Record<any, any>> = APIResponse<{
    [Property in StatusClass[K]]: () => SimplifyResponse<T, Status, OK>;
}>;
export declare const 
/** [100 Continue](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100) — indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished. */
Continue: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Continue: () => Simplify<Simplify<{
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 100;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Continue", 100, false, T>;
    kitResponse: boolean;
}, 
/** [101 Switching Protocols](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) — indicates a protocol to which the server switches. The protocol is specified in the [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header received from a client. */
SwitchingProtocols: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        SwitchingProtocols: () => Simplify<Simplify<{
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 101;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"SwitchingProtocols", 101, false, T>;
    kitResponse: boolean;
}, 
/** [102 Processing](https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-102-status-code/) — An interim response used to inform the client that the server has accepted the complete request but has not yet completed it. */
Processing: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Processing: () => Simplify<Simplify<{
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 102;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Processing", 102, false, T>;
    kitResponse: boolean;
}, 
/** [103 Early Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103) — is primarily intended to be used with the [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header to allow the user agent to start preloading resources while the server is still preparing a response. */
EarlyHints: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        EarlyHints: () => Simplify<Simplify<{
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 103;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"EarlyHints", 103, false, T>;
    kitResponse: boolean;
}, 
/** [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) — indicates that the request has succeeded. A 200 response is cacheable by default. */
Ok: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Ok: () => Simplify<Simplify<{
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 200;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Ok", 200, true, T>;
    kitResponse: boolean;
}, 
/** [201 Created](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) — indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the [Location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) header. */
Created: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Created: () => Simplify<Simplify<{
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 201;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Created", 201, true, T>;
    kitResponse: boolean;
}, 
/** [202 Accepted](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202) — indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. */
Accepted: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Accepted: () => Simplify<Simplify<{
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 202;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Accepted", 202, true, T>;
    kitResponse: boolean;
}, 
/** [203 Non-Authoritative Information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203) — indicates that the request was successful but the enclosed payload has been modified by a transforming [proxy](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server) from that of the origin server's [200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) (OK) response. */
NonAuthoritativeInformation: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NonAuthoritativeInformation: () => Simplify<Simplify<{
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 203;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NonAuthoritativeInformation", 203, true, T>;
    kitResponse: boolean;
}, 
/** [204 No Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) — indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page. */
NoContent: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NoContent: () => Simplify<Simplify<{
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 204;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NoContent", 204, true, T>;
    kitResponse: boolean;
}, 
/** [205 Reset Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205) — tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI. */
ResetContent: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        ResetContent: () => Simplify<Simplify<{
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 205;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"ResetContent", 205, true, T>;
    kitResponse: boolean;
}, 
/** [206 Partial Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206) — indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request. */
PartialContent: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PartialContent: () => Simplify<Simplify<{
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 206;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PartialContent", 206, true, T>;
    kitResponse: boolean;
}, 
/** [207 Mutli-Status](https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-207-status-code/) — conveys information about multiple resources in situations where multiple status codes might be appropriate. */
MultiStatus: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        MultiStatus: () => Simplify<Simplify<{
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 207;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"MultiStatus", 207, true, T>;
    kitResponse: boolean;
}, 
/** [208 Already Reported](https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-208-status-code/) — Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly. */
AlreadyReported: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        AlreadyReported: () => Simplify<Simplify<{
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 208;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"AlreadyReported", 208, true, T>;
    kitResponse: boolean;
}, 
/** [226 IM Used](https://www.webfx.com/web-development/glossary/http-status-codes/what-is-a-226-status-code/) — The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
IMUsed: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        IMUsed: () => Simplify<Simplify<{
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 226;
            ok: true;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"IMUsed", 226, true, T>;
    kitResponse: boolean;
}, 
/** [300 Multiple Choices](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300) — indicates that the request has more than one possible responses. The user-agent or user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used. */
MultipleChoices: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        MultipleChoices: () => Simplify<Simplify<{
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 300;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"MultipleChoices", 300, false, T>;
    kitResponse: boolean;
}, 
/** [301 Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) — indicates that the resource has been moved permanently to a new location, and that future references should use a new URI with their requests. */
MovedPermanently: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        MovedPermanently: () => Simplify<Simplify<{
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 301;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"MovedPermanently", 301, false, T>;
    kitResponse: boolean;
}, 
/** [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) — indicates that the resource has been moved temporarily to a different location, but that future references should still use the original URI to access the resource. */
Found: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Found: () => Simplify<Simplify<{
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 302;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Found", 302, false, T>;
    kitResponse: boolean;
}, 
/** [303 See Other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303) — indicates that the response to the request can be found under a different URI. */
SeeOther: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        SeeOther: () => Simplify<Simplify<{
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 303;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"SeeOther", 303, false, T>;
    kitResponse: boolean;
}, 
/** [304 Not Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) — indicates that the request has not been modified since the last request. */
NotModified: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NotModified: () => Simplify<Simplify<{
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 304;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NotModified", 304, false, T>;
    kitResponse: boolean;
}, 
/** [307 Temporary Redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307) — indicates that the resource is located temporarily under a different URI. Since the redirection might be altered on occasion, the client should continue to use the original effective request URI for future requests. */
TemporaryRedirect: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        TemporaryRedirect: () => Simplify<Simplify<{
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 307;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"TemporaryRedirect", 307, false, T>;
    kitResponse: boolean;
}, 
/** [308 Permanent Redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308) — indicates that the resource has been moved permanently to a new location, and that future references should use a new URI with their requests. */
PermanentRedirect: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PermanentRedirect: () => Simplify<Simplify<{
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 308;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PermanentRedirect", 308, false, T>;
    kitResponse: boolean;
}, 
/** [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) — indicates that the server cannot or will not process the request due to an apparent client error. */
BadRequest: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        BadRequest: () => Simplify<Simplify<{
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 400;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"BadRequest", 400, false, T>;
    kitResponse: boolean;
}, 
/** [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) — indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. */
Unauthorized: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Unauthorized: () => Simplify<Simplify<{
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 401;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Unauthorized", 401, false, T>;
    kitResponse: boolean;
}, 
/** [402 Payment Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) — is reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. */
PaymentRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PaymentRequired: () => Simplify<Simplify<{
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 402;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PaymentRequired", 402, false, T>;
    kitResponse: boolean;
}, 
/** [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) — indicates that the server understood the request but refuses to authorize it. */
Forbidden: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Forbidden: () => Simplify<Simplify<{
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 403;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Forbidden", 403, false, T>;
    kitResponse: boolean;
}, 
/** [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) — indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists. */
NotFound: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NotFound: () => Simplify<Simplify<{
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 404;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NotFound", 404, false, T>;
    kitResponse: boolean;
}, 
/** [405 Method Not Allowed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405) — indicates that the method received in the request-line is known by the origin server but not supported by the target resource. */
MethodNotAllowed: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        MethodNotAllowed: () => Simplify<Simplify<{
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 405;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"MethodNotAllowed", 405, false, T>;
    kitResponse: boolean;
}, 
/** [406 Not Acceptable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406) — indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) headers, and that the server is unwilling to supply a default representation. */
NotAcceptable: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NotAcceptable: () => Simplify<Simplify<{
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 406;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NotAcceptable", 406, false, T>;
    kitResponse: boolean;
}, 
/** [407 Proxy Authentication Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407) — indicates that the client needs to authenticate itself in order to use a [proxy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers). */
ProxyAuthenticationRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        ProxyAuthenticationRequired: () => Simplify<Simplify<{
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 407;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"ProxyAuthenticationRequired", 407, false, T>;
    kitResponse: boolean;
}, 
/** [408 Request Timeout](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) — indicates that the server did not receive a complete request message within the time that it was prepared to wait. */
RequestTimeout: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        RequestTimeout: () => Simplify<Simplify<{
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 408;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"RequestTimeout", 408, false, T>;
    kitResponse: boolean;
}, 
/** [409 Conflict](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) — indicates that the request could not be completed due to a conflict with the current state of the target resource. */
Conflict: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Conflict: () => Simplify<Simplify<{
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 409;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Conflict", 409, false, T>;
    kitResponse: boolean;
}, 
/** [410 Gone](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) — indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent. */
Gone: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Gone: () => Simplify<Simplify<{
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 410;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Gone", 410, false, T>;
    kitResponse: boolean;
}, 
/** [411 Length Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411) — indicates that the server refuses to accept the request without a defined [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length). */
LengthRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        LengthRequired: () => Simplify<Simplify<{
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 411;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"LengthRequired", 411, false, T>;
    kitResponse: boolean;
}, 
/** [412 Precondition Failed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) — indicates that one or more conditions given in the request header fields evaluated to false when tested on the server. */
PreconditionFailed: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PreconditionFailed: () => Simplify<Simplify<{
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 412;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PreconditionFailed", 412, false, T>;
    kitResponse: boolean;
}, 
/** [413 Payload Too Large](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413) — indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process. */
PayloadTooLarge: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PayloadTooLarge: () => Simplify<Simplify<{
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 413;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PayloadTooLarge", 413, false, T>;
    kitResponse: boolean;
}, 
/** [414 URI Too Long](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414) — indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret. */
URITooLong: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        URITooLong: () => Simplify<Simplify<{
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 414;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"URITooLong", 414, false, T>;
    kitResponse: boolean;
}, 
/** [415 Unsupported Media Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) — indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource. */
UnsupportedMediaType: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        UnsupportedMediaType: () => Simplify<Simplify<{
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 415;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"UnsupportedMediaType", 415, false, T>;
    kitResponse: boolean;
}, 
/** [416 Range Not Satisfiable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416) — indicates that none of the ranges in the request's [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header field (Section 14.35 of [RFC7233](https://tools.ietf.org/html/rfc7233)) overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges. */
RangeNotSatisfiable: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        RangeNotSatisfiable: () => Simplify<Simplify<{
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 416;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"RangeNotSatisfiable", 416, false, T>;
    kitResponse: boolean;
}, 
/** [417 Expectation Failed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417) — indicates that the expectation given in the request's [Expect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect) header field (Section 5.1.1 of [RFC7231](https://tools.ietf.org/html/rfc7231)) could not be met by at least one of the inbound servers. */
ExpectationFailed: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        ExpectationFailed: () => Simplify<Simplify<{
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 417;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"ExpectationFailed", 417, false, T>;
    kitResponse: boolean;
}, 
/** [418 I'm a teapot](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) — indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014. */
ImATeapot: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        ImATeapot: () => Simplify<Simplify<{
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 418;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"ImATeapot", 418, false, T>;
    kitResponse: boolean;
}, 
/** [421 Misdirected Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421) — indicates that the request was directed at a server that is not able to produce a response. */
MisdirectedRequest: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        MisdirectedRequest: () => Simplify<Simplify<{
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 421;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"MisdirectedRequest", 421, false, T>;
    kitResponse: boolean;
}, 
/** [422 Unprocessable Entity](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) — indicates that the server understands the content type of the request entity (hence a [415](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) [Unsupported Media Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) status code is inappropriate), and the syntax of the request entity is correct (thus a [400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) [Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) status code is inappropriate) but was unable to process the contained instructions. */
UnprocessableEntity: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        UnprocessableEntity: () => Simplify<Simplify<{
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 422;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"UnprocessableEntity", 422, false, T>;
    kitResponse: boolean;
}, 
/** [423 Locked](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423) — indicates that the access to the target resource is denied. */
Locked: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        Locked: () => Simplify<Simplify<{
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 423;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"Locked", 423, false, T>;
    kitResponse: boolean;
}, 
/** [424 Failed Dependency](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424) — indicates that the method could not be performed on the resource because the requested action depended on another action and that action failed. */
FailedDependency: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        FailedDependency: () => Simplify<Simplify<{
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 424;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"FailedDependency", 424, false, T>;
    kitResponse: boolean;
}, 
/** [425 Too Early](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425) — indicates that the server is unwilling to risk processing a request that might be replayed. */
TooEarly: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        TooEarly: () => Simplify<Simplify<{
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 425;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"TooEarly", 425, false, T>;
    kitResponse: boolean;
}, 
/** [426 Upgrade Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426) — indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header field in a 426 response to indicate the required protocol(s). */
UpgradeRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        UpgradeRequired: () => Simplify<Simplify<{
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 426;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"UpgradeRequired", 426, false, T>;
    kitResponse: boolean;
}, 
/** [428 Precondition Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428) — indicates that the origin server requires the request to be conditional. */
PreconditionRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        PreconditionRequired: () => Simplify<Simplify<{
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 428;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"PreconditionRequired", 428, false, T>;
    kitResponse: boolean;
}, 
/** [429 Too Many Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) — indicates that the user has sent too many requests in a given amount of time ("rate limiting"). */
TooManyRequests: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        TooManyRequests: () => Simplify<Simplify<{
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 429;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"TooManyRequests", 429, false, T>;
    kitResponse: boolean;
}, 
/** [431 Request Header Fields Too Large](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431) — indicates that the server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields. */
RequestHeaderFieldsTooLarge: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        RequestHeaderFieldsTooLarge: () => Simplify<Simplify<{
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 431;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"RequestHeaderFieldsTooLarge", 431, false, T>;
    kitResponse: boolean;
}, 
/** [451 Unavailable For Legal Reasons](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451) — indicates that the user requested a resource that is not available for legal reasons, such as a web page censored by a government. */
UnavailableForLegalReasons: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        UnavailableForLegalReasons: () => Simplify<Simplify<{
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 451;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"UnavailableForLegalReasons", 451, false, T>;
    kitResponse: boolean;
}, 
/** [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) — indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. */
InternalServerError: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        InternalServerError: () => Simplify<Simplify<{
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 500;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"InternalServerError", 500, false, T>;
    kitResponse: boolean;
}, 
/** [501 Not Implemented](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501) — indicates that the server does not support the functionality required to fulfill the request. */
NotImplemented: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NotImplemented: () => Simplify<Simplify<{
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 501;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NotImplemented", 501, false, T>;
    kitResponse: boolean;
}, 
/** [502 Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) — indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request. */
BadGateway: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        BadGateway: () => Simplify<Simplify<{
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 502;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"BadGateway", 502, false, T>;
    kitResponse: boolean;
}, 
/** [503 Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) — indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. */
ServiceUnavailable: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        ServiceUnavailable: () => Simplify<Simplify<{
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 503;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"ServiceUnavailable", 503, false, T>;
    kitResponse: boolean;
}, 
/** [504 Gateway Timeout](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) — indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) or [FTP](https://developer.mozilla.org/en-US/docs/Glossary/FTP)) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request. */
GatewayTimeout: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        GatewayTimeout: () => Simplify<Simplify<{
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 504;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"GatewayTimeout", 504, false, T>;
    kitResponse: boolean;
}, 
/** [505 HTTP Version Not Supported](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505) — indicates that the server does not support, or refuses to support, the [HTTP protocol](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) version that was used in the request message. */
HTTPVersionNotSupported: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        HTTPVersionNotSupported: () => Simplify<Simplify<{
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 505;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"HTTPVersionNotSupported", 505, false, T>;
    kitResponse: boolean;
}, 
/** [506 Variant Also Negotiates](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506) — indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process. */
VariantAlsoNegotiates: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        VariantAlsoNegotiates: () => Simplify<Simplify<{
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 506;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"VariantAlsoNegotiates", 506, false, T>;
    kitResponse: boolean;
}, 
/** [507 Insufficient Storage](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507) — indicates that the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. */
InsufficientStorage: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        InsufficientStorage: () => Simplify<Simplify<{
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 507;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"InsufficientStorage", 507, false, T>;
    kitResponse: boolean;
}, 
/** [508 Loop Detected](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508) — indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed. */
LoopDetected: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        LoopDetected: () => Simplify<Simplify<{
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 508;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"LoopDetected", 508, false, T>;
    kitResponse: boolean;
}, 
/** [510 Not Extended](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510) — indicates that further extensions to the request are required for the server to fulfill it. */
NotExtended: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NotExtended: () => Simplify<Simplify<{
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 510;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NotExtended", 510, false, T>;
    kitResponse: boolean;
}, 
/** [511 Network Authentication Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511) — indicates that the client needs to authenticate to gain network access. */
NetworkAuthenticationRequired: {
    <const T extends Options = {}>(obj?: T | undefined): APIResponse<{
        NetworkAuthenticationRequired: () => Simplify<Simplify<{
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }) extends infer T_1 ? { -readonly [P in keyof T_1]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P] extends infer T_2 ? { -readonly [P_1 in keyof T_2]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1] extends infer T_3 ? { -readonly [P_2 in keyof T_3]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2] extends infer T_4 ? { -readonly [P_3 in keyof T_4]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3] extends infer T_5 ? { -readonly [P_4 in keyof T_5]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4] extends infer T_6 ? { -readonly [P_5 in keyof T_6]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5] extends infer T_7 ? { -readonly [P_6 in keyof T_7]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6] extends infer T_8 ? { -readonly [P_7 in keyof T_8]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7] extends infer T_9 ? { -readonly [P_8 in keyof T_9]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8] extends infer T_10 ? { -readonly [P_9 in keyof T_10]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends object ? Simplify<({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9] extends infer T_11 ? { -readonly [P_10 in keyof T_11]: ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10] extends object ? Simplify<any, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9][P_10]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8][P_9]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7][P_8]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6][P_7]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5][P_6]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4][P_5]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3][P_4]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2][P_3]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1][P_2]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P][P_1]; } : never, {}> : ({
            status: 511;
            ok: false;
        } & (T extends {
            body: any;
        } ? T : T & {
            body: undefined;
        }))[P]; } : never, {}>, {}>;
    }> | GeneralResponse<"NetworkAuthenticationRequired", 511, false, T>;
    kitResponse: boolean;
};
export type KitResponseFnInformational = typeof Continue | typeof SwitchingProtocols | typeof Processing | typeof EarlyHints;
export type KitResponseFnSuccess = typeof Ok | typeof Created | typeof Accepted | typeof NonAuthoritativeInformation | typeof NoContent | typeof ResetContent | typeof PartialContent | typeof MultiStatus | typeof AlreadyReported | typeof IMUsed;
export type KitResponseFnRedirection = typeof MultipleChoices | typeof MovedPermanently | typeof Found | typeof SeeOther | typeof NotModified | typeof TemporaryRedirect | typeof PermanentRedirect;
export type KitResponseFnClientError = typeof BadRequest | typeof Unauthorized | typeof PaymentRequired | typeof Forbidden | typeof NotFound | typeof MethodNotAllowed | typeof NotAcceptable | typeof ProxyAuthenticationRequired | typeof RequestTimeout | typeof Conflict | typeof Gone | typeof LengthRequired | typeof PreconditionFailed | typeof PayloadTooLarge | typeof URITooLong | typeof UnsupportedMediaType | typeof RangeNotSatisfiable | typeof ExpectationFailed | typeof ImATeapot | typeof MisdirectedRequest | typeof UnprocessableEntity | typeof Locked | typeof FailedDependency | typeof TooEarly | typeof UpgradeRequired | typeof PreconditionRequired | typeof TooManyRequests | typeof RequestHeaderFieldsTooLarge | typeof UnavailableForLegalReasons;
export type KitResponseFnServerError = typeof InternalServerError | typeof NotImplemented | typeof BadGateway | typeof ServiceUnavailable | typeof GatewayTimeout | typeof HTTPVersionNotSupported | typeof VariantAlsoNegotiates | typeof InsufficientStorage | typeof LoopDetected | typeof NotExtended | typeof NetworkAuthenticationRequired;
export type KitResponseFn = KitResponseFnInformational | KitResponseFnSuccess | KitResponseFnRedirection | KitResponseFnClientError | KitResponseFnServerError;
export {};
