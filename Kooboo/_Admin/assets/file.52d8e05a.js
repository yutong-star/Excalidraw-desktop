import{d as l}from"./i18n.2d8b30eb.js";import{d as t}from"./main.d8c6ef59.js";import{a as s}from"./replace-all.dd6016f2.js";const i=l.global.t,n=e=>t.get(s("File/list"),e),p=(e="default")=>s(`/_api/v2/Upload/File?provider=${e}`),v=()=>s("/_api/v2/Upload/ReadCsv"),F=(e,o)=>t.post(s(`Download/Files?provider=${o}`),e,void 0,{}),u=e=>t.post(s("File/CreateFolder"),e,void 0,{successMessage:i("common.saveSuccess")}),m=(e,o)=>t.post(s(`File/DeleteFolders?provider=${o}`),e,void 0,{successMessage:i("common.deleteSuccess")}),g=(e,o)=>t.post(s(`File/DeleteFiles?provider=${o}`),e,void 0,{successMessage:i("common.deleteSuccess")}),U=(e,o,d)=>t.get(s(`Upload/IsUniqueKey?provider=${e}&type=file`),{name:o,oldName:d},{hiddenLoading:!0,hiddenError:!0});export{n as a,m as b,u as c,F as d,g as e,v as f,p as g,U as i};
