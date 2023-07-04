import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"权重","description":"CSS选择器的权重","frontmatter":{"title":"权重","description":"CSS选择器的权重","category":"css","tags":["weight","css"]},"headers":[],"relativePath":"frontend/css/weight.md","filePath":"frontend/css/weight.md","lastUpdated":1687610515000}');
const _sfc_main = { name: "frontend/css/weight.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css选择器权重" tabindex="-1">CSS选择器权重 <a class="header-anchor" href="#css选择器权重" aria-label="Permalink to &quot;CSS选择器权重&quot;">​</a></h1><h2 id="权重值" tabindex="-1">权重值 <a class="header-anchor" href="#权重值" aria-label="Permalink to &quot;权重值&quot;">​</a></h2><ol><li><p>最高：<code>!important</code></p></li><li><p>第一：内联样式，权重值：<code>1000</code></p></li><li><p>第二：ID选择器，权重值：<code>0100</code></p></li><li><p>第三：类、伪类、属性选择器，权重值：<code>0010</code></p></li><li><p>第四：元素、伪元素选择器，权重值：<code>0001</code></p></li><li><p>第五：通配符、子选择器、相邻选择器、兄弟选择器、继承样式，权重值：<code>0000</code></p></li></ol><h2 id="权重计算" tabindex="-1">权重计算 <a class="header-anchor" href="#权重计算" aria-label="Permalink to &quot;权重计算&quot;">​</a></h2><ul><li><p><code>CSS</code> 自上而下执行，同权重的情况下后面的样式覆盖前面的样式</p></li><li><p>带有上下文关系的选择器比单纯的元素选择器权重要高</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/weight.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const weight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  weight as default
};
