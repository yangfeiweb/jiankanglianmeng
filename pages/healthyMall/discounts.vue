<template>
	<view class="discounts">
      <view class="discountsList">
      	<view class="discountsItem" v-for="(item,index) in discountsData" :key='index'>
          <view class="discountsBody">
            <view class="discountsItemLeft">
               <view class="discountsItemLeftTop">
                  <text :class="item.receive==='N'?'blue moneyIcon':'orangeTime moneyIcon'">￥</text>
                  <text :class="item.receive==='N'?'blue sum':'orange sum'">{{item.sum}}</text>
               </view>
               <text :class="item.receive==='N'?'blue fullUseOf':'orangeTime fullUseOf'">满{{item.fullUseOf}}可用</text>
             </view>
             <view class="discountsItemRight">
               <view class="discountsItemMsg">
                  <text class="msg">{{item.shopName}}</text>
                  <text class="endTime">有效期至{{item.endTime}}</text>
               </view>
               <text v-if="item.receive==='N'" class="receiveBtn blueBtn" @tap="getDiscounts(item)">立即领取</text>
               <text v-else class="receiveBtn orangeBtn" @tap="use(item)">立即使用</text>
             </view>
      		 </view>
           <view v-show="item.receive==='Y'"  class="sign">
           </view>
           <text v-show="item.receive==='Y'" class="signText">已领</text>
      	</view>
      </view>
  </view>
</template>
<script>
	export default {
		data() {
			return {
        discountsData:[
          {
          	sum:'50',
          	fullUseOf:'100',
          	shopName:'养生佳品宁夏枸杞购物券',
          	endTime:'2019-10-10',
          	receive:'N'
          },
          {
          	sum:'50',
          	fullUseOf:'500',
          	shopName:'养生佳品宁夏枸杞购物券',
          	endTime:'2019-10-10',
          	receive:'Y'
          }
        ]
			}
		},
		components: {
		},
    methods:{
      getDiscounts(item){
        console.log('立即领取',item)
        uni.showToast({
              title: '领取成功',
              duration: 1000
        });
      },
      use(item){
        console.log('立即使用',item)
      }
    }
	}
</script>

<style>
  .discountsList{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 44upx;
  }
  .discountsItem{
    width: 707upx;
    height: 203upx;
    background: #fff;
    position: relative;
    margin-bottom: 32upx;
    box-shadow:0px 2upx 31upx 7upx rgba(222,222,243,0.21);
    border-radius: 10upx;
  }
  .discountsBody{ 
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 203upx;
  }
  .discountsItemLeft{
    height: 100%;
    border-right: 1upx dashed #E9E9EC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .discountsItemLeftTop{
    width: 169upx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .moneyIcon{
    font-size:34upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(35,164,225,1);
    line-height:70upx;
  }
  .sum{
    font-size:60upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(35,164,225,1);
    line-height:70upx;
  }
  .fullUseOf{
    font-size:26upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(35,164,225,1);
    line-height:70upx;
  }
  .discountsItemRight{
   width: 519upx;
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-left: 18upx;
  }
  .discountsItemMsg{
    width: 340upx;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .msg{
    font-size:30upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:70upx;
  }
  .endTime{
    font-size:26upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(179,179,179,1);
    line-height:70upx;
  }
  .sign{
    position: absolute;
    right: 0upx;
    bottom: 0;
    border-style: solid;
    border-width: 0px 0px 85upx 85upx;
    border-color: transparent transparent #FE5F09 transparent;
    width: 0px;
    height: 0px;
  }
  .signText{
    position: absolute;
    right: 0upx;
    bottom: -5upx;
    font-size:26upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,254,254,1);
    line-height:70upx;
    transform: rotate(-45deg);
  }
  .blue{
    color: #23A4E1;
  }
  .orange{
    color:#FE5E0B;
  }
  .orangeTime{
    color:#FD6403;
  }
  .blueBtn{
      background:linear-gradient(268deg,rgba(115,144,255,1),rgba(67,111,255,1));
  }
  .orangeBtn{
      background:linear-gradient(268deg,rgba(255,88,18,1),rgba(253,101,2,1));
  }
  .receiveBtn{
    width:166upx;
    height:57upx;
    border-radius:29upx;
    font-size:30upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:57upx;
    text-align: center;
  }
</style>
