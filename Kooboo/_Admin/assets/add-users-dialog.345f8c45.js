var b=(t,p,n)=>new Promise((u,f)=>{var _=a=>{try{E(n.next(a))}catch(s){f(s)}},o=a=>{try{E(n.throw(a))}catch(s){f(s)}},E=a=>a.done?u(a.value):Promise.resolve(a.value).then(_,o);E((n=n.apply(t,p)).next())});import{_ as C}from"./index.ed88cf90.js";import{g as k}from"./i18n.2d8b30eb.js";import{d as c,b as y,Z as M}from"./main.d8c6ef59.js";import{E as L,a as O}from"./index.ab4ed870.js";import{E as $,a as A}from"./index.a141884f.js";import{E as j}from"./index.bb5499e2.js";import{E as q}from"./index.745dc8e0.js";import{E as Z}from"./index.a4ff385c.js";import{d as z,g,c as G,o as V,j as U,w as d,b as r,u as i,a as H,b6 as J,F as K}from"./url.8f5ec20c.js";function oe(){return c.get("department/list")}function ae(t){return c.get("department/users",{id:t})}function P(t){return c.post("department/addUser",t)}function ne(t){return c.post("department/post",t)}function se(t){return c.post("department/deletes",{ids:t})}function re(t,p){return c.post("department/deleteUsers",{userNames:p,departmentId:t})}const ue=z({props:{modelValue:{type:Boolean},id:null,excludes:null},emits:["update:modelValue","reload"],setup(t,{emit:p}){const n=t,{t:u}=k(),f=g([]),_=y(),o=g({userName:"",isManager:!1,function:"",departmentId:n.id});function E(){return b(this,null,function*(){var m;f.value=yield M((m=_.currentOrg)==null?void 0:m.id)})}E();const a=G(()=>{let m=f.value;return n.excludes&&(m=m.filter(e=>!n.excludes.includes(e.id))),m}),s=g(!0),w=()=>b(this,null,function*(){yield P(o.value),s.value=!1,p("reload")});return(m,e)=>{const x=L,F=O,v=$,N=j,D=q,I=A,S=C,B=Z;return V(),U(B,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value=l),width:"600px",title:i(u)("common.addUser"),onClosed:e[5]||(e[5]=l=>p("update:modelValue",!1))},{footer:d(()=>[r(S,{"confirm-label":i(u)("common.add"),disabled:!o.value.userName,onConfirm:w,onCancel:e[3]||(e[3]=l=>s.value=!1)},null,8,["confirm-label","disabled"])]),default:d(()=>[r(I,{"label-position":"top"},{default:d(()=>[r(v,{label:i(u)("common.user")},{default:d(()=>[r(F,{modelValue:o.value.userName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.userName=l),class:"w-full"},{default:d(()=>[(V(!0),H(K,null,J(i(a),l=>(V(),U(x,{key:l.id,label:l.userName,value:l.userName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(v,{label:i(u)("common.function")},{default:d(()=>[r(N,{modelValue:o.value.function,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.function=l)},null,8,["modelValue"])]),_:1},8,["label"]),r(v,{label:i(u)("common.isManager")},{default:d(()=>[r(D,{modelValue:o.value.isManager,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.isManager=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}});export{ue as _,ne as a,oe as b,se as c,re as d,ae as g};
