import keys from './keys.js';
function stringifyQuery(api) {
    // Each key in query, if it's an object, will be stringified
    for (const key of Object.keys(api.query)) {
        if (typeof api.query[key] === 'object')
            api.query[key] = JSON.stringify(api.query[key]);
    }
}
function setBody(options, api) {
    if (options.config.sendEmptyBodyAsJSON === false)
        return;
    if (api.method === 'GET' || api.method === 'HEAD')
        return;
    api.body = 'body' in api ? typeof api.body === 'object' && JSON.stringify(api.body) : '{}';
}
export default function handler(options, api) {
    const { fetch } = options;
    const stringifyQueryObjects = options.config.stringifyQueryObjects === undefined ? true : options.config.stringifyQueryObjects;
    if (stringifyQueryObjects && 'query' in api)
        stringifyQuery(api);
    const url = (options.config.baseUrl || '') + options.path + ('query' in api ? '?' + new URLSearchParams(api.query).toString() : '');
    const baseData = options.config.baseData || {};
    setBody(options, api);
    if (api.method === 'GET' && !('cache-control' in api.headers))
        api.headers['cache-control'] = 'public, max-age=604800, immutable';
    api.headers['x-requested-with'] = 'sveltekit-zero-api';
    const callbacks = [];
    // * $. callback handlers
    const $ = {
        callback: undefined,
        promise: undefined,
        resolve: undefined,
    };
    // Resolves the whole request
    let resolver;
    let promiser = new Promise(resolve => resolver = resolve);
    let fetchAPI = {
        ...callbackHandler((s, cb) => {
            callbacks.push([s, cb]);
            return proxy;
        }),
        ...promiser
    };
    fetchAPI['_'] = fetchAPI;
    fetchAPI['$'] = callbackHandler((s, cb) => {
        $.callback = [s, cb];
        $.promise = new Promise(resolve => $.resolve = resolve);
        $.promise.then(d => resolver(d));
        return promiser;
    });
    const requestInit = { ...baseData, ...api, headers: { ...(baseData['headers'] || {}), ...(api['headers'] || {}) } };
    if (api.body === undefined)
        delete requestInit['body'];
    // avoid making the "preflight http request", which will make it twice as fast
    const collapsedRequestInit = api.method === 'GET' ? undefined : requestInit;
    const response = fetch(url, collapsedRequestInit);
    response.then(async (res) => {
        const json = (res.headers.get('content-type') || '').includes('application/json') && await res[options.config.format || 'json']();
        // TODO: Handle other responses than just JSON
        // https://kit.svelte.dev/docs/web-standards#stream-apis
        const response = {
            body: json || res.body,
            bodyUsed: res.bodyUsed,
            clone: res.clone,
            headers: res.headers,
            ok: res.ok,
            redirected: res.redirected,
            status: res.status,
            statusText: res.statusText,
            type: res.type,
            url: res.url
        };
        if (!res.bodyUsed) {
            response.blob = res.blob;
            response.arrayBuffer = res.arrayBuffer;
            response.formData = res.formData;
            response.text = res.text;
            response.json = res.json;
        }
        respond(callbacks, response, options, $);
        if (!$.promise)
            resolver(response);
    });
    response.catch((err) => {
        if ('onError' in options.config)
            options.config.onError && options.config.onError(err);
        throw err;
    });
    const proxy = new Proxy(fetchAPI, {
        get(target, prop) {
            if (prop === 'then')
                return promiser.then.bind(promiser);
            if (prop === 'catch')
                return promiser.catch.bind(promiser);
            if (prop === 'finally')
                return promiser.finally.bind(promiser);
            return target[prop];
        }
    });
    return proxy;
}
function respond(callbacks, res, options, $) {
    let statusRange = Math.floor(res.status / 100);
    let responseError = statusRange === 4 || statusRange === 5;
    const validStatus = (code) => code === 0 || code === statusRange || code === res.status || (responseError && code === 45);
    const { prependCallbacks } = options.config;
    if (prependCallbacks) {
        let cbs = [];
        let prepender = callbackHandler((s, cb) => {
            cbs.push([s, cb]);
            return prepender;
        });
        prependCallbacks(prepender);
        callbacks = [...cbs, ...callbacks];
    }
    callbacks
        .filter(([code]) => validStatus(code))
        .forEach(([code, cb]) => { cb(res); });
    if ($.resolve && $.callback) {
        if (validStatus($.callback[0]))
            $.resolve($.callback[1](res));
        else
            $.resolve(undefined);
    }
    if ('onSuccess' in options.config)
        options.config.onSuccess && options.config.onSuccess(res);
}
function callbackHandler(handleCallback) {
    return Object.entries(keys).reduce((previous, [key, val]) => ({ ...previous, [key]: function (cb) { return handleCallback(val, cb); } }), {});
}
