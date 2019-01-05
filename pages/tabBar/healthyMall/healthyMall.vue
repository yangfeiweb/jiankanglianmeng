<template>
	<view class="healthyMall">
    <view class="header">
      <view class="search">
        <view class="uni-icon uni-icon-search"></view>
        <text class="searchInput"  @click="searchIdenx">点击搜索商品或者店铺</text>
      </view>
      <image class="cart" src="../../../static/cart.png" mode="" @click="cart"></image>
    </view>
    <view class="swiperContent">
      <scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
        <block v-for="(tab,index) in tabsList" :key="tab.id">
          <view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @click="swichNav">{{tab.name}}</view>
        </block>
      </scroll-view>
      <view class="swiperContentDetails">
          <block v-if='goodsListShow'>
            <view class="swiper">
              <swiper  previous-margin='30rpx' next-margin='30rpx' :current='1' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @change="getSwiper">
                <swiper-item v-for="(item,index) in imgUrlList" :key='index' :class="currents===index?'current swiperView':'noCurrent swiperView'">
                  <view class="swiper-item">
                    <image :src="item.imgUrl" mode=""></image>
                  </view>
                </swiper-item>
              </swiper>
            </view>
            <view class="actionBlock">
              <view class="actionBlockItem" v-for="(item,index) in actionList" :key='index' @click='getAction(item)'>
                  <image class="actionBlockImg" :src="item.imgUrl" mode=""></image>
                  <text class="actionBlockText">{{item.name}}</text>
              </view>
            </view>
            <view class="borderBlock">
            </view>
            <view class="newsBlock">
              <image class="newIcon" src="../../../static/zixun.png" mode=""></image>
              <text class="newsBlockText">{{newText.text}}</text>
              <image class="newImg" :src="newText.imgUrl" mode=""></image>
            </view>
            <view class="timeLimit">
              <view class="timeLimitHeader">
                <view class="timeLimitHeaderLeft">
                  <text class="timeBorder"></text>
                  <text class="textTitle">限时高佣</text>
                  <text class="timeText">{{time.hour}}</text><text class="timeFen">:</text> <text class="timeText">{{time.minute}}</text><text class="timeFen">:</text> <text class="timeText">{{time.second}}</text>
                </view>
                <view class="timeLimitHeaderRight" @tap="getTimeLimit">
                  <text>更多</text>
                  <image src="../../../static/move.png" mode=""></image>
                </view>
              </view>
              <view class="timeLimitList">
                <view class="timeLimitListItem" v-for="(item,index) in timeLimitData.list" :key='index' @tap="getDetails()">
                  <image :src="item.imgUrl" mode=""></image>
                  <text class="brokerage">￥{{item.brokerage}}</text>
                  <view class="priceBlock">
                    <text class="price">￥{{item.price}}</text>
                    <text class="originalPrice">￥{{item.originalPrice}}</text>
                  </view>
                </view>
              </view>
            </view>
            <view class="hotShopp">
              <view class="timeLimitHeader">
                <view class="timeLimitHeaderLeft">
                  <text class="timeBorder"></text>
                  <text class="textTitle">热卖商城</text>
                </view>
                <!-- <view class="timeLimitHeaderRight">
                  <text>更多</text>
                  <image src="../../../static/move.png" mode=""></image>
                </view> -->
              </view>
              <view class="hotGoodsList">
                <view class="hotGoodsListItem" v-for="item in hotGoodsData" :data-current="item.id" :key='item.id' @tap="getHotShop">
                  <image :src="item.imgUrl" mode=""></image>
                </view>
              </view>
            </view>
            <view class="recommend">
              <view class="timeLimitHeader">
                  <view class="timeLimitHeaderLeft">
                    <text class="timeBorder"></text>
                    <text class="textTitle">热卖推荐</text>
                  </view>
                  <view class="timeLimitHeaderRight">
                    <text>综合推荐</text>
                    <image class="down" src="../../../static/down.png" mode=""></image>
                  </view>
                </view>
                <view class="recommendList">
                  <view class="recommendListItem" v-for="(item,index) in recommendListData" :key='index' @tap="getDetails">
                    <image class="recommendImg" :src="item.imgUrl" mode=""></image>
                    <view class="recommendListRight">
                       <view class="recommendListRightHeader">
                          <text class="discounts">{{item.discounts}}</text>
                          <text class="goodsName">{{item.goodsName}}</text>
                       </view>
                       <view class="goodsIntro">
                           <text class="discountsIntro">佣金:{{item.discountsIntro}}</text>
                           <text class="sales">
                             销量:{{item.sales}}
                           </text>
                       </view>
                       <view class="goodsPrice">
                          <text class="goodsPriceTitle">优惠:</text>
                          <text class="goodsPriceText">￥{{item.price}}</text>
                          <text class="goodsOriginalPrice">￥{{item.originalPrice}}</text>
                          <button class="lookBtn">立即查看</button>
                       </view>
                    </view>
                  </view>
                </view>
          
          </view>
        </block>
        <block v-else>
           <view class="goodslist">
             <view class="goodslistHeader">
                <view class="tabItems" @tap="synthesis">
                  <text :class="sortord==='综合排序'?'active':''">综合排序</text>
                  
                </view>
                <view class="tabItems" @tap='sales'>
                  <text :class="sortord==='销量'?'active':''">销量</text>
                  <view class="arrowsView">
                  <text :class="(salesLitre===false&&sortord==='销量')?'arrowsTop active':'arrowsTop'"></text>
                  <text :class="(salesLitre===true&&sortord==='销量')?'arrowsBottom active':'arrowsBottom'"></text>
                  </view>
                </view>
                <view class="tabItems" @tap='price'>
                  <text :class="sortord==='价格'?'active':''">价格</text>
                  <view class="arrowsView">
                    <text :class="(priceLitre===false&&sortord==='价格')?'arrowsTop active':'arrowsTop'"></text>
                    <text :class="(priceLitre===true&&sortord==='价格')?'arrowsBottom active':'arrowsBottom'"></text>
                  </view>
                </view>
                <view class="tabItems" @tap='commission'>
                  <text :class="sortord==='佣金'?'active':''">佣金</text>
                  <view class="arrowsView">
                   <text :class="(commissionLitre===false&&sortord==='佣金')?'arrowsTop active':'arrowsTop'"></text>
                   <text :class="(commissionLitre===true&&sortord==='佣金')?'arrowsBottom active':'arrowsBottom'"></text>
                  </view>
                </view>
             </view>
             <view class="goodsListItems">
                <view class="recommendList">
                  <view class="recommendListItem" v-for="(item,index) in recommendListData" :key='index' @tap="getDetails">
                    <image class="recommendImg" :src="item.imgUrl" mode=""></image>
                    <view class="recommendListRight">
                      <view class="recommendListRightHeader">
                          <text class="discounts">{{item.discounts}}</text>
                          <text class="goodsName">{{item.goodsName}}</text>
                      </view>
                      <view class="goodsIntro">
                          <text class="discountsIntro">佣金:{{item.discountsIntro}}</text>
                          <text class="sales">
                            销量:{{item.sales}}
                          </text>
                      </view>
                      <view class="goodsPrice">
                          <text class="goodsPriceTitle">优惠:</text>
                          <text class="goodsPriceText">￥{{item.price}}</text>
                          <text class="goodsOriginalPrice">￥{{item.originalPrice}}</text>
                          <button class="lookBtn">立即查看</button>
                      </view>
                    </view>
                  </view>
                </view>
                    
             </view>
           </view>
        </block>
      </view>
    </view>
	</view>
</template>
<script>
  import uniNavBar from '../../../components/uni-nav-bar.vue'
  import uniIcon from '../../../components/uni-icon.vue'
	export default {
		 components:{
        uniNavBar,
        uniIcon
     },
     data() {
			return {
        autoPlay:false,
        indicator:false,
        currents:1,
        interval:3000,
        duration:500,
        scrollLeft: 0,
        isClickChange: false,
        currentTab: 0,
        goodsListShow:true,
        sortord:'综合排序',
        salesLitre:false,
        priceLitre:false,
        commissionLitre:false,
        tabsList:[
          {
            name: '精选',
            id: 'jing1'
          }, {
            name: '有机食品',
            id: 'you2'
          }, {
            name: '保健养生',
            id: 'bao3'
          }, {
            name: '母婴用品',
            id: 'mu4'
          }, {
            name: '美妆护肤',
            id: 'mei5'
          }, {
            name: '时尚女装',
            id: 'shi6'
          }, {
            name: '男装',
            id: 'nan7'
          }, {
            name: '时尚鞋包',
            id: 'shi8'
          }, {
            name: '家居用品',
            id: 'jia9'
          },
        ],
        imgUrlList:[
          {
            id:1,
            imgUrl:'../../../static/swiper.png',
            hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/swiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/swiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/swiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/swiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/swiper.png',
          	hrefUrl:'baidu.com'
          },
        ],
        actionList:[
          {
            imgUrl:'../../../static/yongjin.png',
            id:'1',
            name:'佣金好礼',
            hrefUrl:'/pages/healthyMall/brokerage',
          },
          {
          	imgUrl:'../../../static/youhui.png',
          	id:'2',
          	name:'优惠礼包',
          	hrefUrl:'/pages/healthyMall/discounts',
          },
          {
          	imgUrl:'../../../static/shangjia_icon.png',
          	id:'3',
          	name:'商家入驻',
          	hrefUrl:'/pages/healthyMall/shopEnter',
          },
          {
          	imgUrl:'../../../static/kefu_icon.png',
          	id:'4',
          	name:'联系客服',
          	hrefUrl:'/pages/healthyMall/service',
          }
        ],
        newText:{
          text:'一降再降，喜迎国庆黄金周，美妆达人惊喜推荐，进口美，更有优惠好...',
          url:'',
          imgUrl:'../../../static/swiper.png',
        },
        time:{
          hour:'',
          minute:'',
          second:"",
        },
        timeLimitData:
          {
            time:'11:20:48',
            list:[
              {
                imgUrl:'../../../static/time_img.png',
                id:1,
                brokerage:"28.65",
                price:'96',
                originalPrice:'106', 
                hrefUrl:'',
              },
              {
              	imgUrl:'../../../static/time_img.png',
              	id:2,
              	brokerage:"28.65",
              	price:'96',
              	hrefUrl:'',
                originalPrice:'106', 

              },
              {
              	imgUrl:'../../../static/time_img.png',
              	id:3,
              	brokerage:"28.65",
              	price:'96',
              	hrefUrl:'',
                originalPrice:'106', 

              },
              {
              	imgUrl:'../../../static/time_img.png',
              	id:4,
              	brokerage:"28.65",
              	price:'96',
              	hrefUrl:'',
                originalPrice:'106', 

              }
            ]
          },
        hotGoodsData:[
            {
              imgUrl:'../../../static/organicFood.png',
              id:'1',
              hrefUrl:''
            },
            {
            	imgUrl:'../../../static/babyCare.png',
            	id:'3',
            	hrefUrl:''
            },
            {
            	imgUrl:'../../../static/cosmetics.png',
            	id:'4',
            	hrefUrl:''
            },
            {
            	imgUrl:'../../../static/healthcare.png',
            	id:'2',
            	hrefUrl:''
            },
          ],
          recommendListData:[
            {
              id:1,
              goodsName:'澳洲进口保健钙片儿童老...',
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
            	goodsName:'澳洲进口保健钙片儿童老...',
            	imgUrl:'../../../static/tuijian.png',
            	discounts:'佣金',
            	discountsIntro:'63.21',
            	sales:'1234',
            	price:'99.9',
            	originalPrice:'168.9',
            	hrefUrl:''
            },
            
          ]
      }
		},
    onLoad:function(){
      let t = this.timeLimitData.time.split(':')
      this.time.hour = t[0]
      this.time.minute = t[1]
      this.time.second = t[2]
      console.log(this.time)
    },
    onUnload:function(){
        this.scrollLeft = 0,
        this.isClickChange = false,
        this.currentTab = 0;
    },
		methods: {
      // 点击限时高佣的更多
      getTimeLimit(){
        uni.navigateTo({
        	url:'/pages/healthyMall/goodsList'
        })
      },
      // 四大模块
      getAction(item){
        console.log(item)
        uni.navigateTo({
        	url:item.hrefUrl
        })
      },
      getHotShop(e){
         console.log('getHotShop', e.currentTarget.dataset.current)
         
      },
      // 进入产品详情
      getDetails:function(e){
        console.log(e)
        console.log('进入产品详情页')
        uni.navigateTo({
        url: "/pages/healthyMall/goodsDetails"
        })
      },
      // 点击搜索
      searchIdenx:function(){
         console.log('点击搜索')
         uni.navigateTo({
         	url: "/pages/healthyMall/search"
         })
      },
      // 根据排序方式请求借口
      getListData:function(){
        console.log('请求接口')
      },
      // 点击综合拍讯
      synthesis:function(){
         console.log('综合排序')
         if(this.sortord !== '综合排序'){
            this.sortord = '综合排序'
            this.getListData()
          }
      },
      sales:function(){
        console.log('销量')
        this.sortord = '销量'
        if(!this.salesLitre){
          this.salesLitre = true
          console.log('销量的升序')
          this.getListData()
        }else{
          this.salesLitre = false
          console.log('销量的降序')
          this.getListData()
        }
      },
      price:function(){
        this.sortord = '价格'
        console.log('价格')
        if(!this.priceLitre){
          console.log('价钱的升序')
          this.priceLitre = true
          this.getListData()
        }else{
          console.log('价钱的降序')
          this.priceLitre = false
          this.getListData()
        }
      },
      commission:function(){
        this.sortord = '佣金'
        console.log('佣金')
        if(!this.commissionLitre){
        	console.log('佣金的升序')
        	this.commissionLitre = true
        	this.getListData()
        }else{
        	console.log('佣金的降序')
        	this.commissionLitre = false
        	this.getListData()
        }
      },
      cart:function(){
        console.log('点击购物车')
        uni.navigateTo({
        	url:"/pages/healthyMall/shoppingCart"
        })
      },
      getSwiper:function(e){
        console.log(e.detail.current)
        this.currents=e.detail.current
      },
      onPullDownRefresh() {
        console.log('onPullDownRefresh')
        setTimeout(function() {
          uni.stopPullDownRefresh()
          console.log('stopPullDownRefresh')
        }, 1000)
      },
      bindChange: async function (e) {
        let index = e.target.current;
        console.log('bingChange',index)
        if (this.isClickChange) {
          this.currentTab = index;
          this.isClickChange = false;
          return;
        }
        let tabBar = await this.getWidth("tab-bar"),
          tabBarScrollLeft = tabBar.scrollLeft;

        let width = 0;

        for (let i = 0; i < index; i++) {
          let result = await this.getWidth(this.tabs[i].id);
          width += result.width;
        }

        let winWidth = uni.getSystemInfoSync().windowWidth,
          nowElement = await this.getWidth(this.tabs[index].id),
          nowWidth = nowElement.width;

        if (width + nowWidth - tabBarScrollLeft > winWidth) {
          this.scrollLeft = width + nowWidth - winWidth;
        }
        if (width < tabBarScrollLeft) {
          this.scrollLeft = width;
        }
        this.isClickChange = false;
        this.currentTab = index; //一旦访问data就会出问题
        console.log('bingChange',this.currentTab)
      },
      getWidth: function (id) { //得到元素的宽高
        return new Promise((res, rej) => {
          uni.createSelectorQuery().select("#" + id).fields({
            size: true,
            scrollOffset: true
          }, (data) => {
            if (id === 'tab-bar') {
              console.log("id=", id, "数据:", data)
            }
            res(data);
          }).exec();
        })
      },
      swichNav: async function (e) { //点击tab-bar
        if (this.currentTab === e.target.dataset.current) {
          return false;
        } else {
          let tabBar = await this.getWidth("tab-bar"),
           tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
          this.scrollLeft = tabBarScrollLeft;
          this.isClickChange = true;
          this.currentTab = e.target.dataset.current
          console.log('swichNav', e.target)
          console.log('swichNav',this.currentTab)
          if(this.currentTab === 0){
            this.goodsListShow = true
            // 首页
            console.log(this.goodsListShow)
          }else{
            this.goodsListShow = false
          }
        }
      },
    }
	}
</script>

<style>
  /* 轮播图 */
  .healthyMall{
    background: #fff;
  }
  /* #ifdef APP-PLUS	*/
  	.header{
  		padding-top:50upx;
  	}
  /* #endif */
 .swiper{
    background:linear-gradient(top,rgba(253,253,253,1),rgba(255,255,255,1));
  }
  .swiper-item {
		display: block;
		height: 278upx;
    width: 682upx;
		line-height: 278upx;
		text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19upx;
	}
  .swiper-item image{
    width: 100%;
    height: 100%;
    border-radius: 19upx;
  }
 .current{
 /*   margin-left: 27upx;
    margin-right: 27upx; */
  }
 .noCurrent{
   height: 238upx;

 }
.noCurrent image{
    height: 238upx;
  }
  .header{
    display: flex;
    flex-direction: row;
    /* margin-top: 60upx; */
    height: 71upx;
    align-items: flex-end;
    justify-content: center;
    /* background-color: #FFFFFF; */
    background:linear-gradient(bottom,rgba(253,253,253,1),rgba(255,255,255,1));

  }
		.search {
      width: 568upx;
      padding-left: 39upx;
      margin-left: 50upx;
      border: none;
      display: flex;
      flex-direction: row;
      background: rgba(242,242,242,1);
      border-radius: 18upx;
		}
    
     .searchInput {
      width: 568upx;
      height: 61upx;
      border: none;
      display: flex;
      text-align: center;
      line-height: 61upx;
		}
	
		.uni-icon-search {
			color: #999;
      margin-top: 8upx;
		}
    .cart{
      height:36upx;
      width: 36upx;
      margin: 10upx 40upx 17upx 15upx;
    }
    .swiperContent{
     /* overflow: hidden; */
      width:100%;
    }
    .swiper-tab {
        margin-top: 13upx;
        margin-bottom: 27upx;
    		width: 100%;
    		white-space: nowrap;
    		line-height: 80upx;
    		height: 80upx;
        padding-bottom: 5upx;
        background:rgba(255,255,255,1);
        box-shadow:1px 14px 29px rgba(0,0,0,0.11);
        opacity:0.67;
    	}
    .swiper-tab-list:last-child{
      margin-right: 40upx;
    }
    .swiper-tab-list:nth-child(1){
      margin-left: 40upx;
    }
    	.swiper-tab-list {
    		font-size: 32upx;
        height: 80upx;
        margin-right:36upx;
    		display: inline-block;
    		text-align: center;
    		color:#535252;
        }
    	.on{
        position: relative;
      }
      .on::before {
        position: absolute;
        bottom: 0upx;
        text-align: center;
        content: "";
        left:10%;
        width: 80%;
        height: 6upx;
        color: #535252;
        background: linear-gradient(268deg,rgba(47,144,219,1),rgba(18,194,233,1));
        border-radius: 3upx;
      }
  /*      .imgSwiper{
          height: 278upx;
          width:100%;
          background:linear-gradient(top,rgba(253,253,253,1),rgba(255,255,255,1));
        }
       .imgSwiper swiper{
          height: 278upx;
          width: 100%;
        }
        .swiperView{
          width: 638upx;
          height: 278upx;
        }
        .swiper-item{
          width: 638upx;
          height: 278upx;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19upx;
        }
          /* .current{
          margin-left: 27upx;
        margin-right: 27upx;
        } */
  /*     .noCurrent{
        height: 238upx;
       } */
        /* 功能模块 */
        .actionBlock{
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          height:175upx;
          width: 100%;
          background: #fff;
        }
        .actionBlockItem{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:25%;
          text-align: center;
        }
        .actionBlockImg{
          height: 44upx;
          width:49upx;
          margin-bottom: 20upx;
          vertical-align: middle;
          align-items: center;
        }
        .actionBlockText{
          font-size: 26upx;
          color: #545454;
          font-weight: 400;
        }
        .borderBlock{
          border-top: 2upx solid #F8F8F8;
          display: flex;
          margin: 0 24upx;
        }
        .newsBlock{
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 22upx;
          color: #333;
          padding: 0 38upx;
          height: 124upx;
          background: #FFFFFF;
          margin-bottom: 19upx;
        }
        .newIcon{
          height:71upx;
          width:70upx;
        }
        .newImg{
          height: 88upx;
          width:137upx;
          border-radius: 10upx;
        }
        .newsBlockText{
          margin-left: 37upx;
          margin-right: 43upx;
          line-height: 36upx;
          width: 387upx;
        }
        /* 限时高佣 */
        .timeLimit{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 387upx;
          background: #fff;
          flex-direction: column;
        }
        .timeLimitHeader{
          width: 100%;
          margin: 34upx 0upx 24upx 0upx;
          /* padding:0upx 26upx 0 45upx; */
          
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .timeBorder{
          display: inline-block;
          width:7upx;
          height:34upx;
          background:rgba(176,231,211,1);
          border-radius:4upx;
          margin-right: 12upx;
        }
        .timeLimitHeaderLeft{
          margin-left: 26upx;
          display: flex;
          align-items: center;
        }
        .textTitle{
          font-size: 34upx;
          color: #535252;
          font-weight: 500;
          margin-right: 16upx;
        }
        .timeText{
          font-size: 28upx;
          color: #fff;
          background: #3889FF;
          border-radius: 5upx;
          margin:0 6upx;
          display: inline-block;
          padding: 0upx 6upx;
        }
        .timeLimitHeaderRight{
          font-size: 26upx;
          color: #999;
          font-weight: 500;
          margin-right: 46upx;
        }
        .timeLimitHeaderRight image{
          height: 24upx;
          width:14upx;
          margin-left: 8upx;
        }
        .timeLimitList{
          display: flex;
          align-content: center;
          justify-content: center;
          width: 95%;
          padding: 0 2.5%;
        }
        .timeLimitListItem{
          width:25%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        .timeLimitListItem image{
          height: 162upx;
          width: 158upx;
          border-radius: 10upx;
          margin-bottom: 22upx;
          
        }
        .brokerage{
          color:#FF0000;
          font-size: 24upx;
          margin-bottom: 8upx;
          
        }
        .priceBlock{
          display: flex;
          flex-direction: row;
         align-items: center;
        }
        .price{
          color: #333;
          font-size: 26upx;
          font-weight: 500;
        }
        .originalPrice{
          color: #999999;
          font-size: 22upx;
          font-weight: 500;
          text-decoration:line-through;
        }
        /* 热卖商城 */
        .hotShopp{
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 739upx;
          background: #fff;
          margin-bottom: 19upx;
        }
        .hotGoodsList{
          display: flex;
          align-items: center;
          width: 95%;
          padding: 0 2.5%;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hotGoodsListItem{
          width: 50%;
          margin-bottom: 15upx;
          height: 299upx;
        }
        .hotGoodsListItem image{
          height: 299upx;
          width: 346upx;
          border-radius: 10upx;
        }
        /* 热卖推荐 */
        .recommend{
          display: flex;
          align-items: center;
          flex-direction: column;
          background: #fff;
          height: 719upx;
        }
        .down{
          height: 20upx;
          width:10upx;
        }
        .recommendList{
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 95%;
          padding: 0 2.5%;
          border-top: 2upx solid #F8F8F8;
        }
        .recommendListItem{
          height: 299upx;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-bottom: 3upx solid #F8F8F8;
        }
        .recommendImg{
          height: 243upx;
          width: 241upx;
          border-radius: 20upx;
          margin-right: 14upx;
        }
        .recommendListRight{
          display: flex;
          flex-direction: column;
          height: 243upx;
        }
        .recommendListRightHeader{
          display: flex;
          align-items: center;
          margin-top: 9upx;
          height: 31upx;
        }
        .discounts{
          display: inline-block;
          width:47upx;
          height:28upx;
          border:1upx solid rgba(251,130,67,1);
          border-radius:10upx;
          color: #FB8243;
          font-size: 20upx;
          line-height: 25upx;
          text-align: center;
        }
        .goodsName{
          font-size:32upx;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:36upx;
        }
        .goodsIntro{
          margin-bottom: 86upx;
          display: flex;
          justify-content: space-between;
          height: 41upx;
          align-items: center;
          margin-top: 20upx;
        }
        .discountsIntro{
          display: inline-block;
          background:rgba(251,133,71,0.3);
          border-radius:9upx;
          color: #EF4F3A;
          font-weight:500;
          font-size: 24upx;
          text-align: center;
          padding: 0 5upx;
        }
        .sales{
          font-size:26upx;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:36upx;
        }
        .goodsPrice{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          height: 57upx;
        }
        .goodsPriceTitle{
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:27upx;
          font-size: 24upx;
        }
        .goodsPriceText{
          font-size: 40upx;;
          font-weight: 500;
          color: #e40000;
          line-height: 36upx;
        }
        .goodsOriginalPrice{
          font-weight:400;
          text-decoration:line-through;
          color:rgba(153,153,153,1);
          line-height:27upx;
          font-size: 24upx;
        }
        .lookBtn{
          width:133upx;
          height:57upx;
          line-height: 57upx;
          background:rgba(228,0,0,1);
          border-radius:29upx;
          color:#fff;
          font-size: 26upx;
          padding: 0;
        }
        /* 商品列表 */
        .swiperContentDetails{
          background: #fff;
        }
        .goodslist{
          display: flex;
          flex-direction: column;
          width:100%;
          background: #fff;
        }
        .goodslistHeader{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          width: 674upx;
          margin: 0 38upx;
          height: 80upx;
        }
        .tabItems{
          width: 25%;
          display: flex;
          align-items: center;
          flex-direction: row;
          font-size: 28upx;
          color: #666;
        }
        .tabItems text.active{
          color: #E40000;
        }
        .arrowsView{
          display: flex;
          flex-direction: column;
          width:9upx;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin-left: 10upx;
        }
        .arrowsTop{
         display:inline-block;
          width:0;
          height:0;
          border-width:0 9upx 6upx;
          border-style:solid;
          border-color:transparent transparent #666666;
         /* position:absolute;
          top:0px;
          left:0px; */
        }
        .arrowsBottom{
          margin-top: 5upx;
        	display:inline-block;
        	width:0;
        	height:0;
        	border-width:6upx 9upx 0upx;
        	border-style:solid;
        	border-color:#666666 transparent transparent;
        /* position:absolute;
        	top:0px;
        	left:0px; */
        }
        .arrowsView text:first-child.active{
          border-color: transparent transparent  #E40000;
        }
        .arrowsView text:last-child.active{
        	border-color: #E40000 transparent transparent;
        }
        .goodsListItems{
          display: flex;
          flex-direction: column;
        }
</style>
