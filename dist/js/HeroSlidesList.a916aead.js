(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HeroSlidesList"],{"480f":function(e,t,o){},"50e7":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"delete-modal",style:e.showFlag?"display:block":"display:none",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[o("div",{staticClass:"delete-modal-content",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"delete-modal-header"},[o("span",{staticClass:"close",on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v("×")]),o("h2",[e._v("Delete "+e._s(e.item))])]),o("div",{staticClass:"delete-modal-body"},[o("form",[o("div",{staticClass:"form-group delete-modal-body__text"},[o("p",[e._v("Do you want to delete this "+e._s(e.item.toLowerCase())+"?")])]),o("button",{staticClass:"btn float-right",attrs:{type:"button"},on:{click:function(t){return e.setShowDeleteDialogFlag(!1)}}},[e._v(" Cancel ")]),o("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:e.deleteAction}},[e._v(" Delete ")])])])])])},r=[],s={props:["showFlag","setShowDeleteDialogFlag","item","deleteAction"]},i=s,n=(o("f9a7"),o("2877")),l=Object(n["a"])(i,a,r,!1,null,"d3f2235c",null);t["a"]=l.exports},"6c8e":function(e,t,o){},"8f03":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.isHeroSliderFetched?o("div",[e._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm"},[o("h2",{staticClass:"heading-margin"},[e._v(" Home Hero Slides ("+e._s(e.heroSlider.length)+") ")])]),o("div",{staticClass:"col-sm"},[o("router-link",{attrs:{to:"/dashboard/home-hero-slides/create"}},[o("button",{staticClass:"btn btn-secondary d-block ml-auto heading-margin",attrs:{type:"button"}},[e._v(" Add Home Hero Slide ")])])],1)]),o("Table",{staticClass:"table-hover table-striped",attrs:{columns:e.table.columns,data:e.heroSlider,tableType:"homeHeroSlideColumns",setShowDeleteDialogFlag:e.setHomeHeroSlideDataFlags}}),o("DeleteDialog",{attrs:{showFlag:e.showFlag,item:"Home Hero Slide",deleteAction:e.removeHomeHeroSlide,setShowDeleteDialogFlag:e.setHomeHeroSlideDataFlags}})],1):e._e()},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"/dashboard/home-hero-slides"}},[e._v("Home Hero Slides")])])])])}],s=(o("8e6e"),o("ac6a"),o("cadf"),o("456d"),o("96cf"),o("3b8d")),i=o("bd86"),n=o("2f62"),l=o("6e87"),c=o("1011"),d=o("50e7");function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){Object(i["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={data:function(){return{showFlag:!1,targetId:null,locationInDataArray:null,table:{columns:["Id","Title","Description","Order","Type","Featured","Published","Is Video Autoplay","Main Image","Main Video","Actions"]}}},computed:h({},Object(n["d"])({heroSlider:function(e){return e.home.heroSlider},isHeroSliderFetched:function(e){return e.home.isHeroSliderFetched}})),methods:h(h({},Object(n["b"])({fetchHomeHeroSlides:l["a"].home.actions.FETCH_HERO_SLIDES,deleteHomeHeroSlider:l["a"].home.actions.DELETE_HERO_SLIDER})),{},{removeHomeHeroSlide:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={slideId:this.targetId,locationInDataArray:this.locationInDataArray},e.prev=1,e.next=4,this.deleteHomeHeroSlider(t);case 4:this.setHomeHeroSlideDataFlags(!1,null,null),this.notifyVue("Home Hero Slide Deleted Successfully","success"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.notifyVue("Error Happened","danger");case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),setHomeHeroSlideDataFlags:function(e,t,o){this.showFlag=e,this.targetId=t,this.locationInDataArray=o},notifyVue:function(e,t){this.$notifications.notify({message:"<span>".concat(e,"</span>"),horizontalAlign:"right",verticalAlign:"top",type:t})}}),components:{Table:c["a"],DeleteDialog:d["a"]},mounted:function(){var e={showSpinner:!0,requestSource:"dashboard",data:{}};this.fetchHomeHeroSlides(e)}},f=m,b=(o("e4e3"),o("2877")),p=Object(b["a"])(f,a,r,!1,null,"19953c60",null);t["default"]=p.exports},e4e3:function(e,t,o){"use strict";o("480f")},f9a7:function(e,t,o){"use strict";o("6c8e")}}]);
//# sourceMappingURL=HeroSlidesList.a916aead.js.map