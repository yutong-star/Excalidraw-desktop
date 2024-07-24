var Fe=Object.defineProperty,Je=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var _e=(h,d,s)=>d in h?Fe(h,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[d]=s,$=(h,d)=>{for(var s in d||(d={}))Ve.call(d,s)&&_e(h,s,d[s]);if(he)for(var s of he(d))He.call(d,s)&&_e(h,s,d[s]);return h},D=(h,d)=>Je(h,ze(d));var k=(h,d,s)=>new Promise((r,u)=>{var e=v=>{try{w(s.next(v))}catch(p){u(p)}},E=v=>{try{w(s.throw(v))}catch(p){u(p)}},w=v=>v.done?r(v.value):Promise.resolve(v.value).then(e,E);w((s=s.apply(h,d)).next())});import{_ as Pe,a as Ue,s as xe,h as ye}from"./use-loading.87c52f48.js";import{g as qe,w as Ke}from"./i18n.2d8b30eb.js";import{d as Ie,o as i,a as c,f as t,t as a,u as l,j as P,k as _,aH as B,F as j,b6 as A,b as q,cg as T,cd as Qe,M as Ge,g as N,c as ge,cj as We,w as Xe,n as L,x as we,K as Ye}from"./url.8f5ec20c.js";import{j as Ze,k as et}from"./index.37979027.js";import{u as $e}from"./email.2058242d.js";import{_ as tt}from"./index.c6707b18.js";import{c as H}from"./replace-all.dd6016f2.js";import{e as at}from"./confirm.617d359f.js";import{k as st}from"./main.d8c6ef59.js";import{E as Ee,j as lt}from"./windi.bf752d69.js";import{u as be,a as R,b as ke,w as Ce,c as Ne}from"./use-date.28e9a8a3.js";import{d as ot}from"./dayjs.min.35b12e7a.js";import{_ as nt}from"./index.5b1ebe6c.js";import{E as it}from"./index.b3663d55.js";import{E as rt}from"./index.593106e3.js";import"./index.35ae15db.js";import"./index.96970839.js";import"./index.a595fe6d.js";import"./index.ec785feb.js";import"./focus-trap.3f074800.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./dropdown.d7a15792.js";import"./index.0535d5fe.js";import"./refs.d2253dd4.js";import"./index.3d9a337f.js";import"./index.47274d5a.js";import"./index.3f972c9e.js";import"./error.7e8331f1.js";import"./event.776e7e11.js";import"./logo-transparent.1566007e.js";import"./index.80a4dc1a.js";import"./index.bb5499e2.js";import"./index.bf8ed8c6.js";import"./scroll.54c27fbd.js";import"./aria.75ec5909.js";import"./validator.1bcd6e6a.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";const ct={class:"w-full"},dt=t("div",{class:"w-full bg-gray h-1px dark:bg-[#555]"},null,-1),ut={class:"my-16 text-999 flex justify-between"},mt={class:"flex flex-wrap"},ft=["title","onClick"],vt={class:"flex"},pt=["src"],ht={class:"ellipsis w-140px"},_t=["title"],xt={class:"leading-4 text-999"},yt=Ie({props:{attachments:null,downloadAllAttachmentPath:null},setup(h){const d=h,{t:s}=qe(),r=$e();function u(E,w){T(E.downloadUrl+(w?"?forceDownload=true":""))}function e(){T(d.downloadAllAttachmentPath)}return(E,w)=>{var p;const v=Ee;return i(),c("div",ct,[dt,t("div",ut,[t("span",null,a(l(s)("common.attachments"))+": "+a(l(s)("mail.quantity",{total:h.attachments.length})),1),t("span",{class:"!hover:text-blue cursor-pointer text-999",onClick:w[0]||(w[0]=g=>e())},[(p=h.attachments)!=null&&p.length?(i(),P(v,{key:0,class:"mr-4 iconfont icon-xiazai-wenjianxiazai-05 font-bold","data-cy":"download"})):_("",!0),B(a(l(s)("common.downloadAll")),1)])]),t("div",mt,[(i(!0),c(j,null,A(h.attachments,g=>(i(),c("div",{key:g.fileName,class:"group cursor-pointer border border-gray dark:border-[#555] dark:text-fff/86 hover:bg-blue/10 rounded-normal p-12 flex items-center justify-between mr-8 mb-8",title:g.fileName,onClick:C=>u(g)},[t("div",vt,[t("img",{src:l(r).getAttachmentType(g.subType.toLowerCase()),class:"mr-8 w-10 h-10"},null,8,pt),t("div",ht,[t("div",{class:"ellipsis",title:g.fileName,"data-cy":"attachment"},a(g.fileName),9,_t),t("div",xt,a(l(st)(g.size)),1)])]),q(v,{class:"opacity-0 group-hover:opacity-100 ml-8 iconfont icon-xiazai-wenjianxiazai-05 cursor-pointer hover:text-blue font-bold text-999","data-cy":"download",title:l(s)("common.download"),onClick:Ke(C=>u(g,!0),["stop"])},null,8,["title","onClick"])],8,ft))),128))])])}}});const gt={class:"p-24 pb-16 flex"},wt={class:"flex items-center text-m space-x-12 dark:text-[#fffa]"},bt=["data-cy","onClick"],kt=t("div",{class:"flex-1"},null,-1),Ct={class:"p-16 bg-[#F3F5F5] dark:bg-444 dark:text-[#fffa]"},Nt={class:"mb-12 dark:text-[#fffa] flex items-center text-16px",style:{"word-break":"break-word"},"data-cy":"subject"},qt={key:0,src:Ue,class:"mr-8 h-7 w-16 dark:text-999"},It={key:0,class:"flex justify-between w-full"},$t={class:"ellipsis max-w-7/10"},Et=["title"],St={class:"mx-8"},jt=["title"],At={class:"space-x-12"},Dt={class:"text-999"},Lt={key:1,class:"max-w-full space-y-8"},Mt={class:"flex justify-between items-center"},Ot={class:"flex items-center space-x-4 max-w-7/10"},Rt={class:"dark:text-[#fffa]"},Bt=["title"],Tt={"data-cy":"from"},Ft={class:"text-666 mr-4"},Jt={key:0,class:"space-x-12"},zt={class:"text-999"},Vt={key:0,class:"flex w-full"},Ht={class:"mr-4"},Pt={class:"flex flex-1 flex-wrap items-center overflow-hidden"},Ut=["title"],Kt={class:"text-666 mr-4"},Qt={class:"mr-4"},Gt={key:1,class:"ellipsis flex"},Wt={class:"mr-4"},Xt={class:"flex flex-1 flex-wrap items-center overflow-hidden"},Yt=["title"],Zt={class:"text-666 mr-4"},ea={class:"mr-4"},ta={key:2,class:"flex"},aa={class:"mr-4"},sa={class:"flex flex-1 flex-wrap items-center overflow-hidden"},la=["title"],oa={class:"text-666 mr-4"},na={class:"mr-4"},ia={key:3,class:"flex mb-8 w-full"},ra={class:"mr-4"},ca={class:"flex space-x-4 items-center text-m text-999"},da={class:"mr-4 whitespace-nowrap","data-cy":"total-attachments"},ua=t("span",null,"(",-1),ma={class:"max-w-300px overflow-hidden flex items-center"},fa=["title"],va={key:0,class:"text-blue"},pa=t("span",null,")",-1),ha={class:"flex items-center space-x-12"},_a=t("div",{class:"h-14px w-1px bg-blue"},null,-1),xa={key:0,class:"p-16 bg-[#F3F5F5] dark:bg-444 dark:text-[#fffa] mt-8 flex items-center justify-between"},ya={class:"max-w-800px"},ga={class:"font-bold text-16px"},wa={class:"flex items-center mt-4 mb-16 font-bold text-16px"},ba=t("span",{class:"mx-12"},"\u2014",-1),ka={key:0},Ca={class:"my-8"},Na={key:0,class:"mr-4 text-999"},qa={class:"w-full flex"},Ia={class:"mr-4 text-999"},$a={class:"flex-1 flex flex-wrap"},Ea={key:0},Sa={class:"flex-shrink-0"},ja={key:0},Aa={class:"text-center"},Da={class:"text-center"},La={class:"text-center"},Ma={key:1},Oa={key:1,class:"text-999"},ks=Ie({setup(h){const d=Qe(),s=Ge(),{t:r}=qe(),u=$e(),e=N({}),E=N(),w=ge(()=>{var o,n;return(n=(o=E.value)==null?void 0:o.open)!=null?n:!1}),v=N(0),p=N(0),g=N(),C=N(!1),F=N(),J=N(!1),z=N(!1),Se=o=>{const n={"-1":r("common.theInvitationHasExpired"),"1":r("common.acceptedTheInvitation"),"2":r("common.declinedTheInvitation"),default:r("common.tentativelyAcceptedTheInvitation")};return n[o.toString()]||n.default},je=()=>{if(z.value=!0,z.value){F.value.scrollIntoView({behavior:"smooth"});const o=new IntersectionObserver(n=>{n.forEach(m=>{m.isIntersecting&&(J.value=!0,setTimeout(()=>{J.value=!1},500),o.disconnect(),z.value=!1)})});o.observe(F.value)}};function U(o){let n="";for(let m=0;m<o.length;m++){const x=o[m];x.name.trim()!==""?(n+=x.name,m<o.length-1&&(n+=", ")):(n+=x.address,m<o.length-1&&(n+=", "))}return n}let K=s.query.flag?s.query.flag==="common"?{flag:"common",keyword:u.messageKeyword}:$({flag:"advanced"},u.searchModel):void 0;const Ae=o=>k(this,null,function*(){yield u.move([e.value],o),xe(),yield u.reload(),ye(),yield u.updateUnreadCount(u.selectedMessage,o),s.query.folder==="searchEmail"?yield M(e.value.folderName!=="trash"):yield M()}),De=o=>k(this,null,function*(){yield at(1),yield u.deleteEmails(o,e.value.folderName),xe(),yield u.reload(),ye(),yield u.updateUnreadCount(u.selectedMessage,"trash"),s.query.folder==="searchEmail"?yield M(e.value.folderName!=="trash"):yield M()}),Le=ge(()=>[{showCondition:!0,dataCy:"back",action:()=>O(!1),showBackIcon:!0,label:r("common.back")},{showCondition:e.value.folderName==="sent"||e.value.folderName==="drafts",dataCy:"editAgain",action:Be,showBackIcon:!1,label:r("common.editAgain")},{showCondition:e.value.folderName!=="drafts",dataCy:"reply",action:()=>G(!1),showBackIcon:!1,label:r("common.reply")},{showCondition:e.value.folderName!=="drafts",dataCy:"reply-all",action:()=>G(!0),showBackIcon:!1,label:r("common.replyAll")},{showCondition:e.value.folderName!=="drafts",dataCy:"forward",action:Te,showBackIcon:!1,label:r("common.forward")},{showCondition:!0,dataCy:"delete",action:()=>De([e.value]),showBackIcon:!1,label:r("common.delete")}]),Me=()=>{let o=d.resolve({name:"original message",query:{messageId:s.query.messageId}});T(o.href)},Oe=()=>{T(`/_api/EmailMessage/ExportEmlFile/${e.value.id}?subject=${e.value.subject}`)},V=o=>k(this,null,function*(){yield Ze(e.value.id,o,e.value.calendar,e.value.to[0].address),e.value.inviteConfirm=o}),Re=()=>{e.value.inviteConfirm=0};function Q(o){return k(this,null,function*(){var x,I;const n=lt.service({background:"rgba(0, 0, 0, 0.5)"});o||(o=we("messageId"));try{e.value=yield et(o),e.value.html=e.value.html.replace(/<div class="signature"([^>]*)style=["'][^"']*["']([^>]*)>/gi,'<div class="signature"$1$2>'),e.value.html=e.value.html.replace(/<a\s+([^>]*)>/gi,(S,y)=>y.includes('target="_blank"')?S:`<a ${y} target="_blank">`)}catch(S){O(!0)}v.value=((x=u.messageList)==null?void 0:x.length)||0;const m=(I=u.messageList)==null?void 0:I.findIndex(S=>S.id===e.value.id);m!==void 0&&m>=0?p.value=m:p.value=0,Ye(()=>k(this,null,function*(){n.close()}))})}function M(o){return k(this,null,function*(){var n,m;if(v.value=u.messageList.length,s.query.folder==="searchEmail"){let x=!1;if((p.value>=v.value&&e.value.folderName==="trash"||p.value>=v.value-1&&e.value.folderName!=="trash")&&(x=!0),v.value!==30&&x){O(p.value>0);return}v.value===30&&p.value===29&&v.value<u.messageList.length&&(yield u.loadMessage())}if(p.value<v.value){let x=o?(n=u.messageList)==null?void 0:n[p.value+1].id:(m=u.messageList)==null?void 0:m[p.value].id;d.replace({name:s.name,query:$({folder:s.query.folder,activeMenu:s.query.activeMenu,folderName:s.query.folderName,address:s.query.folderName?void 0:s.query.address,messageId:x},K)}),x&&(yield Q(x),u.messageList.forEach(I=>k(this,null,function*(){I.id===x&&!I.read&&(I.read=!0,s.query.folder==="folder"?yield u.loadFolders():yield u.loadAddress(s.query.folder))})))}else O(p.value>0)})}We((o,n)=>k(this,null,function*(){if(["inbox","sent","drafts","spam","trash","searchEmail","folder"].includes(o.name)&&o.query.messageId!==s.query.messageId)return{name:o.name,replace:!0,query:D($({},o.query),{messageId:s.query.messageId})};u.justViewMessageId=Number(s.query.messageId)})),Q();function O(o){return k(this,null,function*(){var n,m;yield d.replace({name:s.query.folder,query:$({address:(n=s.query.address)!=null?n:"",folderName:(m=s.query.folderName)!=null?m:void 0,messageId:o?u.messageList[p.value-1].id:s.query.messageId},K)})})}function Be(){e.value.id&&d.push(H({name:"compose",query:D($({type:e.value.folderName==="sent"?"EditAgain":"Drafts",sourceId:e.value.id},d.currentRoute.value.query),{oldActiveMenu:s.query.folder,folder:"compose"})}))}function G(o){if(e.value.id){let n=s.query.folderName;s.query.folderName&&delete d.currentRoute.value.query.folderName,d.push(H({name:"compose",query:D($({type:o?"ReplyAll":"Reply",sourceId:e.value.id},d.currentRoute.value.query),{oldActiveMenu:s.query.folder,oldFolderName:n!=null?n:void 0,folder:"compose"})}))}}function Te(){if(e.value.id){let o=s.query.folderName;s.query.folderName&&delete d.currentRoute.value.query.folderName,d.push(H({name:"compose",query:D($({type:"Forward",sourceId:e.value.id},d.currentRoute.value.query),{oldActiveMenu:s.query.folder,oldFolderName:o!=null?o:void 0,folder:"compose"})}))}}return(o,n)=>{var S;const m=Ee,x=it,I=rt;return i(),c("div",gt,[t("div",{class:L(["shadow-s-10 rounded-normal overflow-hidden bg-fff p-16 dark:bg-[#333] w-full transition-all duration-500",l(w)?"box-border w-[calc(100%-22%-40px)]":""])},[t("div",wt,[(i(!0),c(j,null,A(l(Le),y=>(i(),c(j,{key:y.dataCy},[y.showCondition?(i(),c("div",{key:0,class:"inline-flex rounded-full bg-[#F3F5F5] flex items-center h-30px px-16 cursor-pointer dark:bg-444","data-cy":y.dataCy,onClick:y.action},[y.showBackIcon?(i(),P(m,{key:0,class:"mr-8 iconfont icon-back"})):_("",!0),t("span",null,a(y.label),1)],8,bt)):_("",!0)],64))),128)),e.value.folderName!=="drafts"?(i(),P(Pe,{key:0,selected:[{id:e.value.id,read:!0}],"folder-name":e.value.folderName,onMoveSuccess:Ae},null,8,["selected","folder-name"])):_("",!0),kt]),q(x,{class:"my-8"}),q(I,{class:"h-[calc(100vh-172px)] text-m","wrap-class":"pr-12","view-class":"h-full flex flex-col justify-between"},{default:Xe(()=>{var y,W,X,Y,Z,ee,te,ae,se,le,oe,ne,ie,re,ce,de,ue,me,fe,ve,pe;return[t("div",null,[t("div",Ct,[t("div",Nt,[(y=e.value.attachments)!=null&&y.length?(i(),c("img",qt)):_("",!0),B(" "+a(e.value.subject?e.value.subject:"("+l(r)("common.noSubject")+")"),1)]),!C.value&&(((W=e.value.to)==null?void 0:W.length)||((X=e.value.cc)==null?void 0:X.length)||((Y=e.value.bcc)==null?void 0:Y.length))?(i(),c("div",It,[t("div",$t,[t("span",{title:(Z=e.value.from)==null?void 0:Z.name,class:"max-w-1/2 text-666"},a((ae=(ee=e.value.from)==null?void 0:ee.name)!=null?ae:(te=e.value.from)==null?void 0:te.address),9,Et),t("span",St,a(l(r)("content.to")),1),t("span",{class:"text-666",title:U([...JSON.parse(JSON.stringify(e.value.to||[])),...JSON.parse(JSON.stringify(e.value.cc||[])),...JSON.parse(JSON.stringify(e.value.bcc||[]))])},a(U([...JSON.parse(JSON.stringify(e.value.to||[])),...JSON.parse(JSON.stringify(e.value.cc||[])),...JSON.parse(JSON.stringify(e.value.bcc||[]))])),9,jt)]),t("div",At,[t("span",Dt,a(l(be)(e.value.date)),1),t("span",{class:"text-blue cursor-pointer",onClick:n[0]||(n[0]=f=>C.value=!C.value)},a(C.value?l(r)("common.hideDetails"):l(r)("content.details")),1)])])):(i(),c("div",Lt,[t("div",Mt,[t("div",Ot,[t("span",Rt,a(l(r)("mail.from"))+":",1),t("div",{class:"ellipsis text-999 flex-1",title:((se=e.value.from)==null?void 0:se.name)+" <"+((le=e.value.from)==null?void 0:le.address)+">"},[t("span",Tt,[t("span",Ft,a((oe=e.value.from)==null?void 0:oe.name),1),t("span",null,a(`<${(ne=e.value.from)==null?void 0:ne.address}>`),1)])],8,Bt)]),((ie=e.value.to)==null?void 0:ie.length)||((re=e.value.cc)==null?void 0:re.length)||((ce=e.value.bcc)==null?void 0:ce.length)?(i(),c("div",Jt,[t("span",zt,a(l(be)(e.value.date)),1),t("span",{class:"text-blue cursor-pointer",onClick:n[1]||(n[1]=f=>C.value=!C.value)},a(C.value?l(r)("common.hideDetails"):l(r)("content.details")),1)])):_("",!0)]),(de=e.value.to)!=null&&de.length?(i(),c("div",Vt,[t("span",Ht,a(l(r)("mail.to"))+": ",1),t("div",Pt,[(i(!0),c(j,null,A(e.value.to,(f,b)=>(i(),c("span",{key:b,class:"text-999 flex max-w-full"},[t("div",{class:"ellipsis",title:f.name+" <"+f.address+">","data-cy":"to"},[t("span",Kt,a(f.name),1),t("span",null,a(`<${f.address}>`),1)],8,Ut),t("span",Qt,a(b===e.value.to.length-1?"":","),1)]))),128))])])):_("",!0),(ue=e.value.cc)!=null&&ue.length?(i(),c("div",Gt,[t("span",Wt,a(l(r)("common.carbonCopy"))+": ",1),t("div",Xt,[(i(!0),c(j,null,A(e.value.cc,(f,b)=>(i(),c("span",{key:b,class:"text-999 flex max-w-full"},[t("div",{class:"ellipsis",title:f.name+" <"+f.address+">","data-cy":"cc"},[t("span",Zt,a(f.name),1),t("span",null,a(`<${f.address}>`),1)],8,Yt),t("span",ea,a(b===e.value.cc.length-1?"":","),1)]))),128))])])):_("",!0),((me=e.value.bcc)==null?void 0:me.length)&&(e.value.folderName==="sent"||e.value.folderName==="drafts")?(i(),c("div",ta,[t("span",aa,a(l(r)("common.blindCarbonCopy"))+": ",1),t("div",sa,[(i(!0),c(j,null,A(e.value.bcc,(f,b)=>(i(),c("span",{key:b,class:"text-999 flex max-w-full"},[t("div",{class:"ellipsis",title:f.name+" <"+f.address+">","data-cy":"bcc"},[t("span",oa,a(f.name),1),t("span",null,a(`<${f.address}>`),1)],8,la),t("span",na,a(b===e.value.bcc.length-1?"":","),1)]))),128))])])):_("",!0),(fe=e.value.attachments)!=null&&fe.length?(i(),c("div",ia,[t("div",ra,a(l(r)("common.attachments"))+":",1),t("div",ca,[t("span",da,a(l(r)("mail.quantity",{total:e.value.attachments.length})),1),ua,t("div",ma,[t("div",{class:"ellipsis text-blue cursor-pointer max-w-full flex-shrink-0",title:e.value.attachments[0].fileName,onClick:n[2]||(n[2]=f=>je())},a(e.value.attachments[0].fileName),9,fa),e.value.attachments.length>1?(i(),c("span",va,"...")):_("",!0)]),pa])])):_("",!0),t("div",ha,[t("button",{class:"text-blue","data-cy":"show-original-message",onClick:Me},a(l(r)("common.showOriginalMessage")),1),_a,t("button",{class:"text-blue",onClick:Oe},a(l(r)("common.exportEmail")),1)])]))]),e.value.calendar?(i(),c("div",xa,[t("div",ya,[t("div",null,[t("span",ga,a(e.value.calendar[0].summary),1)]),t("div",wa,[t("div",{class:L(l(R)(e.value.calendar[0].start)===l(R)(e.value.calendar[0].end)?"flex space-x-8":"")},[t("span",null,a(l(ot)(e.value.calendar[0].start).year())+" "+a(l(ke)(e.value.calendar[0].start))+" ( "+a(l(Ce)[new Date(e.value.calendar[0].start).getDay()])+" ) ",1),t("span",null,a(l(Ne)(e.value.calendar[0].start)),1)],2),ba,t("div",null,[l(R)(e.value.calendar[0].start)!==l(R)(e.value.calendar[0].end)?(i(),c("span",ka,a(l(ke)(e.value.calendar[0].end))+" ( "+a(l(Ce)[new Date(e.value.calendar[0].end).getDay()])+" ) ",1)):_("",!0),t("span",null,a(l(Ne)(e.value.calendar[0].end)),1)])]),t("div",Ca,[e.value.calendar[0].location?(i(),c("span",Na,a(l(r)("common.location"))+":",1)):_("",!0),B(a(e.value.calendar[0].location),1)]),t("div",qa,[t("div",Ia,a(l(r)("common.participants"))+":",1),t("div",$a,[(i(!0),c(j,null,A(e.value.calendar[0].attendees,(f,b)=>(i(),c("span",{key:f},[B(a(f),1),b+1<(e.value.calendar[0].attendees.length||0)?(i(),c("span",Ea,"\u3001")):_("",!0)]))),128))])])]),t("div",Sa,[e.value.calendar[0].isExpired?(i(),c("div",Oa,a(l(r)("common.theInvitationHasExpired")),1)):(i(),c("div",ja,[e.value.inviteConfirm===0?(i(),c("div",{key:0,ref_key:"invitationButtons",ref:g,class:"flex items-center space-x-32"},[t("div",{class:"flex flex-col items-center justify-center cursor-pointer hover:opacity-70 text-green",onClick:n[3]||(n[3]=f=>V(1))},[q(m,{class:"iconfont icon-yes text-28px mb-8"}),t("div",Aa,a(l(r)("content.yes")),1)]),t("div",{class:"flex flex-col items-center justify-center cursor-pointer hover:opacity-70 text-orange",onClick:n[4]||(n[4]=f=>V(2))},[q(m,{class:"iconfont icon-delete4 text-28px mb-8"}),t("div",Da,a(l(r)("content.no")),1)]),t("div",{class:"flex flex-col items-center justify-center cursor-pointer hover:opacity-70 text-blue",onClick:n[5]||(n[5]=f=>V(3))},[q(m,{class:"iconfont icon-problem text-28px mb-8"}),t("div",La,a(l(r)("content.maybe")),1)])],512)):(i(),c("div",Ma,[t("span",{class:L({"text-999":e.value.inviteConfirm===-1,"text-green":e.value.inviteConfirm===1,"text-orange":e.value.inviteConfirm===2,"text-blue":e.value.inviteConfirm===3})},a(Se(e.value.inviteConfirm)),3),e.value.inviteConfirm!==-1?(i(),c("span",{key:0,class:"ml-16 text-[#979797] cursor-pointer border-l-1 border-[#979797] px-16 hover:underline",onClick:Re},a(l(r)("common.reSelect")),1)):_("",!0)]))]))])])):_("",!0),q(nt,{html:(ve=e.value.html)!=null?ve:"","hide-reply-calendar-button":e.value.calendar===null,class:L(["p-16 leading-6","aa"])},null,8,["html","hide-reply-calendar-button"])]),(pe=e.value.attachments)!=null&&pe.length?(i(),c("div",{key:0,ref_key:"attachmentListRef",ref:F,class:L({"active-background":J.value})},[q(yt,{attachments:e.value.attachments||[],"download-all-attachment-path":e.value.downloadAttachment||""},null,8,["attachments","download-all-attachment-path"])],2)):_("",!0)]}),_:1})],2),q(tt,{ref_key:"extensionDrawerRef",ref:E,"message-id":parseInt((S=l(we)("messageId"))!=null?S:"0"),type:"extendread",height:"h-[calc(100vh-93px)]"},null,8,["message-id","height"])])}}});export{ks as default};