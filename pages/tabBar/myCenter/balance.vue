<template>
	<view class="content">
		<!-- 余额 -->
		<view class="balance">
			<view class="img">
				<image src="../../../static/personalBg.png" mode=""></image>
			</view>
			<view class="money">
				<text>0.00\n</text>
				<text>余额(元)</text>
			</view>
		</view>
		<!-- 充值 和提现-->
		<view class="recharge">
			<navigator url="recharge" class="withdraw">
				<view>
					<image src="../../../static/recharge.png" mode=""></image>
					<text>充值</text>
				</view>
				<view>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
			<navigator url="withdraw" class="withdraw">
				<view>
					<image src="../../../static/withardw.png" mode=""></image>
					<text>提现</text>
				</view>
				<view>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
		</view>
		<!-- 体现和充值记录 -->
		<view class="list">
			<view class="detail">
				<view>
					<text>余额明细</text>
				</view>
				<view>
					<text>查看全部</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
			<!-- liebiao -->
			<view class="scroll-view">
				<block>
					<view class="title" v-for="(value,index) in list" :key="index">
						<view>
							<text>+100\n</text>
							<text>充值</text>
						</view>
						<view>
							<text>成功\n</text>
							<text>2018.10.31.14:41</text>
						</view>
					</view>
					<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
				</block>
			</view>
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
}
page::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#F4FAFC;
	/* padding-bottom:30upx; */
}
/* 顶部余额 */
.balance{
	position: relative;
	width: 100%;
}
.balance .img{
	width: 100%;
	height: 432upx;
}
.balance .img image{
	width: 100%;
	height: 100%;
}
.balance .money{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	text-align: center;
}
.balance .money text{
	color: #ffffff;
}
.balance .money text:nth-of-type(1){
	font-size: 80upx;
	display: block;
	margin-bottom: 64upx;
	margin-top: 99upx;
}
.balance .money text:nth-of-type(2){
	font-size: 30upx;
}
/* 充值和提现 */
.recharge{
	background-color: #ffffff;
}
.recharge .withdraw {
	border-bottom: 1upx solid #f0f0f0;
	display: flex;
	width: 100%;
	height: 104upx;
	line-height: 104upx;
	box-sizing: border-box;
}
.recharge .withdraw:nth-of-type(2){
	border-bottom: 0;
}
.recharge .withdraw view{
	flex: 1;
}
.recharge .withdraw:nth-of-type(1) view:nth-of-type(1) image{
	width: 47upx;
	height: 47upx;
	vertical-align: middle;
	margin-right: 24upx;
}
.recharge .withdraw view:nth-of-type(2) image{
	width: 15upx;
	height: 27upx;
	vertical-align: middle;
}
.recharge .withdraw:nth-of-type(2) view:nth-of-type(1) image{
	width: 48upx;
	height: 49upx;
	vertical-align: middle;
	margin-right: 24upx;
}
.recharge .withdraw view text{
	color: #333;
	font-size: 28upx;
}
.recharge .withdraw view:nth-of-type(1){
	text-align: left;
	padding-left: 42upx;
}
.recharge .withdraw view:nth-of-type(2){
	text-align: right;
	padding-right: 39upx;
}
/* 余额详细 */
.list{
	box-sizing: border-box;
	padding: 0 11upx;
	width: 100%;
}
.list .detail{
	display: flex;
	width: 100%;
	height: 72upx;
	line-height: 72upx;
}
.list .detail view{
	flex: 1;
}
.list .detail view:nth-of-type(1){
	text-align: left;
	padding-left: 28upx;
}
.list .detail view:nth-of-type(1) text{
	color: #1296DB;
	font-size: 30upx;
}
.list .detail view:nth-of-type(2) text{
	color: #9A9A9A;
	font-size: 26upx;
}
.list .detail view:nth-of-type(2) image{
	width: 15upx;
	height: 27upx;
	vertical-align: middle;
	margin-left: 7upx;
}
.list .detail view:nth-of-type(2){
	text-align: right;
	padding-right: 30upx;
}
.list .scroll-view{
	/* height:583upx; */
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 37upx 1upx rgba(50,157,198,0.3);
	border-radius:10upx;
	width: 100%;
	margin: 0 auto;
}
.list .scroll-view .title{
	display: flex;
	width: 100%;
	border-bottom: 2upx solid #f0f0f0;
}
.list .scroll-view .title view{
	flex: 1;
}
.list .scroll-view .title view text{
	color: #333;
	font-size: 26upx;
}
.list .scroll-view .title view text:nth-of-type(2){
	color: #999;
	font-size: 22upx;
}
.list .scroll-view .title view:nth-of-type(1){
	text-align: left;
	padding-left: 28upx;
}
.list .scroll-view .title view:nth-of-type(2){
	text-align: right;
	padding-right: 30upx;
}
</style>
