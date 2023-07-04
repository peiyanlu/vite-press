import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"CLI","description":"npm命令行","frontmatter":{"title":"CLI","description":"npm命令行","category":"npm","tags":["NPM","CLI"]},"headers":[],"relativePath":"frontend/npm/cli.md","filePath":"frontend/npm/cli.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/npm/cli.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="npm-cli" tabindex="-1">NPM CLI <a class="header-anchor" href="#npm-cli" aria-label="Permalink to &quot;NPM CLI&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/npm/cli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cli = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cli as default
};
