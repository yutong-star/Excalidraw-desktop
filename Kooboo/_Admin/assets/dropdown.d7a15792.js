var L=Object.defineProperty,$=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var C=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&C(t,o,e[o]);if(I)for(var o of I(e))w.call(e,o)&&C(t,o,e[o]);return t},d=(t,e)=>$(t,h(e));import{_ as O,b as E,d as l,i as B,c as s}from"./windi.bf752d69.js";import{b as P,u as v}from"./index.ec785feb.js";import{r as y,g as T,b2 as g,B as A,h as K,u as _,aW as x}from"./url.8f5ec20c.js";const Y={inheritAttrs:!1};function j(t,e,o,r,i,m){return y(t.$slots,"default")}var k=O(Y,[["render",j],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const F={name:"ElCollectionItem",inheritAttrs:!1};function J(t,e,o,r,i,m){return y(t.$slots,"default")}var R=O(F,[["render",J],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const D="data-el-collection-item",U=t=>{const e=`El${t}Collection`,o=`${e}Item`,r=Symbol(e),i=Symbol(o),m=d(a({},k),{name:e,setup(){const f=T(null),p=new Map;g(r,{itemMap:p,getItems:()=>{const c=_(f);if(!c)return[];const n=Array.from(c.querySelectorAll(`[${D}]`));return[...p.values()].sort((S,b)=>n.indexOf(S.ref)-n.indexOf(b.ref))},collectionRef:f})}}),N=d(a({},R),{name:o,setup(f,{attrs:p}){const u=T(null),c=A(r,void 0);g(i,{collectionItemRef:u}),K(()=>{const n=_(u);n&&c.itemMap.set(n,a({ref:n},p))}),x(()=>{const n=_(u);c.itemMap.delete(n)})}});return{COLLECTION_INJECTION_KEY:r,COLLECTION_ITEM_INJECTION_KEY:i,ElCollection:m,ElCollectionItem:N}},X=E({trigger:P.trigger,effect:d(a({},v.effect),{default:"light"}),type:{type:l(String)},placement:{type:l(String),default:"bottom"},popperOptions:{type:l(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:l([Number,String]),default:0},maxHeight:{type:l([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:l(Object)}}),Z=E({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:B}}),ee=E({onKeydown:{type:l(Function)}}),V=[s.down,s.pageDown,s.home],W=[s.up,s.pageUp,s.end],te=[...V,...W],{ElCollection:oe,ElCollectionItem:ne,COLLECTION_INJECTION_KEY:le,COLLECTION_ITEM_INJECTION_KEY:se}=U("Dropdown");export{se as C,oe as E,te as F,W as L,Z as a,D as b,U as c,X as d,ne as e,ee as f,le as g};
