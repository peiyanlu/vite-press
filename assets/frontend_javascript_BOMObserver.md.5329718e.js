import{_ as s,o as n,c as a,U as l}from"./chunks/framework.c0c21d38.js";const C=JSON.parse('{"title":"浏览器监听","description":"监听元素变化、浏览器干预行为","frontmatter":{"title":"浏览器监听","description":"监听元素变化、浏览器干预行为","category":"javascript","tags":["浏览器","Observer"]},"headers":[],"relativePath":"frontend/javascript/BOMObserver.md","filePath":"frontend/javascript/BOMObserver.md","lastUpdated":1686303485000}'),p={name:"frontend/javascript/BOMObserver.md"},e=l(`<h1 id="浏览器监听" tabindex="-1">浏览器监听 <a class="header-anchor" href="#浏览器监听" aria-label="Permalink to &quot;浏览器监听&quot;">​</a></h1><p>监听用户的交互行为时我们会用 <code>addEventListener</code> 来监听 <code>click、mousedown、keydown、input</code> 等事件，但对于元素的变化、<code>performance</code> 的记录、浏览器干预行为这些不是用户交互的事件就要用 <code>XxxObserver</code> 的 <code>api</code> 了</p><h2 id="intersectionobserver" tabindex="-1">IntersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-label="Permalink to &quot;IntersectionObserver&quot;">​</a></h2><p><code>IntersectionObserver</code> 可以监听<strong>一个元素和可视区域相交部分的比例</strong>，然后在可视比例达到某个阈值的时候触发回调。</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> intersectionObserver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IntersectionObserver</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">entries</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">info:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">entries</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">intersectionRatio</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">threshold</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">intersectionObserver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#A6ACCD;">(dom)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="mutationobserver" tabindex="-1">MutationObserver <a class="header-anchor" href="#mutationobserver" aria-label="Permalink to &quot;MutationObserver&quot;">​</a></h2><p><code>MutationObserver</code> 可以监听<strong>对元素的属性的修改、对它的子节点的增删改</strong>。</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mutationObserver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MutationObserver</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">mutationsList</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mutationsList</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mutationObserver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#A6ACCD;">(dom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">attributes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">childList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="resizeobserver" tabindex="-1">ResizeObserver <a class="header-anchor" href="#resizeobserver" aria-label="Permalink to &quot;ResizeObserver&quot;">​</a></h2><p><code>ResizeObserver</code> 监听<strong>元素大小的改变</strong>，当 <code>width</code>、<code>height</code> 被修改时会触发回调。</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> resizeObserver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ResizeObserver</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">entries</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">当前大小</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">entries</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">resizeObserver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#A6ACCD;">(dom)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="performanceobserver" tabindex="-1">PerformanceObserver <a class="header-anchor" href="#performanceobserver" aria-label="Permalink to &quot;PerformanceObserver&quot;">​</a></h2><p><code>PerformanceObserver</code> 用于监听记录 <code>performance</code> 数据的行为，一旦记录了就会触发回调，这样我们就可以在回调里把这些数据上报。</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> performanceObserver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PerformanceObserver</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getEntries</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">entry</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#F07178;">)</span><span style="color:#676E95;font-style:italic;">// 上报</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">performanceObserver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">entryTypes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">measure</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ] </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mark 方法记录某个时间点</span></span>
<span class="line"><span style="color:#A6ACCD;">performance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">registered-observer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> measureClick </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// measure 方法记录某个时间段，后两个参数是时间点，不传代表从开始到现在。</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">performance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">measure</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button clicked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="reportingobserver" tabindex="-1">ReportingObserver <a class="header-anchor" href="#reportingobserver" aria-label="Permalink to &quot;ReportingObserver&quot;">​</a></h2><p><code>ReportingObserver</code> 监听过时的 <code>api</code>、浏览器的一些干预行为的报告，在回调里上报，这些是错误监听无法监听到但对了解网页运行情况很有用的数据。</p><ul><li><p>当浏览器运行到过时（<code>deprecation</code>）的 <code>api</code> 的时候，会在控制台打印一个过时的报告</p></li><li><p>浏览器还会在一些情况下对网页行为做一些干预（<code>intervention</code>），比如会把占用 <code>cpu</code> 太多的广告的 <code>iframe</code> 删掉</p></li><li><p>会在网络比较慢的时候把图片替换为占位图片，点击才会加载</p></li></ul><p>这些干预都是浏览器做的，会在控制台打印一个报告</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reportingObserver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ReportingObserver</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">reports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">observer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">report</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reports</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">report</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 上报</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">types</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">intervention</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deprecation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">reportingObserver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,19),o=[e];function r(t,c,y,D,i,F){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};