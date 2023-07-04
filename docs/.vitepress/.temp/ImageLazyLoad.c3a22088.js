import { defineComponent, ref, watchEffect, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { i as inBrowser } from "./Content.851d6cec.js";
const def = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgzMzY1OTQ3ODcwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTAgMGgxMDI0djEwMjRIMHoiIGZpbGw9IiNGNkY2RjYiIHAtaWQ9IjI5NjAiPjwvcGF0aD48cGF0aCBkPSJNNjk1Ljc2MjI4NiAxOTkuOTI2ODU3Yzc1LjQwMTE0MyAwIDEzNi41MzAyODYgNjEuMTI5MTQzIDEzNi41MzAyODUgMTM2LjUzMDI4NnYzNTEuMDg1NzE0YzAgNzUuNDAxMTQzLTYxLjEyOTE0MyAxMzYuNTMwMjg2LTEzNi41MzAyODUgMTM2LjUzMDI4NmgtMzUxLjA4NTcxNWMtNzUuNDEwMjg2IDAtMTM2LjUzMDI4Ni02MS4xMjkxNDMtMTM2LjUzMDI4NS0xMzYuNTMwMjg2VjMzNi40NTcxNDNjMC03NS40MDExNDMgNjEuMTItMTM2LjUzMDI4NiAxMzYuNTMwMjg1LTEzNi41MzAyODZ6TTI0Ny4xNDk3MTQgNDMxLjEwNFY2ODcuNTQyODU3YzAgNTMuODYwNTcxIDQzLjY2NjI4NiA5Ny41MjY4NTcgOTcuNTI2ODU3IDk3LjUyNjg1N2gyMzguNDM2NTcyQzU3My42NDExNDMgNjAwLjQxMTQyOSA0MzAuNDY0IDQ1MC4wMDIyODYgMjQ3LjE0OTcxNCA0MzEuMTA0ek02OTUuNzcxNDI5IDIzOC45MzAyODZoLTM1MS4wODU3MTVjLTUzLjg2MDU3MSAwLTk3LjUyNjg1NyA0My42NjYyODYtOTcuNTI2ODU3IDk3LjUyNjg1N3Y2NS4yNDM0MjhjMTk5LjU3MDI4NiAxOS4wODExNDMgMzU1LjcwMjg1NyAxODIuNjI4NTcxIDM2NS4yNTcxNDMgMzgzLjM2aDgzLjM1NTQyOWM1My44NTE0MjkgMCA5Ny41MjY4NTctNDMuNjU3MTQzIDk3LjUyNjg1Ny05Ny41MTc3MTRWNTg1LjE0Mjg1N2MtNTUuMzg3NDI5LTUyLjgtMTQzLjEwNC01Mi4wMDQ1NzEtMTk3LjUyMjI4NiAyLjQwNDU3MmExNC42Mjg1NzEgMTQuNjI4NTcxIDAgMSAxLTIwLjY4MTE0My0yMC42ODExNDNjNTkuMzgyODU3LTU5LjM5MiAxNTEuNjUyNTcxLTY1Ljg2NTE0MyAyMTguMjAzNDI5LTE5LjQxOTQyOVYzMzYuNDU3MTQzYzAtNTMuODYwNTcxLTQzLjY2NjI4Ni05Ny41MjY4NTctOTcuNTI2ODU3LTk3LjUyNjg1N3ogbS01OC41MTQyODYgNjguMjY5NzE0YTQ4Ljc1ODg1NyA0OC43NTg4NTcgMCAxIDEgMCA5Ny41MjY4NTcgNDguNzU4ODU3IDQ4Ljc1ODg1NyAwIDAgMSAwLTk3LjUyNjg1N3ogbTAgMTkuNTAxNzE0YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAxIDAgMCA1OC41MTQyODYgMjkuMjU3MTQzIDI5LjI1NzE0MyAwIDAgMCAwLTU4LjUxNDI4NnoiIGZpbGw9IiNEMEQwRDAiIHAtaWQ9IjI5NjEiPjwvcGF0aD48L3N2Zz4=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageLazyLoad",
  __ssrInlineRender: true,
  props: {
    src: {}
  },
  setup(__props) {
    function useLazyLoadObserver() {
      if (!inBrowser)
        return void 0;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImg = entry.target;
            const src = lazyImg.dataset.src;
            if (src) {
              lazyImg.src = src;
              lazyImg.removeAttribute("data-src");
            }
            observer.unobserve(lazyImg);
          }
        });
      });
      return observer;
    }
    const imgRef = ref(null);
    watchEffect(() => {
      const observer = useLazyLoadObserver();
      if (imgRef.value) {
        observer == null ? void 0 : observer.observe(imgRef.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        ref_key: "imgRef",
        ref: imgRef,
        "data-src": _ctx.src,
        src: def,
        alt: ""
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/global/ImageLazyLoad.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
