import{a as u,b as x,j as b,k as T,l as y,s as P,v as c,w as C}from"/build/_shared/chunk-66H5T4UK.js";import{a as r,b as L}from"/build/_shared/chunk-Z6GGLOSP.js";import{a as N}from"/build/_shared/chunk-WNIRONRQ.js";import{a as O}from"/build/_shared/chunk-4OSI5MRC.js";import{c as m}from"/build/_shared/chunk-Q3IECNXJ.js";L();var A=m(O());function w(e){return T("MuiDivider",e)}var z=y("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var f=m(N()),V=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],$=e=>{let{absolute:t,children:i,classes:l,flexItem:s,light:n,orientation:o,textAlign:a,variant:p}=e;return b({root:["root",t&&"absolute",p,n&&"light",o==="vertical"&&"vertical",s&&"flexItem",i&&"withChildren",i&&o==="vertical"&&"withChildrenVertical",a==="right"&&o!=="vertical"&&"textAlignRight",a==="left"&&o!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",o==="vertical"&&"wrapperVertical"]},w,l)},j=c("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,i.orientation==="vertical"&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&i.orientation==="vertical"&&t.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&t.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:P(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>r({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>r({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>r({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),_=c("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.wrapper,i.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>r({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),M=A.forwardRef(function(t,i){let l=C({props:t,name:"MuiDivider"}),{absolute:s=!1,children:n,className:o,component:a=n?"div":"hr",flexItem:p=!1,light:g=!1,orientation:D="horizontal",role:h=a!=="hr"?"separator":void 0,textAlign:R="center",variant:W="fullWidth"}=l,I=u(l,V),d=r({},l,{absolute:s,component:a,flexItem:p,light:g,orientation:D,role:h,textAlign:R,variant:W}),v=$(d);return(0,f.jsx)(j,r({as:a,className:x(v.root,o),role:h,ref:i,ownerState:d},I,{children:n?(0,f.jsx)(_,{className:v.wrapper,ownerState:d,children:n}):null}))}),U=M;export{U as a};
