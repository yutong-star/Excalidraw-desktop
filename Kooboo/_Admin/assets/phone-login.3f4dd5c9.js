var N=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(t,o,e)=>o in t?N(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))K.call(o,e)&&b(t,e,o[e]);if(g)for(var e of g(o))L.call(o,e)&&b(t,e,o[e]);return t},C=(t,o)=>T(t,$(o));var V=(t,o,e)=>new Promise((c,_)=>{var f=n=>{try{i(e.next(n))}catch(u){_(u)}},m=n=>{try{i(e.throw(n))}catch(u){_(u)}},i=n=>n.done?c(n.value):Promise.resolve(n.value).then(f,m);i((e=e.apply(t,o)).next())});import{_ as U,a as A}from"./verify-button.019a1abf.js";import{g as D,o as M}from"./i18n.2d8b30eb.js";import{_ as P}from"./container.dca2910f.js";import{d as z,E as H,aq as j,cd as G,M as J,g as E,o as O,a as Q,b as l,w as p,u as r,f as W,aH as X,t as Y}from"./url.8f5ec20c.js";import{a as x,p as Z,A as ee}from"./validate.348f94d6.js";import{v as oe,s as te}from"./index.a86310a7.js";import{u as re}from"./use-first-input-focus.0df83e78.js";import{E as ne,b as ae}from"./main.d8c6ef59.js";import{S as le,E as se,a as ie}from"./index.a141884f.js";import{E as pe}from"./index.bb5499e2.js";import{E as me}from"./index.96970839.js";import{E as ue}from"./index.593106e3.js";import"./country-and-region-codes.c36488d2.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./windi.bf752d69.js";import"./index.b3663d55.js";import"./logo-transparent.1566007e.js";import"./light-switch.0d127fee.js";import"./dark.7c26a0d3.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./replace-all.dd6016f2.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.2f38f7c3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./error.7e8331f1.js";import"./index.a595fe6d.js";import"./_baseClone.29a8cd97.js";import"./isEqual.c3e9e9f4.js";import"./event.776e7e11.js";import"./isNil.98bb3b88.js";const de={class:"h-full overflow-hidden"},ce={class:"flex items-center space-x-8"},Ye=z({setup(t){const{t:o}=D();re();const e=H({phone:"",code:"",regionCode:"+86",returnurl:""}),c={phone:[x(o("common.inputPhoneTips")),Z],code:[x(o("common.inputSecurityCodeTips")),ee]},_=new le({phone:c.phone}),f=j(null),m=G(),i=J();i.query.returnurl&&(e.returnurl=i.query.returnurl);const n=()=>V(this,null,function*(){yield f.value.validate();const a=yield oe(`${e.regionCode}${e.phone}`,e.code,e.returnurl);if(a.error){ne.error(a.error);return}a.requireinfo?m.replace({name:"bind-name",query:C(v({},m.currentRoute.value.query),{id:a.verifyid})}):(ae().login(a.access_token),m.replace({name:"home"}))}),u=E(!1),h=E(!0),w=(a,s)=>{a==="phone"&&(u.value=s)},k=()=>{_.validate({phone:e.phone},a=>{h.value=!!a})},q=()=>{te(e.regionCode+e.phone)};return(a,s)=>{const R=A,y=se,I=pe,S=ie,B=me,F=ue;return O(),Q("div",de,[l(F,null,{default:p(()=>[l(P,{title:r(o)("common.phoneLogin"),back:"",onKeypress:M(n,["enter"])},{default:p(()=>[l(S,{ref_key:"form",ref:f,"label-position":"top",model:r(e),rules:r(c),"hide-required-asterisk":"",onValidate:w},{default:p(()=>[l(y,{label:r(o)("common.phoneNumber"),prop:"phone"},{default:p(()=>[l(R,{modelValue:r(e).phone,"onUpdate:modelValue":s[0]||(s[0]=d=>r(e).phone=d),regionCode:r(e).regionCode,"onUpdate:regionCode":s[1]||(s[1]=d=>r(e).regionCode=d),"data-cy":"phone-number",onInput:k},null,8,["modelValue","regionCode"])]),_:1},8,["label"]),l(y,{label:r(o)("common.securityCode"),prop:"code"},{default:p(()=>[W("div",ce,[l(I,{modelValue:r(e).code,"onUpdate:modelValue":s[2]||(s[2]=d=>r(e).code=d),class:"phone_login__code_input",maxlength:"4","data-cy":"security-code"},null,8,["modelValue"]),l(U,{disabled:h.value,"data-cy":"send-security-code",onClick:q},null,8,["disabled"])])]),_:1},8,["label"])]),_:1},8,["model","rules"]),l(B,{class:"w-full text-l h-48px",round:"",type:"primary",size:"large","data-cy":"login",onClick:n},{default:p(()=>[X(Y(r(o)("common.login")),1)]),_:1})]),_:1},8,["title","onKeypress"])]),_:1})])}}});export{Ye as default};
