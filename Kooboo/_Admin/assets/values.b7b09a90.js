var u=(d,a,i)=>new Promise((o,s)=>{var p=t=>{try{r(i.next(t))}catch(m){s(m)}},n=t=>{try{r(i.throw(t))}catch(m){s(m)}},r=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,n);r((i=i.apply(d,a)).next())});import{_ as h}from"./k-table.f75c31cc.js";import{B as b}from"./breadcrumb.79da4f07.js";import{d as w,g as y,c as C,o as c,a as f,f as g,b as _,u as l,w as S,F as v,x as k,b6 as B,j as N}from"./url.8f5ec20c.js";import{g as x}from"./i18n.2d8b30eb.js";import{V as E}from"./dev-mode.e5eea554.js";import{b as F}from"./confirm.617d359f.js";import{E as V}from"./index.bc06171b.js";import"./sortable.esm.a99254e8.js";import"./icon-button.e30c79ea.js";import"./windi.bf752d69.js";import"./index.96970839.js";import"./index.a595fe6d.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./main.d8c6ef59.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.dd6016f2.js";import"./index.14993118.js";import"./index.ab4ed870.js";import"./index.bb5499e2.js";import"./event.776e7e11.js";import"./error.7e8331f1.js";import"./index.593106e3.js";import"./scroll.54c27fbd.js";import"./isEqual.c3e9e9f4.js";import"./_baseIsEqual.2f38f7c3.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.b68af8a1.js";import"./validator.1bcd6e6a.js";import"./index.4c9af567.js";import"./index.0a83bb10.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./guid.c1a40312.js";import"./index.8143a7f0.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./vuedraggable.umd.8a5464a3.js";import"./cloneDeep.b77ba92c.js";import"./_baseClone.29a8cd97.js";import"./config.589cc0cd.js";import"./dark.7c26a0d3.js";import"./page.c26fc024.js";import"./validate.348f94d6.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./index.a141884f.js";import"./index.80a4dc1a.js";import"./index.bf8ed8c6.js";import"./aria.75ec5909.js";import"./index.35ae15db.js";import"./dropdown.d7a15792.js";import"./refs.d2253dd4.js";import"./use-copy-text.67d6617b.js";import"./index.68d24a68.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.ee41ca28.js";import"./index.ed88cf90.js";import"./index.745dc8e0.js";import"./index.a4ff385c.js";import"./index.b3d1cf25.js";import"./index.3be79fd5.js";import"./index.5f2a659f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./alert.8fe5500a.js";import"./index.b4ac73b5.js";import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.a31db113.js";/* empty css                                                          */import"./file.52d8e05a.js";import"./use-date.28e9a8a3.js";import"./dayjs.min.35b12e7a.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.1cd07d1f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.7c6ede25.js";import"./image-editor.404a4df5.js";import"./main.esm.f3ac04a5.js";import"./index.a330b59f.js";import"./logo-transparent.1566007e.js";const z={class:"p-24 flex items-center"},D={class:"p-24 pt-0"},wo=w({setup(d){const{t:a}=x(),i=E(),o=y({list:[],pageNr:1,pageSize:30,totalCount:0,totalPages:0}),s=C(()=>{let r=new Set;return o.value.list.forEach(t=>{var m;(m=Object.keys(t.values))==null||m.forEach(e=>r.add(e))}),Array.from(r)}),p=r=>u(this,null,function*(){o.value=yield i.getFormValues(k("id"),r),o.value.list||(o.value.list=[]),o.value.list.sort((t,m)=>t.lastModified>m.lastModified?-1:1)}),n=r=>u(this,null,function*(){yield F(r.length),i.deleteFormValues(r.map(t=>t.id)),p(o.value.pageNr)});return p(o.value.pageNr),(r,t)=>{const m=V;return c(),f(v,null,[g("div",z,[_(b,{"crumb-path":[{name:l(a)("common.forms"),route:{name:"forms"}},{name:l(a)("common.data")}]},null,8,["crumb-path"])]),g("div",D,[_(l(h),{data:o.value.list,"show-check":"","table-layout":"auto",pagination:{pageSize:o.value.pageSize,pageCount:o.value.totalPages,currentPage:o.value.pageNr},onChange:p,onDelete:n},{default:S(()=>[(c(!0),f(v,null,B(l(s),e=>(c(),N(m,{key:e,label:e,prop:`values.${e}`},null,8,["label","prop"]))),128))]),_:1},8,["data","pagination"])])],64)}}});export{wo as default};
