<template>
	<view class="content">
		<view class="list">
			<view class="phone">
				<text>当前账号</text>
				<navigator>
					<text>15899999999</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="phone">
				<text>微信绑定</text>
				<navigator url="bindWx">
					<text>已绑定</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
		</view>
		<!-- 体现账户 -->
		<view class="list">
			<view class="phone">
				<text>提现账户</text>
				<navigator url="withDrawUser">
					<text>未设置</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="phone">
				<text>登录密码</text>
				<navigator url="../tabBar/myCenter/loginPwd">
					<text>未设置</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="phone">
				<text>支付密码</text>
				<navigator url="../tabBar/myCenter/rank">
					<text>未设置</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
		</view>
		<!-- 版本更新 -->
		<view class="list">
			<view class="phone">
				<text>版本更新</text>
				<navigator url="system">
					<text>1.0</text>
					<image src="../../static/rightArrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="btn">
				<button type="default">退出登录</button>
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
	background-color:#fff;
}
page::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#F3F3F3;
	padding-top:6upx;
}
.list{
	background-color: #fff;
	padding: 0 36upx 0 31upx;
	width: 100%;
	box-sizing: border-box;
}
.list .phone{
	display: flex;
	height: 92upx;
	line-height: 92upx;
	border-bottom: 1upx solid #EFEFEF;
}
.list .phone text{
	flex: 1;
	color: #333;
	font-size: 28upx;
	text-align: left;
}
.list .phone navigator{
	flex: 1;
	text-align: right;
}

.list .phone navigator text{
	color:#B5B3B3;
	font-size: 22upx;
}
.list .phone navigator image{
	width: 10upx;
	height: 17upx;
	margin-left: 9upx;
	vertical-align: middle;
}
.list:nth-of-type(1){
	margin-top: 6upx;
}
.list:nth-of-type(2){
	margin-top: 15upx;
}
.list:nth-of-type(3){
	margin-top: 15upx;
}
.list:nth-of-type(1) .phone:nth-of-type(2){
	border: 0;
}
.list:nth-of-type(2) .phone:nth-of-type(3){
	border: 0;
}
.list .btn{
	margin-top: 154upx;
	width: 100%;
}
.list .btn button{
	width:604upx;
	height:82upx;
	background:rgba(81,158,247,1);
	box-shadow:0upx 3upx 32upx 0upx rgba(169,207,251,1);
	border-radius:5upx;
	color: #fff;
	font-size: 36upx;
	line-height: 82upx;
	text-align: center;
	margin: 0 auto;
}
</style>
