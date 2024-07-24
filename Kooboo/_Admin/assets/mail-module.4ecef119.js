import{d as o,e as d}from"./main.d8c6ef59.js";import{d as M}from"./style.ad574a57.js";import{d as u}from"./i18n.2d8b30eb.js";const l=u.global.t,p=()=>o.get("/MailModule/List"),m=e=>o.post("/MailModule/Create",{name:e},void 0,{successMessage:l("common.createSuccess")}),g=e=>o.post("/MailModule/Deletes",{ids:e},void 0,{successMessage:l("common.deleteSuccess")}),S=(e,s)=>o.post("/MailModule/UpdateStatus",{moduleId:e,status:s}),v=e=>{d.get("/MailModule/export",{params:{name:e},responseType:"blob",timeout:1e3*60*30}).then(s=>{M(s)})},h=e=>o.post("/MailModule/Import",e,void 0,{timeout:1e3*60*30,hiddenLoading:!0,hiddenError:!0,successMessage:l("common.importSuccess")}),F=e=>o.post("MailModule/share",{id:e},void 0,{successMessage:l("common.shareSuccess")}),T=e=>o.post("/MailModule/Search",{keyword:e}),b=(e,s)=>o.post("/MailModule/InstallModule",{packageId:e,name:s},void 0,{hiddenLoading:!0,hiddenError:!0}),f=()=>o.get("MailModule/ResourceType"),y=e=>o.get("MailModuleSetting/GetSetting",{id:e}),x=(e,s)=>o.post("MailModuleSetting/UpdateSetting",{id:e,json:s},void 0,{successMessage:l("common.saveSuccess")}),j=(e,s,t)=>o.post("MailModuleFiles/GetText",{moduleid:s,fileName:t,folder:"/",objectType:e}),L=e=>o.get("MailModuleFiles/AllFiles",{moduleid:e}),U=(e,s,t,a)=>o.post("MailModuleFiles/UpdateBinary",{moduleid:s,folder:"/",fileName:t,base64:a,objectType:e},void 0),I=(e,s,t,a,i)=>o.post("MailModuleFiles/UpdateText",{moduleid:s,folder:"/",fileName:t,content:a,objectType:e},void 0,{successMessage:i}),R=(e,s,t)=>o.post("MailModuleFiles/Remove",{moduleid:s,fileName:t,folder:"/",objectType:e},void 0,{successMessage:l("common.deleteSuccess")});export{b as a,y as b,m as c,p as d,g as e,S as f,j as g,v as h,h as i,F as j,f as k,I as l,U as m,L as n,R as r,T as s,x as u};
