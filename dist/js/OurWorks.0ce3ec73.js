(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OurWorks"],{"053c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAADqklEQVRYhcWZXYhVVRTH1zYbcCRHRCWFQlPDCj8KPxJ6EqkYUZiIggbNgoFUBEEMhHmJ8UFEEXvRhxIKJKOCnhIEkSyZiT4ecixf/GD8oOtEjqKJpvOLJfvAYnnuvefrMgsOXNbe+79+5+599ll7nSAVGDBOREK81BCR0RACZdULAQIvichaEVkpIotF5Ik6Xa+JSL+InBCRb0IIl8vhNoZqA3qAQYrZKHAMeLUVcG8AFxtg/QcMAaeBP4GrTW7hB2BhFWAdwFcpAe4D3wEfAM8Dj6eMnQi8DOwAfq2j0RvXbyG4ecA5J3ob2AXMLKD3InAkBfSo3kxesQXAsBP6FngqL1iK9grgjNP+SWcrq8Ac4C83FVvKgrkYE4DPHORJ9WcZeNoMugOsrhLOxdvpID9pNuCg6fwA6GoVnIm5z0G+Xa/jCtext9VwMe64uD8mVktdj8CA6fRj1scfWB7/+cdKQD4JXDfxd/kOq0yj7viLcsDdiOMOl4TcYhhuApNt49em8cuMglOBEbcsCkPGV+kVo7U5aZgM3DUNr+QQ3cijVgay16gNJM4u4zwP5MpwqoQEZrml1q7Oj43zYF7RFkCeNRoL1HHcONYXAawSEjhkxr8mMU1KbElRwKoggQ/N2G7d6+ymeK0MYAjhgIhscu53ROTzHJA183uCAk4yjptlAA3k3hTIjzJK3PCA/xpHe1lA3bxFpMe5B0Vkf0YJmxveVcBbxjGlArhjblYUbmUIYTijjGW4p4DnjePZMYbzDH8r4FnjWDrGcJ6hpuLvm8f65yJwJmFITJPeaQW0OmIGn9gUdT7txOeOBVzU6zE652zDKdOwO6NYWjZTGC5q/mK0+mzDe6bhVtYg7s1RFq7TaOlx4xnb2OZeeYdyCCvk7yXh2lyScCSt07tuutbkCVAULo7fY+JqbjovrVOINZPE/gEK74s54N5yf0xfo86z3eFFC0azWgj3OnDPxOtPq/P4QZ2xWpXYlbJpWJ04GxzcZd3ysg5eF58kuy62ljm1GW3djD910zr8MHvOKfSmu0O133RaCoK1xXJdzWleAp4roqmiy4ALPGq6520H5jcZPz5WLPakgBErCtMbaTQ9wcUyxM6YKadVGzQL/0NEhmKyOT5m6frKfMHld4mNiIiWVg6EEEabMWSyWEn9wr3M89pILIBOrQQqzYAZwDbg+5Q1mmYKpcXP7tyV1KKfIRKLT7UeE/TS/UunV7+N3Nd0XUTu6JGi8PcSEfkfo2UJuM72PWQAAAAASUVORK5CYII="},"1c3e":function(t,e,r){},"2af3":function(t,e,r){"use strict";r("dcd2")},"2f1b":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isSettingsDataFetched?r("div",{staticClass:"work-wrapper",style:"background: linear-gradient(rgba(89, 193, 177, 0.8),rgba(89, 193, 177, 0.8)), url("+t.settings.img_home_cover.url+");"},[r("WorkMainPage")],1):t._e()},s=[],n=(r("8e6e"),r("ac6a"),r("cadf"),r("456d"),r("bd86")),a=r("2f62"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isWorksFetched?r("div",{staticClass:"work-page-wrapper row"},t._l(t.ourWorks.data,(function(e,o){return r("div",{key:e.id,staticClass:"work-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-3 p-0",on:{click:function(r){t.getSelectedWork(o),e.id,t.reformatURL(e.title)}}},[r("router-link",{attrs:{to:"/work/"+e.id+"-"+t.reformatURL(e.title)}},[r("div",{staticClass:"work-page-wrapper__content",on:{click:t.workClicked}},[r("img",{attrs:{src:e.img_card.url,draggable:"false"}}),r("div",{staticClass:"work-page-wrapper__text"},[r("h2",[t._v(t._s(e.title))])])])])],1)})),0):t._e(),t.isWorksFetched?r("Intersect",{on:{enter:t.loadMoreWorks}},[r("div",{staticClass:"threshold"},[r("Loading",{attrs:{showLoading:t.showLoading}})],1)]):t._e(),r("Modal",{attrs:{showModal:t.showModal,setShowModal:t.setShowModal,navigateTo:t.navigateTo,currentRoute:t.currentRoute,parentRoute:"work"}})],1)},c=[],u=(r("20d6"),r("96cf"),r("3b8d")),l=(r("a481"),r("760e")),d=r("8932"),h=r("6e87"),f=r("bcb6"),g=r("774e4"),p=r("5f13");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={data:function(){return{showModal:null,queriedWorksCounts:8,showLoading:!1,selectedWork:null,currentRoute:""}},components:{Intersect:l["a"],Loading:d["a"],Modal:p["a"]},computed:w({},Object(a["d"])({ourWorks:function(t){return t.works.works},isWorksFetched:function(t){return t.works.isWorksFetched}})),methods:w(w(w({},Object(a["b"])({fetchWorks:h["a"].works.actions.FETCH_WORKS})),Object(a["c"])({setIsWorkFetched:h["a"].works.mutations.SET_IS_WEBSITE_WORK_FETCHED,setShowFooterFlag:h["a"].app.mutations.SET_SHOW_FOOTER_FLAG,setShowHeaderFlag:h["a"].app.mutations.SET_SHOW_HEADER_FLAG})),{},{reformatURL:function(t){return Object(f["e"])(t)},getSelectedWork:function(t,e){this.selectedWork=t,this.currentRoute=e},navigateTo:function(t){var e;this.setIsWorkFetched(!1),this.selectedWork="next"==t?this.selectedWork===this.ourWorks.data.length-1?0:this.selectedWork+1:0===this.selectedWork?this.ourWorks.data.length-1:this.selectedWork-1,e=this.ourWorks.data[this.selectedWork],this.$router.replace("/work/".concat(e.id,"-").concat(this.reformatURL(e.title)))},generateWorkPayload:function(t){var e={first:this.queriedWorksCounts,page:Object.keys(this.ourWorks).length>0?this.ourWorks.paginatorInfo.currentPage+1:1,isEnabled:!0},r={data:e,requestSource:"website",showSpinner:t};return r},loadMoreWorks:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.generateWorkPayload(!1),!(Object.keys(this.ourWorks).length>0)){t.next=7;break}if(this.showLoading||!this.ourWorks.paginatorInfo.hasMorePages){t.next=7;break}return this.showLoading=!0,t.next=6,this.fetchWorks(e);case 6:this.showLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setShowModal:function(t){this.showModal=t},workClicked:function(){this.setShowModal(!0)}}),mounted:function(){if(this.isWorksFetched)Object.keys(this.ourWorks).length>0?(this.setShowHeaderFlag(!0),this.ourWorks.paginatorInfo.hasMorePages||this.setShowFooterFlag(!0)):this.setShowHeaderFlag(!0);else{this.setShowFooterFlag(!1);var t=this.generateWorkPayload(!0);this.fetchWorks(t)}},updated:function(){var t=this;if(Object(g["a"])("description-container"),Object.keys(this.ourWorks).length>0){this.ourWorks.paginatorInfo.hasMorePages||this.setShowFooterFlag(!0);var e=this.ourWorks.data.findIndex((function(e){return"".concat(e.id,"-").concat(t.reformatURL(e.title))===t.$route.params.workName}));if(-1!==e&&null===this.showModal){var r=this.ourWorks.data[e];this.getSelectedWork(e,"/work/".concat(r.id,"-").concat(this.reformatURL(r.title))),this.setShowModal(!0)}}}},k=O,m=(r("2af3"),r("2877")),v=Object(m["a"])(k,i,c,!1,null,"f56865ee",null),A=v.exports;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E={components:{WorkMainPage:A},methods:j({},Object(a["b"])({fetchHomeCoverImage:h["a"].settings.actions.FETCH_SETTINGS})),computed:j({},Object(a["d"])({settings:function(t){return t.settings.homeSettings},isSettingsDataFetched:function(t){return t.settings.isHomeSettingsDataFetched}})),mounted:function(){this.isSettingsDataFetched||this.fetchHomeCoverImage({isHome:!0})}},S=E,W=(r("d8c5"),Object(m["a"])(S,o,s,!1,null,"1e4f8df0",null));e["default"]=W.exports},"5b16":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAADp0lEQVRYhcWYXYhVVRTH19bSZgrTMpgxLR9Sx5GMINOHhBhxeomGRAhfUhyFGSyYYDAlhIoeCobSXiqiepoHESGSxOkLEUH0IRkJHB3NlCER78w4oD6o4y9W7AtrtufO3efjchdcOHftvf7rd87Z++y1t5MCDFCdGV5Jr9Gfc+5+XvVMgECziGwQkXUiskZEmit0vSkigyJyVEQOOedO5sOtDvYq8DMwSTY7B3QDDUWDtQC/VUG6CgwBZ4DLwJ1p+v4LbCoCzAG9FZINAnuAV4DHEmIfApYB24CfgLsJGoeB+VnhGoCDCaI/Aqsy6D0FfAJMBHpXgOfTijUCxwKhYaAtLViCdjOwP9C+AayOFZgFHAkE9ie9xpygncHQGQVaYwL3BnCf++9c4QasA26aXBeBx6eDez2A+7YWYEHO9uBJ9lfq2Og/D2U7rjOx1oA+d0/wYNYnddptOtwCnsmRUD9PX8ROKt9/wOT/a8qwAh4FSqbDBznhvvI6t1NALgledYdt3GwaSllnbABn30altTqM/8HEDdiGX03DZwXCqXWn0HjBxE3+f2PAw8GjXVkPOKN1xsS/rY5njWOknnBer89ofK+OVcZxoJ5wXrPD6JxSx2vG8XE94bzucqNVUscbxrGjnnBee64VVMdG839LpEhvAlxfXjivPcOK6kbnnmmfHamja/SpwLc9umSa3qZ8gxXwjvn/ZIyCc25CRNoDyDki8ksBkPPM9W0FHDeOpbEqNYS0DH8r4KhxvJRGqUaQL5vroXKZZS1q3bSmRSZwMtCZyAIJ/GE0esrOQeN8L62oFAQJLAj23K3lhp3GedbP7iIhY6uZj0zcYEhuC4bMm+oEyF2RcXOCmvTdsMM3plFL/8YCIKPgfMyXJn/pgeMRYJEvLsv2dVZArzcrRd+2YOy9U6mjHYtqW/NARsIt9uc6ZfsTmFmp80zgd9NZ7+rNGsI9DZw3+XSP3FItqAm4FEDmrlIS8qwA/gnybIwN1h3WteB19wNRa3UVbS3VuoLxrtaVVug54EIgUvKb7EwHkH4ynAg09VhucxY9FXwCOMSDdh3YB6ytNlv9jepNnU7QGdHzxeniqx4K+R1+p4h8WqEcuyUiZ0VkWEQmfPmmB0CLRESXqqYkWRH5TkTed86NVWOIMl+KfwiMJzyJWLuvGzPgxUKgkgx4BHjLn76ORYDpGNODqF3AwrT5cp37+devE0aXRd0u6Ae2vI24qxWx/pxzk5kSiMh/R5xvfIXM6mwAAAAASUVORK5CYII="},"5f13":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"Modal",staticClass:"modal"},[o("span",{staticClass:"close",on:{click:t.closeModal}},[t._v("×")]),o("div",{staticClass:"overlay-bg overlay-bg__left",on:{click:t.closeModal}}),o("div",{staticClass:"modal-content"},[o("router-view",{key:t.$route.fullPath}),o("div",{class:["custom-arrow-text custom-arrow-text__prev"],style:"display: "+(t.isJobPage?"none":"block")+";",on:{click:function(e){return t.goto("prev")}}},[o("div",{class:["custom-arrow custom-arrow__prev",t.isJobPage?"custom-arrow__prev--job":""]},[o("img",{attrs:{src:r("5b16")}})])]),o("div",{class:["custom-arrow-text custom-arrow-text__next"],style:"display: "+(t.isJobPage?"none":"block")+";",on:{click:function(e){return t.goto("next")}}},[o("div",{class:["custom-arrow custom-arrow__next",t.isJobPage?"custom-arrow__next--job":""]},[o("img",{attrs:{src:r("053c")}})])])],1),o("div",{staticClass:"overlay-bg overlay-bg__right",on:{click:t.closeModal}})])},s=[],n=(r("8e6e"),r("ac6a"),r("cadf"),r("456d"),r("bd86")),a=r("2f62"),i=r("6e87");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={props:["showModal","setShowModal","navigateTo","isJobPage","currentRoute","parentRoute"],methods:u(u({},Object(a["c"])({setIsServiceFetched:i["a"].services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED,setIsWorkFetched:i["a"].works.mutations.SET_IS_WEBSITE_WORK_FETCHED,setIsJobFetched:i["a"].jobs.mutations.SET_IS_JOB_FETCHED})),{},{closeModal:function(){var t=this.$router.resolve("/"+this.parentRoute),e=t.href;window.history.pushState({},null,e),this.setShowModal(!1)},goto:function(t){this.navigateTo(t)}}),watch:{showModal:function(){this.showModal?this.$refs.Modal.style.display="flex":this.$refs.Modal.style.display="none"}},updated:function(){"service"===this.$route.name&&this.setIsServiceFetched(this.currentRoute===this.$router.currentRoute.path),"work"===this.$route.name&&this.setIsWorkFetched(this.currentRoute===this.$router.currentRoute.path),"jobs"===this.$route.name&&this.setIsJobFetched(this.currentRoute===this.$router.currentRoute.path)}},d=l,h=(r("b476"),r("2877")),f=Object(h["a"])(d,o,s,!1,null,"44f3f53c",null);e["a"]=f.exports},"688a":function(t,e,r){},"760e":function(t,e,r){"use strict";var o=r("2b0e"),s=function(t){o["a"].config.silent||console.warn(t)};e["a"]={name:"intersect",abstract:!0,props:{threshold:{type:Array,required:!1,default:function(){return[0,.2]}},root:{type:"undefined"!==typeof HTMLElement?HTMLElement:Object,required:!1,default:function(){return null}},rootMargin:{type:String,required:!1,default:function(){return"0px 0px 0px 0px"}}},mounted:function(){var t=this;this.observer=new IntersectionObserver((function(e){e[0].isIntersecting?t.$emit("enter",[e[0]]):t.$emit("leave",[e[0]]),t.$emit("change",[e[0]])}),{threshold:this.threshold,root:this.root,rootMargin:this.rootMargin}),this.$nextTick((function(){if(t.$slots.default&&t.$slots.default.length>1)s("[VueIntersect] You may only wrap one element in a <intersect> component.");else if(!t.$slots.default||t.$slots.default.length<1)return void s("[VueIntersect] You must have one child inside a <intersect> component.");t.observer.observe(t.$slots.default[0].elm)}))},destroyed:function(){this.$emit("destroyed"),this.observer.disconnect()},render:function(){return this.$slots.default?this.$slots.default[0]:null}}},"774e4":function(t,e,r){"use strict";var o=function(t){var e=document.getElementsByClassName(t);if(0!==e.length)for(var r=0;r<e.length;r++)for(var o=e[r],s=o.getElementsByTagName("a"),n=0;n<s.length;n++)s[n].setAttribute("target","_blank")};e["a"]=o},"77df":function(t,e,r){"use strict";r("1c3e")},8932:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["loading-wrapper",t.showLoading?"":"loading-wrapper--hide"]},[t._m(0)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ring"},[r("div"),r("div"),r("div"),r("div")])}],n={props:["showLoading"]},a=n,i=(r("77df"),r("2877")),c=Object(i["a"])(a,o,s,!1,null,"0a1ef16e",null);e["a"]=c.exports},b476:function(t,e,r){"use strict";r("688a")},bf3c:function(t,e,r){},d8c5:function(t,e,r){"use strict";r("bf3c")},dcd2:function(t,e,r){}}]);
//# sourceMappingURL=OurWorks.0ce3ec73.js.map