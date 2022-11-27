import{_ as s,c as n,o as a,d as l}from"./app.e5c7f4ab.js";const m=JSON.parse('{"title":"Git \u5E38\u7528\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ED3\u5E93","slug":"\u4ED3\u5E93","link":"#\u4ED3\u5E93","children":[]},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]},{"level":2,"title":"\u589E\u52A0/\u5220\u9664\u6587\u4EF6","slug":"\u589E\u52A0-\u5220\u9664\u6587\u4EF6","link":"#\u589E\u52A0-\u5220\u9664\u6587\u4EF6","children":[]},{"level":2,"title":"\u4EE3\u7801\u63D0\u4EA4","slug":"\u4EE3\u7801\u63D0\u4EA4","link":"#\u4EE3\u7801\u63D0\u4EA4","children":[]},{"level":2,"title":"\u5206\u652F","slug":"\u5206\u652F","link":"#\u5206\u652F","children":[]},{"level":2,"title":"\u6807\u7B7E","slug":"\u6807\u7B7E","link":"#\u6807\u7B7E","children":[]},{"level":2,"title":"\u67E5\u770B\u4FE1\u606F","slug":"\u67E5\u770B\u4FE1\u606F","link":"#\u67E5\u770B\u4FE1\u606F","children":[]},{"level":2,"title":"\u8FDC\u7A0B\u540C\u6B65","slug":"\u8FDC\u7A0B\u540C\u6B65","link":"#\u8FDC\u7A0B\u540C\u6B65","children":[]},{"level":2,"title":"\u64A4\u9500","slug":"\u64A4\u9500","link":"#\u64A4\u9500","children":[]},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[]}],"relativePath":"vcs/git-basics.md","lastUpdated":1669197850000}'),p={name:"vcs/git-basics.md"},e=l(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1">Git \u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h1><h2 id="\u4ED3\u5E93" tabindex="-1">\u4ED3\u5E93 <a class="header-anchor" href="#\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4EE3\u7801\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git init </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">project-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git config -e </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[name]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[email address]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u589E\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1">\u589E\u52A0/\u5220\u9664\u6587\u4EF6 <a class="header-anchor" href="#\u589E\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span></span>
<span class="line"><span style="color:#676E95;"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm --cached </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git mv </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-original</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-renamed</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u4EE3\u7801\u63D0\u4EA4" tabindex="-1">\u4EE3\u7801\u63D0\u4EA4 <a class="header-anchor" href="#\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ... -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u5206\u652F" tabindex="-1">\u5206\u652F <a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#676E95;"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4ECE\u8FDC\u7A0B\u5206\u652F\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> origin/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --track </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --delete </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -dr </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote/branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u6807\u7B7E" tabindex="-1">\u6807\u7B7E <a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5217\u51FA\u6240\u6709tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u672C\u5730tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -d </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u8FDC\u7A0Btag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin :refs/tags/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770Btag\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u6307\u5B9Atag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63D0\u4EA4\u6240\u6709tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u67E5\u770B\u4FE1\u606F" tabindex="-1">\u67E5\u770B\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;"># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -S </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">keyword</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">git log </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git log </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --follow </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">git whatchanged </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -5 --pretty --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">git shortlog -sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --cached </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">first-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">second-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --shortstat </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git show --name-only </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="\u8FDC\u7A0B\u540C\u6B65" tabindex="-1">\u8FDC\u7A0B\u540C\u6B65 <a class="header-anchor" href="#\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">shortname</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --all</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u64A4\u9500" tabindex="-1">\u64A4\u9500 <a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --keep </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit</span></span>
<span class="line"><span style="color:#676E95;"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u751F\u6210\u4E00\u4E2A\u53EF\u4F9B\u53D1\u5E03\u7684\u538B\u7F29\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">git archive</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,21),c=[e];function r(o,i,t,b,D,y){return a(),n("div",null,c)}const A=s(p,[["render",r]]);export{m as __pageData,A as default};
