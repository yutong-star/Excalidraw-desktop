var h=Object.defineProperty;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(t,o,e)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,p=(t,o)=>{for(var e in o||(o={}))v.call(o,e)&&f(t,e,o[e]);if(c)for(var e of c(o))x.call(o,e)&&f(t,e,o[e]);return t};var u=(t,o,e)=>new Promise((s,a)=>{var d=i=>{try{n(e.next(i))}catch(l){a(l)}},m=i=>{try{n(e.throw(i))}catch(l){a(l)}},n=i=>i.done?s(i.value):Promise.resolve(i.value).then(d,m);n((e=e.apply(t,o)).next())});import{m as r}from"./userWorker.b3a6730b.js";import{n as g}from"./guid.c1a40312.js";import{c as _}from"./config.589cc0cd.js";import{d as b}from"./dark.7c26a0d3.js";import{d as k,g as w,h as y,J as M,i as B,o as C,a as U}from"./url.8f5ec20c.js";const O=k({props:{editable:{type:Boolean},original:null,modified:null},emits:["update:modified"],setup(t,{emit:o}){const e=t,s=w();let a,d,m;return y(()=>u(this,null,function*(){const n=r.editor.createModel(e.original,"text/plain",r.Uri.file(g())),i=r.editor.createModel(e.modified,"text/plain",r.Uri.file(g()));e.editable&&i.onDidChangeContent(()=>{const l=i.getValue();o("update:modified",l)}),m=r.editor.createDiffEditor(s.value,p({enableSplitViewResizing:!0,readOnly:!e.editable},_)),m.setModel({original:n,modified:i})})),M(()=>{a==null||a.dispose(),d==null||d.dispose()}),B(b,n=>r.editor.setTheme(n?"vs-dark":"vs"),{immediate:!0}),(n,i)=>(C(),U("div",{ref_key:"container",ref:s,class:"w-full h-full min-h-300px min-w-400px monaco-editor bg-fff"},null,512))}});export{O as _};
