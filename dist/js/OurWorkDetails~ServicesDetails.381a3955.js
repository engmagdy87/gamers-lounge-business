(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OurWorkDetails~ServicesDetails"],{"0d46":function(e,t,n){"use strict";n("6468")},1994:function(e,t,n){"use strict";n("b1ab")},2631:function(e,t,n){"use strict";n.r(t),n.d(t,"NORMAL",(function(){return a})),n.d(t,"SPECIAL",(function(){return r}));var a="NORMAL",r="SPECIAL"},6468:function(e,t,n){},"7d96":function(e,t,n){},"8ed0":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CustomHalfClipped",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(e.section.rows,(function(t,a){return n("div",{key:t.id,staticClass:"work-details-sections__container row m-0"},e._l(t.columns,(function(t){return n("div",{key:t.index,style:{width:e.getWidth(t.ratio)}},[t.type===e.WORK_COLUMNS_TYPES.TITLE&&t.fillable?n("div",{staticClass:"work-details-sections__title"},[e._v(" "+e._s(t.content)+" ")]):t.type===e.WORK_COLUMNS_TYPES.IMAGE&&t.fillable?e._l(t.img_content,(function(t,r){return n("div",{key:t.id,staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openImageModal(a,r)}}},[n("img",{staticClass:"image-placeholder",attrs:{src:t.url,width:"100%",draggable:"false"}})])})):t.type===e.WORK_COLUMNS_TYPES.VIDEO&&t.fillable?e._l(t.vid_content,(function(t){return n("div",{key:t.id},[n("video",{style:{cursor:t.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+t.id,src:t.url,width:"100%",controls:!t.is_auto_play,loop:t.is_auto_play,autoplay:t.is_auto_play},domProps:{muted:t.is_auto_play},on:{click:function(n){return e.toggleFullScreenMode(n,t)}}})])})):t.type===e.WORK_COLUMNS_TYPES.SLIDER&&t.fillable?n("div",[n("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0}},e._l(t.img_content,(function(e,t){return n("Slide",{key:t,attrs:{index:t}},[n("img",{staticClass:"image-placeholder",attrs:{src:e.url,draggable:"false"}})])})),1)],1):e._e(),t.type===e.WORK_COLUMNS_TYPES.DESCRIPTION&&t.fillable?n("div",{staticClass:"description-container work-details-sections__description",domProps:{innerHTML:e._s(t.content)}}):e._e()],2)})),0)}))},proxy:!0}])}),n("ImageModal",{attrs:{showImageModal:e.showImageModal,setShowImageModal:e.setShowImageModal,imageUrl:e.targetImageUrl,setImageIndex:e.setImageIndex}})],1)},r=[],o=(n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("bd86")),i=n("2af0"),s=n("01ea"),l=n("774e4"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClippedFrame",{attrs:{topFrame:!0}}),e._t("content"),n("ClippedFrame",{attrs:{topFrame:!1}})],2)},d=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-clip-container",class:[e.topFrame?"":"bottomframe"]},[n("div",{staticClass:"top-clip-container__shape"}),n("div",{staticClass:"top-clip-container__shape-body"})])},g=[],m={props:["topFrame"]},p=m,I=(n("9874"),n("2877")),f=Object(I["a"])(p,u,g,!1,null,"5431d422",null),_=f.exports,h={components:{ClippedFrame:_}},y=h,O=Object(I["a"])(y,c,d,!1,null,null,null),b=O.exports,w=n("074b"),v=n("0a93");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={props:["section"],data:function(){return{showImageModal:!1,targetImageIndeces:{rowId:null,imageIndex:null},targetImageUrl:""}},components:{Carousel3d:i["Carousel3d"],Slide:i["Slide"],CustomHalfClipped:b,ImageModal:w["a"]},computed:{WORK_COLUMNS_TYPES:function(){return v}},methods:{toggleFullScreenMode:function(e,t){if(t.is_auto_play){e.preventDefault();var n=document.getElementById("video".concat(t.id));document.fullscreenElement?document.exitFullscreen():n.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}},getImages:function(e){return this.section.rows[e].columns.filter((function(e){return e.type===v["IMAGE"]}))},getWidth:function(e){return Object(s["a"])()?"100%":e+"%"},setShowImageModal:function(e){this.showImageModal=e},openImageModal:function(e,t){this.targetImageIndeces=M(M({},this.targetImageIndeces),{},{rowId:e,imageIndex:t}),this.targetImageUrl=this.getImages(e)[t].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(e){var t=this.targetImageIndeces,n=t.rowId,a=t.imageIndex,r=this.getImages(n).length;"next"===e?this.targetImageIndeces=M(M({},this.targetImageIndeces),{},{imageIndex:a===r-1?0:a+1}):this.targetImageIndeces.imageIndex=0===a?r-1:a-1,this.targetImageUrl=this.getImages(n)[this.targetImageIndeces.imageIndex].img_content[0].url}},updated:function(){Object(l["a"])("description-container")}},E=C,P=(n("0d46"),Object(I["a"])(E,a,r,!1,null,"200dba72",null));t["a"]=P.exports},9874:function(e,t,n){"use strict";n("7d96")},b1ab:function(e,t,n){},cc4d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.section.rows,(function(t,a){return n("div",{key:t.id,staticClass:"row m-0 p-0"},e._l(t.columns,(function(t){return n("div",{key:t.index,style:{width:e.getWidth(t.ratio)}},[t.type===e.WORK_COLUMNS_TYPES.TITLE&&t.fillable?n("div",{staticClass:"work-details-sections__title-normal"},[e._v(" "+e._s(t.content)+" ")]):t.type===e.WORK_COLUMNS_TYPES.IMAGE&&t.fillable?e._l(t.img_content,(function(t,r){return n("div",{key:t.id,staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openImageModal(a,r)}}},[n("img",{staticClass:"image-placeholder",attrs:{src:t.url,width:"100%",draggable:"false",alt:""}})])})):t.type===e.WORK_COLUMNS_TYPES.VIDEO&&t.fillable?e._l(t.vid_content,(function(t){return n("div",{key:t.id,staticClass:"work-details-sections__video"},[n("video",{style:{cursor:t.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+t.id,src:t.url,width:"100%",controls:!t.is_auto_play,loop:t.is_auto_play,autoplay:t.is_auto_play},domProps:{muted:t.is_auto_play},on:{click:function(n){return e.toggleFullScreenMode(n,t)}}})])})):t.type===e.WORK_COLUMNS_TYPES.SLIDER&&t.fillable?n("div",[n("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0}},e._l(t.img_content,(function(e,t){return n("Slide",{key:t,attrs:{index:t}},[n("img",{staticClass:"image-placeholder",attrs:{src:e.url,draggable:"false"}})])})),1)],1):e._e(),t.type===e.WORK_COLUMNS_TYPES.DESCRIPTION&&t.fillable?n("div",{staticClass:"description-container work-details-sections__description",domProps:{innerHTML:e._s(t.content)}}):e._e()],2)})),0)})),n("ImageModal",{attrs:{showImageModal:e.showImageModal,setShowImageModal:e.setShowImageModal,imageUrl:e.targetImageUrl,setImageIndex:e.setImageIndex}})],2)},r=[],o=(n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("bd86")),i=n("2af0"),s=n("074b"),l=n("01ea"),c=n("774e4"),d=n("0a93");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={props:["section"],data:function(){return{showImageModal:!1,targetImageIndeces:{rowId:null,imageIndex:null},targetImageUrl:""}},components:{Carousel3d:i["Carousel3d"],Slide:i["Slide"],ImageModal:s["a"]},computed:{WORK_COLUMNS_TYPES:function(){return d}},methods:{getImages:function(e){return this.section.rows[e].columns.filter((function(e){return e.type===d["IMAGE"]}))},getWidth:function(e){return Object(l["a"])()?"100%":e+"%"},toggleFullScreenMode:function(e,t){if(t.is_auto_play){e.preventDefault();var n=document.getElementById("video".concat(t.id));document.fullscreenElement?document.exitFullscreen():n.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}},setShowImageModal:function(e){this.showImageModal=e},openImageModal:function(e,t){this.targetImageIndeces=g(g({},this.targetImageIndeces),{},{rowId:e,imageIndex:t}),this.targetImageUrl=this.getImages(e)[t].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(e){var t=this.targetImageIndeces,n=t.rowId,a=t.imageIndex,r=this.getImages(n).length;"next"===e?this.targetImageIndeces=g(g({},this.targetImageIndeces),{},{imageIndex:a===r-1?0:a+1}):this.targetImageIndeces.imageIndex=0===a?r-1:a-1,this.targetImageUrl=this.getImages(n)[this.targetImageIndeces.imageIndex].img_content[0].url}},updated:function(){Object(c["a"])("description-container")}},p=m,I=(n("1994"),n("2877")),f=Object(I["a"])(p,a,r,!1,null,"edff3d54",null);t["a"]=f.exports}}]);
//# sourceMappingURL=OurWorkDetails~ServicesDetails.381a3955.js.map