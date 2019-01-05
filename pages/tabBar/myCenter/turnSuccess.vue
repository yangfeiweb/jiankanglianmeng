<template>
	<view class="content">
		<view class="success">
			<text>恭喜转出成功</text>
			<image src="../../../static/turnSuccess.png" mode=""></image>
			<button type="default" @tap="back">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.redirectTo({
					url:'walletAddress'
				})
			}
		}
	}
</script>

<style>
page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
	background-color: #fff;
}
.content{
	width: 100%;
	height: 100%;
	/* background-color: #fcfcfd; */
}
.success{
	padding-top: 76upx;
	width: 100%;
	text-align: center;
}
.success text{
	display: block;
	color: #333;
	font-size: 40upx;
	margin-bottom: 18upx;
}
.success image{
	width: 738upx;
	height: 563upx;
	margin: 0 auto;
}
.success button{
	width:675upx;
	height:89upx;
	background:rgba(37,162,222,1);
	border-radius:10upx;
	margin-top: 45upx;
	color: #fff;
	font-size: 36upx;
	line-height: 89upx;
	text-align: center;
}
</style>
