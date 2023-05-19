import{_ as s,j as a,k as e,S as n}from"./chunks/framework.6b5081d6.js";const A=JSON.parse('{"title":"FAQ","description":"","frontmatter":{"title":"FAQ","tags":["FAQ"]},"headers":[],"relativePath":"cli/git/git-FAQ.md","filePath":"cli/git/git-FAQ.md","lastUpdated":1684487737000}'),l={name:"cli/git/git-FAQ.md"},t=n(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="gitignore-添加忽略文件不生效" tabindex="-1">.gitignore 添加忽略文件不生效 <a class="header-anchor" href="#gitignore-添加忽略文件不生效" aria-label="Permalink to &quot;.gitignore 添加忽略文件不生效&quot;">​</a></h2><ul><li><p>原因：<code>.gitignore</code> 只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改 <code>.gitignore</code> 是无效的。</p></li><li><p>解决：把本地缓存删除（改变成未被追踪状态）</p></li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 删除文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.env.development</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p><code>--cached</code>：只从缓存区中删除指定的文件或目录，而不删除本地文件。如果不加这个参数，则会从缓存区和本地文件系统中都删除指定的文件或目录。</p></li><li><p><code>-r</code>： 进行递归删除，用于删除文件夹。</p></li></ul>`,5),o=[t];function p(i,c,r,d,g,C){return a(),e("div",null,o)}const h=s(l,[["render",p]]);export{A as __pageData,h as default};
