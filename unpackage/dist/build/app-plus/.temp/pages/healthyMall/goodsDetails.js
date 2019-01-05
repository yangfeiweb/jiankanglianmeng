require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{273:function(t,s,e){"use strict";var a=o(e(1)),i=o(e(274));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},274:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(276),i=e.n(a),o=e(281);var l=function(t){e(275)},c=e(0)(i.a,o.a,l,null,null);s.default=c.exports},275:function(t,s){},276:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var a=o(e(4)),i=o(e(277));function o(t){return t&&t.__esModule?t:{default:t}}s.default={components:{numberBox:i.default,shareModel:a.default},data:function(){return{maskShow:!1,popupShow:!1,shareData:{title:"商品详情",path:"baidu.com",href:"baidu.com",image:"https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png",shareText:"商品详情shareText",imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"},shareType:0,buyNum:2,currentStock:9,popupData:{imgUrl:"../../static/detalisImg.png",price:"99",stock:"999",num:"1"},ifSelectType:!0,showMask:!1,showDetailsState:!1,imgUrls:["../../static/detalisImg.png","../../static/detalisImg.png","../../static/detalisImg.png"],selectType:[],unfoldDetailsShow:!0,goodsCollectText:"收藏",shopCollectText:"收藏",goodsData:{cartGoodsNum:"2",collectShopShow:!1,goodsCollectShow:!1,name:"进口葡萄籽精华胶囊时尚",price:"899.0",originalCost:"999",coupon:"100",commission:"36.12",express:"0.00",sales:"521",site:"河南郑州",stock:"9999",parameter:"",spec:[{size:"300mg/瓶",imgUrl:"../../static/goodsDetails.png",color:"",price:"999.0",stock:"99",checked:1,id:"1"},{size:"300mg/瓶",imgUrl:"../../static/goodsDetails.png",color:"",price:"999.0",stock:"99",checked:1,id:"2"}],describe:"4.7高",serve:"4.7高",expressServe:"4.7高",particulars:["../../static/goodsDetails.png","../../static/goodsDetails.png","../../static/goodsDetails.png"]},recommendListData:[{id:1,goodsName:"新西兰原装美容养颜葡萄...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""},{id:2,goodsName:"新西兰原装美容养颜葡萄...",imgUrl:"../../../static/tuijian.png",discounts:"佣金",discountsIntro:"63.21",sales:"1234",price:"99.9",originalPrice:"168.9",hrefUrl:""}],toastText:"请选择商品大小"}},onShareAppMessage:function(){return{title:this.shareData.shareText?this.shareData.shareText:"欢迎体验健康联盟",path:"/pages/healthyMall/goodsDetails"}},methods:{shareGoods:function(){console.log("点击分享"),this.maskShow=!0,this.popupShow=!0},collectGoods:function(t){1===t?(console.log("点击收藏"),this.goodsData.goodsCollectShow=!1,this.goodsCollectText="收藏"):(console.log("点击取消收藏"),this.goodsData.goodsCollectShow=!0,this.goodsCollectText="已收藏")},collectShop:function(t){1===t?(console.log("点击收藏"),this.goodsData.collectShopShow=!1,this.shopCollectText="收藏"):(console.log("点击取消收藏"),this.goodsData.collectShopShow=!0,this.shopCollectText="已收藏")},unfoldDetails:function(){console.log("展开宝贝详情"),this.unfoldDetailsShow?this.unfoldDetailsShow=!1:this.unfoldDetailsShow=!0},getCart:function(){t.navigateTo({url:"/pages/healthyMall/shoppingCart"})},getGoodsType:function(s){"type"===s?(console.log("选择商品规格"),this.showDetailsState=!0,this.showMask=!0):"cart"===s?(console.log("点击加入购物车"),0===this.selectType.length?(this.showDetailsState=!0,this.showMask=!0):console.log("提示加入购物车")):"buy"===s?(console.log("点击购买"),0===this.selectType.length?(this.showDetailsState=!0,this.showMask=!0):t.navigateTo({url:"/pages/healthyMall/settleAccount"})):"buyPopup"===s?(console.log("在弹框中点击购买"),0===this.selectType.length?this.toastTap():t.navigateTo({url:"/pages/healthyMall/settleAccount"})):(0===this.selectType.length?this.toastTap():(this.toastText="加入购物车成功！",this.toastTap()),console.log("在弹框中点击购物车"))},hideMask:function(){console.log("遮罩层显示隐藏"),this.showMask=!1,this.showDetailsState=!1},numberUpdate:function(t){console.log(t),this.buyNum=t},toastTap:function(){t.showToast({title:this.toastText})},inABatch:function(){console.log("点击换一批推荐商品")},getPopupType:function(t){if(console.log(t),0===t.checked)console.log("已经为选中");else{console.log("设置为选中");for(var s=this.goodsData.spec.length,e=t.id,a=0;a<s;a++)e===this.goodsData.spec[a].id?(this.goodsData.spec[a].checked=0,this.selectType=[],this.selectType.push(this.goodsData.spec[a].id)):this.goodsData.spec[a].checked=1}}}}}).call(s,e(2).default)},277:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(279),i=e.n(a),o=e(280);var l=function(t){e(278)},c=e(0)(i.a,o.a,l,null,null);s.default=c.exports},278:function(t,s){},279:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"number-box",props:{value:{type:Number,default:0},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},computed:{disableSubtract:function(){return this.value<=this.min},disableAdd:function(){return this.value>=this.max}},onUnload:function(){this.value=0,this.step=1,this.max=1/0,this.min=-1/0},methods:{subtract:function(t){this._handleStep("subtract")},add:function(t){this._handleStep("add")},_handleStep:function(t){var s=this.value;"subtract"===t?s-=this.step:"add"===t&&(s+=this.step),s<this.min||s>this.max||(this.value=s)},handleBlur:function(t){var s=t.detail.value;s?((s=+s)>this.max?s=this.max:s<this.min&&(s=this.min),this.value=s):this.value=0}},watch:{value:function(t){this.$emit("update",t)}}}},280:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"uni-numbox"},[e("view",{staticClass:"uni-numbox-minus",class:{"uni-numbox-disabled":t.disableSubtract},attrs:{eventid:"Nts-0"},on:{click:t.subtract}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"uni-numbox-value",attrs:{type:"number",disabled:t.disabled,eventid:"G0W-1"},domProps:{value:t.value},on:{blur:t.handleBlur,input:function(s){s.target.composing||(t.value=s.target.value)}}}),e("view",{staticClass:"uni-numbox-plus",class:{"uni-numbox-disabled":t.disableAdd},attrs:{eventid:"zRl-2"},on:{click:t.add}},[t._v("+")])])},staticRenderFns:[]};s.a=a},281:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"index"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true","indicator-color":"#fff","indicator-active-color":"#88CB25"}},t._l(t.imgUrls,function(t,s){return e("swiper-item",{key:s,staticClass:"swiperItem",attrs:{mpcomid:"8Zy-0-"+s}},[e("image",{staticClass:"swiperItemImg",attrs:{src:t}})])})),e("image",{staticClass:"share",attrs:{src:"../../static/share.png",mode:"",eventid:"Wwj-0"},on:{tap:t.shareGoods}}),e("view",{staticClass:"goodsIntroduce"},[e("view",{staticClass:"goodsName"},[e("text",{staticClass:"goodsNameText"},[t._v(t._s(t.goodsData.name))]),e("view",{staticClass:"collect"},[t.goodsData.goodsCollectShow?e("image",{attrs:{src:"../../static/collectChecked.png",mode:"",eventid:"UGC-2"},on:{tap:function(s){t.collectGoods(1)}}}):e("image",{attrs:{src:"../../static/collect.png",mode:"",eventid:"q0u-1"},on:{tap:function(s){t.collectGoods(2)}}}),e("text",[t._v(t._s(t.goodsCollectText))])])]),e("view",{staticClass:"priceView"},[e("text",{staticClass:"moneyIcon"},[t._v("￥")]),e("text",{staticClass:"price"},[t._v(t._s(t.goodsData.price))]),e("text",{staticClass:"originalCost"},[t._v("￥"+t._s(t.goodsData.originalCost)+"元")])]),e("view",{staticClass:"infoView"},[e("text",{staticClass:"coupon"},[t._v("领劵:"+t._s(t.goodsData.coupon)+"元")]),e("view",{staticClass:"goodsInfo"},[e("text",{staticClass:"express goodsInfoStyle"},[t._v("快递: "+t._s(t.goodsData.express))]),e("text",{staticClass:"sales goodsInfoStyle"},[t._v("月销: "+t._s(t.goodsData.sales)+"笔")]),e("text",{staticClass:"site goodsInfoStyle"},[t._v(t._s(t.goodsData.site))])])]),e("view",{staticClass:"argumentView"},[e("view",{staticClass:"argumentViewList argumentViewListRight"},[e("image",{staticClass:"moneyIcon2",attrs:{src:"../../static/moneyIcon.png",mode:""}}),e("text",{staticClass:"commissionTitle"},[t._v("可得商品佣金: ")]),e("text",{staticClass:"commission"},[t._v("￥"+t._s(t.goodsData.commission)+"元")])]),e("view",{staticClass:"argumentViewList"},[e("text",{staticClass:"title"},[t._v("产品参数")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.parameter))]),e("image",{staticClass:"selectMove",attrs:{src:"../../static/detailsSelect.png",mode:""}})]),e("view",{staticClass:"argumentViewList",attrs:{eventid:"Sa7-3"},on:{tap:function(s){t.getGoodsType("type")}}},[e("text",{staticClass:"title"},[t._v("商品规格")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.spec))]),e("image",{staticClass:"selectMove",attrs:{src:"../../static/detailsSelect.png",mode:""}})]),e("view",{staticClass:"argumentViewList"},[e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("宝贝描述:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.describe))])]),e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("卖家服务:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.serve))])]),e("view",{staticClass:"describe"},[e("text",{staticClass:"title"},[t._v("物流服务:")]),e("text",{staticClass:"text"},[t._v(t._s(t.goodsData.expressServe))])])])]),e("view",{staticClass:"babyDetails"},[e("view",{staticClass:"babyDetailsTitle",attrs:{eventid:"GrB-4"},on:{tap:t.unfoldDetails}},[e("text",[t._v("宝贝详情")]),e("image",{attrs:{src:"../../static/arrowsBottom.png",mode:""}})]),t._l(t.goodsData.particulars,function(s,a){return e("view",{directives:[{name:"show",rawName:"v-show",value:t.unfoldDetailsShow,expression:"unfoldDetailsShow"}],key:a,staticClass:"babyDetailsImgView"},[e("image",{staticClass:"babyDetailsImg",attrs:{src:s,mode:""}})])})],2),e("view",{staticClass:"HotGoods"},[e("view",{staticClass:"HotGoodsTitle"},[t._m(0),e("text",{staticClass:"inABatch",attrs:{eventid:"A4Z-5"},on:{tap:t.inABatch}},[t._v("换一批")])]),e("view",{staticClass:"hotGoodsList"},t._l(t.recommendListData,function(s,a){return e("view",{key:a,staticClass:"hotGoodsListItem"},[e("image",{staticClass:"recommendImg",attrs:{src:s.imgUrl,mode:""}}),e("view",{staticClass:"hotGoodsListItemName"},[e("text",{staticClass:"discounts"},[t._v(t._s(s.discounts))]),e("text",{staticClass:"hotName"},[t._v(t._s(s.goodsName))])]),e("view",{staticClass:"goodsIntro"},[e("text",{staticClass:"discountsIntro"},[t._v("佣金:"+t._s(s.discountsIntro))]),e("text",{staticClass:"hotsales"},[t._v("\n                    销量:"+t._s(s.sales)+"\n                  ")])]),e("view",{staticClass:"goodsPrice"},[e("text",{staticClass:"goodsPriceTitle"},[t._v("优惠:")]),e("text",{staticClass:"goodsPriceIcon"},[t._v("￥")]),e("text",{staticClass:"goodsPriceText"},[t._v(t._s(s.price))]),e("text",{staticClass:"goodsOriginalPrice"},[t._v("￥"+t._s(s.originalPrice))])])])}))])]),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showMask,expression:"showMask"}],staticClass:"mask",attrs:{eventid:"N81-6"},on:{tap:t.hideMask}}),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showDetailsState,expression:"showDetailsState"}],staticClass:"popup popup-bottom"},[e("view",{staticClass:"goodsPopupTop"},[e("image",{staticClass:"goodsPopupTopImg",attrs:{src:t.popupData.imgUrl,mode:""}}),e("view",{staticClass:"goodsPopupTopText"},[e("text",{staticClass:"popupPrice"},[t._v("￥"+t._s(t.popupData.price))]),e("text",{staticClass:"popupStock"},[t._v("库存"+t._s(t.popupData.stock)+"件")]),e("text",{directives:[{name:"show",rawName:"v-show",value:t.ifSelectType,expression:"ifSelectType"}],staticClass:"popupStock"},[t._v("请选择大小")])])]),e("view",{staticClass:"sizeView"},[e("text",{staticClass:"sizeTitle"},[t._v("大小")]),e("view",{staticClass:"sizeItem"},t._l(t.goodsData.spec,function(s,a){return e("view",{key:a,class:0===s.checked?"sizeItemBtn active":"sizeItemBtn",attrs:{eventid:"tdd-7-"+a},on:{tap:function(e){t.getPopupType(s)}}},[t._v("\n              "+t._s(s.size)+"\n             ")])}))]),e("view",{staticClass:"buyNum"},[e("text",{staticClass:"buyNumTitle"},[t._v("购买数量")]),e("view",{staticClass:"buyNumInput"},[e("number-box",{attrs:{min:1,disabled:!0,max:t.currentStock,value:t.buyNum,eventid:"HsI-8",mpcomid:"6Dq-1"},on:{update:t.numberUpdate}})],1)]),e("view",{staticClass:"popupBtn"},[e("view",{staticClass:"addCartBtn",attrs:{eventid:"qGu-9"},on:{tap:function(s){t.getGoodsType("cartPopup")}}},[t._v("\n              加入购物车\n            ")]),e("view",{staticClass:"buyBtn",attrs:{eventid:"wJV-10"},on:{tap:function(s){t.getGoodsType("buyPopup")}}},[t._v("\n              立即购买\n            ")])])]),e("view",{staticClass:"detailsBase"},[e("view",{staticClass:"detailsBaseCart",attrs:{eventid:"ZmO-11"},on:{tap:t.getCart}},[e("image",{attrs:{src:"../../static/cartRight.png",mode:""}}),e("text",{staticClass:"cartGoodsNum"},[t._v(t._s(t.goodsData.cartGoodsNum))]),e("text",[t._v("购物车")])]),e("view",{staticClass:"detailsBaseCollect"},[t.goodsData.collectShopShow?e("image",{attrs:{src:"../../static/collectChecked.png",mode:"",eventid:"LUa-13"},on:{tap:function(s){t.collectShop(1)}}}):e("image",{attrs:{src:"../../static/collect.png",mode:"",eventid:"gll-12"},on:{tap:function(s){t.collectShop(2)}}}),e("text",[t._v(t._s(t.shopCollectText))])]),e("view",{staticClass:"addCartBtn",attrs:{eventid:"Jg4-14"},on:{tap:function(s){t.getGoodsType("cart")}}},[t._v("\n        \t加入购物车\n        ")]),e("view",{staticClass:"buyBtn",attrs:{eventid:"SuQ-15"},on:{tap:function(s){t.getGoodsType("buy")}}},[t._v("\n        \t立即购买\n        ")])]),e("share-model",{attrs:{maskShow:t.maskShow,popupShow:t.popupShow,shareData:t.shareData,shareType:t.shareType,mpcomid:"kiV-2"}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"HotGoodsCenter"},[s("text",{staticClass:"line"},[this._v("-")]),s("text",{staticClass:"text"},[this._v("推荐商品")]),s("text",{staticClass:"line"},[this._v("-")])])}]};s.a=a}},[273]);