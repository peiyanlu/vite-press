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
    "link": "/cli/",
    "text": "CLI",
    "activeMatch": "/cli/",
    "order": 3,
    "sidebar": true
  },
  {
    "link": "/backend/",
    "text": "后端",
    "activeMatch": "/backend/",
    "order": 4,
    "sidebar": true
  },
  {
    "link": "/archive/",
    "text": "归档",
    "activeMatch": "/archive/",
    "order": 5,
    "sidebar": false
  }
] as unknown as DefaultTheme.NavItem[]

export const getSidebar = () => ({
  "/frontend/": [
    {
      "text": "browser",
      "items": [
        {
          "text": "基础知识",
          "link": "/frontend/browser/basics",
          "order": 98
        },
        {
          "text": "浏览器缓存",
          "link": "/frontend/browser/cache",
          "order": 99
        },
        {
          "text": "数据存储",
          "link": "/frontend/browser/storage",
          "order": 115
        }
      ],
      "collapsed": false,
      "order": 98
    },
    {
      "text": "build",
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
      "collapsed": false,
      "order": 98
    },
    {
      "text": "code",
      "items": [
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
          "text": "其他应用",
          "link": "/frontend/code/others",
          "order": 111
        },
        {
          "text": "pretter配置",
          "link": "/frontend/code/pretter",
          "order": 112
        }
      ],
      "collapsed": false,
      "order": 99
    },
    {
      "text": "css",
      "items": [
        {
          "text": "components",
          "items": [],
          "collapsed": false,
          "order": 99
        },
        {
          "text": "CSS 选择器",
          "link": "/frontend/css/selector",
          "order": 115
        },
        {
          "text": "CSS 奇淫巧技",
          "link": "/frontend/css/tricks",
          "order": 116
        },
        {
          "text": "CSS 权重",
          "link": "/frontend/css/weight",
          "order": 119
        }
      ],
      "collapsed": false,
      "order": 99
    },
    {
      "text": "html",
      "items": [
        {
          "text": "OG 协议",
          "link": "/frontend/html/og",
          "order": 111
        }
      ],
      "collapsed": false,
      "order": 104
    },
    {
      "text": "javascript",
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
        }
      ],
      "collapsed": false,
      "order": 106
    },
    {
      "text": "network",
      "items": [
        {
          "text": "长连接",
          "link": "/frontend/network/KeepAlive",
          "order": 75
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
          "text": "TCP",
          "link": "/frontend/network/tcp",
          "order": 116
        }
      ],
      "collapsed": false,
      "order": 110
    },
    {
      "text": "npm",
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
        }
      ],
      "collapsed": false,
      "order": 110
    },
    {
      "text": "regex",
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
      "collapsed": false,
      "order": 114
    },
    {
      "text": "vue",
      "items": [
        {
          "text": "vue2打包组件库",
          "link": "/frontend/vue/vue2-components",
          "order": 118
        }
      ],
      "collapsed": false,
      "order": 118
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
  ]
})