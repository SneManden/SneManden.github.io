function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function u(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=l(e,n,r,a);t.p(s,i)}}const f="undefined"!=typeof window;let d=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):t;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&p(m)}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function w(){return _(" ")}function E(){return _("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t){return Array.from(t.childNodes)}function j(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):b(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return _(e)}function R(t){return A(t," ")}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let I;function C(){if(void 0===I){I=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){I=!0}}return I}function H(t,e){const n=getComputedStyle(t),r=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const s=b("iframe");s.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${r};`),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const o=C();let a;return o?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=x(window,"message",t=>{t.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{a=x(s.contentWindow,"resize",e)}),g(t,s),()=>{(o||a&&s.contentWindow)&&a(),v(s)}}function O(t,e,n){t.classList[n?"add":"remove"](e)}function M(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Set;let N,D=0;function U(t,e,n,r,s,o,a,i=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*o(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=t.ownerDocument;q.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(b("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${s}ms 1 both`,D+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),D-=s,D||p(()=>{D||(q.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),q.clear())}))}function G(t){N=t}function V(){if(!N)throw new Error("Function called outside component initialization");return N}function z(t){V().$$.on_mount.push(t)}const F=[],J=[],B=[],K=[],W=Promise.resolve();let Y=!1;function X(t){B.push(t)}let Q=!1;const Z=new Set;function tt(){if(!Q){Q=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];G(e),et(e.$$)}for(F.length=0;J.length;)J.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];Z.has(e)||(Z.add(e),e())}B.length=0}while(F.length);for(;K.length;)K.pop()();Y=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}let nt;function rt(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const st=new Set;let ot;function at(){ot={r:0,c:[],p:ot}}function it(){ot.r||o(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(st.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),ot.c.push(()=>{st.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ut={duration:0};function ft(n,r,s,i){let c=r(n,s),l=i?0:1,u=null,f=null,g=null;function $(){g&&T(n,g)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:s=0,duration:a=300,easing:i=e,tick:y=t,css:b}=c||ut,_={start:d()+s,b:r};r||(_.group=ot,ot.r+=1),u?f=_:(b&&($(),g=U(n,l,r,a,s,i,b)),r&&y(0,1),u=v(_,a),X(()=>rt(n,r,"start")),function(t){let e;0===h.size&&p(m),new Promise(n=>{h.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=v(f,a),f=null,rt(n,u.b,"start"),b&&($(),g=U(n,l,u.b,u.duration,0,i,c.css))),u)if(t>=u.end)y(l=u.b,1-l),rt(n,u.b,"end"),f||(u.b?$():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*i(e/u.duration),y(l,1-l)}return!(!u&&!f)}))}return{run(t){a(c)?(nt||(nt=Promise.resolve(),nt.then(()=>{nt=null})),nt).then(()=>{c=c(),y(t)}):y(t)},end(){$(),u=f=null}}}function dt(t,e){lt(t,1,1,()=>{e.delete(t.key)})}function pt(t,e,n,r,s,o,a,i,c,l,u,f){let d=t.length,p=o.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,v=new Map;for(h=p;h--;){const t=f(s,o,h),i=n(t);let c=a.get(i);c?r&&c.p(t,e):(c=l(i,t),c.c()),$.set(i,g[h]=c),i in m&&v.set(i,Math.abs(h-m[i]))}const y=new Set,b=new Set;function _(t){ct(t,1),t.m(i,u),a.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],r=e.key,s=n.key;e===n?(u=e.first,d--,p--):$.has(s)?!a.has(r)||y.has(r)?_(e):b.has(s)?d--:v.get(r)>v.get(s)?(b.add(r),_(e)):(y.add(s),d--):(c(n,a),d--)}for(;d--;){const e=t[d];$.has(e.key)||c(e,a)}for(;p;)_(g[p-1]);return g}function ht(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function $t(t,e){t&&t.l(e)}function vt(t,e,n){const{fragment:s,on_mount:i,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,n),X(()=>{const e=i.map(r).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(X)}function yt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(F.push(t),Y||(Y=!0,W.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(e,n,r,a,i,c,l=[-1]){const u=N;G(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&bt(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=k(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&ct(e.$$.fragment),vt(e,n.target,n.anchor),tt()}G(u)}class wt{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function xt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Et.push(n,e)}if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const St={};function kt(t){let e;const n=t[8].default,r=c(n,t,t[7],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&128&e&&u(r,n,t,t[7],e,null,null)},i(t){e||(ct(r,t),e=!0)},o(t){lt(r,t),e=!1},d(t){r&&r.d(t)}}}function jt(t){let e,n,r,s,a,i,c,l,u,f,d,p,h,m,y,E,L,I,C,H,O,M,q,N,D=!1,U=()=>{D=!1};X(t[9]),X(t[10]);let T=void 0!==t[1]&&kt(t);return{c(){n=b("header"),T&&T.c(),r=w(),s=b("nav"),a=b("div"),i=b("h1"),c=b("a"),l=_("snemanden.com"),u=w(),f=b("ul"),d=b("li"),p=b("a"),h=_("blog"),m=w(),y=b("li"),E=b("a"),L=_("om"),I=w(),C=b("li"),H=b("a"),O=_("arkiv"),this.h()},l(t){n=j(t,"HEADER",{style:!0,class:!0});var e=k(n);T&&T.l(e),e.forEach(v),r=R(t),s=j(t,"NAV",{style:!0,class:!0});var o=k(s);a=j(o,"DIV",{class:!0});var g=k(a);i=j(g,"H1",{class:!0});var $=k(i);c=j($,"A",{href:!0,class:!0});var b=k(c);l=A(b,"snemanden.com"),b.forEach(v),$.forEach(v),u=R(g),f=j(g,"UL",{class:!0});var _=k(f);d=j(_,"LI",{class:!0});var w=k(d);p=j(w,"A",{rel:!0,href:!0,class:!0});var x=k(p);h=A(x,"blog"),x.forEach(v),w.forEach(v),m=R(_),y=j(_,"LI",{class:!0});var S=k(y);E=j(S,"A",{href:!0,class:!0});var P=k(E);L=A(P,"om"),P.forEach(v),S.forEach(v),I=R(_),C=j(_,"LI",{class:!0});var M=k(C);H=j(M,"A",{rel:!0,href:!0,class:!0});var q=k(H);O=A(q,"arkiv"),q.forEach(v),M.forEach(v),_.forEach(v),g.forEach(v),o.forEach(v),this.h()},h(){P(n,"height",t[3]+"px"),S(n,"class","svelte-132eyxn"),S(c,"href","/"),S(c,"class","svelte-132eyxn"),S(i,"class","svelte-132eyxn"),S(p,"rel","prefetch"),S(p,"href","/blog"),S(p,"class","svelte-132eyxn"),S(d,"class","svelte-132eyxn"),S(E,"href","/om"),S(E,"class","svelte-132eyxn"),S(y,"class","svelte-132eyxn"),S(H,"rel","prefetch"),S(H,"href","/arkiv"),S(H,"class","svelte-132eyxn"),S(C,"class","svelte-132eyxn"),S(f,"class","svelte-132eyxn"),S(a,"class","container svelte-132eyxn"),P(s,"transform","translateY("+t[4]+")"),P(s,"height",t[0]+"px"),S(s,"class","svelte-132eyxn")},m(o,v){$(o,n,v),T&&T.m(n,null),$(o,r,v),$(o,s,v),g(s,a),g(a,i),g(i,c),g(c,l),g(a,u),g(a,f),g(f,d),g(d,p),g(p,h),g(f,m),g(f,y),g(y,E),g(E,L),g(f,I),g(f,C),g(C,H),g(H,O),M=!0,q||(N=[x(window,"scroll",()=>{D=!0,clearTimeout(e),e=setTimeout(U,100),t[9]()}),x(window,"resize",t[10])],q=!0)},p(t,[r]){2&r&&!D&&(D=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[1]),e=setTimeout(U,100)),void 0!==t[1]?T?(T.p(t,r),2&r&&ct(T,1)):(T=kt(t),T.c(),ct(T,1),T.m(n,null)):T&&(at(),lt(T,1,1,()=>{T=null}),it()),(!M||8&r)&&P(n,"height",t[3]+"px"),(!M||16&r)&&P(s,"transform","translateY("+t[4]+")"),(!M||1&r)&&P(s,"height",t[0]+"px")},i(t){M||(ct(T),M=!0)},o(t){lt(T),M=!1},d(t){t&&v(n),T&&T.d(),t&&v(r),t&&v(s),q=!1,o(N)}}}function At(t,e,n){let r,s,{navHeight:o=50}=e,{headerHeight:a=500}=e,{smHeaderHeight:i=250}=e;let c,l,u,{$$slots:f={},$$scope:d}=e;return t.$$set=t=>{"navHeight"in t&&n(0,o=t.navHeight),"headerHeight"in t&&n(5,a=t.headerHeight),"smHeaderHeight"in t&&n(6,i=t.smHeaderHeight),"$$scope"in t&&n(7,d=t.$$scope)},t.$$.update=()=>{100&t.$$.dirty&&n(11,c=void 0!==s&&s<=500?i:a),2051&t.$$.dirty&&n(3,l=void 0===r?o:c),2&t.$$.dirty&&n(4,u=function(t){return(void 0!==t&&Number.isSafeInteger(t)?Math.max(0,c-o-t):0)+"px"}(r))},[o,r,s,l,u,a,i,d,f,function(){n(1,r=window.pageYOffset)},function(){n(2,s=window.outerWidth)}]}class Rt extends wt{constructor(t){super(),_t(this,t,At,jt,i,{navHeight:0,headerHeight:5,smHeaderHeight:6})}}function Lt(e){let n,r,s;return{c(){n=b("div"),r=_(e[0]),s=b("span"),this.h()},l(t){n=j(t,"DIV",{class:!0});var o=k(n);r=A(o,e[0]),s=j(o,"SPAN",{class:!0}),k(s).forEach(v),o.forEach(v),this.h()},h(){S(s,"class","cursor svelte-1ihh1q"),O(s,"pulsing",e[1]),S(n,"class","typewriter svelte-1ihh1q")},m(t,e){$(t,n,e),g(n,r),g(n,s)},p(t,[e]){1&e&&L(r,t[0]),2&e&&O(s,"pulsing",t[1])},i:t,o:t,d(t){t&&v(n)}}}function Pt(t,e,n){let{phrases:r=["Fagales Fagaceae Quercus Robur 🌳.","Rosales Ulmuceae Ulmus Glabra 🌳.","Java is to JavaScript what car is to Carpet.","Høns i haven og æg i maven.","At høvle er at meditere.","Lækker mad og godt selskab.","Løb er mit rusmiddel.","Kærligheden er livets bindemiddel.","Børn er sandelig spændende væsener.","Om tid: ISO 8601 er den eneste vej frem.","Sammen kan vi skabe en bæredygtig fremtid.","Et samfund vokser sig stort når gamle mennesker planter træer hvis skygge de ved de aldrig kommer til at sidde i."].sort((t,e)=>Math.random()<.5?1:-1)}=e,s=0,o="",a=!1,i=!0;const c=()=>{n(0,o=l.substring(0,o.length+(a?-1:1)));let t=Math.max(0,90+60*(-.5+Math.random()));a&&(t/=2),a||o!==l?a&&""===o&&(a=!1,n(3,s=(s+1)%r.length),t=2e3):(t=2e3,a=!0),n(1,i=t>120),setTimeout(()=>c(),t)};let l;return setTimeout(()=>c(),2e3),t.$$set=t=>{"phrases"in t&&n(2,r=t.phrases)},t.$$.update=()=>{12&t.$$.dirty&&(l=r[s])},[o,i,r]}class It extends wt{constructor(t){super(),_t(this,t,Pt,Lt,i,{phrases:2})}}function Ct(t,{delay:n=0,duration:r=400,easing:s=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function Ht(t,e,n){const r=t.slice();return r[4]=e[n],r}function Ot(t,e){let n,r,s;return{key:t,first:null,c(){n=b("div"),this.h()},l(t){n=j(t,"DIV",{class:!0,style:!0}),k(n).forEach(v),this.h()},h(){S(n,"class","header-image svelte-i3q3us"),P(n,"background-image","url("+e[4]+")"),this.first=n},m(t,e){$(t,n,e),s=!0},p(t,e){(!s||3&e)&&P(n,"background-image","url("+t[4]+")")},i(t){s||(X(()=>{r||(r=ft(n,Ct,{duration:300},!0)),r.run(1)}),s=!0)},o(t){r||(r=ft(n,Ct,{duration:300},!1)),r.run(0),s=!1},d(t){t&&v(n),t&&r&&r.end()}}}function Mt(t){let e,n,r=[],s=new Map,o=[t[0][t[1]]];const a=t=>t[1];for(let e=0;e<1;e+=1){let n=Ht(t,o,e),i=a(n);s.set(i,r[e]=Ot(i,n))}return{c(){e=b("div");for(let t=0;t<1;t+=1)r[t].c();this.h()},l(t){e=j(t,"DIV",{class:!0});var n=k(e);for(let t=0;t<1;t+=1)r[t].l(n);n.forEach(v),this.h()},h(){S(e,"class","wrapper")},m(t,s){$(t,e,s);for(let t=0;t<1;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(3&n){const o=[t[0][t[1]]];at(),r=pt(r,n,a,1,t,o,s,e,dt,Ot,null,Ht),it()}},i(t){if(!n){for(let t=0;t<1;t+=1)ct(r[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)lt(r[t]);n=!1},d(t){t&&v(e);for(let t=0;t<1;t+=1)r[t].d()}}}function qt(t,e,n){let{images:r=[]}=e,{updateFreq:s=3e4}=e,o=0;return setInterval(()=>{n(1,o=(o+1)%r.length)},s),t.$$set=t=>{"images"in t&&n(0,r=t.images),"updateFreq"in t&&n(2,s=t.updateFreq)},[r,o,s]}class Nt extends wt{constructor(t){super(),_t(this,t,qt,Mt,i,{images:0,updateFreq:2})}}function Dt(e){let n,r,s,o,a,i;return r=new Nt({props:{images:e[0]}}),a=new It({}),{c(){n=b("div"),gt(r.$$.fragment),s=w(),o=b("div"),gt(a.$$.fragment),this.h()},l(t){n=j(t,"DIV",{class:!0});var e=k(n);$t(r.$$.fragment,e),e.forEach(v),s=R(t),o=j(t,"DIV",{class:!0});var i=k(o);$t(a.$$.fragment,i),i.forEach(v),this.h()},h(){S(n,"class","images-wrapper svelte-1jtvvyh"),S(o,"class","container typer-wrapper svelte-1jtvvyh")},m(t,e){$(t,n,e),vt(r,n,null),$(t,s,e),$(t,o,e),vt(a,o,null),i=!0},p:t,i(t){i||(ct(r.$$.fragment,t),ct(a.$$.fragment,t),i=!0)},o(t){lt(r.$$.fragment,t),lt(a.$$.fragment,t),i=!1},d(t){t&&v(n),yt(r),t&&v(s),t&&v(o),yt(a)}}}function Ut(t){let e,n,r,s,o;e=new Rt({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}});const a=t[2].default,i=c(a,t,t[3],null);return{c(){gt(e.$$.fragment),n=w(),r=b("main"),s=b("div"),i&&i.c(),this.h()},l(t){$t(e.$$.fragment,t),n=R(t),r=j(t,"MAIN",{class:!0});var o=k(r);s=j(o,"DIV",{class:!0});var a=k(s);i&&i.l(a),a.forEach(v),o.forEach(v),this.h()},h(){S(s,"class","container svelte-1jtvvyh"),S(r,"class","svelte-1jtvvyh")},m(t,a){vt(e,t,a),$(t,n,a),$(t,r,a),g(r,s),i&&i.m(s,null),o=!0},p(t,[n]){const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r),i&&i.p&&8&n&&u(i,a,t,t[3],n,null,null)},i(t){o||(ct(e.$$.fragment,t),ct(i,t),o=!0)},o(t){lt(e.$$.fragment,t),lt(i,t),o=!1},d(t){yt(e,t),t&&v(n),t&&v(r),i&&i.d(t)}}}const Tt=()=>{};function Gt(t,e,n){let{segment:r=""}=e,s=["IMG_0142.jpg","IMG_0870_c.jpg","IMG_1580_c.jpg","IMG_2008_c.jpg","IMG_2076_c.jpg","IMG_2737_c.jpg","IMG_2742_c.jpg","IMG_2802_c.jpg"].map(t=>"/img/header//"+t).sort((t,e)=>Math.random()<.5?1:-1),{$$slots:o={},$$scope:a}=e;return t.$$set=t=>{"segment"in t&&n(1,r=t.segment),"$$scope"in t&&n(3,a=t.$$scope)},[s,r,o,a]}class Vt extends wt{constructor(t){super(),_t(this,t,Gt,Ut,i,{segment:1})}}function zt(t){let e,n,r=t[1].stack+"";return{c(){e=b("pre"),n=_(r)},l(t){e=j(t,"PRE",{});var s=k(e);n=A(s,r),s.forEach(v)},m(t,r){$(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&v(e)}}}function Ft(e){let n,r,s,o,a,i,c,l,u=e[1].message+"",f=e[2]&&e[1].stack&&zt(e);return{c(){n=b("section"),r=b("h1"),s=_(u),o=w(),a=b("h2"),i=_(e[0]),c=w(),f&&f.c(),l=E(),this.h()},l(t){n=j(t,"SECTION",{class:!0});var d=k(n);r=j(d,"H1",{class:!0});var p=k(r);s=A(p,u),p.forEach(v),o=R(d),a=j(d,"H2",{class:!0});var h=k(a);i=A(h,e[0]),h.forEach(v),d.forEach(v),c=R(t),f&&f.l(t),l=E(),this.h()},h(){S(r,"class","svelte-xph44x"),S(a,"class","svelte-xph44x"),S(n,"class","svelte-xph44x")},m(t,e){$(t,n,e),g(n,r),g(r,s),g(n,o),g(n,a),g(a,i),$(t,c,e),f&&f.m(t,e),$(t,l,e)},p(t,[e]){2&e&&u!==(u=t[1].message+"")&&L(s,u),1&e&&L(i,t[0]),t[2]&&t[1].stack?f?f.p(t,e):(f=zt(t),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&v(n),t&&v(c),f&&f.d(t),t&&v(l)}}}function Jt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Bt extends wt{constructor(t){super(),_t(this,t,Jt,Ft,i,{status:0,error:1})}}function Kt(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(i())),{c(){e&&gt(e.$$.fragment),r=E()},l(t){e&&$t(e.$$.fragment,t),r=E()},m(t,n){e&&vt(e,t,n),$(t,r,n),s=!0},p(t,n){const s=16&n?ht(o,[mt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();const t=e;lt(t.$$.fragment,1,0,()=>{yt(t,1)}),it()}a?(e=new a(i()),gt(e.$$.fragment),ct(e.$$.fragment,1),vt(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&ct(e.$$.fragment,t),s=!0)},o(t){e&&lt(e.$$.fragment,t),s=!1},d(t){t&&v(r),e&&yt(e,t)}}}function Wt(t){let e,n;return e=new Bt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){$t(e.$$.fragment,t)},m(t,r){vt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function Yt(t){let e,n,r,s;const o=[Wt,Kt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){a[e].m(t,n),$(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(at(),lt(a[c],1,1,()=>{a[c]=null}),it(),n=a[e],n||(n=a[e]=o[e](t),n.c()),ct(n,1),n.m(r.parentNode,r))},i(t){s||(ct(n),s=!0)},o(t){lt(n),s=!1},d(t){a[e].d(t),t&&v(r)}}}function Xt(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Yt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new Vt({props:o}),{c(){gt(e.$$.fragment)},l(t){$t(e.$$.fragment,t)},m(t,n){vt(e,t,n),r=!0},p(t,[n]){const r=12&n?ht(s,[4&n&&{segment:t[2][0]},8&n&&mt(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ct(e.$$.fragment,t),r=!0)},o(t){lt(e.$$.fragment,t),r=!1},d(t){yt(e,t)}}}function Qt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,d;return u=l,V().$$.after_update.push(u),f=St,d=r,V().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,i,c,r,l]}class Zt extends wt{constructor(t){super(),_t(this,t,Qt,Xt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const te=[/^\/arkiv\.json$/,/^\/arkiv\/([^\/]+?)\.json$/,/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],ee=[{js:()=>import("./index.943a755c.js"),css:["client.cb032e34.css"]},{js:()=>import("./index.12574d44.js"),css:["client.cb032e34.css","Posts.093b0bc5.css"]},{js:()=>import("./[slug].8af2817b.js"),css:["client.cb032e34.css","Post.c2293b94.css","Me.fb9a73a2.css"]},{js:()=>import("./index.577c905b.js"),css:["client.cb032e34.css","Posts.093b0bc5.css"]},{js:()=>import("./[slug].6a724bb9.js"),css:["client.cb032e34.css","Post.c2293b94.css","Me.fb9a73a2.css"]},{js:()=>import("./index.6399663a.js"),css:["client.cb032e34.css","Me.fb9a73a2.css"]}],ne=(re=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/arkiv\/?$/,parts:[{i:1}]},{pattern:/^\/arkiv\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:re(t[1])})}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:re(t[1])})}]},{pattern:/^\/om\/?$/,parts:[{i:5}]}]);var re;function se(t,e={noscroll:!1,replaceState:!1}){const n=we(new URL(t,document.baseURI));return n?(ye[e.replaceState?"replaceState":"pushState"]({id:$e},"",t),xe(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const oe="undefined"!=typeof __SAPPER__&&__SAPPER__;let ae,ie,ce,le=!1,ue=[],fe="{}";const de={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:xt(null),session:xt(oe&&oe.session)};let pe,he;de.session.subscribe(async t=>{if(pe=t,!le)return;he=!0;const e=we(new URL(location.href)),n=ie={},{redirect:r,props:s,branch:o}=await ke(e);n===ie&&await Se(r,o,s,e.page)});let me,ge=null;let $e,ve=1;const ye="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},be={};function _e(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function we(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(oe.baseUrl))return null;let e=t.pathname.slice(oe.baseUrl.length);if(""===e&&(e="/"),!te.some(t=>t.test(e)))for(let n=0;n<ne.length;n+=1){const r=ne[n],s=r.pattern.exec(e);if(s){const n=_e(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function Ee(){return{x:pageXOffset,y:pageYOffset}}async function xe(t,e,n,r){if(e)$e=e;else{const t=Ee();be[$e]=t,e=$e=++ve,be[$e]=n?t:{x:0,y:0}}$e=e,ae&&de.preloading.set(!0);const s=ge&&ge.href===t.href?ge.promise:ke(t);ge=null;const o=ie={},{redirect:a,props:i,branch:c}=await s;if(o===ie&&(await Se(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=be[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}be[$e]=t,t&&scrollTo(t.x,t.y)}}async function Se(t,e,n,r){if(t)return se(t.location,{replaceState:!0});de.page.set(r),de.preloading.set(!1),ae?ae.$set(n):(n.stores={page:{subscribe:de.page.subscribe},preloading:{subscribe:de.preloading.subscribe},session:de.session},n.level0={props:await ce},n.notify=de.page.notify,ae=new Zt({target:me,props:n,hydrate:!0})),ue=e,fe=JSON.stringify(r.query),le=!0,he=!1}async function ke(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ce){const t=Tt||(()=>{});ce=oe.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},pe)}let i,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==fe)return!0;const s=ue[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:f};const d=c++;if(!he&&!u&&ue[i]&&ue[i].part===e.i)return ue[i];u=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(je);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(ee[e.i]);let m;return m=le||!oe.preloaded[i+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},pe):{}:oe.preloaded[i+1],o["level"+d]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function je(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ae(t){const e=we(new URL(t,document.baseURI));if(e)return ge&&t===ge.href||function(t,e){ge={href:t,promise:e}}(t,ke(e)),ge.promise}let Re;function Le(t){clearTimeout(Re),Re=setTimeout(()=>{Pe(t)},20)}function Pe(t){const e=Ce(t.target);e&&"prefetch"===e.rel&&Ae(e.href)}function Ie(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=we(s);if(o){xe(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),ye.pushState({id:$e},"",s.href)}}function Ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function He(t){if(be[$e]=Ee(),t.state){const e=we(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else ve=ve+1,function(t){$e=t}(ve),ye.replaceState({id:$e},"",location.href)}var Oe;Oe={target:document.querySelector("#sapper")},"scrollRestoration"in ye&&(ye.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ye.scrollRestoration="auto"}),addEventListener("load",()=>{ye.scrollRestoration="manual"}),function(t){me=t}(Oe.target),addEventListener("click",Ie),addEventListener("popstate",He),addEventListener("touchstart",Pe),addEventListener("mousemove",Le),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ye.replaceState({id:ve},"",e);const n=new URL(location.href);if(oe.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=oe;ce||(ce=o&&o[0]),Se(null,[],{error:i,status:a,session:s,level0:{props:ce},level1:{props:{status:a,error:i},component:Bt},segments:o},{host:e,path:n,query:_e(r),params:{}})}();const r=we(n);return r?xe(r,ve,!0,t):void 0});export{g as A,L as B,t as C,y as D,P as E,X as F,ft as G,H,x as I,pt as J,o as K,Ct as L,dt as M,J as N,wt as S,w as a,R as b,gt as c,v as d,$t as e,$ as f,se as g,lt as h,_t as i,yt as j,_ as k,A as l,vt as m,E as n,z as o,at as p,M as q,it as r,i as s,ct as t,c as u,b as v,j as w,k as x,S as y,u as z};
