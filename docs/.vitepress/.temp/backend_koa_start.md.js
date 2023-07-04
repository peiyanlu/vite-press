import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"开始","description":"开始","frontmatter":{"title":"开始","description":"开始","category":"koa","tags":["Koa"]},"headers":[],"relativePath":"backend/koa/start.md","filePath":"backend/koa/start.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "backend/koa/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="koa" tabindex="-1">Koa <a class="header-anchor" href="#koa" aria-label="Permalink to &quot;Koa&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/koa/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
