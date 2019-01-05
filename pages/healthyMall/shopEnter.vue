<template>
	<view class="shopEnter">
		<image class="shopEnterBg" src="../../static/shopEnterBg.png" mode=""></image>
    <text class="ruleText" @tap="getRule">活动规则</text>
    <navigator class="concatService"  url="/pages/healthyMall/service">立即联系客服</navigator>
    <view class="mask" v-show="ruleMaskShow" @click="hide"></view>
    <view class="popup popup-middle" v-show="rulePopupShow">
    		<image class="ruleBg" src="../../static/ruleBg.png" mode=""></image>
    		<text class="closeBtn" @tap="hide">关闭</text>
    </view>
  </view>
</template>
<script>
	export default {
		data() {
			return {
       ruleMaskShow:false,
       rulePopupShow:false,
      }
		},
		components: {
		},
    methods:{
      getRule(){
        this.ruleMaskShow=true
        this.rulePopupShow=true
      },
      hide(){
        this.ruleMaskShow=false
        this.rulePopupShow=false
      }
    }
	}
</script>

<style>
  .shopEnter{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .shopEnterBg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .concatService{
  /* left:upx; */
    width: 100%;
    display: inline-block;
    position: absolute;
    bottom: 71upx;
    font-size:40upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:48upx;
    text-align: center;
  }
  .ruleText{
    width: 100%;
    display: inline-block;
    position: absolute;
    bottom:160upx;
    text-align: center;
    font-size:30upx;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(254,249,249,1);
    line-height:43upx;
  }
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
  	bottom: 280upx;
  	left: 35upx;
  	width:673upx;
  	height:817upx;
  	border-radius:5upx;
  }
  .popup image{
  	position: absolute;
  	top:0;
  	left: 0;
  	width:100%;
  	height: 100%;
  }
  .closeBtn{
  	position: absolute;
  	bottom: 95upx;
  	left:222upx;
  	width:231upx;
  	height:56upx;
  	background:rgba(255,243,57,1);
  	border-radius:25upx;
  	font-size:34upx;
  	font-weight:400;
  	color:rgba(255,88,53,1);
  	line-height:56upx;
  	text-align: center;
  }
</style>
