(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JobsAdd"],{1608:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isDepartmentsDataFetched?r("div",[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[t._m(0),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n        "+t._s(t.operation)+"\n      ")])])]),r("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.operation))]),r("form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4"},[r("base-input",{attrs:{type:"text",label:"Title",placeholder:"Enter Title",autofocus:!0,isRequired:!0},model:{value:t.job.title,callback:function(e){t.$set(t.job,"title",e)},expression:"job.title"}}),r("ErrorMessage",{attrs:{fieldErrors:t.errors.title}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[t._m(1),r("select",{directives:[{name:"model",rawName:"v-model",value:t.job.departmentId,expression:"job.departmentId"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.job,"departmentId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"-1"}},[t._v("--Please select department")]),t._l(t.departmentsData,(function(e,n){return r("option",{key:n,domProps:{selected:e.id==t.job.departmentId,value:e.id}},[t._v(t._s(e.name))])}))],2),r("ErrorMessage",{attrs:{fieldErrors:t.errors.departmentId}})],1)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"form-group"},[t._m(2),r("vue-pell-editor",{attrs:{actions:t.editorOptions,"style-with-css":!1,placeholder:""},model:{value:t.job.description,callback:function(e){t.$set(t.job,"description",e)},expression:"job.description"}}),r("ErrorMessage",{attrs:{fieldErrors:t.errors.description}})],1)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"form-group"},[t._m(3),r("vue-pell-editor",{attrs:{actions:t.editorOptions,"style-with-css":!1,placeholder:""},model:{value:t.job.requirements,callback:function(e){t.$set(t.job,"requirements",e)},expression:"job.requirements"}}),r("ErrorMessage",{attrs:{fieldErrors:t.errors.requirements}})],1)])]),r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:t.saveData}},[t._v("\n        Save\n      ")])]),r("div",{staticClass:"clearfix"})])]):t._e()},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/dashboard/jobs"}},[t._v("Jobs")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"region"}},[t._v("Department"),r("span",{staticClass:"error-message"},[t._v(" *")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",[t._v("Description"),r("span",{staticClass:"error-message"},[t._v(" *")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",[t._v("Requirements"),r("span",{staticClass:"error-message"},[t._v(" *")])])}],s=(r("8e6e"),r("cadf"),r("456d"),r("ac6a"),r("96cf"),r("3b8d")),a=r("bd86"),o=r("2f62"),c=r("ede8"),l=r("6e87"),u=r("62c4"),d=r("a923");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={title:"",description:"",requirements:"",departmentId:"-1"},b={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,job:f({},m),errors:{},validation:{title:{isRequired:!0},description:{isRequired:!0},requirements:{isRequired:!0},departmentId:{isRequired:!0}},aliases:{title:"title",description:"description",requirements:"requirements",departmentId:"departmentId"},editorOptions:d["a"]}},computed:f({},Object(o["d"])({departmentsData:function(t){return t.departments.departments},isDepartmentsDataFetched:function(t){return t.departments.isDepartmentsDataFetched}})),methods:f(f({},Object(o["b"])({createJob:l["a"].jobs.actions.CREATE_JOB,updateJob:l["a"].jobs.actions.UPDATE_JOB,fetchDepartments:l["a"].departments.actions.FETCH_DEPARTMENTS})),{},{saveData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(u["a"])(this.job,this.aliases,this.validation),this.errors=f({},e.errors),0===e.length){t.next=4;break}return t.abrupt("return");case 4:if(t.prev=4,r={title:this.job.title,description:this.job.description,requirements:this.job.requirements,departmentId:this.job.departmentId},"Edit Job"!==this.operation){t.next=12;break}return t.next=9,this.updateJob(f(f({},r),{},{jobId:this.editData.id}));case 9:this.notifyVue("Job Updated Successfully","success"),t.next=15;break;case 12:return t.next=14,this.createJob(r);case 14:this.notifyVue("Job Created Successfully","success");case 15:this.job=f({},m),this.$router.push("/dashboard/jobs"),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](4),JSON.parse(t.t0).forEach((function(t){n.notifyVue(t.message,"danger")}));case 22:case"end":return t.stop()}}),t,this,[[4,19]])})));function e(){return t.apply(this,arguments)}return e}(),notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Job"!==this.$route.name||this.$router.push({path:"/dashboard/jobs"})},mounted:function(){this.fetchDepartments(),"Edit Job"===this.$route.name&&(this.job.title=this.editData.title,this.job.description=this.editData.description,this.job.requirements=this.editData.requirements,this.job.departmentId=this.editData.department.id)},components:{ErrorMessage:c["a"]}},h=b,v=r("2877"),j=Object(v["a"])(h,n,i,!1,null,null,null);e["default"]=j.exports},"62c4":function(t,e,r){"use strict";r("8e6e"),r("cadf"),r("456d"),r("ac6a");var n=r("bd86"),i=function(t){var e=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return e.test(t)},s=i;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c=function(t,e,r){var n=[];return""!==t&&"-1"!==t&&0!==t.length||!e.isRequired||n.push("".concat(r," is required")),t.length<e.minLength&&n.push("".concat(r," at least ").concat(e.minLength," character")),e.isEmail&&!s(t)&&n.push("Invalid email format"),e.isFile&&""===t&&n.push("Please choose proper file"),n},l=function(t,e,r,i){var s={};return s=o(o({},s),{},Object(n["a"])({},e,c(t,i[r],r))),s},u=function(t,e,r){var n={},i=0;return Object.keys(t).forEach((function(i){n=o(o({},n),l(t[i],i,e[i],r))})),Object.keys(n).forEach((function(t){return i+=n[t].length})),{errors:n,length:i}};e["a"]=u},a923:function(t,e,r){"use strict";r("c5f6");var n=function(t){return document.queryCommandState(t)},i=function(t){return document.queryCommandValue(t)},s=["bold","italic","underline",{icon:'<img src="/images/increase_font.svg" />',title:"Increase Font Size",state:function(){return n("fontSize")},result:function(){return window.pell.exec("fontSize",Math.min(Number(i("FontSize"))+1,7))}},{icon:'<img src="/images/decrease_font.svg" />',title:"Decrease Font Size",state:function(){return n("fontSize")},result:function(){return window.pell.exec("fontSize",Math.max(Number(i("FontSize"))-1,1))}},{icon:'<i class="nc-icon nc-align-left-2"></i>',title:"Align Left",state:function(){return n("justifyLeft")},result:function(){return window.pell.exec("justifyLeft")}},{icon:'<i class="nc-icon nc-align-center"></i>',title:"Align Center",state:function(){return n("justifyCenter")},result:function(){return window.pell.exec("justifyCenter")}},{icon:'<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',title:"Align Right",state:function(){return n("justifyRight")},result:function(){return window.pell.exec("justifyRight")}},"olist","ulist",{name:"link",result:function(){var t=window.prompt("Enter the link URL");t&&window.pell.exec("createLink",t)}}];e["a"]=s},ede8:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return void 0!==t.fieldErrors?r("span",t._l(t.fieldErrors,(function(e,n){return r("p",{key:n,staticClass:"error-message"},[t._v("\n    "+t._s(e)+"\n  ")])})),0):t._e()},i=[],s={props:["fieldErrors"]},a=s,o=r("2877"),c=Object(o["a"])(a,n,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=JobsAdd.57cffe5e.js.map