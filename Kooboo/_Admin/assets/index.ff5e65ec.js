var B=(h,r,$)=>new Promise((p,c)=>{var f=e=>{try{l($.next(e))}catch(g){c(g)}},b=e=>{try{l($.throw(e))}catch(g){c(g)}},l=e=>e.done?p(e.value):Promise.resolve(e.value).then(f,b);l(($=$.apply(h,r)).next())});import{_ as X}from"./k-table.f75c31cc.js";import{S as Y}from"./search-input.770da843.js";import{g as F,o as Z}from"./i18n.2d8b30eb.js";import{d as T,g as k,o as u,j as C,w as t,b as o,f as y,u as n,k as N,a as I,aH as D,t as _,F as z,b6 as M,M as ee,h as oe,b7 as le,e as te}from"./url.8f5ec20c.js";import{B as ae}from"./breadcrumb.79da4f07.js";import{b as q,e as H,_ as ne,d as se,g as ue}from"./create-dialog.bf9a87d1.js";import{b as re}from"./confirm.617d359f.js";import{_ as P}from"./index.ed88cf90.js";import{_ as me}from"./editable-tags.b319c614.js";import{u as de}from"./useTag.5e018089.js";import{E as ie}from"./index.bb5499e2.js";import{E as pe,a as ce}from"./index.a141884f.js";import{E as K}from"./index.a4ff385c.js";import{a as fe,_ as ve}from"./create-address-dialog.de31fb9c.js";import{E as _e}from"./index.a253a5b3.js";import{c as L}from"./index.ab4ed870.js";import{E as G}from"./windi.bf752d69.js";import{E as Q}from"./index.ec785feb.js";import{E as ge}from"./index.593106e3.js";import{E as W}from"./index.96970839.js";import{E as Ve}from"./index.bc06171b.js";import"./sortable.esm.a99254e8.js";import"./icon-button.e30c79ea.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.dd6016f2.js";import"./index.14993118.js";import"./isEqual.c3e9e9f4.js";import"./_baseIsEqual.2f38f7c3.js";import"./error.7e8331f1.js";import"./index.4c9af567.js";import"./index.a595fe6d.js";import"./event.776e7e11.js";import"./index.0a83bb10.js";/* empty css                                                                 */import"./plugin-vue_export-helper.21dcd24c.js";/* empty css                                                               */import"./plugin-vue_export-helper.41ffa612.js";import"./logo-transparent.1566007e.js";import"./index.80a4dc1a.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./validator.1bcd6e6a.js";import"./index.c1ec4d8d.js";import"./dropdown.d7a15792.js";import"./_baseIndexOf.4d7985be.js";import"./_baseClone.29a8cd97.js";import"./refs.d2253dd4.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.b68af8a1.js";const ye={class:"grid grid-cols-2 gap-8"},be=T({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(h,{emit:r}){const $=h,{t:p}=F(),c=k(!0),{tags:f,removeTag:b}=de("Customer"),l=k();q($.id).then(g=>{l.value=g,l.value.tags||(l.value.tags=[])});function e(){return B(this,null,function*(){yield H(l.value),r("reload"),c.value=!1})}return(g,m)=>{const v=ie,E=pe,d=ce,x=P,s=K;return u(),C(s,{"model-value":c.value,width:"600px",title:n(p)("common.edit"),"close-on-click-modal":!1,onClosed:m[6]||(m[6]=V=>r("update:modelValue",!1))},{footer:t(()=>[o(x,{onConfirm:e,onCancel:m[5]||(m[5]=V=>c.value=!1)})]),default:t(()=>[l.value?(u(),C(d,{key:0,"label-position":"top"},{default:t(()=>[y("div",ye,[o(E,{label:n(p)("common.firstName")},{default:t(()=>[o(v,{modelValue:l.value.firstName,"onUpdate:modelValue":m[0]||(m[0]=V=>l.value.firstName=V)},null,8,["modelValue"])]),_:1},8,["label"]),o(E,{label:n(p)("common.lastName")},{default:t(()=>[o(v,{modelValue:l.value.lastName,"onUpdate:modelValue":m[1]||(m[1]=V=>l.value.lastName=V)},null,8,["modelValue"])]),_:1},8,["label"])]),o(E,{label:n(p)("common.email")},{default:t(()=>[o(v,{modelValue:l.value.email,"onUpdate:modelValue":m[2]||(m[2]=V=>l.value.email=V)},null,8,["modelValue"])]),_:1},8,["label"]),o(E,{label:n(p)("common.phone")},{default:t(()=>[o(v,{modelValue:l.value.phone,"onUpdate:modelValue":m[3]||(m[3]=V=>l.value.phone=V)},null,8,["modelValue"])]),_:1},8,["label"]),o(E,{label:n(p)("common.tag")},{default:t(()=>[o(me,{modelValue:l.value.tags,"onUpdate:modelValue":m[4]||(m[4]=V=>l.value.tags=V),"option-deletable":"",options:n(f),onDeleteOption:n(b)},null,8,["modelValue","options","onDeleteOption"])]),_:1},8,["label"])]),_:1})):N("",!0)]),_:1},8,["model-value","title"])}}}),xe=T({props:{modelValue:{type:Boolean},model:null},emits:["update:modelValue","update"],setup(h,{emit:r}){const $=h,{t:p}=F(),c=k(!0),f=k(JSON.parse(JSON.stringify($.model)));function b(){return B(this,null,function*(){r("update",f.value),c.value=!1})}return(l,e)=>{const g=P,m=K;return u(),C(m,{"model-value":c.value,width:"600px",title:n(p)("common.createAddress"),"close-on-click-modal":!1,onClosed:e[2]||(e[2]=v=>r("update:modelValue",!1))},{footer:t(()=>[o(g,{onConfirm:b,onCancel:e[1]||(e[1]=v=>c.value=!1)})]),default:t(()=>[o(fe,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=v=>f.value=v),model:f.value},null,8,["modelValue","model"])]),_:1},8,["model-value","title"])}}}),ke={key:0,class:"space-y-8"},Ce={class:"flex items-center space-x-8"},Ee=y("div",{class:"flex-1"},null,-1),$e={class:"p-4 space-y-4"},we={class:"flex"},De={class:"flex items-center"},he=y("div",{class:"flex-1"},null,-1),Ne=T({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(h,{emit:r}){const $=h,{t:p}=F(),c=k(!0),f=k(!1),b=k(!1),l=k(),e=k();q($.id).then(x=>{e.value=x});function g(){return B(this,null,function*(){yield H(e.value),r("reload"),c.value=!1})}function m(x){e.value.addresses.forEach(s=>s.isDefault=!1),e.value.addresses.push(x)}function v(x){var s=e.value.addresses.indexOf(l.value);e.value.addresses.splice(s,1,x)}function E(x){e.value.addresses.forEach(s=>s.isDefault=!1),x.isDefault=!0}function d(x){e.value.addresses.splice(x,1),e.value.addresses.length&&e.value.addresses.every(s=>!s.isDefault)&&(e.value.addresses[0].isDefault=!0)}return(x,s)=>{const V=L,w=G,S=Q,A=_e,O=ge,R=W,a=P,U=K;return u(),I(z,null,[o(U,{"model-value":c.value,width:"800px",title:n(p)("common.addresses"),"close-on-click-modal":!1,onClosed:s[2]||(s[2]=i=>r("update:modelValue",!1))},{footer:t(()=>[y("div",we,[o(R,{round:"",onClick:s[0]||(s[0]=i=>f.value=!0)},{default:t(()=>[y("div",De,[o(w,{class:"mr-16 iconfont icon-a-addto"}),D(" "+_(n(p)("common.create")),1)])]),_:1}),he,o(a,{onConfirm:g,onCancel:s[1]||(s[1]=i=>c.value=!1)})])]),default:t(()=>[e.value?(u(),C(O,{key:0,"max-height":"400px"},{default:t(()=>[e.value.addresses.length?(u(),I("div",ke,[(u(!0),I(z,null,M(e.value.addresses,(i,j)=>(u(),I("div",{key:j,class:"border border-gray p-12 rounded-normal space-y-8"},[y("div",Ce,[i.isDefault?(u(),C(V,{key:0,round:"",type:"success"},{default:t(()=>[D(_(n(p)("common.default")),1)]),_:1})):(u(),C(V,{key:1,round:"",type:"info",class:"cursor-pointer",onClick:J=>E(i)},{default:t(()=>[D(_(n(p)("common.setAsDefault")),1)]),_:2},1032,["onClick"])),Ee,o(S,{placement:"top",content:n(p)("common.edit")},{default:t(()=>[o(w,{class:"iconfont icon-a-writein hover:text-blue text-l",onClick:J=>{l.value=i,b.value=!0}},null,8,["onClick"])]),_:2},1032,["content"]),o(S,{placement:"top",content:n(p)("common.delete")},{default:t(()=>[o(w,{class:"iconfont icon-delete text-orange text-l",onClick:J=>d(j)},null,8,["onClick"])]),_:2},1032,["content"])]),y("div",$e,[y("div",null,_(i.firstName)+" "+_(i.lastName)+" "+_(i.phone),1),y("div",null,_(i.country),1),y("div",null,_(i.city)+" "+_(i.province)+" "+_(i.zip),1),y("div",null,_(i.address1),1)])]))),128))])):(u(),C(A,{key:1}))]),_:1})):N("",!0)]),_:1},8,["model-value","title"]),f.value?(u(),C(ve,{key:0,modelValue:f.value,"onUpdate:modelValue":s[3]||(s[3]=i=>f.value=i),onCreate:m},null,8,["modelValue"])):N("",!0),b.value?(u(),C(xe,{key:1,modelValue:b.value,"onUpdate:modelValue":s[4]||(s[4]=i=>b.value=i),model:l.value,onUpdate:v},null,8,["modelValue","model"])):N("",!0)],64)}}}),Be={class:"p-24"},Ie={class:"flex items-center py-24 space-x-16"},Se={class:"flex items-center"},Ue=y("div",{class:"flex-1"},null,-1),Fe={class:"flex items-center justify-center"},Te={class:"inline-flex flex-wrap gap-4"},jo=T({setup(h){const{t:r}=F(),p=ee().meta.title,c=k(!1),f=k(!1),b=k(!1),l=k(),e=k(),g=k({pageIndex:1,pageSize:30,keyword:""});function m(E){return B(this,null,function*(){yield re(E.length),yield se(E.map(d=>d.id)),v(g.value.pageIndex)})}function v(E=1){return B(this,null,function*(){g.value.pageIndex=E,l.value=yield ue(g.value)})}return oe(()=>B(this,null,function*(){v()})),(E,d)=>{const x=G,s=W,V=Y,w=Ve,S=L,A=Q,O=X,R=le("hasPermission");return u(),I("div",Be,[o(ae,{name:n(p)},null,8,["name"]),y("div",Ie,[te((u(),C(s,{round:"",onClick:d[0]||(d[0]=a=>c.value=!0)},{default:t(()=>[y("div",Se,[o(x,{class:"mr-16 iconfont icon-a-addto"}),D(" "+_(n(r)("common.create")),1)])]),_:1})),[[R,{feature:"carts",action:"edit"}]]),Ue,o(V,{modelValue:g.value.keyword,"onUpdate:modelValue":d[1]||(d[1]=a=>g.value.keyword=a),placeholder:n(r)("common.search"),class:"w-248px",onKeydown:d[2]||(d[2]=Z(a=>v(),["enter"]))},null,8,["modelValue","placeholder"])]),l.value?(u(),C(O,{key:0,data:l.value.list,"show-check":"",pagination:{currentPage:l.value.pageIndex,totalCount:l.value.count,pageSize:l.value.pageSize},onChange:d[3]||(d[3]=a=>v(l.value.pageIndex)),onDelete:m},{default:t(()=>[o(w,{label:n(r)("common.email")},{default:t(({row:a})=>[D(_(a.email),1)]),_:1},8,["label"]),o(w,{label:n(r)("common.phone")},{default:t(({row:a})=>[D(_(a.phone),1)]),_:1},8,["label"]),o(w,{label:n(r)("common.firstName")},{default:t(({row:a})=>[D(_(a.firstName),1)]),_:1},8,["label"]),o(w,{label:n(r)("common.lastName")},{default:t(({row:a})=>[D(_(a.lastName),1)]),_:1},8,["label"]),o(w,{label:n(r)("common.addresses"),align:"center"},{default:t(({row:a})=>[y("div",Fe,[o(S,{round:"",class:"cursor-pointer",type:"success",onClick:U=>{e.value=a,b.value=!0}},{default:t(()=>[D(_(a.addresses),1)]),_:2},1032,["onClick"])])]),_:1},8,["label"]),o(w,{label:n(r)("common.tags"),align:"center"},{default:t(({row:a})=>[y("div",Te,[(u(!0),I(z,null,M(a.tags,(U,i)=>(u(),C(S,{key:i,round:"",type:"warning"},{default:t(()=>[D(_(U),1)]),_:2},1024))),128))])]),_:1},8,["label"]),o(w,{align:"right",width:"60"},{default:t(({row:a})=>[o(A,{placement:"top",content:n(r)("common.edit")},{default:t(()=>[o(x,{class:"iconfont icon-a-writein hover:text-blue text-l",onClick:U=>{e.value=a,f.value=!0}},null,8,["onClick"])]),_:2},1032,["content"])]),_:1})]),_:1},8,["data","pagination"])):N("",!0),c.value?(u(),C(ne,{key:1,modelValue:c.value,"onUpdate:modelValue":d[4]||(d[4]=a=>c.value=a),onReload:v},null,8,["modelValue"])):N("",!0),f.value?(u(),C(be,{key:2,id:e.value.id,modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=a=>f.value=a),onReload:v},null,8,["id","modelValue"])):N("",!0),b.value?(u(),C(Ne,{key:3,id:e.value.id,modelValue:b.value,"onUpdate:modelValue":d[6]||(d[6]=a=>b.value=a),onReload:v},null,8,["id","modelValue"])):N("",!0)])}}});export{jo as default};
