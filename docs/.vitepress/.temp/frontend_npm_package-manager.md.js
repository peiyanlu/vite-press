import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"包管理器","description":"目前最流行的三种包管理工具","frontmatter":{"title":"包管理器","description":"目前最流行的三种包管理工具","category":"npm","tags":["npm","yarn","pnpm","registry"]},"headers":[],"relativePath":"frontend/npm/package-manager.md","filePath":"frontend/npm/package-manager.md","lastUpdated":1686825126000}');
const _sfc_main = { name: "frontend/npm/package-manager.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1><h2 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h2><ul><li><p><code>NPM</code>：它是当今最广泛的 <code>JavaScript</code> 包管理工具，它开创了包管理标准，其开发者还维护了世界上最多人使用的分布式开源 <code>JavaScript</code> 包管理网站 <code>npmjs.com</code>。</p></li><li><p><code>Yarn</code>：它重新实现了 <code>NPM</code>, 与之相比，<code>Yarn</code> 具有相同的管理方式，但是安装速度更快，稳定性更好，而且提供了一些新特性（例如 <code>Yarn workspaces</code>），用于大型开发。</p></li><li><p><code>PNPM</code>：它提供了一个全新的包管理模式，该模式解决了<strong>幻影依赖</strong>和<strong>NPM 分身</strong>的问题，同时<strong>符号链接</strong>使之与 <code>NodeJS</code> 模块解析标准保持 <code>100%</code> 兼容。</p></li></ul><h2 id="依赖源" tabindex="-1">依赖源 <a class="header-anchor" href="#依赖源" aria-label="Permalink to &quot;依赖源&quot;">​</a></h2><ul><li><p><code>Yarn</code>：<code>https://registry.yarnpkg.com</code></p></li><li><p><code>TaoBao</code>：<code>https://registry.npmmirror.com</code></p></li><li><p><code>NPM</code>：<code>https://registry.npmjs.org</code></p></li></ul><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">// .npmrc</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">registry=https://registry.npmmirror.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">// 临时指定</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">pnpm add vite -D --registry=https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/npm/package-manager.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const packageManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  packageManager as default
};
