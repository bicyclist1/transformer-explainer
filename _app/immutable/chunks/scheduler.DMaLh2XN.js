var I=Object.defineProperty;var F=(t,e,n)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);function M(){}const bt=t=>t;function U(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function gt(){return Object.create(null)}function K(t){t.forEach(J)}function Q(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function xt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function Et(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return M}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t){let e;return S(t,n=>e=n)(),e}function Tt(t,e,n){t.$$.on_destroy.push(S(e,n))}function Nt(t,e,n,i){if(t){const s=O(t,e,n,i);return t[0](s)}}function O(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function At(t,e,n,i,s,c){if(s){const r=O(e,n,i,c);t.p(r,s)}}function Ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Dt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ht(t){const e={};for(const n in t)e[n]=!0;return e}function Lt(t){return t??""}function Mt(t){return t&&Q(t.destroy)?t.destroy:M}const V=["",!0,1,"true","contenteditable"];let w=!1;function St(){w=!0}function Ot(){w=!1}function X(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:X(1,s,G=>e[n[G]].claim_order,a))-1;i[o]=n[u]+1;const j=u+1;n[j]=o,s=Math.max(j,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function P(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Pt(t){const e=x("style");return e.textContent="/* empty */",$(Z(t),e),e.sheet}function $(t,e){return P(t.head||t,e),e.sheet}function tt(t,e){if(w){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){w&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function qt(){return A(" ")}function Bt(){return A("")}function D(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const it=["width","height"];function st(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&it.indexOf(i)===-1?t[i]=e[i]:C(t,i,e[i])}function Rt(t,e){for(const n in e)C(t,n,e[n])}function rt(t,e){Object.keys(e).forEach(n=>{ct(t,n,e[n])})}function ct(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function Wt(t){return/-/.test(t)?rt:st}function Gt(t){return t.dataset.svelteH}function It(t){return t===""?null:+t}function Ft(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,s=!1){q(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function R(t,e,n,i){return B(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ut(t,e,n){return R(t,e,n,x)}function Jt(t,e,n){return R(t,e,n,z)}function ot(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Kt(t){return ot(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Qt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new E(e);q(t);const s=t.splice(n,i-n+1);b(s[0]),b(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new E(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(e,c)}function lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function at(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n){~V.indexOf(n)?at(t,e):lt(t,e)}function Xt(t,e){t.value=e??""}function Yt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let y;function ut(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function Zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=x("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=ut();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=D(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=D(i.contentWindow,"resize",e),e()}),P(t,i),()=>{(s||c&&i.contentWindow)&&c(),b(i)}}function $t(t,e,n){t.classList.toggle(e,!!n)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function te(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class _t{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=z(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}class E extends _t{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)nt(this.t,this.n[i],n)}}function ee(t,e){return new t(e)}let g;function v(t){g=t}function h(){if(!g)throw new Error("Function called outside component initialization");return g}function ne(t){h().$$.on_mount.push(t)}function ie(t){h().$$.after_update.push(t)}function se(t){h().$$.on_destroy.push(t)}function re(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ft(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ce(t,e){return h().$$.context.set(t,e),e}function oe(t){return h().$$.context.get(t)}function le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],L=[];let d=[];const N=[],W=Promise.resolve();let k=!1;function dt(){k||(k=!0,W.then(mt))}function ae(){return dt(),W}function ht(t){d.push(t)}function ue(t){N.push(t)}const T=new Set;let _=0;function mt(){if(_!==0)return;const t=g;do{try{for(;_<m.length;){const e=m[_];_++,v(e),pt(e.$$)}}catch(e){throw m.length=0,_=0,e}for(v(null),m.length=0,_=0;L.length;)L.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];T.has(n)||(T.add(n),n())}d.length=0}while(m.length);for(;N.length;)N.pop()();k=!1,T.clear(),v(t)}function pt(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ht)}}function fe(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{z as $,Pt as A,ht as B,ft as C,bt as D,gt as E,mt as F,Et as G,fe as H,g as I,v as J,J as K,m as L,dt as M,St as N,Ot as O,Dt as P,re as Q,U as R,jt as S,ue as T,Nt as U,At as V,Ct as W,kt as X,Mt as Y,Ht as Z,le as _,wt as a,Jt as a0,Gt as a1,D as a2,Wt as a3,st as a4,ce as a5,oe as a6,Rt as a7,Xt as a8,It as a9,Lt as aa,$t as ab,Vt as ac,zt as ad,te as ae,Zt as af,vt as ag,xt as ah,E as ai,Qt as aj,se as ak,qt as b,Ut as c,Ft as d,x as e,ot as f,b as g,Kt as h,Q as i,nt as j,tt as k,lt as l,Tt as m,M as n,Bt as o,ie as p,ne as q,K as r,S as s,A as t,C as u,Yt as v,L as w,ee as x,ae as y,Z as z};