function S(){}const ct=t=>t;function L(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function ot(){return Object.create(null)}function W(t){t.forEach(M)}function B(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function at(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function D(t,...e){if(t==null){for(const i of e)i(void 0);return S}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t){let e;return D(t,n=>e=n)(),e}function _t(t,e,n){t.$$.on_destroy.push(D(e,n))}function dt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?L(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,c){if(r){const s=O(e,n,i,c);t.p(s,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function gt(t){const e={};for(const n in t)e[n]=!0;return e}function wt(t){return t??""}function xt(t){return t&&B(t.destroy)?t.destroy:S}let b=!1;function vt(){b=!0}function kt(){b=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:R(1,r,H=>e[n[H]].claim_order,a))-1;i[o]=n[u]+1;const A=u+1;n[A]=o,r=Math.max(A,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(s[o],u)}}function T(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=k("style");return e.textContent="/* empty */",U(F(t),e),e.sheet}function U(t,e){return T(t.head||t,e),e.sheet}function G(t,e){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){b&&!n?G(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function J(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function Ct(){return E(" ")}function jt(){return E("")}function C(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Q=["width","height"];function V(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Q.indexOf(i)===-1?t[i]=e[i]:N(t,i,e[i])}function St(t,e){for(const n in e)N(t,n,e[n])}function X(t,e){Object.keys(e).forEach(n=>{Y(t,n,e[n])})}function Y(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:N(t,e,n)}function Dt(t){return/-/.test(t)?X:V}function Ot(t){return t.dataset.svelteH}function Tt(t){return t===""?null:+t}function zt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,r=!1){Z(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function P(t,e,n,i){return z(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Pt(t,e,n){return P(t,e,n,k)}function qt(t,e,n){return P(t,e,n,K)}function $(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function Ht(t){return $(t," ")}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e){t.value=e??""}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let p;function tt(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Bt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=tt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=C(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=C(i.contentWindow,"resize",e),e()}),T(t,i),()=>{(r||c&&i.contentWindow)&&c(),J(i)}}function Rt(t,e,n){t.classList.toggle(e,!!n)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function It(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ft(t,e){return new t(e)}let y;function g(t){y=t}function h(){if(!y)throw new Error("Function called outside component initialization");return y}function Ut(t){h().$$.on_mount.push(t)}function Gt(t){h().$$.after_update.push(t)}function Jt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=et(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function Kt(t,e){return h().$$.context.set(t,e),e}function Qt(t){return h().$$.context.get(t)}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],j=[];let _=[];const x=[],q=Promise.resolve();let v=!1;function nt(){v||(v=!0,q.then(rt))}function Xt(){return nt(),q}function it(t){_.push(t)}function Yt(t){x.push(t)}const w=new Set;let f=0;function rt(){if(f!==0)return;const t=y;do{try{for(;f<d.length;){const e=d[f];f++,g(e),st(e.$$)}}catch(e){throw d.length=0,f=0,e}for(g(null),d.length=0,f=0;j.length;)j.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];w.has(n)||(w.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,w.clear(),g(t)}function st(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Zt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{d as $,j as A,Ft as B,Xt as C,bt as D,Kt as E,Jt as F,L as G,yt as H,Vt as I,dt as J,Dt as K,xt as L,mt as M,pt as N,ht as O,it as P,F as Q,Et as R,et as S,ct as T,ot as U,rt as V,ut as W,Zt as X,y as Y,g as Z,M as _,D as a,nt as a0,vt as a1,kt as a2,at as a3,K as a4,qt as a5,V as a6,Yt as a7,gt as a8,Qt as a9,Mt as aa,Tt as ab,St as ac,wt as ad,It as ae,Bt as af,ft as ag,Ct as b,Pt as c,zt as d,k as e,$ as f,J as g,Ht as h,B as i,Nt as j,G as k,Lt as l,_t as m,S as n,Ot as o,N as p,At as q,W as r,lt as s,E as t,Rt as u,C as v,jt as w,Wt as x,Gt as y,Ut as z};