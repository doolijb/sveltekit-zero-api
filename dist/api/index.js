import handler from './handler.js';
import keys from './keys.js';
const endpoints = [
    'GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'
];
// TODO: I feel like this could be optimized to not check for the keys,
// but I can't figure out how to rn :(
const apiKeys = Object.keys(keys).reduce((previous, current) => ({ ...previous, [current]: (...args) => emptyProxy }), {});
const emptyProxy = new Proxy({}, {
    get: function (target, prop) {
        if (prop === '$' || prop === '_')
            return emptyProxy;
        let k = apiKeys[prop];
        if (k)
            return k;
        return target[prop];
    }
});
export function createZeroApi(config) {
    function createDirectory(directory) {
        let route = ''; // Set in Proxy
        /** api.users.user$(id). */
        function handleDirectory() {
            const isSlug = route.match(/\$$/g);
            if (isSlug)
                return function sluggedRoute(slug) {
                    return createDirectory({ path: directory.path + '/' + slug });
                };
            directory[route] = createDirectory({ path: directory.path + '/' + route });
            return directory[route];
        }
        /** api.users.post({ body: {...} }) */
        function handleEndpoint() {
            const method = route.toUpperCase();
            const path = directory.path;
            directory[route] = (contents, _fetch = null) => {
                if (_fetch == null && typeof document === 'undefined')
                    return emptyProxy;
                return handler({ config, path, fetch: _fetch || fetch }, { method, headers: {}, ...contents });
            };
            return directory[route];
        }
        return new Proxy(directory, {
            get(directory, _route) {
                route = _route;
                if (directory[route])
                    return directory[route];
                if (endpoints.includes(route))
                    return handleEndpoint();
                return handleDirectory();
            }
        });
    }
    return createDirectory({ path: '' });
}
