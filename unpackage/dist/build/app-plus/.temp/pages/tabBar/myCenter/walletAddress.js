require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([5],{105:function(t,e,s){"use strict";var a=c(s(1)),n=c(s(106));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},106:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(108),n=s.n(a),c=s(109);var r=function(t){s(107)},l=s(0)(n.a,c.a,r,null,null);e.default=l.exports},107:function(t,e){},108:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{address:!0}},methods:{scanCode:function(){t.scanCode({success:function(t){console.log("条码内容："+t.result)}})},turn:function(){t.navigateTo({url:"turnSuccess"})}}}}).call(e,s(2).default)},109:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("view",{staticClass:"title"},[s("view",{staticClass:"address"},[s("text",[t._v("钱包地址")]),t.address?s("text",[t._v("地址错误")]):t._e(),s("input",{attrs:{type:"text",value:"",placeholder:"输入对方数据钱包地址","placeholder-class":"place-holder"}}),s("image",{attrs:{src:"../../../static/scanqr.png",mode:"",eventid:"vwc-0"},on:{tap:t.scanCode}})]),t._m(1),s("button",{attrs:{type:"default",eventid:"WTW-1"},on:{tap:t.turn}},[t._v("确认转出")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"warn"},[e("image",{attrs:{src:"../../../static/warn.png",mode:""}}),e("text",[this._v("注意，本次生命果转出后无法取消，请核对好钱包地址。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"address"},[e("text",[this._v("生命果数量")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入转让果实个数","placeholder-class":"place-holder"}})])}]};e.a=a}},[105]);