import{d as S}from"./dayjs.min.35b12e7a.js";import{f as C,d as I}from"./i18n.2d8b30eb.js";var Z={exports:{}};(function(n,D){(function(a,l){n.exports=l()})(C,function(){var a="minute",l=/[+-]\d\d(?::?\d\d)?/g,p=/([+-]|\d\d)/g;return function(O,f,d){var r=f.prototype;d.utc=function(t){var e={date:t,utc:!0,args:arguments};return new f(e)},r.utc=function(t){var e=d(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),a):e},r.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var z=r.parse;r.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),z.call(this,t)};var y=r.init;r.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else y.call(this)};var U=r.utcOffset;r.utcOffset=function(t,e){var m=this.$utils().u;if(m(t))return this.$u?0:m(this.$offset)?U.call(this):this.$offset;if(typeof t=="string"&&(t=function(h){h===void 0&&(h="");var M=h.match(l);if(!M)return null;var v=(""+M[0]).match(p)||["-",0,0],Y=v[0],g=60*+v[1]+ +v[2];return g===0?0:Y==="+"?g:-g}(t),t===null))return this;var o=Math.abs(t)<=16?60*t:t,u=this;if(e)return u.$offset=o,u.$u=t===0,u;if(t!==0){var $=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(u=this.local().add(o+$,a)).$offset=o,u.$x.$localOffset=$}else u=this.utc();return u};var i=r.format;r.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return i.call(this,e)},r.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var c=r.toDate;r.toDate=function(t){return t==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var s=r.diff;r.diff=function(t,e,m){if(t&&this.$u===t.$u)return s.call(this,t,e,m);var o=this.local(),u=d(t).local();return s.call(o,u,e,m)}}})})(Z);var L=Z.exports,b={exports:{}};(function(n,D){(function(a,l){n.exports=l()})(C,function(){var a={year:0,month:1,day:2,hour:3,minute:4,second:5},l={};return function(p,O,f){var d,r=function(i,c,s){s===void 0&&(s={});var t=new Date(i),e=function(m,o){o===void 0&&(o={});var u=o.timeZoneName||"short",$=m+"|"+u,h=l[$];return h||(h=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:m,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:u}),l[$]=h),h}(c,s);return e.formatToParts(t)},z=function(i,c){for(var s=r(i,c),t=[],e=0;e<s.length;e+=1){var m=s[e],o=m.type,u=m.value,$=a[o];$>=0&&(t[$]=parseInt(u,10))}var h=t[3],M=h===24?0:h,v=t[0]+"-"+t[1]+"-"+t[2]+" "+M+":"+t[4]+":"+t[5]+":000",Y=+i;return(f.utc(v).valueOf()-(Y-=Y%1e3))/6e4},y=O.prototype;y.tz=function(i,c){i===void 0&&(i=d);var s=this.utcOffset(),t=this.toDate(),e=t.toLocaleString("en-US",{timeZone:i}),m=Math.round((t-new Date(e))/1e3/60),o=f(e).$set("millisecond",this.$ms).utcOffset(15*-Math.round(t.getTimezoneOffset()/15)-m,!0);if(c){var u=o.utcOffset();o=o.add(s-u,"minute")}return o.$x.$timezone=i,o},y.offsetName=function(i){var c=this.$x.$timezone||f.tz.guess(),s=r(this.valueOf(),c,{timeZoneName:i}).find(function(t){return t.type.toLowerCase()==="timezonename"});return s&&s.value};var U=y.startOf;y.startOf=function(i,c){if(!this.$x||!this.$x.$timezone)return U.call(this,i,c);var s=f(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return U.call(s,i,c).tz(this.$x.$timezone,!0)},f.tz=function(i,c,s){var t=s&&c,e=s||c||d,m=z(+f(),e);if(typeof i!="string")return f(i).tz(e);var o=function(M,v,Y){var g=M-60*v*1e3,x=z(g,Y);if(v===x)return[g,v];var w=z(g-=60*(x-v)*1e3,Y);return x===w?[g,x]:[M-60*Math.min(x,w)*1e3,Math.max(x,w)]}(f.utc(i,t).valueOf(),m,e),u=o[0],$=o[1],h=f(u).utcOffset($);return h.$x.$timezone=e,h},f.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},f.tz.setDefault=function(i){d=i}}})})(b);var N=b.exports;S.extend(L);S.extend(N);const T=I.global.t;function k(){return S.tz.guess()}function G(n){return S(n).utc().local().format()}function H(n,D="YYYY-MM-DD"){return S(n).format(D)}function P(n){return n?H(n,"YYYY-MM-DD HH:mm:ss"):""}function W(n){return H(n,"HH:mm:ss")}function q(n){return H(n,"MM-DD")}function A(n){return H(n,"YYYY-MM")}function B(n){return H(n,"HH:mm")}function E(n,D,a){const l=new Date(n),p=new Date(D),O=new Date(a),f=l.getTime()-p.getTime(),d=l.getTime()-O.getTime();return!(f<0||d>0)}function J(n,D){const a=new Date(n);a.setDate(a.getDate()+D);const l=a.getFullYear(),p=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,O=a.getDate()<10?"0"+a.getDate():a.getDate();return l+"-"+p+"-"+O}const K=[T("common.sunday"),T("common.monday"),T("common.tuesday"),T("common.wednesday"),T("common.thursday"),T("common.friday"),T("common.saturday")];export{H as a,q as b,B as c,G as d,W as e,A as f,k as g,J as h,E as i,P as u,K as w};
