import { defineComponent, ref, onMounted, onBeforeUnmount, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { WordCloud } from "@antv/g2plot";
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { t as tags } from "./archive_index.md.js";
import "./useNamespace.f2345c1b.js";
import "./Content.851d6cec.js";
import "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WordCloud",
  __ssrInlineRender: true,
  emits: ["getSelected"],
  setup(__props, { emit }) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const smAndSmaller = breakpoints.smaller("sm");
    function useWordCloud(dom, data, onClickCallback) {
      const wordCloud = new WordCloud(dom, {
        height: smAndSmaller.value ? 200 : 300,
        data,
        wordField: "name",
        weightField: "value",
        colorField: "name",
        wordStyle: {
          rotation: [-Math.PI / 2, Math.PI / 2],
          rotationSteps: 4,
          fontFamily: "Inter var",
          fontSize: smAndSmaller.value ? [12, 18] : [18, 28],
          padding: 8
        },
        spiral: "rectangular",
        tooltip: {
          formatter: (datum) => {
            return { name: datum.text + " ", value: datum.value + " 篇" };
          }
        }
      });
      wordCloud.render().catch((err) => console.error(err));
      const onClick = (event) => {
        onClickCallback == null ? void 0 : onClickCallback(event.data.data.datum);
      };
      wordCloud.on("element:click", onClick);
      wordCloud.on("tooltip:show", () => {
        dom == null ? void 0 : dom.setAttribute("style", "cursor: pointer !important");
      });
      wordCloud.on("tooltip:hide", () => {
        dom == null ? void 0 : dom.setAttribute("style", "cursor: default");
      });
      const destroy = () => wordCloud.destroy();
      return { destroy };
    }
    const initWordCloud = (tags2) => Object.keys(tags2).map((key) => {
      return {
        name: key,
        value: tags2[key].length
      };
    });
    const wordCloudRef = ref(null);
    onMounted(() => {
      if (wordCloudRef.value) {
        const { destroy } = useWordCloud(
          wordCloudRef.value,
          initWordCloud(tags),
          (data) => {
            emit("getSelected", data.name, tags[data.name]);
          }
        );
        onBeforeUnmount(() => destroy());
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "wordCloudRef",
        ref: wordCloudRef,
        class: "word-cloud"
      }, _attrs))}></div>`);
    };
  }
});
const WordCloud_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archive/components/WordCloud.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
