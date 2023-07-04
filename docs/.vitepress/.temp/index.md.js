import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"首页","titleTemplate":"小路的开发笔记","description":"","frontmatter":{"layout":"home","title":"首页","titleTemplate":"小路的开发笔记","hero":{"name":"小路的开发笔记","text":"</dev>","tagline":"writing","image":{"src":"/logo.svg","alt":"logo"},"actions":[{"theme":"brand","text":"快速开始","link":"/frontend/"},{"theme":"alt","text":"在 GitHub 上查看","link":"https://github.com/peiyanlu/vite-press/"}]},"features":[{"icon":"⚡️","title":"vite + vue3","details":"两岸猿声啼不住，轻舟已过万重山"},{"icon":"🖖","title":"知新","details":"好记性不如烂笔头"},{"icon":"🛠️","title":"温故","details":"书读百遍其义自见"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1685612483000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
