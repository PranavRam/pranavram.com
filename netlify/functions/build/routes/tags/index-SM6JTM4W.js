import{a as s}from"/build/_shared/chunk-WI3BE4BV.js";import{a as l}from"/build/_shared/chunk-VZ6VL3AL.js";import{m as o}from"/build/_shared/chunk-Z6GGLOSP.js";import{a as i}from"/build/_shared/chunk-AV2CQHUP.js";import{a as n}from"/build/_shared/chunk-WNIRONRQ.js";import"/build/_shared/chunk-4OSI5MRC.js";import{c as a}from"/build/_shared/chunk-Q3IECNXJ.js";var m=a(l());var r=a(n()),p=()=>{let t=`Tags - ${i.author}`;return{title:t,"og:title":t,"twitter:title":t}};var f={getSitemapEntries:async()=>{let t=m.POSTS.map(e=>e.attributes.tags).flat();return Array.from(new Set(t)).map(e=>({route:`/tags/${e}`,priority:.5}))}};function u(){let{tags:t}=o();return(0,r.jsxs)("div",{className:"text-center mb-auto",children:[(0,r.jsx)("h1",{children:"Tags"}),(0,r.jsx)("div",{className:"flex justify-center gap-4 flex-wrap",children:t.map(([e,c])=>(0,r.jsx)(s,{label:`#${e} (${c})`,linkTo:e},e))})]})}export{u as default,f as handle,p as meta};
