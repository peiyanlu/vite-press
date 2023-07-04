import { defineComponent, ref, watchEffect, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { useDebounceFn } from "@vueuse/core";
import { u as useData } from "./Content.851d6cec.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocShici",
  __ssrInlineRender: true,
  setup(__props) {
    const { title } = useData();
    const result = ref();
    const loaded = ref(false);
    const getResult = () => {
      return new Promise((resolve) => {
        window.jinrishici.load((result2) => resolve(result2));
      });
    };
    const handleLoad = () => {
      loaded.value = true;
    };
    const handleContent = useDebounceFn(async () => {
      const { data } = await getResult().catch();
      result.value = data;
    }, 300);
    watchEffect(async () => {
      if (loaded.value) {
        await handleContent();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "jinrishici" }, _attrs))} data-v-bfd83ef8>`);
      ssrRenderTeleport(_push, (_push2) => {
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), {
          key: unref(title),
          src: "https://sdk.jinrishici.com/v2/browser/jinrishici.js",
          onLoad: handleLoad
        }, null), _parent);
      }, "body", false, _parent);
      if (result.value) {
        _push(`<div class="jinrishici-content" data-v-bfd83ef8><div data-v-bfd83ef8>${ssrInterpolate(result.value.content)}</div><sub data-v-bfd83ef8>${ssrInterpolate(result.value.origin.dynasty)} · ${ssrInterpolate(result.value.origin.author)}</sub></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const DocShici_vue_vue_type_style_index_0_scoped_bfd83ef8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/global/DocShici.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocShici = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfd83ef8"]]);
export {
  DocShici as default
};
