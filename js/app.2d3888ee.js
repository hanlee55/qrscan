(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"70c87f8a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/qrscan/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e._v(" barcode scanner "),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("Latest Release")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],u={name:"App",data:function(){return{}}},c=u,s=n("2877"),i=n("6544"),l=n.n(i),p=n("7496"),f=n("40dc"),d=n("8336"),b=n("132d"),m=n("f6c4"),v=n("2fa4"),h=Object(s["a"])(c,o,a,!1,null,null,null),_=h.exports;l()(h,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VIcon:b["a"],VMain:m["a"],VSpacer:v["a"]});n("d3b7"),n("3ca3"),n("ddb0");var y=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("scanner")],1)},O=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("qrcode-scanner",{staticStyle:{width:"500px"},attrs:{qrbox:250,fps:10},on:{result:e.onScan}}),n("h1",[e._v("result")]),n("ul",e._l(e.items,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)],1)},E=[],w=n("53ca"),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"qr-code-full-region"}})])}],x=(n("a9e3"),n("784e")),P=[x["b"].QR_CODE,x["b"].UPC_A,x["b"].UPC_E,x["b"].AZTEC,x["b"].CODABAR,x["b"].CODE_39,x["b"].CODE_93,x["b"].CODE_128,x["b"].DATA_MATRIX,x["b"].MAXICODE,x["b"].ITF,x["b"].EAN_13,x["b"].EAN_8,x["b"].PDF_417,x["b"].RSS_14,x["b"].RSS_EXPANDED,x["b"].UPC_EAN_EXTENSION],C={name:"qrcode-scanner",props:{qrbox:{type:Number,default:250},fps:{type:Number,default:10}},mounted:function(){var e={fps:this.fps,qrbox:this.qrbox,formatsToSupport:P},t=new x["a"]("qr-code-full-region",e);t.render(this.onScanSuccess)},methods:{onScanSuccess:function(e,t){console.log(e),console.log(t),this.$emit("result",e,t)}}},q=C,T=Object(s["a"])(q,j,A,!1,null,null,null),D=T.exports,k={name:"Scanner",components:{QrcodeScanner:D},data:function(){return{items:[]}},methods:{onScan:function(e,t){console.log(e),console.log(Object(w["a"])(e)),console.log(t),console.log(Object(w["a"])(t)),this.items.unshift(e)}}},N=k,M=Object(s["a"])(N,S,E,!1,null,null,null),$=M.exports,R={name:"Home",components:{Scanner:$}},V=R,I=Object(s["a"])(V,g,O,!1,null,null,null),X=I.exports;r["a"].use(y["a"]);var B=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new y["a"]({mode:"history",base:"/qrscan/",routes:B}),U=L,F=n("2f62");r["a"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=n("f309");r["a"].use(J["a"]);var Q=new J["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:U,store:H,vuetify:Q,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.2d3888ee.js.map