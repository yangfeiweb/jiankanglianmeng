require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([35],{165:function(t,e,n){"use strict";var s=a(n(1)),i=a(n(166));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(168),i=n.n(s),a=n(169);var c=function(t){n(167)},o=n(0)(i.a,a.a,c,null,null);e.default=o.exports},167:function(t,e){},168:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toast:!1}},methods:{toBind:function(){this.toast=!0},cancel:function(){this.toast=!1},confirm:function(){t.login({provider:"weixin",success:function(t){console.log(t.authResult),this.toast=!1}})}}}}).call(e,n(2).default)},169:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"wx"},[n("view",{staticClass:"login",attrs:{eventid:"mmt-0"},on:{tap:t.toBind}},[t._m(0),t._m(1)])]),t.toast?n("view",{staticClass:"toast"},[n("view",{staticClass:"main"},[n("view",{staticClass:"top"},[t._v("\n\t\t\t\t确定要解绑微信吗？\n\t\t\t")]),n("view",{staticClass:"btn"},[n("text",{attrs:{eventid:"rwZ-1"},on:{tap:t.cancel}},[t._v("取消")]),n("text",{attrs:{eventid:"V8d-2"},on:{tap:t.confirm}},[t._v("确定")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("image",{attrs:{src:"../../static/wxPay.png",mode:""}}),e("text",[this._v("微信")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("image",{attrs:{src:"../../static/rightArrow.png",mode:""}})])}]};e.a=s}},[165]);