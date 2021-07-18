(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OurWorkDetails~ServicesDetails"],{"16be":function(e,t,n){},"22bc":function(e,t,n){"use strict";n("db8a")},2631:function(e,t,n){"use strict";n.r(t),n.d(t,"NORMAL",(function(){return o})),n.d(t,"SPECIAL",(function(){return a}));var o="NORMAL",a="SPECIAL"},"468c":function(e,t,n){"use strict";n("16be")},"8ed0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"work-details-sections__wrapper"},e._l(e.section.rows,(function(t,o){return n("div",{key:t.id,staticClass:"work-details-sections__container row m-0"},e._l(t.columns,(function(a,i){return n("div",{key:a.index,style:{width:e.getWidth(a.ratio)}},[a.type===e.WORK_COLUMNS_TYPES.TITLE&&a.fillable?n("div",{staticClass:"work-details-sections__title"},[e._v(" "+e._s(a.content)+" ")]):a.type===e.WORK_COLUMNS_TYPES.IMAGE&&a.fillable?e._l(a.img_content,(function(t){return n("div",{key:t.id,staticClass:"work-details-sections__image",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openImageModal(o,i,null,a.type)}}},[n("img",{staticClass:"image-placeholder",attrs:{src:t.url,width:"100%",draggable:"false"},on:{load:e.onImgLoad}}),e.isPlaceholderImageShown?n("div",{staticClass:"image-placeholder"}):e._e()])})):a.type===e.WORK_COLUMNS_TYPES.VIDEO&&a.fillable&&a.is_vid_extenral_enabled?n("div",{staticClass:"work-details-sections__video",staticStyle:{border:"2px solid white"}},[n("iframe",{attrs:{width:"100%",height:e.getHeight(a.ratio,t.columns.length),src:e.getLiveVideoEmbedFormatter(a.vid_extenral),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):a.type===e.WORK_COLUMNS_TYPES.VIDEO&&a.fillable&&!a.is_vid_extenral_enabled?e._l(a.vid_content,(function(t){return n("div",{key:t.id,staticClass:"work-details-sections__video",staticStyle:{border:"2px solid white"}},[n("video",{style:{cursor:t.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+t.id,src:t.url,width:"100%",controls:!t.is_auto_play,loop:t.is_auto_play,autoplay:t.is_auto_play},domProps:{muted:t.is_auto_play},on:{click:function(n){return e.toggleFullScreenMode(n,t)}}})])})):a.type===e.WORK_COLUMNS_TYPES.SLIDER&&a.fillable?n("div",[n("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0,onMainSlideClick:function(t){return e.openImageModal(o,i,t.index,a.type)}}},e._l(a.img_content,(function(e,t){return n("Slide",{key:t,attrs:{index:t}},[n("img",{staticClass:"image-placeholder",attrs:{src:e.url,draggable:"false"}})])})),1)],1):e._e(),a.type===e.WORK_COLUMNS_TYPES.DESCRIPTION&&a.fillable?n("div",{staticClass:"description-container work-details-sections__description",domProps:{innerHTML:e._s(a.content)}}):e._e()],2)})),0)})),0),n("ImageModal",{attrs:{showImageModal:e.showImageModal,setShowImageModal:e.setShowImageModal,imageUrl:e.targetImageUrl,setImageIndex:e.contentType===e.WORK_COLUMNS_TYPES.IMAGE?e.setImageIndex:e.setImageForSliderIndex,showNavigation:e.showNavigation}})],1)},a=[],i=(n("8e6e"),n("28a5"),n("ac6a"),n("cadf"),n("456d"),n("bd86")),r=n("2af0"),s=n("01ea"),c=n("774e4"),l=n("074b"),d=n("d408"),u=n("0a93");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={props:["section"],data:function(){return{sectionImages:{},showImageModal:!1,showNavigation:!1,isPlaceholderImageShown:!0,targetImageIndeces:{rowId:null,colId:null,imgId:null},targetImageUrl:"",contentType:""}},components:{Carousel3d:r["Carousel3d"],Slide:r["Slide"],ImageModal:l["a"]},computed:{WORK_COLUMNS_TYPES:function(){return u}},methods:{getLiveVideoEmbedFormatter:function(e){return Object(d["a"])(e)},toggleFullScreenMode:function(e,t){if(t.is_auto_play){e.preventDefault();var n=document.getElementById("video".concat(t.id));n.addEventListener("fullscreenchange",(function(){n.muted=!document.fullscreenElement})),document.fullscreenElement?(n.muted=!0,document.exitFullscreen()):(n.muted=!1,n.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))})))}},getImages:function(e){return this.section.rows[e].columns},getWidth:function(e){return Object(s["a"])()?"100%":e+"%"},getHeight:function(e,t){return 1===t?Object(s["a"])()?"300px":document.body.clientHeight*e/120+"px":"100%"},setShowImageModal:function(e){this.showImageModal=e},openImageModal:function(e,t,n,o){this.showNavigation=!0,this.contentType=o,this.targetImageIndeces=m(m({},this.targetImageIndeces),{},{rowId:e,colId:t,imgId:n}),this.targetImageUrl=this.getImages(e)[t].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(e,t){e.stopPropagation();var n,o=this.targetImageIndeces,a=o.rowId,i=o.colId,r="".concat(a,"-").concat(i),s=Object.keys(this.sectionImages),c=s.indexOf(r);n="next"===t?c===s.length-1?0:c+1:0===c?s.length-1:c-1;var l=s[n].split("-")[0],d=s[n].split("-")[1];this.targetImageIndeces=m(m({},this.targetImageIndeces),{},{rowId:l,colId:d}),this.targetImageUrl=this.sectionImages[s[n]]},setImageForSliderIndex:function(e,t){e.stopPropagation();var n,o=this.targetImageIndeces,a=o.rowId,i=o.colId,r=o.imgId,s=this.getImages(a)[i].img_content;n="next"===t?r===s.length-1?0:r+1:0===r?s.length-1:r-1,this.targetImageIndeces.imgId=n,this.targetImageUrl=s[n].url},onImgLoad:function(){this.isPlaceholderImageShown=!1}},updated:function(){Object(c["a"])("description-container")},mounted:function(){var e=this;this.section.rows.forEach((function(t,n){t.columns.forEach((function(t,o){t.type===e.WORK_COLUMNS_TYPES.IMAGE&&t.fillable&&(e.sectionImages=m(m({},e.sectionImages),{},Object(i["a"])({},"".concat(n,"-").concat(o),t.img_content[0].url)))}))}))}},p=I,h=(n("22bc"),n("2877")),f=Object(h["a"])(p,o,a,!1,null,"6faf308a",null);t["a"]=f.exports},cc4d:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.section.rows,(function(t,o){return n("div",{key:t.id,staticClass:"row m-0 p-0"},e._l(t.columns,(function(a,i){return n("div",{key:a.index,style:{width:e.getWidth(a.ratio)}},[a.type===e.WORK_COLUMNS_TYPES.TITLE&&a.fillable?n("div",{staticClass:"work-details-sections__title-normal"},[e._v(" "+e._s(a.content)+" ")]):a.type===e.WORK_COLUMNS_TYPES.IMAGE&&a.fillable?e._l(a.img_content,(function(t){return n("div",{key:t.id,staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openImageModal(o,i,null,a.type)}}},[n("img",{attrs:{src:t.url,width:"100%",draggable:"false"},on:{load:e.onImgLoad}}),e.isPlaceholderImageShown?n("div",{staticClass:"image-placeholder",staticStyle:{"min-height":"50vh"}}):e._e()])})):a.type===e.WORK_COLUMNS_TYPES.VIDEO&&a.fillable&&a.is_vid_extenral_enabled?n("div",{staticClass:"work-details-sections__video"},[n("iframe",{attrs:{width:"100%",height:e.getHeight(a.ratio,t.columns.length),src:e.getLiveVideoEmbedFormatter(a.vid_extenral),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):a.type===e.WORK_COLUMNS_TYPES.VIDEO&&a.fillable&&!a.is_vid_extenral_enabled?e._l(a.vid_content,(function(t){return n("div",{key:t.id,staticClass:"work-details-sections__video"},[n("video",{style:{cursor:t.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+t.id,src:t.url,width:"100%",controls:!t.is_auto_play,loop:t.is_auto_play,autoplay:t.is_auto_play},domProps:{muted:t.is_auto_play},on:{click:function(n){return e.toggleFullScreenMode(n,t)}}})])})):a.type===e.WORK_COLUMNS_TYPES.SLIDER&&a.fillable?n("div",[n("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0,onMainSlideClick:function(t){return e.openImageModal(o,i,t.index,a.type)}}},e._l(a.img_content,(function(e,t){return n("Slide",{key:t,attrs:{index:t}},[n("img",{staticClass:"image-placeholder",attrs:{src:e.url,draggable:"false"}})])})),1)],1):e._e(),a.type===e.WORK_COLUMNS_TYPES.DESCRIPTION&&a.fillable?n("div",{staticClass:"description-container work-details-sections__description",domProps:{innerHTML:e._s(a.content)}}):e._e()],2)})),0)})),n("ImageModal",{attrs:{showImageModal:e.showImageModal,setShowImageModal:e.setShowImageModal,imageUrl:e.targetImageUrl,setImageIndex:e.contentType===e.WORK_COLUMNS_TYPES.IMAGE?e.setImageIndex:e.setImageForSliderIndex,showNavigation:e.showNavigation}})],2)},a=[],i=(n("8e6e"),n("28a5"),n("ac6a"),n("cadf"),n("456d"),n("bd86")),r=n("2af0"),s=n("074b"),c=n("01ea"),l=n("774e4"),d=n("d408"),u=n("0a93");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={props:["section"],data:function(){return{sectionImages:{},showImageModal:!1,showNavigation:!1,isPlaceholderImageShown:!0,targetImageIndeces:{rowId:null,colId:null,imgId:null},targetImageUrl:"",contentType:""}},components:{Carousel3d:r["Carousel3d"],Slide:r["Slide"],ImageModal:s["a"]},computed:{WORK_COLUMNS_TYPES:function(){return u}},methods:{getLiveVideoEmbedFormatter:function(e){return Object(d["a"])(e)},getImages:function(e){return this.section.rows[e].columns},getWidth:function(e){return Object(c["a"])()?"100%":e+"%"},getHeight:function(e,t){return 1===t?Object(c["a"])()?"300px":document.body.clientHeight*e/120+"px":"100%"},toggleFullScreenMode:function(e,t){if(t.is_auto_play){e.preventDefault();var n=document.getElementById("video".concat(t.id));n.addEventListener("fullscreenchange",(function(){n.muted=!document.fullscreenElement})),document.fullscreenElement?(n.muted=!0,document.exitFullscreen()):(n.muted=!1,n.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))})))}},setShowImageModal:function(e){this.showImageModal=e},openImageModal:function(e,t,n,o){this.showNavigation=!0,this.contentType=o,this.targetImageIndeces=m(m({},this.targetImageIndeces),{},{rowId:e,colId:t,imgId:n}),this.targetImageUrl=this.getImages(e)[t].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(e,t){e.stopPropagation();var n,o=this.targetImageIndeces,a=o.rowId,i=o.colId,r="".concat(a,"-").concat(i),s=Object.keys(this.sectionImages),c=s.indexOf(r);n="next"===t?c===s.length-1?0:c+1:0===c?s.length-1:c-1;var l=s[n].split("-")[0],d=s[n].split("-")[1];this.targetImageIndeces=m(m({},this.targetImageIndeces),{},{rowId:l,colId:d}),this.targetImageUrl=this.sectionImages[s[n]]},setImageForSliderIndex:function(e,t){e.stopPropagation();var n,o=this.targetImageIndeces,a=o.rowId,i=o.colId,r=o.imgId,s=this.getImages(a)[i].img_content;n="next"===t?r===s.length-1?0:r+1:0===r?s.length-1:r-1,this.targetImageIndeces.imgId=n,this.targetImageUrl=s[n].url},onImgLoad:function(){this.isPlaceholderImageShown=!1}},updated:function(){Object(l["a"])("description-container")},mounted:function(){var e=this;this.section.rows.forEach((function(t,n){t.columns.forEach((function(t,o){t.type===e.WORK_COLUMNS_TYPES.IMAGE&&t.fillable&&(e.sectionImages=m(m({},e.sectionImages),{},Object(i["a"])({},"".concat(n,"-").concat(o),t.img_content[0].url)))}))}))}},p=I,h=(n("468c"),n("2877")),f=Object(h["a"])(p,o,a,!1,null,"80691e8c",null);t["a"]=f.exports},db8a:function(e,t,n){}}]);
//# sourceMappingURL=OurWorkDetails~ServicesDetails.673d8b27.js.map