var B=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var E=(s,o,e)=>o in s?B(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,x=(s,o)=>{for(var e in o||(o={}))F.call(o,e)&&E(s,e,o[e]);if(w)for(var e of w(o))I.call(o,e)&&E(s,e,o[e]);return s},v=(s,o)=>C(s,$(o));var N=(s,o,e)=>new Promise((c,i)=>{var l=t=>{try{p(e.next(t))}catch(m){i(m)}},u=t=>{try{p(e.throw(t))}catch(m){i(m)}},p=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,u);p((e=e.apply(s,o)).next())});import{g as K,o as R}from"./i18n.2d8b30eb.js";import{_ as S}from"./container.dca2910f.js";import{d as q,E as A,x as f,g as T,cd as U,o as z,a as D,b as a,w as n,u as r,f as _,t as b,aH as H}from"./url.8f5ec20c.js";import{a as V,C as M}from"./validate.348f94d6.js";import{b as P}from"./index.a86310a7.js";import{b as Q}from"./index.076e4837.js";import{u as j}from"./use-first-input-focus.0df83e78.js";import{E as G,b as J}from"./main.d8c6ef59.js";import{E as L}from"./index.bb5499e2.js";import{E as O,a as W}from"./index.a141884f.js";import{E as X}from"./index.96970839.js";import{E as Y}from"./index.593106e3.js";import"./logo-transparent.1566007e.js";import"./light-switch.0d127fee.js";import"./dark.7c26a0d3.js";import"./plugin-vue_export-helper.41ffa612.js";import"./windi.bf752d69.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./replace-all.dd6016f2.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.2f38f7c3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./event.776e7e11.js";import"./index.a595fe6d.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./_baseClone.29a8cd97.js";import"./isEqual.c3e9e9f4.js";const Z={class:"h-full overflow-hidden"},oo={class:"flex items-center mb-16 text-m"},eo={class:"text-444 mr-4"},Uo=q({setup(s){const{t:o}=K();j();const e=A({userName:"",password:"",verifyid:f("id")}),c={userName:[V(o("common.inputUsernameTips"))],password:[V(o("common.inputPasswordTips"),!1),M]},i=T(),l=U(),u=()=>N(this,null,function*(){yield i.value.validate();const t=yield(f("type")==="oauth"?Q:P)(e);if(t.error){G.error(t.error);return}t.access_token&&(J().login(t.access_token),l.replace({name:"home"}))});return(p,t)=>{const m=L,y=O,g=W,k=X,h=Y;return z(),D("div",Z,[a(h,null,{default:n(()=>[a(S,{title:r(o)("common.bindAccount"),onKeypress:R(u,["enter"])},{default:n(()=>[_("div",oo,[_("span",eo,b(r(o)("common.withoutKoobooAccount")),1),_("a",{class:"text-blue cursor-pointer",onClick:t[0]||(t[0]=d=>r(l).push({name:"bind-name",query:v(x({},r(l).currentRoute.value.query),{id:r(e).verifyid,type:r(f)("type")})}))},b(r(o)("common.bindName")),1)]),a(g,{ref_key:"form",ref:i,"label-position":"top",model:r(e),rules:r(c)},{default:n(()=>[a(y,{label:r(o)("common.username"),prop:"userName"},{default:n(()=>[a(m,{modelValue:r(e).userName,"onUpdate:modelValue":t[1]||(t[1]=d=>r(e).userName=d),"data-cy":"username"},null,8,["modelValue"])]),_:1},8,["label"]),a(y,{label:r(o)("common.password"),prop:"password"},{default:n(()=>[a(m,{modelValue:r(e).password,"onUpdate:modelValue":t[2]||(t[2]=d=>r(e).password=d),type:"password","data-cy":"password"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),a(k,{class:"w-full text-l h-48px",round:"",type:"primary",size:"large","data-cy":"confirm",onClick:u},{default:n(()=>[H(b(r(o)("common.ok")),1)]),_:1})]),_:1},8,["title","onKeypress"])]),_:1})])}}});export{Uo as default};
