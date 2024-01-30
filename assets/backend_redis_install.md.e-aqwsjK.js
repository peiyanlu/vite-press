import{_ as s,e as a,o as i,Z as e}from"./chunks/framework.tCCUWFfl.js";const n="/vite-press/assets/img.xw7fM1wx.png",t="/vite-press/assets/img_1.4nC5hvSv.png",l="/vite-press/assets/img_2.NPvB9USy.png",p="/vite-press/assets/img_3.0hyQYiON.png",r="/vite-press/assets/img_4.usiY7Pzq.png",h="/vite-press/assets/img_5.yP9564LT.png",c="/vite-press/assets/img_6.9i7siWEZ.png",d="/vite-press/assets/img_7.keUm3mB8.png",C=JSON.parse('{"title":"安装","description":"Redis安装","frontmatter":{"title":"安装","description":"Redis安装","category":"redis","tags":["Redis"]},"headers":[],"relativePath":"backend/redis/install.md","filePath":"backend/redis/install.md","lastUpdated":1686303485000}'),o={name:"backend/redis/install.md"},k=e('<h1 id="redis-安装" tabindex="-1">Redis 安装 <a class="header-anchor" href="#redis-安装" aria-label="Permalink to &quot;Redis 安装&quot;">​</a></h1><p><code>redis</code> 是一个开源的、使用 <code>C</code> 语言编写的、支持网络交互的、可基于内存也可持久化的 <code>Key-Value</code> 数据库</p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>打开 <a href="https://github.com/MicrosoftArchive/redis/releases" target="_blank" rel="noreferrer">下载地址</a>，选择 <code>Latest</code> 版本 <img src="'+n+'" alt="img.png"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h4 id="_1、双击运行下载好的文件-点击-next" tabindex="-1">1、双击运行下载好的文件，点击 <code>Next</code> <a class="header-anchor" href="#_1、双击运行下载好的文件-点击-next" aria-label="Permalink to &quot;1、双击运行下载好的文件，点击 `Next`&quot;">​</a></h4><p><img src="'+t+'" alt="img_1.png"></p><h4 id="_2、勾选协议-点击-next" tabindex="-1">2、勾选协议，点击 <code>Next</code> <a class="header-anchor" href="#_2、勾选协议-点击-next" aria-label="Permalink to &quot;2、勾选协议，点击 `Next`&quot;">​</a></h4><p><img src="'+l+'" alt="img_2.png"></p><h4 id="_3、勾选将安装目录添加到-path-环境变量-按需更改安装目录" tabindex="-1">3、勾选将安装目录添加到 <code>PATH</code> 环境变量（按需更改安装目录） <a class="header-anchor" href="#_3、勾选将安装目录添加到-path-环境变量-按需更改安装目录" aria-label="Permalink to &quot;3、勾选将安装目录添加到 `PATH` 环境变量（按需更改安装目录）&quot;">​</a></h4><p><img src="'+p+'" alt="img_3.png"></p><h4 id="_4、使用默认配置-点击-next" tabindex="-1">4、使用默认配置，点击 <code>Next</code> <a class="header-anchor" href="#_4、使用默认配置-点击-next" aria-label="Permalink to &quot;4、使用默认配置，点击 `Next`&quot;">​</a></h4><p><img src="'+r+'" alt="img_4.png"></p><h4 id="_5、使用默认配置-点击-next" tabindex="-1">5、使用默认配置，点击 <code>Next</code> <a class="header-anchor" href="#_5、使用默认配置-点击-next" aria-label="Permalink to &quot;5、使用默认配置，点击 `Next`&quot;">​</a></h4><p><img src="'+h+'" alt="img_5.png"></p><h4 id="_6、点击-install" tabindex="-1">6、点击 <code>Install</code> <a class="header-anchor" href="#_6、点击-install" aria-label="Permalink to &quot;6、点击 `Install`&quot;">​</a></h4><p><img src="'+c+'" alt="img_6.png"></p><h4 id="_7、点击-finish" tabindex="-1">7、点击 <code>Finish</code> <a class="header-anchor" href="#_7、点击-finish" aria-label="Permalink to &quot;7、点击 `Finish`&quot;">​</a></h4><p><img src="'+d+`" alt="img_7.png"></p><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h2><p><code>win + r</code> 打开cmd窗口，输入 <code>redis-cli.exe -h 127.0.0.1 -p 6379</code> 回车</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set requirepass [password]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清除密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set requirepass &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get requirepass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 密码登录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [host] -p [port] -a [password]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [host] -p [port]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">auth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [password]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,22),g=[k];function m(_,b,u,F,x,y){return i(),a("div",null,g)}const q=s(o,[["render",m]]);export{C as __pageData,q as default};
