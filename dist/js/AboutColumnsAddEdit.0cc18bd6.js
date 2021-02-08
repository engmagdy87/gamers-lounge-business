(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AboutColumnsAddEdit"],{"55f3":function(t,e,a){},b6bc:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[t._m(0),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard/about/rows/list/"+t.aboutRowsData.id}},[t._v("Section "+t._s(t.aboutRowsData.order)+" Rows")])],1),a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[a("router-link",{attrs:{to:"/dashboard/about/columns/list/"+t.rowId}},[t._v(" Columns ")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.operation)+" ")])])]),t._m(1),a("div",{staticClass:"alert alert-dark w-100 m-0 p-0 d-flex",attrs:{role:"alert"}},[t.calculateTotalWidth()>0?a("div",{staticClass:"alert alert-info m-0",style:"width:"+t.calculateTotalWidth()+"%",attrs:{role:"alert"}},[t._v(" Used Width: "),a("strong",[a("h2",[t._v(t._s(t.calculateTotalWidth())+"%")])])]):t._e(),(100-t.calculateTotalWidth()).toFixed(1)>0?a("div",{staticClass:"alert alert-dark m-0 text-dark",style:"width:"+(100-t.calculateTotalWidth()).toFixed(1)+"%",attrs:{role:"alert"}},[t._v(" Remain Width: "),a("strong",[a("h2",[t._v(t._s((100-t.calculateTotalWidth()).toFixed(1))+"%")])])]):t._e()]),a("h4",{staticClass:"card-name",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.operation))]),a("form",[a("div",{staticClass:"row d-flex m-0"},t._l(t.aboutRowData.columns,(function(e,o){return a("div",{key:o,class:["column",100===t.currentWidth()?"column--full":"column--not-full"],style:"width:"+e.ratio+"%"},[a("p",[t._v(t._s(e.ratio)+"%")]),e.fillable?a("p",[t._v(t._s(e.type))]):a("p")])})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("base-input",{attrs:{type:"number",label:"Order",placeholder:"Enter Order",autofocus:!0,isRequired:!0},model:{value:t.aboutColumn.order,callback:function(e){t.$set(t.aboutColumn,"order",e)},expression:"aboutColumn.order"}}),a("ErrorMessage",{attrs:{fieldErrors:t.errors.order}})],1),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[t._m(2),a("select",{directives:[{name:"model",rawName:"v-model",value:t.aboutColumn.type,expression:"aboutColumn.type"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.aboutColumn,"type",e.target.multiple?a:a[0])},function(e){return t.setRequiredFieldsAccrodingToContentType(e.target.value)}]}},[a("option",{attrs:{value:"-1"}},[t._v("--Please choose content type")]),t._l(t.ABOUT_COLUMNS_CONTENT_TYPES,(function(e,o){return a("option",{key:o,attrs:{":selected":t.aboutColumn.type===e},domProps:{value:e}},[t._v(t._s(e.toLowerCase()))])}))],2),a("ErrorMessage",{attrs:{fieldErrors:t.errors.type}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{type:"number",step:"0.1",label:"Width in %",placeholder:"Enter Width in %",isRequired:!0},model:{value:t.aboutColumn.ratio,callback:function(e){t.$set(t.aboutColumn,"ratio",e)},expression:"aboutColumn.ratio"}}),a("ErrorMessage",{attrs:{fieldErrors:t.errors.ratio}})],1),a("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[a("div",{staticClass:"custom-control custom-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.aboutColumn.fillable,expression:"aboutColumn.fillable"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"fillable"},domProps:{checked:Array.isArray(t.aboutColumn.fillable)?t._i(t.aboutColumn.fillable,null)>-1:t.aboutColumn.fillable},on:{change:function(e){var a=t.aboutColumn.fillable,o=e.target,i=!!o.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);o.checked?s<0&&t.$set(t.aboutColumn,"fillable",a.concat([r])):s>-1&&t.$set(t.aboutColumn,"fillable",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.aboutColumn,"fillable",i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"fillable"}},[t._v("Has Content")])])]),a("div",{staticClass:"col-12 col-md-4 mt-auto mb-auto"},[a("div",{staticClass:"custom-control custom-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.aboutColumn.isAutoPlay,expression:"aboutColumn.isAutoPlay"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"isAutoPlay"},domProps:{checked:Array.isArray(t.aboutColumn.isAutoPlay)?t._i(t.aboutColumn.isAutoPlay,null)>-1:t.aboutColumn.isAutoPlay},on:{change:[function(e){var a=t.aboutColumn.isAutoPlay,o=e.target,i=!!o.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);o.checked?s<0&&t.$set(t.aboutColumn,"isAutoPlay",a.concat([r])):s>-1&&t.$set(t.aboutColumn,"isAutoPlay",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.aboutColumn,"isAutoPlay",i)},t.updateVideoData]}}),a("label",{staticClass:"custom-control-label",attrs:{for:"isAutoPlay"}},[t._v("Is Autoplay Video")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("base-input",{attrs:{type:"text",label:"Tile",placeholder:"Enter Title",isRequired:t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.TITLE},model:{value:t.aboutColumn.title,callback:function(e){t.$set(t.aboutColumn,"title",e)},expression:"aboutColumn.title"}}),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.TITLE?a("div",[a("ErrorMessage",{attrs:{fieldErrors:t.errors.title}})],1):t._e()],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Description"),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.DESCRIPTION?a("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),a("vue-pell-editor",{attrs:{actions:t.editorOptions,"style-with-css":!1,placeholder:""},model:{value:t.aboutColumn.description,callback:function(e){t.$set(t.aboutColumn,"description",e)},expression:"aboutColumn.description"}}),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.DESCRIPTION?a("div",[a("ErrorMessage",{attrs:{fieldErrors:t.errors.description}})],1):t._e()],1)])]),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col"},[a("div",[a("label",{staticClass:"mr-5"},[t._v("Choose Content Images"),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.IMAGE||t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.SLIDER?a("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),a("input",{ref:"img_content",attrs:{type:"file",id:"media-images",accept:"image/png, image/jpeg, image/gif",multiple:t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.SLIDER},on:{change:function(e){return t.setFile(e,"img_content")}}}),a("br"),void 0!==t.editData&&("Edit About Column"===t.operation||null!==t.editData.img_content&&null!==t.editData.img_content)?a("div",{staticClass:"image-preview-list"},t._l(t.editData.img_content,(function(e,o){return a("ImagePreview",{key:e.id,attrs:{image:e,setShowDeleteDialogFlag:t.setImageDataFlag,openedFor:"img_content",imageIndex:o}})})),1):t._e(),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.IMAGE||t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.SLIDER?a("div",[a("ErrorMessage",{attrs:{fieldErrors:t.errors.img_content}})],1):t._e()])])]),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col"},[a("div",[a("label",{staticClass:"mr-5"},[t._v("Choose Content Videos"),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.VIDEO?a("span",{staticClass:"error-message"},[t._v(" *")]):t._e()]),a("input",{ref:"vid_content",attrs:{type:"file",id:"logo",accept:"video/*"},on:{change:function(e){return t.setFile(e,"vid_content")}}}),a("br"),void 0!==t.editData&&("Edit About Column"===t.operation||null!==t.editData.vid_content&&null!==t.editData.vid_content)?a("div",{staticClass:"image-preview-list"},t._l(t.editData.vid_content,(function(e,o){return a("VideoPreview",{key:e.id,attrs:{video:e,setShowDeleteDialogFlag:t.setVideoDataFlag,openedFor:"vid_content",videoIndex:o}})})),1):t._e(),t.aboutColumn.type===t.ABOUT_COLUMNS_CONTENT_TYPES.VIDEO?a("div",[a("ErrorMessage",{attrs:{fieldErrors:t.errors.vid_content}})],1):t._e()])])]),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"button"},on:{click:t.saveData}},[t._v(" Save ")])]),a("div",{staticClass:"clearfix"}),a("DeleteDialog",{attrs:{showFlag:t.showFlag,setShowDeleteDialogFlag:"video"===t.contentType?t.setVideoDataFlag:t.setImageDataFlag,item:"video"===t.contentType?"Video":"Image",deleteAction:"video"===t.contentType?t.removeVideo:t.removeImage}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/dashboard/about"}},[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("strong",[t._v("Hint")]),t._v(" Total Width must be less than or equal"),a("strong",[t._v(" 100%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Column Content Type"),a("span",{staticClass:"error-message"},[t._v(" *")])])}],r=(a("8e6e"),a("cadf"),a("456d"),a("c5f6"),a("5df2"),a("ac6a"),a("96cf"),a("3b8d")),s=a("bd86"),n=a("2f62"),l=a("ede8"),u=a("6e87"),c=a("62c4"),d=a("a923"),m=a("1485"),b=a("a50b"),p=a("50e7"),h=a("bcb6"),C=a("0a93");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={order:1,type:"-1",title:"",description:"",ratio:0,fillable:!1,isAutoPlay:!1,img_content:[],vid_content:[]},g={data:function(){return{editData:this.$router.history.current.params.data,operation:this.$route.name,aboutColumn:f({},_),openedFor:"",contentType:"",imageIndex:null,showFlag:!1,imageId:null,videoId:null,errors:{},validation:{order:{isRequired:!0},type:{isRequired:!0},title:{isRequired:!0},description:{isRequired:!0},ratio:{isRequired:!0},fillable:{isRequired:!0},"is auto play":{isRequired:!1},"images content":{isRequired:!0},"videos content":{isRequired:!0}},aliases:{order:"order",type:"type",title:"title",description:"description",ratio:"ratio",fillable:"fillable",isAutoPlay:"is auto play",img_content:"images content",vid_content:"videos content"},editorOptions:d["a"]}},computed:f(f({},Object(n["d"])({aboutRowData:function(t){return t.about.aboutRow},aboutRowsData:function(t){return t.about.aboutRows},aboutSections:function(t){return t.about.aboutSections}})),{},{ABOUT_COLUMNS_CONTENT_TYPES:function(){return C},rowId:function(){return this.$router.history.current.params.rowId}}),methods:f(f({},Object(n["b"])({fetchColumnsRows:u["a"].about.actions.FETCH_ABOUT_COLUMNS,createColumn:u["a"].about.actions.CREATE_ABOUT_COLUMN,updateColumn:u["a"].about.actions.UPDATE_ABOUT_COLUMN,updateVideo:u["a"].about.actions.UPDATE_VIDEO,deleteImage:u["a"].app.actions.DELETE_IMAGE,deleteVideo:u["a"].app.actions.DELETE_VIDEO})),{},{updateVideoData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Edit About Column"!==this.operation||this.aboutColumn.type!==C["VIDEO"]){t.next=4;break}return e={videoId:this.aboutColumn.vid_content[0].id,isAutoPlay:this.aboutColumn.isAutoPlay},t.next=4,this.updateVideo(e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setRequiredFieldsAccrodingToContentType:function(t){var e,a=this,o=["title","description","images content","videos content"];switch(t){case C["TITLE"]:e="title";break;case C["DESCRIPTION"]:e="description";break;case C["IMAGE"]:e="images content";break;case C["SLIDER"]:e="images content";break;case C["VIDEO"]:e="videos content";break;default:break}o.forEach((function(t){a.validation[t].isRequired=t===e}))},setFile:function(t,e){var a=t.target.files;a.length&&(this.aboutColumn[e]=a)},setImageDataFlag:function(t,e,a,o,i){this.showFlag=t,this.imageId=e,this.openedFor=a,this.imageIndex=o,this.contentType=i},setVideoDataFlag:function(t,e,a,o,i){this.showFlag=t,this.videoId=e,this.openedFor=a,this.videoIndex=o,this.contentType=i},currentWidth:function(){var t=this,e=0;return"Edit About Column"===this.operation?this.aboutRowData.columns.forEach((function(a){a.id!==t.editData.id&&(e+=Number.parseFloat(a.ratio))})):this.aboutRowData.columns.forEach((function(t){e+=Number.parseFloat(t.ratio)})),e.toFixed(1)},calculateTotalWidth:function(){var t=Number.parseFloat(this.currentWidth());return t+=Number.parseFloat(this.aboutColumn.ratio),t.toFixed(1)},saveData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,o,i,r,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(c["a"])(this.aboutColumn,this.aliases,this.validation),this.errors=f({},e.errors),0===e.length){t.next=4;break}return t.abrupt("return");case 4:if(!(this.calculateTotalWidth()>100)){t.next=7;break}return this.notifyVue("Row Width will be greater than 100%, Please adjust column width","danger"),t.abrupt("return");case 7:if(t.prev=7,a="",this.aboutColumn.type===C["TITLE"]&&(a=this.aboutColumn.title),this.aboutColumn.type===C["DESCRIPTION"]&&(a=Object(h["c"])(this.aboutColumn.description)),o={order:this.aboutColumn.order,type:this.aboutColumn.type,content:a,ratio:this.aboutColumn.ratio,fillable:this.aboutColumn.fillable,imagesData:{img_content:this.$refs.img_content.files},videosData:{vid_content:this.$refs.vid_content.files}},i=this.$router.history.current.params.rowId,r=this.aboutRowData.id,"Edit About Column"!==this.operation){t.next=22;break}return t.next=17,this.updateColumn(f(f({},o),{},{columnId:this.editData.id,rowId:i}));case 17:this.notifyVue("About Column Updated Successfully","success"),this.aboutColumn=f({},_),this.$router.push("/dashboard/about/columns/list/".concat(r)),t.next=29;break;case 22:return t.next=24,this.createColumn(f(f({},o),{},{rowId:i,isAutoPlay:this.aboutColumn.isAutoPlay}));case 24:return s={rowId:i,requestSource:"dashboard"},t.next=27,this.fetchColumnsRows(s);case 27:this.aboutColumn=f({},_),this.notifyVue("About Column Created Successfully","success");case 29:t.next=34;break;case 31:t.prev=31,t.t0=t["catch"](7),JSON.parse(t.t0).forEach((function(t){n.notifyVue(t.message,"danger")}));case 34:case"end":return t.stop()}}),t,this,[[7,31]])})));function e(){return t.apply(this,arguments)}return e}(),removeImage:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteImage(this.imageId);case 2:t.sent,t.t0=this.openedFor,t.next="img_content"===t.t0?6:8;break;case 6:return this.aboutColumn.img_content.splice(this.imageIndex,1),t.abrupt("break",9);case 8:return t.abrupt("break",9);case 9:this.notifyVue("Image Deleted Successfully","success"),this.setImageDataFlag(!1,null,"",null,"");case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeVideo:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteVideo(this.videoId);case 2:t.sent,t.t0=this.openedFor,t.next="vid_content"===t.t0?6:8;break;case 6:return this.aboutColumn.vid_content.splice(this.videoIndex,1),t.abrupt("break",9);case 8:return t.abrupt("break",9);case 9:this.notifyVue("Video Deleted Successfully","success"),this.setVideoDataFlag(!1,null,"",null,"");case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),beforeMount:function(){this.$router.history.current.params.data||"Edit About Column"!==this.$route.name||this.$router.push({path:"/dashboard/about"})},mounted:function(){"Edit About Column"===this.$route.name&&(this.aboutColumn.order=this.editData.order,this.aboutColumn.type=this.editData.type,this.aboutColumn.ratio=this.editData.ratio,this.aboutColumn.fillable=this.editData.fillable,this.aboutColumn.isAutoPlay=!!this.editData.vid_content[0]&&this.editData.vid_content[0].is_auto_play,this.aboutColumn.img_content=this.editData.img_content,this.aboutColumn.vid_content=this.editData.vid_content,this.editData.type===C["TITLE"]&&(this.aboutColumn.title=this.editData.content),this.editData.type===C["DESCRIPTION"]&&(this.aboutColumn.description=this.editData.content),this.setRequiredFieldsAccrodingToContentType(this.editData.type))},components:{ErrorMessage:l["a"],ImagePreview:m["a"],DeleteDialog:p["a"],VideoPreview:b["a"]}},y=g,T=(a("cbf0"),a("2877")),E=Object(T["a"])(y,o,i,!1,null,null,null);e["default"]=E.exports},cbf0:function(t,e,a){"use strict";a("55f3")}}]);
//# sourceMappingURL=AboutColumnsAddEdit.0cc18bd6.js.map