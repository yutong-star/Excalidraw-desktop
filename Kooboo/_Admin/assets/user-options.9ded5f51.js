import{a as e}from"./replace-all.dd6016f2.js";import{d as t}from"./main.d8c6ef59.js";import{d as o}from"./i18n.2d8b30eb.js";const i=o.global.t,a=s=>t.post(e("userOptions/AddOrUpdate"),s),d=s=>t.post(e("userOptions/UpdateOptions"),s),u=()=>t.get(e("userOptions/All")),c=s=>t.get(e("userOptions/Get"),{id:s}),O=s=>t.post(e("userOptions/Deletes"),s,void 0,{successMessage:i("common.deleteSuccess")}),m=s=>t.get(e("UserOptions/isUniqueName"),{name:s},{hiddenLoading:!0,hiddenError:!0});export{c as a,O as d,u as g,m as i,a as s,d as u};
