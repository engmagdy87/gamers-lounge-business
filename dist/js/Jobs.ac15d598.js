(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Jobs"],{"053c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAADqklEQVRYhcWZXYhVVRTH1zYbcCRHRCWFQlPDCj8KPxJ6EqkYUZiIggbNgoFUBEEMhHmJ8UFEEXvRhxIKJKOCnhIEkSyZiT4ecixf/GD8oOtEjqKJpvOLJfvAYnnuvefrMgsOXNbe+79+5+599ll7nSAVGDBOREK81BCR0RACZdULAQIvichaEVkpIotF5Ik6Xa+JSL+InBCRb0IIl8vhNoZqA3qAQYrZKHAMeLUVcG8AFxtg/QcMAaeBP4GrTW7hB2BhFWAdwFcpAe4D3wEfAM8Dj6eMnQi8DOwAfq2j0RvXbyG4ecA5J3ob2AXMLKD3InAkBfSo3kxesQXAsBP6FngqL1iK9grgjNP+SWcrq8Ac4C83FVvKgrkYE4DPHORJ9WcZeNoMugOsrhLOxdvpID9pNuCg6fwA6GoVnIm5z0G+Xa/jCtext9VwMe64uD8mVktdj8CA6fRj1scfWB7/+cdKQD4JXDfxd/kOq0yj7viLcsDdiOMOl4TcYhhuApNt49em8cuMglOBEbcsCkPGV+kVo7U5aZgM3DUNr+QQ3cijVgay16gNJM4u4zwP5MpwqoQEZrml1q7Oj43zYF7RFkCeNRoL1HHcONYXAawSEjhkxr8mMU1KbElRwKoggQ/N2G7d6+ymeK0MYAjhgIhscu53ROTzHJA183uCAk4yjptlAA3k3hTIjzJK3PCA/xpHe1lA3bxFpMe5B0Vkf0YJmxveVcBbxjGlArhjblYUbmUIYTijjGW4p4DnjePZMYbzDH8r4FnjWDrGcJ6hpuLvm8f65yJwJmFITJPeaQW0OmIGn9gUdT7txOeOBVzU6zE652zDKdOwO6NYWjZTGC5q/mK0+mzDe6bhVtYg7s1RFq7TaOlx4xnb2OZeeYdyCCvk7yXh2lyScCSt07tuutbkCVAULo7fY+JqbjovrVOINZPE/gEK74s54N5yf0xfo86z3eFFC0azWgj3OnDPxOtPq/P4QZ2xWpXYlbJpWJ04GxzcZd3ysg5eF58kuy62ljm1GW3djD910zr8MHvOKfSmu0O133RaCoK1xXJdzWleAp4roqmiy4ALPGq6520H5jcZPz5WLPakgBErCtMbaTQ9wcUyxM6YKadVGzQL/0NEhmKyOT5m6frKfMHld4mNiIiWVg6EEEabMWSyWEn9wr3M89pILIBOrQQqzYAZwDbg+5Q1mmYKpcXP7tyV1KKfIRKLT7UeE/TS/UunV7+N3Nd0XUTu6JGi8PcSEfkfo2UJuM72PWQAAAAASUVORK5CYII="},2903:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jobs-wrapper"},[o("JobsMainPage")],1)},r=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isJobsFetched?o("div",{staticClass:"job-main-content-wrapper"},[t.isSettingsDataFetched?o("div",{staticClass:"job-main-content-wrapper__bg",style:"background-image: url("+t.settings.img_services_cover.url+";"}):t._e(),o("Hero",{attrs:{page:"services"},scopedSlots:t._u([{key:"hero-content",fn:function(){return[o("div",{staticClass:"row d-block job-main-content-wrapper__title"},[o("h1",[t._v("let's work together")]),o("p",[t._v(" If you're an Esports fan and think you have what it takes,"),o("br"),t._v(" we're always looking for fresh talents in Esports (Casters - Analysts) ")])])]},proxy:!0}],null,!1,3930691870)}),o("div",{staticClass:"job-main-content-wrapper__container row"},[t.jobs.length>0?o("div",{staticClass:"job-main-content-wrapper__jobs row"},t._l(t.jobs,(function(e,s){return o("div",{key:e.id,staticClass:"job-main-content-wrapper__jobs__content col-12"},[o("div",{staticClass:"job-main-content-wrapper__job-title "},[o("h3",[t._v(t._s(e.department.name))]),o("p",[t._v(t._s(e.title))])]),o("button",{staticClass:"job-main-content-wrapper__details-btn",on:{click:function(o){t.getSelectedJob(s,"/job/"+e.id+"-"+t.reformatURL(e.title))}}},[o("router-link",{attrs:{to:"/job/"+e.id+"-"+t.reformatURL(e.title)}},[o("span",{on:{click:t.jobClicked}},[t._v(" View ")])])],1)])})),0):o("h1",{staticClass:"job-main-content-wrapper__jobs row",staticStyle:{width:"fit-content",margin:"auto"}},[o("span",[t._v("Please send us your updated resume")]),o("br"),o("span",[t._v("hr@gamersloungeme.com")])])]),o("Modal",{attrs:{showModal:t.showModal,setShowModal:t.setShowModal,navigateTo:t.navigateTo,isJobPage:!0,currentRoute:t.currentRoute,parentRoute:"jobs"}})],1):t._e()},c=[],a=(o("8e6e"),o("ac6a"),o("cadf"),o("456d"),o("a481"),o("bd86")),i=o("2f62"),l=o("6e87"),u=o("4e44"),h=o("bcb6"),b=o("5f13");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={data:function(){return{showModal:!1,selectedJob:null,currentRoute:""}},computed:p({},Object(i["d"])({jobs:function(t){return t.jobs.jobs},isJobsFetched:function(t){return t.jobs.isJobsFetched},settings:function(t){return t.settings.servicesSettings},isSettingsDataFetched:function(t){return t.settings.isServicesSettingsDataFetched}})),methods:p(p(p({},Object(i["b"])({fetchJobs:l["a"].jobs.actions.FETCH_JOBS,fetchHomeCoverImageAndTexts:l["a"].settings.actions.FETCH_SETTINGS})),Object(i["c"])({setIsJobFetched:l["a"].jobs.mutations.SET_IS_JOB_FETCHED,setShowHeaderFlag:l["a"].app.mutations.SET_SHOW_HEADER_FLAG,setShowFooterFlag:l["a"].app.mutations.SET_SHOW_FOOTER_FLAG})),{},{reformatURL:function(t){return Object(h["e"])(t)},getSelectedJob:function(t,e){this.selectedJob=t,this.currentRoute=e},navigateTo:function(t){var e;this.setIsJobFetched(!1),this.selectedJob="next"==t?this.selectedJob===this.jobs.length-1?0:this.selectedJob+1:0===this.selectedJob?this.jobs.length-1:this.selectedJob-1,e=this.jobs[this.selectedJob],this.$router.replace("/job/".concat(e.id,"-").concat(this.reformatURL(e.title)))},setShowModal:function(t){this.showModal=t},jobClicked:function(){this.setShowModal(!0)}}),components:{Hero:u["a"],Modal:b["a"]},mounted:function(){var t={isEnabled:!0,requestSource:"website"};this.isJobsFetched?(this.setShowHeaderFlag(!0),this.setShowFooterFlag(!0)):this.fetchJobs(t);var e={isServiceTexts:!0,isService:!0};this.isSettingsDataFetched||this.fetchHomeCoverImageAndTexts(e)}},g=f,w=(o("8f66"),o("2877")),m=Object(w["a"])(g,n,c,!1,null,"e78e98e6",null),v=m.exports,A={components:{JobsMainPage:v}},O=A,j=(o("649e"),Object(w["a"])(O,s,r,!1,null,"13ca5f3e",null));e["default"]=j.exports},"3bb4":function(t,e,o){},"4e44":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:"home"===t.page?"hero-wrapper":"hero-wrapper-services",style:{backgroundImage:"url("+t.heroImage+")"}},[t._t("hero-content")],2)},r=[],n={props:{heroImage:{type:String,default:""},page:{type:String,default:"home"}}},c=n,a=(o("c9a2"),o("2877")),i=Object(a["a"])(c,s,r,!1,null,"6ffdd4f2",null);e["a"]=i.exports},"5b16":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAADp0lEQVRYhcWYXYhVVRTH19bSZgrTMpgxLR9Sx5GMINOHhBhxeomGRAhfUhyFGSyYYDAlhIoeCobSXiqiepoHESGSxOkLEUH0IRkJHB3NlCER78w4oD6o4y9W7AtrtufO3efjchdcOHftvf7rd87Z++y1t5MCDFCdGV5Jr9Gfc+5+XvVMgECziGwQkXUiskZEmit0vSkigyJyVEQOOedO5sOtDvYq8DMwSTY7B3QDDUWDtQC/VUG6CgwBZ4DLwJ1p+v4LbCoCzAG9FZINAnuAV4DHEmIfApYB24CfgLsJGoeB+VnhGoCDCaI/Aqsy6D0FfAJMBHpXgOfTijUCxwKhYaAtLViCdjOwP9C+AayOFZgFHAkE9ie9xpygncHQGQVaYwL3BnCf++9c4QasA26aXBeBx6eDez2A+7YWYEHO9uBJ9lfq2Og/D2U7rjOx1oA+d0/wYNYnddptOtwCnsmRUD9PX8ROKt9/wOT/a8qwAh4FSqbDBznhvvI6t1NALgledYdt3GwaSllnbABn30altTqM/8HEDdiGX03DZwXCqXWn0HjBxE3+f2PAw8GjXVkPOKN1xsS/rY5njWOknnBer89ofK+OVcZxoJ5wXrPD6JxSx2vG8XE94bzucqNVUscbxrGjnnBee64VVMdG839LpEhvAlxfXjivPcOK6kbnnmmfHamja/SpwLc9umSa3qZ8gxXwjvn/ZIyCc25CRNoDyDki8ksBkPPM9W0FHDeOpbEqNYS0DH8r4KhxvJRGqUaQL5vroXKZZS1q3bSmRSZwMtCZyAIJ/GE0esrOQeN8L62oFAQJLAj23K3lhp3GedbP7iIhY6uZj0zcYEhuC4bMm+oEyF2RcXOCmvTdsMM3plFL/8YCIKPgfMyXJn/pgeMRYJEvLsv2dVZArzcrRd+2YOy9U6mjHYtqW/NARsIt9uc6ZfsTmFmp80zgd9NZ7+rNGsI9DZw3+XSP3FItqAm4FEDmrlIS8qwA/gnybIwN1h3WteB19wNRa3UVbS3VuoLxrtaVVug54EIgUvKb7EwHkH4ynAg09VhucxY9FXwCOMSDdh3YB6ytNlv9jepNnU7QGdHzxeniqx4K+R1+p4h8WqEcuyUiZ0VkWEQmfPmmB0CLRESXqqYkWRH5TkTed86NVWOIMl+KfwiMJzyJWLuvGzPgxUKgkgx4BHjLn76ORYDpGNODqF3AwrT5cp37+devE0aXRd0u6Ae2vI24qxWx/pxzk5kSiMh/R5xvfIXM6mwAAAAASUVORK5CYII="},"5f13":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"Modal",staticClass:"modal"},[s("span",{staticClass:"close",on:{click:t.closeModal}},[t._v("×")]),s("div",{staticClass:"overlay-bg overlay-bg__left",on:{click:t.closeModal}}),s("div",{staticClass:"modal-content"},[s("router-view",{key:t.$route.fullPath}),s("div",{class:["custom-arrow-text custom-arrow-text__prev"],style:"display: "+(t.isJobPage?"none":"block")+";",on:{click:function(e){return t.goto("prev")}}},[s("div",{class:["custom-arrow custom-arrow__prev",t.isJobPage?"custom-arrow__prev--job":""]},[s("img",{attrs:{src:o("5b16")}})])]),s("div",{class:["custom-arrow-text custom-arrow-text__next"],style:"display: "+(t.isJobPage?"none":"block")+";",on:{click:function(e){return t.goto("next")}}},[s("div",{class:["custom-arrow custom-arrow__next",t.isJobPage?"custom-arrow__next--job":""]},[s("img",{attrs:{src:o("053c")}})])])],1),s("div",{staticClass:"overlay-bg overlay-bg__right",on:{click:t.closeModal}})])},r=[],n=(o("8e6e"),o("ac6a"),o("cadf"),o("456d"),o("bd86")),c=o("2f62"),a=o("6e87");function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={props:["showModal","setShowModal","navigateTo","isJobPage","currentRoute","parentRoute"],methods:l(l({},Object(c["c"])({setIsServiceFetched:a["a"].services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED,setIsWorkFetched:a["a"].works.mutations.SET_IS_WEBSITE_WORK_FETCHED,setIsJobFetched:a["a"].jobs.mutations.SET_IS_JOB_FETCHED})),{},{closeModal:function(){var t=this.$router.resolve("/"+this.parentRoute),e=t.href;window.history.pushState({},null,e),this.setShowModal(!1)},goto:function(t){this.navigateTo(t)}}),watch:{showModal:function(){this.showModal?this.$refs.Modal.style.display="flex":this.$refs.Modal.style.display="none"}},updated:function(){"service"===this.$route.name&&this.setIsServiceFetched(this.currentRoute===this.$router.currentRoute.path),"work"===this.$route.name&&this.setIsWorkFetched(this.currentRoute===this.$router.currentRoute.path),"jobs"===this.$route.name&&this.setIsJobFetched(this.currentRoute===this.$router.currentRoute.path),"services"!==this.$route.name&&"works"!==this.$route.name||this.closeModal()}},h=u,b=(o("ed1d"),o("2877")),d=Object(b["a"])(h,s,r,!1,null,"13313037",null);e["a"]=d.exports},"649e":function(t,e,o){"use strict";o("7cc4")},"6d0d":function(t,e,o){},7743:function(t,e,o){},"7cc4":function(t,e,o){},"8f66":function(t,e,o){"use strict";o("6d0d")},c9a2:function(t,e,o){"use strict";o("3bb4")},ed1d:function(t,e,o){"use strict";o("7743")}}]);
//# sourceMappingURL=Jobs.ac15d598.js.map