var re=Object.defineProperty,de=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var U=(l,t,o)=>t in l?re(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,S=(l,t)=>{for(var o in t||(t={}))be.call(t,o)&&U(l,o,t[o]);if(T)for(var o of T(t))ve.call(t,o)&&U(l,o,t[o]);return l},I=(l,t)=>de(l,ce(t));var M=(l,t,o)=>new Promise((r,d)=>{var m=s=>{try{f(o.next(s))}catch(i){d(i)}},v=s=>{try{f(o.throw(s))}catch(i){d(i)}},f=s=>s.done?r(s.value):Promise.resolve(s.value).then(m,v);f((o=o.apply(l,t)).next())});import{i as O,s as R,B as L}from"./i18n.2d8b30eb.js";import{B as $,c as g,p as j,Y as P,g as F,b$ as me,K as q,i as H,A as W,d as w,bh as Y,o as y,j as J,w as Q,f as K,e as B,u as e,a as C,G,n as h,r as N,F as fe,aH as X,t as Z,k as V,l as _,m as pe,b2 as ke,L as he}from"./url.8f5ec20c.js";import{l as ee,C as ge,D as ye,q as z,u as D,_ as A,w as Ce,r as le}from"./windi.bf752d69.js";import{a as ae}from"./index.a595fe6d.js";import{U as E}from"./event.776e7e11.js";import{d as oe}from"./error.7e8331f1.js";const xe={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:ee,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},ne={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ee,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},x=()=>{const l=$(ge,{}),t=$(ye,{}),o=$("CheckboxGroup",{}),r=g(()=>o&&(o==null?void 0:o.name)==="ElCheckboxGroup"),d=g(()=>t.size);return{isGroup:r,checkboxGroup:o,elForm:l,elFormItemSize:d,elFormItem:t}},Se=(l,{elFormItem:t})=>{const{inputId:o,isLabeledByFormItem:r}=ae(l,{formItemContext:t});return{isLabeledByFormItem:r,groupId:o}},Ie=l=>{const t=F(!1),{emit:o}=W(),{isGroup:r,checkboxGroup:d,elFormItem:m}=x(),v=F(!1);return{model:g({get(){var s,i;return r.value?(s=d.modelValue)==null?void 0:s.value:(i=l.modelValue)!=null?i:t.value},set(s){var i;r.value&&Array.isArray(s)?(v.value=d.max!==void 0&&s.length>d.max.value,v.value===!1&&((i=d==null?void 0:d.changeEvent)==null||i.call(d,s))):(o(E,s),t.value=s)}}),isGroup:r,isLimitExceeded:v,elFormItem:m}},Le=(l,t,{model:o})=>{const{isGroup:r,checkboxGroup:d}=x(),m=F(!1),v=z(d==null?void 0:d.checkboxGroupSize,{prop:!0}),f=g(()=>{const n=o.value;return me(n)==="[object Boolean]"?n:Array.isArray(n)?n.includes(l.label):n!=null?n===l.trueLabel:!!n}),s=z(g(()=>{var n;return r.value?(n=d==null?void 0:d.checkboxGroupSize)==null?void 0:n.value:void 0})),i=g(()=>!!(t.default||l.label));return{isChecked:f,focus:m,size:v,checkboxSize:s,hasOwnLabel:i}},Be=(l,{model:t,isChecked:o})=>{const{elForm:r,isGroup:d,checkboxGroup:m}=x(),v=g(()=>{var s,i;const n=(s=m.max)==null?void 0:s.value,k=(i=m.min)==null?void 0:i.value;return!!(n||k)&&t.value.length>=n&&!o.value||t.value.length<=k&&o.value});return{isDisabled:g(()=>{var s,i;const n=l.disabled||(r==null?void 0:r.disabled);return(i=d.value?((s=m.disabled)==null?void 0:s.value)||n||v.value:n)!=null?i:!1}),isLimitDisabled:v}},Ge=(l,{model:t})=>{function o(){Array.isArray(t.value)&&!t.value.includes(l.label)?t.value.push(l.label):t.value=l.trueLabel||!0}l.checked&&o()},Ee=(l,{model:t,isLimitExceeded:o,hasOwnLabel:r,isDisabled:d,isLabeledByFormItem:m})=>{const{elFormItem:v,checkboxGroup:f}=x(),{emit:s}=W();function i(a){var c,p;return a===l.trueLabel||a===!0?(c=l.trueLabel)!=null?c:!0:(p=l.falseLabel)!=null?p:!1}function n(a,c){s("change",i(a),c)}function k(a){if(o.value)return;const c=a.target;s("change",i(c.checked),a)}function b(a){return M(this,null,function*(){o.value||!r.value&&!d.value&&m.value&&(t.value=i([!1,l.falseLabel].includes(t.value)),yield q(),n(t.value,a))})}const u=g(()=>{var a;return((a=f.validateEvent)==null?void 0:a.value)||l.validateEvent});return H(()=>l.modelValue,()=>{var a;u.value&&((a=v==null?void 0:v.validate)==null||a.call(v,"change").catch(c=>oe()))}),{handleChange:k,onClickRoot:b}},te={[E]:l=>j(l)||O(l)||R(l),change:l=>j(l)||O(l)||R(l)},$e={[E]:l=>P(l),change:l=>P(l)},se=(l,t)=>{const{model:o,isGroup:r,isLimitExceeded:d,elFormItem:m}=Ie(l),{focus:v,size:f,isChecked:s,checkboxSize:i,hasOwnLabel:n}=Le(l,t,{model:o}),{isDisabled:k}=Be(l,{model:o,isChecked:s}),{inputId:b,isLabeledByFormItem:u}=ae(l,{formItemContext:m,disableIdGeneration:n,disableIdManagement:r}),{handleChange:a,onClickRoot:c}=Ee(l,{model:o,isLimitExceeded:d,hasOwnLabel:n,isDisabled:k,isLabeledByFormItem:u});return Ge(l,{model:o}),{elFormItem:m,inputId:b,isLabeledByFormItem:u,isChecked:s,isDisabled:k,isGroup:r,checkboxSize:i,hasOwnLabel:n,model:o,handleChange:a,onClickRoot:c,focus:v,size:f}},Fe=["tabindex","role","aria-checked"],Ve=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ze=["id","aria-hidden","disabled","value","name","tabindex"],we={name:"ElCheckbox"},Ne=w(I(S({},we),{props:ne,emits:te,setup(l){const t=l,o=Y(),{inputId:r,isLabeledByFormItem:d,isChecked:m,isDisabled:v,checkboxSize:f,hasOwnLabel:s,model:i,handleChange:n,onClickRoot:k,focus:b}=se(t,o),u=D("checkbox");return(a,c)=>(y(),J(_(!e(s)&&e(d)?"span":"label"),{class:h([e(u).b(),e(u).m(e(f)),e(u).is("disabled",e(v)),e(u).is("bordered",a.border),e(u).is("checked",e(m))]),"aria-controls":a.indeterminate?a.controls:null,onClick:e(k)},{default:Q(()=>[K("span",{class:h([e(u).e("input"),e(u).is("disabled",e(v)),e(u).is("checked",e(m)),e(u).is("indeterminate",a.indeterminate),e(u).is("focus",e(b))]),tabindex:a.indeterminate?0:void 0,role:a.indeterminate?"checkbox":void 0,"aria-checked":a.indeterminate?"mixed":void 0},[a.trueLabel||a.falseLabel?B((y(),C("input",{key:0,id:e(r),"onUpdate:modelValue":c[0]||(c[0]=p=>G(i)?i.value=p:null),class:h(e(u).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",name:a.name,tabindex:a.tabindex,disabled:e(v),"true-value":a.trueLabel,"false-value":a.falseLabel,onChange:c[1]||(c[1]=(...p)=>e(n)&&e(n)(...p)),onFocus:c[2]||(c[2]=p=>b.value=!0),onBlur:c[3]||(c[3]=p=>b.value=!1)},null,42,Ve)),[[L,e(i)]]):B((y(),C("input",{key:1,id:e(r),"onUpdate:modelValue":c[4]||(c[4]=p=>G(i)?i.value=p:null),class:h(e(u).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",disabled:e(v),value:a.label,name:a.name,tabindex:a.tabindex,onChange:c[5]||(c[5]=(...p)=>e(n)&&e(n)(...p)),onFocus:c[6]||(c[6]=p=>b.value=!0),onBlur:c[7]||(c[7]=p=>b.value=!1)},null,42,ze)),[[L,e(i)]]),K("span",{class:h(e(u).e("inner"))},null,2)],10,Fe),e(s)?(y(),C("span",{key:0,class:h(e(u).e("label"))},[N(a.$slots,"default"),a.$slots.default?V("v-if",!0):(y(),C(fe,{key:0},[X(Z(a.label),1)],64))],2)):V("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}}));var De=A(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ae=["name","tabindex","disabled","true-value","false-value"],Te=["name","tabindex","disabled","value"],Ue={name:"ElCheckboxButton"},Me=w(I(S({},Ue),{props:ne,emits:te,setup(l){const t=l,o=Y(),{focus:r,isChecked:d,isDisabled:m,size:v,model:f,handleChange:s}=se(t,o),{checkboxGroup:i}=x(),n=D("checkbox"),k=g(()=>{var b,u,a,c;const p=(u=(b=i==null?void 0:i.fill)==null?void 0:b.value)!=null?u:"";return{backgroundColor:p,borderColor:p,color:(c=(a=i==null?void 0:i.textColor)==null?void 0:a.value)!=null?c:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}});return(b,u)=>(y(),C("label",{class:h([e(n).b("button"),e(n).bm("button",e(v)),e(n).is("disabled",e(m)),e(n).is("checked",e(d)),e(n).is("focus",e(r))])},[b.trueLabel||b.falseLabel?B((y(),C("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=a=>G(f)?f.value=a:null),class:h(e(n).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:e(m),"true-value":b.trueLabel,"false-value":b.falseLabel,onChange:u[1]||(u[1]=(...a)=>e(s)&&e(s)(...a)),onFocus:u[2]||(u[2]=a=>r.value=!0),onBlur:u[3]||(u[3]=a=>r.value=!1)},null,42,Ae)),[[L,e(f)]]):B((y(),C("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=a=>G(f)?f.value=a:null),class:h(e(n).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:e(m),value:b.label,onChange:u[5]||(u[5]=(...a)=>e(s)&&e(s)(...a)),onFocus:u[6]||(u[6]=a=>r.value=!0),onBlur:u[7]||(u[7]=a=>r.value=!1)},null,42,Te)),[[L,e(f)]]),b.$slots.default||b.label?(y(),C("span",{key:2,class:h(e(n).be("button","inner")),style:pe(e(d)?e(k):void 0)},[N(b.$slots,"default",{},()=>[X(Z(b.label),1)])],6)):V("v-if",!0)],2))}}));var ue=A(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Oe={name:"ElCheckboxGroup"},Re=w(I(S({},Oe),{props:xe,emits:$e,setup(l,{emit:t}){const o=l,{elFormItem:r}=x(),{groupId:d,isLabeledByFormItem:m}=Se(o,{elFormItem:r}),v=z(),f=D("checkbox"),s=n=>{t(E,n),q(()=>{t("change",n)})},i=g({get(){return o.modelValue},set(n){s(n)}});return ke("CheckboxGroup",I(S({name:"ElCheckboxGroup",modelValue:i},he(o)),{checkboxGroupSize:v,changeEvent:s})),H(()=>o.modelValue,()=>{var n;o.validateEvent&&((n=r.validate)==null||n.call(r,"change").catch(k=>oe()))}),(n,k)=>(y(),J(_(n.tag),{id:e(d),class:h(e(f).b("group")),role:"group","aria-label":e(m)?void 0:n.label||"checkbox-group","aria-labelledby":e(m)?e(r).labelId:void 0},{default:Q(()=>[N(n.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"]))}}));var ie=A(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Je=Ce(De,{CheckboxButton:ue,CheckboxGroup:ie});le(ue);const Qe=le(ie);export{Je as E,Qe as a};
