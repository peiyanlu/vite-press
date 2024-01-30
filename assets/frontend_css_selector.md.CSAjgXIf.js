import{u as k}from"./chunks/theme.Y5t6WcGy.js";import{d as g,o as t,e as p,F as b,s as v,v as h,k as r,q as s,_ as m,n as a,z as y,D as C,x as f,l as F,Z as e}from"./chunks/framework.tCCUWFfl.js";const q=g({__name:"NthChild",setup(o){const n=k("nth-child");return(d,E)=>(t(),p("div",{class:h(r(n).b())},[(t(),p(b,null,v(10,u=>s("div",{key:u,class:h(r(n).e("item"))},null,2)),64))],2))}}),l=m(q,[["__scopeId","data-v-fa38ffa2"]]),T=g({__name:"TypeChild",setup(o){const n=["div","p","a","span","a","span","a","span","a","div","p","a","p","a","span","a","span"],d=k("type-child");return(E,u)=>(t(),p("div",{class:h(r(d).b())},[(t(),p(b,null,v(n,(c,_)=>a(F(c),{key:c+_,class:h(r(d).e("item"))},{default:y(()=>[C(f(c.slice(0,1)),1)]),_:2},1032,["class"])),64))],2))}}),i=m(T,[["__scopeId","data-v-6edfdb1d"]]),A=e(`<h1 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-label="Permalink to &quot;CSS 选择器&quot;">​</a></h1><h2 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to &quot;通配符&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="id选择器" tabindex="-1">id选择器 <a class="header-anchor" href="#id选择器" aria-label="Permalink to &quot;id选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="class选择器" tabindex="-1">class选择器 <a class="header-anchor" href="#class选择器" aria-label="Permalink to &quot;class选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="标签选择器" tabindex="-1">标签选择器 <a class="header-anchor" href="#标签选择器" aria-label="Permalink to &quot;标签选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>~=</code>、 <code>|=</code>、 <code>^=</code>、 <code>$=</code>、 <code>*=</code> 的区别：</p><ul><li><p><code>value</code> 是完整单词：<code>~=</code>、 <code>|=</code></p></li><li><p><code>value</code> 是拼接字符串：<code>*=</code>、 <code>^=</code>、 <code>$=</code></p></li></ul><hr><ol><li><code>attribute</code> 属性中<strong>包含</strong> <code>value</code></li></ol><p><code>~=</code>： 包含独立的单词</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[title~=flower]  --&gt;  &lt;img title=&quot;tulip flower&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>*=</code>： 包含这个词</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[title*=flower]  --&gt;  &lt;img title=&quot;ffffflowerrrrrr&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>attribute</code> 属性以 <code>value</code> <strong>开头</strong></li></ol><p><code>|=</code>： 必须是完整且唯一的单词，或者以 <code>-</code> 分隔开</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[lang|=en]  --&gt;  &lt;p lang=&quot;en&quot;&gt;  &lt;p lang=&quot;en-us&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>^=</code>： 前几个字母匹配就可以</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[lang^=en]  --&gt;  &lt;p lang=&quot;ennn&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>attribute</code> 属性以 <code>value</code> <strong>结尾</strong></li></ol><p><code>$=</code>： 后几个字母匹配就可以</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[href$=&quot;.pdf&quot;]  --&gt;  &lt;a href=&quot;/file.pdf&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="后代选择器" tabindex="-1">后代选择器 <a class="header-anchor" href="#后代选择器" aria-label="Permalink to &quot;后代选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.app</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="子代选择器" tabindex="-1">子代选择器 <a class="header-anchor" href="#子代选择器" aria-label="Permalink to &quot;子代选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="相邻选择器" tabindex="-1">相邻选择器 <a class="header-anchor" href="#相邻选择器" aria-label="Permalink to &quot;相邻选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="兄弟选择器" tabindex="-1">兄弟选择器 <a class="header-anchor" href="#兄弟选择器" aria-label="Permalink to &quot;兄弟选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="伪类选择器" tabindex="-1">伪类选择器 <a class="header-anchor" href="#伪类选择器" aria-label="Permalink to &quot;伪类选择器&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:first-letter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:first-line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="图例展示" tabindex="-1">图例展示 <a class="header-anchor" href="#图例展示" aria-label="Permalink to &quot;图例展示&quot;">​</a></h3><ul><li>span:first-of-type</li></ul>`,39),S=s("ul",null,[s("li",null,"div:first-child")],-1),D=s("ul",null,[s("li",null,"div:nth-child(n)")],-1),B=s("ul",null,[s("li",null,"a:nth-of-type(2n)")],-1),P=s("ul",null,[s("li",null,"p:only-of-type")],-1),w=s("ul",null,[s("li",null,"span:nth-last-of-type(2n)")],-1),x=s("ul",null,[s("li",null,"a:nth-last-child(2n)")],-1),V=s("ul",null,[s("li",null,"p:last-of-type")],-1),I=s("ul",null,[s("li",null,"span:last-child")],-1),N=e('<h3 id="nth用法技巧" tabindex="-1">nth用法技巧 <a class="header-anchor" href="#nth用法技巧" aria-label="Permalink to &quot;nth用法技巧&quot;">​</a></h3><ul><li>选择列表中的偶数标签</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',3),R=e('<ul><li>选择列表中的奇数标签</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2n-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2),$=e('<ul><li>选择从第6个开始的，直到最后</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n+6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2),z=e('<ul><li>选择第1个到第6个</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n+6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2),O=e('<ul><li>选择第6个到第9个</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n+6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n+9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',2),U=JSON.parse('{"title":"选择器","description":"CSS选择器","frontmatter":{"title":"选择器","description":"CSS选择器","category":"css","tags":["CSS","选择器"]},"headers":[],"relativePath":"frontend/css/selector.md","filePath":"frontend/css/selector.md","lastUpdated":1686303485000}'),j={name:"frontend/css/selector.md"},Z=Object.assign(j,{setup(o){return(n,d)=>(t(),p("div",null,[A,a(i,{class:"aa"}),S,a(i,{class:"bb"}),D,a(i,{class:"cc"}),B,a(i,{class:"dd"}),P,a(i,{class:"ee"}),w,a(i,{class:"ff"}),x,a(i,{class:"gg"}),V,a(i,{class:"hh"}),I,a(i,{class:"ii"}),N,a(l,{class:"aa"}),R,a(l,{class:"bb"}),$,a(l,{class:"cc"}),z,a(l,{class:"dd"}),O,a(l,{class:"ee"})]))}});export{U as __pageData,Z as default};
