import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocTag",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    const getColor = () => {
      const r = () => Math.floor(Math.random() * 116) + 140;
      return `rgba(${r()}, ${r()}, ${r()}, ${Math.random() * 0.75 + 0.25})`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--efe0d2f0": getColor()
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "doc-tag" }, _attrs, _cssVars))} data-v-4eae5f86>${ssrInterpolate(_ctx.text)}</div>`);
    };
  }
});
const DocTag_vue_vue_type_style_index_0_scoped_4eae5f86_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/global/DocTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocTag = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4eae5f86"]]);
export {
  DocTag as default
};
