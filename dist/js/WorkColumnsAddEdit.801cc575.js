(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WorkColumnsAddEdit"],{"0203":function(t,e,i){},"0a93":function(t,e,i){"use strict";i.r(e),i.d(e,"TITLE",(function(){return r})),i.d(e,"DESCRIPTION",(function(){return o})),i.d(e,"IMAGE",(function(){return a})),i.d(e,"SLIDER",(function(){return n})),i.d(e,"VIDEO",(function(){return s}));var r="TITLE",o="DESCRIPTION",a="IMAGE",n="SLIDER",s="VIDEO"},1485:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preview-image"},[t.disabled?t._e():i("div",{staticClass:"close",attrs:{role:"button"},on:{click:t.fireDeleteModal}},[t._v(" × ")]),i("img",{attrs:{src:t.image.url,alt:"preview"}})])},o=[],a={props:["image","setShowDeleteDialogFlag","openedFor","imageIndex","disabled"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.image.id,this.openedFor,this.imageIndex,"image")}}},n=a,s=(i("19cf"),i("2877")),l=Object(s["a"])(n,r,o,!1,null,"1f659b06",null);e["a"]=l.exports},"19cf":function(t,e,i){"use strict";i("0203")},"444d":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[t._m(0),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/works/sections/list/"+t.workSections.id}},[t._v(t._s(t.workSections.title)+" Work Sections")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/works/rows/list/"+t.workRowsData.id}},[t._v("Section "+t._s(t.workRowsData.order)+" Rows")])],1),i("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[i("router-link",{attrs:{to:"/dashboard/works/columns/list/"+t.rowId}},[t._v(" Columns ")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.operation)+" ")])])]),t._m(1),i("div",{staticClass:"alert alert-dark w-100 m-0 p-0 d-flex",attrs:{role:"alert"}},[t.calculateTotalWidth()>0?i("div",{staticClass:"alert alert-info m-0",style:"width:"+t.calculateTotalWidth()+"%",attrs:{role:"alert"}},[t._v(" Used Width: "),i("strong",[i("h2",[t._v(t._s(t.calculateTotalWidth())+"%")])])]):t._e(),(100-t.calculateTotalWidth()).toFixed(1)>0?i("div",{staticClass:"alert alert-dark m-0 text-dark",style:"width:"+(100-t.calculateTotalWidth()).toFixed(1)+"%",attrs:{role:"alert"}},[t._v(" Remain Width: "),i("strong",[i("h2",[t._v(t._s((100-t.calculateTotalWidth()).toFixed(1))+"%")])])]):t._e()]),i("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.operation))]),i("form",[i("div",{staticClass:"row d-flex m-0"},t._l(t.workRowData.columns,(function(e,r){return i("div",{key:r,class:["column",100===t.currentWidth()?"column--full":"column--not-full"],style:"width:"+e.ratio+"%"},[i("p",[t._v(t._s(e.ratio)+"%")]),e.fillable?i("p",[t._v(t._s(e.type))]):i("p")])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Order",autofocus:!0,isRequired:!0},model:{value:t.workColumn.order,callback:function(e){t.$set(t.workColumn,"order",e)},expression:"workColumn.order"}}),i("ErrorMessage",{attrs:{fieldErrors:t.errors.order}})],1),i("div",{staticClass:"col-12 col-md-6"},[i("div",{staticClass:"form-group"},[t._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.workColumn.type,expression:"workColumn.type"}],staticClass:"form-control",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.workColumn,"type",e.target.multiple?i:i[0])},function(e){return t.setRequiredFieldsAccrodingToContentType(e.target.value)}]}},[i("option",{attrs:{value:"-1"}},[t._v("--Please choose content type")]),t._l(t.WORK_COLUMNS_CONTENT_TYPES,(function(e,r){return i("option",{key:r,attrs:{":selected":t.workColumn.type===e},domProps:{value:e}},[t._v(t._s(e.toLowerCase()))])}))],2),i("ErrorMessage",{attrs:{fieldErrors:t.errors.type}})],1)])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4"},[i("base-input",{attrs:{type:"number",step:"0.1",label:"Width in %",placeholder:"Enter Width in %",isRequired:!0},model:{value:t.workColumn.ratio,callback:function(e){t.$set(t.workColumn,"ratio",e)},expression:"workColumn.ratio"}}),i("ErrorMessage",{attrs:{fieldErrors:t.errors.ratio}})],1),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.workColumn.fillable,expression:"workColumn.fillable"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"fillable"},domProps:{checked:Array.isArray(t.workColumn.fillable)?t._i(t.workColumn.fillable,null)>-1:t.workColumn.fillable},on:{change:function(e){var i=t.workColumn.fillable,r=e.target,o=!!r.checked;if(Array.isArray(i)){var a=null,n=t._i(i,a);r.checked?n<0&&t.$set(t.workColumn,"fillable",i.concat([a])):n>-1&&t.$set(t.workColumn,"fillable",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.workColumn,"fillable",o)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"fillable"}},[t._v("Has Content")])])]),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.workColumn.isAutoPlay,expression:"workColumn.isAutoPlay"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"isAutoPlay"},domProps:{checked:Array.isArray(t.workColumn.isAutoPlay)?t._i(t.workColumn.isAutoPlay,null)>-1:t.workColumn.isAutoPlay},on:{change:[function(e){var i=t.workColumn.isAutoPlay,r=e.target,o=!!r.checked;if(Array.isArray(i)){var a=null,n=t._i(i,a);r.checked?n<0&&t.$set(t.workColumn,"isAutoPlay",i.concat([a])):n>-1&&t.$set(t.workColumn,"isAutoPlay",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.workColumn,"isAutoPlay",o)},t.updateVideoData]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"isAutoPlay"}},[t._v("Is Autoplay Video")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"text",label:"External Video Url",placeholder:"Enter External Video Url",isRequired:t.validation["video external"].isRequired},model:{value:t.workColumn.vid_extenral,callback:function(e){t.$set(t.workColumn,"vid_extenral",e)},expression:"workColumn.vid_extenral"}}),i("ErrorMessage",{attrs:{fieldErrors:t.errors.vid_extenral}})],1),i("div",{staticClass:"col-12 col-md-6 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.workColumn.is_vid_extenral_enabled,expression:"workColumn.is_vid_extenral_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is_vid_extenral_enabled"},domProps:{checked:Array.isArray(t.workColumn.is_vid_extenral_enabled)?t._i(t.workColumn.is_vid_extenral_enabled,null)>-1:t.workColumn.is_vid_extenral_enabled},on:{change:[function(e){var i=t.workColumn.is_vid_extenral_enabled,r=e.target,o=!!r.checked;if(Array.isArray(i)){var a=null,n=t._i(i,a);r.checked?n<0&&t.$set(t.workColumn,"is_vid_extenral_enabled",i.concat([a])):n>-1&&t.$set(t.workColumn,"is_vid_extenral_enabled",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.workColumn,"is_vid_extenral_enabled",o)},t.setVideoValidation]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"is_vid_extenral_enabled"}},[t._v("Has External Video")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("base-input",{attrs:{type:"text",label:"Tile",placeholder:"Enter Title",isRequired:t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.TITLE},model:{value:t.workColumn.title,callback:function(e){t.$set(t.workColumn,"title",e)},expression:"workColumn.title"}}),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.TITLE?i("div",[i("ErrorMessage",{attrs:{fieldErrors:t.errors.title}})],1):t._e()],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Description"),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),i("vue-pell-editor",{attrs:{actions:t.editorOptions,"style-with-css":!1,placeholder:""},model:{value:t.workColumn.description,callback:function(e){t.$set(t.workColumn,"description",e)},expression:"workColumn.description"}}),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("div",[i("ErrorMessage",{attrs:{fieldErrors:t.errors.description}})],1):t._e()],1)])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[t._v("Choose Content Images"),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.IMAGE||t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.SLIDER?i("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),i("input",{ref:"img_content",attrs:{type:"file",id:"media-images",accept:"image/png, image/jpeg, image/gif",multiple:t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.SLIDER},on:{change:function(e){return t.setFile(e,"img_content")}}}),i("br"),void 0!==t.editData&&("Edit Work Column"===t.operation||null!==t.editData.img_content&&null!==t.editData.img_content)?i("div",{staticClass:"image-preview-list"},t._l(t.editData.img_content,(function(e,r){return i("ImagePreview",{key:e.id,attrs:{image:e,setShowDeleteDialogFlag:t.setImageDataFlag,openedFor:"img_content",imageIndex:r}})})),1):t._e(),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.IMAGE||t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.SLIDER?i("div",[i("ErrorMessage",{attrs:{fieldErrors:t.errors.img_content}})],1):t._e()])])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[t._v("Choose Content Videos"),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.VIDEO&&t.validation["videos content"].isRequired?i("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),i("input",{ref:"vid_content",attrs:{type:"file",id:"logo",accept:"video/*"},on:{change:function(e){return t.setFile(e,"vid_content")}}}),i("br"),void 0!==t.editData&&("Edit Work Column"===t.operation||null!==t.editData.vid_content&&null!==t.editData.vid_content)?i("div",{staticClass:"image-preview-list"},t._l(t.editData.vid_content,(function(e,r){return i("VideoPreview",{key:e.id,attrs:{video:e,setShowDeleteDialogFlag:t.setVideoDataFlag,openedFor:"vid_content",videoIndex:r}})})),1):t._e(),t.workColumn.type===t.WORK_COLUMNS_CONTENT_TYPES.VIDEO?i("div",[i("ErrorMessage",{attrs:{fieldErrors:t.errors.vid_content}})],1):t._e()])])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:t.saveData}},[t._v(" Save ")])]),i("div",{staticClass:"clearfix"}),i("DeleteDialog",{attrs:{showFlag:t.showFlag,setShowDeleteDialogFlag:"video"===t.contentType?t.setVideoDataFlag:t.setImageDataFlag,item:"video"===t.contentType?"Video":"Image",deleteAction:"video"===t.contentType?t.removeVideo:t.removeImage}})],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"/dashboard/works"}},[t._v("Works")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[i("strong",[t._v("Hint")]),t._v(" Total Width must be less than or equal"),i("strong",[t._v(" 100%")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[t._v("Column Content Type"),i("span",{staticClass:"error-message"},[t._v(" *")])])}],a=(i("8e6e"),i("cadf"),i("456d"),i("c5f6"),i("5df2"),i("ac6a"),i("96cf"),i("3b8d")),n=i("bd86"),s=i("2f62"),l=i("ede8"),c=i("6e87"),u=i("62c4"),d=i("a923"),m=i("1485"),p=i("a50b"),v=i("50e7"),h=i("bcb6"),f=i("0a93");function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var C={order:1,type:"-1",title:"",description:"",vid_extenral:"",is_vid_extenral_enabled:!1,ratio:0,fillable:!1,isAutoPlay:!1,img_content:[],vid_content:[]},b={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,workColumn:w({},C),openedFor:"",contentType:"",imageIndex:null,showFlag:!1,imageId:null,videoId:null,errors:{},validation:{order:{isRequired:!0},type:{isRequired:!0},title:{isRequired:!0},description:{isRequired:!0},ratio:{isRequired:!0},fillable:{isRequired:!0},"is auto play":{isRequired:!1},"is video external":{isRequired:!1},"images content":{isRequired:!0},"videos content":{isRequired:!0},"video external":{isRequired:!1}},aliases:{order:"order",type:"type",title:"title",description:"description",ratio:"ratio",fillable:"fillable",isAutoPlay:"is auto play",is_vid_extenral_enabled:"is video external",img_content:"images content",vid_content:"videos content",vid_extenral:"video external"},editorOptions:d["a"]}},computed:w(w({},Object(s["d"])({workRowData:function(t){return t.works.workRow},workRowsData:function(t){return t.works.workRows},workSections:function(t){return t.works.workSections}})),{},{WORK_COLUMNS_CONTENT_TYPES:function(){return f},rowId:function(){return this.$router.history.current.params.rowId}}),methods:w(w({},Object(s["b"])({fetchColumnsRows:c["a"].works.actions.FETCH_WORK_COLUMNS,createColumn:c["a"].works.actions.CREATE_WORK_COLUMN,updateColumn:c["a"].works.actions.UPDATE_WORK_COLUMN,updateVideo:c["a"].works.actions.UPDATE_VIDEO,deleteImage:c["a"].app.actions.DELETE_IMAGE,deleteVideo:c["a"].app.actions.DELETE_VIDEO})),{},{updateVideoData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Edit Work Column"!==this.operation||this.workColumn.type!==f["VIDEO"]){t.next=4;break}return e={videoId:this.workColumn.vid_content[0].id,isAutoPlay:this.workColumn.isAutoPlay},t.next=4,this.updateVideo(e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setVideoValidation:function(t){t.target.checked?this.workColumn.type===f["VIDEO"]&&(this.validation["video external"].isRequired=!0,this.validation["videos content"].isRequired=!1):this.workColumn.type===f["VIDEO"]&&(this.validation["video external"].isRequired=!1,this.validation["videos content"].isRequired=!0)},setRequiredFieldsAccrodingToContentType:function(t){var e,i=this,r=["title","description","images content","videos content","video external"];switch(t){case f["TITLE"]:e="title";break;case f["DESCRIPTION"]:e="description";break;case f["IMAGE"]:e="images content";break;case f["SLIDER"]:e="images content";break;case f["VIDEO"]:e=this.workColumn.is_vid_extenral_enabled?"video external":"videos content";break;default:break}r.forEach((function(t){i.validation[t].isRequired=t===e}))},setFile:function(t,e){var i=t.target.files;i.length&&(this.workColumn[e]=i)},setImageDataFlag:function(t,e,i,r,o){this.showFlag=t,this.imageId=e,this.openedFor=i,this.imageIndex=r,this.contentType=o},setVideoDataFlag:function(t,e,i,r,o){this.showFlag=t,this.videoId=e,this.openedFor=i,this.videoIndex=r,this.contentType=o},currentWidth:function(){var t=this,e=0;return"Edit Work Column"===this.operation?this.workRowData.columns.forEach((function(i){i.id!==t.editData.id&&(e+=Number.parseFloat(i.ratio))})):this.workRowData.columns.forEach((function(t){e+=Number.parseFloat(t.ratio)})),e.toFixed(1)},calculateTotalWidth:function(){var t=Number.parseFloat(this.currentWidth());return t+=Number.parseFloat(this.workColumn.ratio),t.toFixed(1)},saveData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,r,o,a,n,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(u["a"])(this.workColumn,this.aliases,this.validation),this.errors=w({},e.errors),0===e.length){t.next=4;break}return t.abrupt("return");case 4:if(!(this.calculateTotalWidth()>100)){t.next=7;break}return this.notifyVue("Row Width will be greater than 100%, Please adjust column width","danger"),t.abrupt("return");case 7:if(t.prev=7,i="",this.workColumn.type===f["TITLE"]&&(i=this.workColumn.title),this.workColumn.type===f["DESCRIPTION"]&&(i=Object(h["d"])(this.workColumn.description)),r={order:this.workColumn.order,type:this.workColumn.type,content:i,ratio:this.workColumn.ratio,fillable:this.workColumn.fillable,is_vid_extenral_enabled:this.workColumn.is_vid_extenral_enabled,vid_extenral:this.workColumn.vid_extenral,imagesData:{img_content:this.$refs.img_content.files},videosData:{vid_content:this.$refs.vid_content.files}},o=this.$router.history.current.params.rowId,a=this.workRowData.id,"Edit Work Column"!==this.operation){t.next=21;break}return t.next=17,this.updateColumn(w(w({},r),{},{columnId:this.editData.id,rowId:o}));case 17:this.notifyVue("Work Column Updated Successfully","success"),this.$router.push("/dashboard/works/columns/list/".concat(a)),t.next=27;break;case 21:return t.next=23,this.createColumn(w(w({},r),{},{rowId:o,isAutoPlay:this.workColumn.isAutoPlay}));case 23:return n={rowId:o,requestSource:"dashboard"},t.next=26,this.fetchColumnsRows(n);case 26:this.notifyVue("Work Column Created Successfully","success");case 27:this.workColumn=w({},C),this.$refs.img_content.value=null,this.$refs.vid_content.value=null,t.next=35;break;case 32:t.prev=32,t.t0=t["catch"](7),JSON.parse(t.t0).forEach((function(t){s.notifyVue(t.message,"danger")}));case 35:case"end":return t.stop()}}),t,this,[[7,32]])})));function e(){return t.apply(this,arguments)}return e}(),removeImage:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteImage(this.imageId);case 2:t.t0=this.openedFor,t.next="img_content"===t.t0?5:7;break;case 5:return this.workColumn.img_content.splice(this.imageIndex,1),t.abrupt("break",8);case 7:return t.abrupt("break",8);case 8:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null,"");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeVideo:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteVideo(this.videoId);case 2:t.t0=this.openedFor,t.next="vid_content"===t.t0?5:7;break;case 5:return this.workColumn.vid_content.splice(this.videoIndex,1),t.abrupt("break",8);case 7:return t.abrupt("break",8);case 8:this.notifyVue("Video Deleted Successfully","success"),this.setVideoDataFlag(!1,null,"",null,"");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Work Column"!==this.$route.name||this.$router.push({path:"/dashboard/works"})},mounted:function(){"Edit Work Column"===this.$route.name&&(this.workColumn.order=this.editData.order,this.workColumn.type=this.editData.type,this.workColumn.ratio=this.editData.ratio,this.workColumn.fillable=this.editData.fillable,this.workColumn.is_vid_extenral_enabled=this.editData.is_vid_extenral_enabled,this.workColumn.vid_extenral=this.editData.vid_extenral||"",this.workColumn.isAutoPlay=!!this.editData.vid_content[0]&&this.editData.vid_content[0].is_auto_play,this.workColumn.img_content=this.editData.img_content,this.workColumn.vid_content=this.editData.vid_content,this.editData.type===f["TITLE"]&&(this.workColumn.title=this.editData.content),this.editData.type===f["DESCRIPTION"]&&(this.workColumn.description=this.editData.content),this.setRequiredFieldsAccrodingToContentType(this.editData.type))},components:{ErrorMessage:l["a"],ImagePreview:m["a"],DeleteDialog:v["a"],VideoPreview:p["a"]}},g=b,k=(i("4f29"),i("2877")),y=Object(k["a"])(g,r,o,!1,null,null,null);e["default"]=y.exports},"4cdf":function(t,e,i){"use strict";i("9a0d")},"4f29":function(t,e,i){"use strict";i("d033")},"50e7":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"delete-modal",style:t.showFlag?"display:block":"display:none",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[i("div",{staticClass:"delete-modal-content",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"delete-modal-header"},[i("span",{staticClass:"close",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v("×")]),i("h2",[t._v("Delete "+t._s(t.item))])]),i("div",{staticClass:"delete-modal-body"},[i("form",[i("div",{staticClass:"form-group delete-modal-body__text"},[i("p",[t._v("Do you want to delete this "+t._s(t.item.toLowerCase())+"?")])]),i("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v(" Cancel ")]),i("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:t.deleteAction}},[t._v(" Delete ")])])])])])},o=[],a={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},n=a,s=(i("f9a7"),i("2877")),l=Object(s["a"])(n,r,o,!1,null,"d3f2235c",null);e["a"]=l.exports},"5df2":function(t,e,i){var r=i("5ca1"),o=i("d752");r(r.S+r.F*(Number.parseFloat!=o),"Number",{parseFloat:o})},"62c4":function(t,e,i){"use strict";i("8e6e"),i("cadf"),i("456d"),i("ac6a");var r=i("bd86"),o=function(t){var e=/^([a-zA-Z0-9])(([a-zA-Z0-9])*([\._\+-])*([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/;return e.test(t)},a=o;function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l=function(t,e,i){var r=[];return""!==t&&"-1"!==t&&0!==t.length||!e.isRequired||r.push("".concat(i," is required")),t.length<e.minLength&&r.push("".concat(i," at least ").concat(e.minLength," character")),e.isEmail&&!a(t)&&r.push("Invalid email format"),e.isFile&&""===t&&r.push("Please choose proper file"),r},c=function(t,e,i,o){var a={};return a=s(s({},a),{},Object(r["a"])({},e,l(t,o[i],i))),a},u=function(t,e,i){var r={},o=0;return Object.keys(t).forEach((function(o){r=s(s({},r),c(t[o],o,e[o],i))})),Object.keys(r).forEach((function(t){return o+=r[t].length})),{errors:r,length:o}};e["a"]=u},"6c8e":function(t,e,i){},"9a0d":function(t,e,i){},a50b:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preview-video"},[i("div",{staticClass:"close",attrs:{role:"button"},on:{click:t.fireDeleteModal}},[t._v(" × ")]),i("video",{staticStyle:{width:"100%"},attrs:{preload:"auto",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:t.video.url,type:"video/mp4"}})])])},o=[],a={props:["video","setShowDeleteDialogFlag","openedFor","videoIndex"],methods:{fireDeleteModal:function(){this.setShowDeleteDialogFlag(!0,this.video.id,this.openedFor,this.videoIndex,"video")}}},n=a,s=(i("4cdf"),i("2877")),l=Object(s["a"])(n,r,o,!1,null,"c58c49fa",null);e["a"]=l.exports},a923:function(t,e,i){"use strict";i("c5f6");var r=function(t){return document.queryCommandState(t)},o=function(t){return document.queryCommandValue(t)},a=["bold","italic","underline",{icon:'<img src="/images/increase_font.svg" />',title:"Increase Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.min(Number(o("FontSize"))+1,7))}},{icon:'<img src="/images/decrease_font.svg" />',title:"Decrease Font Size",state:function(){return r("fontSize")},result:function(){return window.pell.exec("fontSize",Math.max(Number(o("FontSize"))-1,1))}},{icon:'<i class="nc-icon nc-align-left-2"></i>',title:"Align Left",state:function(){return r("justifyLeft")},result:function(){return window.pell.exec("justifyLeft")}},{icon:'<i class="nc-icon nc-align-center"></i>',title:"Align Center",state:function(){return r("justifyCenter")},result:function(){return window.pell.exec("justifyCenter")}},{icon:'<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',title:"Align Right",state:function(){return r("justifyRight")},result:function(){return window.pell.exec("justifyRight")}},"olist","ulist",{name:"link",result:function(){var t=window.prompt("Enter the link URL");t&&window.pell.exec("createLink",t)}}];e["a"]=a},d033:function(t,e,i){},d752:function(t,e,i){var r=i("7726").parseFloat,o=i("aa77").trim;t.exports=1/r(i("fdef")+"-0")!==-1/0?function(t){var e=o(String(t),3),i=r(e);return 0===i&&"-"==e.charAt(0)?-0:i}:r},ede8:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return void 0!==t.fieldErrors?i("span",t._l(t.fieldErrors,(function(e,r){return i("p",{key:r,staticClass:"error-message"},[t._v(" "+t._s(e)+" ")])})),0):t._e()},o=[],a={props:["fieldErrors"]},n=a,s=i("2877"),l=Object(s["a"])(n,r,o,!1,null,null,null);e["a"]=l.exports},f9a7:function(t,e,i){"use strict";i("6c8e")}}]);
//# sourceMappingURL=WorkColumnsAddEdit.801cc575.js.map