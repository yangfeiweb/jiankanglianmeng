<template>
	<view class="healthySpace">
    <image class="healthySpaceBg" src="../../../static/healthySpaceBg.png" mode=""></image>
    <view class="grace-swiper-msg">
    	<view class="grace-swiper-msg-icon">
    		<image src="../../../static/newsIcon.png" mode="widthFix"></image>
    	</view>
    	<swiper vertical="true" autoplay="true" circular="true" interval="3000">
    		<swiper-item v-for="(item,index) in noticeData" :key='index'>
    			<text>{{item.text}}</text>
          <text class="move">更多详情>></text>
    		</swiper-item>
    	</swiper>
    </view>
    <view class="mascotView">
    	<view class="energyView">
    		<view class="modeView posi" @tap="energy">
            <view class="mode"></view>
            <view class="mode"></view>
            <view class="mode"></view>
            <view class="text">
            	<text class="title">体力</text>
              <text class="val">52%</text>
            </view>
        </view>
        <view class="outputView posi"  @tap="output">
            <view class="circle">
              <image src="../../../static/download.png" mode=""></image>
            </view>
            <view class="text">
            	<text class="title">生产值</text>
            	<text class="val">1H / 82</text>
            </view>
        </view>
        <view class="ifLife posi" @tap="harvestIfLife">
            <image src="../../../static/ifLifeIcon.png" mode=""></image>
            <view class="text">
            	<text class="title">生命果</text>
            	<text class="val">4,311,353,154</text>
            </view>
        </view>
    	</view>
      <view class="mascot">
          <image :class="mascotImg==='../../../static/mascotWalk.png'?'animationImg animation-element mascotImg':'animation-element mascotImg'"  :src="mascotImg" mode=""  :animation="animationDatas"  @touchstart='imgTouchstart'
    @touchend='imgTouchend'></image>
          <view class="tooltip" :animation="animationData" v-show="tooltipBoxShow">
            <image src="../../../static/tooltipBg.png" mode=""></image>
          	<text class="tooltipText">
              {{tooltipText}}
            </text>
          </view>
      </view>
    </view>
    <view class="energyOperateView">
    	<view class="energyOperateViewItem" v-for="(item,index) in energyList" :key='index' @click='getAction(item)'>
    			<image class="energyBlockImg" :src="item.imgUrl" mode=""></image>
    			<text class="aenergyBlockText">{{item.name}}</text>
    	</view>
    </view>
    <view class="swiperView">
    	<swiper :indicator-dots="indicatorDots" indicator-active-color='#fff' :autoplay="autoplay" :interval="interval" :duration="duration">
    		<swiper-item  v-for="(item,index) in swiperData" :key='index' @tap='getSwiper(item)'>
    			<view class="swiper-item">
            <image :src="item.imgUrl" mode=""></image>
          </view>
    		</swiper-item>
    	</swiper>
    </view>
    <view class="brokenLine">
    	<view class="brokenLineHeader">
    		<view class="brokenLineHeaderItem">
    			<text class="brokenLineTitle">开盘点</text>
          <text class="line"></text>
          <text class="brokenLineText">￥{{dealData.start}}</text>
    		</view>
        <view class="brokenLineHeaderItem">
        	<text class="brokenLineTitle">全天最高</text>
        	<text class="line"></text>
        	<text class="brokenLineText">￥{{dealData.zenith}}</text>
        </view>
        <view class="brokenLineHeaderItem">
        	<text class="brokenLineTitle">全天最低</text>
        	<text class="line"></text>
        	<text class="brokenLineText">￥{{dealData.lowest}}</text>
        </view>
    	</view>
      <view class="chatView">
        <view class="canvasView">
          <mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" />
        </view>
      </view>
      <view class="dealView">
      	<view class="dealViewItem">
      		<text class="dealTitle">市场价格</text>
          <text class="dealLine"></text>
          <text class="dealText">￥{{dealData.bazaarPrice}}</text>
      	</view>
        <view class="dealViewItem">
        	<text class="dealTitle">全天交易</text>
        	<text class="dealLine"></text>
        	<text class="dealText">￥{{dealData.dayVolume}}</text>
        </view>
        <view class="dealViewItem">
        	<text class="dealTitle">市场总量</text>
        	<text class="dealLine"></text>
        	<text class="dealText">￥{{dealData.bazaarGross}}</text>
        </view>
      </view>
      <view class="timeList">
      	<view  v-for="(item,index) in timeList" :key='index' :data-a='index' :class="currentTime===index?'current timeListItem':'timeListItem'" @click="getTime">
          <!-- <view v-show="currentTime===index" class="timeBorder"></view> -->
          <text  :class="currentTime===index?'timeText currentText':'timeText'"> {{item}}</text>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
  import * as echarts from '../../../components/echarts/echarts.simple.min.js';
  import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue';
  var datas=[11, 11, 150, 13, 121, 13, 10,150, 13, 121, 13, 10,111, 11, 150, 13, 121, 13, 10]
  function getLineOption() {
  	return {
  		// animation: true,
      tooltip: {
        show:true,
        trigger: 'axis'
      },
  		color: ['#ffffff'],
  		legend: {
  			data: ['价格']
  		},
  		calculable: false,
  		xAxis: [
        {
        show:false,
  			type: 'category',
  			splitArea: {
  				show: false
  			},
         boundaryGap: false,
  		}],
  		yAxis: [{
        show:false,
  			type: 'value',
  			splitArea: {
  				show: false
  			}
  		}],
  		series: [ {
  			name: '价格',
  			type: 'line',
        showSymbol: false,
  			data: datas,
        markPoint: {
        		data: [
        				{type: 'max', name: '最大值'},
        				{type: 'min', name: '最小值'}
        		]
         },
  		 }
      ],
  	}
  }
	export default {
		data() {
			return {
        // datas:[11, 11, 150, 13, 121, 13, 10,11, 11, 150, 13, 121, 13, 10,11, 11, 150, 13, 121, 13, 10],
        echarts,
        lineInit: function (canvas, width, height) {
        	console.log(this)
        	console.log(datas)
        	let lineChart = echarts.init(canvas, null, {
        		width: width,
        		height: height
        	})
        	canvas.setChart(lineChart)
        	lineChart.setOption(getLineOption())
        	return lineChart
        },
        tooltipBoxShow:true,
        tooltipText:'生命果还没有成熟哦,成熟以后小果会通知你的哦...',
        animationData:'',
        animationDatas:'',
        mascotImg:'../../../static/mascotIcon.png',
        mascotStatus:'normal',
        currentTime:2,
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        dealData:{
          zenith:'26.44',
          lowest:'23.38',
          start:'25.24',
          bazaarPrice:'1,442,050.00',
          dayVolume:"421,050.31",
          bazaarGross:'90,153,44 PRC'
        },
        noticeData:[
          {
            text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",
            id:1,
            url:'../../healthySpace/notice',
          },
          {
          	text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",
          	id:2,
          	url:'../../healthySpace/notice',
          },
          {
          	text:"国庆特惠：国庆节日期间，健康商城商品大酬宾，海量商品",
          	id:3,
          	url:'../../healthySpace/notice',
          },
        ],
        energyList:[
        	{
        		imgUrl:'../../../static/InviteIcon.png',
        		id:'1',
        		name:'邀请好友',
        		hrefUrl:'/pages/healthySpace/invite',
        	},
        	{
        		imgUrl:'../../../static/nominateIcon.png',
        		id:'2',
        		name:'推荐有礼',
        		hrefUrl:'/pages/healthySpace/recommend',
        	},
        	{
        		imgUrl:'../../../static/garageIcon.png',
        		id:'3',
        		name:'体力加油站',
        		hrefUrl:'/pages/healthySpace/garage',
        	},
        	{
        		imgUrl:'../../../static/zoologyIcon.png',
        		id:'4',
        		name:'生态规划',
        		hrefUrl:'/pages/healthySpace/zoology',
        	}
        ],
        swiperData:[
          {
          	id:1,
          	imgUrl:'../../../static/indexSwiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/indexSwiper.png',
          	hrefUrl:'baidu.com'
          },
          {
          	id:1,
          	imgUrl:'../../../static/indexSwiper.png',
          	hrefUrl:'baidu.com'
          },
        ],
        timeList:['10MIN','1H','24H','1M','3M','1Y'],
        clickTrue:false,
        timer:null
			}
		},
    watch:{
      mascotStatus(newStatus,oldStatus){
        console.log(newStatus,oldStatus)
        if(newStatus==='happy'){
          
        }else if(newStatus==='happy'){
          
        }
      }
    },
    onUnload(){
    	this.animationData = ''
      this.animationDatas = ''
    },
    onLoad() {
    	this.animation = uni.createAnimation()
      this.mascotImg = '../../../static/mascotWalk.png'
    },
    methods:{
      imgTouchstart(){
        if(this.mascotImg==='../../../static/mascotWalk.png'){
          console.log('开始',Math.random() * -90,Math.random() * -90)
          this.animation.translate(Math.random() * -90, Math.random() * -90)
          .step()
          this.animationDatas = this.animation.export()
          this.clickTrue = true
      	}else{
           this.clickTrue = false
        }
      },
//       imgTouchend(){
//         console.log('移开')
//         this.animation.rotate(0, 0)
//         	.translate(0, 0)
//         	.skew(0, 0)
//         	.step({
//         		duration: 0
//         	})
//         this.animationData = this.animation.export()
//       },
      getSwiper(item){
//         console.log('点击轮播图')
//         this.mascotStatus = 'happy'
      },
      getAction(item){
        uni.navigateTo({
        	url:item.hrefUrl
        })
      },
      getTime(e){
        console.log('点击选择当前时间',e.currentTarget.dataset.a)
        let i = e.currentTarget.dataset.a
        this.currentTime = i
        datas=[110, 110, 1500, 13, 121, 13, 10,11, 11, 150, 13, 121, 13, 10,11, 11, 150, 13, 121, 130, 1000],
        console.log(datas)
      },
      tipScale(){
        if(this.clickTrue){
          this.animation.translate(0,0)
          .step()
          this.animationDatas = this.animation.export()
          this.clickTrue = false
        }
        this.animation.scale(1,1).step({
          duration: 500,
          timingFunction: "linear",
        })
        this.animationData = this.animation.export()
      },
      reset: function () {
      	this.animation.scale(0,0).step({
          duration: 500,
          timingFunction: "linear",
        })
      	this.animationData = this.animation.export()
      },
      output(){
        this.mascotImg = '../../../static/mascotHappy2.png'
        this.tooltipText = '生命果还没有成熟哦,成熟以后小果会通知你的哦...'
        this.tipScale()
        setTimeout(function() {
           this.reset()
        }.bind(this), 2000)
      },
      energy(){
        this.mascotImg = '../../../static/mascotShy.png'
        this.tooltipText = '生命果还没有成熟哦,成熟以后小果会通知你的哦...'
        this.tipScale()
        setTimeout(function() {
           this.reset()
        }.bind(this), 2000)
      },
      harvestIfLife(){
        this.mascotImg = '../../../static/mascotHappy1.png'
        this.tooltipText = '生命果还没有成熟哦,成熟以后小果会通知你的哦...'
        this.tipScale()
        setTimeout(function() {
           this.reset()
        }.bind(this), 2000)
        },
    } ,
		components: {
      mpvueEcharts
		}
	}
</script>

<style>
  .healthySpace{
  }
  .healthySpaceBg{
    position: absolute;
    top:0;
    left: 0;
    height: 590upx;
    width: 100%;
    z-index: -1;
  }
  .grace-padding{
    width: 650upx;
    margin: 0 50upx;
  }
  /* #ifdef APP-PLUS	*/
    .grace-swiper-msg{
      margin-top:50upx;
    }
    .healthySpaceBg{
    	height: 639upx;
    }
  /* #endif */
  .grace-swiper-msg{
    width: 650upx;
    padding: 0 50upx;
    display: flex;
    justify-content: center;
    height: 40upx;
    line-height: 40upx;
    font-size:18upx; 
    align-items: center;
    flex-wrap:nowrap;
    background-color:rgba(0,0,0,0.3);
    color: #fff;
  }
  .grace-swiper-msg-icon{
    width:22upx; 
    height: 24upx;
    margin-top: -12upx;
    margin-right:30upx;
    z-index: 90;
  }
  .grace-swiper-msg-icon image{
    width:100%; 
    flex-shrink:0;
  }
  .grace-swiper-msg swiper{
    width:100%; 
    height:40upx;
  }
  .grace-swiper-msg swiper-item{
    line-height:40upx;
    display: flex;
    width: 598upx;
    justify-content: space-between;
  }
  /* 吉祥物 */
  .mascotView{
    height: 555upx;
    width: 100%;
    position: relative;
  }
  .mascot .mascotImg{
    width: 182upx;
    height: 241upx;
    position: absolute;
    top:240upx;
    right: 275upx;
  }
  .mascot .animationImg{
    width: 211upx;
    height: 377upx;
    top:140upx;
    animation: animationImg 3s linear infinite;
    -webkit-animation: animationImg 3s linear infinite;
  }
  @keyframes animationImg{
  	0%,
  	100% {
  			top: 140upx;
  			transition: top 3s infinite;
  	}
  	50%{
  			top: 170upx;
  			transition: top 3s infinite;
  	}
  } 
  /* 操作模块 */
  .energyOperateView{
    display: flex;
    height: 132upx;
    width: 730upx;
    flex-direction: row;
    margin:0 10upx;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0upx 3upx 20upx 0upx rgba(0,0,0,0.08);
    border-radius: 25upx;
  }
  .energyOperateViewItem{
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .energyBlockImg{
    
  }
  .energyBlockImg:nth-child(1){
    width: 51upx;
    height: 51upx;
  }
  .energyBlockImg:nth-child(2){
  	width: 50upx;
  	height: 48upx;
  }
  .energyBlockImg:nth-child(3){
  	width: 62upx;
  	height: 48upx;
  }
  .energyBlockImg:nth-child(4){
  	width: 54upx;
  	height: 48upx;
  }
  .aenergyBlockText{
    font-size:22upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-top: 18upx;
  }
  /* 轮播 */
  .swiperView{
    height: 210upx;
    width: 730upx;
    margin:10upx;
  }
  .swiperView swiper{
    height: 100%;
    border-radius:15upx;
  }
	.swiper-item {
		display: block;
		height: 210upx;
    width: 100%;
		text-align: center;
	}
  .swiper-item image{
    height: 210upx;
    width: 100%;
    border-radius:15upx;
  }
  /* 折线图部分 */
  .brokenLine{
    width:730upx;
    margin:0 10upx;
    height:762upx;
    background:linear-gradient(159deg,rgba(18,194,233,1),rgba(75,116,162,1),rgba(125,30,220,1));
    border-radius:15upx;
    overflow: hidden;
  }
  /* 折线图最上面的部分 */
  .brokenLineHeader{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 22upx;
    padding-top: 25upx;
  }
  .brokenLineHeaderItem{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .brokenLineHeaderItem .line{
    display: inline-block;
    width:110upx;
    height:1upx;
    background:rgba(245,245,245,0.2);
  }
  .brokenLineHeaderItem .brokenLineText{
    font-size:30upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin-top: 5upx;
  }
  .brokenLineHeaderItem .brokenLineTitle{
    font-size:22upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin-bottom: 10upx;
  }
  .chatView{
    height: 310upx;
    width:750upx;
    left: -50upx;
  }
  .canvasView{
    height: 310upx;
    width:750upx;
  }
  .dealView{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 20upx;
  }
  .dealViewItem{
    width: 430upx;
    height: 40upx;
    border: 1upx solid rgba(250,250,250,1);
    border-radius: 5upx;
    line-height: 37upx;
    margin-bottom: 20upx;
  }
  .dealTitle{
    width: 175upx;
    font-size: 22upx;
    font-weight: 500;
    color:rgba(230,230,230,1);
    display: inline-block;
    text-align: center;
  }
  .dealText{
    font-size:24upx;
    font-family:PingFang-SC-Heavy;
    font-weight:800;
    color:rgba(255,255,255,1);
  }
  .dealLine{
    display: inline-block;
    width:1upx;
    height:20upx;
    background:rgba(253,253,253,0.2);
    margin-right: 41.5upx;
  }
  .timeList{
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    width: 100%;
    margin-top: 47upx;
  }
  .timeListItem{
    width:16.6%;
    font-size:18upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(197,197,197,1);
    line-height:50upx; 
    text-align: center;
  }
  .current{
    font-size:30upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:50upx;
  }
  .currentText{
    border-top: 5upx solid #fff;
  }
  /* 信息展示块 */
  .energyView{
    position: absolute;
    top:4upx;
    left:5upx;
    width:210upx;
    height:220upx;
    background:rgba(0,0,0,0.35);
    border-radius:10upx;
    z-index: 999;
  }
  .posi{
    position: absolute;
    left: 17upx;
  }
  /* 波动的旋律 */
  .modeView {
    top:15upx;
    width: 120upx;
    height: 44upx;
  }
 .modeView .mode {
      position: absolute;
      bottom: 0;
      width:8upx;
      height:20upx;
      background:linear-gradient(179deg,rgba(18,194,233,1),rgba(0,204,231,1),rgba(2,138,254,1));
      border-radius:6upx;
      transition:height 2s;
      animation: preloader-1 1s ease-in-out infinite alternate;
  }
  .modeView .mode:nth-child(2) {
      left: 14upx;
      animation-delay: 0.4s
  }

  .modeView .mode:nth-child(3) {
      left: 28upx;
      animation-delay: 0.8s
  }
  .modeView .text {
      position: absolute;
      top:-6upx;
      left: 60upx;
      font-size:18upx;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:#fff;
  }
    @keyframes preloader-1 {
      0%,
      100% {
          height: 20upx;
          bottom: 0;
          transition: height 3s infinite;
      }
      50%{
          height: 44upx;
          bottom: 0upx;
          transition: height 3s infinite;
      }
  }

  @-webkit-keyframes preloader-1 {
     0%,
     100% {
     		height: 20upx;
     		bottom: 0;
     		transition: height 3s infinite;
     }
     50%{
     		height: 44upx;
     		bottom: 0upx;
     		transition: height 3s infinite;
     }
  }

  @-moz-keyframes preloader-1 {
     0%,
     100% {
     		height: 20upx;
     		bottom: 0;
     		transition: height 3s infinite;
     }
     50%{
     		height: 44upx;
     		bottom: 0upx;
     		transition: height 3s infinite;
     }
  }

  @-o-keyframes preloader-1 {
      0%,
      100% {
          height: 20upx;
          bottom: 0;
          transition: height 3s infinite;
      }
      50%{
          height: 44upx;
          bottom: 0upx;
          transition: height 3s infinite;
      }
  }
  .outputView{
    top:85upx;
    height: 44upx;
  }
  .circle{
    width:30upx;
    height:30upx;
    padding: 4upx 4upx;
    background:rgba(255,255,255,1);
    border:3upx solid rgba(66,112,207,1);
    border-radius:50%;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  .circle image{
    position: absolute;
    bottom: 0;
    width: 150upx;
    height: 25upx;
    position: absolute;
    left: 0upx;
    bottom: 0;
    animation: move_wave 3s linear infinite;
    -webkit-animation: move_wave 3s linear infinite;
    z-index: 0;
  }
 @keyframes move_wave {
   0% {
        transform: translateX(-5%);
    }
    25% {
        transform: translateX(-20%);
    }
    50% {
    		transform: translateX(-30%);
    }
    75% {
    		transform: translateX(-40%);
    }
    100% {
    		transform: translateX(-50%);
    }
 }
  .outputView .text {
      position: absolute;
      top:-6upx;
      left: 60upx;
      font-size:18upx;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:#fff;
      display: inline-block;
      width: 75upx;
  }
  .outputView .text .title{
    display: inline-block;
  }
  .ifLife{
    top:151upx;
    height: 48upx;
  }
  .ifLife image{
    width:44upx;
    height:60upx;
  }
  .ifLife .text{
    position: absolute;
    top:6upx;
    left: 60upx;
    font-size:18upx;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:#fff;
    display: inline-block;
    height: 50upx;
  }
  .tooltip{
    position: absolute;
    right: 107upx;
    bottom:290upx;
    width:164upx;
    height:78upx;
    transform: scale(0,0);
    -ms-transform: scale(0,0); 	/* IE 9 */
    -moz-transform: scale(0,0);	/* Firefox */
    -webkit-transform: scale(0,0); /* Safari 和 Chrome */
    -o-transform: scale(0,0); 	
  }
  .tooltip image{
    width:164upx;
    height:78upx;
  }
  .tooltipText{
    position: absolute;
    display: inline-block;
    width:130upx;
    height:53upx;
    font-size:14upx;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(236,242,253,1);
    line-height:20upx;
    left: 17upx;
    top:8upx
  }
</style>
