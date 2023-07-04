import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"正则应用","description":"正则使用记录","frontmatter":{"title":"正则应用","description":"正则使用记录","category":"regex","tags":["Regex"]},"headers":[],"relativePath":"frontend/regex/use.md","filePath":"frontend/regex/use.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/regex/use.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="正则表达式-应用" tabindex="-1">正则表达式 应用 <a class="header-anchor" href="#正则表达式-应用" aria-label="Permalink to &quot;正则表达式 应用&quot;">​</a></h1><p><a href="https://jex.im/regulex/" target="_blank" rel="noreferrer">Regulex</a></p><p><a href="https://any86.github.io/any-rule/" target="_blank" rel="noreferrer">any-rule</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/regex/use.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const use = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  use as default
};
