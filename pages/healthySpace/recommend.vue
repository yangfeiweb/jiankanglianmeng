<template>
	<view class="recommend">
		<image class="recommendBg" src="../../static/recommendBg.png" mode=""></image>
    <view class="turnout posi">
      <text class="turnoutText" v-for="(item,index) in turnoutList" :key='index'>{{item}}</text>
    </view>
    <view class="recommendTitle posi">
    	<text class="recommendText">推荐好友购物 最高得</text>
      <text class="recommendTitleRule textStyle">88</text>
      <text class="recommendText">元红包</text>
      <text class="recommendTitleRule rule" @tap="rule">活动规则</text>
    </view>
    <!-- #ifdef MP-WEIXIN -->
      <button plain='true' class="friendBtn posi" open-type="share" >推荐好友</button>
      <button plain='true' class="shopsBtn posi" open-type="share" >推荐商家</button>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
      <text class="friend posi" @tap="recommend('friend')">推荐好友</text>
      <text class="shops posi"  @tap="recommend('shops')">推荐商家</text>
      <share-model :maskShow='maskShow' :popupShow='popupShow' :shareData='shareData' :shareType='shareType'> </share-model>
    <!-- #endif -->
    <text class="service posi" @tap="service">联系客服</text>
    <view class="mask" v-show="ruleMaskShow" @click="hide"></view>
    <view class="popup popup-middle" v-show="rulePopupShow">
    		<image class="ruleBg" src="../../static/ruleBg.png" mode=""></image>
        <text class="closeBtn" @tap="hide">关闭</text>
    </view>
  </view>
</template>

<script>
  import shareModel from '../../components/shareModel.vue'
	export default {
		data() {
			return {
        turnout:'44444',
        turnoutList:[],
        ruleShow:false,
        ruleMaskShow:false,
        rulePopupShow:false,
        crowds:'friend',
        maskShow:false,
        popupShow:false,
        shareData:{
          title:'推荐好友',
          path:'baidu.com',
          href:'baidu.com',
          image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
          shareText:"推荐好友shareText",
        },
        shareType:0,
        
			}
		},
    // 小程序的分享
    onShareAppMessage() {
    	return {
    		title: this.shareData.shareText ? this.shareData.shareText : "欢迎体验健康联盟",
    		path: '/pages/healthySpace/recommend',
    		imageUrl:'../../static/recommend.png'
    	}
    },
    onLoad:function(){
      this.turnoutList = this.turnout.split('')
      console.log(this.turnoutList)
		},
    methods:{
        recommend(item){
          this.maskShow = true
          this.popupShow = true
          if(item==='friend'){
            console.log('推荐好友') 
            this.shareData={
            	title:'推荐好友',
            	path:'baidu.com',
            	href:'baidu.com',
            	image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
            	shareText:"推荐好友shareText",
            }
          }else{
            console.log('推荐商家') 
            this.shareData={
            	title:'推荐商家',
            	path:'baidu.com',
            	href:'baidu.com',
            	image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
            	shareText:"推荐商家shareText",
            }
          }
        },
        service(){
          console.log('联系客服')
        },
        rule(){
          console.log('点击活动规则')
          this.ruleMaskShow = true
          this.rulePopupShow = true
        },
        hide(){
          this.ruleMaskShow = false
          this.rulePopupShow = false
        }
    },
    components: {
      shareModel
		}
	}
</script>

<style>
  .recommend{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .recommendBg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .posi{
    position: absolute;
  }
  .recommendTitle{
    left: 92upx;
    bottom: 414upx;
  }
  .recommendText{
    font-size:30upx;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:70upx;
  }
  .textStyle{
    text-decoration:none;
  }
  .recommendTitleRule{
    font-size:30upx;
    font-weight:400;
    text-decoration:underline;
    color:rgba(255,255,26,1);
    line-height:70upx;
  }
  .rule{
    margin-left: 27upx;
  }
  button.friendBtn[plain] {
    border:none;
  	background-color:transparent;
  	color:#F1733B;
  }
  button.shopsBtn[plain] {
  	border:none;
  	background-color:transparent;
  	color:#ffffff;
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
    margin-top: 0upx;
  }
  .friendBtn{
  	/* left:upx; */
  	bottom: -834upx;
  	font-size:40upx;
  	font-family:PingFang-SC-Bold;
  	font-weight:bold;
  	color:#F1733B;
  }
  .shopsBtn{
    bottom: -846upx;
    font-size:40upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:#fff;
  }
  .friend{
    left: 289upx;
    bottom: 285upx;
    font-size:40upx;
    font-weight:bold;
    color:rgba(241,115,59,1);
    line-height:70upx;
  }
  .shops{
    left: 287upx;
    bottom: 152upx;
    font-size:40upx;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:70upx;
  }
  .service{
    right: 113upx;
    bottom: 34upx;
    font-size:30upx;
    font-weight:400;
    color:rgba(255,255,26,1);
    line-height:70upx;
  }
  .turnout{
    left: 256upx;
    top:214upx;
  }
  .turnoutText{
      font-size:36upx;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,23,1);
      line-height:70upx;
      margin-right: 18upx;
  }
  /* 弹框样式 */
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
