
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Calculadora/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 647, hash: 'e3d0ae2ce659671dfd965cccc3b6a3e7f7c9dc73a8fe235c8eec3499ac9946a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '8e6a06532c2cf05850c0f9ed591b8f77da6c769e1908e6e52be46bcccef9016c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-23LTIKNK.css': {size: 74, hash: 'jWBLMJ17v/c', text: () => import('./assets-chunks/styles-23LTIKNK_css.mjs').then(m => m.default)}
  },
};
