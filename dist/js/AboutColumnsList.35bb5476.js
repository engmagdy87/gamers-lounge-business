(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AboutColumnsList"],{"1f8d":function(t,e,a){},"31ff":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isAboutRowFetched?a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[t._m(0),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard/about/rows/list/"+t.aboutRowsData.id}},[t._v("Section "+t._s(t.aboutRowsData.order)+" Rows")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n        Columns\n      ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("h2",{staticClass:"heading-margin"},[t._v("\n        Columns ("+t._s(t.aboutRowData.columns.length)+")\n      ")])]),a("div",{staticClass:"col-sm"},[a("router-link",{attrs:{to:"/dashboard/about/columns/create/"+t.rowId}},[a("button",{staticClass:"btn btn-secondary d-block ml-auto heading-margin",attrs:{type:"button"}},[t._v("\n          Add Column\n        ")])])],1)]),a("Table",{staticClass:"table-hover table-striped",attrs:{columns:t.table.columns,data:t.aboutRowData.columns,tableType:"aboutColumns",setShowDeleteDialogFlag:t.setAboutRowDataFlags}}),a("DeleteDialog",{attrs:{showFlag:t.showFlag,item:"About Column",deleteAction:t.removeAboutRow,setShowDeleteDialogFlag:t.setAboutRowDataFlags}})],1):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/dashboard/about"}},[t._v("About")])])}],s=(a("8e6e"),a("ac6a"),a("cadf"),a("456d"),a("96cf"),a("3b8d")),r=a("bd86"),i=a("2f62"),l=a("6e87"),c=a("1011"),u=a("50e7");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){return{showFlag:!1,targetId:null,locationInDataArray:null,table:{columns:["Id","Order","Type","Content","Width in %","Has Content","Is Video Autoplay","Images Content","Videos Content","Actions"]}}},computed:d(d({},Object(i["d"])({aboutRowsData:function(t){return t.about.aboutRows},aboutRowData:function(t){return t.about.aboutRow},aboutSections:function(t){return t.about.aboutSections},isAboutRowFetched:function(t){return t.about.isAboutRowFetched}})),{},{rowId:function(){return this.$route.params.rowId}}),methods:d(d({},Object(i["b"])({fetchColumnsRows:l["a"].about.actions.FETCH_ABOUT_COLUMNS,deleteColumnRow:l["a"].about.actions.DELETE_ABOUT_COLUMN})),{},{removeAboutRow:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={columnId:this.targetId,locationInDataArray:this.locationInDataArray},t.prev=1,t.next=4,this.deleteColumnRow(e);case 4:this.setAboutRowDataFlags(!1,null,null),this.notifyVue("About Row Deleted Successfully","success"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.notifyVue("Error Happened","danger");case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}(),setAboutRowDataFlags:function(t,e,a){this.showFlag=t,this.targetId=e,this.locationInDataArray=a},notifyVue:function(t,e){this.$notifications.notify({message:"<span>".concat(t,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:e})}}),components:{Table:c["a"],DeleteDialog:u["a"]},mounted:function(){var t=this.$route.params.rowId,e={rowId:t,requestSource:"dashboard"};this.fetchColumnsRows(e)}},h=f,m=(a("535b"),a("2877")),w=Object(m["a"])(h,o,n,!1,null,"ecd68f48",null);e["default"]=w.exports},"50e7":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"delete-modal",style:t.showFlag?"display:block":"display:none",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[a("div",{staticClass:"delete-modal-content",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"delete-modal-header"},[a("span",{staticClass:"close",on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v("×")]),a("h2",[t._v("Delete "+t._s(t.item))])]),a("div",{staticClass:"delete-modal-body"},[a("form",[a("div",{staticClass:"form-group delete-modal-body__text"},[a("p",[t._v("Do you want to delete this "+t._s(t.item.toLowerCase())+"?")])]),a("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(e){return t.setShowDeleteDialogFlag(!1)}}},[t._v("\n          Cancel\n        ")]),a("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:t.deleteAction}},[t._v("\n          Delete\n        ")])])])])])},n=[],s={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},r=s,i=(a("f9a7"),a("2877")),l=Object(i["a"])(r,o,n,!1,null,"d3f2235c",null);e["a"]=l.exports},"535b":function(t,e,a){"use strict";var o=a("e3e4"),n=a.n(o);n.a},e3e4:function(t,e,a){},f9a7:function(t,e,a){"use strict";var o=a("1f8d"),n=a.n(o);n.a}}]);
//# sourceMappingURL=AboutColumnsList.35bb5476.js.map