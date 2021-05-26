(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OurWorkDetails"],{"06d8":function(t,e,r){"use strict";r("7365")},"151e":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isWebsiteWorkFetched?r("div",{staticClass:"work-details-wrapper"},[r("h1",{staticClass:"work-details-wrapper__cover-container__title"},[t._v(" "+t._s(t.websiteWork.title)+" ")]),r("div",{staticClass:"work-details-wrapper__cover-container"},[r("div",{staticClass:"work-details-wrapper__cover-statistics"},t._l(t.statistics,(function(e){return r("div",{key:e.id},[r("h1",[r("countTo",{attrs:{startVal:0,endVal:parseFloat(e.value),decimals:t.numberOfDecimalsInStringNumber(e.value),separator:"",duration:2e3}})],1),r("p",[t._v(t._s(e.key))])])})),0),t.websiteWork.sections?r("WorkDetails",{attrs:{websiteWork:t.websiteWork}}):t._e()],1),r("Intersect",{directives:[{name:"show",rawName:"v-show",value:t.worksPage>0,expression:"worksPage > 0"}],on:{enter:t.loadMoreWorkSections}},[r("div",{staticClass:"threshold"},[r("Loading",{attrs:{showLoading:t.showLoading}})],1)])],1):t._e()])},n=[],a=(r("8e6e"),r("ac6a"),r("cadf"),r("456d"),r("96cf"),r("3b8d")),s=r("bd86"),o=r("2f62"),c=r("ec1b"),u=r.n(c),l=r("760e"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isWebsiteWorkFetched?r("div",{staticClass:"work-details-sections"},t._l(t.websiteWork.sections.data,(function(e){return r("div",{key:e.id,staticClass:"work-details-sections__section"},[e.type===t.WORK_SECTIONS_TYPES.NORMAL?r("DetailsNormalSection",{attrs:{section:e}}):r("DetailsSpecialSection",{attrs:{section:e}})],1)})),0):t._e()},h=[],p=r("cc4d"),f=r("8ed0"),m=r("2631");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={props:["websiteWork"],components:{DetailsNormalSection:p["a"],DetailsSpecialSection:f["a"]},computed:b(b({},Object(o["d"])({isWebsiteWorkFetched:function(t){return t.works.isWebsiteWorkFetched}})),{},{WORK_SECTIONS_TYPES:function(){return m}})},v=O,g=(r("2595"),r("2877")),y=Object(g["a"])(v,d,h,!1,null,"649e1e0d",null),k=y.exports,F=r("8932"),V=r("6e87"),S=r("bcb6"),_=(r("28a5"),function(t){return 1===t.split(".").length?0:t.split(".")[1].length}),j=r("774e4");function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var A={data:function(){return{queriedWorksCounts:2,worksPage:0,showLoading:!1}},components:{WorkDetails:k,countTo:u.a,Intersect:l["a"],Loading:F["a"]},computed:P(P({},Object(o["d"])({websiteWork:function(t){return t.works.websiteWork},isWebsiteWorkFetched:function(t){return t.works.isWebsiteWorkFetched}})),{},{statistics:function(){return JSON.parse(Object(S["f"])(this.websiteWork.statistics))}}),methods:P(P(P({},Object(o["b"])({fetchWorkSections:V["a"].works.actions.FETCH_WEBSITE_WORK})),Object(o["c"])({setShowFooterFlag:V["a"].app.mutations.SET_SHOW_FOOTER_FLAG})),{},{numberOfDecimalsInStringNumber:function(t){return _(t)},fetchHeroAndFirstSection:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.generateWorkPayload(!0,!0),t.next=3,this.fetchWorkSections(e);case 3:this.worksPage++;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),generateWorkPayload:function(t,e){var r={id:Object(S["a"])(this.$route.params.workName)};e||(r=P(P({},r),{},{first:this.queriedWorksCounts,page:this.worksPage}));var i={data:r,showSpinner:t,requestSource:"website"};return i},loadMoreWorkSections:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.showLoading||0!==this.websiteWork.sections.data.length&&!this.websiteWork.sections.paginatorInfo.hasMorePages){t.next=7;break}return this.showLoading=!0,e=this.generateWorkPayload(!1,!1),t.next=5,this.fetchWorkSections(e);case 5:this.worksPage++,this.showLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){window.scroll(0,0),this.setShowFooterFlag(!1),this.fetchHeroAndFirstSection()},updated:function(){Object(j["a"])("description-container")}},D=A,x=(r("06d8"),Object(g["a"])(D,i,n,!1,null,"2a9f1655",null));e["default"]=x.exports},2595:function(t,e,r){"use strict";r("4d60")},"4d60":function(t,e,r){},7365:function(t,e,r){},ec1b:function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,r){var i=r(4)(r(1),r(5),null,null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,r,i){return r*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),r=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(r);)r=r.replace(n,"$1"+this.separator+"$2");return this.prefix+r+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),a=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=a=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=a=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,c=0;c<n.length&&(!a||!s);c++)o=n[c],e.requestAnimationFrame=a=a||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];a&&s||(e.requestAnimationFrame=a=function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-i)),n=window.setTimeout((function(){t(e+r)}),r);return i=e+r,n},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=a,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,r,i){var n,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,a=t.default);var o="function"==typeof a?a.options:a;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),r&&(o._scopeId=r),i){var c=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}})),o.computed=c}return{esModule:n,exports:a,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);
//# sourceMappingURL=OurWorkDetails.c30a4bd3.js.map