(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ServiceColumnsAddEdit"],{"0203":function(e,t,i){},"0a93":function(e,t,i){"use strict";i.r(t),i.d(t,"TITLE",(function(){return r})),i.d(t,"DESCRIPTION",(function(){return s})),i.d(t,"IMAGE",(function(){return a})),i.d(t,"SLIDER",(function(){return n})),i.d(t,"VIDEO",(function(){return o}));var r="TITLE",s="DESCRIPTION",a="IMAGE",n="SLIDER",o="VIDEO"},1485:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"preview-image"},[e.disabled?e._e():i("div",{staticClass:"close",attrs:{role:"button"},on:{click:e.fireDeleteModal}},[e._v(" × ")]),i("img",{attrs:{src:e.image.url,alt:"preview"}})])},s=[],a={props:["image","setShowDeleteDialogFlag","openedFor","imageIndex","disabled"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.image.id,this.openedFor,this.imageIndex,"image")}}},n=a,o=(i("19cf"),i("2877")),l=Object(o["a"])(n,r,s,!1,null,"1f659b06",null);t["a"]=l.exports},1927:function(e,t,i){"use strict";i("6be4")},"19cf":function(e,t,i){"use strict";i("0203")},"4cdf":function(e,t,i){"use strict";i("9a0d")},"50e7":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"delete-modal",style:e.showFlag?"display:block":"display:none",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[i("div",{staticClass:"delete-modal-content",on:{click:function(e){e.stopPropagation()}}},[i("div",{staticClass:"delete-modal-header"},[i("span",{staticClass:"close",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v("×")]),i("h2",[e._v("Delete "+e._s(e.item))])]),i("div",{staticClass:"delete-modal-body"},[i("form",[i("div",{staticClass:"form-group delete-modal-body__text"},[i("p",[e._v("Do you want to delete this "+e._s(e.item.toLowerCase())+"?")])]),i("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v(" Cancel ")]),i("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:e.deleteAction}},[e._v(" Delete ")])])])])])},s=[],a={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},n=a,o=(i("f9a7"),i("2877")),l=Object(o["a"])(n,r,s,!1,null,"d3f2235c",null);t["a"]=l.exports},"5df2":function(e,t,i){var r=i("5ca1"),s=i("d752");r(r.S+r.F*(Number.parseFloat!=s),"Number",{parseFloat:s})},"62c4":function(e,t,i){"use strict";i("8e6e"),i("cadf"),i("456d"),i("ac6a");var r=i("bd86"),s=function(e){var t=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return t.test(e)},a=s;function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){Object(r["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l=function(e,t,i){var r=[];return""!==e&&"-1"!==e&&0!==e.length||!t.isRequired||r.push("".concat(i," is required")),e.length<t.minLength&&r.push("".concat(i," at least ").concat(t.minLength," character")),t.isEmail&&!a(e)&&r.push("Invalid email format"),t.isFile&&""===e&&r.push("Please choose proper file"),r},c=function(e,t,i,s){var a={};return a=o(o({},a),{},Object(r["a"])({},t,l(e,s[i],i))),a},u=function(e,t,i){var r={},s=0;return Object.keys(e).forEach((function(s){r=o(o({},r),c(e[s],s,t[s],i))})),Object.keys(r).forEach((function(e){return s+=r[e].length})),{errors:r,length:s}};t["a"]=u},"6be4":function(e,t,i){},"6c8e":function(e,t,i){},"7a06":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[e._m(0),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/services/sections/list/"+e.serviceSections.id}},[e._v(e._s(e.serviceSections.title)+" Service Sections")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/services/rows/list/"+e.serviceRowsData.id}},[e._v("Section "+e._s(e.serviceRowsData.order)+" Rows")])],1),i("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[i("router-link",{attrs:{to:"/dashboard/services/columns/list/"+e.rowId}},[e._v(" Columns ")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.operation)+" ")])])]),e._m(1),i("div",{staticClass:"alert alert-dark w-100 m-0 p-0 d-flex",attrs:{role:"alert"}},[e.calculateTotalWidth()>0?i("div",{staticClass:"alert alert-info m-0",style:"width:"+e.calculateTotalWidth()+"%",attrs:{role:"alert"}},[e._v(" Used Width: "),i("strong",[i("h2",[e._v(e._s(e.calculateTotalWidth())+"%")])])]):e._e(),(100-e.calculateTotalWidth()).toFixed(1)>0?i("div",{staticClass:"alert alert-dark m-0 text-dark",style:"width:"+(100-e.calculateTotalWidth()).toFixed(1)+"%",attrs:{role:"alert"}},[e._v(" Remain Width: "),i("strong",[i("h2",[e._v(e._s((100-e.calculateTotalWidth()).toFixed(1))+"%")])])]):e._e()]),i("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.operation))]),i("form",[i("div",{staticClass:"row d-flex m-0"},e._l(e.serviceRowData.columns,(function(t,r){return i("div",{key:r,class:["column",100===e.currentWidth()?"column--full":"column--not-full"],style:"width:"+t.ratio+"%"},[i("p",[e._v(e._s(t.ratio)+"%")]),t.fillable?i("p",[e._v(e._s(t.type))]):i("p")])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Order",autofocus:!0,isRequired:!0},model:{value:e.serviceColumn.order,callback:function(t){e.$set(e.serviceColumn,"order",t)},expression:"serviceColumn.order"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.order}})],1),i("div",{staticClass:"col-12 col-md-6"},[i("div",{staticClass:"form-group"},[e._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.type,expression:"serviceColumn.type"}],staticClass:"form-control",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serviceColumn,"type",t.target.multiple?i:i[0])},function(t){return e.setRequiredFieldsAccrodingToContentType(t.target.value)}]}},[i("option",{attrs:{value:"-1"}},[e._v("--Please choose content type")]),e._l(e.SERVICE_COLUMNS_CONTENT_TYPES,(function(t,r){return i("option",{key:r,attrs:{":selected":e.serviceColumn.type===t},domProps:{value:t}},[e._v(e._s(t.toLowerCase()))])}))],2),i("ErrorMessage",{attrs:{fieldErrors:e.errors.type}})],1)])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4"},[i("base-input",{attrs:{type:"number",step:"0.1",label:"Width in %",placeholder:"Enter Width in %",isRequired:!0},model:{value:e.serviceColumn.ratio,callback:function(t){e.$set(e.serviceColumn,"ratio",t)},expression:"serviceColumn.ratio"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.ratio}})],1),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.fillable,expression:"serviceColumn.fillable"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"fillable"},domProps:{checked:Array.isArray(e.serviceColumn.fillable)?e._i(e.serviceColumn.fillable,null)>-1:e.serviceColumn.fillable},on:{change:function(t){var i=e.serviceColumn.fillable,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,n=e._i(i,a);r.checked?n<0&&e.$set(e.serviceColumn,"fillable",i.concat([a])):n>-1&&e.$set(e.serviceColumn,"fillable",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(e.serviceColumn,"fillable",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"fillable"}},[e._v("Has Content")])])]),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.isAutoPlay,expression:"serviceColumn.isAutoPlay"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"isAutoPlay"},domProps:{checked:Array.isArray(e.serviceColumn.isAutoPlay)?e._i(e.serviceColumn.isAutoPlay,null)>-1:e.serviceColumn.isAutoPlay},on:{change:[function(t){var i=e.serviceColumn.isAutoPlay,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,n=e._i(i,a);r.checked?n<0&&e.$set(e.serviceColumn,"isAutoPlay",i.concat([a])):n>-1&&e.$set(e.serviceColumn,"isAutoPlay",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(e.serviceColumn,"isAutoPlay",s)},e.updateVideoData]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"isAutoPlay"}},[e._v("Is Autoplay Video")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"text",label:"External Video Url",placeholder:"Enter External Video Url",isRequired:e.validation["video external"].isRequired},model:{value:e.serviceColumn.vid_extenral,callback:function(t){e.$set(e.serviceColumn,"vid_extenral",t)},expression:"serviceColumn.vid_extenral"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.vid_extenral}})],1),i("div",{staticClass:"col-12 col-md-6 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.is_vid_extenral_enabled,expression:"serviceColumn.is_vid_extenral_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is_vid_extenral_enabled"},domProps:{checked:Array.isArray(e.serviceColumn.is_vid_extenral_enabled)?e._i(e.serviceColumn.is_vid_extenral_enabled,null)>-1:e.serviceColumn.is_vid_extenral_enabled},on:{change:[function(t){var i=e.serviceColumn.is_vid_extenral_enabled,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=null,n=e._i(i,a);r.checked?n<0&&e.$set(e.serviceColumn,"is_vid_extenral_enabled",i.concat([a])):n>-1&&e.$set(e.serviceColumn,"is_vid_extenral_enabled",i.slice(0,n).concat(i.slice(n+1)))}else e.$set(e.serviceColumn,"is_vid_extenral_enabled",s)},e.setVideoValidation]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"is_vid_extenral_enabled"}},[e._v("Has External Video")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("base-input",{attrs:{type:"text",label:"Tile",placeholder:"Enter Title",isRequired:e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.TITLE},model:{value:e.serviceColumn.title,callback:function(t){e.$set(e.serviceColumn,"title",t)},expression:"serviceColumn.title"}}),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.TITLE?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.title}})],1):e._e()],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Description"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("span",{staticClass:"error-message"},[e._v(" *")]):e._e()]),i("vue-pell-editor",{attrs:{actions:e.editorOptions,"style-with-css":!1,placeholder:""},model:{value:e.serviceColumn.description,callback:function(t){e.$set(e.serviceColumn,"description",t)},expression:"serviceColumn.description"}}),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.description}})],1):e._e()],1)])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[e._v("Choose Content Images"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.IMAGE||e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER?i("span",{staticClass:"error-message"},[e._v(" *")]):e._e()]),i("input",{ref:"img_content",attrs:{type:"file",id:"media-images",accept:"image/png, image/jpeg, image/gif",multiple:e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER},on:{change:function(t){return e.setFile(t,"img_content")}}}),i("br"),void 0!==e.editData&&("Edit Service Column"===e.operation||null!==e.editData.img_content&&null!==e.editData.img_content)?i("div",{staticClass:"image-preview-list"},e._l(e.editData.img_content,(function(t,r){return i("ImagePreview",{key:t.id,attrs:{image:t,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_content",imageIndex:r}})})),1):e._e(),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.IMAGE||e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.img_content}})],1):e._e()])])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[e._v("Choose Content Videos"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.VIDEO&&e.validation["videos content"].isRequired?i("span",{staticClass:"error-message"},[e._v(" *")]):e._e()]),i("input",{ref:"vid_content",attrs:{type:"file",id:"logo",accept:"video/*"},on:{change:function(t){return e.setFile(t,"vid_content")}}}),i("br"),void 0!==e.editData&&("Edit Service Column"===e.operation||null!==e.editData.vid_content&&null!==e.editData.vid_content)?i("div",{staticClass:"image-preview-list"},e._l(e.editData.vid_content,(function(t,r){return i("VideoPreview",{key:t.id,attrs:{video:t,setShowDeleteDialogFlag:e.setVideoDataFlag,openedFor:"vid_content",videoIndex:r}})})),1):e._e(),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.VIDEO?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.vid_content}})],1):e._e()])])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:e.saveData}},[e._v(" Save ")])]),i("div",{staticClass:"clearfix"}),i("DeleteDialog",{attrs:{showFlag:e.showFlag,setShowDeleteDialogFlag:"video"===e.contentType?e.setVideoDataFlag:e.setImageDataFlag,item:"video"===e.contentType?"Video":"Image",deleteAction:"video"===e.contentType?e.removeVideo:e.removeImage}})],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"/dashboard/services"}},[e._v("Services")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[i("strong",[e._v("Hint")]),e._v(" Total Width must be less than or equal"),i("strong",[e._v(" 100%")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",[e._v("Column Content Type"),i("span",{staticClass:"error-message"},[e._v(" *")])])}],a=(i("8e6e"),i("cadf"),i("456d"),i("c5f6"),i("5df2"),i("ac6a"),i("96cf"),i("3b8d")),n=i("bd86"),o=i("2f62"),l=i("ede8"),c=i("6e87"),u=i("62c4"),d=i("a923"),v=i("1485"),m=i("a50b"),p=i("50e7"),h=i("bcb6"),f=i("0a93");function C(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={order:1,type:"-1",title:"",description:"",vid_extenral:"",is_vid_extenral_enabled:!1,ratio:0,fillable:!1,isAutoPlay:!1,img_content:[],vid_content:[]},g={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,serviceColumn:_({},b),openedFor:"",contentType:"",imageIndex:null,showFlag:!1,imageId:null,videoId:null,errors:{},validation:{order:{isRequired:!0},type:{isRequired:!0},title:{isRequired:!0},description:{isRequired:!0},ratio:{isRequired:!0},fillable:{isRequired:!0},"is auto play":{isRequired:!1},"is video external":{isRequired:!1},"images content":{isRequired:!0},"videos content":{isRequired:!0},"video external":{isRequired:!1}},aliases:{order:"order",type:"type",title:"title",description:"description",ratio:"ratio",fillable:"fillable",isAutoPlay:"is auto play",is_vid_extenral_enabled:"is video external",img_content:"images content",vid_content:"videos content",vid_extenral:"video external"},editorOptions:d["a"]}},computed:_(_({},Object(o["d"])({serviceRowData:function(e){return e.services.serviceRow},serviceRowsData:function(e){return e.services.serviceRows},serviceSections:function(e){return e.services.serviceSections}})),{},{SERVICE_COLUMNS_CONTENT_TYPES:function(){return f},rowId:function(){return this.$router.history.current.params.rowId}}),methods:_(_({},Object(o["b"])({fetchColumnsRows:c["a"].services.actions.FETCH_SERVICE_COLUMNS,createColumn:c["a"].services.actions.CREATE_SERVICE_COLUMN,updateColumn:c["a"].services.actions.UPDATE_SERVICE_COLUMN,updateVideo:c["a"].services.actions.UPDATE_VIDEO,deleteImage:c["a"].app.actions.DELETE_IMAGE,deleteVideo:c["a"].app.actions.DELETE_VIDEO})),{},{updateVideoData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Edit Service Column"!==this.operation||this.serviceColumn.type!==f["VIDEO"]){e.next=4;break}return t={videoId:this.serviceColumn.vid_content[0].id,isAutoPlay:this.serviceColumn.isAutoPlay},e.next=4,this.updateVideo(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setVideoValidation:function(e){e.target.checked?this.serviceColumn.type===f["VIDEO"]&&(this.validation["video external"].isRequired=!0,this.validation["videos content"].isRequired=!1):this.serviceColumn.type===f["VIDEO"]&&(this.validation["video external"].isRequired=!1,this.validation["videos content"].isRequired=!0)},setRequiredFieldsAccrodingToContentType:function(e){var t,i=this,r=["title","description","images content","videos content","video external"];switch(e){case f["TITLE"]:t="title";break;case f["DESCRIPTION"]:t="description";break;case f["IMAGE"]:t="images content";break;case f["SLIDER"]:t="images content";break;case f["VIDEO"]:t=this.serviceColumn.is_vid_extenral_enabled?"video external":"videos content";break;default:break}r.forEach((function(e){i.validation[e].isRequired=e===t}))},setFile:function(e,t){var i=e.target.files;i.length&&(this.serviceColumn[t]=i)},setImageDataFlag:function(e,t,i,r,s){this.showFlag=e,this.imageId=t,this.openedFor=i,this.imageIndex=r,this.contentType=s},setVideoDataFlag:function(e,t,i,r,s){this.showFlag=e,this.videoId=t,this.openedFor=i,this.videoIndex=r,this.contentType=s},currentWidth:function(){var e=this,t=0;return"Edit Service Column"===this.operation?this.serviceRowData.columns.forEach((function(i){i.id!==e.editData.id&&(t+=Number.parseFloat(i.ratio))})):this.serviceRowData.columns.forEach((function(e){t+=Number.parseFloat(e.ratio)})),t.toFixed(1)},calculateTotalWidth:function(){var e=Number.parseFloat(this.currentWidth());return e+=Number.parseFloat(this.serviceColumn.ratio),e.toFixed(1)},saveData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,i,r,s,a,n,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(u["a"])(this.serviceColumn,this.aliases,this.validation),this.errors=_({},t.errors),0===t.length){e.next=4;break}return e.abrupt("return");case 4:if(!(this.calculateTotalWidth()>100)){e.next=7;break}return this.notifyVue("Row Width will be greater than 100%, Please adjust column width","danger"),e.abrupt("return");case 7:if(e.prev=7,i="",this.serviceColumn.type===f["TITLE"]&&(i=this.serviceColumn.title),this.serviceColumn.type===f["DESCRIPTION"]&&(i=Object(h["d"])(this.serviceColumn.description)),r={order:this.serviceColumn.order,type:this.serviceColumn.type,content:i,ratio:this.serviceColumn.ratio,fillable:this.serviceColumn.fillable,is_vid_extenral_enabled:this.serviceColumn.is_vid_extenral_enabled,vid_extenral:this.serviceColumn.vid_extenral,imagesData:{img_content:this.$refs.img_content.files},videosData:{vid_content:this.$refs.vid_content.files}},s=this.$router.history.current.params.rowId,a=this.serviceRowData.id,"Edit Service Column"!==this.operation){e.next=21;break}return e.next=17,this.updateColumn(_(_({},r),{},{columnId:this.editData.id,rowId:s}));case 17:this.notifyVue("Service Column Updated Successfully","success"),this.$router.push("/dashboard/services/columns/list/".concat(a)),e.next=27;break;case 21:return e.next=23,this.createColumn(_(_({},r),{},{rowId:s,isAutoPlay:this.serviceColumn.isAutoPlay}));case 23:return n={rowId:s,requestSource:"dashboard"},e.next=26,this.fetchColumnsRows(n);case 26:this.notifyVue("Service Column Created Successfully","success");case 27:this.serviceColumn=_({},b),this.$refs.img_content.value=null,this.$refs.vid_content.value=null,e.next=35;break;case 32:e.prev=32,e.t0=e["catch"](7),JSON.parse(e.t0).forEach((function(e){o.notifyVue(e.message,"danger")}));case 35:case"end":return e.stop()}}),e,this,[[7,32]])})));function t(){return e.apply(this,arguments)}return t}(),removeImage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteImage(this.imageId);case 2:e.t0=this.openedFor,e.next="img_content"===e.t0?5:7;break;case 5:return this.serviceColumn.img_content.splice(this.imageIndex,1),e.abrupt("break",8);case 7:return e.abrupt("break",8);case 8:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null,"");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeVideo:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteVideo(this.videoId);case 2:e.t0=this.openedFor,e.next="vid_content"===e.t0?5:7;break;case 5:return this.serviceColumn.vid_content.splice(this.videoIndex,1),e.abrupt("break",8);case 7:return e.abrupt("break",8);case 8:this.notifyVue("Video Deleted Successfully","success"),this.setVideoDataFlag(!1,null,"",null,"");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Service Column"!==this.$route.name||this.$router.push({path:"/dashboard/services"})},mounted:function(){"Edit Service Column"===this.$route.name&&(this.serviceColumn.order=this.editData.order,this.serviceColumn.type=this.editData.type,this.serviceColumn.ratio=this.editData.ratio,this.serviceColumn.fillable=this.editData.fillable,this.serviceColumn.is_vid_extenral_enabled=this.editData.is_vid_extenral_enabled,this.serviceColumn.vid_extenral=this.editData.vid_extenral||"",this.serviceColumn.isAutoPlay=!!this.editData.vid_content[0]&&this.editData.vid_content[0].is_auto_play,this.serviceColumn.img_content=this.editData.img_content,this.serviceColumn.vid_content=this.editData.vid_content,this.editData.type===f["TITLE"]&&(this.serviceColumn.title=this.editData.content),this.editData.type===f["DESCRIPTION"]&&(this.serviceColumn.description=this.editData.content),this.setRequiredFieldsAccrodingToContentType(this.editData.type))},components:{ErrorMessage:l["a"],ImagePreview:v["a"],DeleteDialog:p["a"],VideoPreview:m["a"]}},y=g,E=(i("1927"),i("2877")),w=Object(E["a"])(y,r,s,!1,null,null,null);t["default"]=w.exports},"9a0d":function(e,t,i){},a50b:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"preview-video"},[i("div",{staticClass:"close",attrs:{role:"button"},on:{click:e.fireDeleteModal}},[e._v(" × ")]),i("video",{staticStyle:{width:"100%"},attrs:{preload:"auto",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:e.video.url,type:"video/mp4"}})])])},s=[],a={props:["video","setShowDeleteDialogFlag","openedFor","videoIndex"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.video.id,this.openedFor,this.videoIndex,"video")}}},n=a,o=(i("4cdf"),i("2877")),l=Object(o["a"])(n,r,s,!1,null,"c58c49fa",null);t["a"]=l.exports},a923:function(e,t,i){"use strict";i("c5f6");var r=function(e){return document.queryCommandState(e)},s=function(e){return document.queryCommandValue(e)},a=["bold","italic","underline",{icon:'<img src="/images/increase_font.svg" />',title:"Increase Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.min(Number(s("FontSize"))+1,7))}},{icon:'<img src="/images/decrease_font.svg" />',title:"Decrease Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.max(Number(s("FontSize"))-1,1))}},{icon:'<i class="nc-icon nc-align-left-2"></i>',title:"Align Left",state:function(){return r("justifyLeft")},result:function(){return window.pell.exec("justifyLeft")}},{icon:'<i class="nc-icon nc-align-center"></i>',title:"Align Center",state:function(){return r("justifyCenter")},result:function(){return window.pell.exec("justifyCenter")}},{icon:'<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',title:"Align Right",state:function(){return r("justifyRight")},result:function(){return window.pell.exec("justifyRight")}},"olist","ulist",{name:"link",result:function(){var e=window.prompt("Enter the link URL");e&&window.pell.exec("createLink",e)}}];t["a"]=a},d752:function(e,t,i){var r=i("7726").parseFloat,s=i("aa77").trim;e.exports=1/r(i("fdef")+"-0")!==-1/0?function(e){var t=s(String(e),3),i=r(t);return 0===i&&"-"==t.charAt(0)?-0:i}:r},ede8:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return void 0!==e.fieldErrors?i("span",e._l(e.fieldErrors,(function(t,r){return i("p",{key:r,staticClass:"error-message"},[e._v(" "+e._s(t)+" ")])})),0):e._e()},s=[],a={props:["fieldErrors"]},n=a,o=i("2877"),l=Object(o["a"])(n,r,s,!1,null,null,null);t["a"]=l.exports},f9a7:function(e,t,i){"use strict";i("6c8e")}}]);
//# sourceMappingURL=ServiceColumnsAddEdit.29276e61.js.map