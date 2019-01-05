require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([22],{29:function(t,s,e){"use strict";var i=r(e(1)),a=r(e(30));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},30:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(32),a=e.n(i),r=e(43);var o=function(t){e(31)},n=e(0)(a.a,r.a,o,null,null);s.default=n.exports},31:function(t,s){},32:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var i=o(e(6)),a=o(e(10)),r=o(e(7));function o(t){return t&&t.__esModule?t:{default:t}}function n(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,e){return function i(a,r){try{var o=s[a](r),n=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(n).then(function(t){i("next",t)},function(t){i("throw",t)});t(n)}("next")})}}s.default={components:{uniNavBar:a.default,uniIcon:r.default},data:function(){return{autoPlay:!1,indicator:!1,currents:1,interval:3e3,duration:500,scrollLeft:0,isClickChange:!1,currentTab:0,goodsListShow:!0,sortord:"综合排序",salesLitre:!1,priceLitre:!1,commissionLitre:!1,tabsList:[{name:"精选",id:"jing1"},{name:"有机食品",id:"you2"},{name:"保健养生",id:"bao3"},{name:"母婴用品",id:"mu4"},{name:"美妆护肤",id:"mei5"},{name:"时尚女装",id:"shi6"},{name:"男装",id:"nan7"},{name:"时尚鞋包",id:"shi8"},{name:"家居用品",id:"jia9"}],imgUrlList:[{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"},{id:1,imgUrl:"../../../static/swiper.png",hrefUrl:"baidu.com"}],actionList:[{imgUrl:"../../../static/yongjin.png",id:"1",name:"佣金好礼",hrefUrl:"/pages/healthyMall/brokerage"},{imgUrl:"../../../static/youhui.png",id:"2",name:"优惠礼包",hrefUrl:"/pages/healthyMall/discounts"},{imgUrl:"../../../static/shangjia_icon.png",id:"3",name:"商家入驻",hrefUrl:"/pages/healthyMall/shopEnter"},{imgUrl:"../../../static/kefu_icon.png",id:"4",name:"联系客服",hrefUrl:"/pages/healthyMall/service"}],newText:{text:"一降再降，喜迎国庆黄金周，美妆达人惊喜推荐，进口美，更有优惠好...",url:"",imgUrl:"../../../static/swiper.png"},time:{hour:"",minute:"",second:""},timeLimitData:{time:"11:20:48",list:[{imgUrl:"../../../static/time_img.png",id:1,brokerage:"28.65",price:"96",originalPrice:"106",hrefUrl:""},{imgUrl:"../../../static/time_img.png",id:2,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"},{imgUrl:"../../../static/time_img.png",id:3,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"},{imgUrl:"../../../static/time_img.png",id:4,brokerage:"28.65",price:"96",hrefUrl:"",originalPrice:"106"}]},hotGoodsData:[{imgUrl:"../../../static/organicFood.png",id:"1",hrefUrl:""},{imgUrl:"../../../static/babyCare.png",id:"3",hrefUrl:""},{imgUrl:"../../../static/cosmetics.png",id:"4",hrefUrl:""},{imgUrl:"../../../static/healthcare.png",id:"2",hrefUrl:""}],recommendListData:[{id:1,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""},{id:2,goodsName:"澳洲进口保健钙片儿童老...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""}]}},onLoad:function(){var t=this.timeLimitData.time.split(":");this.time.hour=t[0],this.time.minute=t[1],this.time.second=t[2],console.log(this.time)},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{getTimeLimit:function(){t.navigateTo({url:"/pages/healthyMall/goodsList"})},getAction:function(s){console.log(s),t.navigateTo({url:s.hrefUrl})},getHotShop:function(t){console.log("getHotShop",t.currentTarget.dataset.current)},getDetails:function(s){console.log(s),console.log("进入产品详情页"),t.navigateTo({url:"/pages/healthyMall/goodsDetails"})},searchIdenx:function(){console.log("点击搜索"),t.navigateTo({url:"/pages/healthyMall/search"})},getListData:function(){console.log("请求接口")},synthesis:function(){console.log("综合排序"),"综合排序"!==this.sortord&&(this.sortord="综合排序",this.getListData())},sales:function(){console.log("销量"),this.sortord="销量",this.salesLitre?(this.salesLitre=!1,console.log("销量的降序"),this.getListData()):(this.salesLitre=!0,console.log("销量的升序"),this.getListData())},price:function(){this.sortord="价格",console.log("价格"),this.priceLitre?(console.log("价钱的降序"),this.priceLitre=!1,this.getListData()):(console.log("价钱的升序"),this.priceLitre=!0,this.getListData())},commission:function(){this.sortord="佣金",console.log("佣金"),this.commissionLitre?(console.log("佣金的降序"),this.commissionLitre=!1,this.getListData()):(console.log("佣金的升序"),this.commissionLitre=!0,this.getListData())},cart:function(){console.log("点击购物车"),t.navigateTo({url:"/pages/healthyMall/shoppingCart"})},getSwiper:function(t){console.log(t.detail.current),this.currents=t.detail.current},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout(function(){t.stopPullDownRefresh(),console.log("stopPullDownRefresh")},1e3)},bindChange:function(){var s=n(i.default.mark(function s(e){var a,r,o,n,c,l,m,d,g;return i.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(a=e.target.current,console.log("bingChange",a),!this.isClickChange){s.next=6;break}return this.currentTab=a,this.isClickChange=!1,s.abrupt("return");case 6:return s.next=8,this.getWidth("tab-bar");case 8:r=s.sent,o=r.scrollLeft,n=0,c=0;case 12:if(!(c<a)){s.next=20;break}return s.next=15,this.getWidth(this.tabs[c].id);case 15:l=s.sent,n+=l.width;case 17:c++,s.next=12;break;case 20:return m=t.getSystemInfoSync().windowWidth,s.next=23,this.getWidth(this.tabs[a].id);case 23:d=s.sent,g=d.width,n+g-o>m&&(this.scrollLeft=n+g-m),n<o&&(this.scrollLeft=n),this.isClickChange=!1,this.currentTab=a,console.log("bingChange",this.currentTab);case 30:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}(),getWidth:function(s){return new Promise(function(e,i){t.createSelectorQuery().select("#"+s).fields({size:!0,scrollOffset:!0},function(t){"tab-bar"===s&&console.log("id=",s,"数据:",t),e(t)}).exec()})},swichNav:function(){var t=n(i.default.mark(function t(s){var e,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==s.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:e=t.sent,a=e.scrollLeft,this.scrollLeft=a,this.isClickChange=!0,this.currentTab=s.target.dataset.current,console.log("swichNav",s.target),console.log("swichNav",this.currentTab),0===this.currentTab?(this.goodsListShow=!0,console.log(this.goodsListShow)):this.goodsListShow=!1;case 14:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()}}}).call(s,e(2).default)},43:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"healthyMall"},[e("view",{staticClass:"header"},[e("view",{staticClass:"search"},[e("view",{staticClass:"uni-icon uni-icon-search"}),e("text",{staticClass:"searchInput",attrs:{eventid:"iMl-0"},on:{click:t.searchIdenx}},[t._v("点击搜索商品或者店铺")])]),e("image",{staticClass:"cart",attrs:{src:"../../../static/cart.png",mode:"",eventid:"ueo-1"},on:{click:t.cart}})]),e("view",{staticClass:"swiperContent"},[e("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabsList,function(s,i){return e("block",{key:s.id},[e("view",{class:["swiper-tab-list",t.currentTab==i?"on":""],attrs:{id:s.id,"data-current":i,eventid:"l9o-2-"+i},on:{click:t.swichNav}},[t._v(t._s(s.name))])])})),e("view",{staticClass:"swiperContentDetails"},[t.goodsListShow?e("block",[e("view",{staticClass:"swiper"},[e("swiper",{attrs:{"previous-margin":"30rpx","next-margin":"30rpx",current:1,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,eventid:"5oY-3"},on:{change:t.getSwiper}},t._l(t.imgUrlList,function(s,i){return e("swiper-item",{key:i,class:t.currents===i?"current swiperView":"noCurrent swiperView",attrs:{mpcomid:"mmu-0-"+i}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:s.imgUrl,mode:""}})])])}))],1),e("view",{staticClass:"actionBlock"},t._l(t.actionList,function(s,i){return e("view",{key:i,staticClass:"actionBlockItem",attrs:{eventid:"qv9-4-"+i},on:{click:function(e){t.getAction(s)}}},[e("image",{staticClass:"actionBlockImg",attrs:{src:s.imgUrl,mode:""}}),e("text",{staticClass:"actionBlockText"},[t._v(t._s(s.name))])])})),e("view",{staticClass:"borderBlock"}),e("view",{staticClass:"newsBlock"},[e("image",{staticClass:"newIcon",attrs:{src:"../../../static/zixun.png",mode:""}}),e("text",{staticClass:"newsBlockText"},[t._v(t._s(t.newText.text))]),e("image",{staticClass:"newImg",attrs:{src:t.newText.imgUrl,mode:""}})]),e("view",{staticClass:"timeLimit"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("限时高佣")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.hour))]),e("text",{staticClass:"timeFen"},[t._v(":")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.minute))]),e("text",{staticClass:"timeFen"},[t._v(":")]),e("text",{staticClass:"timeText"},[t._v(t._s(t.time.second))])]),e("view",{staticClass:"timeLimitHeaderRight",attrs:{eventid:"NdC-5"},on:{tap:t.getTimeLimit}},[e("text",[t._v("更多")]),e("image",{attrs:{src:"../../../static/move.png",mode:""}})])]),e("view",{staticClass:"timeLimitList"},t._l(t.timeLimitData.list,function(s,i){return e("view",{key:i,staticClass:"timeLimitListItem",attrs:{eventid:"GwS-6-"+i},on:{tap:function(s){t.getDetails()}}},[e("image",{attrs:{src:s.imgUrl,mode:""}}),e("text",{staticClass:"brokerage"},[t._v("￥"+t._s(s.brokerage))]),e("view",{staticClass:"priceBlock"},[e("text",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"originalPrice"},[t._v("￥"+t._s(s.originalPrice))])])])}))]),e("view",{staticClass:"hotShopp"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("热卖商城")])])]),e("view",{staticClass:"hotGoodsList"},t._l(t.hotGoodsData,function(s,i){return e("view",{key:s.id,staticClass:"hotGoodsListItem",attrs:{"data-current":s.id,eventid:"GTB-7-"+i},on:{tap:t.getHotShop}},[e("image",{attrs:{src:s.imgUrl,mode:""}})])}))]),e("view",{staticClass:"recommend"},[e("view",{staticClass:"timeLimitHeader"},[e("view",{staticClass:"timeLimitHeaderLeft"},[e("text",{staticClass:"timeBorder"}),e("text",{staticClass:"textTitle"},[t._v("热卖推荐")])]),e("view",{staticClass:"timeLimitHeaderRight"},[e("text",[t._v("综合推荐")]),e("image",{staticClass:"down",attrs:{src:"../../../static/down.png",mode:""}})])]),e("view",{staticClass:"recommendList"},t._l(t.recommendListData,function(s,i){return e("view",{key:i,staticClass:"recommendListItem",attrs:{eventid:"IzD-8-"+i},on:{tap:t.getDetails}},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"recommendListRight"},[e("view",{staticClass:"recommendListRightHeader"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"goodsName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"sales"},[t._v("\n                             销量:"+t._s(s.sales)+"\n                           ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceText"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))]),e("button",{staticClass:"lookBtn"},[t._v("立即查看")])],1)])])}))])]):e("block",[e("view",{staticClass:"goodslist"},[e("view",{staticClass:"goodslistHeader"},[e("view",{staticClass:"tabItems",attrs:{eventid:"EF6-9"},on:{tap:t.synthesis}},[e("text",{class:"综合排序"===t.sortord?"active":""},[t._v("综合排序")])]),e("view",{staticClass:"tabItems",attrs:{eventid:"Cg3-10"},on:{tap:t.sales}},[e("text",{class:"销量"===t.sortord?"active":""},[t._v("销量")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.salesLitre&&"销量"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.salesLitre&&"销量"===t.sortord?"arrowsBottom active":"arrowsBottom"})])]),e("view",{staticClass:"tabItems",attrs:{eventid:"Knh-11"},on:{tap:t.price}},[e("text",{class:"价格"===t.sortord?"active":""},[t._v("价格")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.priceLitre&&"价格"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.priceLitre&&"价格"===t.sortord?"arrowsBottom active":"arrowsBottom"})])]),e("view",{staticClass:"tabItems",attrs:{eventid:"dyo-12"},on:{tap:t.commission}},[e("text",{class:"佣金"===t.sortord?"active":""},[t._v("佣金")]),e("view",{staticClass:"arrowsView"},[e("text",{class:!1===t.commissionLitre&&"佣金"===t.sortord?"arrowsTop active":"arrowsTop"}),e("text",{class:!0===t.commissionLitre&&"佣金"===t.sortord?"arrowsBottom active":"arrowsBottom"})])])]),e("view",{staticClass:"goodsListItems"},[e("view",{staticClass:"recommendList"},t._l(t.recommendListData,function(s,i){return e("view",{key:i,staticClass:"recommendListItem",attrs:{eventid:"vv9-13-"+i},on:{tap:t.getDetails}},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"recommendListRight"},[e("view",{staticClass:"recommendListRightHeader"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"goodsName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"sales"},[t._v("\n                            销量:"+t._s(s.sales)+"\n                          ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceText"},[t._v("￥"+t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))]),e("button",{staticClass:"lookBtn"},[t._v("立即查看")])],1)])])}))])])])],1)],1)])},staticRenderFns:[]};s.a=i}},[29]);