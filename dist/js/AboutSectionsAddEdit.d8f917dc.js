(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AboutSectionsAddEdit"],{2631:function(t,e,r){"use strict";r.r(e),r.d(e,"NORMAL",(function(){return a})),r.d(e,"SPECIAL",(function(){return n}));var a="NORMAL",n="SPECIAL"},"62c4":function(t,e,r){"use strict";r("8e6e"),r("cadf"),r("456d"),r("ac6a");var a=r("bd86"),n=function(t){var e=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return e.test(t)},o=n;function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(t,e,r){var a=[];return""!==t&&"-1"!==t&&0!==t.length||!e.isRequired||a.push("".concat(r," is required")),t.length<e.minLength&&a.push("".concat(r," at least ").concat(e.minLength," character")),e.isEmail&&!o(t)&&a.push("Invalid email format"),e.isFile&&""===t&&a.push("Please choose proper file"),a},u=function(t,e,r,n){var o={};return o=c(c({},o),{},Object(a["a"])({},e,s(t,n[r],r))),o},l=function(t,e,r){var a={},n=0;return Object.keys(t).forEach((function(n){a=c(c({},a),u(t[n],n,e[n],r))})),Object.keys(a).forEach((function(t){return n+=a[t].length})),{errors:a,length:n}};e["a"]=l},"6ad1":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[t._m(0),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.operation)+" ")])])]),r("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.operation))]),r("form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("base-input",{attrs:{type:"number",label:"Section Order",placeholder:"Enter Section Order",isRequired:!0,min:"1"},model:{value:t.aboutSection.order,callback:function(e){t.$set(t.aboutSection,"order",e)},expression:"aboutSection.order"}}),r("ErrorMessage",{attrs:{fieldErrors:t.errors.order}})],1),r("div",{staticClass:"col-12 col-md-6 mt-auto mb-auto"},[r("div",{staticClass:"custom-control custom-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.aboutSection.enabled,expression:"aboutSection.enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"enabled"},domProps:{checked:Array.isArray(t.aboutSection.enabled)?t._i(t.aboutSection.enabled,null)>-1:t.aboutSection.enabled},on:{change:function(e){var r=t.aboutSection.enabled,a=e.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=t._i(r,o);a.checked?i<0&&t.$set(t.aboutSection,"enabled",r.concat([o])):i>-1&&t.$set(t.aboutSection,"enabled",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.aboutSection,"enabled",n)}}}),r("label",{staticClass:"custom-control-label",attrs:{for:"enabled"}},[t._v("Publish Section")])])])]),r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:t.saveData}},[t._v(" Save ")])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/dashboard/about"}},[t._v("About")])])}],o=(r("8e6e"),r("cadf"),r("456d"),r("ac6a"),r("96cf"),r("3b8d")),i=r("bd86"),c=r("2f62"),s=r("ede8"),u=r("6e87"),l=r("62c4"),b=r("2631");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={order:1,enabled:!1},h={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,aboutSection:f({},p),errors:{},validation:{order:{isRequired:!0},enabled:{isRequired:!1}},aliases:{order:"order",enabled:"enabled"}}},computed:f({},Object(c["d"])({aboutSectionData:function(t){return t.about.aboutSections},aboutData:function(t){return t.about.about}})),methods:f(f({},Object(c["b"])({createAboutSection:u["a"].about.actions.CREATE_ABOUT_SECTION,updateAboutSection:u["a"].about.actions.UPDATE_ABOUT_SECTION})),{},{saveData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(l["a"])(this.aboutSection,this.aliases,this.validation),this.errors=f({},e.errors),0===e.length){t.next=4;break}return t.abrupt("return");case 4:if(t.prev=4,r={order:this.aboutSection.order,type:b["NORMAL"],enabled:this.aboutSection.enabled,sectionType:"ABOUT_US"},"Edit About Section"!==this.operation){t.next=12;break}return t.next=9,this.updateAboutSection(f(f({},r),{},{sectionId:this.editData.id,id:this.aboutData.id}));case 9:this.notifyVue("About Section Updated Successfully","success"),t.next=15;break;case 12:return t.next=14,this.createAboutSection(f(f({},r),{},{id:this.aboutData.id}));case 14:this.notifyVue("About Section Created Successfully","success");case 15:this.aboutSection=f({},p),this.$router.push("/dashboard/about/list"),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](4),JSON.parse(t.t0).forEach((function(t){a.notifyVue(t.message,"danger")}));case 22:case"end":return t.stop()}}),t,this,[[4,19]])})));function e(){return t.apply(this,arguments)}return e}(),notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit About Section"!==this.$route.name||this.$router.push({path:"/dashboard/about"})},mounted:function(){"Edit About Section"===this.$route.name&&(this.aboutSection.order=this.editData.order,this.aboutSection.enabled=this.editData.enabled)},components:{ErrorMessage:s["a"]}},O=h,m=r("2877"),v=Object(m["a"])(O,a,n,!1,null,null,null);e["default"]=v.exports},ede8:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return void 0!==t.fieldErrors?r("span",t._l(t.fieldErrors,(function(e,a){return r("p",{key:a,staticClass:"error-message"},[t._v(" "+t._s(e)+" ")])})),0):t._e()},n=[],o={props:["fieldErrors"]},i=o,c=r("2877"),s=Object(c["a"])(i,a,n,!1,null,null,null);e["a"]=s.exports}}]);
//# sourceMappingURL=AboutSectionsAddEdit.d8f917dc.js.map