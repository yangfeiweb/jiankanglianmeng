<template>
	<view class="content">
		<view class="title">
			<view class="top">
				选择支付方式
			</view>
			<view class="list">
				<view class="img1">
					<image src="../../../static/bankPay.png" mode=""></image>
					<text>银行卡支付</text>
				</view>
				<view>
					<image data-type='1' v-if="select&&type!=1" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==1" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="list">
				<view class="img2">
					<image src="../../../static/aliPay.png" mode=""></image>
					<text>支付包支付</text>
				</view>
				<view>
					<image data-type='2' v-if="select&&type!=2" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==2" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="list">
				<view class="img3">
					<image src="../../../static/wxPay.png" mode=""></image>
					<text>微信支付</text>
				</view>
				<view>
					<image data-type='3' v-if="select&&type!=3" src="../../../static/unSelect.png" mode="" @tap="toSelect"></image>
					<image v-if="select&&type==3" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 充值额度 -->
		<view class="title">
			<view class="top">
				选择支付方式
			</view>
			<view class="edu">
				<view class="leftMoney">
					<text>1000</text>
					<text>现金+</text>
					<text>1000</text>
					<text>成本金额度</text>
				</view>
				<view>
					<text>￥1000</text>
					<image data-type1='1' v-if="select&&type1!=1" src="../../../static/unSelect.png" mode="" @tap="toSelect1"></image>
					<image v-if="select&&type1==1" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="edu">
				<view class="leftMoney">
					<text>3000</text>
					<text>现金+</text>
					<text>3000</text>
					<text>成本金额度</text>
				</view>
				<view>
					<text>￥3000</text>
					<image data-type1='2' v-if="select&&type1!=2" src="../../../static/unSelect.png" mode="" @tap="toSelect1"></image>
					<image v-if="select&&type1==2" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
			<view class="edu">
				<view class="leftMoney">
					<text>5000</text>
					<text>现金+</text>
					<text>5000</text>
					<text>成本金额度</text>
				</view>
				<view>
					<text>￥5000</text>
					<image data-type1='3' v-if="select&&type1!=3" src="../../../static/unSelect.png" mode="" @tap="toSelect1"></image>
					<image v-if="select&&type1==3" src="../../../static/selectY.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="pay">
			<button type="default">充值</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select:true,
				type:'1',
				type1:'1'
			};
		},
		methods: {
			toSelect(e) {
				this.type=e.currentTarget.dataset.type;
				// this.select=!this.select;
				console.log(this.type)
			},
			toSelect1(e) {
				this.type1=e.currentTarget.dataset.type1;
				// this.select=!this.select;
				console.log(this.type1)
			}
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
	background-color:#fff;
	/* padding-bottom:30upx; */
}
.title{
	width: 100%;
	padding-left: 22upx;
	box-sizing: border-box;
}
.title .top{
	width: 100%;
	height: 87upx;
	line-height: 87upx;
	background-color: #FAFAFA;
	color: #9a9a9a;
	font-size: 30upx;
	box-sizing: border-box;
}
.title .list{
	display: flex;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #f1f1f1;
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
}
/* 充值金额 */
.title .edu{
	display: flex;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #f1f1f1;
}
.title .edu view:nth-of-type(1){
	flex: 1.5;
}
.title .edu view:nth-of-type(1) text{
	font-size: 30upx;
}
.title .edu view:nth-of-type(1) text:nth-of-type(2n-1){
	color: #519EF7;
}
.title .edu view:nth-of-type(1) text:nth-of-type(2n){
	color: #333;
}
.title .edu view:nth-of-type(1){
	text-align: left;
}
.title .edu view:nth-of-type(2){
	text-align: right;
	padding-right: 37upx;
}
.title .edu view:nth-of-type(2) image{
	width: 35upx;
	height: 35upx;
	vertical-align: middle;
	margin-left: 23upx;
}
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
