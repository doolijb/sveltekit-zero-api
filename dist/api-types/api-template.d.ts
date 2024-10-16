declare const _default: "import { createZeroApi } from 'sveltekit-zero-api/api'\nimport type { GeneratedAPI } from './sveltekit-zero-api'\n\nconst routes = createZeroApi({\n\tonError: async (err) => console.error('[API]', err)\n}) as GeneratedAPI\n\nexport default routes.api";
export default _default;
