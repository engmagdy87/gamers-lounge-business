(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Notifications"],{f860:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[i("div",{staticClass:"container-fluid"},[i("card",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("h5",[t._v("Notifications Style")]),i("div",{staticClass:"alert alert-info"},[i("span",[t._v("This is a plain notification")])]),i("div",{staticClass:"alert alert-info"},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",[t._v("This is a notification with close button.")])]),i("div",{staticClass:"alert alert-info alert-with-icon",attrs:{"data-notify":"container"}},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",{staticClass:"nc-icon nc-app",attrs:{"data-notify":"icon"}}),i("span",{attrs:{"data-notify":"message"}},[t._v("This is a notification with close button and icon.")])]),i("div",{staticClass:"alert alert-info alert-with-icon",attrs:{"data-notify":"container"}},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",{staticClass:"nc-icon nc-app",attrs:{"data-notify":"icon"}}),i("span",{attrs:{"data-notify":"message"}},[t._v("This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.")])])]),i("div",{staticClass:"col-md-6"},[i("h5",[t._v("Notification states")]),i("div",{staticClass:"alert alert-info"},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",[i("b",[t._v(" Info - ")]),t._v(' This is a regular notification made with ".alert-info"')])]),i("div",{staticClass:"alert alert-success"},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",[i("b",[t._v(" Success - ")]),t._v(' This is a regular notification made with ".alert-success"')])]),i("div",{staticClass:"alert alert-warning"},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",[i("b",[t._v(" Warning - ")]),t._v(' This is a regular notification made with ".alert-warning"')])]),i("div",{staticClass:"alert alert-danger"},[i("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-dismiss":"alert"}},[i("i",{staticClass:"nc-icon nc-simple-remove"})]),i("span",[i("b",[t._v(" Danger - ")]),t._v(' This is a regular notification made with ".alert-danger"')])])])]),i("br"),i("br"),i("div",{staticClass:"places-buttons"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-6 text-center"},[i("h5",[t._v(" Notifications Places "),i("p",{staticClass:"category"},[t._v("Click to view notifications")])])])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-3 col-md-offset-1"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("top","left")}}},[t._v(" Top Left ")])]),i("div",{staticClass:"col-md-3"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("top","center")}}},[t._v(" Top Center ")])]),i("div",{staticClass:"col-md-3"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("top","right")}}},[t._v(" Top Right ")])])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-3 col-md-offset-1"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("bottom","left")}}},[t._v(" Bottom Left ")])]),i("div",{staticClass:"col-md-3"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("bottom","center")}}},[t._v(" Bottom Center ")])]),i("div",{staticClass:"col-md-3"},[i("button",{staticClass:"btn btn-default btn-block",on:{click:function(a){return t.notifyVue("bottom","right")}}},[t._v(" Bottom Right ")])])])])])],1)])},n=[],o=i("9675"),e={components:{Card:o["a"]},data:function(){return{type:["","info","success","warning","danger"],notifications:{topCenter:!1}}},methods:{notifyVue:function(t,a){var i=Math.floor(4*Math.random()+1);this.$notifications.notify({message:"<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>",icon:"nc-icon nc-app",horizontalAlign:a,verticalAlign:t,type:this.type[i]})}}},c=e,l=i("2877"),r=Object(l["a"])(c,s,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=Notifications.71b62aae.js.map