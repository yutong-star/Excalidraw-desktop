var D=(N,u,a)=>new Promise((p,b)=>{var f=m=>{try{g(a.next(m))}catch(d){b(d)}},_=m=>{try{g(a.throw(m))}catch(d){b(d)}},g=m=>m.done?p(m.value):Promise.resolve(m.value).then(f,_);g((a=a.apply(N,u)).next())});import{_ as X}from"./k-table.f75c31cc.js";import{g as P,o as T,w as Y}from"./i18n.2d8b30eb.js";import{a as ee}from"./index.3d9a337f.js";import{b as oe,u as z}from"./main.d8c6ef59.js";import{r as te,d as le,a as ae,b as ne,c as ie,g as re,h as se,v as me,j as ue}from"./validate.348f94d6.js";import{_ as de}from"./index.ed88cf90.js";import{u as K}from"./binding.177ab4a2.js";import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";import{E as ce}from"./index.21d7e739.js";import{E as fe,a as _e}from"./index.0a83bb10.js";import{E as ve,a as be}from"./index.a141884f.js";import{E as ge}from"./index.bb5499e2.js";import{E as ye,a as we}from"./index.ab4ed870.js";import{E as L}from"./windi.bf752d69.js";import{E as F}from"./index.ec785feb.js";import{E as Se}from"./index.a4ff385c.js";import{d as j,g as S,i as ke,o as s,j as c,w as n,b as i,f as v,u as t,a as k,b6 as h,aH as q,t as x,F as E,k as y,n as Ve,b7 as Ee,e as De}from"./url.8f5ec20c.js";import{B as xe}from"./breadcrumb.79da4f07.js";import{b as Be}from"./confirm.617d359f.js";import{E as he}from"./index.96970839.js";import{E as Ne}from"./index.bc06171b.js";import{E as Ae}from"./index.745dc8e0.js";import"./sortable.esm.a99254e8.js";import"./icon-button.e30c79ea.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./index.14993118.js";import"./isEqual.c3e9e9f4.js";import"./_baseIsEqual.2f38f7c3.js";import"./error.7e8331f1.js";import"./index.4c9af567.js";import"./index.a595fe6d.js";import"./event.776e7e11.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.dd6016f2.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./isNil.98bb3b88.js";import"./index.e3f90979.js";import"./event.53b2ad83.js";import"./_baseClone.29a8cd97.js";import"./index.593106e3.js";import"./scroll.54c27fbd.js";import"./debounce.730e1961.js";import"./index.b68af8a1.js";import"./validator.1bcd6e6a.js";import"./focus-trap.3f074800.js";import"./index.bf8ed8c6.js";import"./refs.d2253dd4.js";/* empty css                                                               */import"./plugin-vue_export-helper.41ffa612.js";import"./logo-transparent.1566007e.js";import"./index.80a4dc1a.js";import"./aria.75ec5909.js";const Ce={class:"p-24 pl-32"},$e={class:"flex items-center space-x-8"},Ue=j({props:{modelValue:{type:Boolean}},emits:["update:modelValue","reload"],setup(N,{emit:u}){const{t:a}=P(),p=[{key:"domain",value:a("common.domain")},{key:"Port",value:a("common.port")}],b=oe(),f=S(!0),_=S(p[0].key),g=S(),m=S(),d=z(),A=K(),w=S(!1);ee().then(o=>{var l;g.value=o,r.value.rootDomain=(l=o[0])==null?void 0:l.domainName});const r=S({subDomain:"",rootDomain:"",port:81,defaultBinding:!1,redirect:"",culture:""}),C={subDomain:[{pattern:/^([A-Za-z0-9\*][A-Za-z0-9\-\*]{0,})*[A-Za-z0-9\*]$/,message:a("common.subDomainInvalidTips")},te(1,63),le(r.value)],rootDomain:ae(a("common.rootDomainRequiredTips")),port:[ne(),ie()]},B=()=>D(this,null,function*(){yield m.value.validate(),yield re(r.value),f.value=!1,d.loadSite(),u("reload")});ke(()=>_.value,o=>{r.value.defaultBinding=o===p[1].key});const $=o=>{o.target.blur()};return(o,l)=>{const O=fe,Z=_e,V=ve,G=ge,U=ye,I=we,H=ce,M=L,J=F,Q=be,W=Se;return s(),c(W,{"model-value":f.value,"custom-class":"el-dialog--zero-padding",width:"644px","close-on-click-modal":!1,title:t(a)("common.newBinding"),onClosed:l[9]||(l[9]=e=>u("update:modelValue",!1))},{footer:n(()=>[i(de,{onConfirm:B,onCancel:l[8]||(l[8]=e=>f.value=!1)})]),default:n(()=>[v("div",Ce,[t(b).header?(s(),c(Q,{key:0,ref_key:"form",ref:m,model:r.value,rules:t(C),onKeydown:T(B,["enter"]),onSubmit:l[7]||(l[7]=Y(()=>{},["prevent"]))},{default:n(()=>[t(b).header.isOnlineServer?y("",!0):(s(),c(V,{key:0,label:t(a)("common.bindingTo"),"label-width":"100px"},{default:n(()=>[i(Z,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=e=>_.value=e),class:"el-radio-group--rounded"},{default:n(()=>[(s(),k(E,null,h(p,e=>i(O,{key:e.key,label:e.key,"data-cy":e.key},{default:n(()=>[q(x(e.value),1)]),_:2},1032,["label","data-cy"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])),v("div",$e,[_.value===p[0].key?(s(),c(V,{key:0,prop:"subDomain",label:t(a)("common.domain"),"label-width":"100px"},{default:n(()=>[i(G,{modelValue:r.value.subDomain,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value.subDomain=e),"data-cy":"subdomain"},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),_.value===p[0].key?(s(),c(V,{key:1,prop:"rootDomain"},{default:n(()=>[i(I,{modelValue:r.value.rootDomain,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value.rootDomain=e),class:"w-full"},{default:n(()=>[(s(!0),k(E,null,h(g.value,e=>(s(),c(U,{key:e.domainName,label:"."+e.domainName,value:e.domainName,"data-cy":"root-domain-opt"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):y("",!0)]),_.value===p[1].key?(s(),c(V,{key:1,prop:"port",label:t(a)("common.port"),"label-width":"100px"},{default:n(()=>[i(H,{modelValue:r.value.port,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value.port=e),onKeydown:T($,["enter"])},null,8,["modelValue","onKeydown"])]),_:1},8,["label"])):y("",!0),i(J,{placement:"top",content:w.value?t(a)("common.hideAdvanceSettings"):t(a)("common.showAdvanceSettings")},{default:n(()=>[v("div",{class:"flex items-center justify-center h-40px cursor-pointer bg-card dark:bg-444 hover:bg-[#eff6ff] dark:hover:bg-444","data-cy":"show-advance-settings",onClick:l[4]||(l[4]=e=>w.value=!w.value)},[i(M,{class:Ve(["iconfont icon-pull-down text-s leading-none cursor-pointer transform origin-center transition duration-200 dark:text-fff/86",w.value?"rotate-180":"rotate-0"])},null,8,["class"])])]),_:1},8,["content"]),w.value?(s(),k(E,{key:2},[i(V,{class:"mt-16",label:t(a)("common.redirectTo"),"label-width":"100px"},{default:n(()=>[i(I,{modelValue:r.value.redirect,"onUpdate:modelValue":l[5]||(l[5]=e=>r.value.redirect=e),class:"w-full",clearable:""},{default:n(()=>[(s(!0),k(E,null,h(t(A).bindings,e=>(s(),c(U,{key:e.id,value:e.fullName,label:e.fullName},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(V,{label:t(a)("common.culture"),"label-width":"100px"},{default:n(()=>[i(I,{modelValue:r.value.culture,"onUpdate:modelValue":l[6]||(l[6]=e=>r.value.culture=e),class:"w-full",clearable:""},{default:n(()=>[(s(!0),k(E,null,h(t(d).site.culture,(e,R)=>(s(),c(U,{key:R,value:R,label:e},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):y("",!0)]),_:1},8,["model","rules","onKeydown"])):y("",!0)])]),_:1},8,["model-value","title"])}}});var Ie=pe(Ue,[["__scopeId","data-v-17241ea4"]]);const Re={class:"p-24"},Te={class:"flex items-center py-24 space-x-16"},Pe={class:"flex items-center"},ze={"data-cy":"domain"},Ke={key:0},Mo=j({setup(N){const{t:u}=P(),a=S(!1),p=z(),b=K(),f=()=>D(this,null,function*(){b.loadBindings()}),_=m=>D(this,null,function*(){yield Be(m.length),yield se(m.map(d=>d.id)),p.loadSite(),f()}),g=m=>D(this,null,function*(){yield me({rootDomain:m.fullName}),yield ue({rootDomain:m.fullName}),f()});return f(),(m,d)=>{const A=L,w=he,r=Ne,C=Ae,B=F,$=Ee("hasPermission");return s(),k(E,null,[v("div",Re,[i(xe,{name:t(u)("common.domains")},null,8,["name"]),v("div",Te,[De((s(),c(w,{round:"","data-cy":"new-binding",onClick:d[0]||(d[0]=o=>a.value=!0)},{default:n(()=>[v("div",Pe,[i(A,{class:"mr-16 iconfont icon-a-addto"}),q(" "+x(t(u)("common.newBinding")),1)])]),_:1})),[[$,{feature:"domain",action:"edit"}]])]),i(t(X),{data:t(b).bindings,"show-check":"",permission:{feature:"domain",action:"delete"},onDelete:_},{default:n(()=>[i(r,{label:t(u)("common.domainOrPort")},{default:n(({row:o})=>[v("span",ze,x(o.defaultPortBinding?o.port:o.fullName),1)]),_:1},8,["label"]),i(r,{label:t(u)("common.redirectTo")},{default:n(({row:o})=>[v("span",null,x(o.redirect),1)]),_:1},8,["label"]),i(r,{label:t(u)("common.culture")},{default:n(({row:o})=>[v("span",null,x(o.culture),1)]),_:1},8,["label"]),i(r,{label:t(u)("common.SSLEnabled"),align:"center"},{default:n(({row:o})=>[o.defaultPortBinding?y("",!0):(s(),k("div",Ke,[i(B,{class:"box-item",effect:"dark",content:o.enableSsl?"":t(u)("common.enableSSL"),disabled:o.enableSsl,placement:"top"},{default:n(()=>[i(C,{"model-value":o.enableSsl,disabled:o.enableSsl||!t(p).hasAccess("domain","edit"),title:t(p).hasAccess("domain","edit")?"":t(u)("common.noPermission"),"data-cy":"ssl-enabled","onUpdate:modelValue":l=>g(o)},null,8,["model-value","disabled","title","onUpdate:modelValue"])]),_:2},1032,["content","disabled"])]))]),_:1},8,["label"])]),_:1},8,["data"])]),a.value?(s(),c(Ie,{key:0,modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=o=>a.value=o),onReload:f},null,8,["modelValue"])):y("",!0)],64)}}});export{Mo as default};