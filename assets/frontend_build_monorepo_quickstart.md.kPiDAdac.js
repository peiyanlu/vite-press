import{_ as e,e as i,q as s,D as n,x as p,Z as l,o}from"./chunks/framework.tCCUWFfl.js";const y=JSON.parse('{"title":"快速开始","description":"从零搭建monorepo","frontmatter":{"title":"快速开始","description":"从零搭建monorepo","category":"monorepo","tags":["monorepo","pnpm"],"order":0},"headers":[],"relativePath":"frontend/build/monorepo/quickstart.md","filePath":"frontend/build/monorepo/quickstart.md","lastUpdated":1687165942000}'),t={name:"frontend/build/monorepo/quickstart.md"},d={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),r=l(`<p><code>monorepo</code>：单个代码库中许多不同应用和包的集合。</p><p><code>polyrepo</code>：分别发布和版本控制的多个代码库。</p><hr><ul><li><p>在 <code>polyrepo</code> 设置中，在应用程序之间共享代码的过程相对较长。假设有三个单独的存储库：<code>app</code>、<code>docs</code> 和 <code>shared-utils</code>。<code>app</code> 和 <code>docs</code> 都依赖于 <code>shared-utils</code>，<code>shared-utils</code> 作为包发布在 <code>npm</code> 上。 假设 <code>shared-utils</code> 中的错误导致 <code>app</code> 和 <code>docs</code> 中出现严重问题。您需要：</p><ul><li><p>在 <code>shared-utils</code> 中提交修复错误</p></li><li><p>在共享实用程序中运行发布任务以将其发布到 <code>npm</code></p></li><li><p>在 <code>app</code> 中提交，升级 <code>shared-utils</code> 依赖项的版本</p></li><li><p>在 <code>docs</code> 中提交，升级 <code>shared-utils</code> 依赖项的版本</p></li><li><p><code>app</code> 和 <code>docs</code> 现已准备就绪，可以部署。</p></li></ul></li><li><p>在 <code>monorepo</code> 设置中，<code>shared-utils</code> 将与 <code>app</code> 和 <code>docs</code> 位于同一代码库中。这使得过程非常简单：</p><ul><li><p>在 <code>shared-utils</code> 中提交修复错误</p></li><li><p><code>app</code> 和 <code>docs</code> 现已准备就绪，可以部署。</p></li></ul></li></ul><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建一个新目录并进入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monorepo </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monorepo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="创建-workspace" tabindex="-1">创建 workspace <a class="header-anchor" href="#创建-workspace" aria-label="Permalink to &quot;创建 workspace&quot;">​</a></h2><p>在项目根目录中新建 <code>pnpm-workspace.yaml</code>，并指定子包，例如：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 子目录 packages/ 中的所有包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;packages/*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 排除 test 目录的包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;!**/test/**&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="构建-package-产物" tabindex="-1">构建 package 产物 <a class="header-anchor" href="#构建-package-产物" aria-label="Permalink to &quot;构建 package 产物&quot;">​</a></h2><p>项目根目录下执行 <code>pnpm run build</code> 来对每个子包进行构建：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm -r run build&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>加入 <code>-r</code> 是指定为 <code>workspace</code> 中的子包执行 <code>build</code> 命令。</p></li><li><p>默认情况下，<code>pnpm</code> 会根据子包的依赖拓扑排序，按顺序对子包执行命令，以避免在构建某个包的时候，出现子依赖的构建产物未生成的问题，进而引发比如类型错误等问题。另外如果两个子包没有依赖关系，<code>pnpm</code> 会并发进行构建。</p></li></ul><h2 id="监听-package-变更" tabindex="-1">监听 package 变更 <a class="header-anchor" href="#监听-package-变更" aria-label="Permalink to &quot;监听 package 变更&quot;">​</a></h2><p>在项目根目录下执行 <code>pnpm run watch</code>，以对每个子包执行 <code>watch</code> 命令监听文件的变更以生成最新的构建产物：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm --parallel -r run watch&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>加入 <code>-r</code> 是指定为 <code>workspace</code> 中的子包执行 <code>watch</code> 命令。</p></li><li><p><code>watch</code> 命令是会长时间运行监听文件变更，进程不会自动退出（除了报错或者手动退出），因此需要加上 <code>--parallel</code> 告诉 <code>pnpm</code> 运行该脚本时完全忽略并发和拓扑排序。</p></li></ul>`,17);function h(a,k,u,m,b,g){return o(),i("div",null,[s("h1",d,[n(p(a.$frontmatter.title)+" ",1),c]),r])}const F=e(t,[["render",h]]);export{y as __pageData,F as default};
