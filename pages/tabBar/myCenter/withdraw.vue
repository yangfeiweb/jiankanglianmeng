<template>
	<view class="content">
		<view class="title">
			<view class="top">
				选择渠道
			</view>
			<view class="list">
				<view class="img1">
					<image src="../../../static/bankPay.png" mode=""></image>
					<text>提取到银行卡</text>
				</view>
				<view>
					<text>建设银行:15151515151</text>
					<image data-type='1' v-if="select&&type!=1" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==1" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="list">
				<view class="img2">
					<image src="../../../static/aliPay.png" mode=""></image>
					<text>提取到支付宝</text>
				</view>
				<view>
					<text>支付包:15899999999</text>
					<image data-type='2' v-if="select&&type!=2" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==2" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="list">
				<view class="img3">
					<image src="../../../static/wxPay.png" mode=""></image>
					<text>提取到微信</text>
				</view>
				<view>
					<text>微信:15151515151</text>
					<image data-type='3' v-if="select&&type!=3" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==3" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 充值额度 -->
		<view class="title">
			<view class="top">
				选择提取额度
			</view>
			<view class="edu">
				<view class="wMoney">
					提取金额
				</view>
				<view class="import">
					<text>￥</text>
					<input type="number" placeholder="输入需要提取的金额" placeholder-class="place-holder" value=""/>
				</view>
				<view class="canUse">
					<text>可用余额:0元</text>
				</view>
			</view>
		</view>
		<view class="pay">
			<button type="default">提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select:true,
				type:'',
			};
		},
		methods: {
			toSelect(e) {
				this.type=e.currentTarget.dataset.type;
				// this.select=!this.select;
				console.log(this.type)
			},
		},
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
	background-color:#fafafa;
	/* padding-bottom:30upx; */
}
.title{
	width: 100%;
	box-sizing: border-box;
}
.title .top{
	width: 100%;
	height: 87upx;
	line-height: 87upx;
	background-color: #FAFAFA;
	color: #9a9a9a;
	font-size: 30upx;
	padding-left: 23upx;
	box-sizing: border-box;
}
.title .list{
	padding-left: 23upx;
	display: flex;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #f1f1f1;
	background-color: #fff;
}
.title .list view{
	flex: 1;
}
.title .list:nth-of-type(4){
	border-bottom: 0;
}
.title .list view text{
	color: #333;
	font-size: 30upx;
}
.title .list view:nth-of-type(1) image{
	vertical-align: middle;
	margin-right: 30upx;
}
.title .list .img1 image{
	width: 37upx;
	height: 27upx;
}
.title .list .img2 image{
	width: 37upx;
	height: 37upx;
}
.title .list .img3 image{
	width: 38upx;
	height: 38upx;
}
.title .list view:nth-of-type(1){
	text-align: left;
}
.title .list view:nth-of-type(2){
	text-align: right;
	padding-right: 37upx;
}
.title .list view:nth-of-type(2) image{
	width: 35upx;
	height: 35upx;
	margin-left: 28upx;
	vertical-align: middle;
}
.title .list view:nth-of-type(2) text{
	color: #999;
	font-size: 22upx;
}
.place-holder {
    font-size: 24upx;
	color:#d0d0d0;
}
.title .edu{
	padding-right: 39upx;
	padding-left: 23upx;
	background-color: #fff;
}
.title .edu .wMoney{
	color: #000;
	font-weight:500;
	font-size: 32upx;
	padding-top:21upx;
}
.title .edu .import{
	border-bottom: 1upx solid #f1f1f1;
	height: 100upx;
	line-height: 100upx;
	display: flex;
}
.title .edu .import text{
	color:#636363;
	font-weight:500;
	font-size: 40upx;
}
.title .edu .import input{
	height: 100%;
	display: inline-block;
	width: 600upx;
	padding-left: 34upx;
}
.title .edu .canUse{
	height: 99upx;
	line-height: 99upx;
	color: #999;
	font-size: 24upx;
}
/* 充值金额 */
.pay button{
	width:690upx;
	height:82upx;
	background:rgba(81,158,247,1);
	border-radius:5upx;
	margin: 52upx 30upx 0 30upx;
	color: #fff;
	line-height: 82upx;
	text-align: center;
	font-size: 36upx;
}
</style>
