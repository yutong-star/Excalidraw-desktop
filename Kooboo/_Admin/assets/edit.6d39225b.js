var I=(s,n,v)=>new Promise((t,i)=>{var u=e=>{try{d(v.next(e))}catch(m){i(m)}},_=e=>{try{d(v.throw(e))}catch(m){i(m)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(u,_);d((v=v.apply(s,n)).next())});import{b as ee,p as oe,c as te}from"./index.a330b59f.js";import{d as F,g as E,o as c,j as $,w as a,b as o,f,u as h,a as C,aH as H,t as D,F as A,b6 as N,k as M,x as G,cd as ne,b2 as le,J as ae,cj as se,i as ie,K as de}from"./url.8f5ec20c.js";import{_ as re}from"./index.026f772c.js";import{V as ce}from"./vuedraggable.umd.8a5464a3.js";import{_ as ue}from"./icon-button.e30c79ea.js";import{_ as me}from"./index.8143a7f0.js";import{n as U}from"./guid.c1a40312.js";import{_ as pe}from"./dev-mode.e5eea554.js";import{g as L,o as fe}from"./i18n.2d8b30eb.js";import{_ as P}from"./index.ed88cf90.js";import{U as ve}from"./editor.main.d2800f63.js";import{E as Q}from"./index.a4ff385c.js";import{E as O}from"./windi.bf752d69.js";import{c as _e,E as ge,a as he}from"./index.ab4ed870.js";import{E as j}from"./index.96970839.js";import{E as ye}from"./index.06e5e08d.js";import{y as T,u as we}from"./main.d8c6ef59.js";import{E as xe}from"./index.bb5499e2.js";import{E as Y,a as q,b as W}from"./index.35ae15db.js";import{u as ke}from"./replace-all.dd6016f2.js";import{B as Ce}from"./breadcrumb.79da4f07.js";import{u as Ve}from"./use-save-tip.ee41ca28.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.a595fe6d.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./cloneDeep.b77ba92c.js";import"./_baseClone.29a8cd97.js";import"./_baseIsEqual.2f38f7c3.js";import"./index.593106e3.js";import"./error.7e8331f1.js";import"./config.589cc0cd.js";import"./dark.7c26a0d3.js";import"./page.c26fc024.js";import"./validate.348f94d6.js";import"./index.37979027.js";import"./index.3dc39d21.js";import"./index.832f2769.js";import"./index.b3e4ff8e.js";import"./index.5af167df.js";import"./style.ad574a57.js";import"./toNumber.6efebd6a.js";import"./index.a141884f.js";import"./isEqual.c3e9e9f4.js";import"./index.80a4dc1a.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./aria.75ec5909.js";import"./validator.1bcd6e6a.js";import"./use-copy-text.67d6617b.js";import"./index.68d24a68.js";import"./toggleComment.5b29ca87.js";import"./confirm.617d359f.js";import"./logo-transparent.1566007e.js";import"./index.745dc8e0.js";import"./event.776e7e11.js";import"./index.0a83bb10.js";import"./index.b3d1cf25.js";import"./index.4c9af567.js";import"./index.3be79fd5.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.5f2a659f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./alert.8fe5500a.js";import"./index.b4ac73b5.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.a31db113.js";/* empty css                                                          */import"./file.52d8e05a.js";import"./use-date.28e9a8a3.js";import"./dayjs.min.35b12e7a.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.1cd07d1f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.7c6ede25.js";import"./image-editor.404a4df5.js";import"./main.esm.f3ac04a5.js";import"./preload-helper.13a99eb0.js";import"./refs.d2253dd4.js";import"./debounce.730e1961.js";import"./index.b68af8a1.js";import"./index.50c16ae5.js";import"./dropdown.d7a15792.js";import"./plugin-vue_export-helper.41ffa612.js";const Ee={class:"p-24 h-500px"},$e=F({props:{modelValue:{type:Boolean},code:null},emits:["update:modelValue","update:code"],setup(s,{emit:n}){const v=s,{t}=L(),i=E(!0),u=E(v.code),_=()=>I(this,null,function*(){n("update:code",u.value),i.value=!1});return(d,e)=>{const m=Q;return c(),$(m,{"model-value":i.value,"custom-class":"el-dialog--zero-padding",width:"800px","close-on-click-modal":!1,title:h(t)("common.code"),onClosed:e[2]||(e[2]=y=>n("update:modelValue",!1))},{footer:a(()=>[o(P,{onConfirm:_,onCancel:e[1]||(e[1]=y=>i.value=!1)})]),default:a(()=>[f("div",Ee,[o(pe,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=y=>u.value=y),language:"typescript","k-script":"",uri:h(ve).file(h(U)())},null,8,["modelValue","uri"])])]),_:1},8,["model-value","title"])}}}),be={class:"flex items-center cursor-move"},Se=f("div",{class:"flex-1"},null,-1),Be={key:0,class:"space-y-8"},Ue={class:"flex items-center"},Ie=f("span",{class:"w-64 text-right p-8"},"IF",-1),De={class:"flex-1"},Ae={class:"w-64 text-right p-8 leading-40px"},Ne={class:"flex-1 overflow-auto pb-4"},Re={key:1},Te={class:"ellipsis"},Fe=["onClick"],Le=F({props:{data:null},emits:["delete","editCondition"],setup(s){const n=s,v=X,t=E(!1),i=`
//common event varilables: k.event.url, k.event.userAgent, k.event.culture; 
//variables per event. k.event.page, k.event.view, k.event.route; 
// Finding=before object found. Found = object founded. 
//example, url redirect. only valid on RouteFinding event. 
//if (k.event.url.indexOf(""pagetwo"")>-1)
//{
//     k.event.url = ""/pageone"";
//};
`,{t:u}=L();n.data.then||(n.data.then=[]),n.data.else||(n.data.else=[]);const _={then:"THEN",else:"ELSE"},d=E(),e=r=>{d.value=r,t.value=!0},m=()=>{d.value={code:i,setting:{}},t.value=!0},y=r=>r.map(l=>`${l.left} ${l.operator} ${l.right}`).join(" && "),w=r=>{const l=n.data.do.splice(r.oldIndex,1)[0];n.data.do.splice(r.newIndex,0,l)},b=()=>{!n.data.do||!d.value||n.data.do.find(r=>r==d.value)||n.data.do.push(d.value)};return(r,l)=>{const g=O,S=ue,k=_e,B=j,p=ye;return c(),C("div",null,[o(p,{shadow:"hover",class:"w-full"},{header:a(()=>[f("div",be,[o(g,{class:"iconfont icon-move"}),Se,o(S,{class:"text-orange hover:text-orange",icon:"icon-delete",tip:h(u)("common.delete"),"data-cy":"remove",onClick:l[0]||(l[0]=x=>r.$emit("delete"))},null,8,["tip"])])]),default:a(()=>{var x,K,z;return[((x=s.data.if)==null?void 0:x.length)||((K=s.data.then)==null?void 0:K.length)||((z=s.data.else)==null?void 0:z.length)||!s.data.do?(c(),C("div",Be,[f("div",Ue,[Ie,f("div",De,[o(k,{size:"small",class:"rounded-full cursor-pointer","data-cy":"edit-condition",onClick:l[1]||(l[1]=V=>r.$emit("editCondition",s.data.if))},{default:a(()=>{var V;return[H(D((V=s.data.if)!=null&&V.length?y(s.data.if):h(u)("common.editCondition")),1)]}),_:1})])]),(c(),C(A,null,N(_,(V,R)=>f("div",{key:R,class:"flex"},[f("span",Ae,D(V),1),f("div",Ne,[o(h(v),{rules:s.data[R],"show-add":""},null,8,["rules"])])])),64))])):(c(),C("div",Re,[o(me,{list:s.data.do,"id-prop":"codeId",group:h(U)(),class:"!p-0",onSort:w,onDelete:l[2]||(l[2]=(V,R)=>{var J;return s.data.do=(J=s.data.do)==null?void 0:J.filter(Z=>Z!==R)})},{default:a(({item:V})=>[f("div",Te,D(V.code),1)]),right:a(({item:V})=>[f("div",{class:"p-8 cursor-pointer",onClick:R=>e(V)},[o(g,{class:"iconfont icon-a-writein"})],8,Fe)]),bottom:a(()=>[o(B,{circle:"","data-cy":"add-code",onClick:m},{default:a(()=>[o(g,{class:"text-blue iconfont icon-a-addto"})]),_:1})]),_:1},8,["list","group"])]))]}),_:1}),t.value&&d.value?(c(),$($e,{key:0,modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=x=>t.value=x),code:d.value.code,"onUpdate:code":[l[4]||(l[4]=x=>d.value.code=x),b]},null,8,["modelValue","code"])):M("",!0)])}}}),Oe={class:"p-24"},je={class:"space-y-4"},Me=F({props:{modelValue:{type:Boolean},conditions:null},emits:["update:modelValue"],setup(s,{emit:n}){const v=s,{t}=L(),i=E(JSON.parse(JSON.stringify(v.conditions))),u=E(!0),_=E([]);ee(G("name")).then(m=>{_.value=m,i.value.length||d()});const d=()=>I(this,null,function*(){i.value.push({left:_.value[0].name,operator:_.value[0].operator[0],right:""})}),e=()=>I(this,null,function*(){v.conditions.splice(0,v.conditions.length),v.conditions.push(...i.value),u.value=!1});return(m,y)=>{const w=ge,b=he,r=xe,l=O,g=j,S=Q;return c(),$(S,{"model-value":u.value,"custom-class":"el-dialog--zero-padding",width:"600px","close-on-click-modal":!1,title:h(t)("common.editCondition"),onClosed:y[1]||(y[1]=k=>n("update:modelValue",!1))},{footer:a(()=>[o(P,{onConfirm:e,onCancel:y[0]||(y[0]=k=>u.value=!1)})]),default:a(()=>[f("div",null,[f("div",Oe,[f("div",je,[(c(!0),C(A,null,N(i.value,(k,B)=>(c(),C("div",{key:B,class:"flex items-center space-x-4"},[o(b,{modelValue:k.left,"onUpdate:modelValue":p=>k.left=p,class:"w-280px","data-cy":"condition-left"},{default:a(()=>[(c(!0),C(A,null,N(_.value,p=>(c(),$(w,{key:p.name,value:p.name,label:p.name,"data-cy":p.name},null,8,["value","label","data-cy"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]),o(b,{modelValue:k.operator,"onUpdate:modelValue":p=>k.operator=p,class:"w-300px","data-cy":"condition-operator"},{default:a(()=>{var p;return[(c(!0),C(A,null,N((p=_.value.find(x=>x.name===k.left))==null?void 0:p.operator,x=>(c(),$(w,{key:x,value:x,label:x,"data-cy":x},null,8,["value","label","data-cy"]))),128))]}),_:2},1032,["modelValue","onUpdate:modelValue"]),o(r,{modelValue:k.right,"onUpdate:modelValue":p=>k.right=p,placeholder:h(t)("common.value"),"data-cy":"condition-right",onKeydown:fe(e,["enter"])},null,8,["modelValue","onUpdate:modelValue","placeholder","onKeydown"]),f("div",null,[o(g,{circle:"","data-cy":"remove-condition",onClick:p=>i.value.splice(B,1)},{default:a(()=>[o(l,{class:"iconfont icon-delete text-orange"})]),_:2},1032,["onClick"])])]))),128)),o(g,{circle:"","data-cy":"add-condition",onClick:d},{default:a(()=>[o(l,{class:"iconfont icon-a-addto text-blue"})]),_:1})])])])]),_:1},8,["model-value","title"])}}}),Ke={class:"space-y-8"},X=F({props:{rules:null,showAdd:{type:Boolean}},setup(s){const n=s;L();const v=E(),t=E(!1),i=e=>{v.value=e,t.value=!0},u=e=>{e===T.do?n.rules.push({id:U(),do:[]}):n.rules.push({id:U(),if:[]})},_=e=>{const m=n.rules.splice(e.oldIndex,1)[0];n.rules.splice(e.newIndex,0,m)},d=e=>{const m=n.rules.findIndex(y=>y===e);n.rules.splice(m,1)};return(e,m)=>{const y=O,w=j,b=Y,r=q,l=W;return c(),C("div",Ke,[o(h(ce),{"model-value":s.rules,group:h(U)(),"item-key":"id",class:"space-y-8",handle:".el-card__header",onSort:_},{item:a(({element:g})=>[o(Le,{data:g,onDelete:S=>d(g),onEditCondition:i},null,8,["data","onDelete"])]),_:1},8,["model-value","group"]),s.showAdd?(c(),$(l,{key:0,trigger:"click",onCommand:u},{dropdown:a(()=>[o(r,null,{default:a(()=>[(c(!0),C(A,null,N(h(T),(g,S)=>(c(),$(b,{key:S,command:g},{default:a(()=>[f("span",null,D(g),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:a(()=>[o(w,{circle:"",onCommand:u},{default:a(()=>[o(y,{class:"iconfont icon-a-addto text-blue"})]),_:1})]),_:1})):M("",!0),t.value?(c(),$(Me,{key:1,modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=g=>t.value=g),conditions:v.value},null,8,["modelValue","conditions"])):M("",!0)])}}}),ze={class:"p-24 pb-150px"},Je={class:"flex items-center py-24 space-x-16"},He={class:"flex items-center"},It=F({setup(s){const{t:n}=L(),v=ne(),t=E([]),i=G("name"),u=Ve(),_=we();le("eventname",i);const d=w=>{w===T.do?t.value.push({id:U(),do:[]}):t.value.push({id:U(),if:[]})},e=()=>{v.goBackOrTo(ke({name:"frontevents"}))},m=()=>I(this,null,function*(){yield oe({eventName:i,rules:t.value}),u.init(t.value)});return(()=>{te(i).then(w=>{t.value=w,t.value.length||d(T.condition),de(()=>{u.init(t.value)})})})(),ae(()=>{_.firstActiveMenu=""}),se((w,b,r)=>I(this,null,function*(){var l;w.name==="login"?r():(_.firstActiveMenu=(l=w.meta.activeMenu)!=null?l:w.name,yield u.check(t.value).then(()=>{r()}).catch(()=>{_.firstActiveMenu="frontevents",r(!1)}))})),ie(()=>t.value,()=>{u.changed(t.value)},{deep:!0}),(w,b)=>{const r=O,l=j,g=Y,S=q,k=W;return c(),C("div",ze,[o(Ce,{"crumb-path":[{name:h(n)("common.frontEvent"),route:{name:"frontevents"}},{name:h(i)}]},null,8,["crumb-path"]),f("div",Je,[o(k,{trigger:"click",onCommand:d},{dropdown:a(()=>[o(S,null,{default:a(()=>[(c(!0),C(A,null,N(h(T),(B,p)=>(c(),$(g,{key:p,command:B,"data-cy":p},{default:a(()=>[f("span",null,D(B),1)]),_:2},1032,["command","data-cy"]))),128))]),_:1})]),default:a(()=>[o(l,{round:"","data-cy":"new-rule"},{default:a(()=>[f("div",He,[H(D(h(n)("common.newRule"))+" ",1),o(r,{class:"iconfont icon-pull-down text-12px ml-8 !mr-0"})])]),_:1})]),_:1})]),o(X,{rules:t.value},null,8,["rules"]),o(re,{back:"",permission:{feature:"frontEvents",action:"edit"},onCancel:e,onSave:m})])}}});export{It as default};
