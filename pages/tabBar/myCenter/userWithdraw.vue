<template>
	<view class="content">
		<!-- 顶部支付包 -->
		<view class="aliPay" v-if="type=='0'">
			<view class="user">
				<text>账户类型:</text>
				<view class="img">
					<text>支付包</text>
					<image src="../../../static/king.png" mode=""></image>
				</view>
				<view class="right" @tap="selectBank">
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
			<view class="user">
				<text>用户姓名:</text>
				<input type="text" placeholder-class="place-holder" value="" placeholder="输入支付宝认证姓名"/>
			</view>
			<view class="user">
				<text>支付宝账号:</text>
				<input type="text" value="" placeholder-class="place-holder" placeholder="输入支付宝认证账户"/>
			</view>
		</view>
		<!-- 银行卡进行绑定的 -->
		<view class="aliPay" v-if="type!='0'">
			<view class="user">
				<text>账户类型:</text>
				<view class="img">
					<text>华夏银行</text>
				</view>
				<view class="right" @tap="selectBank">
					<image src="../../../static/rightArrow.png" mode=""></image>
				</view>
			</view>
			<view class="user">
				<text>支行名称:</text>
				<input type="text" placeholder-class="place-holder" value="" placeholder="输入开户行支行名称"/>
			</view>
			<view class="user">
				<text>持卡人:</text>
				<input type="text" value="" placeholder-class="place-holder" placeholder="输入持卡人姓名"/>
			</view>
			<view class="user user1">
				<text>银行卡卡号:</text>
				<input type="text" value="" placeholder-class="place-holder" placeholder="输入银行卡卡号"/>
			</view>
		</view>
		<!-- 底部说明 -->
		<view class="bottom">
			<view class="texts">
				<text>温馨提示:\n</text>
				<text>1.请确保所填体现账户信息的真实性、正确性，以便快速准确的转入到您的账户里。\n</text>
				<text>2.若因账户信息填写有误，导致转账失败、转入他人账户，本公司概不负责。</text>
			</view>
			<view class="btn">
				<button type="default">确认添加</button>
			</view>
		</view>
		<!-- 弹窗选择银行卡 -->
		<view class="toast" v-if="toast">
			<view class="bank">
				<view class="bTop">
					<text>选择账户类型</text>
					<image src="../../../static/mark.png" mode="" @tap="cancel"></image>
				</view>
				<scroll-view scroll-y="true">
					<view class="first" data-type="0" @tap="select">
						<view>
							<image src="../../../static/aliPay.png" mode=""></image>
							<text>支付宝</text>
							<image class="icon" src="../../../static/king.png" mode=""></image>
						</view>
						<view class="">
							<image v-if="type=='0'" src="../../../static/mark1.png" mode=""></image>
						</view>
					</view>
					<block v-for="item in list" :key='item'>
						<view class="first" @tap="select" :data-type='item.id'>
							<view>
								<image src="../../../static/aliPay.png" mode=""></image>
								<text>华夏银行</text>
							</view>
							<view class="">
								<image v-if="type==item.id" src="../../../static/mark1.png" mode=""></image>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'0',
				toast:false,
				list:[
					{
						'id':1
					},
					{
						'id':2
					},
					{
						'id':3
					},
					{
						'id':5
					},
					{
						'id':6
					},
					{
						'id':7
					},
					{
						'id':8
					}
				],
			};
		},
		methods: {
			select(e){
				var el=e.currentTarget;
				this.type=el.dataset.type;
				console.log(this.type)
// 				this.indexs=this.type;
// 				if(this.type==''){
// 					this.avtive=false;
// 				}else{
// 					this.avtive=true
// 				}
			},
			selectBank(){
				this.toast=true;
			},
			cancel(){
				this.toast=false;
			}
		},
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
.aliPay{
	width: 100%;
	background-color: #fff;
	padding: 0 36upx 0 30upx;
	box-sizing:border-box;
	margin-bottom: 15upx;
}
.aliPay .user{
	border-bottom: 1upx solid #EFEFEF;
	height: 88upx;
	line-height: 88upx;
	display: flex;
}
.aliPay .user text{
	color: #333;
	font-size: 28upx;
	text-align: left;
}
.aliPay .user .right{
	text-align:right;
	flex: .5;
}
.aliPay .user .right image{
	width: 10upx;
	height: 17upx;
	
}
.aliPay .user .img{
	flex:.8;
	height:100%;
	line-height:88upx;
	vertical-align:middle;
	margin-left:50upx;
}
.aliPay .user1{
	border: 0;
}
.aliPay .user .img text{
	color: #333;
	font-size: 28upx;
}
.aliPay .user .img image{
	width: 27upx;
	height: 26upx;
	vertical-align:middle;
	margin-top:-22upx;
}
.place-holder {
    font-size: 24upx;
	color:#CBC9C9;
}
.aliPay .user input{
	flex: .9;
	height: 100%;
	color: #333;
	margin-left:50upx
}
.aliPay .user:nth-of-type(4){
	border: 0;
}
.bottom{
	background-color: #fff;
	
	box-sizing: border-box;
	width: 100%;
}
.bottom .texts{
	box-sizing: border-box;
	padding-top: 50upx;
	padding-left: 50upx;
	padding-right: 43upx;
}
.bottom .texts text{
	color: #333;
	font-size: 26upx;
	line-height: 54upx;
}
.bottom .texts text:nth-of-type(1){
	font-weight: 500;
}
.btn{
	margin-top: 200upx;
}
.btn button{
	width:690upx;
	height:82upx;
	background:rgba(81,158,247,1);
	border-radius:5upx;
	color: #fff;
	font-size: 36upx;
	line-height: 82upx;
	text-align: center;
	margin: 32upx;
}
/* 弹窗 */
.toast{
	position:fixed;
	top:0;
	width: 100%;
	height: 100%;
	background:rgba(0, 0, 0, 0.4);
	z-index:9999;
}
.toast .bank{
	background-color: #fff;
	height: 602upx;
	width: 100%;
	box-sizing:border-box;
	position: absolute;
	bottom: 0;
}
.toast .bank .bTop{
	height: 99upx;
	line-height: 99upx;
	position: relative;
	width: 100%;
	text-align: center;
	border-bottom: 1upx solid #EAE9E9;
}
.toast .bank .bTop text{
	color: #1B1B1B;
	font-size: 36upx;
}
.toast .bank .bTop image{
	height: 29upx;
	width: 28upx;
	position: absolute;
	right: 28upx;
	top:28upx;
}
.toast .bank scroll-view{
	max-height: 500upx;
	width: 100%;
}
.toast .bank scroll-view .first{
	border-bottom: 1upx solid #EAE9E9;
	height: 99upx;
	width: 100%;
	display: flex;
	padding-left: 29upx;
	padding-right: 15upx;
	box-sizing:border-box;
	line-height:99rpx;
}

.toast .bank scroll-view .first view:nth-of-type(1){
	text-align: left;
	flex: 1.5;
	position: relative;
}
.toast .bank scroll-view .first view:nth-of-type(1) text{
	color: #333;
	font-size: 34upx;
}
.toast .bank scroll-view .first view:nth-of-type(1) image:nth-of-type(1){
	width:50upx;
	height: 50upx;
	vertical-align: middle;
	margin: 0 50upx 0 10upx;
}
.toast .bank scroll-view .first view:nth-of-type(1) .icon{
	width:20upx!important;
	height: 19upx!important;
	vertical-align: middle;
	position:absolute;
	left:250upx;
	top:30upx;
	/* margin: 0 50upx 0 10upx; */
}
.toast .bank scroll-view .first view:nth-of-type(2){
	text-align: right;
	flex: .5;
}
.toast .bank scroll-view .first view:nth-of-type(2) image{
	width: 43upx;
	height: 43upx;
	vertical-align: middle;
}
.toast .bank scroll-view .first:nth-of-type(1) view:nth-of-type(1) image{
	width: 72upx;
	height: 72upx;
}
</style>
