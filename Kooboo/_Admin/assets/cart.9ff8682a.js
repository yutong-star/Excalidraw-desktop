import{a as s}from"./replace-all.dd6016f2.js";import{d as a}from"./main.d8c6ef59.js";import{d as e}from"./i18n.2d8b30eb.js";const o=e.global.t,d=t=>a.post(s("Cart/list"),t),i=t=>a.post(s("Cart/Calculate"),t),l=t=>a.post(s("Cart/Create"),t),n=t=>a.post(s("Cart/Edit"),t),p=t=>a.get(s("Cart/GetEdit"),{id:t}),m=t=>a.post(s("Cart/deletes"),{ids:t},void 0,{successMessage:o("common.deleteSuccess")});export{i as a,p as b,l as c,m as d,n as e,d as g};
