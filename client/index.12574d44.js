import{S as s,i as t,s as e,a,c as n,q as o,d as r,b as i,e as c,f,m as l,t as u,h as p,j as $,k as d,l as m}from"./client.cb032e34.js";import{P as h}from"./Posts.093b0bc5.js";function g(s){let t;return{c(){t=d("Kunne ikke finde nogen blogindlæg fra arkivet.")},l(s){t=m(s,"Kunne ikke finde nogen blogindlæg fra arkivet.")},m(s,e){f(s,t,e)},d(s){s&&r(t)}}}function k(s){let t,e,d;return e=new h({props:{posts:s[0],url:"arkiv",$$slots:{default:[g]},$$scope:{ctx:s}}}),{c(){t=a(),n(e.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-1u2xs8m"]',document.head).forEach(r),t=i(s),c(e.$$.fragment,s),this.h()},h(){document.title="Arkiv"},m(s,a){f(s,t,a),l(e,s,a),d=!0},p(s,[t]){const a={};1&t&&(a.posts=s[0]),2&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){d||(u(e.$$.fragment,s),d=!0)},o(s){p(e.$$.fragment,s),d=!1},d(s){s&&r(t),$(e,s)}}}async function v(...s){const t=await this.fetch("arkiv.json");return{posts:await t.json()}}function b(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,b,k,e,{posts:0})}}export{v as preload};
