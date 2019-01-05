<template>
	<view class="invite">
		<image class="inviteBg" src="../../static/inviteBg.png" mode=""></image>
    <text class="code posi">{{shareCode}}</text>
    <text class="copy posi" @tap="copyCode">点击复制我的邀请码</text>
    <!-- #ifdef MP-WEIXIN -->
        <button plain='true' class="shareBtn posi" open-type="share">立即分享邀请码给好友</button>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
      <text class="shareText posi" @tap="share()">立即分享邀请码给好友</text>
      <share-model :maskShow='maskShow' :popupShow='popupShow' :shareData='shareData' :shareType='shareType'> </share-model>
    <!-- #endif -->
    <text class="prompt" v-show="promptShow">内容已复制</text>
  </view>
</template>
<script>
  import shareModel from '../../components/shareModel.vue'
	export default {
		data() {
			return {
        shareCode:'1P5HA',
        promptShow:false,
        shareData:{
          title:'邀请好友',
          shareText: '邀请好友shareText',
         	path:'baidu.com',
         	href:'baidu.com',
         	image:'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a0.png',
         	imageUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2671670863,3877857355&fm=58&w=258&h=258&img.JPEG"
         
        },
        maskShow:false,
        popupShow:false,
        shareType:0,
			}
    },
		components: {
      shareModel
		},
    onShareAppMessage() {
    	return {
    		title: this.shareText ? this.shareText : "欢迎体验健康联盟",
    		path: '/pages/healthySpace/invite',
    		imageUrl:'../../static/inviteBg.png'
    	}
    },
    methods:{
      copyCode(){
        console.log('点击复制')
        uni.setClipboardData({
            data: this.shareCode,
            success: function () {
                console.log('复制成功')
//                 setTimeout(()=> {
//                 		this.promptShow = true;
//                 }, 300);
            }
        });
      },
      share(){
        this.maskShow=true
        this.popupShow=true
      }
    }
	}
</script>

<style>
  .invite{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .inviteBg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .posi{
    position: absolute;
  }
  .code{
    left:120upx;
    bottom: 403upx;
    font-size:163upx;
    font-weight:normal;
    color:rgba(205,74,27,1);
    line-height:43upx;
    text-shadow:0upx 7upx 7upx rgba(205,74,27,0.42);
  }
  .shareText{
     width: 100%;
     text-align: center;
     bottom: 85upx;
     font-size:34upx;
     font-family:PingFang-SC-Bold;
     font-weight:bold;
     color:rgba(205,74,27,1);
     line-height:43upx;
  }
  .copy{
    left:213upx;
    bottom: 287upx;
    font-size:30upx;
    font-weight:bold;
    color:rgba(205,74,27,1);
    line-height:43upx;
  }
  .shareBtn{
    /* left:194upx; */
    bottom: -495upx;
    font-size:34upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(205,74,27,1);
    line-height:43upx;
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
</style>
