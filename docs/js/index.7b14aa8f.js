(function(t){function a(a){for(var n,s,i=a[0],r=a[1],c=a[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&d.push(l[s][0]),l[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var r=e[i];0!==l[r]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},l={index:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var p=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("e35a")},"0fc3":function(t,a,e){},"1e09":function(t,a,e){},3736:function(t,a,e){"use strict";var n=e("6e14"),l=e.n(n);l.a},"6e14":function(t,a,e){},"810a":function(t,a,e){},9281:function(t,a,e){},"96e8":function(t,a,e){},a3c3:function(t,a,e){"use strict";var n=e("810a"),l=e.n(n);l.a},b361:function(t,a,e){"use strict";var n=e("9281"),l=e.n(n);l.a},d678:function(t,a,e){"use strict";var n=e("0fc3"),l=e.n(n);l.a},e14d:function(t,a,e){"use strict";var n=e("96e8"),l=e.n(n);l.a},e35a:function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{attrs:{id:"app"}},[t._m(0),t._m(1),t._m(2),e("section",{staticClass:"app-body"},[e("div",{staticClass:"demo"},[e("div",{staticClass:"demo-title"},[t._v("Basic Usage")]),e("div",{staticClass:"demo-content"},[e("pl-loading"),e("pl-loading",{attrs:{type:"beta"}}),e("pl-loading",{attrs:{type:"gamma"}}),e("pl-loading",{attrs:{type:"delta"}})],1)]),e("div",{staticClass:"demo"},[e("div",{staticClass:"demo-title"},[t._v("Change Size By FontSize")]),e("div",{staticClass:"demo-content"},[e("pl-loading",{staticStyle:{"font-size":"36px"}}),e("pl-loading",{staticStyle:{"font-size":"36px"},attrs:{type:"beta"}}),e("pl-loading",{staticStyle:{"font-size":"36px"},attrs:{type:"gamma"}}),e("pl-loading",{staticStyle:{"font-size":"36px"},attrs:{type:"delta"}})],1)]),e("div",{staticClass:"demo"},[e("div",{staticClass:"demo-title"},[t._v("Loading Color")]),e("div",{staticClass:"demo-content"},t._l(["primary","success","warn","error","info"],(function(t){return e("div",{key:t},[e("pl-loading",{attrs:{color:t}}),e("pl-loading",{attrs:{type:"beta",color:t}}),e("pl-loading",{attrs:{type:"gamma",color:t}}),e("pl-loading",{attrs:{type:"delta",color:t}})],1)})),0)]),e("div",{staticClass:"demo"},[e("div",{staticClass:"demo-title"},[t._v("Custom Color By Css")]),e("div",{staticClass:"demo-content custom-color"},[e("pl-loading"),e("pl-loading",{attrs:{type:"beta"}}),e("pl-loading",{attrs:{type:"gamma"}}),e("pl-loading",{attrs:{type:"delta"}})],1)])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"app-head"},[e("label",{staticClass:"app-head-content"},[t._v("\n            Martsforever\n        ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"app-desc"},[e("label",{staticClass:"app-desc-title"},[t._v("plain-loading")]),e("label",{staticClass:"app-desc-desc"},[t._v("A loading component based on Vue.js")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"app-toolbar"},[e("a",{staticClass:"app-toolbar-item app-toolbar-item-active",attrs:{href:""}},[t._v("Example")]),e("a",{staticClass:"app-toolbar-item",attrs:{href:""}},[t._v("Install")]),e("a",{staticClass:"app-toolbar-item",attrs:{href:""}},[t._v("Github")])])}],s={name:"app",components:{}},i=s,r=(e("d678"),e("2877")),c=Object(r["a"])(i,l,o,!1,null,null,null),p=c.exports,u=(e("7f7f"),e("1e09"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pl-loading-"+t.type,{tag:"component",staticClass:"pl-loading",attrs:{color:t.color}})}),d=[],f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pl-loading-alpha",class:["pl-loading-alpha-color-"+t.color]},[e("span",{staticClass:"pl-loading-alpha-tag"},t._l([1,2,3,4,5,6,7,8,9,10,11,12],(function(t){return e("span",{key:t,staticClass:"pl-loading-tag"})})),0)])},g=[],m={name:"pl-loading-alpha",props:{color:{type:String,default:"info"}}},v=m,y=(e("b361"),Object(r["a"])(v,f,g,!1,null,null,null)),b=y.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pl-loading-beta",class:["pl-loading-beta-color-"+t.color]},t._l(t.tagNum,(function(t){return e("span",{key:t,staticClass:"pl-loading-beta-tag",class:["pl-loading-beta-tag-"+t]},[e("span",{staticClass:"pl-loading-tag",class:["pl-loading-tag-"+t]})])})),0)},h=[],C={name:"pl-loading-beta",props:{color:{type:String,default:"info"}},data:function(){return{p_tagNum:10}},computed:{tagNum:function(){for(var t=[],a=0;a<this.p_tagNum;a++)t.push(a+1);return t}}},S=C,x=(e("3736"),Object(r["a"])(S,_,h,!1,null,null,null)),O=x.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pl-loading-gamma",class:["pl-loading-gamma-color-"+t.color]},t._l(t.tagNum,(function(t){return e("span",{key:t,staticClass:"pl-loading-gamma-tag",class:["pl-loading-gamma-tag-"+t]},[e("span",{staticClass:"pl-loading-tag",class:["pl-loading-tag-"+t]})])})),0)},w=[],P={name:"pl-loading-gamma",props:{color:{type:String,default:"info"}},data:function(){return{p_tagNum:5}},computed:{tagNum:function(){for(var t=[],a=0;a<this.p_tagNum;a++)t.push(a+1);return t}}},E=P,N=(e("a3c3"),Object(r["a"])(E,j,w,!1,null,null,null)),$=N.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pl-loading-delta",class:["pl-loading-delta-color-"+t.color]},t._l(t.tagSizes,(function(t){return e("div",{key:t,staticClass:"pl-loading-delta-tag pl-loading-tag",class:["pl-loading-tag-"+t]})})),0)},z=[],L={name:"pl-loading-delta",props:{color:{type:String,default:"info"}},data:function(){return{tagNum:5}},computed:{tagSizes:function(){for(var t=[],a=0;a<this.tagNum;a++)t.push(a);return t}}},M=L,B=(e("e14d"),Object(r["a"])(M,k,z,!1,null,null,null)),T=B.exports,A={name:"pl-loading",components:{PlLoadingDelta:T,PlLoadingGamma:$,PlLoadingBeta:O,PlLoadingAlpha:b},props:{type:{type:String,default:"alpha"},color:{type:String,default:"info"}}},G=A,J=Object(r["a"])(G,u,d,!1,null,null,null),D=J.exports;D.install=function(t){return t.component(D.name,D)};var F=D;n["a"].config.productionTip=!1,n["a"].use(F),new n["a"]({render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=index.7b14aa8f.js.map