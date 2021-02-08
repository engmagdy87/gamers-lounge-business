(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WorksList"],{"50e7":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delete-modal",style:t.showFlag?"display:block":"display:none",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[a("div",{staticClass:"delete-modal-content",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"delete-modal-header"},[a("span",{staticClass:"close",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v("×")]),a("h2",[t._v("Delete "+t._s(t.item))])]),a("div",{staticClass:"delete-modal-body"},[a("form",[a("div",{staticClass:"form-group delete-modal-body__text"},[a("p",[t._v("Do you want to delete this "+t._s(t.item.toLowerCase())+"?")])]),a("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v(" Cancel ")]),a("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:t.deleteAction}},[t._v(" Delete ")])])])])])},r=[],s={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},n=s,i=(a("f9a7"),a("2877")),l=Object(i["a"])(n,o,r,!1,null,"d3f2235c",null);e["a"]=l.exports},"6c8e":function(t,e,a){},"8df7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("h2",{staticClass:"heading-margin"},[t._v("Works ("+t._s(t.getWorksDataLength)+")")])]),a("div",{staticClass:"col-sm"},[a("router-link",{attrs:{to:"/dashboard/works/create"}},[a("button",{staticClass:"btn btn-secondary d-block ml-auto heading-margin",attrs:{type:"button"}},[t._v(" Add Work ")])])],1)]),a("Table",{staticClass:"table-hover table-striped",attrs:{columns:t.table.columns,data:t.getWorksData,tableType:"works",setShowDeleteDialogFlag:t.setWorkDataFlags}}),a("DeleteDialog",{attrs:{showFlag:t.showFlag,item:"Work",deleteAction:t.removeWork,setShowDeleteDialogFlag:t.setWorkDataFlags}})],1)},r=[],s=(a("8e6e"),a("ac6a"),a("cadf"),a("456d"),a("96cf"),a("3b8d")),n=a("bd86"),i=a("2f62"),l=a("6e87"),c=a("1011"),u=a("50e7");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){return{showFlag:!1,targetId:null,locationInDataArray:null,table:{columns:["Id","Title","Order","Featured","Published","Admin","Short Description","Description","Statistics","Card Image","Cover Image","Slider Image","Actions"]}}},computed:g(g({},Object(i["d"])({worksData:function(t){return t.works.works}})),{},{getWorksData:function(){return this.worksData.data||[]},getWorksDataLength:function(){return this.worksData.data?this.worksData.data.length:0}}),methods:g(g({},Object(i["b"])({fetchWorks:l["a"].works.actions.FETCH_WORKS,deleteWork:l["a"].works.actions.DELETE_WORK})),{},{removeWork:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.targetId,locationInDataArray:this.locationInDataArray},t.prev=1,t.next=4,this.deleteWork(e);case 4:this.setWorkDataFlags(!1,null,null),this.notifyVue("Work Deleted Successfully","success"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.notifyVue("Error Happened","danger");case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}(),setWorkDataFlags:function(t,e,a){this.showFlag=t,this.targetId=e,this.locationInDataArray=a},notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),components:{Table:c["a"],DeleteDialog:u["a"]},mounted:function(){var t={first:100,page:1},e={data:t,requestSource:"dashboard",showSpinner:!0};this.fetchWorks(e)}},h=f,b=(a("f7b8"),a("2877")),p=Object(b["a"])(h,o,r,!1,null,"888dde68",null);e["default"]=p.exports},be85:function(t,e,a){},f7b8:function(t,e,a){"use strict";a("be85")},f9a7:function(t,e,a){"use strict";a("6c8e")}}]);
//# sourceMappingURL=WorksList.7f64e606.js.map