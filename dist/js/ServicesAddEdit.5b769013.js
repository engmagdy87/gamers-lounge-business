(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ServicesAddEdit"],{"0203":function(e,t,i){},1485:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"preview-image"},[e.disabled?e._e():i("div",{staticClass:"close",attrs:{role:"button"},on:{click:e.fireDeleteModal}},[e._v(" × ")]),i("img",{attrs:{src:e.image.url,alt:"preview"}})])},s=[],a={props:["image","setShowDeleteDialogFlag","openedFor","imageIndex","disabled"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.image.id,this.openedFor,this.imageIndex,"image")}}},c=a,n=(i("19cf"),i("2877")),o=Object(n["a"])(c,r,s,!1,null,"1f659b06",null);t["a"]=o.exports},"19cf":function(e,t,i){"use strict";i("0203")},"50e7":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"delete-modal",style:e.showFlag?"display:block":"display:none",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[i("div",{staticClass:"delete-modal-content",on:{click:function(e){e.stopPropagation()}}},[i("div",{staticClass:"delete-modal-header"},[i("span",{staticClass:"close",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v("×")]),i("h2",[e._v("Delete "+e._s(e.item))])]),i("div",{staticClass:"delete-modal-body"},[i("form",[i("div",{staticClass:"form-group delete-modal-body__text"},[i("p",[e._v("Do you want to delete this "+e._s(e.item.toLowerCase())+"?")])]),i("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v(" Cancel ")]),i("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:e.deleteAction}},[e._v(" Delete ")])])])])])},s=[],a={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},c=a,n=(i("f9a7"),i("2877")),o=Object(n["a"])(c,r,s,!1,null,"d3f2235c",null);t["a"]=o.exports},"62c4":function(e,t,i){"use strict";i("8e6e"),i("cadf"),i("456d"),i("ac6a");var r=i("bd86"),s=function(e){var t=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return t.test(e)},a=s;function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){Object(r["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var o=function(e,t,i){var r=[];return""!==e&&"-1"!==e&&0!==e.length||!t.isRequired||r.push("".concat(i," is required")),e.length<t.minLength&&r.push("".concat(i," at least ").concat(t.minLength," character")),t.isEmail&&!a(e)&&r.push("Invalid email format"),t.isFile&&""===e&&r.push("Please choose proper file"),r},l=function(e,t,i,s){var a={};return a=n(n({},a),{},Object(r["a"])({},t,o(e,s[i],i))),a},d=function(e,t,i){var r={},s=0;return Object.keys(e).forEach((function(s){r=n(n({},r),l(e[s],s,t[s],i))})),Object.keys(r).forEach((function(e){return s+=r[e].length})),{errors:r,length:s}};t["a"]=d},"6c8e":function(e,t,i){},a923:function(e,t,i){"use strict";i("c5f6");var r=function(e){return document.queryCommandState(e)},s=function(e){return document.queryCommandValue(e)},a=["bold","italic","underline",{icon:'<img src="/images/increase_font.svg" />',title:"Increase Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.min(Number(s("FontSize"))+1,7))}},{icon:'<img src="/images/decrease_font.svg" />',title:"Decrease Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.max(Number(s("FontSize"))-1,1))}},{icon:'<i class="nc-icon nc-align-left-2"></i>',title:"Align Left",state:function(){return r("justifyLeft")},result:function(){return window.pell.exec("justifyLeft")}},{icon:'<i class="nc-icon nc-align-center"></i>',title:"Align Center",state:function(){return r("justifyCenter")},result:function(){return window.pell.exec("justifyCenter")}},{icon:'<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',title:"Align Right",state:function(){return r("justifyRight")},result:function(){return window.pell.exec("justifyRight")}},"olist","ulist",{name:"link",result:function(){var e=window.prompt("Enter the link URL");e&&window.pell.exec("createLink",e)}}];t["a"]=a},ede8:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return void 0!==e.fieldErrors?i("span",e._l(e.fieldErrors,(function(t,r){return i("p",{key:r,staticClass:"error-message"},[e._v(" "+e._s(t)+" ")])})),0):e._e()},s=[],a={props:["fieldErrors"]},c=a,n=i("2877"),o=Object(n["a"])(c,r,s,!1,null,null,null);t["a"]=o.exports},f6db:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[e._m(0),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.operation)+" ")])])]),i("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.operation))]),i("form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"text",label:"Title",placeholder:"Enter Title",autofocus:!0},model:{value:e.service.title,callback:function(t){e.$set(e.service,"title",t)},expression:"service.title"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.title}})],1),i("div",{staticClass:"col-12 col-md-2"},[i("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Order",isRequired:!0},model:{value:e.service.order,callback:function(t){e.$set(e.service,"order",t)},expression:"service.order"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.order}})],1),i("div",{staticClass:"col-12 col-md-1 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.service.is_featured,expression:"service.is_featured"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is_featured"},domProps:{checked:Array.isArray(e.service.is_featured)?e._i(e.service.is_featured,null)>-1:e.service.is_featured},on:{change:[function(t){var i=e.service.is_featured,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,c=e._i(i,a);r.checked?c<0&&e.$set(e.service,"is_featured",i.concat([a])):c>-1&&e.$set(e.service,"is_featured",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(e.service,"is_featured",s)},e.setIsSliderImageRequired]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"is_featured"}},[e._v("Featured")])])]),i("div",{staticClass:"col-12 col-md-1 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.service.is_enabled,expression:"service.is_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is_enabled"},domProps:{checked:Array.isArray(e.service.is_enabled)?e._i(e.service.is_enabled,null)>-1:e.service.is_enabled},on:{change:function(t){var i=e.service.is_enabled,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,c=e._i(i,a);r.checked?c<0&&e.$set(e.service,"is_enabled",i.concat([a])):c>-1&&e.$set(e.service,"is_enabled",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(e.service,"is_enabled",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"is_enabled"}},[e._v("Published")])])]),i("div",{staticClass:"col-12 col-md-1 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.service.is_admin_mode_enabled,expression:"service.is_admin_mode_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is_admin_mode_enabled"},domProps:{checked:Array.isArray(e.service.is_admin_mode_enabled)?e._i(e.service.is_admin_mode_enabled,null)>-1:e.service.is_admin_mode_enabled},on:{change:function(t){var i=e.service.is_admin_mode_enabled,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,c=e._i(i,a);r.checked?c<0&&e.$set(e.service,"is_admin_mode_enabled",i.concat([a])):c>-1&&e.$set(e.service,"is_admin_mode_enabled",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(e.service,"is_admin_mode_enabled",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"is_admin_mode_enabled"}},[e._v("Admin")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Description")]),i("vue-pell-editor",{attrs:{actions:e.editorOptions,"style-with-css":!1,placeholder:""},model:{value:e.service.description,callback:function(t){e.$set(e.service,"description",t)},expression:"service.description"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.description}})],1)])]),i("div",{staticClass:"row mt-3 mb-3"},[i("div",{staticClass:"col"},[i("div",[e._m(1),i("input",{ref:"img_card",attrs:{type:"file",id:"img_card",accept:"image/png, image/jpeg"},on:{change:function(t){return e.setFile(t,"img_card")}}}),i("br"),void 0!==e.editData&&"Edit Service"===e.operation&&""!==e.editData.img_card?i("ImagePreview",{attrs:{image:e.editData.img_card,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_card"}}):e._e(),i("ErrorMessage",{attrs:{fieldErrors:e.errors.img_card}})],1)])]),i("div",{staticClass:"row mt-3 mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5",attrs:{for:"logo"}},[e._v("Choose Cover Image")]),i("input",{ref:"img_cover",attrs:{type:"file",id:"logo",accept:"image/png, image/jpeg"},on:{change:function(t){return e.setFile(t,"img_cover")}}}),i("br"),void 0!==e.editData&&"Edit Service"===e.operation&&""!==e.editData.img_cover&&null!==e.editData.img_cover?i("ImagePreview",{attrs:{image:e.editData.img_cover,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_cover"}}):e._e()],1)])]),i("div",{staticClass:"row mt-3 mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5",attrs:{for:"logo"}},[e._v("Choose Slider Image"),e.service.is_featured?i("span",{staticClass:"error-message"},[e._v(" *")]):e._e()]),i("input",{ref:"img_slider",attrs:{type:"file",id:"logo",accept:"image/png, image/jpeg"},on:{change:function(t){return e.setFile(t,"img_slider")}}}),i("br"),void 0!==e.editData&&"Edit Service"===e.operation&&""!==e.editData.img_slider&&null!==e.editData.img_slider?i("ImagePreview",{attrs:{image:e.editData.img_slider,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_slider"}}):e._e(),e.service.is_featured?i("ErrorMessage",{attrs:{fieldErrors:e.errors.img_slider}}):e._e()],1)])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:e.saveData}},[e._v(" Save ")])]),i("div",{staticClass:"clearfix"}),i("DeleteDialog",{attrs:{showFlag:e.showFlag,setShowDeleteDialogFlag:e.setImageDataFlag,item:"Image",deleteAction:e.removeImage}})],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"/dashboard/services"}},[e._v("Services")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"mr-5",attrs:{for:"img_card"}},[e._v("Choose Card Image"),i("span",{staticClass:"error-message"},[e._v(" *")])])}],a=(i("8e6e"),i("ac6a"),i("cadf"),i("456d"),i("96cf"),i("3b8d")),c=i("bd86"),n=i("2f62"),o=i("ede8"),l=i("6e87"),d=i("62c4"),u=i("a923"),m=i("1485"),v=i("50e7"),g=i("bcb6");function _(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){Object(c["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={title:"",order:1,description:"",is_featured:!1,is_enabled:!1,is_admin_mode_enabled:!1,img_card:"",img_cover:"",img_slider:""},p={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,service:f({},h),openedFor:"",imageIndex:null,showFlag:!1,imageId:null,errors:{},validation:{title:{isRequired:!1},order:{isRequired:!0},is_featured:{isRequired:!1},is_enabled:{isRequired:!1},is_admin_mode_enabled:{isRequired:!1},description:{isRequired:!1},"card image":{isRequired:!0},"cover image":{isRequired:!1},"slider image":{isRequired:!1}},aliases:{title:"title",order:"order",is_featured:"is_featured",is_enabled:"is_enabled",is_admin_mode_enabled:"is_admin_mode_enabled",description:"description",img_card:"card image",img_cover:"cover image",img_slider:"slider image"},editorOptions:u["a"]}},methods:f(f({},Object(n["b"])({createService:l["a"].services.actions.CREATE_SERVICE,updateService:l["a"].services.actions.UPDATE_SERVICE,deleteImage:l["a"].app.actions.DELETE_IMAGE})),{},{setImageDataFlag:function(e,t,i,r){this.showFlag=e,this.imageId=t,this.openedFor=i,this.imageIndex=r},setFile:function(e,t){var i=e.target.files;i.length&&(this.service[t]=i[0])},saveData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,i,r,s,a,c,n,o,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(d["a"])(this.service,this.aliases,this.validation),this.errors=f({},t.errors),0===t.length){e.next=4;break}return e.abrupt("return");case 4:if(e.prev=4,i={title:this.service.title,order:this.service.order,isFeatured:this.service.is_featured,isEnabled:this.service.is_enabled,is_admin_mode_enabled:this.service.is_admin_mode_enabled,description:Object(g["d"])(this.service.description)},"Edit Service"!==this.operation){e.next=18;break}return r={},s=this.service,a=s.img_card,c=s.img_cover,n=s.img_slider,a.url||(r=f(f({},r),{},{img_card:this.service.img_card})),c.url||(r=f(f({},r),{},{img_cover:this.service.img_cover})),!n.url&&this.service.is_featured&&(r=f(f({},r),{},{img_slider:this.service.img_slider})),Object.keys(r).length>0&&(i=f(f({},i),{},{imagesData:r})),e.next=15,this.updateService(f(f({},i),{},{id:this.editData.id}));case 15:this.notifyVue("Service Updated Successfully","success"),e.next=24;break;case 18:return o={},""!==this.service.img_cover&&(o=f(f({},o),{},{img_cover:this.service.img_cover})),i=f(f({},i),{},{imagesData:f(f({},o),{},{img_card:this.service.img_card,img_slider:this.service.img_slider})}),e.next=23,this.createService(i);case 23:this.notifyVue("Service Created Successfully","success");case 24:this.service=f({},h),this.$router.push("/dashboard/services"),e.next=31;break;case 28:e.prev=28,e.t0=e["catch"](4),JSON.parse(e.t0).forEach((function(e){l.notifyVue(e.message,"danger")}));case 31:case"end":return e.stop()}}),e,this,[[4,28]])})));function t(){return e.apply(this,arguments)}return t}(),removeImage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteImage(this.imageId);case 2:e.t0=this.openedFor,e.next="img_card"===e.t0?5:"img_cover"===e.t0?8:"img_slider"===e.t0?11:14;break;case 5:return this.editData.img_card="",this.service.img_card="",e.abrupt("break",15);case 8:return this.editData.img_cover="",this.service.img_cover="",e.abrupt("break",15);case 11:return this.editData.img_slider="",this.service.img_slider="",e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null);case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setIsSliderImageRequired:function(e){this.validation["slider image"].isRequired=e.target.checked},notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Service"!==this.$route.name||this.$router.push({path:"/dashboard/services"})},mounted:function(){"Edit Service"===this.$route.name&&(this.service.title=this.editData.title,this.service.order=this.editData.order,this.service.is_featured=this.editData.is_featured,this.service.is_enabled=this.editData.is_enabled,this.service.is_admin_mode_enabled=this.editData.is_admin_mode_enabled,this.service.description=this.editData.description||"",this.service.img_card=this.editData.img_card||"",this.service.img_cover=this.editData.img_cover||"",this.service.img_slider=this.editData.img_slider||"",this.validation["slider image"].isRequired=this.editData.is_featured)},components:{ErrorMessage:o["a"],ImagePreview:m["a"],DeleteDialog:v["a"]}},b=p,y=i("2877"),D=Object(y["a"])(b,r,s,!1,null,null,null);t["default"]=D.exports},f9a7:function(e,t,i){"use strict";i("6c8e")}}]);
//# sourceMappingURL=ServicesAddEdit.5b769013.js.map