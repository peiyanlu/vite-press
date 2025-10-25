import { DefaultTheme } from "vitepress"

export const getNav = () => [
  {
    "link": "/origin/",
    "text": "起源",
    "activeMatch": "/origin/",
    "order": 0,
    "sidebar": false
  },
  {
    "link": "/navigation/",
    "text": "导航",
    "activeMatch": "/navigation/",
    "order": 1,
    "sidebar": false
  },
  {
    "link": "/frontend/",
    "text": "前端",
    "activeMatch": "/frontend/",
    "order": 2,
    "sidebar": true
  },
  {
    "link": "/backend/",
    "text": "后端",
    "activeMatch": "/backend/",
    "order": 3,
    "sidebar": true
  },
  {
    "link": "/cli/",
    "text": "CLI",
    "activeMatch": "/cli/",
    "order": 4,
    "sidebar": true
  },
  {
    "link": "/interview/",
    "text": "面试",
    "activeMatch": "/interview/",
    "order": 5,
    "sidebar": true
  },
  {
    "link": "/archive/",
    "text": "归档",
    "activeMatch": "/archive/",
    "order": 6,
    "sidebar": false
  }
] as unknown as DefaultTheme.NavItem[]

export const getSidebar = () => ({
  "/frontend/": [
    {
      "text": "浏览器",
      "items": [
        {
          "text": "浏览器基础知识",
          "link": "/frontend/browser/basics",
          "order": 98
        },
        {
          "text": "浏览器缓存",
          "link": "/frontend/browser/cache",
          "order": 99
        },
        {
          "text": "浏览器数据存储",
          "link": "/frontend/browser/storage",
          "order": 115
        }
      ],
      "collapsed": true,
      "order": 98
    },
    {
      "text": "编译构建",
      "items": [
        {
          "text": "monorepo",
          "items": [
            {
              "text": "快速开始",
              "link": "/frontend/build/monorepo/quickstart",
              "order": 0
            },
            {
              "text": "turborepo",
              "link": "/frontend/build/monorepo/turborepo",
              "order": 116
            }
          ],
          "collapsed": false,
          "order": 109
        },
        {
          "text": "rollup",
          "items": [
            {
              "text": "快速开始",
              "link": "/frontend/build/rollup/quickstart",
              "order": 0
            },
            {
              "text": "构建JS库",
              "link": "/frontend/build/rollup/lib-js",
              "order": 108
            },
            {
              "text": "构建TS库",
              "link": "/frontend/build/rollup/lib-ts",
              "order": 108
            }
          ],
          "collapsed": false,
          "order": 114
        },
        {
          "text": "vite",
          "items": [
            {
              "text": "构建TS库",
              "link": "/frontend/build/vite/ts",
              "order": 116
            }
          ],
          "collapsed": false,
          "order": 118
        },
        {
          "text": "webpack",
          "items": [
            {
              "text": "构建ICON库",
              "link": "/frontend/build/webpack/lib-icon",
              "order": 108
            },
            {
              "text": "问题记录",
              "link": "/frontend/build/webpack/FAQ",
              "order": 999
            }
          ],
          "collapsed": false,
          "order": 119
        }
      ],
      "collapsed": true,
      "order": 98
    },
    {
      "text": "代码",
      "items": [
        {
          "text": "EventLoop 执行示例",
          "link": "/frontend/code/EventLoop",
          "order": 69
        },
        {
          "text": "防抖与节流",
          "link": "/frontend/code/debounce-throttle",
          "order": 100
        },
        {
          "text": "JSON导出EXCEL",
          "link": "/frontend/code/excel-json",
          "order": 101
        },
        {
          "text": "封装 fetch 支持 timeout",
          "link": "/frontend/code/fetchWithTimeout",
          "order": 102
        },
        {
          "text": "图片懒加载",
          "link": "/frontend/code/image-lazy",
          "order": 105
        },
        {
          "text": "列表与树",
          "link": "/frontend/code/list-tree",
          "order": 108
        },
        {
          "text": "node 路径归一化",
          "link": "/frontend/code/normalize",
          "order": 110
        },
        {
          "text": "其他应用",
          "link": "/frontend/code/others",
          "order": 111
        },
        {
          "text": "pretter 配置",
          "link": "/frontend/code/pretter",
          "order": 112
        }
      ],
      "collapsed": true,
      "order": 99
    },
    {
      "text": "CSS",
      "items": [
        {
          "text": "BFC",
          "link": "/frontend/css/bfc",
          "order": 98
        },
        {
          "text": "滚动条样式",
          "link": "/frontend/css/scrollbar",
          "order": 115
        },
        {
          "text": "选择器",
          "link": "/frontend/css/selector",
          "order": 115
        },
        {
          "text": "奇淫巧技",
          "link": "/frontend/css/tricks",
          "order": 116
        }
      ],
      "collapsed": true,
      "order": 99
    },
    {
      "text": "HTML",
      "items": [
        {
          "text": "HTML 杂项",
          "link": "/frontend/html/misc",
          "order": 109
        },
        {
          "text": "OG 协议",
          "link": "/frontend/html/og",
          "order": 111
        }
      ],
      "collapsed": true,
      "order": 104
    },
    {
      "text": "JavaScript",
      "items": [
        {
          "text": "ES6+",
          "link": "/frontend/javascript/ES6+",
          "order": 1
        },
        {
          "text": "字符串",
          "link": "/frontend/javascript/string",
          "order": 2
        },
        {
          "text": "浏览器监听",
          "link": "/frontend/javascript/BOMObserver",
          "order": 66
        },
        {
          "text": "调用栈",
          "link": "/frontend/javascript/CallStack",
          "order": 67
        },
        {
          "text": "元素位置",
          "link": "/frontend/javascript/ElementPosition",
          "order": 69
        },
        {
          "text": "事件循环",
          "link": "/frontend/javascript/EventLoop",
          "order": 69
        },
        {
          "text": "垃圾回收机制",
          "link": "/frontend/javascript/GarbageCollection",
          "order": 71
        },
        {
          "text": "词法作用域",
          "link": "/frontend/javascript/LexicalScope",
          "order": 76
        },
        {
          "text": "Ajax",
          "link": "/frontend/javascript/ajax",
          "order": 97
        },
        {
          "text": "数组",
          "link": "/frontend/javascript/array",
          "order": 97
        },
        {
          "text": "二进制",
          "link": "/frontend/javascript/binary",
          "order": 98
        },
        {
          "text": "辞海",
          "link": "/frontend/javascript/dictionary",
          "order": 99
        },
        {
          "text": "fetch",
          "link": "/frontend/javascript/fetch",
          "order": 102
        },
        {
          "text": "深（浅）拷贝",
          "link": "/frontend/javascript/object-copy",
          "order": 111
        },
        {
          "text": "对象",
          "link": "/frontend/javascript/object",
          "order": 111
        },
        {
          "text": "Promise",
          "link": "/frontend/javascript/promise",
          "order": 112
        },
        {
          "text": "原型链",
          "link": "/frontend/javascript/prototype",
          "order": 112
        },
        {
          "text": "作用域",
          "link": "/frontend/javascript/scope",
          "order": 115
        },
        {
          "text": "严格模式",
          "link": "/frontend/javascript/strict-mode",
          "order": 115
        },
        {
          "text": "this 指向总结",
          "link": "/frontend/javascript/this_usage",
          "order": 116
        }
      ],
      "collapsed": true,
      "order": 106
    },
    {
      "text": "计算机网络",
      "items": [
        {
          "text": "长连接",
          "link": "/frontend/network/KeepAlive",
          "order": 75
        },
        {
          "text": "OSI 与 TCP/IP 模型对比",
          "link": "/frontend/network/OSI_vs_TCPIP_comparison",
          "order": 79
        },
        {
          "text": "跨域",
          "link": "/frontend/network/cors",
          "order": 99
        },
        {
          "text": "加密算法",
          "link": "/frontend/network/encryption",
          "order": 101
        },
        {
          "text": "HTTP",
          "link": "/frontend/network/http",
          "order": 104
        },
        {
          "text": "OSI 七层模型",
          "link": "/frontend/network/osi_model_layers",
          "order": 111
        },
        {
          "text": "请求代理",
          "link": "/frontend/network/proxy",
          "order": 112
        },
        {
          "text": "资源请求",
          "link": "/frontend/network/request",
          "order": 114
        },
        {
          "text": "网络安全",
          "link": "/frontend/network/security",
          "order": 115
        },
        {
          "text": "TCP & UDP",
          "link": "/frontend/network/tcp",
          "order": 116
        }
      ],
      "collapsed": true,
      "order": 110
    },
    {
      "text": "NPM",
      "items": [
        {
          "text": "changesets",
          "link": "/frontend/npm/changesets",
          "order": 0
        },
        {
          "text": "release-it",
          "link": "/frontend/npm/release-it",
          "order": 0
        },
        {
          "text": "版本规范",
          "link": "/frontend/npm/SemVer",
          "order": 83
        },
        {
          "text": "CLI",
          "link": "/frontend/npm/cli",
          "order": 99
        },
        {
          "text": "问题记录",
          "link": "/frontend/npm/FAQ",
          "order": 99
        },
        {
          "text": "常用推荐",
          "link": "/frontend/npm/libs",
          "order": 108
        },
        {
          "text": "开源许可协议",
          "link": "/frontend/npm/license",
          "order": 108
        },
        {
          "text": "package-exports",
          "link": "/frontend/npm/package-exports",
          "order": 112
        },
        {
          "text": "package.json",
          "link": "/frontend/npm/package-json",
          "order": 112
        },
        {
          "text": "包管理器",
          "link": "/frontend/npm/package-manager",
          "order": 112
        },
        {
          "text": "打补丁",
          "link": "/frontend/npm/package-patch",
          "order": 112
        },
        {
          "text": "pnpm 安装",
          "link": "/frontend/npm/pnpm",
          "order": 112
        }
      ],
      "collapsed": true,
      "order": 110
    },
    {
      "text": "性能",
      "items": [
        {
          "text": "前端性能衡量标准",
          "link": "/frontend/performance/WebVitals",
          "order": 87
        }
      ],
      "collapsed": true,
      "order": 112
    },
    {
      "text": "React",
      "items": [
        {
          "text": "React vs Vue",
          "link": "/frontend/react/react2vue",
          "order": 114
        },
        {
          "text": "Redux Toolkit 使用示例",
          "link": "/frontend/react/redux-toolkit",
          "order": 114
        },
        {
          "text": "Redux 使用示例",
          "link": "/frontend/react/redux",
          "order": 114
        }
      ],
      "collapsed": true,
      "order": 114
    },
    {
      "text": "正则",
      "items": [
        {
          "text": "基础概念",
          "link": "/frontend/regex/basics",
          "order": 98
        },
        {
          "text": "正则应用",
          "link": "/frontend/regex/use",
          "order": 117
        }
      ],
      "collapsed": true,
      "order": 114
    },
    {
      "text": "Vue",
      "items": [
        {
          "text": "KeepAlive",
          "link": "/frontend/vue/keep-alive",
          "order": 107
        },
        {
          "text": "nextTick",
          "link": "/frontend/vue/nextTick",
          "order": 110
        },
        {
          "text": "vue2 打包组件库",
          "link": "/frontend/vue/vue2-components",
          "order": 118
        }
      ],
      "collapsed": true,
      "order": 118
    }
  ],
  "/backend/": [
    {
      "text": "koa",
      "items": [
        {
          "text": "开始",
          "link": "/backend/koa/start",
          "order": 115
        },
        {
          "text": "实战",
          "link": "/backend/koa/use",
          "order": 117
        }
      ],
      "collapsed": false,
      "order": 107
    },
    {
      "text": "mysql",
      "items": [
        {
          "text": "安装",
          "link": "/backend/mysql/install",
          "order": 105
        }
      ],
      "collapsed": false,
      "order": 109
    },
    {
      "text": "node",
      "items": [
        {
          "text": "NodeEnv",
          "link": "/backend/node/env",
          "order": 0
        },
        {
          "text": "进程",
          "link": "/backend/node/process",
          "order": 0
        },
        {
          "text": "Node 读写流",
          "link": "/backend/node/streams",
          "order": 115
        }
      ],
      "collapsed": false,
      "order": 110
    },
    {
      "text": "redis",
      "items": [
        {
          "text": "安装",
          "link": "/backend/redis/install",
          "order": 105
        }
      ],
      "collapsed": false,
      "order": 114
    },
    {
      "text": "sqlite",
      "items": [
        {
          "text": "SQLite 递归查询",
          "link": "/backend/sqlite/recursion",
          "order": 114
        }
      ],
      "collapsed": false,
      "order": 115
    }
  ],
  "/cli/": [
    {
      "text": "git",
      "items": [
        {
          "text": "CommitLint",
          "link": "/cli/git/commitlint",
          "order": 0
        },
        {
          "text": "问题",
          "link": "/cli/git/FAQ",
          "order": 70
        },
        {
          "text": "CLI",
          "link": "/cli/git/cli",
          "order": 99
        },
        {
          "text": "集成",
          "link": "/cli/git/hub",
          "order": 104
        },
        {
          "text": "使用",
          "link": "/cli/git/use",
          "order": 117
        }
      ],
      "collapsed": false,
      "order": 103
    },
    {
      "text": "linux",
      "items": [
        {
          "text": "CLI",
          "link": "/cli/linux/cli",
          "order": 99
        },
        {
          "text": "使用",
          "link": "/cli/linux/use",
          "order": 117
        }
      ],
      "collapsed": false,
      "order": 108
    },
    {
      "text": "windows",
      "items": [
        {
          "text": "问题",
          "link": "/cli/windows/FAQ",
          "order": 70
        },
        {
          "text": "CLI",
          "link": "/cli/windows/cli",
          "order": 99
        },
        {
          "text": "WSL 安装 Docker",
          "link": "/cli/windows/wsl",
          "order": 119
        }
      ],
      "collapsed": false,
      "order": 119
    }
  ],
  "/interview/": [
    {
      "text": "计算机网络",
      "link": "/interview/01-Network",
      "order": 48
    },
    {
      "text": "浏览器原理",
      "link": "/interview/02-Browser",
      "order": 48
    },
    {
      "text": "HTML5 && CSS",
      "link": "/interview/03-HTML && CSS",
      "order": 48
    },
    {
      "text": "JavaScript 面试题",
      "link": "/interview/04-JavaScript",
      "order": 48
    },
    {
      "text": "TypeScript",
      "link": "/interview/06-TypeScript",
      "order": 48
    },
    {
      "text": "Vue 面试题",
      "link": "/interview/07-Vue",
      "order": 48
    },
    {
      "text": "React 面试题",
      "link": "/interview/08-React",
      "order": 48
    },
    {
      "text": "NestJs 面试题",
      "link": "/interview/NestJs",
      "order": 78
    },
    {
      "text": "前端性能优化面试题",
      "link": "/interview/Performance",
      "order": 80
    },
    {
      "text": "Vue3",
      "link": "/interview/Vue3",
      "order": 86
    },
    {
      "text": "前后端联动部署",
      "link": "/interview/backend-link-deploy",
      "order": 98
    },
    {
      "text": "部署前端应用",
      "link": "/interview/docker-frontend-deploy",
      "order": 100
    },
    {
      "text": "useState",
      "link": "/interview/useState",
      "order": 117
    },
    {
      "text": "Vite 面试题",
      "link": "/interview/vite",
      "order": 118
    },
    {
      "text": "webpack 基础知识",
      "link": "/interview/webpack",
      "order": 119
    }
  ]
})