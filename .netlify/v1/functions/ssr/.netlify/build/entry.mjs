import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0H5EbCSp.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_t46AP-Mh.mjs');
const _page1 = () => import('./chunks/keystatic-api_DF1PmeIQ.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_DciLwmqy.mjs');
const _page3 = () => import('./chunks/404_C6MNXXH5.mjs');
const _page4 = () => import('./chunks/_slug__DqRcEjf3.mjs');
const _page5 = () => import('./chunks/index_Cy24Hf6i.mjs');
const _page6 = () => import('./chunks/robots_CqDVHLz-.mjs');
const _page7 = () => import('./chunks/rss_DmqtjaJF.mjs');
const _page8 = () => import('./chunks/_slug__ed-8YvmM.mjs');
const _page9 = () => import('./chunks/index_CBt6cxKj.mjs');
const _page10 = () => import('./chunks/_regular__BPCo_i8A.mjs');
const _page11 = () => import('./chunks/index_DH_1f5Rk.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["src/pages/posts/index.astro", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/stories/[slug].astro", _page8],
    ["src/pages/stories/index.astro", _page9],
    ["src/pages/[regular].astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "418d9f72-ed5c-4c33-8380-23c063667060"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
