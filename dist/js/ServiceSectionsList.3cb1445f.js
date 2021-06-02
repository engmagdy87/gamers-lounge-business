(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ServiceSectionsList"],{"50e7":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"delete-modal",style:e.showFlag?"display:block":"display:none",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[i("div",{staticClass:"delete-modal-content",on:{click:function(e){e.stopPropagation()}}},[i("div",{staticClass:"delete-modal-header"},[i("span",{staticClass:"close",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v("×")]),i("h2",[e._v("Delete "+e._s(e.item))])]),i("div",{staticClass:"delete-modal-body"},[i("form",[i("div",{staticClass:"form-group delete-modal-body__text"},[i("p",[e._v("Do you want to delete this "+e._s(e.item.toLowerCase())+"?")])]),i("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v(" Cancel ")]),i("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:e.deleteAction}},[e._v(" Delete ")])])])])])},a=[],c={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},n=c,r=(i("f9a7"),i("2877")),o=Object(r["a"])(n,s,a,!1,null,"d3f2235c",null);t["a"]=o.exports},5545:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isServiceSectionsFetched?i("div",[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[e._m(0),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(" "+e._s(e.serviceSections.title)+" Service Sections ")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm"},[i("h2",{staticClass:"heading-margin"},[e._v(" "+e._s(e.serviceSections.title)+" Service Sections ("+e._s(e.serviceSections.sections.data.length)+") ")])]),i("div",{staticClass:"col-sm"},[i("router-link",{attrs:{to:"/dashboard/services/sections/create/"+e.id}},[i("button",{staticClass:"btn btn-secondary d-block ml-auto heading-margin",attrs:{type:"button"}},[e._v(" Add Service Section ")])])],1)]),i("Table",{staticClass:"table-hover table-striped",attrs:{columns:e.table.columns,data:e.serviceSections.sections.data,tableType:"serviceSections",setShowDeleteDialogFlag:e.setServiceSectionDataFlags}}),i("DeleteDialog",{attrs:{showFlag:e.showFlag,item:"Service Section",deleteAction:e.removeServiceSection,setShowDeleteDialogFlag:e.setServiceSectionDataFlags}})],1):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"/dashboard/services"}},[e._v("Services")])])}],c=(i("8e6e"),i("ac6a"),i("cadf"),i("456d"),i("96cf"),i("3b8d")),n=i("bd86"),r=i("2f62"),o=i("6e87"),l=i("1011"),u=i("50e7");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={data:function(){return{showFlag:!1,targetId:null,locationInDataArray:null,table:{columns:["Id","Order","Template","Published","Actions"]}}},computed:v(v({},Object(r["d"])({serviceSections:function(e){return e.services.serviceSections},isServiceSectionsFetched:function(e){return e.services.isServiceSectionsFetched}})),{},{id:function(){return this.$route.params.id}}),methods:v(v({},Object(r["b"])({fetchServiceSections:o["a"].services.actions.FETCH_SERVICE_SECTIONS,deleteServiceSection:o["a"].services.actions.DELETE_SERVICE_SECTION})),{},{removeServiceSection:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={sectionId:this.targetId,locationInDataArray:this.locationInDataArray},e.prev=1,e.next=4,this.deleteServiceSection(t);case 4:this.setServiceSectionDataFlags(!1,null,null),this.notifyVue("Service Section Deleted Successfully","success"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.notifyVue("Error Happened","danger");case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),setServiceSectionDataFlags:function(e,t,i){this.showFlag=e,this.targetId=t,this.locationInDataArray=i},notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),components:{Table:l["a"],DeleteDialog:u["a"]},mounted:function(){var e=this.$route.params.id,t={id:e,requestSource:"dashboard"};this.fetchServiceSections(t)}},h=b,S=(i("dea1"),i("2877")),f=Object(S["a"])(h,s,a,!1,null,"ce029de2",null);t["default"]=f.exports},"6c8e":function(e,t,i){},cb97:function(e,t,i){},dea1:function(e,t,i){"use strict";i("cb97")},f9a7:function(e,t,i){"use strict";i("6c8e")}}]);
//# sourceMappingURL=ServiceSectionsList.3cb1445f.js.map