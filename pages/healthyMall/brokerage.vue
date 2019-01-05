<template>
	<view class="brokerage">
		<image class="brokerageBg" src="../../static/brokerage.png" mode=""></image>
    <view class="brokerageData">
    	<text class="money posi">{{brokerageData.money}}元</text>
      <text class="num posi">{{brokerageData.num}}件</text>
    </view>
    <!-- #ifdef MP-WEIXIN -->
      <button plain='true' class="shareBtn posi" open-type="share" >立即分享赚佣金</button>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
      <text class="shareText posi" @tap="share">立即分享赚佣金</text>
      <share-model :maskShow='maskShow' :popupShow='popupShow' :shareData='shareData' :shareType='shareType'> </share-model>
    <!-- #endif -->
    
  </view>
</template>
<script>
  import shareModel from '../../components/shareModel.vue'
	export default {
		data() {
			return {
        brokerageData:{
          money:'123',
          num:"",
        },
        shareType:0,
        maskShow:false,
        popupShow:false,
        shareData:{
          title:'佣金好礼',
          path:'baidu.com',
          href:'baidu.com',
          image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
          shareText:"佣金好礼shareText",
          imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"
        }
			}
		},
		components: {
      shareModel
		},
    // 小程序的分享
    onShareAppMessage() {
    	return {
    		title: this.shareText ? this.shareText : "欢迎体验健康联盟",
    		path: '/pages/healthyMall/brokerage',
    		imageUrl:'../../static/brokerage.png'
    	}
    },
    methods:{
      share(){
        this.maskShow = true
        this.popupShow = true
      }
    }
	}
</script>

<style>
  .brokerage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .brokerageBg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .posi{
    position: absolute;
  }
  .money{
    left:143upx;
    bottom: 275upx;
    font-size:70upx;
    font-family:WenYue-XinQingNianTi-NC-W8;
    font-weight:normal;
    color:rgba(244,48,30,1);
    font-size:70upx;
  }
  .num{
    right:181upx;
    bottom: 275upx;
    font-size:70upx;
    font-family:WenYue-XinQingNianTi-NC-W8;
    font-weight:normal;
    color:rgba(244,48,30,1);
  }
  .shareBtn{
    /* left:upx; */
    bottom: -498upx;
    font-size:40upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(241,115,59,1);
  }
  button[plain] {
    color:rgba(205,74,27,1);
    border:none;
    background-color:transparent;
  }
  button {
    position:relative;
    display:block;
    margin-left:auto;
    margin-right:auto;
    padding-left:14upx;
    padding-right:14upx;
    box-sizing:border-box;
    text-align:center;
    text-decoration:none;
    line-height:2.55555556;
    border-radius:5upx;
    -webkit-tap-highlight-color:transparent;
    overflow:hidden;
    color:rgba(205,74,27,1);
    background-color:#F8F8F8;
  }
  .shareText{
    position: absolute;
    bottom: 70upx;
    font-size:40upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(241,115,59,1);
    width: 100%;
    text-align: center;
  }
</style>
