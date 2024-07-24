var ce=Object.defineProperty,de=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var G=(i,s,e)=>s in i?ce(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,J=(i,s)=>{for(var e in s||(s={}))re.call(s,e)&&G(i,e,s[e]);if(Q)for(var e of Q(s))pe.call(s,e)&&G(i,e,s[e]);return i},W=(i,s)=>de(i,me(s));var S=(i,s,e)=>new Promise((u,c)=>{var a=_=>{try{f(e.next(_))}catch(g){c(g)}},h=_=>{try{f(e.throw(_))}catch(g){c(g)}},f=_=>_.done?u(_.value):Promise.resolve(_.value).then(a,h);f((e=e.apply(i,s)).next())});import{_ as ve}from"./icon-button.e30c79ea.js";import{_ as _e,g as fe,a as ye}from"./create-dialog.bf9a87d1.js";import{g as R,o as ge,w as xe}from"./i18n.2d8b30eb.js";import{S as be}from"./search-input.770da843.js";import{E as F}from"./windi.bf752d69.js";import{E as Y}from"./index.96970839.js";import{E as Z,a as K}from"./index.bc06171b.js";import{E as ee}from"./index.593106e3.js";import{E as O}from"./index.a4ff385c.js";import{d as U,g as V,h as M,b7 as te,o as r,a as E,b as n,w as l,f as v,e as oe,j as C,aH as I,t as y,u as d,k as $,F as P,i as he,b6 as X}from"./url.8f5ec20c.js";import{E as ae}from"./index.ec785feb.js";import{b as le}from"./product-variant.08b1c2e8.js";import{a as Ce}from"./cart.9ff8682a.js";import{_ as Ve}from"./editable-tags.b319c614.js";import{_ as B}from"./property-item.c5caa906.js";import{b as ke,f as we}from"./product.2c2b440b.js";import{u as ne}from"./useFields.e93629df.js";import{_ as z}from"./index.4eb69dec.js";import{g as $e}from"./discount.56117d93.js";import{_ as T}from"./currency-amount.301371db.js";import{E as Ie}from"./index.bb5499e2.js";import{c as Ee}from"./index.ab4ed870.js";const Ne={class:"flex items-center pb-12 space-x-16"},qe={class:"flex items-center"},De=v("div",{class:"flex-1"},null,-1),Se=U({props:{modelValue:{type:Boolean}},emits:["update:modelValue","selected"],setup(i,{emit:s}){const{t:e}=R(),u=V(!0),c=V(!1),a=V(),h=V({pageIndex:1,pageSize:30,keyword:""});function f(){return S(this,null,function*(){a.value=yield fe(h.value)})}M(()=>{f()});function _(g){s("selected",g),u.value=!1}return(g,b)=>{const N=F,x=Y,t=be,m=Z,k=K,q=ee,D=O,A=te("hasPermission");return r(),E(P,null,[n(D,{"model-value":u.value,width:"800px",title:d(e)("commerce.selectCustomer"),"close-on-click-modal":!1,onClosed:b[2]||(b[2]=p=>s("update:modelValue",!1))},{default:l(()=>[v("div",Ne,[oe((r(),C(x,{round:"",onClick:b[0]||(b[0]=p=>c.value=!0)},{default:l(()=>[v("div",qe,[n(N,{class:"mr-16 iconfont icon-a-addto"}),I(" "+y(d(e)("common.create")),1)])]),_:1})),[[A,{feature:"carts",action:"edit"}]]),De,n(t,{modelValue:h.value.keyword,"onUpdate:modelValue":b[1]||(b[1]=p=>h.value.keyword=p),class:"w-248px",onKeydown:ge(xe(f,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),n(q,{"max-height":"400px"},{default:l(()=>[a.value?(r(),C(k,{key:0,data:a.value.list,class:"el-table--gray mb-24",pagination:{currentPage:a.value.pageIndex,totalCount:a.value.count,pageSize:a.value.pageSize},onRowClick:_},{default:l(()=>[n(m,{label:d(e)("common.email")},{default:l(({row:p})=>[I(y(p.email),1)]),_:1},8,["label"]),n(m,{label:d(e)("common.phone")},{default:l(({row:p})=>[I(y(p.phone),1)]),_:1},8,["label"]),n(m,{label:d(e)("common.firstName")},{default:l(({row:p})=>[I(y(p.firstName),1)]),_:1},8,["label"]),n(m,{label:d(e)("common.lastName")},{default:l(({row:p})=>[I(y(p.lastName),1)]),_:1},8,["label"])]),_:1},8,["data","pagination"])):$("",!0)]),_:1})]),_:1},8,["model-value","title"]),c.value?(r(),C(_e,{key:0,modelValue:c.value,"onUpdate:modelValue":b[3]||(b[3]=p=>c.value=p),onReload:f},null,8,["modelValue"])):$("",!0)],64)}}}),Pe={key:0,class:"border border-gray p-12 rounded-normal w-400px dark:bg-444 dark:text-gray"},Ae={class:"flex items-center space-x-8"},Be=v("div",{class:"flex-1"},null,-1),Te={class:"p-4"},Re={class:"text-l"},Ue={class:"text-s"},Oe={class:"text-s"},bt=U({props:{modelValue:null,readonly:{type:Boolean}},emits:["update:model-value"],setup(i,{emit:s}){const e=i,{t:u}=R(),c=V(!1),a=V();M(()=>S(this,null,function*(){e.modelValue&&(a.value=yield ye(e.modelValue))}));function h(){a.value=void 0,s("update:model-value",void 0)}function f(_){a.value=_,s("update:model-value",_.id)}return(_,g)=>{const b=F,N=ae,x=ve;return r(),E(P,null,[a.value?(r(),E("div",Pe,[v("div",Ae,[Be,i.readonly?$("",!0):(r(),C(N,{key:0,placement:"top",content:d(u)("common.delete")},{default:l(()=>[n(b,{class:"iconfont icon-delete text-orange text-l",onClick:h})]),_:1},8,["content"]))]),v("div",Te,[v("div",Re,y(a.value.firstName)+" "+y(a.value.lastName),1),v("div",Ue,y(a.value.email),1),v("div",Oe,y(a.value.phone),1)])])):i.readonly?$("",!0):(r(),C(x,{key:1,circle:"",class:"text-blue",icon:"icon-a-addto",tip:d(u)("common.add"),onClick:g[0]||(g[0]=t=>c.value=!0)},null,8,["tip"])),c.value?(r(),C(Se,{key:2,modelValue:c.value,"onUpdate:modelValue":g[1]||(g[1]=t=>c.value=t),onSelected:f},null,8,["modelValue"])):$("",!0)],64)}}}),ze={class:"flex items-center"},Fe={class:"text-black dark:text-[#cfd3dc]"},Ke=U({props:{excludes:null,modelValue:{type:Boolean}},emits:["update:modelValue","selected"],setup(i,{emit:s}){const{t:e}=R(),u=V(!0),c=V(!1),{getColumns:a}=ne(),h=V([]),f=V([]),_=a([{name:"featuredImage"},{name:"title"},{name:"variantsCount"},{name:"inventory"},{name:"active"}]),g=a([{name:"featuredImage",prop:"image"},{name:"selectedOptions",displayName:e("common.options")},{name:"inventory"},{name:"active"}]);function b(){return S(this,null,function*(){var t=yield ke();h.value=t.map(m=>W(J({},m),{selected:!1}))})}M(()=>{b()});function N(t){return S(this,null,function*(){f.value=yield we(t.id),f.value.length==1?(s("selected",f.value[0]),u.value=!1):c.value=!0})}function x(t){s("selected",t),c.value=!1,u.value=!1}return(t,m)=>{const k=K,q=ee,D=O,A=O;return r(),E(P,null,[n(D,{"model-value":u.value,width:"800px",title:d(e)("common.selectProduct"),"close-on-click-modal":!1,onClosed:m[0]||(m[0]=p=>s("update:modelValue",!1))},{default:l(()=>[n(q,{"max-height":"400px"},{default:l(()=>[n(k,{data:h.value,class:"el-table--gray",onRowClick:N},{default:l(()=>[n(z,{columns:d(_)},null,8,["columns"])]),_:1},8,["data"])]),_:1})]),_:1},8,["model-value","title"]),n(A,{modelValue:c.value,"onUpdate:modelValue":m[1]||(m[1]=p=>c.value=p),width:"600px",title:d(e)("commerce.selectVariant")},{default:l(()=>[n(q,{"max-height":"400px"},{default:l(()=>[n(k,{data:f.value,class:"el-table--gray",onRowClick:x},{default:l(()=>[n(z,{columns:d(g)},{selectedOptions:l(({row:p})=>[v("div",ze,[v("span",Fe,y(d(le)(p.selectedOptions,!0)),1)])]),_:1},8,["columns"])]),_:1},8,["data"])]),_:1})]),_:1},8,["modelValue","title"])],64)}}}),Me={class:"space-y-12"},je={class:"flex items-center"},He={class:"text-s"},Le={key:0},Qe={class:"inline-flex flex-wrap gap-4"},Ge={class:"flex space-x-12 justify-end"},Je={class:"text-s space-y-4"},We={class:"flex gap-4"},ht=U({props:{customerId:null,discountCodes:null,lines:null,readonly:{type:Boolean}},emits:["update:lines"],setup(i,{emit:s}){const e=i,{t:u}=R(),c=V(!1),a=V(),h=V(),{getColumns:f}=ne(),_=f([{name:"featuredImage",prop:"image",attrs:{width:80,align:"center"}},{name:"title"},{name:"price",displayName:u("common.price"),attrs:{align:"center"}},{name:"inventory",attrs:{width:100,align:"center"}},{name:"quantity",displayName:u("common.quantity"),attrs:{align:"center"}},{name:"discounts",displayName:u("common.discounts"),attrs:{align:"center"}}]);e.readonly||$e().then(x=>h.value=x);function g(x){const t=e.lines.filter(m=>m.variantId!=x);s("update:lines",t)}function b(){const x=a.value.lines.map(t=>({quantity:t.quantity,variantId:t.variantId}));s("update:lines",x)}function N(x){const t=a.value.lines.map(k=>({quantity:k.quantity,variantId:k.variantId}));let m=t.find(k=>k.variantId==x.id);m?m.quantity+=1:(m={quantity:1,variantId:x.id},t.push(m)),s("update:lines",t)}return he([()=>e.customerId,()=>e.discountCodes,()=>e.lines],()=>S(this,null,function*(){a.value=yield Ce({customerId:e.customerId,discountCodes:e.discountCodes,lines:e.lines})}),{deep:!0,immediate:!0}),(x,t)=>{var j,H,L;const m=F,k=Y,q=Ie,D=Ee,A=ae,p=Z,se=K,ie=te("hasPermission");return r(),E(P,null,[v("div",Me,[i.readonly?$("",!0):oe((r(),C(k,{key:0,round:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:l(()=>[v("div",je,[n(m,{class:"mr-16 iconfont icon-a-addto"}),I(" "+y(d(u)("common.addProduct")),1)])]),_:1})),[[ie,{feature:"carts",action:"edit"}]]),n(se,{data:(H=(j=a.value)==null?void 0:j.lines)!=null?H:[],class:"el-table--gray"},{default:l(()=>[n(z,{columns:d(_)},{title:l(({row:o})=>[v("div",null,[v("div",null,y(o.title),1),v("div",He,y(d(le)(o.options)),1)])]),price:l(({row:o})=>[n(T,{original:o.originalPrice,amount:o.price},null,8,["original","amount"])]),quantity:l(({row:o})=>[i.readonly?(r(),E("div",Le,y(o.quantity),1)):(r(),C(q,{key:1,modelValue:o.quantity,"onUpdate:modelValue":w=>o.quantity=w,modelModifiers:{number:!0},class:"w-80px text-center",onChange:t[1]||(t[1]=w=>b())},null,8,["modelValue","onUpdate:modelValue"]))]),discounts:l(({row:o})=>[v("div",Qe,[(r(!0),E(P,null,X(o.discountAllocations,(w,ue)=>(r(),C(D,{key:ue},{default:l(()=>[I(y(w.title),1)]),_:2},1024))),128))])]),_:1},8,["columns"]),i.readonly?$("",!0):(r(),C(p,{key:0,align:"right",width:"80"},{default:l(({row:o})=>[v("div",Ge,[n(A,{placement:"top",content:d(u)("common.delete")},{default:l(()=>[n(m,{class:"iconfont icon-delete hover:text-orange text-l",onClick:w=>g(o.variantId)},null,8,["onClick"])]),_:2},1032,["content"])])]),_:1}))]),_:1},8,["data"]),n(Ve,{"model-value":i.discountCodes,"add-label":d(u)("commerce.discountCodes"),readonly:i.readonly,options:h.value,onAddItem:t[2]||(t[2]=o=>i.discountCodes.push(o)),onRemoveItem:t[3]||(t[3]=o=>i.discountCodes.splice(o,1)),onChangeItem:t[4]||(t[4]=(o,w)=>i.discountCodes.splice(o,1,w))},null,8,["model-value","add-label","readonly","options"]),v("div",Je,[(L=a.value)!=null&&L.discountAllocations.length?(r(),C(B,{key:0,name:d(u)("common.discounts")},{default:l(()=>[v("div",We,[(r(!0),E(P,null,X(a.value.discountAllocations,(o,w)=>(r(),C(D,{key:w},{default:l(()=>[I(y(o.title),1)]),_:2},1024))),128))])]),_:1},8,["name"])):$("",!0),n(B,{name:d(u)("commerce.subtotalAmount")},{default:l(()=>{var o;return[n(T,{amount:(o=a.value)==null?void 0:o.subtotalAmount},null,8,["amount"])]}),_:1},8,["name"]),n(B,{name:d(u)("commerce.shippingAmount")},{default:l(()=>{var o;return[n(T,{amount:(o=a.value)==null?void 0:o.shippingAmount},null,8,["amount"])]}),_:1},8,["name"]),n(B,{class:"text-l",name:d(u)("commerce.totalAmount")},{default:l(()=>{var o;return[n(T,{amount:(o=a.value)==null?void 0:o.totalAmount},null,8,["amount"])]}),_:1},8,["name"])])]),c.value?(r(),C(Ke,{key:0,modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=o=>c.value=o),onSelected:N},null,8,["modelValue"])):$("",!0)],64)}}});export{ht as _,bt as a};
