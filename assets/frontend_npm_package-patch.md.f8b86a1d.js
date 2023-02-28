import{_ as s,c as n,o as a,a as e}from"./app.10e72553.js";const A=JSON.parse('{"title":"依赖包重新打包","description":"","frontmatter":{},"headers":[{"level":2,"title":"设置package.json","slug":"设置package-json","link":"#设置package-json","children":[]},{"level":2,"title":"1、安装依赖","slug":"_1、安装依赖","link":"#_1、安装依赖","children":[]},{"level":2,"title":"2、修改依赖包","slug":"_2、修改依赖包","link":"#_2、修改依赖包","children":[]},{"level":2,"title":"3、创建补丁","slug":"_3、创建补丁","link":"#_3、创建补丁","children":[]},{"level":2,"title":"4、应用补丁","slug":"_4、应用补丁","link":"#_4、应用补丁","children":[]},{"level":2,"title":"Dev-only","slug":"dev-only","link":"#dev-only","children":[]}],"relativePath":"frontend/npm/package-patch.md","lastUpdated":1677576113000}'),l={name:"frontend/npm/package-patch.md"},p=e(`<h1 id="依赖包重新打包" tabindex="-1">依赖包重新打包 <a class="header-anchor" href="#依赖包重新打包" aria-hidden="true">#</a></h1><h2 id="设置package-json" tabindex="-1">设置package.json <a class="header-anchor" href="#设置package-json" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">postinstall</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">patch-package</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn install 时将会自动为依赖包打补丁</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// yarn install --registry=http://nexus.simulate.com:8081/repository/npm-group/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_1、安装依赖" tabindex="-1">1、安装依赖 <a class="header-anchor" href="#_1、安装依赖" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn add patch-package postinstall-postinstall</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Notes：</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn环境安装postinstall-postinstall是为了使用yarn remove后也可以重新执行postinstall hook</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2、修改依赖包" tabindex="-1">2、修改依赖包 <a class="header-anchor" href="#_2、修改依赖包" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// javascript code</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、创建补丁" tabindex="-1">3、创建补丁 <a class="header-anchor" href="#_3、创建补丁" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 为依赖包创建补丁</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn patch-package packageName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 为依赖包的依赖包创建补丁(通过 / 分割)</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn patch-package packageName/packageName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">eg: node_modules/package/node_modules/another-package</span></span>
<span class="line"><span style="color:#A6ACCD;">a、yarn patch-package package/another-package</span></span>
<span class="line"><span style="color:#A6ACCD;">b、yarn patch-package @my/package/@my/other-package  // scoped packages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">--create-issue</span></span>
<span class="line"><span style="color:#A6ACCD;">对于源在 GitHub 上托管的包，此选项会根据您的差异在 Web 浏览器打开带有该问题的issue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--use-yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">patch-package 默认是根据项目中的 lockfile 来决定使用 npm 还是 yarn，如果两种都有，则使用 npm，可以通过这个参数启用 yarn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude &lt;regexp&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">创建补丁文件时，忽略与正则表达式匹配的路径，路径相对于要修改的依赖包的根目录，默认: package\\\\.json$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--include &lt;regexp&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">与 --exclude &lt;regexp&gt; 相反，创建补丁文件时仅考虑与正则表达式匹配的路径，默认: .*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--case-sensitive-path-filtering</span></span>
<span class="line"><span style="color:#A6ACCD;">使 --include 或 --exclude 中使用的正则表达式区分大小写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--patch-dir</span></span>
<span class="line"><span style="color:#A6ACCD;">指定放置补丁文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_4、应用补丁" tabindex="-1">4、应用补丁 <a class="header-anchor" href="#_4、应用补丁" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn patch-package 不带参数应用所有补丁</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options：</span></span>
<span class="line"><span style="color:#A6ACCD;">--error-on-fail</span></span>
<span class="line"><span style="color:#A6ACCD;">失败后强制 patch-package 以代码 1 退出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--reverse</span></span>
<span class="line"><span style="color:#A6ACCD;">取消应用所有补丁。如果打补丁后，补丁文件被修改过，此操作将失败，此时可以重新安装 node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--patch-dir</span></span>
<span class="line"><span style="color:#A6ACCD;">指定放置补丁文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="dev-only" tabindex="-1">Dev-only <a class="header-anchor" href="#dev-only" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">打包 devDependencies 中的依赖</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package-name+0.44.0.patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">to</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package-name+0.44.0.dev.patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,14),c=[p];function r(i,o,t,b,d,C){return a(),n("div",null,c)}const y=s(l,[["render",r]]);export{A as __pageData,y as default};
