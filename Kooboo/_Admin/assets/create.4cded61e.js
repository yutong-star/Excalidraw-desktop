var N=Object.defineProperty;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var w=(a,r,i)=>r in a?N(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,h=(a,r)=>{for(var i in r||(r={}))S.call(r,i)&&w(a,i,r[i]);if(k)for(var i of k(r))C.call(r,i)&&w(a,i,r[i]);return a};var b=(a,r,i)=>new Promise((f,g)=>{var s=p=>{try{c(i.next(p))}catch(t){g(t)}},u=p=>{try{c(i.throw(p))}catch(t){g(t)}},c=p=>p.done?f(p.value):Promise.resolve(p.value).then(s,u);c((i=i.apply(a,r)).next())});import{_ as U}from"./index.026f772c.js";import{d as $,cd as A,x as M,g as _,h as P,i as T,o as R,a as z,b as n,u as m,f as I,w as O,F as G}from"./url.8f5ec20c.js";import{B as K}from"./breadcrumb.79da4f07.js";import{g as Q}from"./i18n.2d8b30eb.js";import{c as j}from"./product.2c2b440b.js";import{u as q,g as H}from"./commerce.0424f5f4.js";import{u as J}from"./replace-all.dd6016f2.js";import{_ as L,V as W,a as X}from"./option-group-editor.18794797.js";import{_ as Y}from"./key-value-editor.b0db8bd4.js";import{e as Z}from"./guid.c1a40312.js";import{u as tt,c as ot}from"./product-variant.08b1c2e8.js";import{_ as rt}from"./index.09193255.js";import{z as it}from"./main.d8c6ef59.js";import{u as mt}from"./useFields.e93629df.js";import{_ as et}from"./plugin-vue_export-helper.21dcd24c.js";import{E as at,a as pt}from"./index.a141884f.js";import"./index.96970839.js";import"./windi.bf752d69.js";import"./index.a595fe6d.js";/* empty css                                                               */import"./plugin-vue_export-helper.41ffa612.js";import"./index.593106e3.js";import"./error.7e8331f1.js";import"./image-cover.a0855dc0.js";import"./media-dialog.c90392a5.js";import"./index.ed88cf90.js";import"./media.152ad1ab.js";import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.a31db113.js";import"./index.e56d78c4.js";/* empty css                                                          */import"./index.0a83bb10.js";import"./event.776e7e11.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./search-provider.e244950c.js";import"./toNumber.6efebd6a.js";import"./last.e7aa49db.js";import"./_baseIndexOf.4d7985be.js";import"./style.ad574a57.js";import"./_baseIsEqual.2f38f7c3.js";import"./_baseUniq.2c27addc.js";import"./use-operation-dialog.fbfa9343.js";import"./file.52d8e05a.js";import"./validate.348f94d6.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./index.bb5499e2.js";import"./index.a4ff385c.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./index.0535d5fe.js";import"./refs.d2253dd4.js";import"./folder.8308bb9d.js";import"./use-date.28e9a8a3.js";import"./dayjs.min.35b12e7a.js";import"./relations-tag.b9c377a2.js";import"./icon-button.e30c79ea.js";import"./index.e87fdc52.js";import"./page.c26fc024.js";import"./index.80a4dc1a.js";import"./aria.75ec5909.js";import"./validator.1bcd6e6a.js";import"./index.bc06171b.js";import"./debounce.730e1961.js";import"./index.4c9af567.js";import"./index.b68af8a1.js";import"./index.ab4ed870.js";import"./isEqual.c3e9e9f4.js";import"./use-copy-text.67d6617b.js";import"./index.e483320a.js";import"./browser.8b21f9f4.js";import"./throttle.3f3ee457.js";import"./index.14993118.js";import"./search-input.770da843.js";/* empty css                                                                 *//* empty css                                                          */import"./layout.4bc43a3b.js";import"./index.47676836.js";import"./position.edbf0f94.js";import"./utils.cd1dfe22.js";import"./confirm.617d359f.js";import"./logo-transparent.1566007e.js";import"./index.8bd72af8.js";import"./use-file-upload.1cd07d1f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./index.fcc918d5.js";import"./index.3f972c9e.js";import"./file.8273cb50.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.7c6ede25.js";import"./editable-tags.b319c614.js";import"./index.c1ec4d8d.js";import"./dropdown.d7a15792.js";import"./_baseClone.29a8cd97.js";import"./useTag.5e018089.js";import"./index.745dc8e0.js";import"./index.d18ad5f5.js";import"./dark.7c26a0d3.js";import"./dev-mode.e5eea554.js";import"./index.8143a7f0.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./preload-helper.13a99eb0.js";import"./vuedraggable.umd.8a5464a3.js";import"./cloneDeep.b77ba92c.js";import"./config.589cc0cd.js";import"./index.35ae15db.js";import"./index.68d24a68.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.ee41ca28.js";import"./index.b3d1cf25.js";import"./index.3be79fd5.js";import"./index.5f2a659f.js";import"./alert.8fe5500a.js";import"./index.b4ac73b5.js";import"./image-editor.404a4df5.js";import"./main.esm.f3ac04a5.js";import"./index.a330b59f.js";import"./pick.6ea5cf8f.js";import"./_basePickBy.da69e6c4.js";import"./index.4eb69dec.js";import"./_createCompounder.2027fb34.js";import"./color-picker.2e8324a7.js";import"./index.9444b94a.js";import"./string.75b81683.js";import"./useLabels.937424e3.js";import"./index.30547a4f.js";import"./k-table.f75c31cc.js";import"./sortable.esm.a99254e8.js";import"./content-effect.c13b1b4b.js";import"./textContent.02a6a49f.js";import"./omitBy.6f652f40.js";import"./pickBy.23923c70.js";import"./isEmpty.11c614d1.js";import"./index.5c1ee36f.js";import"./index.e3f90979.js";import"./index.21d7e739.js";import"./custom-field.9a9ddef9.js";import"./index.50c16ae5.js";const nt={class:"px-24 pt-0 pb-84px space-y-12"},st={class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},lt={class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},ut=$({setup(a){const{t:r}=Q(),i=A(),f=M("typeId");q().loadCategories();const s=_(),u=_([]),c=_(),p=_();let t=tt();t.addVariant(ot([],""));const{fields:V,customFields:B}=mt(),l=_({categories:[],attributes:[],title:"",seoName:"",description:"",featuredImage:"",images:[],active:!0,variants:[],tags:[],customData:{},variantOptions:[]});P(()=>b(this,null,function*(){if(f&&f!=Z&&(s.value=yield H(f)),s.value){for(const o of s.value.attributes)u.value.push({key:o.name,value:"",options:o.type=="Selection"?o.options:[]});for(const o of s.value.options)t.options.value.push(o.name);for(const o of s.value.options)for(const e of o.options)t.addOptionItem(o.name,e,"")}}));function x(){i.goBackOrTo(J({name:"product management"}))}function D(){return b(this,null,function*(){var e,v;try{yield c.value.form.validate(),yield(v=(e=p.value)==null?void 0:e.form)==null?void 0:v.validate()}catch(d){throw it(),d}const o=h({},l.value);o.attributes=u.value.map(d=>({key:d.key,value:d.value})),o.variants=t.list.value,yield j(o),x()})}return T(()=>{var o;return(o=l.value)==null?void 0:o.featuredImage},o=>{if(!!o)for(const e of t.list.value)e.image||(e.image=o)}),(o,e)=>{const v=at,d=pt,F=U;return R(),z(G,null,[n(K,{class:"p-24","crumb-path":[{name:m(r)("common.productManagement"),route:{name:"product management"}},{name:m(r)("common.create")}]},null,8,["crumb-path"]),I("div",nt,[n(L,{ref_key:"basicInfo",ref:c,model:l.value,fields:m(V)},null,8,["model","fields"]),n(rt,{ref_key:"customData",ref:p,data:l.value.customData,"custom-fields":m(B)},null,8,["data","custom-fields"]),I("div",st,[n(d,{"label-position":"top"},{default:O(()=>[n(v,{label:m(r)("common.attributes")},{default:O(()=>[n(Y,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=y=>u.value=y),"key-input-attributes":{placeholder:m(r)("common.name")},lass:"max-w-600px space-y-8 w-full"},null,8,["modelValue","key-input-attributes"])]),_:1},8,["label"]),n(v,{label:m(r)("commerce.variantOptions")},{default:O(()=>[n(X,{options:m(t).options.value,variants:m(t).list.value,"variant-options":l.value.variantOptions,class:"max-w-600px",onUpdateOptionItem:m(t).updateOptionItem,onUpdateOptionName:m(t).updateOptionName,onAddOptionItem:e[1]||(e[1]=(y,E)=>m(t).addOptionItem(y,E,l.value.featuredImage)),onDeleteOptionItem:m(t).deleteOptionItem,onDeleteOption:m(t).deleteOption,onAddOption:m(t).addOption},null,8,["options","variants","variant-options","onUpdateOptionItem","onUpdateOptionName","onDeleteOptionItem","onDeleteOption","onAddOption"])]),_:1},8,["label"])]),_:1})]),I("div",lt,[n(W,{variants:m(t).list.value,options:m(t).options.value,"default-image":l.value.featuredImage},null,8,["variants","options","default-image"])])]),n(F,{permission:{feature:"productManagement",action:"edit"},onCancel:x,onSave:D})],64)}}});var Yr=et(ut,[["__scopeId","data-v-5f921f8c"]]);export{Yr as default};
