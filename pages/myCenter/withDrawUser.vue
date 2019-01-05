<template>
	<view class="content">
		<!-- 有账户卡显示 -->
		<scroll-view v-if="list.length>0" scroll-y="true">
			<block>
				<view class="bank">
					<view class="top">
						<view class="img">
							<image src="../../static/aliPay.png" mode=""></image>
							<text>支付宝</text>
						</view>
						<view class="">
							<text>删除</text>
						</view>
					</view>
					<view class="name">
						<text>用户名:</text>
						<text>张三\n</text>
						<text>支付宝账号:</text>
						<text>12345678</text>
					</view>
				</view>
			</block>
		</scroll-view>
		<!-- 没有账户显示空白页 -->
		<view v-else class="bgImg">
			<image src="../../static/userBg.png" mode=""></image>
			<text>您还没有添加账户哦</text>
			<button type="default">添加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
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
page .content scroll-view::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#f4f4f4;
	padding-top: 10upx;
	/* padding-bottom:30upx; */
}
.content scroll-view{
	height: 100%;
	width: 100%;
	background-color: #fff;
}
.bank{
	width:642upx;
	height:312upx;
	background:linear-gradient(267deg,rgba(116,110,255,1),rgba(85,178,244,1));
	box-shadow:0upx 3upx 32upx 0upx rgba(208,207,207,1);
	border-radius:25upx;
	margin: 109upx 56upx 0 52upx;
}
.bank .top{
	height: 90upx;
	line-height: 90upx;
	display: flex;
	width: 100%;
	border-bottom: 1upx solid #EFEFEF;
	padding: 0 22upx;
	box-sizing: border-box;
}
.bank .top view:nth-of-type(1){
	flex: 1.5;
}
.bank .top view:nth-of-type(1) image{
	width: 38upx;
	height: 38upx;
	vertical-align: middle;
	margin-right: 6upx;
}
.bank .top view:nth-of-type(1) text{
	color: #fff;
	font-size: 28upx;
}
.bank .top view:nth-of-type(2) text{
	color: #fff;
	font-size: 26upx;
}
.bank .name{
	height: 221upx;
	/* line-height: 221upx; */
	padding-top: 60upx;
	box-sizing: border-box;
	padding-left: 174upx;
}
.bank .name text{
	color: #fff;
	font-size: 30upx;
}
.bgImg{
	background-color: #fff;
	width: 100%;
	text-align: center;
	padding-top: 198upx;
}
.bgImg image{
	width: 486upx;
	height: 325upx;
	display: block;
	margin: 0 auto;
	margin-bottom: 70upx;
}
.bgImg text{
	color: #908F8F;
	font-size: 30upx;
}
.bgImg button{
	width:604upx;
	height:82upx;
	background:rgba(81,158,247,1);
	box-shadow:0upx 3upx 32upx 0upx rgba(169,207,251,1);
	border-radius:5upx;
	text-align: center;
	line-height: 82upx;
	color: #fff;
	font-size: 30upx;
}
</style>
