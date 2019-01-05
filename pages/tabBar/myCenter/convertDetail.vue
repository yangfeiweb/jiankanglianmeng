<template>
	<view class="content">
		<!-- 顶部图片 -->
		<view class="topImg">
			<image src="../../../static/photo.png" mode=""></image>
		</view>
		<!-- 商品详情 -->
		<view class="detail">
			<view class="goods">
				<view class="left">
					精品双肩包
				</view>
				<view class="right">
					<text>x1份</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
			<view class="goods">
				<view class="goodsNum">
					兑换价格
				</view>
				<view class="goodsNum">
					<text>2300</text>
					<text>生命果</text>
				</view>
			</view>
			<view class="goods">
				<view class="goodsNum">
					兑换时间
				</view>
				<view class="goodsNum1">
					<text>2018-11-2 09:08</text>
				</view>
			</view>
		</view>
		<!-- 快递信息 -->
		<view class="detail">
			<view class="goods">
				<view class="goodsNum">
					快递公司
				</view>
				<view class="goodsNum1">
					<text>圆通速递</text>
				</view>
			</view>
			<view class="goods">
				<view class="goodsNum">
					快递单号
				</view>
				<view class="goodsNum">
					<text>JADFADJA-DADA</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
	background-color:#f5f5f5;
	/* padding-bottom:30upx; */
}
.topImg{
	text-align: center;
	background-color: #fff;
	height: 336upx;
	width: 100%;
	margin-bottom: 19upx;
}
.topImg image{
	width: 229upx;
	height: 267upx;
	margin: 35upx auto 0;
}
/* 商品详情 */
.detail {
	width: 100%;
	box-sizing: border-box;
	padding: 0 20upx 0 18upx;
	background-color: #fff;
	margin-bottom: 19upx;
}
.detail .goods{
	border-bottom: 1upx solid #f6f6f6;
	height: 80upx;
	display: flex;
	line-height: 80upx;
}
.detail .goods view{
	flex: 1;
}
.detail .goods view:nth-of-type(1){
	text-align: left;
	color: #333;
	font-size: 28upx;
	font-weight:500;
}
.detail .goods view:nth-of-type(2){
	text-align: right;
	color: #333;
	font-size: 28upx;
	
}
.detail .goods view:nth-of-type(2) text{
	color: #999;
	font-size: 28upx;
}
.detail .goods view:nth-of-type(2) image{
	width: 15upx;
	height: 27upx;
	vertical-align: middle;
	margin-left: 10upx;
}
.detail .goods .goodsNum:nth-of-type(1) text{
	color: #333;
	font-size: 24upx;
}
.detail .goods .goodsNum:nth-of-type(2) text:nth-of-type(1){
	color: #FF4F4F;
	font-size: 28upx;
	margin-right:10rpx;
	vertical-align:middle
}
.detail .goods .goodsNum:nth-of-type(2) text:nth-of-type(2){
	color: #999;
	font-size: 20upx;
}
.detail .goods .goodsNum1 text{
	color: #333;
	font-size: 24upx;
}
.detail .goods:nth-of-type(3){
	border: 0;
}
</style>
