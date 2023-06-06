export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org/zh-CN/',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://devui.design/favicon.ico',
        title: 'Vue DevUI',
        desc: '基于 DevUI Design 的 Vue3 组件库',
        link: 'https://vue-devui.github.io/quick-start/',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui',
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com',
      },
    ],
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org',
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'JavaScript 相关',
    items: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev',
      },
      {
        icon: 'https://simpleicons.org/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn',
      },
      {
        icon: 'https://www.axios-http.cn/assets/favicon.ico',
        title: 'Axios 中文文档',
        desc: '一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
        link: 'https://www.axios-http.cn/',
      },
      {
        icon: 'https://tippyjs.bootcss.com/icons/icon-48x48.png?v=96d696c3bcea9d7ae650df936a86d565',
        title: 'Tippy.js',
        desc: '高度可定制的工具提示和弹出框库',
        link: 'https://tippyjs.bootcss.com/',
      },
      {
        icon: 'https://pptr.dev/img/favicon.ico',
        title: 'Puppeteer',
        desc: '使用 Node 执行浏览器API',
        link: 'https://pptr.dev/',
      },
      {
        icon: 'http://lodash.think2011.net/images/favicon.ico',
        title: 'lodash',
        desc: '一个现代的 JavaScript 工具库',
        link: 'http://lodash.think2011.net/',
      },
      {
        icon: 'https://naver.github.io/egjs-flicking/img/favicon.ico',
        title: 'Flicking',
        desc: '一个可靠的、灵活的、可扩展的转盘',
        link: 'https://naver.github.io/egjs-flicking/',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        link: 'https://antv.antgroup.com/',
      },
    ],
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://less.bootcss.com/public/ico/favicon.ico',
        title: 'less',
        desc: '向后兼容的 CSS 扩展语言',
        link: 'https://less.bootcss.com/',
      },
      {
        icon: 'https://www.tailwindcss.cn/favicons/favicon.ico?v=3',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn',
      },
      {
        icon: 'https://cssfx.netlify.app/favicon-32x32.png',
        title: 'CSSFX',
        desc: 'Beautifully simple click-to-copy CSS effects',
        link: 'https://cssfx.netlify.app/',
      },
      {
        icon: 'https://loading.io/favicon.ico',
        title: 'loading.io',
        desc: '超棒的svg实现loading动画效果',
        link: 'https://loading.io/',
      },
      {
        icon: 'https://tobiasahlin.com/images/favicon.ico',
        title: 'SpinKit',
        desc: 'CSS3加载动画集合',
        link: 'https://tobiasahlin.com/spinkit/',
      },
    ],
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: '',
        title: 'Node.js Doc',
        desc: 'Node.js 中文文档',
        link: 'http://api.nodejs.cn/',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com',
      },
      {
        icon: '',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com.cn',
      },
      {
        icon: 'https://www.sequelize.cn/img/favicon.ico',
        title: 'sequelize',
        desc: '基于 promise 的 Node.js ORM',
        link: 'https://www.sequelize.cn/',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev/',
      },
      {
        icon: 'https://cn.rollupjs.org/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://cn.rollupjs.org/',
      },
      {
        icon: 'https://turbo.build/images/favicon-light/favicon.ico',
        title: 'Turbopack',
        desc: 'Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust.',
        link: 'https://turbo.build/pack',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs',
      },
      {
        icon: 'https://vite-pwa-org.netlify.app/favicon.svg',
        title: 'Vite PWA',
        desc: 'Vite 的零配置和与框架无关的 PWA 插件',
        link: 'https://vite-pwa-org.netlify.app/',
      },
    ],
  },
  {
    title: '静态网站生成',
    items: [
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'VitePress',
        desc: '简单、强大且性能卓越。满足您一直想要的现代 SSG 框架。',
        link: 'https://vitepress.vuejs.org/',
      },
      {
        icon: 'https://vuepress.vuejs.org/logo.png',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh/',
      },
      {
        icon: 'https://www.algolia.com/algoliaweb-static-favicons/light-mode/favicon-32x32.png',
        title: 'Algolia',
        desc: '书海里的定位神器',
        link: 'https://algolia.com/',
      },
      {
        icon: 'https://docsearch.algolia.com/img/favicon.ico',
        title: 'Algolia DocSearch',
        desc: '使用搜索引擎解决文档挑战',
        link: 'https://docsearch.algolia.com/',
      },
      {
        icon: 'https://storage.googleapis.com/algolia-crawler-assets/a770def/favicon.ico?5c824db6ffedc30698b1',
        title: 'Algolia Crawler',
        desc: 'Algolia 配套的爬虫工具',
        link: 'https://crawler.algolia.com/admin/crawlers/',
      },
      {
        icon: 'https://giscus.app/favicon.ico',
        title: 'giscus',
        desc: '利用 GitHub Discussions 实现的评论系统',
        link: 'https://giscus.app/zh-CN',
      },
    ],
  },
  {
    title: '地图',
    items: [
      {
        icon: 'https://mapapi.qq.com/web/lbs/logo/favicon.ico',
        title: '腾讯地图',
        desc: '腾讯位置服务',
        link: 'https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview',
      },
      {
        icon: 'https://lbsyun.baidu.com/skins/MySkin/resources/img/icon/lbsyunlogo_icon.ico',
        title: '百度地图',
        desc: '百度地图开放平台',
        link: 'https://lbsyun.baidu.com/index.php?title=jspopularGL',
      },
      {
        icon: 'https://a.amap.com/pc/static/favicon.ico',
        title: '高德地图',
        desc: '高德地图开放平台',
        link: 'https://lbs.amap.com/api/webservice/summary/',
      },
      {
        icon: 'http://lbs.tianditu.gov.cn/images/favicon.ico',
        title: '天地图',
        desc: '国家基础地理信息中心',
        link: 'http://lbs.tianditu.gov.cn/',
      },
      {
        icon: 'https://static-assets.mapbox.com/branding/favicon/v1/favicon-32x32.png?v=gAd4JjrGWl',
        title: 'mapbox',
        desc: '面向开发人员的地图和位置',
        link: 'https://account.mapbox.com/',
      },
    ],
  },
  {
    title: '小程序',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
        title: '微信小程序',
        desc: '微信小程序',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
        title: '微信公众平台',
        desc: '微信公众平台',
        link: 'https://mp.weixin.qq.com/',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico',
        title: '支付宝小程序',
        desc: '支付宝小程序',
        link: 'https://opendocs.alipay.com/mini/03lwrv',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico',
        title: '支付宝开放平台',
        desc: '支付宝开放平台',
        link: 'https://openhome.alipay.com/docCenter/docCenter.htm',
      },
    ],
  },
  {
    title: '工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '阿里图标图',
        link: 'https://www.iconfont.cn/',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"></path><path d="M551.61287111 393.16138667c-48.93354667 0-69.90506667 51.26371555-69.90506666 104.8576 0 53.59388445 23.30168889 102.52743111 69.90506666 102.52743111 46.60337778 0 69.90506667-48.93354667 69.90506667-104.8576C621.51793778 446.75527111 600.54641778 393.16138667 551.61287111 393.16138667z" fill="#5e9e1e"></path><path d="M821.91246222 153.15399111L202.08753778 153.15399111c-102.52743111 0-186.41351111 83.88608-186.41351111 186.41351111l0 372.82702223c0 102.52743111 83.88608 186.41351111 186.41351111 186.4135111l619.82492444 0c102.52743111 0 186.41351111-83.88608 186.41351111-186.4135111l0-372.82702223C1008.32597333 237.04007111 924.43989333 153.15399111 821.91246222 153.15399111zM213.73838222 542.29219555c0 69.90506667-32.62236445 90.87658667-79.22574222 90.87658667-11.65084445 0-25.63185778-2.33016889-34.95253333-4.66033777l4.66033778-32.62236445c6.99050667 2.33016889 16.31118222 4.66033778 25.63185777 4.66033778 25.63185778 0 41.94304-11.65084445 41.94304-58.25422223l0-177.09283555 39.61287111 0L211.40821333 542.29219555zM318.59598222 633.16878222c-25.63185778 0-51.26371555-6.99050667-62.91456-16.31118222l9.32067556-32.62236445c13.98101333 9.32067555 34.95253333 16.31118222 58.25422222 16.31118223 32.62236445 0 48.93354667-16.31118222 48.93354667-39.61287111 0-23.30168889-13.98101333-37.28270222-44.27320889-48.93354667-39.61287111-16.31118222-65.24472889-39.61287111-65.24472889-76.89557333 0-41.94304 32.62236445-74.56540445 86.21624889-74.56540445 25.63185778 0 44.27320889 6.99050667 55.92405333 11.65084445l-9.32067556 32.62236444c-9.32067555-4.66033778-25.63185778-11.65084445-46.60337777-11.65084444-32.62236445 0-44.27320889 18.64135111-44.27320889 34.95253333 0 23.30168889 13.98101333 32.62236445 48.93354666 48.93354667 41.94304 18.64135111 62.91456 41.94304 62.91456 79.22574222C411.80273778 600.54641778 379.18037333 633.16878222 318.59598222 633.16878222zM551.61287111 633.16878222c-67.57489778 0-111.84810667-53.59388445-111.84810666-135.14979555 0-83.88608 46.60337778-137.47996445 114.17827555-137.47996445 69.90506667 0 109.51793778 58.25422222 109.51793778 135.14979556C663.46097778 586.56540445 614.52743111 633.16878222 551.61287111 633.16878222zM896.47786667 630.83861333l-39.61287112 0-69.90506666-123.49895111c-16.31118222-27.96202667-32.62236445-60.58439111-44.27320889-88.54641777l-2.33016889 0c2.33016889 32.62236445 2.33016889 67.57489778 2.33016889 114.17827555l0 100.19726222-37.28270222 0L705.40401778 365.19936l44.27320889 0 69.90506666 123.49895111c16.31118222 27.96202667 32.62236445 60.58439111 41.94304 88.54641778l0 0c-2.33016889-34.95253333-4.66033778-69.90506667-4.66033778-111.84810667l0-97.86709333 37.28270223 0L894.14769778 630.83861333z" fill="#5e9e1e"></path></svg>',
        },
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'http://zhongguose.com/img/favicon.ico',
        title: '中国色',
        desc: '中国古典色彩',
        link: 'http://zhongguose.com/',
      },
      {
        icon: 'https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg',
        title: 'StackBlitz',
        desc: '在线开发工具',
        link: 'https://stackblitz.com/',
      },
      {
        icon: 'https://cms.pixso.cn/images/favicon.ico',
        title: 'pixso',
        desc: '产品设计协作一体化工具',
        link: 'https://pixso.cn/',
      },
      {
        icon: 'https://tools.pdf24.org/static/img/pdf24.png?v=5cf19973',
        title: 'PDF24',
        desc: '免费且易于使用的在线PDF工具',
        link: 'https://tools.pdf24.org/zh/all-tools',
      },
      {
        icon: 'https://www.jinrishici.com/img/icon-small.png',
        title: '今日诗词',
        desc: '根据时间、地点、天气、事件智能推荐诗词',
        link: 'https://www.jinrishici.com/#',
      },
    ],
  },
  {
    title: '工程化',
    items: [
      {
        icon: 'https://www.pnpm.cn/img/favicon.png',
        title: 'pnpm',
        desc: '速度快、节省磁盘空间的软件包管理器',
        link: 'https://www.pnpm.cn/installation',
      },
      {
        icon: 'https://turbo.build/images/favicon-light/favicon.ico',
        title: 'Turboropo',
        desc: 'JavaScript 和 TypeScript 代码库的高性能构建系统',
        link: 'https://turbo.build/repo',
      },
      {
        icon: 'https://rushjs.io/zh-cn/images/site/favicon.ico',
        title: 'Rush',
        desc: '可扩展的 Web 单存储库管理器',
        link: 'https://rushjs.io/zh-cn/pages/intro/welcome/',
      },
      {
        icon: 'https://npmmirror.com/favicon.png',
        title: 'npmmirror',
        desc: 'npm 镜像源',
        link: 'https://npmmirror.com/',
      },
    ],
  },
  {
    title: '代码风格检查',
    items: [
      {
        icon: 'https://eslint.org/favicon.ico',
        title: 'ESLint',
        desc: '可组装的、用于 JavaScript 和 JSX 的代码检查工具',
        link: 'https://eslint.org/',
      },
      {
        icon: 'https://stylelint.docschina.org/_/src/components/DefaultHeadMeta/favicon.7f672624abe02127db4972965ea73002.ico',
        title: 'StyleLint',
        desc: '强大的现代 CSS 检测工具，帮助样式表遵循一致的约定和避免错误',
        link: 'https://stylelint.docschina.org/',
      },
      {
        icon: 'https://standardjs.com/favicon.ico',
        title: 'Standard JS',
        desc: 'JavaScript 风格指南、检查工具和格式化工具',
        link: 'https://standardjs.com/',
      },
    ],
  },
  {
    title: '函数式编程',
    items: [
      {
        icon: 'https://cn.rx.js.org/favicon.ico',
        title: 'RxJS',
        desc: 'RxJS 是 Reactive Extensions 的 JavaScript 实现，可以通过响应式和函数式编程模型组合异步数据流',
        link: 'https://cn.rx.js.org/',
      },
      {
        icon: '',
        title: 'Cycle.js',
        desc: '函数式和响应式的 JavaScript 框架',
        link: 'https://cycle.js.org/',
      },
      {
        icon: 'https://ramda.cn/favicon.ico',
        title: 'Ramda',
        desc: '一款实用的 JavaScript 函数式编程库。',
        link: 'https://ramda.cn/',
      },
    ],
  },
  {
    title: '视频音频',
    items: [
      {
        icon: 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.4/favicon.ico',
        title: 'XGPlayer',
        desc: '带解析器、能节省流量的 Web 视频播放器',
        link: 'https://v2.h5player.bytedance.com/',
      },
      {
        icon: 'https://chimee.pyzy.net/favicon.ico',
        title: 'chimee',
        desc: '奇舞团研制的 h5 播放器，它支持 mp4、m3u8、flv 等多种格式',
        link: 'https://chimee.pyzy.net/',
      },
      {
        icon: '',
        title: 'flv.js',
        desc: 'HTML5 视频播放器以纯 JavaScript 编写，不含 Flash',
        link: 'https://github.com/Bilibili/flv.js',
      },
    ],
  },
  {
    title: '开发工具',
    items: [
      {
        icon: 'https://www.jetbrains.com/favicon.ico?r=1234',
        title: 'WebStorm',
        desc: '一个适用于 JavaScript 和相关技术的集成开发环境。',
        link: 'https://www.jetbrains.com/zh-cn/webstorm/',
      },
      {
        icon: 'https://code.visualstudio.com/favicon.ico',
        title: 'Visual Studio Code',
        desc: '免费、开源的编辑器',
        link: 'https://code.visualstudio.com/',
      },
    ],
  },
  {
    title: '学习',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com',
      },
      {
        icon: 'https://en.bem.info/favicon.ico',
        title: 'BEM',
        desc: '命名规范',
        link: 'https://en.bem.info/methodology/',
      },
      {
        icon: 'https://www.markdownguide.org/favicon.ico',
        title: 'Markdown',
        desc: 'Markdown 基本语法',
        link: 'https://www.markdownguide.org/basic-syntax/',
      },
      {
        icon: '',
        title: 'markdown-it',
        desc: 'markdown-it 中文文档',
        link: 'https://markdown-it.docschina.org/',
      },
      {
        icon: 'https://www.ecma-international.org/wp-content/uploads/ecma-favicon@2x-300x300.png',
        title: 'ECMAScript',
        desc: 'ECMAScript 规范',
        link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        title: 'Github',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        title: 'Github 文档',
        desc: '在 GitHub 旅程中随时为你提供帮助',
        link: 'https://docs.github.com/zh',
      },
      {
        icon: 'https://gitee.com/favicon.ico',
        title: 'Gitee',
        desc: '开源中国（OSChina）推出的基于Git的代码托管服务平台',
        link: 'https://gitee.com/',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        title: '稀土掘金',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        title: 'SegmentFault 思否',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        icon: '',
        title: '博客园',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com',
      },
      {
        icon: 'https://cloud.tencent.com/favicon.ico',
        title: '腾讯云 开发者社区',
        desc: '开发者的技术分享型社区',
        link: 'https://cloud.tencent.com/developer/doc/1121',
      },
    ],
  },
  {
    title: '其他',
    items: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        title: '防撤回',
        desc: '微信/QQ/TIM防撤回补丁',
        link: 'https://github.com/huiyadanli/RevokeMsgPatcher',
      },
      {
        icon: 'https://www.ghxi.com/favicon.ico',
        title: '果核剥壳',
        desc: '绿色软件分享平台',
        link: 'https://www.ghxi.com/',
      },
      {
        icon: 'https://chrome.zzzmh.cn/favicon.ico',
        title: '极简插件',
        desc: '简介的插件网站',
        link: 'https://chrome.zzzmh.cn/#/index',
      },
      {
        icon: 'https://chat.openai.com/favicon-32x32.png',
        title: 'ChatGPT',
        desc: '基于GPT的聊天机器人',
        link: 'https://chat.openai.com/',
      },
      {
        icon: 'https://uploads-ssl.webflow.com/628193922a4d18e69ba81f14/628193922a4d180bf1a81f46_Favicon.png',
        title: 'forefront',
        desc: '基于GPT的拥有角色系统的聊天机器人',
        link: 'https://chat.forefront.ai/',
      },
      {
        icon: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg',
        title: 'Bard',
        desc: '谷歌的AI聊天机器人',
        link: 'https://bard.google.com/',
      },
    ],
  },
]
