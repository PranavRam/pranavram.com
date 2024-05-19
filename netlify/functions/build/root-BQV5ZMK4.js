import{d as F}from"/build/_shared/chunk-PFLXJIF7.js";import"/build/_shared/chunk-66H5T4UK.js";import"/build/_shared/chunk-R2H2MNDV.js";import{a as d}from"/build/_shared/chunk-JRSJIFDN.js";import{e as y,f as c,g as k,h as z,i as L,l as S,n as C,p as P}from"/build/_shared/chunk-Z6GGLOSP.js";import{a as e}from"/build/_shared/chunk-AV2CQHUP.js";import{a as o}from"/build/_shared/chunk-WNIRONRQ.js";import{a as v}from"/build/_shared/chunk-4OSI5MRC.js";import{c as t}from"/build/_shared/chunk-Q3IECNXJ.js";var j=t(v());var g=t(o());function R(){let n=S().flatMap(r=>{var h;let p=(h=r.handle)==null?void 0:h.dynamicLinks;return typeof p!="function"?[]:p({data:r.data})});return(0,g.jsx)(g.Fragment,{children:n.map(r=>(0,g.jsx)("link",{rel:r.rel,href:r.href},r.rel))})}var A="/build/_assets/github-DVPIGTAB.webp";var D="/build/_assets/linkedin-EMKXW274.webp";var N="/build/_assets/twitter-V4BAOQ56.webp";var V=t(o()),I=({href:n,children:r})=>(0,V.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:r});var l=t(o()),E=()=>(0,l.jsxs)("div",{className:"flex justify-center gap-4 not-prose",children:[(0,l.jsx)(f,{href:`https://github.com/${e.github}`,alt:"GitHub profile",src:A}),(0,l.jsx)(f,{href:`https://twitter.com/${e.twitter}`,alt:"Twitter profile",src:N}),(0,l.jsx)(f,{href:`https://linkedin.com/in/${e.linkedin}`,alt:"LinkedIn profile",src:D})]}),f=({href:n,alt:r,src:p})=>(0,l.jsx)(I,{href:n,children:(0,l.jsx)("img",{alt:r,src:p,width:42,height:42,loading:"lazy",className:"dark:invert"})});var i=t(o()),M=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(E,{}),(0,i.jsxs)("div",{className:"py-4 flex flex-col justify-center items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 sm:flex-row ",children:[(0,i.jsx)("div",{children:e.author}),(0,i.jsx)("div",{className:"hidden sm:block",children:" \u2022 "}),(0,i.jsx)("div",{children:`\xA9 ${new Date().getFullYear()}`}),(0,i.jsx)("div",{className:"hidden sm:block",children:" \u2022 "}),(0,i.jsx)(c,{to:"/",className:"no-underline text-gray-500",children:e.domain})]})]});var w=t(v());var b=()=>window.matchMedia("(prefers-color-scheme: dark)").matches;var X="/build/_assets/menu-XIQVSJ3Y.webp";var m=t(o()),u=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{to:"/blog",children:"Blog"}),(0,m.jsx)(d,{to:"/tags",children:"Tags"}),(0,m.jsx)(d,{to:"/about",children:"About"})]});var s=t(o()),q=()=>{let[n,r]=(0,w.useState)(!1),[p,h]=(0,w.useState)(e.logo),$=()=>r(!0),x=()=>r(!1);return(0,w.useEffect)(()=>{b()&&e.logo_dark_mode&&h(e.logo_dark_mode)},[]),(0,s.jsxs)("header",{className:"flex justify-between items-center max-w-full w-full py-8 gap-x-12 md:gap-x-0",children:[(0,s.jsx)(c,{className:"home text-3xl font-medium no-underline flex-1 m-0 not-prose md:my-4",to:"/",children:p?(0,s.jsx)("img",{alt:"Website logo",src:p,loading:"lazy"}):(0,s.jsx)("span",{children:e.domain})}),(0,s.jsx)("div",{className:"sm:flex items-center gap-4 hidden flex-1 justify-end",children:(0,s.jsx)(u,{})}),(0,s.jsx)("div",{className:"sm:hidden not-prose",onClick:$,children:(0,s.jsx)("img",{alt:"Menu",src:X,width:42,height:42,loading:"lazy",className:"dark:invert"})}),(0,s.jsx)(F,{anchor:"right",open:n,onClose:x,onClick:x,children:(0,s.jsx)("div",{className:"flex flex-col pr-8 pl-4 pt-8 gap-4 dark:bg-slate-900 h-full min-w-[125px]",children:(0,s.jsx)(u,{})})})]})};var Y="/build/_assets/tailwind-EXAJHPJS.css";var a=t(o()),G=()=>[{rel:"stylesheet",href:Y},{rel:"icon",type:"image/png",href:"/favicons/favicon.png"}],O=({location:n})=>({charset:"utf-8",title:e.title,description:e.description,viewport:"width=device-width,initial-scale=1",robots:"index, follow","og:url":`${e.url}${n.pathname}`,"og:type":"website","og:site_name":e.title,"og:title":e.title,"og:description":e.description,"og:image":e.image,"twitter:card":"summary","twitter:site":`@${e.twitter}`,"twitter:title":e.title,"twitter:description":e.description,"twitter:image":e.image});function H(){return(0,j.useEffect)(()=>{b()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]),(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[(0,a.jsx)(z,{}),(0,a.jsx)(R,{}),(0,a.jsx)(k,{})]}),(0,a.jsxs)("body",{className:"dark:bg-slate-900 overflow-y-scroll prose lg:prose-xl dark:prose-invert flex flex-col items-center px-4 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto h-[100vh]",children:[(0,a.jsx)(q,{}),(0,a.jsx)(y,{}),(0,a.jsx)(M,{}),(0,a.jsx)(P,{}),(0,a.jsx)(L,{}),(0,a.jsx)(C,{})]})]})}export{H as default,G as links,O as meta};