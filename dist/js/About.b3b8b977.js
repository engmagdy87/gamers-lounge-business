(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["About"],{"0445":function(t,e,n){"use strict";n("f80e")},"0ce6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isWebsiteAboutFetched?n("div",{staticClass:"about-wrapper"},[n("Hero",{attrs:{heroImage:t.about.img_cover.url},scopedSlots:t._u([{key:"hero-content",fn:function(){return[n("div",{staticClass:"row align-items-end h-100 justify-content-center about-container"},[n("HalfClippedShape",{scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"about-container__heroContent"},[n("h1",[t._v("OUR VISION")]),n("p",{domProps:{innerHTML:t._s(t.about.vision)}}),n("h1",[t._v("OUR MISSION & OBJECTIVES")]),n("p",{domProps:{innerHTML:t._s(t.about.mission)}})])]},proxy:!0}],null,!1,3342726046)})],1)]},proxy:!0}],null,!1,4052784259)}),t.about.sections?n("AboutSection",{attrs:{about:t.about}}):t._e(),t.aboutPage>0?n("Intersect",{on:{enter:t.loadMoreAboutSections}},[n("div",{staticClass:"threshold"},[n("Loading",{attrs:{showLoading:t.showLoading}})],1)]):t._e(),n("Clients")],1):t._e()},s=[],r=(n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("96cf"),n("3b8d")),a=n("bd86"),i=n("2f62"),c=n("6e87"),u=n("4e44"),l=n("cac6"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.about.sections.data,(function(t){return n("div",{key:t.id,staticClass:"about-section-wrapper"},[n("AboutSectionData",{staticClass:"about-section-wrapper__inside",attrs:{section:t}})],1)})),0)},p=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-section-wrapper"},[n("div",{staticClass:"about-section-wrapper__container"},[t._l(t.section.rows,(function(e,o){return n("div",{key:e.id,staticClass:"row m-0 p-0 w-100"},t._l(e.columns,(function(e){return n("div",{key:e.index,style:{width:t.getWidth(e.ratio)}},[e.type===t.ABOUT_COLUMNS_TYPES.TITLE&&e.fillable?n("div",{staticClass:"work-details-sections__title-normal"},[t._v(" "+t._s(e.content)+" ")]):e.type===t.ABOUT_COLUMNS_TYPES.IMAGE&&e.fillable?t._l(e.img_content,(function(e,s){return n("div",{key:e.id,staticClass:"about-section-wrapper__inside--is-image",staticStyle:{cursor:"pointer"},style:{"background-image":"url("+e.url+")"},on:{click:function(e){return t.openImageModal(o,s)}}})})):e.type===t.ABOUT_COLUMNS_TYPES.VIDEO&&e.fillable?t._l(e.vid_content,(function(e){return n("div",{key:e.id,staticClass:"work-details-sections__video"},[n("video",{style:{cursor:e.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+e.id,src:e.url,width:"100%",controls:!e.is_auto_play,loop:e.is_auto_play,autoplay:e.is_auto_play},domProps:{muted:e.is_auto_play},on:{click:function(n){return t.toggleFullScreenMode(n,e)}}})])})):e.type===t.ABOUT_COLUMNS_TYPES.SLIDER&&e.fillable?n("div",{staticClass:"work-details-sections__slider"},[n("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0}},t._l(e.img_content,(function(t,e){return n("Slide",{key:e,attrs:{index:e}},[n("img",{attrs:{src:t.url,draggable:"false"}})])})),1)],1):t._e(),e.type===t.ABOUT_COLUMNS_TYPES.DESCRIPTION&&e.fillable?n("div",{staticClass:"description-container about-section-wrapper__inside--is-text"},[n("div",{domProps:{innerHTML:t._s(e.content)}})]):t._e()],2)})),0)})),n("ImageModal",{attrs:{showImageModal:t.showImageModal,setShowImageModal:t.setShowImageModal,imageUrl:t.targetImageUrl,setImageIndex:t.setImageIndex}})],2)])},f=[],h=n("2af0"),b=n("074b"),m=n("01ea"),_=n("774e4"),w=n("0a93");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={props:["section"],data:function(){return{showImageModal:!1,targetImageIndeces:{rowId:null,imageIndex:null},targetImageUrl:""}},components:{Carousel3d:h["Carousel3d"],Slide:h["Slide"],ImageModal:b["a"]},computed:{ABOUT_COLUMNS_TYPES:function(){return w}},methods:{getImages:function(t){return this.section.rows[t].columns.filter((function(t){return t.type===w["IMAGE"]}))},getWidth:function(t){return Object(m["a"])()?"100%":t+"%"},toggleFullScreenMode:function(t,e){if(e.is_auto_play){t.preventDefault();var n=document.getElementById("video".concat(e.id));document.fullscreenElement?document.exitFullscreen():n.requestFullscreen().catch((function(t){alert("Error attempting to enable full-screen mode: ".concat(t.message," (").concat(t.name,")"))}))}},setShowImageModal:function(t){this.showImageModal=t},openImageModal:function(t,e){this.targetImageIndeces=S(S({},this.targetImageIndeces),{},{rowId:t,imageIndex:e}),this.targetImageUrl=this.getImages(t)[e].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(t){var e=this.targetImageIndeces,n=e.rowId,o=e.imageIndex,s=this.getImages(n).length;"next"===t?this.targetImageIndeces=S(S({},this.targetImageIndeces),{},{imageIndex:o===s-1?0:o+1}):this.targetImageIndeces.imageIndex=0===o?s-1:o-1,this.targetImageUrl=this.getImages(n)[this.targetImageIndeces.imageIndex].img_content[0].url}},updated:function(){Object(_["a"])("description-container")}},I=v,y=(n("c565"),n("2877")),j=Object(y["a"])(I,g,f,!1,null,"f1d5be32",null),C=j.exports,P={props:["about"],components:{AboutSectionData:C}},k=P,E=Object(y["a"])(k,d,p,!1,null,null,null),A=E.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isSponsorsFetched?n("div",{staticClass:"about-clients-wrapper"},[n("div",{staticClass:"about-clients-wrapper__inside"},[t._m(0),t._l(t.windowSteps,(function(e,o){return n("div",{key:e},[0===o?n("div",{staticClass:"about-clients-wrapper__topline"},[n("div")]):t._e(),n("div",{staticClass:"container"},[e<t.sponsors.length?n("ClientsData",{attrs:{link:t.sponsors[e].link,imageName:t.sponsors[e].name,imageUrl:t.sponsors[e].image.url,showBottomGuard:e===t.windowSteps[t.windowSteps.length-1]}}):t._e(),e+1<t.sponsors.length?n("ClientsData",{attrs:{link:t.sponsors[e+1].link,imageName:t.sponsors[e+1].name,imageUrl:t.sponsors[e+1].image.url,showBottomGuard:e===t.windowSteps[t.windowSteps.length-1]}}):t._e(),e+2<t.sponsors.length?n("ClientsData",{attrs:{link:t.sponsors[e+2].link,imageName:t.sponsors[e+2].name,imageUrl:t.sponsors[e+2].image.url,showBottomGuard:e===t.windowSteps[t.windowSteps.length-1]}}):t._e(),e+3<t.sponsors.length?n("ClientsData",{attrs:{link:t.sponsors[e+3].link,imageName:t.sponsors[e+3].name,imageUrl:t.sponsors[e+3].image.url,showBottomGuard:e===t.windowSteps[t.windowSteps.length-1]}}):t._e()],1),0!==o||o!==t.sponsors.length-1?n("div",{staticClass:"about-clients-wrapper__linebetween"},[n("div")]):t._e(),o===t.sponsors.length-1?n("div",{staticClass:"about-clients-wrapper__bottomline"},[n("div")]):t._e()])}))],2)]):t._e()},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clients-header"},[n("h1",[t._v("OUR CLIENTS")])])}],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-holder"},[n("div",{class:["image-holder__leftline",t.showBottomGuard&&"bottomgrid"]}),n("img",{staticClass:"image-holder__image",attrs:{src:t.imageUrl},on:{click:t.sponsorLink}}),n("div",{class:["image-holder__rightline",t.showBottomGuard&&"bottomgrid"]})])},T=[],F=(n("b54a"),{props:{imageUrl:String,imageName:String,className:String,link:String,showBottomGuard:Boolean},methods:{sponsorLink:function(){window.open(this.link,"__blank")}}}),B=F,D=(n("0445"),Object(y["a"])(B,U,T,!1,null,"716b943a",null)),L=D.exports;function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R={data:function(){return{windowSize:4}},components:{ClientsData:L},computed:H(H({},Object(i["d"])({isSponsorsFetched:function(t){return t.sponsors.isSponsorsFetched},sponsors:function(t){return t.sponsors.sponsors}})),{},{windowSteps:function(){for(var t=[],e=Math.ceil(this.sponsors.length/this.windowSize),n=0;n<e;n++)t.push(n*this.windowSize);return t}})},G=R,W=(n("35f5"),Object(y["a"])(G,x,M,!1,null,"75a1ccb6",null)),$=W.exports,Y=n("760e"),q=n("8932");function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={components:{Hero:u["a"],HalfClippedShape:l["a"],AboutSection:A,Clients:$,Intersect:Y["a"],Loading:q["a"]},data:function(){return{queriedAboutCounts:2,aboutPage:0,showLoading:!1}},computed:J({},Object(i["d"])({about:function(t){return t.about.websiteAbout},isWebsiteAboutFetched:function(t){return t.about.isWebsiteAboutFetched},isSponsorsFetched:function(t){return t.sponsors.isSponsorsFetched}})),methods:J(J(J({},Object(i["b"])({fetchAboutUsPageSponsors:c["a"].sponsors.actions.FETCH_WEBSITE_SPONSORS,fetchAbout:c["a"].about.actions.FETCH_WEBSITE_ABOUT})),Object(i["c"])({setShowFooterFlag:c["a"].app.mutations.SET_SHOW_FOOTER_FLAG})),{},{fetchHeroAndFirstSection:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.generateAboutPayload(!0,!0),t.next=3,this.fetchAbout(e);case 3:this.aboutPage++;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),generateAboutPayload:function(t,e){var n={};e||(n={first:this.queriedAboutCounts,page:this.aboutPage});var o={data:n,showSpinner:t,requestSource:"website"};return o},loadMoreAboutSections:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.showLoading||!this.about.sections.paginatorInfo.hasMorePages){t.next=7;break}return this.showLoading=!0,e=this.generateAboutPayload(!1,!1),t.next=5,this.fetchAbout(e);case 5:this.aboutPage++,this.showLoading=!1;case 7:if(this.about.sections.paginatorInfo.hasMorePages||this.isSponsorsFetched){t.next=11;break}return n={places:"ABOUT_US"},t.next=11,this.fetchAboutUsPageSponsors(n);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){this.setShowFooterFlag(!1),this.fetchHeroAndFirstSection()},updated:function(){this.about.sections.paginatorInfo&&!this.about.sections.paginatorInfo.hasMorePages&&this.setShowFooterFlag(!0)}},K=V,Q=(n("3f9f"),Object(y["a"])(K,o,s,!1,null,"1faa7a0e",null));e["default"]=Q.exports},"35f5":function(t,e,n){"use strict";n("e8b8")},"37df":function(t,e,n){},"3f9f":function(t,e,n){"use strict";n("6d95")},"4ad9":function(t,e,n){},"4e44":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-wrapper",style:{backgroundImage:"url("+t.heroImage+")"}},[t._t("hero-content")],2)},s=[],r={props:{heroImage:{type:String,default:""}}},a=r,i=(n("ad65"),n("2877")),c=Object(i["a"])(a,o,s,!1,null,"74ebac00",null);e["a"]=c.exports},"6d95":function(t,e,n){},ad65:function(t,e,n){"use strict";n("4ad9")},c565:function(t,e,n){"use strict";n("37df")},cac6:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["half-filled-box",t.isButton&&"half-filled-box--is-button"],attrs:{role:"button"},on:{click:t.onClickAction}},[t._t("content")],2)},s=[],r={props:{isButton:{type:Boolean,default:!1},onClickAction:{type:Function,default:function(){}}}},a=r,i=n("2877"),c=Object(i["a"])(a,o,s,!1,null,null,null);e["a"]=c.exports},e8b8:function(t,e,n){},f80e:function(t,e,n){}}]);
//# sourceMappingURL=About.b3b8b977.js.map