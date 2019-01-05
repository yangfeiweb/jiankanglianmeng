<template>
	<view class="content">
		<view class="warn">
			<image src="../../../static/warn.png" mode=""></image>
			<text>注意，本次生命果转出后无法取消，请核对好钱包地址。</text>
		</view>
		<view class="title">
			<view class="address">
				<text>钱包地址</text>
				<text v-if="address">地址错误</text>
				<input type="text" value="" placeholder="输入对方数据钱包地址" placeholder-class="place-holder"/>
				<image src="../../../static/scanqr.png" mode="" @tap="scanCode"></image>
			</view>
			<view class="address">
				<text>生命果数量</text>
				<input type="text" value="" placeholder="请输入转让果实个数" placeholder-class="place-holder"/>
			</view>
			<button type="default" @tap="turn">确认转出</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:true,
			};
		},
		methods:{
			scanCode(){
				uni.scanCode({
					success: function (res) {
						console.log('条码内容：' + res.result);
					}
				})
			},
			turn(){
				uni.navigateTo({
					url:'turnSuccess'
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
.warn{
	width: 100%;
	margin: 38upx 0 45upx 0;
	box-sizing: border-box;
	padding-left: 20upx;
}
.warn image{
	width: 35upx;
	height: 35upx;
	vertical-align: middle;
	margin-right: 12upx;
}
.warn text{
	font-size: 26upx;
	color: #3B90FF;
}
.place-holder {
    font-size: 28upx;
	color:#CDCCCC;
}
.title{
	width: 100%;
	padding: 0 17upx 0 22upx;
	box-sizing: border-box;
}
.address{
	position: relative;
	margin-bottom: 35upx;
}
.address text:nth-of-type(1){
	color: #333333;
	font-size: 34upx;
	display: inline-block;
	margin-bottom: 25upx;
}
.address text:nth-of-type(2){
	color: #F94857;
	font-size: 24upx;
	display: inline-block;
	margin-bottom: 25upx;
	margin-left:460upx ;
}
.address input {
	display:block;
	width: 680upx;
	height: 115upx;
	border:2px solid rgba(242,242,242,1);
	box-shadow:0upx 2upx 31upx 7upx rgba(222,222,243,0.21);
	padding-left: 25upx;
	color: #333;
	font-size: 28upx;
}
.address image{
	width: 48upx;
	height: 48upx;
	position: absolute;
	top:115upx;
	right: 35upx;
	z-index: 999;
}
.title button{
	width:675upx;
	height:89upx;
	background:rgba(37,162,222,1);
	border-radius:10upx;
	font-size: 36upx;
	color: #fff;
	line-height: 89upx;
	text-align: center;
	margin: 71upx auto 0;
}
</style>
