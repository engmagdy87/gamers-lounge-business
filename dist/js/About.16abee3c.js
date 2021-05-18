(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["About"],{"0ce6":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isWebsiteAboutFetched?r("div",{staticClass:"about-wrapper"},[r("div",{staticClass:"about-wrapper__bg",style:"background-image: url("+e.about.img_cover.url+";"}),r("Hero",{attrs:{page:"services"},scopedSlots:e._u([{key:"hero-content",fn:function(){return[r("div",{staticClass:"row about-container__heroContent"},[r("h1",[e._v(" Creating a better community "),r("br"),e._v(" for gamers by gamers! ")])])]},proxy:!0}],null,!1,4212089470)}),r("div",{staticClass:"about-wrapper__content row"},[e.about.sections?r("AboutSection",{attrs:{about:e.about}}):e._e(),e.aboutPage>0?r("Intersect",{on:{enter:e.loadMoreAboutSections}},[r("div",{staticClass:"threshold"},[r("Loading",{attrs:{showLoading:e.showLoading}})],1)]):e._e(),r("Clients")],1)],1):e._e()},n=[],s=(r("8e6e"),r("ac6a"),r("cadf"),r("456d"),r("96cf"),r("3b8d")),i=r("bd86"),a=r("2f62"),c=r("6e87"),l=r("4e44"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.about.sections.data,(function(t,o){return r("div",{key:t.id,staticClass:"about-section-wrapper"},[r("AboutSectionData",{staticClass:"about-section-wrapper__inside",attrs:{section:t,title:e.titles[o]}})],1)})),0)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about-section-wrapper"},[r("h1",{class:["about-section-wrapper__title",e.getCssStyle(e.title)]},[e._v(" "+e._s(e.title)+" ")]),r("div",{staticClass:"about-section-wrapper__container"},[e._l(e.section.rows,(function(t,o){return r("div",{key:t.id,staticClass:"row m-0 p-0 w-100"},e._l(t.columns,(function(n,s){return r("div",{key:n.index,style:{width:e.getWidth(n.ratio)}},[n.type===e.ABOUT_COLUMNS_TYPES.TITLE&&n.fillable?r("div",{staticClass:"about-section-wrapper__title"},[e._v(" "+e._s(n.content)+" ")]):n.type===e.ABOUT_COLUMNS_TYPES.IMAGE&&n.fillable?e._l(n.img_content,(function(t){return r("div",{key:t.id,staticClass:"about-section-wrapper__image",staticStyle:{cursor:"pointer"},style:{"background-image":"url("+t.url+")"},on:{click:function(t){return e.openImageModal(o,s,null,n.type)}}})})):n.type===e.ABOUT_COLUMNS_TYPES.VIDEO&&n.fillable&&n.is_vid_extenral_enabled?r("div",{staticClass:"about-section-wrapper__video"},[r("iframe",{attrs:{width:"100%",height:e.getHeight(n.ratio,t.columns.length),src:e.getLiveVideoEmbedFormatter(n.vid_extenral),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):n.type===e.ABOUT_COLUMNS_TYPES.VIDEO&&n.fillable&&!n.is_vid_extenral_enabled?e._l(n.vid_content,(function(t){return r("div",{key:t.id,staticClass:"about-section-wrapper__video"},[r("video",{style:{cursor:t.is_auto_play?"pointer":"unset"},attrs:{preload:"auto",id:"video"+t.id,src:t.url,width:"100%",controls:!t.is_auto_play,loop:t.is_auto_play,autoplay:t.is_auto_play},domProps:{muted:t.is_auto_play},on:{click:function(r){return e.toggleFullScreenMode(r,t)}}})])})):n.type===e.ABOUT_COLUMNS_TYPES.SLIDER&&n.fillable?r("div",{staticClass:"about-section-wrapper__slider"},[r("Carousel3d",{attrs:{autoplay:!0,"autoplay-timeout":3e3,autoplayHoverPause:!0,height:400,width:500,border:0,onMainSlideClick:function(t){return e.openImageModal(o,s,t.index,n.type)}}},e._l(n.img_content,(function(e,t){return r("Slide",{key:t,attrs:{index:t}},[r("img",{attrs:{src:e.url,draggable:"false"}})])})),1)],1):e._e(),n.type===e.ABOUT_COLUMNS_TYPES.DESCRIPTION&&n.fillable?r("div",{staticClass:"description-container about-section-wrapper__description"},[r("div",{domProps:{innerHTML:e._s(n.content)}})]):e._e()],2)})),0)})),r("ImageModal",{attrs:{showImageModal:e.showImageModal,setShowImageModal:e.setShowImageModal,imageUrl:e.targetImageUrl,setImageIndex:e.contentType===e.ABOUT_COLUMNS_TYPES.IMAGE?e.setImageIndex:e.setImageForSliderIndex,showNavigation:e.showNavigation}})],2)])},g=[],h=(r("28a5"),r("2af0")),m=r("074b"),f=r("01ea"),b=r("774e4"),_=r("d408"),w=r("0a93");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={props:["section","title"],data:function(){return{sectionImages:{},showImageModal:!1,showNavigation:!1,targetImageIndeces:{rowId:null,colId:null,imgId:null},targetImageUrl:"",contentType:""}},components:{Carousel3d:h["Carousel3d"],Slide:h["Slide"],ImageModal:m["a"]},computed:{ABOUT_COLUMNS_TYPES:function(){return w}},methods:{getCssStyle:function(e){switch(e){case"our story":case"our vision":return"";case"Meet the founders":case"Testimonials":return"about-section-wrapper__title--center";default:break}},getLiveVideoEmbedFormatter:function(e){return Object(_["a"])(e)},getImages:function(e){return this.section.rows[e].columns},getWidth:function(e){return Object(f["a"])()?"100%":e+"%"},getHeight:function(e,t){return 1===t?Object(f["a"])()?"300px":document.body.clientHeight*e/120+"px":"100%"},toggleFullScreenMode:function(e,t){if(t.is_auto_play){e.preventDefault();var r=document.getElementById("video".concat(t.id));r.addEventListener("fullscreenchange",(function(){r.muted=!document.fullscreenElement})),document.fullscreenElement?(r.muted=!0,document.exitFullscreen()):(r.muted=!1,r.requestFullscreen().catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))})))}},setShowImageModal:function(e){this.showImageModal=e},openImageModal:function(e,t,r,o){this.showNavigation=!0,this.contentType=o,this.targetImageIndeces=v(v({},this.targetImageIndeces),{},{rowId:e,colId:t,imgId:r}),this.targetImageUrl=this.getImages(e)[t].img_content[0].url,this.setShowImageModal(!0)},setImageIndex:function(e,t){e.stopPropagation();var r,o=this.targetImageIndeces,n=o.rowId,s=o.colId,i="".concat(n,"-").concat(s),a=Object.keys(this.sectionImages),c=a.indexOf(i);r="next"===t?c===a.length-1?0:c+1:0===c?a.length-1:c-1;var l=a[r].split("-")[0],u=a[r].split("-")[1];this.targetImageIndeces=v(v({},this.targetImageIndeces),{},{rowId:l,colId:u}),this.targetImageUrl=this.sectionImages[a[r]]},setImageForSliderIndex:function(e,t){e.stopPropagation();var r,o=this.targetImageIndeces,n=o.rowId,s=o.colId,i=o.imgId,a=this.getImages(n)[s].img_content;r="next"===t?i===a.length-1?0:i+1:0===i?a.length-1:i-1,this.targetImageIndeces.imgId=r,this.targetImageUrl=a[r].url}},updated:function(){Object(b["a"])("description-container")},mounted:function(){var e=this;this.section.rows.forEach((function(t,r){t.columns.forEach((function(t,o){t.type===e.ABOUT_COLUMNS_TYPES.IMAGE&&t.fillable&&(e.sectionImages=v(v({},e.sectionImages),{},Object(i["a"])({},"".concat(r,"-").concat(o),t.img_content[0].url)))}))}))}},I=y,S=(r("6567"),r("2877")),C=Object(S["a"])(I,p,g,!1,null,"68aacf5a",null),j=C.exports,B={props:["about"],data:function(){return{titles:["our story","our vision","Meet the founders","Testimonials"]}},components:{AboutSectionData:j}},P=B,E=Object(S["a"])(P,u,d,!1,null,null,null),k=E.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isSponsorsFetched?r("div",{staticClass:"about-clients-wrapper"},[r("div",{staticClass:"about-clients-wrapper__inside"},[e._m(0),r("div",{staticClass:"clients-wrapper"},e._l(e.windowSteps,(function(t,o){return r("div",{key:t},[e.isDeviceSmart()?r("div",{staticClass:"container"},[t<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t].link,imageName:e.sponsors[t].name,imageUrl:e.sponsors[t].image.url,hideBorderLeftBorder:!0,hideBorderRightBorder:!1}}):e._e(),t+1<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+1].link,imageName:e.sponsors[t+1].name,imageUrl:e.sponsors[t+1].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!1}}):e._e(),t+2<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+2].link,imageName:e.sponsors[t+2].name,imageUrl:e.sponsors[t+2].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!0}}):e._e()],1):r("div",{staticClass:"container"},[t<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t].link,imageName:e.sponsors[t].name,imageUrl:e.sponsors[t].image.url,hideBorderLeftBorder:!0,hideBorderRightBorder:!1}}):e._e(),t+1<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+1].link,imageName:e.sponsors[t+1].name,imageUrl:e.sponsors[t+1].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!1}}):e._e(),t+2<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+2].link,imageName:e.sponsors[t+2].name,imageUrl:e.sponsors[t+2].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!1}}):e._e(),t+2<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+3].link,imageName:e.sponsors[t+3].name,imageUrl:e.sponsors[t+3].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!1}}):e._e(),t+3<e.sponsors.length?r("ClientsData",{attrs:{link:e.sponsors[t+4].link,imageName:e.sponsors[t+4].name,imageUrl:e.sponsors[t+4].image.url,hideBorderLeftBorder:!1,hideBorderRightBorder:!0}}):e._e()],1),0!==o||o!==e.sponsors.length-1?r("div",{staticClass:"about-clients-wrapper__linebetween"},[r("div")]):e._e(),o===e.sponsors.length-1?r("div",{staticClass:"about-clients-wrapper__bottomline"},[r("div")]):e._e()])})),0)])]):e._e()},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"clients-header"},[r("h1",[e._v("OUR CLIENTS")])])}],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image-holder"},[r("div",{class:["image-holder__leftline",e.hideBorderLeftBorder&&"hide-border"]}),r("img",{staticClass:"image-holder__image",attrs:{src:e.imageUrl},on:{click:e.sponsorLink}}),r("div",{class:["image-holder__rightline",e.hideBorderRightBorder&&"hide-border"]})])},M=[],T=(r("b54a"),{props:{imageUrl:String,imageName:String,className:String,link:String,hideBorderLeftBorder:Boolean,hideBorderRightBorder:Boolean},methods:{sponsorLink:function(){window.open(this.link,"__blank")}}}),x=T,D=(r("cd5f"),Object(S["a"])(x,L,M,!1,null,"52da48fd",null)),F=D.exports;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H={data:function(){return{windowSize:Object(f["a"])()?3:5}},components:{ClientsData:F},methods:{isDeviceSmart:function(){return Object(f["a"])()}},computed:R(R({},Object(a["d"])({isSponsorsFetched:function(e){return e.sponsors.isSponsorsFetched},sponsors:function(e){return e.sponsors.sponsors}})),{},{windowSteps:function(){for(var e=[],t=Math.ceil(this.sponsors.length/this.windowSize),r=0;r<t;r++)e.push(r*this.windowSize);return e}})},Y=H,W=(r("6a2e"),Object(S["a"])(Y,U,A,!1,null,"60e61910",null)),$=W.exports,q=r("760e"),G=r("8932");function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={components:{Hero:l["a"],AboutSection:k,Clients:$,Intersect:q["a"],Loading:G["a"]},data:function(){return{queriedAboutCounts:2,aboutPage:0,showLoading:!1}},computed:z({},Object(a["d"])({about:function(e){return e.about.websiteAbout},isWebsiteAboutFetched:function(e){return e.about.isWebsiteAboutFetched},isSponsorsFetched:function(e){return e.sponsors.isSponsorsFetched}})),methods:z(z(z({},Object(a["b"])({fetchAboutUsPageSponsors:c["a"].sponsors.actions.FETCH_WEBSITE_SPONSORS,fetchAbout:c["a"].about.actions.FETCH_WEBSITE_ABOUT})),Object(a["c"])({setShowFooterFlag:c["a"].app.mutations.SET_SHOW_FOOTER_FLAG})),{},{fetchHeroAndFirstSection:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.generateAboutPayload(!0,!0),e.next=3,this.fetchAbout(t);case 3:this.aboutPage++;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),generateAboutPayload:function(e,t){var r={};t||(r={first:this.queriedAboutCounts,page:this.aboutPage});var o={data:r,showSpinner:e,requestSource:"website"};return o},loadMoreAboutSections:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.showLoading||!this.about.sections.paginatorInfo.hasMorePages){e.next=7;break}return this.showLoading=!0,t=this.generateAboutPayload(!1,!1),e.next=5,this.fetchAbout(t);case 5:this.aboutPage++,this.showLoading=!1;case 7:if(this.about.sections.paginatorInfo.hasMorePages||this.isSponsorsFetched){e.next=11;break}return r={places:"ABOUT_US"},e.next=11,this.fetchAboutUsPageSponsors(r);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){this.setShowFooterFlag(!1),this.fetchHeroAndFirstSection()},updated:function(){this.about.sections.paginatorInfo&&!this.about.sections.paginatorInfo.hasMorePages&&this.setShowFooterFlag(!0)}},K=J,Q=(r("2a20"),Object(S["a"])(K,o,n,!1,null,"7cdc4856",null));t["default"]=Q.exports},"2a20":function(e,t,r){"use strict";r("ce61")},"3bb4":function(e,t,r){},"4e44":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"home"===e.page?"hero-wrapper":"hero-wrapper-services",style:{backgroundImage:"url("+e.heroImage+")"}},[e._t("hero-content")],2)},n=[],s={props:{heroImage:{type:String,default:""},page:{type:String,default:"home"}}},i=s,a=(r("c9a2"),r("2877")),c=Object(a["a"])(i,o,n,!1,null,"6ffdd4f2",null);t["a"]=c.exports},"4eec":function(e,t,r){},6567:function(e,t,r){"use strict";r("d13d")},"6a2e":function(e,t,r){"use strict";r("c6de")},c6de:function(e,t,r){},c9a2:function(e,t,r){"use strict";r("3bb4")},cd5f:function(e,t,r){"use strict";r("4eec")},ce61:function(e,t,r){},d13d:function(e,t,r){}}]);
//# sourceMappingURL=About.16abee3c.js.map