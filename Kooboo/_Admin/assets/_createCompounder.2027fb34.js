import{cc as E,bv as c}from"./url.8f5ec20c.js";function h(u,e,r,L){var f=-1,a=u==null?0:u.length;for(L&&a&&(r=u[++f]);++f<a;)r=e(r,u[f],f,u);return r}var M={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},S=E(M),z=S,Z=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,I="\\u0300-\\u036f",k="\\ufe20-\\ufe2f",D="\\u20d0-\\u20ff",$=I+k+D,j="["+$+"]",w=RegExp(j,"g");function N(u){return u=c(u),u&&u.replace(Z,z).replace(w,"")}var W=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function T(u){return u.match(W)||[]}var H=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function G(u){return H.test(u)}var i="\\ud800-\\udfff",J="\\u0300-\\u036f",y="\\ufe20-\\ufe2f",P="\\u20d0-\\u20ff",V=J+y+P,b="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",Y="\\xac\\xb1\\xd7\\xf7",B="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_="\\u2000-\\u206f",q=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="A-Z\\xc0-\\xd6\\xd8-\\xde",F="\\ufe0e\\ufe0f",R=Y+B+_+q,p="['\u2019]",d="["+R+"]",K="["+V+"]",A="\\d+",Q="["+b+"]",C="["+t+"]",l="[^"+i+R+A+b+t+g+"]",X="\\ud83c[\\udffb-\\udfff]",u0="(?:"+K+"|"+X+")",e0="[^"+i+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",x="["+g+"]",r0="\\u200d",o="(?:"+C+"|"+l+")",x0="(?:"+x+"|"+l+")",s="(?:"+p+"(?:d|ll|m|re|s|t|ve))?",n="(?:"+p+"(?:D|LL|M|RE|S|T|VE))?",v=u0+"?",U="["+F+"]?",f0="(?:"+r0+"(?:"+[e0,O,m].join("|")+")"+U+v+")*",a0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",d0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o0=U+v+f0,s0="(?:"+[Q,O,m].join("|")+")"+o0,n0=RegExp([x+"?"+C+"+"+s+"(?="+[d,x,"$"].join("|")+")",x0+"+"+n+"(?="+[d,x+o,"$"].join("|")+")",x+"?"+o+"+"+s,x+"+"+n,d0,a0,A,s0].join("|"),"g");function c0(u){return u.match(n0)||[]}function i0(u,e,r){return u=c(u),e=r?void 0:e,e===void 0?G(u)?c0(u):T(u):u.match(e)||[]}var b0="['\u2019]",t0=RegExp(b0,"g");function R0(u){return function(e){return h(i0(N(e).replace(t0,"")),u,"")}}export{R0 as c};
