/** Replaces `[` `/` `\` `]` `-` `:` `.` with `_` */
export declare const toValidVariable: (name?: string) => string;
/** When importing files: We don't add `.ts` in the import-statement */
export declare const pathToImportPath: (path?: string) => string;
