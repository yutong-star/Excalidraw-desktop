import{d as r}from"./main.d8c6ef59.js";const d=e=>r.post("/VerifyCode/SmsCode",{tel:e}),i=(e,s,o)=>r.post("/VerifyCode/verifyTelCode",{tel:e,code:s,returnurl:o}),n=e=>r.post("/VerifyCode/Bind",e),C=e=>r.post("/VerifyCode/Register",e);export{n as b,C as r,d as s,i as v};
