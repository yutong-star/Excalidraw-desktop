import{m as n}from"./userWorker.b3a6730b.js";function K(e){e.addAction({id:"ManualTriggerSuggest",label:"ManualTriggerSuggest",keybindings:[n.KeyMod.CtrlCmd|n.KeyCode.KeyJ,n.KeyMod.CtrlCmd|n.KeyCode.Space,n.KeyMod.CtrlCmd|n.KeyMod.Alt|n.KeyCode.Space],precondition:null,keybindingContext:null,contextMenuGroupId:"ManualTriggerSuggest",contextMenuOrder:1.5,run:function(t){t.getAction("editor.action.triggerSuggest").run()}})}function L(e,t){n.languages.typescript.javascriptDefaults.addExtraLib(e,t),n.languages.typescript.typescriptDefaults.addExtraLib(e,t)}function N(e){var t;((t=e.getModel())==null?void 0:t.getLanguageId())==="html"&&e.addAction({id:"editor.action.toggleComment",label:"Toggle Line Comment",keybindings:[n.KeyMod.CtrlCmd|n.KeyCode.Slash],precondition:"editorLangId == html",run:function(o){var f,p;const i=Array.from((f=o.getSelections())!=null?f:[]);if(!i.length)return;const r=o.getModel(),S=r.getValue(),[b,d]=h(i,a=>M(S,r.getOffsetAt(a.getStartPosition())));d.length&&(e.setSelections(d),(p=e.getAction("editor.action.commentLine"))==null||p.run(),e.setSelections(i));const m=[];b.forEach((a,E)=>{const y=A(r,a);let l=!0,c=Number.MAX_SAFE_INTEGER;for(const s of y){const g=s.search(/\S/);g<0||(g<c&&(c=g),l&&!s.match(/^\s*?\/\//)&&(l=!1))}c===Number.MAX_SAFE_INTEGER&&(c=0);const C=" ".repeat(c);let u=a.getStartPosition().lineNumber;for(const s of y)m.push({range:new n.Range(u,1,u,s.length+1),text:l?s.replace(/\/\/\s?/,""):`${C}// ${s.replace(C,"")}`}),u++}),e.executeEdits("my-unique-id",m)}})}const M=(e,t)=>{const o=e.indexOf("<\/script",t);if(o<0)return!1;const i=e.indexOf("<script",t);return i<0?!0:o<i},A=(e,t)=>Array.from(function*(){const{startLineNumber:o,endLineNumber:i}=t;for(let r=o;r<i+1;r++)yield e.getLineContent(r)}()),h=(e,t)=>Array.from(e).reduce(([o,i],r)=>((t(r)?o:i).push(r),[o,i]),[[],[]]);export{L as a,K as b,N as r};
