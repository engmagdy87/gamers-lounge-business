(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Services"],{"0211":function(e,t,r){"use strict";r("481a")},"02f4":function(e,t,r){var n=r("4588"),i=r("be13");e.exports=function(e){return function(t,r){var c,o,s=String(i(t)),a=n(r),u=s.length;return a<0||a>=u?e?"":void 0:(c=s.charCodeAt(a),c<55296||c>56319||a+1===u||(o=s.charCodeAt(a+1))<56320||o>57343?e?s.charAt(a):c:e?s.slice(a,a+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"1c3e":function(e,t,r){},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),c=r("79e5"),o=r("be13"),s=r("2b4c"),a=r("520a"),u=s("species"),l=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=s(e),h=!c((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=h?!c((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[d](""),!t})):void 0;if(!h||!p||"replace"===e&&!l||"split"===e&&!f){var v=/./[d],g=r(o,d,""[e],(function(e,t,r,n,i){return t.exec===a?h&&!i?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),b=g[0],m=g[1];n(String.prototype,e,b),i(RegExp.prototype,d,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),i=r("cb7c"),c=r("ebd6"),o=r("0390"),s=r("9def"),a=r("5f1b"),u=r("520a"),l=r("79e5"),f=Math.min,d=[].push,h="split",p="length",v="lastIndex",g=4294967295,b=!l((function(){RegExp(g,"y")}));r("214f")("split",2,(function(e,t,r,l){var m;return m="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(i,e,t);var c,o,s,a=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?g:t>>>0,b=new RegExp(e.source,l+"g");while(c=u.call(b,i)){if(o=b[v],o>f&&(a.push(i.slice(f,c.index)),c[p]>1&&c.index<i[p]&&d.apply(a,c.slice(1)),s=c[0][p],f=o,a[p]>=h))break;b[v]===c.index&&b[v]++}return f===i[p]?!s&&b.test("")||a.push(""):a.push(i.slice(f)),a[p]>h?a.slice(0,h):a}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var i=e(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,i,n):m.call(String(i),r,n)},function(e,t){var n=l(m,e,this,t,m!==r);if(n.done)return n.value;var u=i(e),d=String(this),h=c(u,RegExp),p=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),x=new h(b?u:"^(?:"+u.source+")",v),y=void 0===t?g:t>>>0;if(0===y)return[];if(0===d.length)return null===a(x,d)?[d]:[];var w=0,S=0,E=[];while(S<d.length){x.lastIndex=b?S:0;var _,O=a(x,b?d:d.slice(S));if(null===O||(_=f(s(x.lastIndex+(b?0:S)),d.length))===w)S=o(d,S,p);else{if(E.push(d.slice(w,S)),E.length===y)return E;for(var j=1;j<=O.length-1;j++)if(E.push(O[j]),E.length===y)return E;S=w=_}}return E.push(d.slice(w)),E}]}))},"481a":function(e,t,r){},"4e44":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["hero-wrapper",!e.heroImage.includes("http")&&"bg-image"],style:{backgroundImage:"url("+e.heroImage+")"}},[e._t("hero-content")],2)},i=[],c={props:{heroImage:{type:String,default:""}}},o=c,s=(r("0211"),r("2877")),a=Object(s["a"])(o,n,i,!1,null,"facb2856",null);t["a"]=a.exports},"520a":function(e,t,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,s="lastIndex",a=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[s]||0!==t[s]}(),u=void 0!==/()??/.exec("")[1],l=a||u;l&&(o=function(e){var t,r,o,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),a&&(t=f[s]),o=i.call(f,e),a&&o&&(f[s]=f.global?o.index+o[0].length:t),u&&o&&o.length>1&&c.call(o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var c=r.call(e,t);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"760e":function(e,t,r){"use strict";var n=r("2b0e"),i=function(e){n["a"].config.silent||console.warn(e)};t["a"]={name:"intersect",abstract:!0,props:{threshold:{type:Array,required:!1,default:function(){return[0,.2]}},root:{type:"undefined"!==typeof HTMLElement?HTMLElement:Object,required:!1,default:function(){return null}},rootMargin:{type:String,required:!1,default:function(){return"0px 0px 0px 0px"}}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting?e.$emit("enter",[t[0]]):e.$emit("leave",[t[0]]),e.$emit("change",[t[0]])}),{threshold:this.threshold,root:this.root,rootMargin:this.rootMargin}),this.$nextTick((function(){if(e.$slots.default&&e.$slots.default.length>1)i("[VueIntersect] You may only wrap one element in a <intersect> component.");else if(!e.$slots.default||e.$slots.default.length<1)return void i("[VueIntersect] You must have one child inside a <intersect> component.");e.observer.observe(e.$slots.default[0].elm)}))},destroyed:function(){this.$emit("destroyed"),this.observer.disconnect()},render:function(){return this.$slots.default?this.$slots.default[0]:null}}},"77df":function(e,t,r){"use strict";r("1c3e")},8932:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["loading-wrapper",e.showLoading?"":"loading-wrapper--hide"]},[e._m(0)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lds-ring"},[r("div"),r("div"),r("div"),r("div")])}],c={props:["showLoading"]},o=c,s=(r("77df"),r("2877")),a=Object(s["a"])(o,n,i,!1,null,"0a1ef16e",null);t["a"]=a.exports},"8c43":function(e,t,r){"use strict";r("eec3")},"98a6":function(e,t,r){},a481:function(e,t,r){"use strict";var n=r("cb7c"),i=r("4bf8"),c=r("9def"),o=r("4588"),s=r("0390"),a=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,v){return[function(n,i){var c=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,c,i):r.call(String(c),n,i)},function(e,t){var i=v(r,e,this,t);if(i.done)return i.value;var f=n(e),d=String(this),h="function"===typeof t;h||(t=String(t));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var y=a(f,d);if(null===y)break;if(x.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=s(d,c(f.lastIndex),m))}for(var S="",E=0,_=0;_<x.length;_++){y=x[_];for(var O=String(y[0]),j=u(l(o(y.index),d.length),0),k=[],I=1;I<y.length;I++)k.push(p(y[I]));var $=y.groups;if(h){var C=[O].concat(k,j,d);void 0!==$&&C.push($);var F=String(t.apply(void 0,C))}else F=g(O,d,j,k,$,t);j>=E&&(S+=d.slice(E,j)+F,E=j+O.length)}return S+d.slice(E)}];function g(e,t,n,c,o,s){var a=n+e.length,u=c.length,l=h;return void 0!==o&&(o=i(o),l=d),r.call(s,l,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(a);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>u){var d=f(l/10);return 0===d?r:d<=u?void 0===c[d-1]?i.charAt(1):c[d-1]+i.charAt(1):r}s=c[l-1]}return void 0===s?"":s}))}}))},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bcb6:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return s}));r("a481"),r("ac6a"),r("28a5");var n=function(e){return e.split(" ").filter((function(e){return""!==e})).join("-").toLowerCase()},i=function(e){return e.split("-")[0]},c=function(e){return e.split("-").slice(1).join(" ")},o=function(e){return e.replace(/"/g,"'")},s=function(e){return e.replace(/'/g,'"')}},c7e8:function(e,t,r){},ca67:function(e,t,r){"use strict";r("98a6")},cac6:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["half-filled-box",e.isButton&&"half-filled-box--is-button"],attrs:{role:"button"},on:{click:e.onClickAction}},[e._t("content")],2)},i=[],c={props:{isButton:{type:Boolean,default:!1},onClickAction:{type:Function,default:function(){}}}},o=c,s=r("2877"),a=Object(s["a"])(o,n,i,!1,null,null,null);t["a"]=a.exports},d0b2:function(e,t,r){"use strict";r("c7e8")},eec3:function(e,t,r){},f115:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"services-wrapper"},[r("ServicesMainPage")],1)},i=[],c=(r("4360"),r("6e87")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isServicesFetched?r("div",[r("ServicesHero"),r("div",{staticClass:"services-page-wrapper row"},e._l(e.services.data,(function(t){return r("div",{key:t.id,staticClass:"services-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-4"},[r("router-link",{attrs:{to:"/services/"+t.id+"-"+e.reformatURL(t.title)}},[r("div",{staticClass:"services-page-wrapper__content",on:{click:function(t){return e.setIsServiceFetched(!1)}}},[r("img",{attrs:{src:t.img_card.url,draggable:"false"}}),r("div",{staticClass:"services-page-wrapper__text"},[r("h2",[e._v(e._s(t.title))])])])])],1)})),0),r("Intersect",{on:{enter:e.loadMoreWorks}},[r("div",{staticClass:"threshold"},[r("Loading",{attrs:{showLoading:e.showLoading}})],1)])],1):e._e()},s=[],a=(r("8e6e"),r("96cf"),r("3b8d")),u=(r("ac6a"),r("cadf"),r("456d"),r("bd86")),l=r("2f62"),f=r("760e"),d=r("8932"),h=r("bcb6"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Hero",{scopedSlots:e._u([{key:"hero-content",fn:function(){return[r("div",{staticClass:"row align-items-end h-100 justify-content-center services-container"},[r("HalfClippedShape",{scopedSlots:e._u([{key:"content",fn:function(){return[r("div",{staticClass:"services-container__heroContent"},[r("h1",[e._v("FEEL THE EXCITEMENT OF OUR GAMES")]),r("p",[e._v(" Gamers Lounge is the main catalyst to establish the Esports scene In the Middle East & North Africa regions, Playing an important role to unify the gaming community ")])])]},proxy:!0}])})],1)]},proxy:!0}])})],1)},v=[],g=r("4e44"),b=r("cac6"),m={components:{Hero:g["a"],HalfClippedShape:b["a"]}},x=m,y=(r("d0b2"),r("2877")),w=Object(y["a"])(x,p,v,!1,null,"01a3e6ba",null),S=w.exports;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={data:function(){return{queriedServicesCounts:8,showLoading:!1}},components:{ServicesHero:S,Intersect:f["a"],Loading:d["a"]},computed:_({},Object(l["d"])({services:function(e){return e.services.services},isServicesFetched:function(e){return e.services.isServicesFetched}})),methods:_(_(_({},Object(l["b"])({fetchServices:c["a"].services.actions.FETCH_SERVICES})),Object(l["c"])({setShowFooterFlag:c["a"].app.mutations.SET_SHOW_FOOTER_FLAG,setShowHeaderFlag:c["a"].app.mutations.SET_SHOW_HEADER_FLAG,setIsServiceFetched:c["a"].services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED})),{},{reformatURL:function(e){return Object(h["d"])(e)},generateWorkPayload:function(e){var t={first:this.queriedServicesCounts,page:Object.keys(this.services).length>0?this.services.paginatorInfo.currentPage+1:1,isEnabled:!0},r={data:t,requestSource:"website",showSpinner:e};return r},loadMoreWorks:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.generateWorkPayload(!1),!(Object.keys(this.services).length>0)){e.next=7;break}if(this.showLoading||!this.services.paginatorInfo.hasMorePages){e.next=7;break}return this.showLoading=!0,e.next=6,this.fetchServices(t);case 6:this.showLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){if(this.isServicesFetched)Object.keys(this.services).length>0?(this.setShowHeaderFlag(!0),this.services.paginatorInfo.hasMorePages||this.setShowFooterFlag(!0)):this.setShowHeaderFlag(!0);else{this.setShowFooterFlag(!1);var e=this.generateWorkPayload(!0);this.fetchServices(e)}},updated:function(){Object.keys(this.services).length>0&&(this.services.paginatorInfo.hasMorePages||this.setShowFooterFlag(!0))}},j=O,k=(r("8c43"),Object(y["a"])(j,o,s,!1,null,"6e80091e",null)),I=k.exports,$={components:{ServicesMainPage:I}},C=$,F=(r("ca67"),Object(y["a"])(C,n,i,!1,null,"106dbec7",null));t["default"]=F.exports}}]);
//# sourceMappingURL=Services.8258264c.js.map