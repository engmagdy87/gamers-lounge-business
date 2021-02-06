(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ServiceColumnsAddEdit"],{1927:function(e,t,i){"use strict";var s=i("cd4a"),r=i.n(s);r.a},"7a06":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[e._m(0),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/services/sections/list/"+e.serviceSections.id}},[e._v(e._s(e.serviceSections.title)+" Service Sections")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard/services/rows/list/"+e.serviceRowsData.id}},[e._v("Section "+e._s(e.serviceRowsData.order)+" Rows")])],1),i("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[i("router-link",{attrs:{to:"/dashboard/services/columns/list/"+e.rowId}},[e._v("\n          Columns\n        ")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("\n        "+e._s(e.operation)+"\n      ")])])]),e._m(1),i("div",{staticClass:"alert alert-dark w-100 m-0 p-0 d-flex",attrs:{role:"alert"}},[e.calculateTotalWidth()>0?i("div",{staticClass:"alert alert-info m-0",style:"width:"+e.calculateTotalWidth()+"%",attrs:{role:"alert"}},[e._v("\n      Used Width:\n      "),i("strong",[i("h2",[e._v(e._s(e.calculateTotalWidth())+"%")])])]):e._e(),(100-e.calculateTotalWidth()).toFixed(1)>0?i("div",{staticClass:"alert alert-dark m-0 text-dark",style:"width:"+(100-e.calculateTotalWidth()).toFixed(1)+"%",attrs:{role:"alert"}},[e._v("\n      Remain Width:\n      "),i("strong",[i("h2",[e._v(e._s((100-e.calculateTotalWidth()).toFixed(1))+"%")])])]):e._e()]),i("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.operation))]),i("form",[i("div",{staticClass:"row d-flex m-0"},e._l(e.serviceRowData.columns,(function(t,s){return i("div",{key:s,class:["column",100===e.currentWidth()?"column--full":"column--not-full"],style:"width:"+t.ratio+"%"},[i("p",[e._v(e._s(t.ratio)+"%")]),t.fillable?i("p",[e._v(e._s(t.type))]):i("p")])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[i("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Order",autofocus:!0,isRequired:!0},model:{value:e.serviceColumn.order,callback:function(t){e.$set(e.serviceColumn,"order",t)},expression:"serviceColumn.order"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.order}})],1),i("div",{staticClass:"col-12 col-md-6"},[i("div",{staticClass:"form-group"},[e._m(2),i("select",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.type,expression:"serviceColumn.type"}],staticClass:"form-control",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serviceColumn,"type",t.target.multiple?i:i[0])},function(t){return e.setRequiredFieldsAccrodingToContentType(t.target.value)}]}},[i("option",{attrs:{value:"-1"}},[e._v("--Please choose content type")]),e._l(e.SERVICE_COLUMNS_CONTENT_TYPES,(function(t,s){return i("option",{key:s,attrs:{":selected":e.serviceColumn.type===t},domProps:{value:t}},[e._v(e._s(t.toLowerCase()))])}))],2),i("ErrorMessage",{attrs:{fieldErrors:e.errors.type}})],1)])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4"},[i("base-input",{attrs:{type:"number",step:"0.1",label:"Width in %",placeholder:"Enter Width in %",isRequired:!0},model:{value:e.serviceColumn.ratio,callback:function(t){e.$set(e.serviceColumn,"ratio",t)},expression:"serviceColumn.ratio"}}),i("ErrorMessage",{attrs:{fieldErrors:e.errors.ratio}})],1),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.fillable,expression:"serviceColumn.fillable"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"fillable"},domProps:{checked:Array.isArray(e.serviceColumn.fillable)?e._i(e.serviceColumn.fillable,null)>-1:e.serviceColumn.fillable},on:{change:function(t){var i=e.serviceColumn.fillable,s=t.target,r=!!s.checked;if(Array.isArray(i)){var a=null,o=e._i(i,a);s.checked?o<0&&e.$set(e.serviceColumn,"fillable",i.concat([a])):o>-1&&e.$set(e.serviceColumn,"fillable",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.serviceColumn,"fillable",r)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"fillable"}},[e._v("Has Content")])])]),i("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceColumn.isAutoPlay,expression:"serviceColumn.isAutoPlay"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"isAutoPlay"},domProps:{checked:Array.isArray(e.serviceColumn.isAutoPlay)?e._i(e.serviceColumn.isAutoPlay,null)>-1:e.serviceColumn.isAutoPlay},on:{change:[function(t){var i=e.serviceColumn.isAutoPlay,s=t.target,r=!!s.checked;if(Array.isArray(i)){var a=null,o=e._i(i,a);s.checked?o<0&&e.$set(e.serviceColumn,"isAutoPlay",i.concat([a])):o>-1&&e.$set(e.serviceColumn,"isAutoPlay",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.serviceColumn,"isAutoPlay",r)},e.updateVideoData]}}),i("label",{staticClass:"custom-control-label",attrs:{for:"isAutoPlay"}},[e._v("Is Autoplay Video")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("base-input",{attrs:{type:"text",label:"Tile",placeholder:"Enter Title",isRequired:e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.TITLE},model:{value:e.serviceColumn.title,callback:function(t){e.$set(e.serviceColumn,"title",t)},expression:"serviceColumn.title"}}),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.TITLE?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.title}})],1):e._e()],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Description"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("span",{staticClass:"error-message"},[e._v("\n              *")]):e._e()]),i("vue-pell-editor",{attrs:{actions:e.editorOptions,"style-with-css":!1,placeholder:""},model:{value:e.serviceColumn.description,callback:function(t){e.$set(e.serviceColumn,"description",t)},expression:"serviceColumn.description"}}),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.description}})],1):e._e()],1)])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[e._v("Choose Content Images"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.IMAGE||e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER?i("span",{staticClass:"error-message"},[e._v("\n              *")]):e._e()]),i("input",{ref:"img_content",attrs:{type:"file",id:"media-images",accept:"image/png, image/jpeg, image/gif",multiple:e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER},on:{change:function(t){return e.setFile(t,"img_content")}}}),i("br"),void 0!==e.editData&&("Edit Service Column"===e.operation||null!==e.editData.img_content&&null!==e.editData.img_content)?i("div",{staticClass:"image-preview-list"},e._l(e.editData.img_content,(function(t,s){return i("ImagePreview",{key:t.id,attrs:{image:t,setShowDeleteDialogFlag:e.setImageDataFlag,openedFor:"img_content",imageIndex:s}})})),1):e._e(),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.IMAGE||e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.SLIDER?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.img_content}})],1):e._e()])])]),i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col"},[i("div",[i("label",{staticClass:"mr-5"},[e._v("Choose Content Videos"),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.VIDEO?i("span",{staticClass:"error-message"},[e._v("\n              *")]):e._e()]),i("input",{ref:"vid_content",attrs:{type:"file",id:"logo",accept:"video/*"},on:{change:function(t){return e.setFile(t,"vid_content")}}}),i("br"),void 0!==e.editData&&("Edit Service Column"===e.operation||null!==e.editData.vid_content&&null!==e.editData.vid_content)?i("div",{staticClass:"image-preview-list"},e._l(e.editData.vid_content,(function(t,s){return i("VideoPreview",{key:t.id,attrs:{video:t,setShowDeleteDialogFlag:e.setVideoDataFlag,openedFor:"vid_content",videoIndex:s}})})),1):e._e(),e.serviceColumn.type===e.SERVICE_COLUMNS_CONTENT_TYPES.VIDEO?i("div",[i("ErrorMessage",{attrs:{fieldErrors:e.errors.vid_content}})],1):e._e()])])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:e.saveData}},[e._v("\n        Save\n      ")])]),i("div",{staticClass:"clearfix"}),i("DeleteDialog",{attrs:{showFlag:e.showFlag,setShowDeleteDialogFlag:"video"===e.contentType?e.setVideoDataFlag:e.setImageDataFlag,item:"video"===e.contentType?"Video":"Image",deleteAction:"video"===e.contentType?e.removeVideo:e.removeImage}})],1)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"/dashboard/services"}},[e._v("Services")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[i("strong",[e._v("Hint")]),e._v(" Total Width must be less than or equal"),i("strong",[e._v("\n      100%")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",[e._v("Column Content Type"),i("span",{staticClass:"error-message"},[e._v(" *")])])}],a=(i("8e6e"),i("cadf"),i("456d"),i("c5f6"),i("5df2"),i("ac6a"),i("96cf"),i("3b8d")),o=i("bd86"),n=i("2f62"),c=i("ede8"),l=i("6e87"),u=i("62c4"),d=i("a923"),v=i("1485"),m=i("a50b"),p=i("50e7"),h=i("bcb6"),C=i("0a93");function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){Object(o["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={order:1,type:"-1",title:"",description:"",ratio:0,fillable:!1,isAutoPlay:!1,img_content:[],vid_content:[]},g={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,serviceColumn:_({},b),openedFor:"",contentType:"",imageIndex:null,showFlag:!1,imageId:null,videoId:null,errors:{},validation:{order:{isRequired:!0},type:{isRequired:!0},title:{isRequired:!0},description:{isRequired:!0},ratio:{isRequired:!0},fillable:{isRequired:!0},"is auto play":{isRequired:!1},"images content":{isRequired:!0},"videos content":{isRequired:!0}},aliases:{order:"order",type:"type",title:"title",description:"description",ratio:"ratio",fillable:"fillable",isAutoPlay:"is auto play",img_content:"images content",vid_content:"videos content"},editorOptions:d["a"]}},computed:_(_({},Object(n["d"])({serviceRowData:function(e){return e.services.serviceRow},serviceRowsData:function(e){return e.services.serviceRows},serviceSections:function(e){return e.services.serviceSections}})),{},{SERVICE_COLUMNS_CONTENT_TYPES:function(){return C},rowId:function(){return this.$router.history.current.params.rowId}}),methods:_(_({},Object(n["b"])({fetchColumnsRows:l["a"].services.actions.FETCH_SERVICE_COLUMNS,createColumn:l["a"].services.actions.CREATE_SERVICE_COLUMN,updateColumn:l["a"].services.actions.UPDATE_SERVICE_COLUMN,updateVideo:l["a"].services.actions.UPDATE_VIDEO,deleteImage:l["a"].app.actions.DELETE_IMAGE,deleteVideo:l["a"].app.actions.DELETE_VIDEO})),{},{updateVideoData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Edit Service Column"!==this.operation||this.serviceColumn.type!==C["VIDEO"]){e.next=4;break}return t={videoId:this.serviceColumn.vid_content[0].id,isAutoPlay:this.serviceColumn.isAutoPlay},e.next=4,this.updateVideo(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setRequiredFieldsAccrodingToContentType:function(e){var t,i=this,s=["title","description","images content","videos content"];switch(e){case C["TITLE"]:t="title";break;case C["DESCRIPTION"]:t="description";break;case C["IMAGE"]:t="images content";break;case C["SLIDER"]:t="images content";break;case C["VIDEO"]:t="videos content";break;default:break}s.forEach((function(e){i.validation[e].isRequired=e===t}))},setFile:function(e,t){var i=e.target.files;i.length&&(this.serviceColumn[t]=i)},setImageDataFlag:function(e,t,i,s,r){this.showFlag=e,this.imageId=t,this.openedFor=i,this.imageIndex=s,this.contentType=r},setVideoDataFlag:function(e,t,i,s,r){this.showFlag=e,this.videoId=t,this.openedFor=i,this.videoIndex=s,this.contentType=r},currentWidth:function(){var e=this,t=0;return"Edit Service Column"===this.operation?this.serviceRowData.columns.forEach((function(i){i.id!==e.editData.id&&(t+=Number.parseFloat(i.ratio))})):this.serviceRowData.columns.forEach((function(e){t+=Number.parseFloat(e.ratio)})),t.toFixed(1)},calculateTotalWidth:function(){var e=Number.parseFloat(this.currentWidth());return e+=Number.parseFloat(this.serviceColumn.ratio),e.toFixed(1)},saveData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,i,s,r,a,o,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(u["a"])(this.serviceColumn,this.aliases,this.validation),this.errors=_({},t.errors),0===t.length){e.next=4;break}return e.abrupt("return");case 4:if(!(this.calculateTotalWidth()>100)){e.next=7;break}return this.notifyVue("Row Width will be greater than 100%, Please adjust column width","danger"),e.abrupt("return");case 7:if(e.prev=7,i="",this.serviceColumn.type===C["TITLE"]&&(i=this.serviceColumn.title),this.serviceColumn.type===C["DESCRIPTION"]&&(i=Object(h["c"])(this.serviceColumn.description)),s={order:this.serviceColumn.order,type:this.serviceColumn.type,content:i,ratio:this.serviceColumn.ratio,fillable:this.serviceColumn.fillable,imagesData:{img_content:this.$refs.img_content.files},videosData:{vid_content:this.$refs.vid_content.files}},r=this.$router.history.current.params.rowId,a=this.serviceRowData.id,"Edit Service Column"!==this.operation){e.next=22;break}return e.next=17,this.updateColumn(_(_({},s),{},{columnId:this.editData.id,rowId:r}));case 17:this.notifyVue("Service Column Updated Successfully","success"),this.serviceColumn=_({},b),this.$router.push("/dashboard/services/columns/list/".concat(a)),e.next=29;break;case 22:return e.next=24,this.createColumn(_(_({},s),{},{rowId:r,isAutoPlay:this.serviceColumn.isAutoPlay}));case 24:return o={rowId:r,requestSource:"dashboard"},e.next=27,this.fetchColumnsRows(o);case 27:this.serviceColumn=_({},b),this.notifyVue("Service Column Created Successfully","success");case 29:e.next=34;break;case 31:e.prev=31,e.t0=e["catch"](7),JSON.parse(e.t0).forEach((function(e){n.notifyVue(e.message,"danger")}));case 34:case"end":return e.stop()}}),e,this,[[7,31]])})));function t(){return e.apply(this,arguments)}return t}(),removeImage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteImage(this.imageId);case 2:e.sent,e.t0=this.openedFor,e.next="img_content"===e.t0?6:8;break;case 6:return this.serviceColumn.img_content.splice(this.imageIndex,1),e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null,"");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeVideo:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteVideo(this.videoId);case 2:e.sent,e.t0=this.openedFor,e.next="vid_content"===e.t0?6:8;break;case 6:return this.serviceColumn.vid_content.splice(this.videoIndex,1),e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:this.notifyVue("Video Deleted Successfully","success"),this.setVideoDataFlag(!1,null,"",null,"");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit Service Column"!==this.$route.name||this.$router.push({path:"/dashboard/services"})},mounted:function(){"Edit Service Column"===this.$route.name&&(this.serviceColumn.order=this.editData.order,this.serviceColumn.type=this.editData.type,this.serviceColumn.ratio=this.editData.ratio,this.serviceColumn.fillable=this.editData.fillable,this.serviceColumn.isAutoPlay=!!this.editData.vid_content[0]&&this.editData.vid_content[0].is_auto_play,this.serviceColumn.img_content=this.editData.img_content,this.serviceColumn.vid_content=this.editData.vid_content,this.editData.type===C["TITLE"]&&(this.serviceColumn.title=this.editData.content),this.editData.type===C["DESCRIPTION"]&&(this.serviceColumn.description=this.editData.content),this.setRequiredFieldsAccrodingToContentType(this.editData.type))},components:{ErrorMessage:c["a"],ImagePreview:v["a"],DeleteDialog:p["a"],VideoPreview:m["a"]}},E=g,y=(i("1927"),i("2877")),T=Object(y["a"])(E,s,r,!1,null,null,null);t["default"]=T.exports},cd4a:function(e,t,i){}}]);
//# sourceMappingURL=ServiceColumnsAddEdit.d2698c6b.js.map