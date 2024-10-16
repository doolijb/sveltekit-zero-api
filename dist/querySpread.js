function isObject(str) {
    return (str.startsWith('{') && str.endsWith('}')) || (str.startsWith('[') && str.endsWith(']'));
}
export function querySpread(event, formatTypes) {
    let obj = {};
    for (const [key, value] of event.url.searchParams.entries())
        obj[key] = formatTypes === undefined || formatTypes === true || formatTypes === null ? determine(value) : value;
    return obj;
}
function determine(value) {
    if (value === 'undefined')
        return undefined;
    if (value === 'null')
        return null;
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    if (isObject(value))
        return JSON.parse(value);
    if (!Number.isNaN(Number(value)))
        return Number(value);
    if (value.match(/^"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z"$/))
        return new Date(value.replace(/^"|"$/g, ''));
    if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))
        return new Date(value);
    return value;
}
export default querySpread;
