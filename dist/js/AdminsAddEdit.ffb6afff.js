(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminsAddEdit"],{1300:function(e,t,r){},"48ed":function(e,t,r){"use strict";r("1300")},"7d5e":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isRolesDataFetched?r("div",[e._m(0),r("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.operation))]),r("form",[r("div",{staticClass:"row mt-3 mb-3"},[r("div",{staticClass:"col-12 col-md-6"},[r("base-input",{attrs:{type:"text",label:"Username",placeholder:"Enter Admin Username",isRequired:!0},model:{value:e.admin.username,callback:function(t){e.$set(e.admin,"username",t)},expression:"admin.username"}}),r("ErrorMessage",{attrs:{fieldErrors:e.errors.username}})],1),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[e._m(1),r("multiselect",{attrs:{options:e.roles.map((function(e){return e.toUpperCase()})),multiple:!0,"close-on-select":!1,"clear-on-select":!1,placeholder:"Choose Admin Roles"},model:{value:e.admin.roles,callback:function(t){e.$set(e.admin,"roles",t)},expression:"admin.roles"}}),r("ErrorMessage",{attrs:{fieldErrors:e.errors.roles}})],1)])]),"Create Admin"===e.operation?r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-12 col-md-6"},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:e.admin.password,expression:"admin.password"}],class:["form-control",void 0===e.errors.password?"registeration-style":""],attrs:{type:"password",id:"new-password",placeholder:"Enter Password"},domProps:{value:e.admin.password},on:{input:function(t){t.target.composing||e.$set(e.admin,"password",t.target.value)}}}),r("ErrorMessage",{attrs:{fieldErrors:e.errors.password}})],1),r("div",{staticClass:"form-group col-12 col-md-6"},[e._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:e.admin.passwordConfirmation,expression:"admin.passwordConfirmation"}],class:["form-control",void 0===e.errors.passwordConfirmation?"registeration-style":""],attrs:{type:"password",id:"new-password-again",placeholder:"Enter Password agian"},domProps:{value:e.admin.passwordConfirmation},on:{input:function(t){t.target.composing||e.$set(e.admin,"passwordConfirmation",t.target.value)}}}),r("ErrorMessage",{attrs:{fieldErrors:e.errors.passwordConfirmation}})],1)]):e._e(),r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:e.saveData}},[e._v(" Save ")])]),r("div",{staticClass:"clearfix"})])]):e._e()},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/dashboard/admins"}},[e._v("Admins")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Role"),r("span",{staticClass:"error-message"},[e._v(" *")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"password"}},[e._v("Password"),r("span",{staticClass:"error-message"},[e._v(" *")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"password"}},[e._v("Password Confirmation"),r("span",{staticClass:"error-message"},[e._v(" *")])])}],n=(r("8e6e"),r("cadf"),r("456d"),r("ac6a"),r("96cf"),r("3b8d")),i=r("bd86"),o=r("2f62"),c=r("8e5f"),d=r.n(c),l=r("ede8"),u=r("6e87"),m=r("62c4"),f=r("a923");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={username:"",roles:[],password:"",passwordConfirmation:""},v={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,admin:h({},w),errors:{},validation:{username:{isRequired:!0,minLength:3},roles:{isRequired:!0},Password:{isRequired:!0,minLength:6},"Password Confirmation":{isRequired:!0,minLength:6}},aliases:{username:"username",roles:"roles",password:"Password",passwordConfirmation:"Password Confirmation"},editorOptions:f["a"]}},computed:h({},Object(o["d"])({roles:function(e){return e.admins.roles},isRolesDataFetched:function(e){return e.admins.isRolesDataFetched}})),methods:h(h({},Object(o["b"])({createAdminData:u["a"].admins.actions.CREATE_ADMIN,updateAdminData:u["a"].admins.actions.UPDATE_ADMIN,fetchRolesData:u["a"].admins.actions.FETCH_ROLES})),{},{saveData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(m["a"])(this.admin,this.aliases,this.validation),this.errors=h({},t.errors),0===t.length){e.next=4;break}return e.abrupt("return");case 4:if(this.admin.password===this.admin.passwordConfirmation){e.next=7;break}return this.errors.passwordConfirmation=["password and confirm password does not match"],e.abrupt("return");case 7:if(e.prev=7,r={username:this.admin.username,password:this.admin.password,passwordConfirmation:this.admin.passwordConfirmation,roles:this.admin.roles},"Edit Admin"!==this.operation){e.next=15;break}return e.next=12,this.updateAdminData(h(h({},r),{},{userId:this.editData.id}));case 12:this.notifyVue("Admin Updated Successfully","success"),e.next=18;break;case 15:return e.next=17,this.createAdminData(h({},r));case 17:this.notifyVue("Admin Created Successfully","success");case 18:this.$router.push("/dashboard/admins"),this.admin=h({},w),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](7),JSON.parse(e.t0).forEach((function(e){s.notifyVue(e.message,"danger")}));case 25:case"end":return e.stop()}}),e,this,[[7,22]])})));function t(){return e.apply(this,arguments)}return t}(),notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Admin"!==this.$route.name||this.$router.push({path:"/dashboard/admins"})},mounted:function(){this.fetchRolesData(),"Edit Admin"===this.$route.name&&(this.admin.username=this.editData.username,this.admin.roles=this.editData.roles.map((function(e){return e.toUpperCase()})),this.validation["Password"]=!1,this.validation["Password Confirmation"]=!1)},components:{ErrorMessage:l["a"],Multiselect:d.a}},b=v,g=(r("48ed"),r("9aa7"),r("2877")),C=Object(g["a"])(b,s,a,!1,null,null,null);t["default"]=C.exports},"9aa7":function(e,t,r){"use strict";r("b03f")},a923:function(e,t,r){"use strict";r("c5f6");var s=function(e){return document.queryCommandState(e)},a=function(e){return document.queryCommandValue(e)},n=["bold","italic","underline",{icon:'<img src="/images/increase_font.svg" />',title:"Increase Font Size",state:function(){return s("fontSize")},result:function(){return window.pell.exec("fontSize",Math.min(Number(a("FontSize"))+1,7))}},{icon:'<img src="/images/decrease_font.svg" />',title:"Decrease Font Size",state:function(){return s("fontSize")},result:function(){return window.pell.exec("fontSize",Math.max(Number(a("FontSize"))-1,1))}},{icon:'<i class="nc-icon nc-align-left-2"></i>',title:"Align Left",state:function(){return s("justifyLeft")},result:function(){return window.pell.exec("justifyLeft")}},{icon:'<i class="nc-icon nc-align-center"></i>',title:"Align Center",state:function(){return s("justifyCenter")},result:function(){return window.pell.exec("justifyCenter")}},{icon:'<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',title:"Align Right",state:function(){return s("justifyRight")},result:function(){return window.pell.exec("justifyRight")}},"olist","ulist",{name:"link",result:function(){var e=window.prompt("Enter the link URL");e&&window.pell.exec("createLink",e)}}];t["a"]=n},b03f:function(e,t,r){}}]);
//# sourceMappingURL=AdminsAddEdit.ffb6afff.js.map