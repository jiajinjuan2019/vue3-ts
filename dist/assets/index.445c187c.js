import{c as e,a as t,r as n,p as o,b as r,d as s,F as a,e as i,f as c,o as l,t as u,g as d,h as p,w as f,v as m,i as h,j as v,T as g,_ as y,k as N,U as _,E as b}from"./vendor.0efd775b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={},L=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in w)return;w[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},C=[{path:"/",name:"index",component:()=>L((()=>import("./index.79372194.js")),["assets/index.79372194.js","assets/index.6b8c5008.css","assets/vendor.0efd775b.js"])},{path:"/cssCompoment",name:"cssCompoment",component:()=>L((()=>import("./index.b6ede014.js")),["assets/index.b6ede014.js","assets/index.0e54dac8.css","assets/vendor.0efd775b.js"])}],E=e({history:t(),routes:C});var I={setup(){let e=[{id:0,name:"样式合集",path:"/cssCompoment"}];return e=n(e),{leftNav:e,getShowItem:function(e){E.push(e.path)}}}};o("data-v-ede33a0e");const P={class:"leftBav"},k=c("div",null,"左侧菜单",-1),j=["onClick"];r(),I.render=function(e,t,n,o,r,c){return l(),s("div",P,[k,(l(!0),s(a,null,i(o.leftNav,(e=>(l(),s("div",{class:"itemNav centerbox",key:e.id,onClick:t=>o.getShowItem(e)},u(e.name),9,j)))),128))])},I.__scopeId="data-v-ede33a0e";var S={components:{leftNav:I},setup(){let e=d(!1);return{isShowNav:e,toggleIsNav:function(){e.value=!0}}}};S.render=function(e,t,n,o,r,i){const u=p("leftNav"),d=p("router-view");return l(),s(a,null,[f(c("div",{class:"home-leftnav centerbox",onMouseleave:t[0]||(t[0]=e=>o.isShowNav=!1)},[h(g,{name:"slide-fade"},{default:v((()=>[h(u)])),_:1})],544),[[m,o.isShowNav]]),c("div",{class:"left-line",onMouseenter:t[1]||(t[1]=(...e)=>o.toggleIsNav&&o.toggleIsNav(...e))},null,32),h(d)],64)};y.defaults.headers["Content-Type"]="application/json;charset=utf-8";const x=y.create({baseURL:"/api",timeout:6e3,withCredentials:!0}),$=y.create({baseURL:"http://yapi.data-bh.com",timeout:6e3,withCredentials:!0});y.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),y.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var O={instance:x,feach:$};const R=N(S);console.log(R),R.config.globalProperties.$fetch=O.feach,R.config.globalProperties.$instance=O.instance,R.component("v-chart",_),R.use(b),R.use(E),R.mount("#app");export{O as r};
