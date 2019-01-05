<template>
	<view class="index">
   <view class="goodslist">
     <view class="goodsListItems">
        <view class="recommendList">
          <view class="recommendListItem" v-for="(item,index) in timeLimitData" :key='index' @tap="getDetails">
            <image class="recommendImg" :src="item.imgUrl" mode=""></image>
            <view class="recommendListRight">
              <view class="recommendListRightHeader">
                  <text class="discounts">{{item.discounts}}</text>
                  <text class="goodsName">{{item.goodsName}}</text>
              </view>
              <view class="goodsIntro">
                  <text class="discountsIntro">佣金:{{item.discountsIntro}}</text>
                  <text class="sales">
                    {{item.startTime}}
                  </text>
              </view>
              <view class="progressView">
                <image class="planIcon" src="../../static/planIcon.png" mode=""></image>
                <view class="planView">
                  <progress active  backgroundColor='transparent' stroke-width='12' activeColor='#F84722' :percent="item.percent"/>
              	</view>
              </view>
              <view class="goodsPrice">
                  <text class="goodsPriceTitle">优惠:</text>
                  <text class="goodsPriceText">￥{{item.price}}</text>
                  <text class="goodsOriginalPrice">￥{{item.originalPrice}}</text>
                  <button class="lookBtn">立即分享</button>
              </view>
            </view>
          </view>
        </view>
     </view>
   </view>
	</view>
</template>
<script>
	export default {
		 components:{
     },
     data() {
			return {
        timeLimitData:[
          {
          	id:1,
          	goodsName:'澳洲进口保健钙片儿童老...',
          	imgUrl:'../../../static/tuijian.png',
          	discounts:'佣金',
          	discountsIntro:'63.21',
          	sales:'1234',
          	price:'99.9',
          	originalPrice:'168.9',
          	hrefUrl:'',
            startTime:'2018.10.5',
            percent:'30'
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
          	hrefUrl:'',
            startTime:'2018.10.6',
            percent:'40'
          },
        ]
      }
		},
    onLoad:function(){
//       let t = this.timeLimitData.time.split(':')
//       this.time.hour = t[0]
//       this.time.minute = t[1]
//       this.time.second = t[2]
//       console.log(this.time)
    },
    onUnload:function(){
        this.scrollLeft = 0,
        this.isClickChange = false,
        this.currentTab = 0;
    },
		methods: {
      // 进入产品详情
      getDetails:function(e){
        console.log(e)
        console.log('进入产品详情页')
        uni.navigateTo({
        url: "/pages/healthyMall/goodsDetails"
        })
      },
    }
	}
</script>

<style>
  /* 限时高佣 */
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
  align-items: center;
  height: 57upx;
  margin-top: 10upx;
 }
 .goodsPriceTitle{
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:36upx;
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
  line-height:36upx;
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
  .goodsListItems{
    display: flex;
    flex-direction: column;
  }
  .progressView{
    width:189upx;
    position: relative;
    height: 24upx;
  }
  .progressView .planIcon{
    width:189upx;
    height:24upx;
    position: absolute;
    left: 0;
    top:0;
    z-index: 0;
  }
  .planView{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 24upx;
  }
  .progressView progress{
    z-index: 999;
    border-radius: 15upx;
  }
</style>
