import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const SvgIcon_vue_vue_type_style_index_0_scoped_46752ace_lang = "";
const _sfc_main = {
  __name: "SvgIcon",
  __ssrInlineRender: true,
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  setup(__props) {
    const props = __props;
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        height: __props.size,
        width: __props.size,
        "aria-hidden": "true",
        class: "svg-icon"
      }, _attrs))} data-v-46752ace><use${ssrRenderAttr("fill", __props.color)}${ssrRenderAttr("href", symbolId.value)} data-v-46752ace></use></svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/global/SvgIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46752ace"]]);
export {
  SvgIcon as default
};
