(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TeamAddEdit"],{"0203":function(e,t,a){},"0b4b":function(e,t,a){},1485:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"preview-image"},[e.disabled?e._e():a("div",{staticClass:"close",attrs:{role:"button"},on:{click:e.fireDeleteModal}},[e._v(" × ")]),a("img",{attrs:{src:e.image.url,alt:"preview"}})])},i=[],s={props:["image","setShowDeleteDialogFlag","openedFor","imageIndex","disabled"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.image.id,this.openedFor,this.imageIndex,"image")}}},n=s,o=(a("19cf"),a("2877")),l=Object(o["a"])(n,r,i,!1,null,"1f659b06",null);t["a"]=l.exports},"19cf":function(e,t,a){"use strict";a("0203")},"50e7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"delete-modal",style:e.showFlag?"display:block":"display:none",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[a("div",{staticClass:"delete-modal-content",on:{click:function(e){e.stopPropagation()}}},[a("div",{staticClass:"delete-modal-header"},[a("span",{staticClass:"close",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v("×")]),a("h2",[e._v("Delete "+e._s(e.item))])]),a("div",{staticClass:"delete-modal-body"},[a("form",[a("div",{staticClass:"form-group delete-modal-body__text"},[a("p",[e._v("Do you want to delete this "+e._s(e.item.toLowerCase())+"?")])]),a("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v(" Cancel ")]),a("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:e.deleteAction}},[e._v(" Delete ")])])])])])},i=[],s={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},n=s,o=(a("f9a7"),a("2877")),l=Object(o["a"])(n,r,i,!1,null,"d3f2235c",null);t["a"]=l.exports},"5e00":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[e._m(0),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.operation)+" ")])])]),a("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.operation))]),a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("base-input",{attrs:{type:"text",label:"Name",placeholder:"Enter Name",autofocus:!0,isRequired:!0},model:{value:e.team.name,callback:function(t){e.$set(e.team,"name",t)},expression:"team.name"}}),a("ErrorMessage",{attrs:{fieldErrors:e.errors.name}})],1),a("div",{staticClass:"col-12 col-md-6 mt-auto mb-auto"},[a("div",{staticClass:"custom-control custom-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.team.is_enabled,expression:"team.is_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"enabled"},domProps:{checked:Array.isArray(e.team.is_enabled)?e._i(e.team.is_enabled,null)>-1:e.team.is_enabled},on:{change:function(t){var a=e.team.is_enabled,r=t.target,i=!!r.checked;if(Array.isArray(a)){var s=null,n=e._i(a,s);r.checked?n<0&&e.$set(e.team,"is_enabled",a.concat([s])):n>-1&&e.$set(e.team,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.team,"is_enabled",i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"enabled"}},[e._v("Publish Team Member")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("base-input",{attrs:{type:"text",label:"Title",placeholder:"Enter Title",isRequired:!0},model:{value:e.team.title,callback:function(t){e.$set(e.team,"title",t)},expression:"team.title"}}),a("ErrorMessage",{attrs:{fieldErrors:e.errors.title}})],1),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Team Order",isRequired:!0,min:"1"},model:{value:e.team.order,callback:function(t){e.$set(e.team,"order",t)},expression:"team.order"}})],1)]),a("div",{staticClass:"row mt-3 mb-3"},[a("div",{staticClass:"col"},[a("div",[e._m(1),a("input",{ref:"img_profile",attrs:{type:"file",id:"img_profile",accept:"image/png, image/jpeg, image/svg"},on:{change:function(t){return e.setFile(t,"img_profile")}}}),a("br"),void 0!==e.editData&&"Edit Team Member"===e.operation&&""!==e.editData.img_profile?a("ImagePreview",{attrs:{image:e.editData.img_profile,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_profile"}}):e._e(),a("ErrorMessage",{attrs:{fieldErrors:e.errors.img_profile}})],1)])]),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:e.saveData}},[e._v(" Save ")])]),a("div",{staticClass:"clearfix"}),a("DeleteDialog",{attrs:{showFlag:e.showFlag,setShowDeleteDialogFlag:e.setImageDataFlag,item:"Image",deleteAction:e.removeImage}})],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/dashboard/team"}},[e._v("Team")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"mr-5",attrs:{for:"img_profile"}},[e._v("Choose Profile Image"),a("span",{staticClass:"error-message"},[e._v(" *")])])}],s=(a("8e6e"),a("cadf"),a("456d"),a("ac6a"),a("96cf"),a("3b8d")),n=a("bd86"),o=a("2f62"),l=a("ede8"),c=a("6e87"),u=a("62c4"),m=a("1485"),d=a("50e7");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={name:"",title:"",is_enabled:!1,order:1,img_profile:""},h={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,team:p({},b),openedFor:"",imageIndex:null,showFlag:!1,imageId:null,errors:{},validation:{name:{isRequired:!0},title:{isRequired:!0},enabled:{isRequired:!0},order:{isRequired:!0},"profile image":{isRequired:!0}},aliases:{name:"name",title:"title",is_enabled:"enabled",order:"order",img_profile:"profile image"}}},methods:p(p({},Object(o["b"])({createTeamMember:c["a"].team.actions.CREATE_TEAM_MEMBER,updateTeamMember:c["a"].team.actions.UPDATE_TEAM_MEMBER,deleteImage:c["a"].app.actions.DELETE_IMAGE})),{},{setImageDataFlag:function(e,t,a,r){this.showFlag=e,this.imageId=t,this.openedFor=a,this.imageIndex=r},setFile:function(e,t){var a=e.target.files;a.length&&(this.team[t]=a[0])},saveData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(u["a"])(this.team,this.aliases,this.validation),this.errors=p({},t.errors),0===t.length){e.next=4;break}return e.abrupt("return");case 4:if(e.prev=4,a={name:this.team.name,title:this.team.title,isEnabled:this.team.is_enabled,order:this.team.order},"Edit Team Member"!==this.operation){e.next=14;break}return r=this.team.img_profile,r.url||(a=p(p({},a),{},{img_profile:r})),e.next=11,this.updateTeamMember(p(p({},a),{},{id:this.editData.id}));case 11:this.notifyVue("Team Member Updated Successfully","success"),e.next=18;break;case 14:return a=p(p({},a),{},{img_profile:this.team.img_profile}),e.next=17,this.createTeamMember(a);case 17:this.notifyVue("Team Member Created Successfully","success");case 18:this.team=p({},b),this.$router.push("/dashboard/team"),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](4),JSON.parse(e.t0).forEach((function(e){i.notifyVue(e.message,"danger")}));case 25:case"end":return e.stop()}}),e,this,[[4,22]])})));function t(){return e.apply(this,arguments)}return t}(),removeImage:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteImage(this.imageId);case 2:e.t0=this.openedFor,e.next="img_profile"===e.t0?5:8;break;case 5:return this.editData.img_profile="",this.team.img_profile="",e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Team Member"!==this.$route.name||this.$router.push({path:"/dashboard/team"})},mounted:function(){"Edit Team Member"===this.$route.name&&(this.team.name=this.editData.name,this.team.title=this.editData.title,this.team.is_enabled=this.editData.is_enabled,this.team.order=this.editData.order,this.team.img_profile=this.editData.img_profile||"")},components:{ErrorMessage:l["a"],ImagePreview:m["a"],DeleteDialog:d["a"]}},g=h,v=(a("60bc"),a("2877")),_=Object(v["a"])(g,r,i,!1,null,null,null);t["default"]=_.exports},"60bc":function(e,t,a){"use strict";a("0b4b")},"62c4":function(e,t,a){"use strict";a("8e6e"),a("cadf"),a("456d"),a("ac6a");var r=a("bd86"),i=function(e){var t=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return t.test(e)},s=i;function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l=function(e,t,a){var r=[];return""!==e&&"-1"!==e&&0!==e.length||!t.isRequired||r.push("".concat(a," is required")),e.length<t.minLength&&r.push("".concat(a," at least ").concat(t.minLength," character")),t.isEmail&&!s(e)&&r.push("Invalid email format"),t.isFile&&""===e&&r.push("Please choose proper file"),r},c=function(e,t,a,i){var s={};return s=o(o({},s),{},Object(r["a"])({},t,l(e,i[a],a))),s},u=function(e,t,a){var r={},i=0;return Object.keys(e).forEach((function(i){r=o(o({},r),c(e[i],i,t[i],a))})),Object.keys(r).forEach((function(e){return i+=r[e].length})),{errors:r,length:i}};t["a"]=u},"6c8e":function(e,t,a){},ede8:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return void 0!==e.fieldErrors?a("span",e._l(e.fieldErrors,(function(t,r){return a("p",{key:r,staticClass:"error-message"},[e._v(" "+e._s(t)+" ")])})),0):e._e()},i=[],s={props:["fieldErrors"]},n=s,o=a("2877"),l=Object(o["a"])(n,r,i,!1,null,null,null);t["a"]=l.exports},f9a7:function(e,t,a){"use strict";a("6c8e")}}]);
//# sourceMappingURL=TeamAddEdit.8695a62f.js.map