import{R as b,M as L,Z as C,X as g,Y as B,b as I,d as Y,u as X}from"./windi.bf752d69.js";import{q as w,bA as z,Q as G,h as U,bk as W,aW as K,G as V,i as j,am as $,bB as p,d as q,b as Q,r as A,U as Z}from"./url.8f5ec20c.js";import{t as J}from"./error.7e8331f1.js";import{a as P}from"./scroll.54c27fbd.js";import{a as F}from"./i18n.2d8b30eb.js";var c=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(c||{});const ae=e=>{if(!w(e))return{};const o=e.props||{},t=(w(e.type)?e.type.props:void 0)||{},r={};return Object.keys(t).forEach(n=>{z(t[n],"default")&&(r[n]=t[n].default)}),Object.keys(o).forEach(n=>{r[G(n)]=o[n]}),r},ce=(e,o,t)=>{let r={offsetX:0,offsetY:0};const n=u=>{const i=u.clientX,N=u.clientY,{offsetX:m,offsetY:l}=r,a=e.value.getBoundingClientRect(),f=a.left,E=a.top,O=a.width,R=a.height,x=document.documentElement.clientWidth,D=document.documentElement.clientHeight,k=-f+m,_=-E+l,h=x-f-O+m,H=D-E-R+l,v=T=>{const M=Math.min(Math.max(m+T.clientX-i,k),h),S=Math.min(Math.max(l+T.clientY-N,_),H);r={offsetX:M,offsetY:S},e.value.style.transform=`translate(${b(M)}, ${b(S)})`},y=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",y)},d=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",n)},s=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",n)};U(()=>{W(()=>{t.value?d():s()})}),K(()=>{s()})},me=e=>{if(V(e)||J("[useLockscreen]","You need to pass a ref param to this function"),!F||L(document.body,"el-popup-parent--hidden"))return;let o=0,t=!1,r="0",n=0;const d=()=>{B(document.body,"el-popup-parent--hidden"),t&&(document.body.style.paddingRight=r)};j(e,s=>{if(!s){d();return}t=!L(document.body,"el-popup-parent--hidden"),t&&(r=document.body.style.paddingRight,n=Number.parseInt(C(document.body,"paddingRight"),10)),o=P();const u=document.documentElement.clientHeight<document.body.scrollHeight,i=C(document.body,"overflowY");o>0&&(u||i==="scroll")&&t&&(document.body.style.paddingRight=`${n+o}px`),g(document.body,"el-popup-parent--hidden")}),$(()=>d())},ee=e=>{if(!e)return{onClick:p,onMousedown:p,onMouseup:p};let o=!1,t=!1;return{onClick:s=>{o&&t&&e(s),o=t=!1},onMousedown:s=>{o=s.target===s.currentTarget},onMouseup:s=>{t=s.target===s.currentTarget}}},oe=I({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Y([String,Array,Object])},zIndex:{type:Y([String,Number])}}),te={click:e=>e instanceof MouseEvent};var ne=q({name:"ElOverlay",props:oe,emits:te,setup(e,{slots:o,emit:t}){const r=X("overlay"),n=i=>{t("click",i)},{onClick:d,onMousedown:s,onMouseup:u}=ee(e.customMaskEvent?void 0:n);return()=>e.mask?Q("div",{class:[r.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:s,onMouseup:u},[A(o,"default")],c.STYLE|c.CLASS|c.PROPS,["onClick","onMouseup","onMousedown"]):Z("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[A(o,"default")])}});const le=ne;export{le as E,me as a,ee as b,ae as g,ce as u};
