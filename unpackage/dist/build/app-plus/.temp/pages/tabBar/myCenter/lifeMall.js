require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{200:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(201));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(203),i=s.n(a),n=s(204);var o=function(t){s(202)},r=s(0)(i.a,n.a,o,null,null);e.default=r.exports},202:function(t,e){},203:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),n=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{dots:!1,type:"1",list:[],loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(){for(var t=[],e=1;e<11;e++)t.push(e);this.list=t},methods:{selectTab:function(t){this.type=t.currentTarget.dataset.type}},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;for(var e=[],s=this.list[this.list.length-1],a=s+6,i=s+1;i<a;i++)e.push(i);setTimeout(function(){a>26?t.loadingType=2:(t.list=t.list.concat(e),t.loadingType=0)},800)}},components:{loadMore:n.default}}},204:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"top"},[s("view",{staticClass:"money"},[s("text",[t._v("6666")]),s("view",[s("navigator",{attrs:{url:""}},[t._v("生命果明细")]),s("navigator",{attrs:{url:"convertList"}},[t._v("兑换记录")])],1)]),s("view",{staticClass:"middle"},[s("text",{class:0==t.type?"active":"",attrs:{"data-type":"0",eventid:"np6-0"},on:{tap:t.selectTab}},[t._v("热门")]),s("text",{class:1==t.type?"active":"",attrs:{"data-type":"1",eventid:"vkr-1"},on:{tap:t.selectTab}},[t._v("推荐")])]),s("view",{staticClass:"bottom"},[s("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.dots,autoplay:"false",current:"0",interval:"2000",duration:"500",circular:"true",vertical:"true"}},[s("block",[s("swiper-item",{attrs:{mpcomid:"EEI-0"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"0XZ-1"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"UuJ-2"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])]),s("swiper-item",{attrs:{mpcomid:"pDc-3"}},[s("view",{staticClass:"view"},[s("image",{attrs:{src:"../../../static/laba.png",mode:""}}),s("view",{staticClass:"texts"},[t._v("\n\t\t\t\t\t\t\t\t兑换播报:恭喜用户\n\t\t\t\t\t\t\t\t"),s("text",[t._v("123456")]),t._v("兑换\n\t\t\t\t\t\t\t\t"),s("text",[t._v("iPhone X 256G")]),t._v("一台\n\t\t\t\t\t\t\t")])])])],1)],1)],1)]),s("view",{staticClass:"goodsList"},[s("view",{staticClass:"goodsTop"},[s("text",[t._v("热门兑换")]),s("navigator",{attrs:{url:""}},[t._v("\n\t\t\t\t更多\n\t\t\t\t"),s("image",{attrs:{src:"../../../static/blackArrow.png",mode:""}})])],1),s("view",{staticClass:"list"},[t._l(t.list,function(e,a){return s("view",{key:a,staticClass:"main"},[t._m(0,!0),s("view",{staticClass:"title"},[s("text",[t._v("精选黑色双肩背包\\n")]),s("text",[t._v("666")]),s("text",[t._v("生命果\\n")]),s("button",{attrs:{type:"default"}},[t._v("立即兑换")])],1)])}),s("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"ym7-4"}})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../../static/photo.png",mode:""}})])}]};e.a=a}},[200]);