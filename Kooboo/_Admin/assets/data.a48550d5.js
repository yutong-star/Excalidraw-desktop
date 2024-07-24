var be=Object.defineProperty,ve=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ae=(_,n,s)=>n in _?be(_,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):_[n]=s,X=(_,n)=>{for(var s in n||(n={}))ye.call(n,s)&&ae(_,s,n[s]);if(oe)for(var s of oe(n))he.call(n,s)&&ae(_,s,n[s]);return _},te=(_,n)=>ve(_,ge(n));var T=(_,n,s)=>new Promise((r,C)=>{var V=o=>{try{y(s.next(o))}catch(c){C(c)}},F=o=>{try{y(s.throw(o))}catch(c){C(c)}},y=o=>o.done?r(o.value):Promise.resolve(o.value).then(V,F);y((s=s.apply(_,n)).next())});import{_ as we}from"./icon-button.e30c79ea.js";import{_ as Ee}from"./k-table.f75c31cc.js";import{b as Ce,e as ke,f as xe,h as Se}from"./index.5af167df.js";import{u as Ve}from"./use-table.c39fe23d.js";import{d as le,g as w,c as Z,i as ne,b7 as re,o as v,j as E,w as l,b as t,u as e,e as A,aH as q,t as D,f as J,a as ee,b6 as se,F as ie,k as K,G as Ne,cd as Te,x as M,E as De,M as qe,N as Fe}from"./url.8f5ec20c.js";import{B as Ue}from"./breadcrumb.79da4f07.js";import{b as $e}from"./confirm.617d359f.js";import{_ as Ie}from"./index.ed88cf90.js";import{_ as Be}from"./index.8bd72af8.js";import{g as me,w as Le}from"./i18n.2d8b30eb.js";import{u as Pe}from"./use-operation-dialog.fbfa9343.js";import{f as Re}from"./file.52d8e05a.js";import{E as Oe}from"./index.21d7e739.js";import{i as Y}from"./isEmpty.11c614d1.js";import{E as z}from"./main.d8c6ef59.js";import{E as Me,a as ze}from"./index.a141884f.js";import{E as ue}from"./windi.bf752d69.js";import{E as ce}from"./index.96970839.js";import{E as de,a as Ae}from"./index.bc06171b.js";import{E as Je,a as Ke}from"./index.ab4ed870.js";import{E as Qe}from"./index.4c9af567.js";import{E as je}from"./index.745dc8e0.js";import{E as Ge}from"./index.a4ff385c.js";import{d as He}from"./dayjs.min.35b12e7a.js";import{u as We}from"./use-date.28e9a8a3.js";import{E as Xe}from"./index.ec785feb.js";import"./index.e87fdc52.js";import"./index.0535d5fe.js";import"./sortable.esm.a99254e8.js";import"./index.14993118.js";import"./isEqual.c3e9e9f4.js";import"./_baseIsEqual.2f38f7c3.js";import"./index.bb5499e2.js";import"./event.776e7e11.js";import"./index.a595fe6d.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./index.0a83bb10.js";import"./style.ad574a57.js";import"./replace-all.dd6016f2.js";import"./toNumber.6efebd6a.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.593106e3.js";import"./logo-transparent.1566007e.js";import"./index.80a4dc1a.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./focus-trap.3f074800.js";import"./validator.1bcd6e6a.js";import"./use-file-upload.1cd07d1f.js";import"./index.06224119.js";import"./index.14aabd47.js";import"./index.e3f90979.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./_baseClone.29a8cd97.js";import"./debounce.730e1961.js";import"./index.b68af8a1.js";import"./refs.d2253dd4.js";const Ye={class:"ml-8"},Ze=q("\xA0"),eo=q("\xA0"),oo=le({props:{modelValue:{type:Boolean},dbType:null,table:null,databaseColumns:null},emits:["done"],setup(_,{emit:n}){const s=_,{t:r}=me(),{visible:C,handleClose:V}=Pe(s,n),F=w(),y=w(),o=w({overwriteExisting:!1,filename:"",rowsToSkip:0,records:[],fields:[]}),c=w({feature:"database",action:"edit"}),U=Z(()=>s.databaseColumns.filter(m=>m.name!=="_id")),b=w([]),x=w([]),Q=Z(()=>!Y(U.value)&&!Y(x.value)&&!Y(o.value.fields.filter(m=>m.csvFieldName)));function j(m){return T(this,null,function*(){return m.type!=="text/csv"?(z.error(r("common.fileFormatIsIncorrect")),!1):(o.value.filename=m.name,!0)})}function k(m){b.value=m.columns,x.value=m.list,o.value.records=m.list,o.value.fields=U.value.map(d=>{var a,i;const I=(i=(a=m.columns.find(p=>(p.displayName||p.name).toLowerCase()===d.name.toLowerCase()))==null?void 0:a.name)!=null?i:"";return{dbFieldName:d.name,csvFieldName:I,required:!1,unique:!1}})}function L(m){try{z.error(JSON.parse(m.message).toString())}catch(d){z.error(m.message)}}const N=5e3;function G(){return T(this,null,function*(){if(o.value.records.length>N){z.error(r("common.itemsCountExceedLimit",{count:N}));return}yield Ce(s.dbType,s.table,o.value),$(),n("done")})}function $(){P(),V()}function P(m){b.value=[],x.value=[],o.value=X({overwriteExisting:!1,filename:"",fields:[],rowsToSkip:0,records:[]},m)}return ne(()=>o.value.rowsToSkip,m=>{P({rowsToSkip:m})}),(m,d)=>{const I=Oe,a=Me,i=ue,p=ce,S=Be,g=de,H=Je,R=Ke,O=Qe,B=Ae,f=je,W=ze,pe=Ie,fe=Ge,_e=re("hasPermission");return v(),E(fe,{modelValue:e(C),"onUpdate:modelValue":d[3]||(d[3]=u=>Ne(C)?C.value=u:null),"close-on-click-modal":!1,"destroy-on-close":!0,title:e(r)("common.importData"),onClose:$},{footer:l(()=>[t(pe,{"confirm-label":e(r)("common.start"),disabled:!e(Q),onConfirm:G,onCancel:$},null,8,["confirm-label","disabled"])]),default:l(()=>[t(W,{ref_key:"form",ref:F,class:"el-form--label-normal",model:o.value,"label-position":"top",onSubmit:d[2]||(d[2]=Le(()=>{},["prevent"]))},{default:l(()=>[t(a,{prop:"rowsToSkip",label:e(r)("common.rowsToSkip")},{default:l(()=>[t(I,{modelValue:o.value.rowsToSkip,"onUpdate:modelValue":d[0]||(d[0]=u=>o.value.rowsToSkip=u),min:0,precision:0},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{prop:"file",label:e(r)("common.file")},{default:l(()=>[t(S,{ref_key:"uploader",ref:y,permission:c.value,multiple:!1,accept:"text/csv",action:e(Re)(),"before-upload":j,"on-success":k,"on-error":L,data:{rowsToSkip:o.value.rowsToSkip},"data-cy":"upload"},{default:l(()=>[A((v(),E(p,{type:"primary",round:"",class:"shadow-s-10 !py-8px","data-cy":"upload"},{default:l(()=>[t(i,{class:"iconfont icon-a-Cloudupload !text-20px"}),q(" "+D(e(r)("common.selectFile")),1)]),_:1})),[[_e,c.value]])]),_:1},8,["permission","action","data"]),J("span",Ye,D(o.value.filename||e(r)("common.supportFile")+": .csv"),1)]),_:1},8,["label"]),o.value.fields.length&&b.value.length?(v(),E(a,{key:0,label:e(r)("common.fieldMaps")},{default:l(()=>[t(B,{data:o.value.fields,"max-height":250},{default:l(()=>[t(g,{prop:"dbFieldName",label:e(r)("common.databaseField")},null,8,["label"]),t(g,{prop:"csvFieldName",label:e(r)("common.csvField")},{default:l(({row:u})=>[t(R,{modelValue:u.csvFieldName,"onUpdate:modelValue":h=>u.csvFieldName=h,clearable:""},{default:l(()=>[(v(!0),ee(ie,null,se(b.value,h=>(v(),E(H,{key:h.name,value:h.name,label:h.displayName||h.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),t(g,{align:"center",prop:"required",label:e(r)("common.required"),width:"100"},{default:l(({row:u})=>[t(O,{modelValue:u.required,"onUpdate:modelValue":h=>u.required=h,label:u.name},{default:l(()=>[Ze]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]),_:1},8,["label"]),t(g,{align:"center",prop:"unique",label:e(r)("common.unique"),width:"100"},{default:l(({row:u})=>[t(O,{modelValue:u.unique,"onUpdate:modelValue":h=>u.unique=h,label:u.name},{default:l(()=>[eo]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1},8,["label"])):K("",!0),o.value.fields.some(u=>u.unique)?(v(),E(a,{key:1,prop:"overwriteExisting",label:e(r)("common.overwrite")},{default:l(()=>[t(f,{modelValue:o.value.overwriteExisting,"onUpdate:modelValue":d[1]||(d[1]=u=>o.value.overwriteExisting=u)},null,8,["modelValue"])]),_:1},8,["label"])):K("",!0)]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),ao={class:"p-24"},to={class:"flex items-center py-24 space-x-16"},lo=J("div",{class:"flex-1"},null,-1),no={class:"ellipsis"},va=le({setup(_){const{t:n}=me(),s=Te(),r=M("table"),C=w([]),V=w(!1),F=Z(()=>C.value.map(a=>{const i={_id:""};return y.value.forEach(p=>{a.forEach(({key:S,value:g})=>{S===p.name&&(p.dataType&&p.dataType.toLowerCase().includes("datetime")&&He(g).isValid()?i[p.name]=We(g):i[p.name]=g)})}),i})),y=w([]),o=De({currentPage:1,pageCount:0,pageSize:1});let c={name:"",desc:!0};var U=localStorage.getItem(d());U&&(c=JSON.parse(U));const{dbType:b,appendQueryToRoute:x,getListRouteName:Q}=Ve(),j=Q(),k=qe();k.meta.activeMenu=j;const L=w(!1),N=()=>T(this,null,function*(){var i;const a=yield ke(b,{table:r,pageNr:o.currentPage,order:c.name,desc:c.desc});y.value=(i=a.columns)!=null?i:[],C.value=a.list,o.currentPage=a.pageNr,o.pageCount=a.totalPages,o.pageSize=a.pageSize,L.value=!0});function G(){xe(b,{table:r,order:c.name,desc:c.desc,pageNr:1,pageSize:99999999})}ne(()=>{var a;return(a=k.query)==null?void 0:a.pageNr},()=>T(this,null,function*(){var a,i;o.currentPage=(a=k.query)!=null&&a.pageNr?parseInt((i=k.query)==null?void 0:i.pageNr):1,N(),k.query.dbType&&(k.meta.activeMenu=k.query.dbType.toLocaleLowerCase()+".table")}),{immediate:!0});function $(a){return T(this,null,function*(){s.push(x({name:"table-data",query:te(X({},s.currentRoute.value.query),{pageNr:a})}))})}function P(a){return T(this,null,function*(){try{yield $e(a.length),yield Se(b,{tableName:r,values:a.map(i=>i._id)}),N()}catch(i){}})}function m(){s.push(x({name:"table-edit-data",query:{table:r}}))}function d(){return`${M("SiteId")}_${M("dbType")}_${M("table")}`}function I(a){c={name:a.prop,desc:a.order!="ascending"},localStorage.setItem(d(),JSON.stringify(c)),N()}return(a,i)=>{const p=ue,S=ce,g=Fe("router-link"),H=Xe,R=de,O=we,B=re("hasPermission");return v(),ee("div",ao,[t(Ue,{"crumb-path":[{name:e(b)==="Database"?e(n)("common.database"):e(n)("common.dbTypeTable",{dbType:e(b)}),route:{name:e(b)==="Database"?"table":`${e(b).toLowerCase()}.table`}},{name:e(r)}]},null,8,["crumb-path"]),J("div",to,[A((v(),E(S,{round:"",onClick:i[0]||(i[0]=f=>m())},{default:l(()=>[t(p,{class:"iconfont icon-a-addto"}),q(" "+D(e(n)("common.newData")),1)]),_:1})),[[B,{feature:"database",action:"edit"}]]),A((v(),E(S,{round:"",onClick:G},{default:l(()=>[t(p,{class:"iconfont icon-share"}),q(" "+D(e(n)("common.exportData")),1)]),_:1})),[[B,{feature:"database",action:"view"}]]),e(b)!=="Database"?A((v(),E(S,{key:0,round:"",onClick:i[1]||(i[1]=f=>V.value=!0)},{default:l(()=>[t(p,{class:"iconfont icon-a-Cloudupload"}),q(" "+D(e(n)("common.importData")),1)]),_:1})),[[B,{feature:"database",action:"edit"}]]):K("",!0),lo,t(H,{class:"box-item",effect:"dark",content:e(n)("common.setting"),placement:"top"},{default:l(()=>[t(g,{to:e(x)({name:"table-columns",query:{table:e(r),from:"table-data"}})},{default:l(()=>[t(S,{circle:""},{default:l(()=>[t(p,{class:"iconfont icon-a-setup"})]),_:1})]),_:1},8,["to"])]),_:1},8,["content"])]),L.value?(v(),E(e(Ee),{key:0,data:e(F),"show-check":"",pagination:e(o),permission:{feature:"database",action:"edit"},sort:e(c).name,order:e(c).desc?"descending":"ascending",onDelete:P,onChange:$,onSortChange:I},{default:l(()=>[(v(!0),ee(ie,null,se(y.value.filter(f=>f.name!=="_id"&&f.name!=="_version"),({name:f})=>(v(),E(R,{key:f,sortable:"custom",prop:f,label:f,"min-width":180},{default:l(({row:W})=>[J("span",no,D(W[f]),1)]),_:2},1032,["prop","label"]))),128)),t(R,{fixed:"right",width:"70",align:"right"},{default:l(({row:f})=>[t(g,{to:e(x)({name:"table-edit-data",query:{table:e(r),id:f._id,pageNr:e(o).currentPage}})},{default:l(()=>[t(O,{class:"inline-flex",icon:"icon-a-writein",tip:e(n)("common.edit")},null,8,["tip"])]),_:2},1032,["to"])]),_:1})]),_:1},8,["data","pagination","sort","order"])):K("",!0),t(oo,{modelValue:V.value,"onUpdate:modelValue":i[2]||(i[2]=f=>V.value=f),"db-type":e(b),table:e(r),"database-columns":y.value,onDone:N},null,8,["modelValue","db-type","table","database-columns"])])}}});export{va as default};
