<template>
	<view class="content">
		<view class="wx">
			<view class="login" @tap="toBind">
				<view class="">
					<image src="../../static/wxPay.png" mode=""></image>
					<text>微信</text>
				</view>
				<view class="">
					<image src="../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<view class="toast" v-if="toast">
			<view class="main">
				<view class="top">
					确定要解绑微信吗？
				</view>
				<view class="btn">
					<text @tap="cancel">取消</text>
					<text @tap="confirm">确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toast:false
			};
		},
		methods:{
			toBind(){
				this.toast=true
			},
			cancel(){
				this.toast=false
			},
			confirm(){
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.authResult);
						this.toast=false
					}
				});
			},
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
	/* height: 1726upx; */
	background-color:#f4f4f4;
	/* padding-bottom:30upx; */
	padding-top: 10upx;
}
.wx{
	width: 100%;
	background-color: #fff;
	padding: 0 34upx 0 30upx;
	box-sizing: border-box;
	
}
.wx .login{
	height: 104upx;
	line-height: 104upx;
	display: flex;
	border-bottom: 1upx solid #EFEFEF;
}
.wx .login view{
	flex: 1;
}
.wx .login view:nth-of-type(1){
	text-align: left;
}
.wx .login view:nth-of-type(1) image{
	width: 30upx;
	height: 30upx;
	vertical-align: middle;
	margin-right: 10upx;
}
.wx .login view text{
	color: #333;
	font-size: 28upx;
}
.wx .login view:nth-of-type(2){
	text-align: right;
}
.wx .login view:nth-of-type(2) image{
	width: 10upx;
	height: 17upx;
}
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
	height: 218upx;
	width: 454upx;
	margin:320upx 0 0 146upx;
	border-radius:28upx;
	box-sizing:border-box;
	/* padding-left:36upx; */
}
.toast .main .top{
	height: 90upx;
	text-align: center;
	padding-top: 50upx;
}
.toast .main .top text{
	color: #333;
	font-weight:500;
	font-size: 28upx;
}
.toast .main .btn{
	height: 77upx;
	line-height: 77upx;
	border-top: 2upx solid #F4F2F2;
	display: flex;
	width: 100%;
}
.toast .main .btn text{
	flex: 1;
	color: #4C94ED;
	font-size: 26upx;
	text-align: center;
}
.toast .main .btn text:nth-of-type(1){
	border-right: 2upx solid #F4F2F2;
}
</style>
