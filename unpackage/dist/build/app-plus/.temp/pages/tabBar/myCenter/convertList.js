require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([17],{195:function(t,e,n){"use strict";var i=s(n(1)),a=s(n(196));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(198),a=n.n(i),s=n(199);var o=function(t){n(197)},r=n(0)(a.a,s.a,o,null,null);e.default=r.exports},197:function(t,e){},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(3),s=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],n=this.list[this.list.length-1],i=n+6,a=n+1;a<i;a++)e.push(a);setTimeout(function(){i>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},800)}},components:{loadMore:s.default}}},199:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t.list.length?n("view",[t._l(t.list,function(e,i){return n("view",{key:i,staticClass:"list"},[t._m(0,!0),n("navigator",{staticClass:"right",attrs:{url:"goodsDetail"}},[n("view",[n("text",[t._v("精选黑色双肩背包\\n")]),n("text",[t._v("6666")]),n("text",[t._v("生命果")])]),n("view",[n("image",{attrs:{src:"../../../static/blackArrow.png",mode:""}})])])],1)}),n("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"aNI-0"}})],2):n("view",{staticClass:"empty"},[n("image",{attrs:{src:"../../../static/empty.png",mode:""}}),n("text",[t._v("您还没有兑换记录哦")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])}]};e.a=i}},[195]);