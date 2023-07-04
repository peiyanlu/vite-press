import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"快速开始","description":"rollup","frontmatter":{"title":"快速开始","description":"rollup","category":"rollup","tags":["rollup","doc"],"order":0,"ignore":false},"headers":[],"relativePath":"frontend/build/rollup/quickstart.md","filePath":"frontend/build/rollup/quickstart.md","lastUpdated":1687100895000}');
const _sfc_main = { name: "frontend/build/rollup/quickstart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1><h2 id="format" tabindex="-1">format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format&quot;">​</a></h2><ul><li><p><code>amd</code>：异步模块加载，适用于 <code>RequireJS</code> 等模块加载器</p></li><li><p><code>cjs</code>：<code>CommonJS</code>，适用于 <code>Node</code> 环境和其他打包工具（别名：<code>commonjs</code>）</p></li><li><p><code>es</code>：将 <code>bundle</code> 保留为 <code>ES</code> 模块文件，适用于其他打包工具，以及支持 <code>&lt;script type=module&gt;</code> 标签的浏览器。（别名：<code>esm</code>，<code>module</code>）</p></li><li><p><code>iife</code>：自执行函数，适用于 <code>&lt;script&gt;</code> 标签（如果你想为你的应用程序创建 <code>bundle</code>，那么你可能会使用它）。<code>iife</code> 表示 “自执行 函数表达式”</p></li><li><p><code>umd</code>：通用模块定义规范，同时支持 <code>amd</code>，<code>cjs</code> 和 <code>iife</code></p></li><li><p><code>system</code>：<code>SystemJS</code> 模块加载器的原生格式（别名：<code>systemjs</code>）</p></li></ul><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><table><thead><tr><th>插件</th><th>用途</th></tr></thead><tbody><tr><td>@rollup/plugin-node-resolve</td><td>rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入</td></tr><tr><td>@rollup/plugin-commonjs</td><td>将 CommonJS 模块转换为 ES6 供 rollup 处理</td></tr><tr><td>@rollup/plugin-babel</td><td>ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码</td></tr><tr><td>@rollup/plugin-eslint</td><td>js代码检测</td></tr><tr><td>@rollup/plugin-require-context</td><td>使用 require.context 语法</td></tr><tr><td>@rollup/plugin-alias</td><td>设置别名，比如将 src 目录设置别名为 @</td></tr><tr><td>@rollup/plugin-terser</td><td>压缩 js 代码，包括 ES6 代码压缩</td></tr><tr><td>rollup-plugin-cleanup</td><td>去除注释等无效代码</td></tr></tbody></table><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><p><a href="hhttps://rollupjs.org/guide/zh/#introduction" target="_blank" rel="noreferrer">rollup官方文档</a></p><p><a href="https://github.com/rollup/plugins/tree/master/packages" target="_blank" rel="noreferrer">rollup官方插件</a></p><p><a href="https://www.babeljs.cn/docs/usage" target="_blank" rel="noreferrer">babel官方文档</a></p><p><a href="https://xiaogliu.github.io/2019/07/24/rollup-config/" target="_blank" rel="noreferrer">Rollup 配置（Babel7）</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/build/rollup/quickstart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickstart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickstart as default
};
