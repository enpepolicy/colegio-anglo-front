(function(t){function e(e){for(var o,u,s=e[0],i=e[1],c=e[2],f=0,p=[];f<s.length;f++)u=s[f],r[u]&&p.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/colegio-anglo-front/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("VueScrollProgress"),n("Header"),n("router-view",{attrs:{id:"vista"}})],1)},a=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{id:"caja",column:""}},[o("v-layout",{attrs:{"justify-space-between":"",row:"",wrap:"","ma-5":""}},[o("v-layout",{attrs:{"justify-center":"",md4:"",xs12:"","mb-5":""}},[o("v-img",{attrs:{"min-width":"140px","max-width":"250px",src:n("9b19"),alt:"Logo Colegio Anglo Americano",contain:""}})],1),o("v-flex",{attrs:{md8:"",xs12:""}},[o("v-tabs",{attrs:{color:"transparent","show-arrows":"",dark:"",grow:"",right:"","slider-color":"white"}},[o("v-tab",{attrs:{to:"/"},on:{click:function(e){t.menu="Bienvenido"}}},[t._v("\n          Inicio\n        ")]),o("v-tab",{attrs:{to:"/admisiones"},on:{click:function(e){t.menu="¿Quieres conocernos?"}}},[t._v("\n          Admisiones\n        ")]),o("v-tab",{attrs:{to:"/cursos"},on:{click:function(e){t.menu="Cursos de punta para tus hijos"}}},[t._v("\n          Cursos\n        ")]),o("v-tab",{attrs:{to:"/departamentos"},on:{click:function(e){t.menu="¿Cómo nos organizamos?"}}},[t._v("\n          Departamentos\n        ")]),o("v-tab",{attrs:{to:"/icfes"},on:{click:function(e){t.menu="Nos preparamos para los examenes SABER"}}},[t._v("\n          Icfes\n        ")])],1)],1)],1),o("v-layout",{attrs:{"align-center":"","justify-space-around":""}},[o("v-flex",{attrs:{xs8:""}},[o("h1",{attrs:{id:"titulo"}},[t._v(t._s(t.menu))])])],1),o("v-layout",{attrs:{"align-end":"","justify-center":"",row:"","mb-4":""}},[o("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#vista",expression:"'#vista'"}],attrs:{fab:"",outline:"",dark:"",id:"btnFlecha"}},[o("v-icon",[t._v("expand_more")])],1)],1)],1)},s=[],i={data:function(){return{menu:"Colegio Colombo Americano"}},methods:{}},c=i,l=(n("b8bf"),n("2877")),f=Object(l["a"])(c,u,s,!1,null,"7a6bee6a",null),p=f.exports,d={name:"App",components:{Header:p},data:function(){return{}}},v=d,m=(n("034f"),Object(l["a"])(v,r,a,!1,null,null,null)),b=m.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":"",column:""}},[n("h1",[t._v("Home")])])},y=[],_={},w=_,x=(n("8321"),Object(l["a"])(w,g,y,!1,null,"920e403e",null)),j=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n  Lo sentimos, no hemos encontrado la pagina.\n  Err: 404\n")])},k=[],S={},C=S,P=Object(l["a"])(C,O,k,!1,null,null,null),A=P.exports;o["default"].use(h["a"]);var E=new h["a"]({routes:[{path:"/",name:"home",component:j},{path:"*",component:A}],mode:"history"}),$=n("ce5b"),M=n.n($),H=(n("bf40"),n("275b")),T=n("f13c"),B=n.n(T);o["default"].use(M.a,{iconfont:"md"}),o["default"].config.productionTip=!1,o["default"].use(H["a"]),o["default"].use(B.a,{container:"body",duration:1500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new o["default"]({render:function(t){return t(b)},router:E}).$mount("#app")},"69a0":function(t,e,n){},8321:function(t,e,n){"use strict";var o=n("b46a"),r=n.n(o);r.a},"85ec":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.592d5b6c.svg"},b46a:function(t,e,n){},b8bf:function(t,e,n){"use strict";var o=n("69a0"),r=n.n(o);r.a}});
//# sourceMappingURL=app.2436cd5b.js.map