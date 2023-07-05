import{_ as a,o as l,c as e,k as s,a as p,t,U as o}from"./chunks/framework.c0c21d38.js";const C=JSON.parse('{"title":"pretter配置","description":"pretter配置详解","frontmatter":{"title":"pretter配置","description":"pretter配置详解","category":"code","tags":["code","pretter"],"ignore":false},"headers":[],"relativePath":"frontend/code/pretter.md","filePath":"frontend/code/pretter.md","lastUpdated":1687610515000}'),r={name:"frontend/code/pretter.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=o(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 1.一行代码的最大字符数，默认是80(printWidth: &lt;int&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">printWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 2.tab宽度为2空格(tabWidth: &lt;int&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tabWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 3.是否使用tab来缩进，我们使用空格(useTabs: &lt;bool&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">useTabs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 4.结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号，我选择无分号结尾的风格(semi: &lt;bool&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">semi</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 5.使用单引号(singleQuote: &lt;bool&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">singleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 6.object对象中key值是否加引号（quoteProps: &quot;&lt;as-needed|consistent|preserve&gt;&quot;）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">quoteProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">as-needed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 7.在jsx文件中的引号需要单独设置（jsxSingleQuote: &lt;bool&gt;）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jsxSingleQuote</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 8.尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: &quot;&lt;es5|none|all&gt;&quot;）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trailingComma</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 9.object对象里面的key和value值和括号间的空格(bracketSpacing: &lt;bool&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bracketSpacing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 10.jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: &lt;bool&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jsxBracketSameLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: &quot;&lt;always|avoid&gt;&quot;）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">arrowParens</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">always</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 12.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: &lt;int&gt;  rangeEnd: &lt;int&gt;）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rangeStart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rangeEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">Infinity,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 18. vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">vueIndentScriptAndStyle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 19.    endOfLine: &quot;&lt;lf|crlf|cr|auto&gt;&quot; 行尾换行符,默认是lf,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">endOfLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 20.embeddedLanguageFormatting: &quot;off&quot;,默认是auto,控制被引号包裹的代码是否进行格式化</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">embeddedLanguageFormatting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 14. requirePragma: &lt;bool&gt;,格式化有特定开头编译指示的文件 比如下面两种</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">prettier</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">format</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 15.insertPragma: &lt;bool&gt; 自当插入pragma到已经完成的format的文件开头</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 16. proseWrap: &quot;&lt;always|never|preserve&gt;&quot; 文章换行,默认情况下会对你的markdown文件换行进行format会控制在printwidth以内</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 13. 指定parser,因为pretter会自动选择,所以一般不用指定(parser: &quot;&lt;string&gt;&quot;  parser: require(&quot;./my-parser&quot;))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;babel&quot; (via @babel/parser) Named &quot;babylon&quot; until v1.16.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;babel-flow&quot; (same as &quot;babel&quot; but enables Flow parsing explicitly to avoid ambiguity) First available in v1.16.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;babel-ts&quot; (similar to &quot;typescript&quot; but uses Babel and its TypeScript plugin) First available in v2.0.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;flow&quot; (via flow-parser)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;typescript&quot; (via @typescript-eslint/typescript-estree) First available in v1.4.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;espree&quot; (via espree) First available in v2.2.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;meriyah&quot; (via meriyah) First available in v2.2.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;css&quot; (via postcss-scss and postcss-less, autodetects which to use) First available in v1.7.1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;scss&quot; (same parsers as &quot;css&quot;, prefers postcss-scss) First available in v1.7.1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;less&quot; (same parsers as &quot;css&quot;, prefers postcss-less) First available in v1.7.1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;json&quot; (via @babel/parser parseExpression) First available in v1.5.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;json5&quot; (same parser as &quot;json&quot;, but outputs as json5) First available in v1.13.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;json-stringify&quot; (same parser as &quot;json&quot;, but outputs like JSON.stringify) First available in v1.13.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;graphql&quot; (via graphql/language) First available in v1.5.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;markdown&quot; (via remark-parse) First available in v1.8.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;mdx&quot; (via remark-parse and @mdx-js/mdx) First available in v1.15.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;html&quot; (via angular-html-parser) First available in 1.15.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;vue&quot; (same parser as &quot;html&quot;, but also formats vue-specific syntax) First available in 1.10.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;angular&quot; (same parser as &quot;html&quot;, but also formats angular-specific syntax via angular-estree-parser) First available in 1.15.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;lwc&quot; (same parser as &quot;html&quot;, but also formats LWC-specific syntax for unquoted template attributes) First available in 1.17.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;yaml&quot; (via yaml and yaml-unist-parser) First available in 1.14.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 17. htmlWhitespaceSensitivity: &quot;&lt;css|strict|ignore&gt;&quot; html中的空格敏感性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 针对不同文件或目录设置不同配置的方法,json格式例子</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   &quot;semi&quot;: false,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   &quot;overrides&quot;: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       &quot;files&quot;: &quot;*.test.js&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         &quot;semi&quot;: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       &quot;files&quot;: [&quot;*.html&quot;, &quot;legacy/**/*.js&quot;],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         &quot;tabWidth&quot;: 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div>`,1);function u(n,b,F,D,m,f){return l(),e("div",null,[s("h1",c,[p(t(n.$frontmatter.title)+" ",1),i]),y])}const A=a(r,[["render",u]]);export{C as __pageData,A as default};