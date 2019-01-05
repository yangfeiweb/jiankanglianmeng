<template>
	<view class="content">
		<!-- 顶部统计 -->
		<view class="top">
			<view class="tTop">
				<view class="left">
					<text>6666</text>
					<text>(体力)\n</text>
					<text>+20%产出增益</text>
				</view>
				<view class="right">
					<image src="../../../static/photo.png" mode=""></image>
					<text>MyName</text>
				</view>
			</view>
			<view class="tTitle">
				<view class="left">
					<image src="../../../static/temp.png" mode=""></image>
					<text>增加体力</text>
				</view>
				<view class="right">
					<image src="../../../static/hoof.png" mode=""></image>
					<text>生命果</text>
				</view>
			</view>
		</view>
		<!-- 列表记录 -->
		<view class="recordList">
			<view class="clear">
				<text>体力记录</text>
				<text>清除记录</text>
			</view>
			<view class="listPower">
				<view class="options">
					<text>类型</text>
					<text>时间</text>
					<text>数量</text>
				</view>
				<view class='scroll-view'>
					<view class="listP" v-for="(value,index) in list" :key="index">
						<view>
							<image src="../../../static/up.png" mode=""></image>
							<text>每日签到</text>
						</view>
						<view>
							<text>9/12</text>
						</view>
						<view>
							<text>+24</text>
							<text>限时体力</text>
						</view>
					</view>
					<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	export default {
		data(){
			return{
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		methods:{
			
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
			}, 2000);
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
}
page::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#f5fbfc;
	padding:38upx 10upx 0upx 10upx;
}
.content .top{
	width: 100%;
	box-sizing: border-box;
	height:332upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 5upx 39upx 10upx rgba(50,157,198,0.14);
	border-radius:15upx;
	padding-top:25upx;
}
.top .tTop{
	display:flex;
	margin-bottom:20rpx;
}
.top .tTop view{
	flex:1;
	text-align:center;
}
.top .tTop .left text:nth-of-type(1){
	font-size: 80upx;
	color:#333;
}
.top .tTop .left text:nth-of-type(2){
	font-size: 30upx;
	color:#0AC867;
}
.top .tTop .left text:nth-of-type(3){
	font-size: 30upx;
	color:#1296DB;
}
.top .tTop .right image{
	width:112upx;
	height:112upx;
	border-radius: 50%;
	display:block;
	margin:0 auto;
}
.top .tTitle{
	height: 97upx;
	display:flex;
	line-height:97upx;
}
.top .tTitle view{
	flex:1;
	height: 100%;
	text-align:center;
}
.top .tTitle .left{
	border-right:3upx solid #9FBAF8;
}
.top .tTitle text{
	font-size:30upx;
	color:#333;
}
.top .tTitle image{
	display:inline-block;
	vertical-align: middle;
}
.top .tTitle .left image{
	width:38upx;
	height:44upx;
	margin-right:22upx;
}
.top .tTitle .right image{
	width:45upx;
	height:45upx;
	margin-right:34upx;
}
/* 列表 */
.recordList{
	margin-bottom:30upx;
}
.recordList .clear{
	display:flex;
	height: 77upx;
	line-height:77upx;
}
.recordList .clear text{
	flex:1;
}
.recordList .clear text:nth-of-type(1){
	color:#333;
	font-size: 32upx;
	text-align:left;
	padding-left:20upx;
}
.recordList .clear text:nth-of-type(2){
	color:#1296DB;
	font-size: 28upx;
	text-align:right;
	padding-right:20upx;
}
.recordList .listPower{
	/* height:734upx; */
	box-shadow:0upx 3upx 49upx 0upx rgba(50,157,198,0.21);
	border-radius:10upx;
	background-color:#fff;

}
.recordList .listPower .scroll-view{
	height: 100%;
}
.recordList .listPower .options{
	display:flex;
	height: 64upx;
	line-height:64upx;
	
}
.recordList .listPower .options text{
	flex:1;
	color:#333;
	font-size: 30upx;
	text-align:center;
}
.recordList .listPower .listP{
	height: 82upx;
	line-height:82upx;
	border-top:2upx solid #F0F0F0;
	display:flex;
}
.recordList .listPower .listP view{
	flex:1;
}
.recordList .listPower .listP view:nth-of-type(1){
	text-align:left;
	padding-left:15upx;

}
.recordList .listPower .listP view:nth-of-type(1) image{
	width: 32upx;
	height: 32upx;
	vertical-align: middle;
	margin-right:22upx;
}
.recordList .listPower .listP view:nth-of-type(1) text{
	color:#333;
	font-size: 26upx;
}
.recordList .listPower .listP view:nth-of-type(2){
	text-align:center;
}
.recordList .listPower .listP view:nth-of-type(2) text{
	color:#000033;
	font-size: 26upx;
}
.recordList .listPower .listP view:nth-of-type(3){
	text-align:right;
	padding-right:30rpx;
}
.recordList .listPower .listP view:nth-of-type(3) text{
	color:#333;
	font-size: 28upx;
}
.recordList .listPower .listP view:nth-of-type(3) text:nth-of-type(1){
	margin-right:15upx;
}
</style>
