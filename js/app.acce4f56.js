(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"70c87f8a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/qrscan/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e._v(" barcode scanner "),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}})],1),n("v-main",[n("router-view")],1)],1)},a=[],c={name:"App",data:function(){return{}}},u=c,s=n("2877"),i=n("6544"),l=n.n(i),f=n("7496"),p=n("40dc"),b=n("8336"),d=n("f6c4"),m=n("2fa4"),v=Object(s["a"])(u,o,a,!1,null,null,null),h=v.exports;l()(v,{VApp:f["a"],VAppBar:p["a"],VBtn:b["a"],VMain:d["a"],VSpacer:m["a"]});n("d3b7"),n("3ca3"),n("ddb0");var _=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("scanner")],1)},g=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.items.lenth>0?n("v-alert",{attrs:{border:"right",color:"blue-grey",dark:""}},[e._v(" "+e._s(e.items[0])+" ")]):e._e(),n("qrcode-scanner",{staticStyle:{width:"450px"},attrs:{qrbox:250,fps:10},on:{result:e.onScan}}),n("v-btn",{attrs:{block:""},on:{click:e.copy}},[e._v(" result (copy) ")]),n("ul",e._l(e.items,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0),n("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.msg)+" ")]),n("v-alert",{attrs:{border:"bottom",color:"pink darken-1",dark:""}},[e._v(" 새로고침이 되면 데이터가 사라집니다. 주의하세요! ")])],1)},S=[],O=n("53ca"),E=(n("a15b"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"qr-code-full-region"}})])}],j=(n("a9e3"),n("784e")),x=[j["b"].QR_CODE,j["b"].UPC_A,j["b"].UPC_E,j["b"].AZTEC,j["b"].CODABAR,j["b"].CODE_39,j["b"].CODE_93,j["b"].CODE_128,j["b"].DATA_MATRIX,j["b"].MAXICODE,j["b"].ITF,j["b"].EAN_13,j["b"].EAN_8,j["b"].PDF_417,j["b"].RSS_14,j["b"].RSS_EXPANDED,j["b"].UPC_EAN_EXTENSION],A={name:"qrcode-scanner",props:{qrbox:{type:Number,default:250},fps:{type:Number,default:10}},mounted:function(){var e={fps:this.fps,qrbox:this.qrbox,formatsToSupport:x},t=new j["a"]("qr-code-full-region",e);t.render(this.onScanSuccess)},methods:{onScanSuccess:function(e,t){console.log(e),console.log(t),this.$emit("result",e,t)}}},P=A,C=Object(s["a"])(P,E,w,!1,null,null,null),T=C.exports,q={name:"Scanner",components:{QrcodeScanner:T},data:function(){return{items:[],snackbar:!1,msg:"My timeout is set to 2000.",timeout:2e3}},methods:{onScan:function(e,t){console.log(e),console.log(Object(O["a"])(e)),console.log(t),console.log(Object(O["a"])(t)),e!=this.items[0]&&this.items.unshift(e)},copy:function(){var e=this,t=this.items.join("\n");navigator.clipboard.writeText(t).then((function(){e.timeout="2000",e.msg="복사에 성공하였습니다",e.snackbar=!0})).catch((function(t){e.timeout="2000",e.msg=t,e.snackbar=!0}))}}},D=q,M=n("0798"),N=n("2db4"),V=Object(s["a"])(D,k,S,!1,null,null,null),$=V.exports;l()(V,{VAlert:M["a"],VBtn:b["a"],VSnackbar:N["a"]});var R={name:"Home",components:{Scanner:$}},B=R,I=Object(s["a"])(B,y,g,!1,null,null,null),X=I.exports;r["a"].use(_["a"]);var U=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],F=new _["a"]({mode:"history",base:"/qrscan/",routes:U}),H=F,J=n("2f62");r["a"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=n("f309");r["a"].use(Q["a"]);var Z=new Q["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:H,store:L,vuetify:Z,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.acce4f56.js.map