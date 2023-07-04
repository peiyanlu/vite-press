import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"构建TS库","description":"用vite构建一个TS编写的库","frontmatter":{"title":"构建TS库","description":"用vite构建一个TS编写的库","category":"vite","tags":["vite","ts"]},"headers":[],"relativePath":"frontend/build/vite/ts.md","filePath":"frontend/build/vite/ts.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/build/vite/ts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">create</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">vite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">√ Project name: ... helper</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">√ Select a framework: » Others</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">√ Select a variant: » create-vite-extra ↗</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">√ Select a template: » library</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">√ Select a variant: » TypeScript</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/build/vite/ts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ts as default
};
