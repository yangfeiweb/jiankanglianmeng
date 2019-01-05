<template>
  <view class="shareModel">
    <view class="shareMask" v-show="maskShow" @click="hide"></view>
  	<view class="sharePopup" v-show="popupShow">
      <view class="shareList">
        <view @tap='share(item)' class="shareItem" v-for="(item,index) in providerList" :key='index'>
          <image :src="item.imgUrl" mode=""></image>
          <text class="shareName">{{item.name}}</text>
        </view>
      </view>
      <text class="cancel" @tap="hide">取消</text>
    </view>
  </view>
</template>

<script>
  export default{
    props:{
      maskShow:{
        type:Boolean,
        default: false
      },
      popupShow:{
        type:Boolean,
        default: false
      },
      shareType:{
        type:Number,
        default:0,
      },
      shareData:{
        type:Object
      }
    },
    data(){
      return{
//         shareText:'',
//         href:"",
//         image: '',
        providerList:[],
      }
    },
    onShareAppMessage() {
    	return {
    		title: this.shareData.title,
    		path: this.shareData.path,
    		imageUrl:this.shareData.imageUrl
    	}
    },
    onUnload:function(){
    	this.shareText=this.data.shareText,
    	this.href = this.data.href,
    	this.image=this.data.image;
    },
    onLoad() {
    	uni.getProvider({
    		service: "share",
    		success: (e) => {
    			console.log("success", e);
    			let data = []
    			for (let i = 0; i < e.provider.length; i++) {
    				switch (e.provider[i]) {
    					case 'weixin':
    						data.push({
    							name: '分享到微信',
    							id: 'weixin',
                  type:'WXSceneSession',
    							sort:0,
                  imgUrl:"../../static/shareIconhaoyou.png",
    						})
    						data.push({
    							name: '朋友圈',
    							id: 'weixin',
    							type:'WXSenceTimeline',
    							sort:1,
                  imgUrl:"../../static/shareIconPeng.png",
    						})
    						break;
    					case 'qq':
    						data.push({
    							name: 'QQ好友',
    							id: 'qq',
    							sort:3,
                  imgUrl:"../../static/shareQQ.png",
    						})
    						break;
    					default:
    						break;
    				}
    			}
    			this.providerList = data.sort((x,y) => {
    				return x.sort - y.sort
    			});
    		},
    		fail: (e) => {
    			console.log("获取登录通道失败", e);
    			uni.showModal({
    				content:"获取登录通道失败",
    				showCancel:false
    			})
    		}
    	});
    },
    methods:{
      hide(){
        this.maskShow = false
        this.popupShow = false
      },
     async share(e) {
     	console.log("分享通道:"+ e.id +"； 分享类型:" + this.shareType);
      if(e.id==='qq'){
        this.shareType=1
      }else{
        this.shareType=0
      }	
      console.log("qq分享类型:" + this.shareType);
     	let shareOPtions = {
     		provider: e.id,
     		scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession", //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
     		type:this.shareType,
        href:this.shareData.href,
        summary:this.shareData.shareText,
        imageUrl:this.shareData.image,
        title:this.shareData.title,
     		success: (e) => {
     			console.log("success", e);
     		},
     		fail: (e) => {
     			console.log("fail", e)
     		},
     		complete:function(){
     			console.log("分享操作结束!")
     		}
     	}
     	if(shareOPtions.type === 0 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
        console.log('分享到扣扣')
     		shareOPtions.href = "baidu.com";
     		shareOPtions.title = "欢迎体验健康联盟";
     	}
      console.log(shareOPtions,'当前shareOPtions')
     	uni.share(shareOPtions);
     },
    }
  }
</script>
<style>
  /* 弹框样式 */
  .shareMask {
  	position: fixed;
  	z-index: 998;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	background-color: rgba(0, 0, 0, .3);
  }
  .sharePopup {
    background-color: rgba(255, 255, 255, 1);
  	position: fixed;
  	z-index: 999;
  	bottom: 0upx;
  	left: 0upx;
  	width:100%;
  	height:360upx;
  }
  .shareList{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .shareItem{
    width: 33%;
    display: flex;
    height: 260upx;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .shareItem image{
    height: 106upx;
    width: 106upx;
    margin-bottom: 16upx;
  }
  .shareItem .name{
    font-size:28upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:70upx;
  }
  .cancel{
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    font-size: 38upx;
    line-height: 100upx;
    height: 100upx;
    border-top: 1upx solid #DBDBDB;
  }
</style>
