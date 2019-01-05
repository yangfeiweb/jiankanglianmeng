<template>
	<view class="content">
		<view class="title">
			<text>我的数据钱包地址</text>
			<image src="../../static/walletCode.png" mode=""></image>
			<text>识别二维码获得钱包地址</text>
			<button type="default">复制我的钱包地址</button>
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
	background-color:#fff;
}
.content{
	width: 100%;
	background-color:#fff;
}
.title{
	box-shadow:2upx 0upx 29upx 6upx rgba(186,225,229,0.4) inset;
	width: 100%;
	text-align: center;
	padding-top: 56upx;
}
.title text:nth-of-type(1){
	color: #333;
	font-weight:bold;
	font-size: 36upx;
}
.title text:nth-of-type(2){
	color: #333;
	font-weight:500;
	font-size: 28upx;
}
.title button{
	color: #fff;
	font-size: 36upx;
	width:675upx;
	height:89upx;
	background:rgba(37,162,222,1);
	border-radius:10upx;
	line-height: 89upx;
	margin-top: 51upx;
}
.title image{
	width: 337upx;
	height: 336upx;
	display: block;
	margin: 40upx auto 36upx;
}
</style>
