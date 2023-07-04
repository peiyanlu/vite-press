import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"问题记录","description":"npm遇到的各种牛鬼蛇神","frontmatter":{"title":"问题记录","description":"npm遇到的各种牛鬼蛇神","category":"npm","tags":["npm","FAQ"],"order":99},"headers":[],"relativePath":"frontend/npm/FAQ.md","filePath":"frontend/npm/FAQ.md","lastUpdated":1687165942000}');
const _sfc_main = { name: "frontend/npm/FAQ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1><h2 id="unable-to-authenticate-need-basic" tabindex="-1">Unable to authenticate, need: BASIC <a class="header-anchor" href="#unable-to-authenticate-need-basic" aria-label="Permalink to &quot;Unable to authenticate, need: BASIC&quot;">​</a></h2><p><strong>问题</strong>：登录公司私有仓库时，发现正确输入账号密码依然报错：<code>Unable to authenticate, need: BASIC realm=&quot;Sonatype Nexus Repository Manager&quot;</code></p><p><strong>解决</strong>：打开 <code>npm</code> 配置文件（<code>C:\\Users\\username\\.npmrc</code>），找到类似下面的内容，删掉 <code>auth</code> 相关内容，然后再次登录账号和密码</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">registry=https://registry.npmjs.org/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">scripts-prepend-node-path=true</span></span>
<span class="line diff remove"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">//nexus.simulate.com/repository/npm-hosted/:_authToken=NpmToken.af7603db-9aee-3d5c-8016-d4c835b43542  </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/npm/FAQ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  FAQ as default
};
