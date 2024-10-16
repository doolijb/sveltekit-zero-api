/// <reference path="./types/statuscodes.d.ts" />
import * as HTTP from './http.js';
export const err = {
    handler(...args) {
        let errors = args.reverse().reduce((obj, current) => {
            if (current == null || current == undefined)
                return obj;
            return { ...obj, ...current };
        }, {});
        if (Object.keys(errors).length == 0)
            return null;
        return (response, options, message) => {
            const o = {
                body: {
                    errors: {
                        ...errors,
                        ...(options?.body?.errors || {})
                    },
                    message
                }
            };
            return HTTP[response](o);
        };
    },
    /** Results in error if value(s) are undefined or null */
    require(obj, errorMessage = 'Required') {
        let errors = {};
        for (let [key, value] of Object.entries(obj))
            if (value === undefined || value === null)
                errors[key] = errorMessage;
        return Object.keys(errors).length > 0 ? errors : null;
    },
    /** If conditions aren't met, will result it errors specified */
    test(condition, obj) {
        if (!condition)
            return obj;
        return null;
    },
    /** Ignores undefined/null values — checks if the value of each key is a specified type */
    type(obj, typing) {
        let errors = {};
        if (typeof typing === 'string') {
            for (let [key, value] of Object.entries(obj)) {
                if (value !== undefined && value !== null && typeof value !== typing)
                    errors[key] = `Is not a '${typing}'`;
            }
        }
        else {
            for (let [key, type] of Object.entries(typing)) {
                if (typeof obj[key] !== type)
                    errors[key] = `Is not a '${type}'`;
            }
        }
        return Object.keys(errors).length > 0 ? errors : null;
    },
    /** Ignores undefined/null values — if value(s) does not match, will result in error. */
    match(obj, regex, errorMsg) {
        let errors = {};
        if (regex instanceof RegExp) {
            for (let [key, value] of Object.entries(obj)) {
                if (value !== undefined && !regex.test(value))
                    errors[key] = errorMsg;
            }
        }
        else {
            for (let [key, expression] of Object.entries(regex)) {
                if (obj[key] !== undefined && !expression.test(obj[key]))
                    errors[key] = errorMsg;
            }
        }
        return Object.keys(errors).length > 0 ? errors : null;
    }
};
