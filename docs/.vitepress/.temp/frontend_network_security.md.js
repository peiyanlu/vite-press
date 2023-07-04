import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"网络安全","description":"常见的网络攻击手段与防护","frontmatter":{"title":"网络安全","description":"常见的网络攻击手段与防护","category":"network","tags":["network","security"]},"headers":[],"relativePath":"frontend/network/security.md","filePath":"frontend/network/security.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/network/security.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="网络安全攻击类型" tabindex="-1">网络安全攻击类型 <a class="header-anchor" href="#网络安全攻击类型" aria-label="Permalink to &quot;网络安全攻击类型&quot;">​</a></h1><p><code>XSS</code>、<code>CSRF</code> 和 <code>DDoS</code> 攻击都是常见的网络安全攻击类型，以下是它们的原理和避免方式：</p><h2 id="xss-跨站脚本攻击" tabindex="-1">XSS（跨站脚本攻击） <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;XSS（跨站脚本攻击）&quot;">​</a></h2><p><code>XSS</code> 攻击是指攻击者利用网站漏洞，在页面中注入恶意脚本，当用户访问包含这些恶意脚本的页面时，脚本会在用户浏览器中执行，进而盗取用户的敏感信息。<code>XSS</code> 攻击主要有两种类型：存储型和反射型。</p><p><strong>避免方式：</strong></p><ul><li><p>输入验证：对用户输入的数据进行校验和过滤。</p></li><li><p>输出编码：对输出到页面的数据进行编码，避免恶意脚本被执行。</p></li><li><p><code>Cookie</code> 安全：将 <code>cookie</code> 标记为 <code>HttpOnly</code>，使得只有在服务端可以访问，而客户端的 <code>JavaScript</code> 无法访问。</p></li></ul><h2 id="csrf-跨站请求伪造" tabindex="-1">CSRF（跨站请求伪造） <a class="header-anchor" href="#csrf-跨站请求伪造" aria-label="Permalink to &quot;CSRF（跨站请求伪造）&quot;">​</a></h2><p><code>CSRF</code> 攻击是指攻击者通过各种方式欺骗用户在另一个网站上执行恶意操作，进而完成攻击。攻击者通过伪造用户的身份，向目标网站发起请求，实现攻击目的。</p><p><strong>避免方式：</strong></p><ul><li><p>验证码：在敏感操作上添加验证码，防止攻击者利用脚本发起攻击。</p></li><li><p>随机令牌：在敏感操作中添加随机的令牌，防止攻击者伪造用户身份。</p></li><li><p><code>Referer</code> 检查：检查请求来源，防止攻击者通过直接构造请求来攻击。</p></li></ul><h2 id="ddos-分布式拒绝服务攻击" tabindex="-1">DDoS（分布式拒绝服务攻击） <a class="header-anchor" href="#ddos-分布式拒绝服务攻击" aria-label="Permalink to &quot;DDoS（分布式拒绝服务攻击）&quot;">​</a></h2><p><code>DDoS</code> 攻击是指攻击者利用大量的计算机或设备向目标服务器发起大量请求，占用服务器的带宽和资源，导致服务不可用。<code>DDoS</code> 攻击可以分为几种类型，如 <code>SYN Flood</code> 攻击、<code>UDP Flood</code> 攻击和 <code>HTTP Flood</code> 攻击等。</p><p><strong>避免方式：</strong></p><ul><li><p>流量清洗：使用专业的 <code>DDoS</code> 清洗设备，可以对流量进行过滤和清洗，防止攻击流量影响正常流量。</p></li><li><p>网络拓扑优化：合理优化网络拓扑，可以减轻 <code>DDoS</code> 攻击对网络的影响。</p></li><li><p>服务器防护：可以通过限制单个 <code>IP</code> 地址的最大连接数、使用防火墙、开启 <code>DDoS</code> 防护等方式，提高服务器的防护能力。</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/network/security.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  security as default
};
