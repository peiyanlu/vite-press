import{_ as e,e as o,o as c,Z as d}from"./chunks/framework.tCCUWFfl.js";const h=JSON.parse('{"title":"TCP","description":"介绍什么是TCP","frontmatter":{"title":"TCP","description":"介绍什么是TCP","category":"network","tags":["network","TCP","UDP"]},"headers":[],"relativePath":"frontend/network/tcp.md","filePath":"frontend/network/tcp.md","lastUpdated":1686303485000}'),t={name:"frontend/network/tcp.md"},l=d('<h1 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h1><h2 id="tcp-ip网络模型" tabindex="-1">TCP/IP网络模型 <a class="header-anchor" href="#tcp-ip网络模型" aria-label="Permalink to &quot;TCP/IP网络模型&quot;">​</a></h2><p><strong>TCP/IP网络模型</strong>是互联网最基本的通信模型，它是由两个协议簇（Protocol Suite）组成：<code>TCP</code>（传输控制协议）和 <code>IP</code>（网际协议）。 共分为四层，分别为：</p><ol><li><p>应用层（Application Layer）：处理特定应用程序的协议，例如 <code>HTTP</code>、<code>FTP</code>、<code>SMTP</code> 等。</p></li><li><p>传输层（Transport Layer）：提供端到端的接口，负责向两台主机中的应用程序提供通信服务，常用协议有 <code>TCP</code>、<code>UDP</code> 等。</p></li><li><p>网络层（Internet Layer）：处理网络上的流量路由和寻址，主要包括 <code>IP</code> 协议。</p></li><li><p>数据链路层（Link Layer）：负责处理网络物理设备和网络之间的数据传输，常用协议有 <code>Ethernet</code>、<code>PPP</code> 等。</p></li></ol><p><code>TCP/IP</code> 网络模型与 <code>OSI</code> 网络模型相似，但是它们之间存在一些差异。<code>TCP/IP</code> 网络模型是一个更加实用的模型，主要应用于互联网和局域网等通信网络。</p><h2 id="tcp-三次握手" tabindex="-1">TCP 三次握手 <a class="header-anchor" href="#tcp-三次握手" aria-label="Permalink to &quot;TCP 三次握手&quot;">​</a></h2><ol><li><p>第一次握手：客户端向服务器发送 <code>SYN</code> 包（<code>SYN=j</code>）并进入 <code>SYN_SENT</code> 状态，等待服务器确认。</p></li><li><p>第二次握手：服务器收到客户端的 <code>SYN</code> 包后，确认客户端的 <code>SYN</code>（<code>ACK=j+1</code>），并向客户端发送一个自己的 <code>SYN</code> 包（<code>SYN=k</code> ），即 <code>SYN+ACK</code> 包，此时服务器进入 <code>SYN_RECV</code> 状态。</p></li><li><p>第三次握手：客户端收到服务器的 <code>SYN+ACK</code> 包后，向服务器发送确认包 <code>ACK</code>（<code>ACK=k+1</code> ），此包发送完毕，客户端和服务器进入 <code>ESTABLISHED</code> 状态，<code>TCP</code> 连接建立成功。</p></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。</p></div><h2 id="tcp-四次挥手" tabindex="-1">TCP 四次挥手 <a class="header-anchor" href="#tcp-四次挥手" aria-label="Permalink to &quot;TCP 四次挥手&quot;">​</a></h2><ol><li><p>客户端发送连接释放报文段（<code>FIN=1，seq=x</code>），并进入 <code>FIN_WAIT_1</code> 状态，等待服务端确认。</p></li><li><p>服务端收到连接释放报文段后，发送确认报文段（<code>ACK=1，ack=x+1</code>），进入 <code>CLOSE_WAIT</code> 状态，等待客户端发送连接释放报文段。</p></li><li><p>如果服务端有要发送的数据，会先将数据发送完毕，然后发送连接释放报文段（<code>FIN=1，seq=y</code>），进入 <code>LAST_ACK</code> 状态，等待客户端确认。</p></li><li><p>客户端收到连接释放报文段后，发送确认报文段（<code>ACK=1，ack=y+1</code>），进入 <code>TIME_WAIT</code> 状态，等待 <code>2MSL</code> 后进入 <code>CLOSED</code> 状态。<code>2MSL</code> 是为了确保服务端收到了确认报文段，如果没有收到则会重传连接释放报文段。</p></li><li><p>服务端收到客户端发送的确认报文段后，进入 <code>CLOSED</code> 状态，释放连接。</p></li><li><p>客户端等待 <code>2MSL</code> 后，确认服务端已经收到了确认报文段，进入 <code>CLOSED</code> 状态，释放连接。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>总结来说，<code>TCP</code> 四次挥手过程的目的是为了确保客户端和服务端都知道连接已经关闭，并且在关闭连接之前，双方都有机会传递完所有的数据。在这个过程中，双方都会进入一些状态来等待对方的确认和数据传输。</p></div><h2 id="tcp-和-udp-的区别" tabindex="-1">TCP 和 UDP 的区别 <a class="header-anchor" href="#tcp-和-udp-的区别" aria-label="Permalink to &quot;TCP 和 UDP 的区别&quot;">​</a></h2><p><code>TCP</code> 和 <code>UDP</code> 是传输层协议，用于在网络上传输数据，但它们之间有几个重要的区别。</p><ol><li><p>可靠性：<code>TCP</code> 是可靠的，它确保数据包的正确性和完整性。它使用三次握手建立连接，确认数据包的接收，并保证数据包的顺序。而 <code>UDP</code> 则是不可靠的，因为它不保证数据包的正确性、完整性和顺序。</p></li><li><p>连接：<code>TCP</code> 是面向连接的协议，建立连接、数据传输和释放连接都需要经过一定的过程。<code>UDP</code> 则是无连接的，发送端只是直接把数据包发送给接收端，不需要连接的建立和释放过程。</p></li><li><p>效率：<code>UDP</code> 比 <code>TCP</code> 快，因为它不需要建立连接和保证数据包的可靠传输。但是，由于 <code>UDP</code> 不保证数据包的可靠性和完整性，所以需要应用程序来负责处理这些问题。</p></li><li><p>应用场景：<code>TCP</code> 适用于需要可靠数据传输的应用程序，如文件传输、电子邮件、Web应用程序等。<code>UDP</code> 适用于需要快速数据传输的应用程序，如视频、音频、游戏等。</p></li></ol><p>总之，<code>TCP</code> 提供了可靠性和顺序控制，而 <code>UDP</code> 提供了快速传输和更少的开销。选择哪种协议取决于应用程序的需求和特点。</p><h2 id="tcp-粘包" tabindex="-1">TCP 粘包 <a class="header-anchor" href="#tcp-粘包" aria-label="Permalink to &quot;TCP 粘包&quot;">​</a></h2><p><code>TCP</code> 粘包是指：发送方发送的若干包数据到接收方接收时粘成一包，从接收缓冲区看，后一包数据的头紧接着前一包数据的尾。也就是说，多个数据包粘合在了一起形成了一个粘包。</p><p><strong>出现原因：</strong></p><ol><li><p>发送方缓存数据包过多或传输速度过快，导致多个数据包一次性发送。</p></li><li><p>接收方读取数据包的方式不当，比如采用固定长度的方式读取数据，而不考虑数据包之间的边界问题。</p></li><li><p>网络拥塞、传输延迟</p></li></ol><p><strong>解决对策：</strong></p><ol><li><p>定长包：发送方在发送数据时，将每个数据包的大小固定为一个定值，接收方按照这个固定的大小来接收数据包。</p></li><li><p>分隔符：发送方在每个数据包的结尾添加一个特殊的分隔符，接收方在接收数据时按照这个分隔符来区分不同的数据包。</p></li><li><p>包头+包体：在每个数据包中添加包头和包体，包头用来描述包体的长度和其他属性，接收方在接收数据时先读取包头，然后根据包头中的长度信息来读取包体。</p></li><li><p>应用层协议：应用层协议可以自定义数据的格式，发送方和接收方都按照这个协议来解析数据包。</p></li></ol>',21),p=[l];function i(a,r,P,n,s,T){return c(),o("div",null,p)}const _=e(t,[["render",i]]);export{h as __pageData,_ as default};
