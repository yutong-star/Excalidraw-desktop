var h=(w,t,m)=>new Promise((b,d)=>{var C=r=>{try{_(m.next(r))}catch(e){d(e)}},k=r=>{try{_(m.throw(r))}catch(e){d(e)}},_=r=>r.done?b(r.value):Promise.resolve(r.value).then(C,k);_((m=m.apply(w,t)).next())});import{_ as $}from"./index.45c8ef26.js";import{_ as S}from"./icon-button.e30c79ea.js";import{_ as T}from"./k-table.f75c31cc.js";import{j as I,k as R,i as j}from"./index.68d24a68.js";import{u as F}from"./use-date.28e9a8a3.js";import{d as L,g as B,cd as M,o as s,a as H,f as g,b as c,u as a,j as y,w as n,k as u,F as q,x as N,aH as V,t as p,cg as D}from"./url.8f5ec20c.js";import{u as J}from"./replace-all.dd6016f2.js";import{B as O}from"./breadcrumb.79da4f07.js";import{g as P}from"./i18n.2d8b30eb.js";import{E as Q}from"./index.96970839.js";import{E as U}from"./index.bc06171b.js";import"./main.esm.f3ac04a5.js";import"./editor.main.d2800f63.js";import"./preload-helper.13a99eb0.js";import"./dark.7c26a0d3.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./windi.bf752d69.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.a595fe6d.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./sortable.esm.a99254e8.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./index.14993118.js";import"./index.ab4ed870.js";import"./index.bb5499e2.js";import"./event.776e7e11.js";import"./error.7e8331f1.js";import"./index.593106e3.js";import"./scroll.54c27fbd.js";import"./isEqual.c3e9e9f4.js";import"./_baseIsEqual.2f38f7c3.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.b68af8a1.js";import"./validator.1bcd6e6a.js";import"./index.4c9af567.js";import"./index.0a83bb10.js";import"./style.ad574a57.js";import"./dayjs.min.35b12e7a.js";/* empty css                                                               */const W={class:"p-24"},z={key:0},Oo=L({setup(w){const{t}=P(),m=B(),b=M(),d=()=>h(this,null,function*(){m.value=yield I({keyHash:N("keyHash"),storeNameHash:N("storeNameHash"),tableNameHash:N("tableNameHash")})}),C=e=>h(this,null,function*(){yield R(e.id),yield d()}),k=e=>h(this,null,function*(){var i;var l=b.resolve(J({name:"version-compare",query:{left:e[0].id,right:((i=e[1])==null?void 0:i.id)||-1}}));D(l.href)});d();function _(e){return h(this,null,function*(){const l=yield j(e),i=JSON.parse(l);r.value&&r.value.load(e,i)})}const r=B(null);return(e,l)=>{const i=Q,v=U,x=S,E=$;return s(),H(q,null,[g("div",W,[c(O,{"crumb-path":[{name:a(t)("common.siteLogs"),route:{name:"sitelogs"}},{name:a(t)("common.versions")}]},null,8,["crumb-path"]),m.value?(s(),y(a(T),{key:0,data:m.value,"show-check":"","hide-delete":"",class:"mt-24"},{bar:n(({selected:o})=>[o.length===1?(s(),y(i,{key:0,round:"","data-cy":"undo",onClick:f=>C(o[0])},{default:n(()=>[V(p(a(t)("common.undo")),1)]),_:2},1032,["onClick"])):u("",!0),o.length===1?(s(),y(i,{key:1,round:"","data-cy":"compare-with-current",onClick:f=>k(o)},{default:n(()=>[V(p(a(t)("common.compareWithCurrent")),1)]),_:2},1032,["onClick"])):u("",!0),o.length===2?(s(),y(i,{key:2,round:"","data-cy":"compare",onClick:f=>k(o)},{default:n(()=>[V(p(a(t)("common.compare")),1)]),_:2},1032,["onClick"])):u("",!0)]),default:n(()=>[c(v,{label:a(t)("common.version")},{default:n(({row:o,$index:f})=>[g("span",null,p(o.id),1),f===0?(s(),H("span",z,p(a(t)("common.currentVersion")),1)):u("",!0)]),_:1},8,["label"]),c(v,{label:a(t)("common.user")},{default:n(({row:o})=>[g("span",null,p(o.userName),1)]),_:1},8,["label"]),c(v,{label:a(t)("common.date")},{default:n(({row:o})=>[g("span",null,p(a(F)(o.lastModified)),1)]),_:1},8,["label"]),c(v,{align:"right",width:"80px"},{default:n(({row:o})=>[o.hasVideo?(s(),y(x,{key:0,icon:"icon-ve-video",tip:a(t)("common.playVideo"),permission:{feature:"site",action:"log"},onClick:f=>_(o.id)},null,8,["tip","onClick"])):u("",!0)]),_:1})]),_:1},8,["data"])):u("",!0)]),c(E,{onReady:l[0]||(l[0]=o=>r.value=o)})],64)}}});export{Oo as default};
