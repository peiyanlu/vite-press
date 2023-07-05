import{_ as a,o as l,c as p,k as s,a as e,t as o,U as r}from"./chunks/framework.c0c21d38.js";const m=JSON.parse('{"title":"构建JS库","description":"使用rollup构建一个js库","frontmatter":{"title":"构建JS库","description":"使用rollup构建一个js库","category":"rollup","tags":["rollup","js","lib"]},"headers":[],"relativePath":"frontend/build/rollup/lib-js.md","filePath":"frontend/build/rollup/lib-js.md","lastUpdated":1688117351000}'),c={name:"frontend/build/rollup/lib-js.md"},t={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),D=r(`<h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dirname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dirname</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@rollup/plugin-node-resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@rollup/plugin-commonjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@rollup/plugin-json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@rollup-plugin-terser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollup-plugin-cleanup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="配置rollup" tabindex="-1">配置rollup <a class="header-anchor" href="#配置rollup" aria-label="Permalink to &quot;配置rollup&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> babel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup/plugin-babel</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nodeResolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup/plugin-node-resolve</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> commonjs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup/plugin-commonjs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">terser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup-plugin-terser</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> cleanup </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rollup-plugin-cleanup</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">input</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// file: &#39;bundle.js&#39;, // 输出单个文件时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出多个文件时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">exports</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">named</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 入口文件有多个导出时，取消警告</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preserveModules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 保留模块结构</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preserveModulesRoot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 将保留的模块放在根级别的此路径下</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">nodeResolve</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">babel</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">babelHelpers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node_modules/**</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 只编译我们的源代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">terser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ES6代码压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cleanup</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 清除注释等</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">commonjs</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">external</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">@babel</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">runtime</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="配置package-json" tabindex="-1">配置package.json <a class="header-anchor" href="#配置package-json" aria-label="Permalink to &quot;配置package.json&quot;">​</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">clean</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node bin/clean.js --dir lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup --config build/rollup.config.js --silent</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lib</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用babel" tabindex="-1">使用babel <a class="header-anchor" href="#使用babel" aria-label="Permalink to &quot;使用babel&quot;">​</a></h2><p><code>rollup</code> 打包的结果是 <code>ES6</code>，如果需要兼容低版本，则需要 <code>babel</code></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@babel/core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@babel/preset-env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@rollup/plugin-babel</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">配置babel预设</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">在</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">src/.babelrc</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">中配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#FFCB6B;">&quot;presets&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#C3E88D;"> [</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#C3E88D;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/preset-env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">      {</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">false</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loose</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C3E88D;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>参数说明：</p><ul><li><p><code>modules</code> 必须设置为 <code>false</code>，否则 <code>Babel</code> 默认将代码编译为 <code>Commonjs</code> 格式的模块，<code>Rollup</code> 处理时将会出错</p></li><li><p><code>loose</code>：是否设置使用宽松模式，宽松模式使 <code>Babel</code> 在编译代码不完全按照 <code>ES6</code> 语义进行编译，而是编译成更接近于我们手写代码的形式，这样好处除了使代码更加精简，还会避免产生副作用。</p></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>典型的是对 ES6 class 语法进行转译的区别：</p><ul><li><p>如果不是用宽松模式，ES6 的方法通过 Object.defineProperty 进行定义，副作用导致 treeshaking 失效、class 语法报错等；</p></li><li><p>如果使用宽松模式，则直接在原型链上进行定义。</p></li></ul></div><ol start="2"><li>配置babelHelpers</li></ol><p>如果在 <code>babel</code> 插件中设置使用 <code>runtime</code> 模式：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">@babel/plugin-transform-runtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@babel/runtime</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>rollup.config.js</code> 中：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff add"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> babel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup/plugin-babel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">babel</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line diff add"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 默认bundled，但需要显示设置</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">babelHelpers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">external</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">@babel</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">runtime</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>.babelrc</code> 中：</p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  &quot;plugins&quot;: [ </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">    &quot;@babel/plugin-transform-runtime&quot; </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">  ] </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,21);function y(n,C,F,b,A,u){return l(),p("div",null,[s("h1",t,[e(o(n.$frontmatter.title)+" ",1),i]),D])}const f=a(c,[["render",y]]);export{m as __pageData,f as default};