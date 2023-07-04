import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { defineComponent, resolveComponent, mergeProps, useSSRContext, unref, defineAsyncComponent, ref, reactive, watch, onBeforeMount } from "vue";
import { u as useNamespace } from "./useNamespace.f2345c1b.js";
import { useBreakpoints, breakpointsTailwind, useTimeAgo, useDateFormat, useMagicKeys } from "@vueuse/core";
import { u as useData, w as withBase } from "./Content.851d6cec.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const data = JSON.parse('[{"title":"后端","order":4,"sidebar":true,"path":"backend/","updatedDate":1686488104000,"createdDate":1668678076000},{"title":"开始","description":"开始","category":"koa","tags":["Koa"],"path":"backend/koa/start","updatedDate":1686303485000,"createdDate":1669538509000},{"title":"实战","description":"Koa + MySQL + TS","category":"koa","tags":["Koa","MySQL","ts"],"path":"backend/koa/use","updatedDate":1686303485000,"createdDate":1669538509000},{"title":"安装","description":"MySQL安装","category":"mysql","tags":["MySQL"],"path":"backend/mysql/install","updatedDate":1686303485000,"createdDate":1669197850000},{"title":"NodeEnv","description":"环境变量中的环境信息","category":"node","tags":["node","env"],"order":0,"ignore":false,"path":"backend/node/env","updatedDate":1686488104000,"createdDate":1668678076000},{"title":"进程","description":"node进程相关知识","category":"node","tags":["node","process"],"order":0,"ignore":false,"path":"backend/node/process","updatedDate":1686488104000,"createdDate":1686488104000},{"title":"安装","description":"Redis安装","category":"redis","tags":["Redis"],"path":"backend/redis/install","updatedDate":1686303485000,"createdDate":1669197850000},{"title":"问题","description":"Git问题记录","category":"git","tags":["FAQ"],"path":"cli/git/FAQ","updatedDate":1686303485000,"createdDate":1684143388000},{"title":"CLI","description":"Git常用命令","category":"git","tags":["Git","CLI"],"path":"cli/git/cli","updatedDate":1686303485000,"createdDate":1667900642000},{"title":"CommitLint","description":"git 提交约束","category":"git","tags":["git","commit"],"order":0,"ignore":false,"path":"cli/git/commitlint","updatedDate":1687610515000,"createdDate":1686488104000},{"title":"集成","description":"Git集成：GitHub、Gitee","category":"git","tags":["Git","Hub"],"path":"cli/git/hub","updatedDate":1686303485000,"createdDate":1668091917000},{"title":"使用","description":"Git使用记录","category":"git","tags":["Git"],"path":"cli/git/use","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"CLI","order":3,"sidebar":true,"group":false,"path":"cli/","updatedDate":1685959982000,"createdDate":1683798302000},{"title":"CLI","description":"Linux常用命令","category":"linux","tags":["Linux","CLI"],"path":"cli/linux/cli","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"使用","description":"Linux命令使用记录","category":"linux","tags":["Linux","CLI"],"path":"cli/linux/use","updatedDate":1686303485000,"createdDate":1668268217000},{"title":"问题","description":"Windows问题记录","category":"windows","tags":["Windows","FAQ"],"path":"cli/windows/FAQ","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"CLI","description":"Windows常用命令","category":"windows","tags":["Windows","CLI"],"path":"cli/windows/cli","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"基础知识","description":"浏览器常问的基础知识","category":"browser","tags":["浏览器"],"path":"frontend/browser/basics","updatedDate":1686303485000,"createdDate":1680941618000},{"title":"浏览器缓存","description":"浏览器缓存方式以及区别","category":"browser","tags":["浏览器","缓存","强制缓存","协商缓存"],"path":"frontend/browser/cache","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"数据存储","description":"浏览器中的数据存储方式","category":"browser","tags":["browser","storage"],"path":"frontend/browser/storage","updatedDate":1686303485000,"createdDate":1685285908000},{"title":"changesets","description":"monorepo发包工具","category":"monorepo","tags":["monorepo","changesets"],"path":"frontend/build/monorepo/changesets","updatedDate":1687100895000,"createdDate":1686825126000},{"title":"快速开始","description":"从零搭建monorepo","category":"monorepo","tags":["monorepo","pnpm"],"order":0,"path":"frontend/build/monorepo/quickstart","updatedDate":1687165942000,"createdDate":1686908726000},{"title":"turborepo","description":"如何使用turbo管理monorepo","category":"build","tags":["build","turborepo","monorepo"],"path":"frontend/build/monorepo/turborepo","updatedDate":1687100895000,"createdDate":1687100895000},{"title":"构建JS库","description":"使用rollup构建一个js库","category":"rollup","tags":["rollup","js","lib"],"path":"frontend/build/rollup/lib-js","updatedDate":1688117351000,"createdDate":1687100895000},{"title":"构建TS库","description":"使用rollup构建一个ts库","category":"rollup","tags":["rollup","lib","ts"],"path":"frontend/build/rollup/lib-ts","updatedDate":1687165942000,"createdDate":1667489157000},{"title":"快速开始","description":"rollup","category":"rollup","tags":["rollup","doc"],"order":0,"ignore":false,"path":"frontend/build/rollup/quickstart","updatedDate":1687100895000,"createdDate":1687100895000},{"title":"构建TS库","description":"用vite构建一个TS编写的库","category":"vite","tags":["vite","ts"],"path":"frontend/build/vite/ts","updatedDate":1686303485000,"createdDate":1685713537000},{"title":"问题记录","description":"npm遇到的各种牛鬼蛇神","category":"npm","tags":["npm","FAQ"],"order":999,"path":"frontend/build/webpack/FAQ","updatedDate":1687165942000,"createdDate":1687165942000},{"title":"构建ICON库","description":"使用webpack打包svg图标","category":"webpack","tags":["Webpack","svg","icon"],"path":"frontend/build/webpack/lib-icon","updatedDate":1687165942000,"createdDate":1667489157000},{"title":"防抖与节流","description":"防抖与节流","category":"code","tags":["防抖","节流"],"path":"frontend/code/debounce-throttle","updatedDate":1686303485000,"createdDate":1683447948000},{"title":"JSON导出EXCEL","description":"json转出Excel以及解析Excel为json","category":"code","tags":["JSON","EXCEL"],"path":"frontend/code/excel-json","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"图片懒加载","description":"新版本浏览器图片懒加载实现","category":"code","tags":["懒加载"],"path":"frontend/code/image-lazy","updatedDate":1686303485000,"createdDate":1683447948000},{"title":"列表与树","description":"树与列表相互转换","category":"code","tags":["list","tree"],"path":"frontend/code/list-tree","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"其他应用","description":"js实用技巧","category":"code","tags":["code"],"path":"frontend/code/others","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"pretter配置","description":"pretter配置详解","category":"code","tags":["code","pretter"],"ignore":false,"path":"frontend/code/pretter","updatedDate":1687610515000,"createdDate":1687610515000},{"title":"选择器","description":"CSS选择器","category":"css","tags":["CSS","选择器"],"path":"frontend/css/selector","updatedDate":1686303485000,"createdDate":1668850909000},{"title":"权重","description":"CSS选择器的权重","category":"css","tags":["weight","css"],"path":"frontend/css/weight","updatedDate":1687610515000,"createdDate":1685192308000},{"path":"frontend/html/","updatedDate":1685959982000,"createdDate":1683282487000},{"title":"前端","tags":["HTML","JS","CSS","ES6","NPM"],"order":2,"sidebar":true,"path":"frontend/","updatedDate":1687610515000,"createdDate":1667580197000},{"title":"浏览器监听","description":"监听元素变化、浏览器干预行为","category":"javascript","tags":["浏览器","Observer"],"path":"frontend/javascript/BOMObserver","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"调用栈","description":"掌握函数的调用关系","category":"javascript","tags":["调用栈"],"path":"frontend/javascript/CallStack","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"ES6+","description":"ES新版本API总结","category":"javascript","tags":["ES6","ES7","ES8","ES9","ES10","ES11","ES12","ES13"],"order":1,"ignore":false,"path":"frontend/javascript/ES6+","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"元素位置","description":"获取元素位置和鼠标位置","category":"javascript","tags":["scroll","client","offset"],"path":"frontend/javascript/ElementPosition","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"事件循环","description":"了解离不开的事件循环","category":"javascript","tags":["EventLoop"],"path":"frontend/javascript/EventLoop","updatedDate":1686303485000,"createdDate":1679133976000},{"title":"Ajax","description":"Ajax的了解和使用","category":"javascript","tags":["Ajax"],"path":"frontend/javascript/ajax","updatedDate":1686303485000,"createdDate":1685192308000},{"title":"数组","description":"按版本分类的数组方法","category":"javascript","tags":["Array","ES5","ES6","ES7","ES10","ES13"],"path":"frontend/javascript/array","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"二进制","description":"js中的二进制使用方法","category":"javascript","tags":["Blob"],"path":"frontend/javascript/binary","updatedDate":1686303485000,"createdDate":1677576113000},{"title":"辞海","description":"开发中常用术语","category":"javascript","tags":["Dictionary","web"],"order":99,"path":"frontend/javascript/dictionary","updatedDate":1686488104000,"createdDate":1683282487000},{"title":"fetch","description":"了解支持promise的HTTP请求方法","category":"javascript","tags":["fetch"],"path":"frontend/javascript/fetch","updatedDate":1686303485000,"createdDate":1674033221000},{"title":"对象","description":"按版本分类的对象方法","category":"javascript","tags":["Object","ES5","ES6","ES8","ES10","ES13"],"path":"frontend/javascript/object","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"Promise","description":"详细介绍promise","category":"javascript","tags":["javascript","promise"],"path":"frontend/javascript/promise","updatedDate":1686488104000,"createdDate":1685612483000},{"title":"原型链","description":"百问不厌的原型链","category":"javascript","tags":["prototype"],"path":"frontend/javascript/prototype","updatedDate":1686303485000,"createdDate":1680866917000},{"title":"作用域","description":"代码调试中遇到的作用域","category":"javascript","tags":["作用域"],"path":"frontend/javascript/scope","updatedDate":1686303485000,"createdDate":1677576113000},{"title":"字符串","description":"按版本分类的字符串方法","category":"javascript","tags":["String","ES5","ES6","ES8","ES10","ES11","ES12","ES13"],"order":2,"path":"frontend/javascript/string","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"长连接","description":"了解实现长连接的几种方式","category":"network","tags":["network","KeepAlive"],"path":"frontend/network/KeepAlive","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"跨域","description":"什么是跨域","category":"network","tags":["network","cors"],"path":"frontend/network/cors","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"加密算法","description":"了解常用的加密算法","category":"network","tags":["network","encryption"],"path":"frontend/network/encryption","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"HTTP","description":"介绍什么是HTTP","category":"network","tags":["network","HTTP"],"path":"frontend/network/http","updatedDate":1686303485000,"createdDate":1680941618000},{"title":"资源请求","description":"请求中常见的相关内容","category":"network","tags":["network","request"],"path":"frontend/network/request","updatedDate":1686488104000,"createdDate":1686488104000},{"title":"网络安全","description":"常见的网络攻击手段与防护","category":"network","tags":["network","security"],"path":"frontend/network/security","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"TCP","description":"介绍什么是TCP","category":"network","tags":["network","TCP","UDP"],"path":"frontend/network/tcp","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"问题记录","description":"npm遇到的各种牛鬼蛇神","category":"npm","tags":["npm","FAQ"],"order":99,"path":"frontend/npm/FAQ","updatedDate":1687165942000,"createdDate":1687165942000},{"title":"版本规范","description":"npm包的版本规范","category":"npm","tags":["NPM","SemVer"],"path":"frontend/npm/SemVer","updatedDate":1686303485000,"createdDate":1680443355000},{"title":"CLI","description":"npm命令行","category":"npm","tags":["NPM","CLI"],"path":"frontend/npm/cli","updatedDate":1686303485000,"createdDate":1684314891000},{"title":"常用推荐","description":"常用的npm效率工具库","category":"npm","tags":["NPM"],"path":"frontend/npm/libs","updatedDate":1686303485000,"createdDate":1667900642000},{"title":"开源许可协议","description":"七中开源许可协议","category":"npm","tags":["license"],"path":"frontend/npm/license","updatedDate":1686303485000,"createdDate":1671108760000},{"title":"package-exports","description":"package中的expors使用记录","category":"npm","tags":["NPM","package","exports"],"path":"frontend/npm/package-exports","updatedDate":1686303485000,"createdDate":1680688772000},{"title":"package.json","description":"package.json中的字段详解","category":"npm","tags":["NPM","package.json"],"path":"frontend/npm/package-json","updatedDate":1686303485000,"createdDate":1680688772000},{"title":"包管理器","description":"目前最流行的三种包管理工具","category":"npm","tags":["npm","yarn","pnpm","registry"],"path":"frontend/npm/package-manager","updatedDate":1686825126000,"createdDate":1686825126000},{"title":"打补丁","description":"修改依赖包之后对其打补丁","category":"npm","tags":["NPM","patch"],"path":"frontend/npm/package-patch","updatedDate":1686303485000,"createdDate":1667557112000},{"title":"基础概念","description":"正则基础概念","category":"regex","tags":["Regex"],"path":"frontend/regex/basics","updatedDate":1686303485000,"createdDate":1668850909000},{"title":"正则应用","description":"正则使用记录","category":"regex","tags":["Regex"],"path":"frontend/regex/use","updatedDate":1686303485000,"createdDate":1668850909000},{"title":"vue2打包组件库","description":"使用vue2打包公共组件","category":"vue","tags":["vue","vue2","components"],"ignore":false,"path":"frontend/vue/vue2-components","updatedDate":1687610515000,"createdDate":1687610515000},{"layout":"home","title":"首页","titleTemplate":"小路的开发笔记","hero":{"name":"小路的开发笔记","text":"</dev>","tagline":"writing","image":{"src":"/logo.svg","alt":"logo"},"actions":[{"theme":"brand","text":"快速开始","link":"/frontend/"},{"theme":"alt","text":"在 GitHub 上查看","link":"https://github.com/peiyanlu/vite-press/"}]},"features":[{"icon":"⚡️","title":"vite + vue3","details":"两岸猿声啼不住，轻舟已过万重山"},{"icon":"🖖","title":"知新","details":"好记性不如烂笔头"},{"icon":"🛠️","title":"温故","details":"书读百遍其义自见"}],"path":"","updatedDate":1685612483000,"createdDate":1667489157000},{"title":"导航","layoutClass":"site-nav-layout","outline":[2,3,4],"aside":true,"lastUpdated":false,"editLink":false,"order":1,"path":"navigation/","updatedDate":1685354573000,"createdDate":1677824942000},{"title":"起源","order":0,"path":"origin/","updatedDate":1685354573000,"createdDate":1668268217000}]');
const tags = data.filter((k) => {
  var _a;
  return (_a = k.tags) == null ? void 0 : _a.length;
}).reduce((tagsRecords, item) => {
  var _a;
  (_a = item.tags) == null ? void 0 : _a.forEach((tag) => {
    (tagsRecords[tag] ?? (tagsRecords[tag] = [])).push(item);
    tagsRecords[tag].sort((a, b) => b.createdDate - a.createdDate);
  });
  return tagsRecords;
}, {});
const getTimeline = (list = data) => {
  return list.sort((a, b) => b.createdDate - a.createdDate).reduce((list2, item) => {
    var _a;
    const year = `${new Date(item.createdDate).getFullYear()}年`;
    const month = `${new Date(item.createdDate).getMonth() + 1}月`;
    list2[year] ?? (list2[year] = {});
    ((_a = list2[year])[month] ?? (_a[month] = [])).push(item);
    return list2;
  }, {});
};
const getZodiac = (year) => {
  return [
    "monkey",
    "rooster",
    "dog",
    "pig",
    "rat",
    "ox",
    "tiger",
    "rabbit",
    "dragon",
    "snake",
    "horse",
    "goat"
  ].at(year % 12);
};
const getZodiacAlias = (year) => {
  return [
    "申猴",
    "酉鸡",
    "戌狗",
    "亥猪",
    "子鼠",
    "丑牛",
    "寅虎",
    "卯兔",
    "辰龙",
    "巳蛇",
    "午马",
    "未羊"
  ].at(year % 12);
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocMetaData",
  __ssrInlineRender: true,
  props: {
    doc: {}
  },
  emits: ["getSelected"],
  setup(__props, { emit }) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const smAndSmaller = breakpoints.smaller("sm");
    const getTimeAgo = (date) => {
      return useTimeAgo(date).value;
    };
    const getDate = (date) => {
      return useDateFormat(date, smAndSmaller.value ? "MM/DD HH:mm" : "YYYY/MM/DD HH:mm:ss").value;
    };
    const handleClick = (tag) => {
      emit("getSelected", tag, tags[tag]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_doc_tag = resolveComponent("doc-tag");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "doc-metadata" }, _attrs))} data-v-70be7d02><div class="group" data-v-70be7d02><div${ssrRenderAttr("title", `创建于：${getTimeAgo(_ctx.doc.createdDate)}`)} class="item" data-v-70be7d02>`);
      _push(ssrRenderComponent(_component_svg_icon, { name: "create" }, null, _parent));
      _push(`<div data-v-70be7d02>${getDate(_ctx.doc.createdDate)}</div></div><div${ssrRenderAttr("title", `更新于：${getDate(_ctx.doc.updatedDate)}`)} class="item" data-v-70be7d02>`);
      _push(ssrRenderComponent(_component_svg_icon, { name: "update" }, null, _parent));
      _push(`<div data-v-70be7d02>${getTimeAgo(_ctx.doc.updatedDate)}</div></div></div>`);
      if ((_a = _ctx.doc.tags) == null ? void 0 : _a.length) {
        _push(`<div class="item" data-v-70be7d02>`);
        _push(ssrRenderComponent(_component_svg_icon, { name: "tags" }, null, _parent));
        _push(`<div class="tag-list" data-v-70be7d02><!--[-->`);
        ssrRenderList(_ctx.doc.tags, (tag) => {
          _push(ssrRenderComponent(_component_doc_tag, {
            key: tag,
            text: tag,
            onClick: ($event) => handleClick(tag)
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const DocMetaData_vue_vue_type_style_index_0_scoped_70be7d02_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archive/components/DocMetaData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DocMetaData = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-70be7d02"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LoadingBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const smAndSmaller = breakpoints.smaller("sm");
    const height = smAndSmaller.value ? "200px" : "300px";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--a5a1a0d0": unref(height)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty-block" }, _attrs, _cssVars))} data-v-e7daea4d><div class="loader" data-v-e7daea4d><div class="outer" data-v-e7daea4d></div><div class="middle" data-v-e7daea4d></div><div class="inner" data-v-e7daea4d></div></div></div>`);
    };
  }
});
const LoadingBlock_vue_vue_type_style_index_0_scoped_e7daea4d_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archive/components/LoadingBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EmptyBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e7daea4d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const AsyncWordCloud = defineAsyncComponent({
      // 加载函数
      loader: () => import("./WordCloud.67a004f5.js"),
      // 展示加载组件前的延迟时间，默认为 200ms
      delay: 200,
      loadingComponent: EmptyBlock
    });
    const { escape } = useMagicKeys();
    const { isDark } = useData();
    const list = ref({});
    const isSelected = ref(false);
    const selected = reactive({
      type: "",
      data: []
    });
    const getUrlParams = (urlSearch = location.search) => Object.fromEntries(new URLSearchParams(urlSearch));
    const resetUrl = (search = "") => {
      const baseUrl = () => location.href.split(location.search || "?").shift();
      history.replaceState("", "", baseUrl() + search);
    };
    const resetList = (data2) => {
      list.value = getTimeline(data2);
    };
    const resetPageData = (tag, data2) => {
      selected.type = tag;
      selected.data = data2;
      resetList(data2);
      resetUrl(tag ? `?tag=${encodeURIComponent(tag)}` : "");
    };
    watch(() => escape.value, (v) => {
      if (isSelected.value && v) {
        isSelected.value = false;
        resetPageData("", data);
      }
    });
    onBeforeMount(() => {
      const { tag } = getUrlParams();
      let decode = decodeURIComponent(tag);
      if (tag && tags[decode]) {
        handleSelectedTag(tag, tags[decode]);
      } else {
        resetList(data);
      }
    });
    const handleSelectedTag = (tag, data2) => {
      isSelected.value = true;
      resetPageData(tag, data2);
    };
    const isCurrentYear = (year) => {
      return (/* @__PURE__ */ new Date()).getFullYear() === year;
    };
    const shadow = isDark ? "rgba(125, 125, 125, .1)" : "rgba(0, 0, 0, .1)";
    const ns = useNamespace("doc-timeline-item");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_doc_tag = resolveComponent("doc-tag");
      const _component_DocShici = resolveComponent("DocShici");
      const _cssVars = { style: {
        "--b0bebce0": unref(shadow)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "doc-archive" }, _attrs, _cssVars))} data-v-2f71af29>`);
      _push(ssrRenderComponent(unref(AsyncWordCloud), { onGetSelected: handleSelectedTag }, null, _parent));
      _push(`<div class="doc-archive-title" data-v-2f71af29><div class="tag" data-v-2f71af29>`);
      _push(ssrRenderComponent(_component_svg_icon, { name: "tags" }, null, _parent));
      _push(ssrRenderComponent(_component_doc_tag, {
        text: selected.type
      }, null, _parent));
      _push(`</div>`);
      if (isSelected.value) {
        _push(`<div data-v-2f71af29>${ssrInterpolate(`共 ${selected.data.length} 篇，持续更新中`)}</div>`);
      } else {
        _push(`<div data-v-2f71af29>${ssrInterpolate(`共 ${unref(data).length} 篇，持续更新中`)}</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DocShici, { class: "doc-shici" }, null, _parent));
      _push(`<div class="doc-timeline" data-v-2f71af29><!--[-->`);
      ssrRenderList(list.value, (item, year) => {
        _push(`<div class="${ssrRenderClass([unref(ns).b(), { current: isCurrentYear(parseInt(year)) }])}" data-v-2f71af29><div class="${ssrRenderClass(unref(ns).e("line"))}" data-v-2f71af29><div${ssrRenderAttr("title", unref(getZodiacAlias)(parseInt(year)))} class="icon" data-v-2f71af29>`);
        _push(ssrRenderComponent(_component_svg_icon, {
          name: `zodiac-${unref(getZodiac)(parseInt(year))}`
        }, null, _parent));
        _push(`</div><div class="line" data-v-2f71af29></div></div><div class="${ssrRenderClass(unref(ns).e("wrapper"))}" data-v-2f71af29><div class="group-header" data-v-2f71af29>${ssrInterpolate(year)}</div><!--[-->`);
        ssrRenderList(item, (subItem, month) => {
          _push(`<div class="group-content" data-v-2f71af29><div class="subgroup-header" data-v-2f71af29>${ssrInterpolate(month)}</div><!--[-->`);
          ssrRenderList(subItem, (doc) => {
            _push(`<div class="subgroup-content" data-v-2f71af29><div class="title" data-v-2f71af29><a${ssrRenderAttr("href", unref(withBase)(doc.path))} data-v-2f71af29>${ssrInterpolate(doc.category ? `${doc.category} / ` : "")}${ssrInterpolate(doc.title)}</a>`);
            if (doc.description) {
              _push(`<div data-v-2f71af29>-- ${ssrInterpolate(doc.description)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            _push(ssrRenderComponent(DocMetaData, {
              doc,
              onGetSelected: handleSelectedTag
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const DocTimeline_vue_vue_type_style_index_0_scoped_2f71af29_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archive/components/DocTimeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DocTimelineItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f71af29"]]);
const index_scss_vue_type_style_index_0_src_true_lang = "";
const __pageData = JSON.parse('{"title":"归档","description":"","frontmatter":{"title":"归档","layout":"doc","layoutClass":"doc-archive","aside":false,"lastUpdated":false,"editLink":false,"order":5},"headers":[],"relativePath":"archive/index.md","filePath":"archive/index.md","lastUpdated":1685354573000}');
const __default__ = { name: "archive/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(DocTimelineItem, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archive/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default,
  tags as t
};
