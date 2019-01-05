<template>
	<view class="content">
		<view v-if="list.length">
			<view class="list" v-for="(value,index) in list" :key="index">
				<view class="img">
					<image src="../../../static/photo.png" mode=""></image>
				</view>
				<navigator url="goodsDetail" class="right">
					<view>
						<text>精选黑色双肩背包\n</text>
						<text>6666</text>
						<text>生命果</text>
					</view>
					<view>
						<image src="../../../static/blackArrow.png" mode=""></image>
					</view>
				</navigator>
			</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 没有订单显示空状态 -->
		<view v-else class="empty">
			<image src="../../../static/empty.png" mode=""></image>
			<text>您还没有兑换记录哦</text>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../../components/load-more.vue'
	export default {
		data() {
			return {
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
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
			}, 800);
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
	height: 100%;
	background-color:#fff;
	/* padding-bottom:30upx; */
}
.content scroll-view{
	height: 100%;
	width: 100%;
}
.list{
	width: 100%;
	position: relative;
	height: 166upx;
	border-bottom: 1upx solid #f7f7f8;
}
.list .img{
	position: absolute;
	text-align: center;
	width: 141upx;
	height: 106upx;
	top: 30upx;
	left: 20upx;
	border: 1upx solid #f7f7f8;
}
.list .img image{
	width: 83upx;
	height: 97upx;
	margin: 7upx auto 0;
}
.list .right{
	height: 100%;
	/* width: 100%; */
	margin-left: 200upx;
	display: flex;
	box-sizing: border-box;
	padding-top: 35upx;
}
.list .right view:nth-of-type(1) text:nth-of-type(1){
	color: #333;
	font-size: 24upx;
}
.list .right view:nth-of-type(1) text:nth-of-type(2){
	color: #ff4f4f;
	font-size: 30upx;
}
.list .right view:nth-of-type(1) text:nth-of-type(3){
	color: #666;
	font-size: 22upx;
}
.list .right view:nth-of-type(1){
	width: 450upx;
}
.list .right view:nth-of-type(2){
	text-align: right;
	width: 100upx;
	padding-right:30upx;
}
.list .right view:nth-of-type(2) image{
	width: 15upx;
	height: 27upx;
	margin-top:40rpx;
	margin-left:20rpx;
}
/* 空白页 */
.empty{
	width: 100%;
	background-color: #fff;
	padding-top: 178upx;
	text-align: center;
}
.empty image{
	width: 453upx;
	height: 340upx;
	display: block;
	margin: 0 auto;
	margin-bottom: 42upx;
}
.empty text{
	color: #908F8F;
	font-size: 30upx;
}
</style>
