<template>
	<view class="content">
		<!-- 顶部设置 -->
		<view class="setting">
			<view class="setImg">
				<image src="../../../static/personalBg.png" mode=""></image>
			</view>
			<!-- 个人头像等信息 -->
			<view class="personal">
				<!-- 头像上 -->
				<view class="pPhoto">
					<view class="pImg">
						<image src="../../../static/photo.png" mode=""></image>
					</view>
					<view class="pLeft">
						<text>MyName</text>
						<image src="../../../static/vip.png" mode=""></image>
						<text>LV.1\n</text>
						<text>ID:15899999999</text>
					</view>
					<!-- <view class="set">
						<image src="../../../static/setting.png" mode=""></image>
					</view> -->
				</view>
				<!-- 下面的三个模块 -->
				<view class="life">
					<view class="lTop">
						<view>
							<text>生命果\n</text>
							<text>66666</text>
						</view>
						<view>
							<text>余额\n</text>
							<text>666666666</text>
						</view>
						<view>
							<text>体力\n</text>
							<text>6666</text>
						</view>
					</view>
					<view class="lBottom">
						<navigator url="../../myCenter/healthBank">
							<image src="../../../static/bankHealth.png" mode=""></image>
							<text>充值中心</text>
						</navigator>
						<navigator url="balance">
							<image src="../../../static/dataWallet.png" mode=""></image>
							<text>生命果交易</text>
						</navigator>
						<navigator url="dataWallet">
							<image src="../../../static/wallet.png" mode=""></image>
							<text>数据钱包</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<!-- 设置列表 -->
		<view class="list">
			<navigator url="../healthyMall/healthyMall" class="flexs">
				<view class="Fleft">
					<image src="../../../static/healthMall.png" mode=""></image>
					<text>健康商城</text>
				</view>
				<view class="Fright">
					<text>订单更新</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
			<navigator url="myCoupon" class="flexs">
				<view class="Fleft">
					<image src="../../../static/redPacket.png" mode=""></image>
					<text>红包/卡券</text>
				</view>
				<view class="Fright">
					<text>订单更新</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
			<navigator url="../myCenter/balance" class="flexs">
				<view class="Fleft">
					<image src="../../../static/idCard.png" mode=""></image>
					<text>提现交易</text>
				</view>
				<view class="Fright">
					<text>订单更新</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
			<navigator url="../myCenter/lifeMall" class="flexs">
				<view class="Fleft noBorder">
					<image src="../../../static/lifeFrit.png" mode=""></image>
					<text>生命果商城</text>
				</view>
				<view class="Fright">
					<text>订单更新</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
			<navigator url="../../healthyMall/shippingAddress" class="flexs">
				<view class="Fleft noBorder">
					<image src="../../../static/getGoods.png" mode=""></image>
					<text>收货地址</text>
				</view>
				<view class="Fright">
					<text>订单更新</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
		</view>
		<view class="goSetting">
			<navigator url="../../myCenter/setting" class="flexs">
				<view class="Fleft">
					<image src="../../../static/sete.png" mode=""></image>
					<text>设置</text>
				</view>
				<view class="Fright">
					<text>新版本</text>
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
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
	background-color:#fff;
	padding-bottom:30upx;
}
/* 顶部设置 */
.setting{
	width: 100%;
	position: relative;
}
.setting .setImg{
	width: 100%;
	height: 432upx;
}
.setting .setImg image{
	height: 100%;
	width: 100%;
}
/* 头像部分设置 */
.setting .personal{
	position: absolute;
	top:0upx;
	width: 100%;
	z-index:999
}
.setting .personal .pPhoto{
	width: 100%;
	position: relative;
	margin-top: 45upx;
}
.setting .personal .pPhoto .pImg{
	width: 130upx;
	height: 130upx;
	border-radius: 50%;
	position: absolute;
	top:30upx;
	left: 61upx;
}
.setting .personal .pPhoto .pImg image{
	width: 100%;
	height: 100%;
}
/* 头像左边设置 */
.setting .personal .pPhoto .pLeft{
	margin-left: 215upx;
	padding-top: 45upx;
	box-sizing: border-box;
}
.setting .personal .pPhoto .pLeft image{
	width: 22upx;
	height: 18upx;
	vertical-align: middle;
}
.setting .personal .pPhoto .pLeft text{
	color: #fff;
}
.setting .personal .pPhoto .pLeft text:nth-of-type(1){
	font-size: 36upx;
	margin-right: 20upx;
}
.setting .personal .pPhoto .pLeft text:nth-of-type(2){
	font-size: 14upx;
	font-style: italic;
}
.setting .personal .pPhoto .pLeft text:nth-of-type(3){
	font-size: 22upx;
}
.setting .personal .pPhoto .set{
	position: absolute;
	right: 87upx;
	top: 76upx;
}
.setting .personal .pPhoto .set image{
	width: 29upx;
	height: 29upx;
}
/* 生命果等设置 */
.setting .personal .life{
	width: 699upx;
	height:292upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 24upx 3upx rgba(85,144,214,0.2);
	border-radius:27upx;
	margin: 88upx 30upx 0 21upx;
}
.setting .personal .life .lTop{
	display: flex;
	height: 150upx;
	/* line-height: 145upx; */
	text-align: center;
	padding-top:35rpx;
	border-bottom: 2upx dashed #EEEDF4;
	box-sizing: border-box;
}
.setting .personal .life .lTop view{
	flex: 1;
	height: 100%;
}
.setting .personal .life .lTop view text:nth-last-of-type(1){
	color: #333;
	font-size: 26upx;
}
.setting .personal .life .lTop view text:nth-last-of-type(2){
	color: #98979C;
	font-size: 32upx;
}
.setting .personal .life .lBottom{
	display: flex;
	height: 123upx;
	/* line-height: 145upx; */
	text-align: center;
	padding-top:23rpx;
	/* border-bottom: 2upx dashed #EEEDF4; */
}
.setting .personal .life .lBottom navigator{
	flex: 1;
	height: 100%;
}
.setting .personal .life .lBottom navigator image{
	display: inline-block;
	margin: 0 auto;
}
.setting .personal .life .lBottom navigator:nth-of-type(1) image{
	width: 69upx;
	height: 63upx;
}
.setting .personal .life .lBottom navigator:nth-of-type(2) image{
	width: 64upx;
	height: 59upx;
}
.setting .personal .life .lBottom navigator:nth-of-type(3) image{
	width: 58upx;
	height: 58upx;
}
.setting .personal .life .lBottom navigator text{
	color: #333;
	display: block;
	font-size: 28upx;
}
/* 设置列表 */
.list{
	width:698upx;
	/* height:411upx; */
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 24upx 3upx rgba(85,144,214,0.2);
	border-radius:27upx;
	margin: 188upx 30upx 0 22upx;
	box-sizing: border-box;
	padding: 0 14upx 0 20upx;
}
.list .flexs{
	display: flex;
	width: 100%;
	border-bottom: 2upx dashed #EEEDF4;
	height: 112upx;
	line-height: 112upx;
}
.list .flexs view{
	flex: 1;
}
.list .flexs .Fleft image{
	vertical-align: middle;
	margin-right: 22upx;
}
.list .flexs .Fleft text{
	color: #333;
	font-size: 28upx;
}
.list .flexs .Fright{
	text-align: right;
	padding-right: 20upx;
	box-sizing: border-box;
}
.list .flexs .Fright text{
	color: #999;
	font-size: 22upx;
	position: relative;
}
.list .flexs .Fright text::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 8upx;
    height: 8upx;
    background-color: #ff0000;
    right: -20%;
	top: 30%;
    transform: translateX(-50%);
    border-radius: 50%;
}
.list .flexs .Fright image{
	width: 17upx;
	height: 31upx;
	vertical-align: middle;
	margin-left: 35upx;
}

.list .flexs:nth-of-type(5){
	border: 0;
}
.list navigator:nth-of-type(1) view image{
	width: 55upx;
	height: 50upx;
}
.list navigator:nth-of-type(2) view image{
	width: 55upx;
	height: 50upx;
}
.list navigator:nth-of-type(3)  view image{
	width: 57upx;
	height: 55upx;
}
.list navigator:nth-of-type(4)  view image{
	width: 55upx;
	height: 52upx;
	
}
.list navigator:nth-of-type(5) view image{
	width: 60upx;
	height: 60upx;
	
}
.list .noBorder{
	border-bottom: 0;
}
.goSetting{
	margin-top: 34upx;
	width:698upx;
	/* height:411upx; */
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 24upx 3upx rgba(85,144,214,0.2);
	border-radius:27upx;
	margin: 34upx 30upx 0 22upx;
	box-sizing: border-box;
	padding: 0 14upx 0 20upx;
}
.goSetting .flexs{
	display: flex;
	width: 100%;
	border-bottom: 2upx dashed #EEEDF4;
	height: 112upx;
	line-height: 112upx;
}
.goSetting .flexs view{
	flex: 1;
}
.goSetting .flexs .Fleft image{
	vertical-align: middle;
	margin-right: 22upx;
	width: 64upx;
	height: 64upx;
}
.goSetting .flexs .Fleft text{
	color: #333;
	font-size: 28upx;
}
.goSetting .flexs .Fright{
	text-align: right;
	padding-right: 20upx;
	box-sizing: border-box;
}
.goSetting .flexs .Fright text{
	color: #999;
	font-size: 22upx;
	position: relative;
}
.goSetting .flexs .Fright text::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 8upx;
    height: 8upx;
    background-color: #ff0000;
    right: -20%;
	top: 30%;
    transform: translateX(-50%);
    border-radius: 50%;
}
.goSetting .flexs .Fright image{
	width: 17upx;
	height: 31upx;
	vertical-align: middle;
	margin-left: 35upx;
}
</style>
