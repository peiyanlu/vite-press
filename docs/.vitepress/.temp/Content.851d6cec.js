import { shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, defineComponent, h } from "vue";
function deserializeFunctions(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.startsWith("_vp-fn_")) {
    return new Function(`return ${value.slice(7)}`)();
  } else {
    return value;
  }
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"笔记","titleTemplate":"开发笔记","description":"小路的开发笔记","base":"/vite-press/","head":[],"appearance":true,"themeConfig":{"logo":"/logo.svg","siteTitle":"开发笔记","i18nRouting":true,"outline":{"level":"deep","label":"快速导航"},"nav":[{"link":"/origin/","text":"起源","activeMatch":"/origin/","order":0,"sidebar":false},{"link":"/navigation/","text":"导航","activeMatch":"/navigation/","order":1,"sidebar":false},{"link":"/frontend/","text":"前端","activeMatch":"/frontend/","order":2,"sidebar":true},{"link":"/cli/","text":"CLI","activeMatch":"/cli/","order":3,"sidebar":true},{"link":"/backend/","text":"后端","activeMatch":"/backend/","order":4,"sidebar":true},{"link":"/archive/","text":"归档","activeMatch":"/archive/","order":5,"sidebar":false}],"aside":true,"sidebar":{"/frontend/":[{"text":"浏览器","items":[{"text":"基础知识","link":"/frontend/browser/basics","order":98},{"text":"浏览器缓存","link":"/frontend/browser/cache","order":99},{"text":"数据存储","link":"/frontend/browser/storage","order":115}],"collapsed":true,"order":0},{"text":"网络","items":[{"text":"长连接","link":"/frontend/network/KeepAlive","order":75},{"text":"跨域","link":"/frontend/network/cors","order":99},{"text":"加密算法","link":"/frontend/network/encryption","order":101},{"text":"HTTP","link":"/frontend/network/http","order":104},{"text":"资源请求","link":"/frontend/network/request","order":114},{"text":"网络安全","link":"/frontend/network/security","order":115},{"text":"TCP","link":"/frontend/network/tcp","order":116}],"collapsed":true,"order":1},{"text":"编译构建","items":[{"text":"monorepo","items":[{"text":"快速开始","link":"/frontend/build/monorepo/quickstart","order":0},{"text":"changesets","link":"/frontend/build/monorepo/changesets","order":99},{"text":"turborepo","link":"/frontend/build/monorepo/turborepo","order":116}],"collapsed":true,"order":109},{"text":"rollup","items":[{"text":"快速开始","link":"/frontend/build/rollup/quickstart","order":0},{"text":"构建JS库","link":"/frontend/build/rollup/lib-js","order":108},{"text":"构建TS库","link":"/frontend/build/rollup/lib-ts","order":108}],"collapsed":true,"order":114},{"text":"vite","items":[{"text":"构建TS库","link":"/frontend/build/vite/ts","order":116}],"collapsed":true,"order":118},{"text":"webpack","items":[{"text":"构建ICON库","link":"/frontend/build/webpack/lib-icon","order":108},{"text":"问题记录","link":"/frontend/build/webpack/FAQ","order":999}],"collapsed":true,"order":119}],"collapsed":true,"order":2},{"text":"Vue","items":[{"text":"vue2打包组件库","link":"/frontend/vue/vue2-components","order":118}],"collapsed":true,"order":3},{"text":"HTML","items":[],"collapsed":true,"order":4},{"text":"CSS","items":[{"text":"选择器","link":"/frontend/css/selector","order":115},{"text":"权重","link":"/frontend/css/weight","order":119}],"collapsed":true,"order":5},{"text":"JavaScript","items":[{"text":"ES6+","link":"/frontend/javascript/ES6+","order":1},{"text":"字符串","link":"/frontend/javascript/string","order":2},{"text":"浏览器监听","link":"/frontend/javascript/BOMObserver","order":66},{"text":"调用栈","link":"/frontend/javascript/CallStack","order":67},{"text":"元素位置","link":"/frontend/javascript/ElementPosition","order":69},{"text":"事件循环","link":"/frontend/javascript/EventLoop","order":69},{"text":"Ajax","link":"/frontend/javascript/ajax","order":97},{"text":"数组","link":"/frontend/javascript/array","order":97},{"text":"二进制","link":"/frontend/javascript/binary","order":98},{"text":"辞海","link":"/frontend/javascript/dictionary","order":99},{"text":"fetch","link":"/frontend/javascript/fetch","order":102},{"text":"对象","link":"/frontend/javascript/object","order":111},{"text":"Promise","link":"/frontend/javascript/promise","order":112},{"text":"原型链","link":"/frontend/javascript/prototype","order":112},{"text":"作用域","link":"/frontend/javascript/scope","order":115}],"collapsed":true,"order":6},{"text":"依赖包","items":[{"text":"版本规范","link":"/frontend/npm/SemVer","order":83},{"text":"CLI","link":"/frontend/npm/cli","order":99},{"text":"问题记录","link":"/frontend/npm/FAQ","order":99},{"text":"常用推荐","link":"/frontend/npm/libs","order":108},{"text":"开源许可协议","link":"/frontend/npm/license","order":108},{"text":"package-exports","link":"/frontend/npm/package-exports","order":112},{"text":"package.json","link":"/frontend/npm/package-json","order":112},{"text":"包管理器","link":"/frontend/npm/package-manager","order":112},{"text":"打补丁","link":"/frontend/npm/package-patch","order":112}],"collapsed":true,"order":7},{"text":"正则","items":[{"text":"基础概念","link":"/frontend/regex/basics","order":98},{"text":"正则应用","link":"/frontend/regex/use","order":117}],"collapsed":true,"order":8},{"text":"代码","items":[{"text":"防抖与节流","link":"/frontend/code/debounce-throttle","order":100},{"text":"JSON导出EXCEL","link":"/frontend/code/excel-json","order":101},{"text":"图片懒加载","link":"/frontend/code/image-lazy","order":105},{"text":"列表与树","link":"/frontend/code/list-tree","order":108},{"text":"其他应用","link":"/frontend/code/others","order":111},{"text":"pretter配置","link":"/frontend/code/pretter","order":112}],"collapsed":true,"order":99}],"/cli/":[{"text":"Git","items":[{"text":"CommitLint","link":"/cli/git/commitlint","order":0},{"text":"问题","link":"/cli/git/FAQ","order":70},{"text":"CLI","link":"/cli/git/cli","order":99},{"text":"集成","link":"/cli/git/hub","order":104},{"text":"使用","link":"/cli/git/use","order":117}],"collapsed":true,"order":0},{"text":"Linux","items":[{"text":"CLI","link":"/cli/linux/cli","order":99},{"text":"使用","link":"/cli/linux/use","order":117}],"collapsed":true,"order":1},{"text":"Windows","items":[{"text":"问题","link":"/cli/windows/FAQ","order":70},{"text":"CLI","link":"/cli/windows/cli","order":99}],"collapsed":true,"order":2}],"/backend/":[{"text":"Koa","items":[{"text":"开始","link":"/backend/koa/start","order":115},{"text":"实战","link":"/backend/koa/use","order":117}],"collapsed":true,"order":0},{"text":"MySQL","items":[{"text":"安装","link":"/backend/mysql/install","order":105}],"collapsed":true,"order":1},{"text":"Redis","items":[{"text":"安装","link":"/backend/redis/install","order":105}],"collapsed":true,"order":2},{"text":"Node","items":[{"text":"NodeEnv","link":"/backend/node/env","order":0},{"text":"进程","link":"/backend/node/process","order":0}],"collapsed":true,"order":3}]},"editLink":{"pattern":"https://github.com/peiyanlu/vite-press/edit/docs-deploy/docs/:path","text":"编辑此页"},"docFooter":{"prev":"上一节","next":"下一节"},"footer":{"message":"Released under the MIT License.","copyright":"Copyright © 2022-2023 YanLuPei"},"sidebarMenuLabel":"菜单","returnToTopLabel":"返回顶部","lastUpdatedText":"上次更新","darkModeSwitchLabel":"外观","langMenuLabel":"切换语言","socialLinks":[{"icon":{"svg":"<svg viewBox=\\"0 0 1024 1024\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z\\" fill=\\"currentColor\\"></path></svg>"},"link":"https://gitee.com/peiyanlu/vite-press"},{"icon":"github","link":"https://github.com/peiyanlu/vite-press/"}],"search":{"provider":"algolia","options":{"appId":"LYHDYEDZR7","apiKey":"a7de6a75d69fb8405716c4334ab56a55","indexName":"vite-press","locales":{"root":{"placeholder":"搜索文档","translations":{"button":{"buttonText":"搜索文档","buttonAriaLabel":"搜索文档"},"modal":{"searchBox":{"resetButtonTitle":"清除查询条件","resetButtonAriaLabel":"清除查询条件","cancelButtonText":"取消","cancelButtonAriaLabel":"取消"},"startScreen":{"recentSearchesTitle":"搜索历史","noRecentSearchesText":"没有搜索历史","saveRecentSearchButtonTitle":"保存至搜索历史","removeRecentSearchButtonTitle":"从搜索历史中移除","favoriteSearchesTitle":"收藏","removeFavoriteSearchButtonTitle":"从收藏中移除"},"errorScreen":{"titleText":"无法获取结果","helpText":"你可能需要检查你的网络连接"},"footer":{"selectText":"选择","navigateText":"切换","closeText":"关闭","searchByText":"搜索提供者"},"noResultsScreen":{"noResultsText":"无法找到相关结果","suggestedQueryText":"你可以尝试查询","reportMissingResultsText":"你认为该查询应该有结果？","reportMissingResultsLinkText":"点击反馈"}}}}}}},"externalLinkIcon":true},"locales":{"root":{"label":"中文","lang":"zh-CN"}},"scrollOffset":90,"cleanUrls":true}'));
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/vite-press/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash) {
              if (hash !== currentUrl.hash) {
                history.pushState(null, "", hash);
                window.dispatchEvent(new Event("hashchange"));
              }
              scrollTo(link, hash, link.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
        window.scrollTo(0, targetTop);
      } else {
        window.scrollTo({
          left: 0,
          top: targetTop,
          behavior: "smooth"
        });
      }
    };
    const scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + 24;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    return () => h(props.as, { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
export {
  APPEARANCE_KEY as A,
  Content as C,
  EXTERNAL_URL_RE as E,
  PATHNAME_PROTOCOL_RE as P,
  RouterSymbol as R,
  useRoute as a,
  isExternal as b,
  isActive as c,
  createTitle as d,
  initData as e,
  dataSymbol as f,
  createRouter as g,
  useRouter as h,
  inBrowser as i,
  mergeHead as m,
  onContentUpdated as o,
  pathToFile as p,
  siteDataRef as s,
  useData as u,
  withBase as w
};
