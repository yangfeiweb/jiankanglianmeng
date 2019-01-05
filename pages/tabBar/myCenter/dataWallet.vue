<template>
	<view class="content">
		<view class="wallet">
			<view class="photo">
				<image src="../../../static/photo.png" mode=""></image>
			</view>
			<!-- 背景颜色 -->
			<view class="bgc">
			</view>
			<!-- 钱包数据 -->
			<view class="main">
				<text>myName</text>
				<text>6666</text>
				<text>可交易的生命果</text>
				<text>昨日市场成交价</text>
				<image src="../../../static/broken.png" mode=""></image>
				<view class="bMian">
					<view class="">
						<text>最高价</text>
						<text>￥15.67元/个</text>
					</view>
					<view class="">
						<text>最低价</text>
						<text>￥5.67元/个</text>
					</view>
				</view>
			</view>
			<!-- 钱包二维码 -->
			<view class="qrcode">
				<image src="../../../static/qrcode.png" mode=""></image>
				<text>钱包地址</text>
			</view>
			<!-- 转让和记录 -->
			<view class="turn">
				<navigator url="walletAddress" class="tLeft">
					<image src="../../../static/turn.png" mode=""></image>
					<text>转让生命果</text>
				</navigator>
				<navigator url="discounts" class="tRight">
					<image src="../../../static/log.png" mode=""></image>
					<text>钱包记录</text>
				</navigator>
			</view>
		</view>
		<!-- 钱包列表 -->
		<view class="wList">
			<view class="title">
				钱包记录
			</view>
			<view id="list" class="active" v-for="(value,index) in list" :key="index">
				<view class="">
					<text>转让</text>
					<text>11月13日 11:17</text>
				</view>
				<view class="">
					<text>+888生命果</text>
					<text>aaaaaaaaa</text>
				</view>
			</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
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
		// 获取页面的参数
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
page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
	background-color: #fcfcfd;
}

page::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
.content{
	width: 100%;
	height: 100%;
	/* background-color: #fcfcfd; */
}
.wallet{
	width: 100%;
	position: relative;
}
/* 头像 */
.wallet .photo{
	position: absolute;
	top: 0;
	left: 50%;
	height: 130upx;
	width: 130upx;
	border-radius: 50%;
	z-index: 999;
	transform: translateX(-50%);
}
.wallet .photo image{
	width: 100%;
	height: 100%;
}
/* 钱包地址 */
.wallet .qrcode{
	position: absolute;
	top: 82upx;
	right: 69upx;
	z-index: 999;
	text-align: center;
}
.wallet .qrcode image{
	width: 54upx;
	height: 54upx;
	display: block;
	margin: 0 auto;
}
.wallet .qrcode text{
	color: #659BFD;
	font-size: 24upx;
}
/* 背景颜色 */
.wallet .bgc{
	background-color: #659bfd;
	height: 408upx;
	width: 100%;
}
/* 钱包数据 */
.wallet .main{
	position: absolute;
	width:699upx;
	/* height:479upx; */
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 74upx 2upx rgba(101,155,253,0.21);
	border-radius:15upx;
	left: 26upx;
	top: 53upx;
	text-align: center;
	padding-bottom: 39upx;
}
.wallet .main text{
	display: block;
}
.wallet .main text:nth-of-type(1){
	color: #15144A;
	font-size: 30upx;
	margin: 95upx 0 0upx 0;
}
.wallet .main text:nth-of-type(2){
	color: #4882ED;
	font-size: 80upx;
}
.wallet .main text:nth-of-type(3){
	color: #D9D9D9;
	font-size: 24upx;
	margin: 0upx 0 28upx 0;
}
.wallet .main text:nth-of-type(4){
	color: #1C1E48;
	font-size: 24upx;
	display: inline-block;
	margin-right: 17upx;
}
.wallet .main image{
	width: 43upx;
	height: 44upx;
	vertical-align: top;
}
/* 最高价和最低价 */
.wallet .main .bMian{
	width: 100%;
	display: flex;
	margin-top:35upx;
	/* height: 68upx; */
}
.wallet .main .bMian view{
	flex: 1;
	text-align: center;
}
.wallet .main .bMian view:nth-of-type(1){
	border-right: 2upx solid #D9D9D6;
}
.wallet .main .bMian view text{
	display: block;
	margin: 0;
}
.wallet .main .bMian view text:nth-of-type(1){
	color: #DFDFDF;
	font-size: 24upx;
}
.wallet .main .bMian view text:nth-of-type(2){
	color: #659BFD;
	font-size: 30upx;
}
/* 转让生命果 */
.wallet .turn{
	width: 100%;
	padding: 0 25upx 0 27upx;
	display: flex;
	box-sizing: border-box;
	margin-top:225upx ;
}
.wallet .turn navigator{
	width: 329upx;
	height: 226upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 74upx 2upx rgba(241,241,249,1);
	border-radius:10upx;
	text-align: center;
}
.wallet .turn navigator image {
	display: block;
	margin: 45upx auto 36upx;
}
.wallet .turn .tLeft image{
	width: 57upx;
	height: 57upx;
}
.wallet .turn .tRight image{
	width: 50upx;
	height: 52upx;
}
.wallet .turn navigator text{
	color: #67667A;
	font-size: 28upx;
}
.wallet .turn .tRight {
	margin-left: 40upx;
}
/* 钱包记录 */
.wList{
	width: 100%;
	box-sizing: border-box;
	padding: 0 25upx 0 27upx;
}
.wList #list{
	height: 176upx;
	width: 698upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 74upx 2upx rgba(241,241,249,1);
	border-radius:10upx;
	display: flex;
	border-bottom:2upx solid #EDEDF9;
}
.wList .active {
    position: relative;
}
.wList .active view:nth-of-type(2) text:nth-of-type(1){
	color: #EBA268;
}
.wList .active1 view:nth-of-type(2) text:nth-of-type(1){
	color: #659BFD;
}
.active::before {
    position: absolute;
    content: "";
    width: 4upx;
    height: 86upx;
    background-color: #EBA268;
    left: 0;
	top: 46upx;
    /* transform: translateX(-50%); */
    border-radius: 2upx;
}
.wList .active1 {
    position: relative;
}

.active1::before {
    position: absolute;
    content: "";
    width: 4upx;
    height: 86upx;
    background-color: #659BFD;
    left: 0;
	top: 46upx;
    /* transform: translateX(-50%); */
    border-radius: 2upx;
}
.wList .title{
	height: 75upx;
	line-height: 75upx;
	font-size: 30upx;
	color: #659BFD;
	box-sizing: border-box;
	padding-left: 28upx;
}
.wList #list view{
	flex: 1;
}
.wList #list view:nth-of-type(1){
	text-align: left;
	padding-left: 45upx;
}
.wList #list view:nth-of-type(2){
	text-align: right;
	padding-right: 45upx;
}
.wList #list view:nth-of-type(1) text:nth-of-type(1){
	color: #5D5C78;
	font-size: 36upx;
	display: block;
	margin:35rpx 0 0rpx 0
}
.wList #list view:nth-of-type(1) text:nth-of-type(2){
	color: #CAC8C8;
	font-size: 26upx;
}
.wList #list view:nth-of-type(2) text:nth-of-type(1){
	font-size: 36upx;
	display: block;
	margin:35rpx 0 0rpx 0
}
.wList #list view:nth-of-type(2) text:nth-of-type(2){
	color: #CAC8C8;
	font-size: 26upx;
}
</style>
