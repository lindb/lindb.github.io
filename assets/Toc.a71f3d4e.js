import{f as S,W as _,A as b,O as $,X as B,B as E,Y as D,_ as H,J as N,j as L,r as q,o as f,c as v,a as R,w as U,d as n,s as T,t as M,F as V,l as j,m as F}from"./app.1245c310.js";import I from"./Scrollbar.75566d90.js";const P=S({name:"Toc",components:{Scrollbar:I},setup(){const e=N(),r=_(),g=5,h=[],p=(o,l=0)=>o.length===0||l>=g?L(()=>h):(o.map(a=>{h.push(a),a.children.length&&p(a.children,++l),l=0}),L(()=>h)),w=p(e.value.headers),m=b(!1),t=$(),i=b(t.hash);let d=null;const k=B(()=>{var y,C,O;m.value=!1;const o=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),l=Array.from(document.querySelectorAll(".toc-anchor")),s=Array.from(document.querySelectorAll(".header-anchor")).filter(c=>l.some(u=>u.hash===c.hash));o===0&&s.length&&(d=s[0]);let A=o;for(let c=0;c<s.length;c++){const u=(C=(y=s[c].parentElement)==null?void 0:y.offsetTop)!=null?C:0;Math.abs(o-u)<A&&(A=Math.abs(o-u),d=s[c])}i.value=decodeURIComponent((O=d==null?void 0:d.hash)!=null?O:"")},0);return E(()=>{var o,l;if(i.value){const a=Array.from(document.querySelectorAll(".header-anchor"));for(let s=0;s<a.length;s++)decodeURIComponent(a[s].hash)===i.value&&scrollTo(0,(l=(o=a[s].parentElement)==null?void 0:o.offsetTop)!=null?l:0)}window.addEventListener("scroll",k)}),D(()=>{window.removeEventListener("scroll",k)}),{anchors:w,isTocOpen:m,hash:i,themeLocaleData:r}}}),Y={key:0,class:"toc-wrap"},z=n("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5","shape-rendering":"geometricPrecision",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",style:{color:"currentcolor"}},[n("path",{d:"M21 10H7M21 6H3M21 14H3M21 18H7"})],-1),J=[z],W={class:"toc-nav-text"},X={class:"toc-items"},G=["href"];function K(e,r,g,h,p,w){const m=q("Scrollbar");return e.anchors&&e.anchors.length>0?(f(),v("div",Y,[R(m,null,{default:U(()=>[n("div",{class:T(["theme-lin-toc",{"toc-open":e.isTocOpen}])},[n("div",{class:"toc-mask",onClick:r[0]||(r[0]=t=>e.isTocOpen=!1)}),n("button",{class:"mobile-toc-title",onClick:r[1]||(r[1]=t=>e.isTocOpen=!e.isTocOpen)},J),n("div",{class:T(["toc-items-wrap",{"show-toc":e.isTocOpen}])},[n("div",W,M(e.themeLocaleData.tocNavText),1),n("ul",X,[(f(!0),v(V,null,j(e.anchors,t=>(f(),v("li",{class:T(["toc-item",{["toc-level-"+t.level]:!0,active:`#${t.slug}`===e.hash}]),key:t.slug,onClick:r[2]||(r[2]=i=>e.isTocOpen=!e.isTocOpen)},[n("a",{class:"toc-anchor",href:"#"+t.slug},M(t.title),9,G)],2))),128))])],2)],2)]),_:1})])):F("",!0)}var x=H(P,[["render",K],["__file","Toc.vue"]]);export{x as default};
