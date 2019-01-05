<template>
	<view class="index">
     <swiper class="swiper" indicator-dots="true" indicator-color='#fff' indicator-active-color='#88CB25'>
     	<swiper-item class="swiperItem" v-for="(img,key) in imgUrls" :key="key">
     		<image class="swiperItemImg" :src="img" />
     	</swiper-item>
     </swiper>
     <!-- #ifdef APP-PLUS -->
        <image class="share" src="../../static/share.png" mode="" @tap="shareGoods"></image>
     <!-- #endif -->
     <view class="goodsIntroduce">
     	 <view class="goodsName">
     	 	 <text class="goodsNameText">{{goodsData.name}}</text>
         <view class="collect">
           <image v-if="goodsData.goodsCollectShow" src="../../static/collectChecked.png" mode="" @tap="collectGoods(1)"></image>
           <image v-else  src="../../static/collect.png" @tap="collectGoods(2)" mode=""></image>
           <text>{{goodsCollectText}}</text>
         </view>
       </view>
       <view class="priceView">
         <text class="moneyIcon">￥</text>
       	 <text class="price">{{goodsData.price}}</text>
         <text class="originalCost">￥{{goodsData.originalCost}}元</text>
       </view>
       <view class="infoView">
       	  <text class="coupon">领劵:{{goodsData.coupon}}元</text>
          <view class="goodsInfo">
          	<text class="express goodsInfoStyle">快递: {{goodsData.express}}</text>
            <text class="sales goodsInfoStyle">月销: {{goodsData.sales}}笔</text>
            <text class="site goodsInfoStyle">{{goodsData.site}}</text>
          </view>
       </view>
       <view class="argumentView">
       	  <view class="argumentViewList argumentViewListRight">
       	  	<image class="moneyIcon2" src="../../static/moneyIcon.png" mode=""></image>
            <text class="commissionTitle">可得商品佣金: </text>
            <text class="commission">￥{{goodsData.commission}}元</text>
       	  </view>
          <view class="argumentViewList">
          	 <text class="title">产品参数</text>
             <text class="text">{{goodsData.parameter}}</text>
             <image class="selectMove" src="../../static/detailsSelect.png" mode=""></image>
          </view>
          <view class="argumentViewList"  @tap="getGoodsType('type')">
          	<text class="title">商品规格</text>
          	<text class="text">{{goodsData.spec}}</text>
          	<image class="selectMove" src="../../static/detailsSelect.png" mode=""></image>
          </view>
          <view class="argumentViewList">
            <view class="describe">
                <text class="title">宝贝描述:</text>
                <text class="text">{{goodsData.describe}}</text>
          	</view>
            <view class="describe">
                <text class="title">卖家服务:</text>
                <text class="text">{{goodsData.serve}}</text>
            </view>
            <view class="describe">
            		<text class="title">物流服务:</text>
            		<text class="text">{{goodsData.expressServe}}</text>
            </view>
          </view>
       </view>
       <view class="babyDetails">
          <view class="babyDetailsTitle" @tap="unfoldDetails">
          	 <text>宝贝详情</text>
             <image src="../../static/arrowsBottom.png" mode=""></image>
          </view>
          <view v-show="unfoldDetailsShow" class="babyDetailsImgView" v-for="(item,index) in goodsData.particulars" :key='index'>
              <image class="babyDetailsImg" :src="item" mode=""></image>
          </view>
       </view>
       <view class="HotGoods">
       	  <view class="HotGoodsTitle">
            <view class="HotGoodsCenter">
              <text class="line">-</text>
              <text class="text">推荐商品</text>
              <text class="line">-</text>
       	  	</view>
            <text class="inABatch" @tap="inABatch">换一批</text>
          </view>
          <view class="hotGoodsList">
          	<view class="hotGoodsListItem" v-for="(item,index) in recommendListData" :key='index'>
          		<image class="recommendImg" :src="item.imgUrl" mode=""></image>
              <view class="hotGoodsListItemName">
                  <text class="discounts">{{item.discounts}}</text>
                  <text class="hotName">{{item.goodsName}}</text>
              </view>
              <view class="goodsIntro">
                  <text class="discountsIntro">佣金:{{item.discountsIntro}}</text>
                  <text class="hotsales">
                    销量:{{item.sales}}
                  </text>
              </view>
              <view class="goodsPrice">
                  <text class="goodsPriceTitle">优惠:</text>
                  <text class="goodsPriceIcon">￥</text>
                  <text class="goodsPriceText">{{item.price}}</text>
                  <text class="goodsOriginalPrice">￥{{item.originalPrice}}</text>
              </view>
          	</view>
          </view>
       </view>
     </view>
       <view class="mask" v-show="showMask" @tap="hideMask"></view>
       <view class="popup popup-bottom" v-show="showDetailsState">
         <view class="goodsPopupTop">
             <image class="goodsPopupTopImg" :src="popupData.imgUrl" mode=""></image>
             <view class="goodsPopupTopText">
                <text class="popupPrice">￥{{popupData.price}}</text>
                <text class="popupStock">库存{{popupData.stock}}件</text>
                <text class="popupStock" v-show="ifSelectType">请选择大小</text>
             </view>
         </view>
         <view class="sizeView">
          <text class="sizeTitle">大小</text>
          <view class="sizeItem">
             <view v-for="(item,index) in goodsData.spec" :key='index'  :class="item.checked===0?'sizeItemBtn active':'sizeItemBtn'" @tap="getPopupType(item)">
              {{item.size}}
             </view>
          </view>
         </view>
         <view class="buyNum">
          <text class="buyNumTitle">购买数量</text>
          <view  class='buyNumInput'>
            <number-box :min="1" :disabled="true" :max="currentStock" :value='buyNum' v-on:update="numberUpdate"></number-box>
          </view>
         </view>
         <view class="popupBtn">
            <view class="addCartBtn"  @tap="getGoodsType('cartPopup')">
              加入购物车
            </view>
            <view class="buyBtn"  @tap="getGoodsType('buyPopup')">
              立即购买
            </view>
         </view>
       </view>
     <view class="detailsBase">
        <view class="detailsBaseCart" @tap="getCart">
        	<image src="../../static/cartRight.png" mode=""></image>
          <text class="cartGoodsNum">{{goodsData.cartGoodsNum}}</text>
          <text>购物车</text>
        </view>
        <view class="detailsBaseCollect">
        	<image v-if="goodsData.collectShopShow"  @tap="collectShop(1)"  src="../../static/collectChecked.png" mode=""></image>
          <image v-else @tap="collectShop(2)" src="../../static/collect.png" mode=""></image>
        	<text>{{shopCollectText}}</text>
        </view>
        <view class="addCartBtn"  @tap="getGoodsType('cart')">
        	加入购物车
        </view>
        <view class="buyBtn"  @tap="getGoodsType('buy')">
        	立即购买
        </view>
     </view>
     <!-- #ifdef APP-PLUS -->
     	<share-model :maskShow='maskShow' :popupShow='popupShow' :shareData='shareData' :shareType='shareType'> </share-model>
     <!-- #endif -->
	</view>
</template>

<script>
  import shareModel from '../../components/shareModel.vue'
  import numberBox from '../../components/number-box.vue'
	export default {
    components:{
      numberBox,
      shareModel
    },
		data() {
			return {
        // shareData:{
          maskShow:false,
          popupShow:false,
          shareData:{
            title:'商品详情',
            path:'baidu.com',
            href:'baidu.com',
            image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
            shareText:"商品详情shareText",
            imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"
          },
          shareType:0,
        // },
        buyNum:2,
        currentStock:9,
        popupData:{
           imgUrl:'../../static/detalisImg.png',
           price:'99',
           stock:'999',
           num:'1'
        },
        ifSelectType:true,
        showMask:false,
        showDetailsState:false,
        imgUrls: [
        	"../../static/detalisImg.png",
        	"../../static/detalisImg.png",
        	"../../static/detalisImg.png"
        ],
        selectType:[],
        unfoldDetailsShow:true,
        goodsCollectText:'收藏',
        shopCollectText:'收藏',
        goodsData:{
          cartGoodsNum:'2',
          collectShopShow:false,
          goodsCollectShow:false,
          name:'进口葡萄籽精华胶囊时尚',
          price:'899.0',
          originalCost:'999',
          coupon:'100',
          commission:'36.12',
          express:"0.00",
          sales:'521',
          site:'河南郑州',
          stock:"9999",
          parameter:"",
          spec:[
            {
              size:'300mg/瓶',
              imgUrl:'../../static/goodsDetails.png',
              color:'',
              price:'999.0',
              stock:"99",
              checked:1,
              id:'1'
            },
            {
            	size:'300mg/瓶',
            	imgUrl:'../../static/goodsDetails.png',
            	color:'',
              price:'999.0',
              stock:"99",
              checked:1,
              id:'2'
            }
          ],
          describe:"4.7高",
          serve:'4.7高',
          expressServe:'4.7高',
          particulars:[
            '../../static/goodsDetails.png',
            '../../static/goodsDetails.png',
            '../../static/goodsDetails.png',
          ]
        },
        recommendListData:[
        	{
        		id:1,
        		goodsName:'新西兰原装美容养颜葡萄...',
        		imgUrl:'../../../static/tuijian.png',
        		discounts:'佣金',
        		discountsIntro:'63.21',
        		sales:'1234',
        		price:'99.9',
        		originalPrice:'168.9',
        		hrefUrl:''
        	},
        	{
        		id:2,
        		goodsName:'新西兰原装美容养颜葡萄...',
        		imgUrl:'../../../static/tuijian.png',
        		discounts:'佣金',
        		discountsIntro:'63.21',
        		sales:'1234',
        		price:'99.9',
        		originalPrice:'168.9',
        		hrefUrl:''
        	},
        	
        ],
        toastText:"请选择商品大小"
			}
		},
    onShareAppMessage() {
    	return {
    		title: this.shareData.shareText ? this.shareData.shareText : "欢迎体验健康联盟",
    		path: '/pages/healthyMall/goodsDetails',
    	}
    },
		methods: {
      // 分享
      shareGoods(){
        console.log('点击分享')
        this.maskShow = true
        this.popupShow = true
      },
      collectGoods(status){
        if(status===1){
          console.log('点击收藏')
          this.goodsData.goodsCollectShow = false
          this.goodsCollectText = '收藏'
        }else{
          console.log('点击取消收藏')
          this.goodsData.goodsCollectShow = true
          this.goodsCollectText = '已收藏'
        }
      },
      collectShop(status){
        if(status===1){
        	console.log('点击收藏')
        	this.goodsData.collectShopShow = false
        	this.shopCollectText = '收藏'
        }else{
        	console.log('点击取消收藏')
        	this.goodsData.collectShopShow = true
        	this.shopCollectText = '已收藏'
        }
      },
      unfoldDetails(){
        console.log('展开宝贝详情')
        if(this.unfoldDetailsShow){
          this.unfoldDetailsShow = false
        }else{
          this.unfoldDetailsShow = true
        }
      },
      getCart(){
        uni.navigateTo({
        	url:"/pages/healthyMall/shoppingCart"
        })
      },
      getGoodsType(status){
        if(status==='type'){
          console.log('选择商品规格')
          this.showDetailsState = true
          this.showMask = true
        }else if(status==='cart'){
          console.log('点击加入购物车')
          if(this.selectType.length===0){
            this.showDetailsState = true
            this.showMask = true
          }else{
            console.log('提示加入购物车')
          }
        }else if(status==='buy'){
          console.log('点击购买')
          if(this.selectType.length===0){
          	this.showDetailsState = true
            this.showMask = true
          }else{
            // 跳转到订单详情页面
            uni.navigateTo({
            	url:'/pages/healthyMall/settleAccount'
            })
          }
        }else if(status==='buyPopup'){
          console.log('在弹框中点击购买')
          if(this.selectType.length===0){
            this.toastTap()
          }else{
            // 购买请求接口成功后跳转页面
            uni.navigateTo({
            	url:'/pages/healthyMall/settleAccount'
            })
          }
        }else{
          if(this.selectType.length===0){
          	this.toastTap()
          }else{
            // 请求加入购物车接口成功后给提示
            this.toastText='加入购物车成功！'
            this.toastTap()
          }
          console.log('在弹框中点击购物车')
        }
      },
      hideMask(){
        console.log('遮罩层显示隐藏')
        this.showMask = false
        this.showDetailsState = false
      },
      numberUpdate(value){
        console.log(value)
        this.buyNum = value
      },
      toastTap: function () {
      	uni.showToast({
      		title: this.toastText
      	})
      },
      inABatch(){
        console.log('点击换一批推荐商品')
      },
      getPopupType(item){
        console.log(item)
        if(item.checked===0){
          console.log('已经为选中')
        }else{
          console.log('设置为选中')
          let h = this.goodsData.spec.length
          let id = item.id
          for(let i = 0;i<h;i++){
            if(id === this.goodsData.spec[i].id){
              this.goodsData.spec[i].checked=0
              this.selectType=[]
              this.selectType.push(this.goodsData.spec[i].id)
            }else{
              this.goodsData.spec[i].checked=1
            }
          }
        }
      }
		}
	}
</script>

<style>
  /* #ifdef APP-PLUS	*/
  .share{
      position: absolute;
      right: 10upx;
      top:40upx;
      width:58upx;
      height:59upx;
  	}
  /* #endif */
  .swiper{
    width: 100%;
    height: 631upx;
    position: relative;
  }
  .swiperItemImg{
    width: 100%;
    height: 100%;
  }
  .goodsIntroduce{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 108upx;
  }
  .goodsName{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #fff;
    height: 84upx;
  }
  .goodsNameText{
    font-size:32upx;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:80upx;
    margin-left: 20upx;
  }
  .collect{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .collect image{
      width: 30upx;
      height: 28upx;
  }
  .collect text{
    font-size:24upx;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:80upx;
    margin-right: 16upx;
    margin-left: 9upx;
  }
  .priceView{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    vertical-align: bottom;
    background: #fff;
    height: 70upx;
  }
  .moneyIcon{
    font-size:24upx;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin-left: 20upx;
    line-height: 50upx;
  }
  .price{
    font-size:38upx;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height: 40upx;
  }
  .originalCost{
    font-size:26upx;
    font-weight:500;
    text-decoration:line-through;
    color:rgba(211,209,209,1);
    background: #fff;
    line-height: 45upx;
  }
  /* 商品优惠卷和商品快递地址的信息 */
  .infoView{
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .coupon{
    width:146upx;
    height:47upx;
    background:rgba(240,242,249,1);
    border-radius:6upx;
    font-size:26upx;
    font-weight:bold;
    color:rgba(137,153,229,1);
    line-height:47upx;
    text-align: center;
    margin-left: 20upx;
  }
  .goodsInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .goodsInfoStyle{
    font-size:22upx;
    font-weight:400;
    color:rgba(139,141,154,1);
    line-height:70upx;
  }
  .express{
    margin-left: 20upx;
  }
  .site{
    margin-right: 28upx;
  }
  /* 商品规格参数 */
  .argumentView{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 8upx;
    background: #fff;
  }
  .argumentViewList{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 696upx;
    padding-left: 26upx;
    padding-right: 29upx;
    border-top:2upx solid  #F1F1F1;
    align-items: center;
    height: 82upx;
  }
  .argumentViewListRight{
    justify-content: flex-start;
  }
  .moneyIcon2{
    width: 36upx;
    height: 36upx;
    margin-right: 9upx;
  }
  .commissionTitle{
    font-size:26upx;
    font-weight:400;
    color:rgba(117,118,122,1);
    line-height:70upx;
  }
  .commission{
    font-size:30upx;
    font-weight:500;
    color:rgba(245,70,70,1);
    line-height:70upx;
    margin-left: 20upx;
  }
  .argumentViewList .title{
    font-size:26upx;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:70upx;
  }
  .argumentViewList .text{
  	font-size:26upx;
    font-weight:400;
    color:rgba(204,199,199,1);
    line-height:70upx;
  }
  .argumentViewList .selectMove{
  	width: 13upx;
    height: 23upx;
  }
  .argumentViewList .describe .title{
    font-size:22upx;
    font-weight:400;
    color:rgba(117,118,122,1);
    line-height:69upx;
  }
  .argumentViewList .describe .text{
  	font-size:22upx;
    font-weight:500;
    color:rgba(237,88,86,1);
    line-height:69upx;
  }
  /* 宝贝详情 */
  .babyDetails{
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .babyDetailsTitle{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 82upx;
    align-items: center;
    justify-content: center;
  }
  .babyDetailsTitle text{
    font-size:28upx;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:70upx;
    margin-right: 13upx;
  }
  .babyDetailsTitle image{
    width: 14upx;
    height: 16upx;
  }
  .babyDetailsImgView{
    height: 733upx;
  }
  .babyDetails .babyDetailsImg{
    width: 100%;
    height: 733upx;
  }
  /* 底部样式 */
  .detailsBase{
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: space-between;
     align-items: center;
     height: 98upx;
     position: fixed;
     bottom: 0;
     left: 0;
     background: #fff;
  }
  .detailsBaseCart{
    width: 109upx;
    height: 98upx;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .detailsBaseCart image{
    width: 36upx;
    height: 36upx;
    margin-top: 16upx;
  }
  .detailsBaseCart .cartGoodsNum{
    position: absolute;
    top:14upx;
    left: 65upx;
    color: #fff;
    background-color: #FC5B35;
    display: inline-block;
    border-radius:50%;
    width: 25upx;
    height: 25upx;
    font-size: 18upx;
    line-height: 23upx;
    text-align: center;
  }
  .detailsBaseCart text{
    font-size:20upx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .detailsBaseCollect{
    height: 98upx;
    width: 116upx;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left:1upx solid #EDEDED;
  }
  .detailsBaseCollect image{
    width: 41upx;
    height: 39upx;
    margin-top:16upx;
  }
  .detailsBaseCollect text{
    font-size:20upx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .addCartBtn{
    width:262upx;
    height:98upx;
    background:rgba(242,129,1,1);
    text-align: center;
    line-height: 98upx;
    font-size:30upx;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .buyBtn{
    width:262upx;
    height:98upx;
    background:rgba(201,21,30,1);
    line-height: 98upx;
    text-align: center;
    font-size:30upx;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  /* 推荐商品 */
  .HotGoods{
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 8upx;
  }
    .HotGoodsTitle{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 90upx;
  }
  .HotGoodsCenter{
    margin-right: 171upx;
  }
  .line{
    color: #333;
  }
  .HotGoodsCenter .text{
      font-size:36upx;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:70upx;
      margin: 0 15upx;
  }
  .inABatch{
    font-size:26upx;
    font-weight:400;
    color:rgba(181,181,181,1);
    line-height:70upx;
    margin-right: 29upx;
  }
  .hotGoodsList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  .hotGoodsListItem{
    display: flex;
    flex-direction: column;
    width:350upx;
    height:509upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 3upx 18upx 3upx rgba(0, 0, 0, 0.08);
    border-radius:21upx;
    margin-bottom: 14upx;
  }
  .hotGoodsListItem:nth-child(even){
    margin-left: 14upx;
  }
  .recommendImg{
  	height: 350upx;
  	width: 350upx;
    border-radius:21px 21px 0px 0px;
  }
  .hotGoodsListItemName{
  	display: flex;
  	align-items: center;
    width:100%;
  	height: 31upx;
    margin-top: 10upx;
  }
  .goodsIntro{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .discounts{
  	display: inline-block;
    width:38upx;
    height:23upx;
  	border:1upx solid rgba(255,46,46,1);
  	border-radius:6upx;
  	color: #FF3332;
  	font-size: 18upx;
  	line-height: 23upx;
  	text-align: center;
    font-weight: 400;
    margin:0 9upx;
  }
  .hotGoodsListItem .hotName{
  	font-size:24upx;
  	font-weight:400;
  	color:rgba(51,51,51,1);
  	line-height:36upx;
  }
  .goodsIntro{
  	display: flex;
  	justify-content: space-between;
  	height: 34upx;
  	align-items: center;
  	margin-top: 12upx;
    margin-bottom: 15upx;
  }
  .discountsIntro{
  	display: inline-block;
  	background:rgba(255,239,239,1);
  	border-radius:4upx;
  	color: #EF4F3A;
  	font-weight:500;
  	font-size: 22upx;
  	text-align: center;
  	padding: 0 5upx;
    margin-left: 20upx;
  }
  .hotsales{
  	font-size:20upx;
  	font-weight:500;
  	color:rgba(193,193,195,1);
  	line-height:36upx;
    margin-right: 15upx;
  }
  .goodsPrice{
  	display: flex;
  	flex-direction: row;
  	justify-content: flex-start;
  	align-items: center;
  	height: 57upx;
  }
  .goodsPriceTitle{
  	font-weight:500;
  	color:rgba(102,102,102,1);
  	line-height:36upx;
  	font-size: 24upx;
    margin-left: 9upx;
  }
  .goodsPriceIcon{
    font-size:24upx;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
  .goodsPriceText{
  	font-size: 38upx;;
  	font-weight: bold;
  	color:rgba(51,51,51,1);
  	line-height: 70upx;
  }
  .goodsOriginalPrice{
  	font-weight:500;
  	text-decoration:line-through;
  	color:rgba(211,209,209,1);
  	line-height:70upx;
  	font-size: 26upx;
  }
  /* 弹出框 */
  	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.popup {
		position: fixed;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
    bottom: 0;
    width: 100%;
    height: 725upx;
    text-align: center;
	}
  .goodsPopupTop{
    padding-left: 401upx;
    height: 235upx;
  }
  .goodsPopupTopImg{
    position: absolute;
    top:-94upx;
    left:29upx;
    width:328upx;
    height:331upx;
    border-radius:10upx;
    box-shadow:0px 2px 34px 9px rgba(189,231,235,0.45);
  }
  .goodsPopupTopText{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .popupPrice{
    font-size:36upx;
    font-weight:bold;
    color:rgba(228,5,1,1);
    line-height: 70upx;
    margin: 8upx 0;
  }
  .popupStock{
    font-size:26upx;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-bottom: 8upx;
  }
  .sizeView{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60upx;
    align-items: flex-start;
  }
  .sizeTitle{
    font-size:38upx;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-left: 34upx;
    margin-bottom: 27upx;
  }
  .sizeItem{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 34upx;
    margin-bottom: 50upx;
  }
  .sizeItem view.active{
    border:2upx solid rgba(137,153,229,1);
  }
  .sizeItemBtn{
    width:168upx;
    height:59upx;
    border:1upx solid rgba(153,153,153,1);
    border-radius:10upx;
    font-size:26upx;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:59upx;
    margin-right: 57upx;
  }
  .buyNum{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 66upx;
  }
  .buyNumTitle{
    font-size:38upx;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:70upx;
    margin-left: 35upx;
  }
  .buyNumInput{
    margin-right: 70upx;
  }
  .popupBtn{
    display: flex;
    flex-direction: row;
  }
  .popupBtn .addCartBtn{
    width: 50%;
    height: 97upx;
  }
  .popupBtn .buyBtn{
    width: 50%;
    height: 97upx;
  }
</style>
