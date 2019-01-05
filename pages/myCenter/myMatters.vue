<template>
	<view class="content">
		<!-- 大标题 -->
		<view class="scsj">
			<view class="title">
				<view class="">
					<text>充值中心\n</text>
					<text>查看我的充值记录</text>
				</view>
				<view class="">
					<image src="../../../static/moneyBg.jpg" mode=""></image>
				</view>
			</view>
			<!-- 五个筛选 -->
			<view class="choiceFour">
				<text data-type='0' :class="type==0? 'active' : ''" @tap='selectTab'>全部</text>
				<text data-type='1' :class="type==1? 'active' : ''" @tap='selectTab'>充值</text>
				<text data-type='2' :class="type==2? 'active' : ''" @tap='selectTab'>提现</text>
				<text data-type='3' :class="type==3? 'active' : ''" @tap='selectTab'>失效</text>
			</view>
		</view>
		<!-- 理财推荐列表 -->
		<view class="list">
			<view class='scroll-view'>
				<view class="health" v-for="(value,index) in list" :key="index">
					<view class="top">
						<view>
							<text>健康金最新优质理财</text>
						</view>
						<view class="">
							<text v-if="type==1">充值成功</text>
							<text v-if="type==2">提现成功</text>
							<text v-if="type==3" class="cancel">失效订单</text>
						</view>
					</view>
					<view class="middle">
						<view>
							<text>3000元\n</text>
							<text>商品成本价额度</text>
						</view>
						<view>
							<text>微信\n</text>
							<text>充值方式</text>
						</view>
						<view>
							<text>2018.9.15\n</text>
							<text>时间</text>
						</view>
					</view>
					<view class="bottom">
						<progress percent="50" color="#6984FF" active width='611upx' height='7upx' border-radius='4upx'/>
					</view>
					<view class="foot">
						<text>剩余金额1500元\n</text>
						<text>50%</text>
					</view>
				</view>
				<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			</view>
		</view>
	  <!-- 弹窗 -->
	  <view class="toast" v-if="toast">
	   	<view class="main">
	   		<view class="top1">
	   			<image src="../../../static/delOrder.png" mode=""></image>
	   			<text v-if="type==1">(取消定期订单会失去所有利息！)</text>
				<text v-if="type==2">(取消活期订单只收益部分利息！)</text>
	   		</view>
	   		<view class="bottom1">
	   			<text @tap="confrim">确定</text>
	   			<text @tap="cancel">取消</text>
	   		</view>
	   	</view>
	   </view>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	export default {
		data() {
			return {
				type:1,
				toast:false,
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
		},
		methods: {
			selectTab(e){
				this.type = e.currentTarget.dataset.type;
				console.log(this.type)
			},
			cancelOrder(){
				this.toast=true;
			},
			confrim(){
				this.toast=false;
			},
			cancel(){
				this.toast=false;
			},
		},
		onLoad() {
			let list = [];
			for (let i = 1; i < 11; i++) {
				list.push(i);
			}
			this.list = list;
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let list = [],
				maxItem = this.list[this.list.length - 1],
				length = maxItem + 6;
			for (let i = maxItem + 1; i < length; i++) {
				list.push(i);
			}
			setTimeout(() => {
				if (length > 26) {
					this.loadingType = 2;
					return;
				}
				this.list = this.list.concat(list);
				this.loadingType = 0;
			}, 1500);
		},
		components: {
			loadMore
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color:#fff;
}
page .content scroll-view::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#fff;
	/* box-sizing: border-box;
	padding: 0 40upx; */
	/* padding-bottom:30upx; */
}
.content .scsj{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
	background-color: #fff;
}
.title{
	width:667upx;
	height:160upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 29upx 6upx rgba(189,231,235,0.41);
	border-radius:19upx;
	margin: 44upx auto 35upx;
	display: flex;
	/* position: relative; */
}
.title view:nth-of-type(2){
	width: 310upx;
	height: 160upx;
	text-align: right;
	/* padding-right: 26upx; */
}
.title view:nth-of-type(2) image{
	width: 310upx;
	height: 160upx;
}
.title view:nth-of-type(1){
	/* position: absolute;
	top: 40upx;
	left: 34upx; */
	text-align: left;
	padding-left: 34upx;
	padding-top:40rpx;
	width:316upx
}
.title view text{
	color: #6974E9;
}
.title view text:nth-of-type(1){
	font-size: 34upx;
}
.title view text:nth-of-type(2){
	font-size: 24upx;
}
/* 四个选项 */
.choiceFour{
	display: flex;
	height: 80upx;
	line-height: 80upx;
	/* padding: 0 20upx; */
	box-sizing: border-box;
	justify-content: space-between;
	margin-bottom: 22upx;
}
.choiceFour text{
	color: #333;
	font-size: 30upx;
	flex: 1;
	height: 100%;
	text-align: center;
}
.choiceFour .active{
	color: #4486FD;
	position: relative;
}
.choiceFour .active::before{
	position: absolute;
	content: "";
	bottom: 0;
	width: 59upx;
	height: 6upx;
	background-color: #539EF6;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 3upx;
}
.list{
	width: 100%;
	box-sizing: border-box;
	padding-top: 325upx;
}
.list .scroll-view{
	width: 100%;
}
.list .scroll-view::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.list .scroll-view .health{
	width:667upx;
	height:292upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 29upx 6upx rgba(189,231,235,0.41);
	border-radius:19upx;
	margin: 22upx auto 42upx;
	padding-top: 24upx;
}
.list .scroll-view .health .top{
	display: flex;
	width: 100%;
}
.list .scroll-view .health .top view:nth-of-type(1){
	flex: 1.5;
	text-align: left;
	padding-left: 30upx;
}
.list .scroll-view .health .top view:nth-of-type(1) text:nth-of-type(1){
	color: #666;
	font-size: 30upx;
}
.list .scroll-view .health .top view:nth-of-type(1) text:nth-of-type(2){
	width:64upx;
	height:31upx;
	border:2upx solid rgba(86,141,233,1);
	border-radius:5upx;
	color: #568DE9;
	font-size: 24upx;
	margin-left: 17upx;
	text-align: center;
	line-height: 31upx;
}
.list .scroll-view .health .top view:nth-of-type(1) .life{
	width:64upx;
	height:31upx;
	border:2upx solid #999!important;
	border-radius:5upx;
	color: #999!important;
	font-size: 24upx;
	margin-left: 17upx;
	text-align: center;
	line-height: 31upx;
}
.list .scroll-view .health .top view:nth-of-type(2){
	flex: .5;
	text-align: right;
	padding-right: 21upx;
}
.list .scroll-view .health .top view:nth-of-type(2) text{
	color: #6984FF;
	font-size: 26upx;
}
.list .scroll-view .health .top view:nth-of-type(2) .cancel{
	color: #999;
	font-size: 26upx;
}
.list .scroll-view .health .middle{
	display: flex;
	width: 100%;
	margin-top: 25upx;
	justify-content: space-between;
	margin-bottom: 25upx;
}
.list .scroll-view .health .middle view{
	flex: 1;
	text-align: center;
}
.list .scroll-view .health .middle view:nth-of-type(1){
	text-align: left;
	padding-left: 30upx;
}
.list .scroll-view .health .middle view:nth-of-type(3){
	/* text-align: right; */
	padding-right: 29upx;
}
.list .scroll-view .health .middle view text:nth-of-type(1){
	color: #6984FF;
	font-size: 40upx;
}
.list .scroll-view .health .middle view text:nth-of-type(2){
	color: #999;
	font-size: 24upx;
}
.list .scroll-view .health .bottom{
	width: 100%;
	box-sizing: border-box;
	padding: 0 28upx;
	margin-bottom: 15upx;
}
/* .list scroll-view .health .bottom progress{
	width:611upx;
	
} */
.list .scroll-view .health .foot{
	display: flex;
	width: 100%;
}
.list .scroll-view .health .foot text{
	color: #666;
	flex: 1;
	font-size: 28upx;
}
.list .scroll-view .health .foot text:nth-of-type(1){
	text-align: left;
	padding-left: 30upx;
}
.list .scroll-view .health .foot text:nth-of-type(2){
	text-align: right;
	padding-right: 30upx;
}
/* 弹窗 */
.toast{
	position:fixed;
	top:0;
	width: 100%;
	height: 100%;
	background:rgba(0, 0, 0, 0.4);
	z-index:9999;
}
.toast .main{
	background-color: #fff;
	height: 475upx;
	width: 539upx;
	margin:320upx 0 0 106upx;
	border-radius:28upx;
	box-sizing:border-box;
	/* padding-left:36upx; */
}
.toast .main .top1{
	width: 100%;
	text-align: center;
	padding-top: 65upx;
}
.toast .main .top1 image{
	width: 256upx;
	height: 239upx;
	display: block;
	margin: 0 auto;
	margin-bottom: 15upx;
}
.toast .main .top1 text{
	color: #1296DB;
	font-size: 26upx;
}
.toast .main .bottom1{
	height: 83upx;
	line-height: 83upx;
	margin-top: 24upx;
	border-top: 2upx solid #F4F2F2;
	display: flex;
	width: 100%;
}
.toast .main .bottom1 text{
	flex: 1;
	color: #000033;
	font-size: 30upx;
	text-align: center;
}
.toast .main .bottom1 text:nth-of-type(1){
	border-right: 2upx solid #F4F2F2;
}
</style>
