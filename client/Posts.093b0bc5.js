import{S as s,i as l,s as t,n as e,f as r,p as a,h as n,r as c,t as h,d as o,u as i,v as f,w as u,x as p,y as d,z as v,k as g,a as m,l as E,b as $,A as I,B as T,C as b,D as w}from"./client.cb032e34.js";function x(s,l,t){const e=s.slice();return e[4]=l[t],e}function D(s){let l,t;const e=s[3].default,a=i(e,s,s[2],null);return{c(){l=f("section"),a&&a.c(),this.h()},l(s){l=u(s,"SECTION",{class:!0});var t=p(l);a&&a.l(t),t.forEach(o),this.h()},h(){d(l,"class","no-posts")},m(s,e){r(s,l,e),a&&a.m(l,null),t=!0},p(s,l){a&&a.p&&4&l&&v(a,e,s,s[2],l,null,null)},i(s){t||(h(a,s),t=!0)},o(s){n(a,s),t=!1},d(s){s&&o(l),a&&a.d(s)}}}function A(s){let l,t=s[0],e=[];for(let l=0;l<t.length;l+=1)e[l]=L(x(s,t,l));return{c(){l=f("section");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){l=u(s,"SECTION",{class:!0});var t=p(l);for(let s=0;s<e.length;s+=1)e[s].l(t);t.forEach(o),this.h()},h(){d(l,"class","posts svelte-v8vclb")},m(s,t){r(s,l,t);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(s,r){if(3&r){let a;for(t=s[0],a=0;a<t.length;a+=1){const n=x(s,t,a);e[a]?e[a].p(n,r):(e[a]=L(n),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=t.length}},i:b,o:b,d(s){s&&o(l),w(e,s)}}}function C(s){let l,t,e=s[4].warning+"";return{c(){l=f("div"),t=g(e),this.h()},l(s){l=u(s,"DIV",{class:!0});var r=p(l);t=E(r,e),r.forEach(o),this.h()},h(){d(l,"class","warning")},m(s,e){r(s,l,e),I(l,t)},p(s,l){1&l&&e!==(e=s[4].warning+"")&&T(t,e)},d(s){s&&o(l)}}}function L(s){let l,t,e,a,n,c,h,i,v,b,w,x,D,A,L,O,H,N,S,V,R,M=s[4].title+"",P=s[4].published.timestamp+"",j=s[4].excerpt+"",k=s[4].warning&&C(s);return{c(){l=f("article"),t=f("header"),e=f("h1"),a=f("a"),n=g(M),h=m(),i=f("div"),v=f("div"),b=g(P),w=m(),k&&k.c(),x=m(),D=f("section"),A=f("p"),L=m(),O=f("footer"),H=f("div"),N=f("a"),S=g("Læs hele indlæget."),R=m(),this.h()},l(s){l=u(s,"ARTICLE",{class:!0});var r=p(l);t=u(r,"HEADER",{});var c=p(t);e=u(c,"H1",{});var f=p(e);a=u(f,"A",{rel:!0,href:!0});var d=p(a);n=E(d,M),d.forEach(o),f.forEach(o),h=$(c),i=u(c,"DIV",{class:!0});var g=p(i);v=u(g,"DIV",{class:!0});var m=p(v);b=E(m,P),m.forEach(o),w=$(g),k&&k.l(g),g.forEach(o),c.forEach(o),x=$(r),D=u(r,"SECTION",{class:!0});var I=p(D);A=u(I,"P",{}),p(A).forEach(o),I.forEach(o),L=$(r),O=u(r,"FOOTER",{});var T=p(O);H=u(T,"DIV",{class:!0});var C=p(H);N=u(C,"A",{rel:!0,href:!0});var V=p(N);S=E(V,"Læs hele indlæget."),V.forEach(o),C.forEach(o),T.forEach(o),R=$(r),r.forEach(o),this.h()},h(){d(a,"rel","prefetch"),d(a,"href",c=s[1]+"/"+s[4].slug),d(v,"class","timestamp"),d(i,"class","right"),d(D,"class","excerpt"),d(N,"rel","prefetch"),d(N,"href",V=s[1]+"/"+s[4].slug),d(H,"class","read-more"),d(l,"class","svelte-v8vclb")},m(s,c){r(s,l,c),I(l,t),I(t,e),I(e,a),I(a,n),I(t,h),I(t,i),I(i,v),I(v,b),I(i,w),k&&k.m(i,null),I(l,x),I(l,D),I(D,A),A.innerHTML=j,I(l,L),I(l,O),I(O,H),I(H,N),I(N,S),I(l,R)},p(s,l){1&l&&M!==(M=s[4].title+"")&&T(n,M),3&l&&c!==(c=s[1]+"/"+s[4].slug)&&d(a,"href",c),1&l&&P!==(P=s[4].published.timestamp+"")&&T(b,P),s[4].warning?k?k.p(s,l):(k=C(s),k.c(),k.m(i,null)):k&&(k.d(1),k=null),1&l&&j!==(j=s[4].excerpt+"")&&(A.innerHTML=j),3&l&&V!==(V=s[1]+"/"+s[4].slug)&&d(N,"href",V)},d(s){s&&o(l),k&&k.d()}}}function O(s){let l,t,i,f;const u=[A,D],p=[];function d(s,l){return s[0].length>0?0:1}return l=d(s),t=p[l]=u[l](s),{c(){t.c(),i=e()},l(s){t.l(s),i=e()},m(s,t){p[l].m(s,t),r(s,i,t),f=!0},p(s,[e]){let r=l;l=d(s),l===r?p[l].p(s,e):(a(),n(p[r],1,1,()=>{p[r]=null}),c(),t=p[l],t||(t=p[l]=u[l](s),t.c()),h(t,1),t.m(i.parentNode,i))},i(s){f||(h(t),f=!0)},o(s){n(t),f=!1},d(s){p[l].d(s),s&&o(i)}}}function H(s,l,t){let{posts:e}=l,{url:r=""}=l,{$$slots:a={},$$scope:n}=l;return s.$$set=s=>{"posts"in s&&t(0,e=s.posts),"url"in s&&t(1,r=s.url),"$$scope"in s&&t(2,n=s.$$scope)},[e,r,n,a]}class N extends s{constructor(s){super(),l(this,s,H,O,t,{posts:0,url:1})}}export{N as P};
