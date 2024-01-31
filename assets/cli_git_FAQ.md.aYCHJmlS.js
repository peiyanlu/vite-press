import{_ as i,e as a,o as e,Z as s}from"./chunks/framework.tCCUWFfl.js";const k=JSON.parse('{"title":"问题","description":"Git问题记录","frontmatter":{"title":"问题","description":"Git问题记录","category":"git","tags":["FAQ"]},"headers":[],"relativePath":"cli/git/FAQ.md","filePath":"cli/git/FAQ.md","lastUpdated":1686303485000}'),t={name:"cli/git/FAQ.md"},n=s(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="gitignore-添加忽略文件不生效" tabindex="-1">.gitignore 添加忽略文件不生效 <a class="header-anchor" href="#gitignore-添加忽略文件不生效" aria-label="Permalink to &quot;.gitignore 添加忽略文件不生效&quot;">​</a></h2><ul><li><p>原因：<code>.gitignore</code> 只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改 <code>.gitignore</code> 是无效的。</p></li><li><p>解决：把本地缓存删除（改变成未被追踪状态）</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm .env.development --cached</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm dist --cached -r</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p><code>--cached</code>：只从缓存区中删除指定的文件或目录，而不删除本地文件。如果不加这个参数，则会从缓存区和本地文件系统中都删除指定的文件或目录。</p></li><li><p><code>-r</code>： 进行递归删除，用于删除文件夹。</p></li></ul>`,5),l=[n];function r(p,c,o,d,h,g){return e(),a("div",null,l)}const u=i(t,[["render",r]]);export{k as __pageData,u as default};