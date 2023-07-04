import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, mergeProps, unref, useSSRContext, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString } from "vue";
import { u as useNamespace } from "./useNamespace.f2345c1b.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NthChild",
  __ssrInlineRender: true,
  setup(__props) {
    const ns = useNamespace("nth-child");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ns).b()
      }, _attrs))} data-v-f4588655><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<div class="${ssrRenderClass(unref(ns).e("item"))}" data-v-f4588655></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const NthChild_vue_vue_type_style_index_0_scoped_f4588655_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/components/NthChild.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NthChild = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f4588655"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TypeChild",
  __ssrInlineRender: true,
  setup(__props) {
    const arr = [
      "div",
      "p",
      "a",
      "span",
      "a",
      "span",
      "a",
      "span",
      "a",
      "div",
      "p",
      "a",
      "p",
      "a",
      "span",
      "a",
      "span"
    ];
    const ns = useNamespace("type-child");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ns).b()
      }, _attrs))} data-v-2edd9efb><!--[-->`);
      ssrRenderList(arr, (item, i) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item), {
          key: item + i,
          class: unref(ns).e("item")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.slice(0, 1))}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.slice(0, 1)), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const TypeChild_vue_vue_type_style_index_0_scoped_2edd9efb_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/components/TypeChild.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TypeChild = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2edd9efb"]]);
const __pageData = JSON.parse('{"title":"选择器","description":"CSS选择器","frontmatter":{"title":"选择器","description":"CSS选择器","category":"css","tags":["CSS","选择器"]},"headers":[],"relativePath":"frontend/css/selector.md","filePath":"frontend/css/selector.md","lastUpdated":1686303485000}');
const __default__ = { name: "frontend/css/selector.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-label="Permalink to &quot;CSS 选择器&quot;">​</a></h1><h2 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to &quot;通配符&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="id选择器" tabindex="-1">id选择器 <a class="header-anchor" href="#id选择器" aria-label="Permalink to &quot;id选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">app</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="class选择器" tabindex="-1">class选择器 <a class="header-anchor" href="#class选择器" aria-label="Permalink to &quot;class选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">app</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="标签选择器" tabindex="-1">标签选择器 <a class="header-anchor" href="#标签选择器" aria-label="Permalink to &quot;标签选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">title</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">]</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>~=</code>、 <code>|=</code>、 <code>^=</code>、 <code>$=</code>、 <code>*=</code> 的区别：</p><ul><li><p><code>value</code> 是完整单词：<code>~=</code>、 <code>|=</code></p></li><li><p><code>value</code> 是拼接字符串：<code>*=</code>、 <code>^=</code>、 <code>$=</code></p></li></ul><hr><ol><li><code>attribute</code> 属性中<strong>包含</strong> <code>value</code></li></ol><p><code>~=</code>： 包含独立的单词</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[title~=flower]  --&gt;  &lt;img title=&quot;tulip flower&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>*=</code>： 包含这个词</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[title*=flower]  --&gt;  &lt;img title=&quot;ffffflowerrrrrr&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>attribute</code> 属性以 <code>value</code> <strong>开头</strong></li></ol><p><code>|=</code>： 必须是完整且唯一的单词，或者以 <code>-</code> 分隔开</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[lang|=en]  --&gt;  &lt;p lang=&quot;en&quot;&gt;  &lt;p lang=&quot;en-us&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>^=</code>： 前几个字母匹配就可以</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[lang^=en]  --&gt;  &lt;p lang=&quot;ennn&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>attribute</code> 属性以 <code>value</code> <strong>结尾</strong></li></ol><p><code>$=</code>： 后几个字母匹配就可以</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[href$=&quot;.pdf&quot;]  --&gt;  &lt;a href=&quot;/file.pdf&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="后代选择器" tabindex="-1">后代选择器 <a class="header-anchor" href="#后代选择器" aria-label="Permalink to &quot;后代选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">app</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">p</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="子代选择器" tabindex="-1">子代选择器 <a class="header-anchor" href="#子代选择器" aria-label="Permalink to &quot;子代选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">app</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="相邻选择器" tabindex="-1">相邻选择器 <a class="header-anchor" href="#相邻选择器" aria-label="Permalink to &quot;相邻选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">p</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="兄弟选择器" tabindex="-1">兄弟选择器 <a class="header-anchor" href="#兄弟选择器" aria-label="Permalink to &quot;兄弟选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">~</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">p</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="伪类选择器" tabindex="-1">伪类选择器 <a class="header-anchor" href="#伪类选择器" aria-label="Permalink to &quot;伪类选择器&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">hover</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">active</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">disabled</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">first-letter</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">first-line</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">before</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">after</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="图例展示" tabindex="-1">图例展示 <a class="header-anchor" href="#图例展示" aria-label="Permalink to &quot;图例展示&quot;">​</a></h3><ul><li>span:first-of-type</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "aa" }, null, _parent));
      _push(`<ul><li>div:first-child</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "bb" }, null, _parent));
      _push(`<ul><li>div:nth-child(n)</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "cc" }, null, _parent));
      _push(`<ul><li>a:nth-of-type(2n)</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "dd" }, null, _parent));
      _push(`<ul><li>p:only-of-type</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "ee" }, null, _parent));
      _push(`<ul><li>span:nth-last-of-type(2n)</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "ff" }, null, _parent));
      _push(`<ul><li>a:nth-last-child(2n)</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "gg" }, null, _parent));
      _push(`<ul><li>p:last-of-type</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "hh" }, null, _parent));
      _push(`<ul><li>span:last-child</li></ul>`);
      _push(ssrRenderComponent(TypeChild, { class: "ii" }, null, _parent));
      _push(`<h3 id="nth用法技巧" tabindex="-1">nth用法技巧 <a class="header-anchor" href="#nth用法技巧" aria-label="Permalink to &quot;nth用法技巧&quot;">​</a></h3><ul><li>选择列表中的偶数标签</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2n</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
      _push(ssrRenderComponent(NthChild, { class: "aa" }, null, _parent));
      _push(`<ul><li>选择列表中的奇数标签</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2n-1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
      _push(ssrRenderComponent(NthChild, { class: "bb" }, null, _parent));
      _push(`<ul><li>选择从第6个开始的，直到最后</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">n+6</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
      _push(ssrRenderComponent(NthChild, { class: "cc" }, null, _parent));
      _push(`<ul><li>选择第1个到第6个</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">-n+6</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
      _push(ssrRenderComponent(NthChild, { class: "dd" }, null, _parent));
      _push(`<ul><li>选择第6个到第9个</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">n+6</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">):</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">nth-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">-n+9</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`);
      _push(ssrRenderComponent(NthChild, { class: "ee" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/selector.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
