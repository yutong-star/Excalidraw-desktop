var u=(s,m,t)=>new Promise((i,r)=>{var p=o=>{try{e(t.next(o))}catch(a){r(a)}},c=o=>{try{e(t.throw(o))}catch(a){r(a)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(p,c);e((t=t.apply(s,m)).next())});import{_ as f}from"./index.026f772c.js";import{d,cd as _,g as B,o as g,a as v,b as n,u as l,F as b}from"./url.8f5ec20c.js";import{B as h}from"./breadcrumb.79da4f07.js";import{g as k}from"./i18n.2d8b30eb.js";import{c as y}from"./discount.56117d93.js";import{u as D}from"./replace-all.dd6016f2.js";import{_ as x}from"./edit-form.a9375412.js";import"./index.96970839.js";import"./windi.bf752d69.js";import"./index.a595fe6d.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.593106e3.js";import"./error.7e8331f1.js";import"./condition.6ba962ea.js";import"./icon-button.e30c79ea.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./index.0a83bb10.js";import"./event.776e7e11.js";import"./index.a141884f.js";import"./_baseClone.29a8cd97.js";import"./_baseIsEqual.2f38f7c3.js";import"./isEqual.c3e9e9f4.js";import"./index.ab4ed870.js";import"./index.bb5499e2.js";import"./scroll.54c27fbd.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.b68af8a1.js";import"./validator.1bcd6e6a.js";import"./guid.c1a40312.js";import"./index.21d7e739.js";import"./index.e3f90979.js";import"./index.5c1ee36f.js";import"./dayjs.min.35b12e7a.js";import"./index.745dc8e0.js";const vo=d({setup(s){const{t:m}=k(),t=_(),i=B({title:"",code:"",condition:{isAny:!1,items:[]},endDate:"",startDate:"",isPercent:!1,method:"AutomaticDiscount",type:"ProductAmountOff",value:10,priority:0,isExclusion:!1});function r(){t.goBackOrTo(D({name:"product collections"}))}function p(){return u(this,null,function*(){yield y(i.value),r()})}return(c,e)=>{const o=f;return g(),v(b,null,[n(h,{class:"p-24","crumb-path":[{name:l(m)("common.discounts"),route:{name:"discounts"}},{name:l(m)("common.create")}]},null,8,["crumb-path"]),n(x,{model:i.value},null,8,["model"]),n(o,{permission:{feature:"productCategories",action:"edit"},onCancel:r,onSave:p})],64)}}});export{vo as default};
