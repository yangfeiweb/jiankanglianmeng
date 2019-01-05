<template>
	<view class="content">
		<scroll-view scroll-y="yrue">
			<!-- 顶部 -->
			<view class="topImg">
				<view class="bgimg">
					<image src="../../../static/healthbg.png" mode=""></image>
				</view>
				<!-- 金额 -->
				<view class="money">
					<view class="moneyTop">
						<text>总金额(元)\n</text>
						<text>￥66666,66</text>
					</view>
					<view class="moneyBottom">
						<view>
							<text>6666.66\n</text>
							<text>可用金额</text>
						</view>
						<view>
							<text>667666.66\n</text>
							<text>理财本金</text>
						</view>
						<view>
							<text>66656.66\n</text>
							<text>预期利息</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 理财 -->
			<view class="matters">
				<navigator>
					<image src="../../../static/idCard.png" mode=""></image>
					<text>资金转账</text>
				</navigator>
				<navigator>
					<image src="../../../static/bankHealth.png" mode=""></image>
					<text>充值记录</text>
				</navigator>
				<navigator url="myMatters">
					<image src="../../../static/common.png" mode=""></image>
					<text>充值介绍</text>
				</navigator>
			</view>
			<!-- 收益明细 -->
			<view class="earings">
				<view class="title">
					收益明细
				</view>
				<view class="earing">
					<navigator>
						<text>+666\n</text>
						<text>本金金额</text>
					</navigator>
					<navigator>
						<text>+88.00\n</text>
						<text>昨日收益</text>
					</navigator>
					<navigator>
						<text>+66.66\n</text>
						<text>总收益</text>
					</navigator>
				</view>
			</view>
			<!-- 推荐理财 -->
			<view class="recommend">
				<view class="title">
					充值方案
				</view>
				<!-- 推荐列表 -->
				<view class="list">
					<view class="context" v-for="(value,index) in list" :key="index">
						<view class="cTop">
							<text>1000元充值卡</text>
							<text @tap="buyNow">充值</text>
						</view>
						<view class="cBottom">
							<view>
								<text>1000\n</text>
								<text>商品成本价额度</text>
							</view>
							<view>
								<text>1/1\n</text>
								<text>充值次数</text>
							</view>
							<view>
								<text>150\n</text>
								<text>体力</text>
							</view>
						</view>
					</view>
					<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
				</view>
			</view>
		</scroll-view>
		<!-- 弹窗 -->
		<view class="toast" v-if="toast">
			<view class="main">
				<!-- 买入交易 -->
				<view class="sallBuy">
					<view class="sTop">
						<view class="sImg">
							<image src="../../../static/photo.png" mode=""></image>
						</view>
						<view class="sTitle">
							<text>MyName</text>
						</view>
					</view>
					<view class="tTitle">
						充值中心
					</view>
					<view class="sMiddle">
						<view class="inputTitle">
							<view>
								<text>买入金额\n</text>
								<input placeholder-class="place-holder" type="number" placeholder="输入买入金额" v-model="sallNum"/>
								<!-- <text v-if="sallNum>haveNum" class="hides">(余额不足)</text> -->
							</view>
							<view>
								<text>充值次数\n</text>
								<text>无限制</text>
							</view>
						</view>
						<view class="showTitle">
							<view class="mode">
								充值方式
							</view>
							<view class="ali" data-type='1' @tap="pay">
								<image v-if="ali&&type==1" src="../../../static/selectY.png" mode=""></image>
								<image v-else src="../../../static/unSelect.png" mode=""></image>
								<text>支付宝支付</text>
							</view>
							<view class="ali" data-type='2' @tap="pay">
								<image v-if="wx&&type==2" src="../../../static/selectY.png" mode=""></image>
								<image v-else src="../../../static/unSelect.png" mode=""></image>
								<text>微信支付</text>
							</view>
						</view>
					</view>
					<view class="sBottom">
						<button class="btnSall2" type="default">买入</button>
						<!-- <button class="btnSall2" type="default">买入</button> -->
						<button class="cancel1" type="default" @tap="toastHide">取消</button>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	export default {
		data() {
			return {
				toast:false,
				sallNum:'',//卖出个数
				haveNum:6666,//剩余个数
				unitPrice:'',//果实单价
				type:'1',
				wx:true,
				ali:true,
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
		},
		onLoad(options) {
// 			uni.setNavigationBarColor({
// 				frontColor: '#ffffff',
// 				backgroundColor: '#12C2E9',
// 				animation: {
// 					duration: 400,
// 					timingFunc: 'easeIn'
// 				}
// 			})
			
		},
		methods: {
			// 计算果实总价格
// 			count(){
// 				if(this.sallNum.trim()==''){
// 					uni.showToast({
// 						title: '请输入要卖出的数量!',
// 						duration:2000,
// 						icon:'none'
// 					});
// 					return;
// 				}
// 			},
			// 显示弹窗
			buyNow(e){
				this.toast=true
			},
			// 关闭弹窗
			toastHide(){
				this.toast=false;
			},
			// 选择支付方式
			pay(e){
				this.type = e.currentTarget.dataset.type;
			},
		},
		onLoad() {
			let list = [];
			for (let i = 1; i < 11; i++) {
				list.push(i);
			}
			this.list = list;
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let list = [],
				maxItem = this.list[this.list.length - 1],
				length = maxItem +10;
			for (let i = maxItem + 1; i < length; i++) {
				list.push(i);
			}
			setTimeout(() => {
				if (length > 26) {
					this.loadingType = 2;
					return;
				}
				this.list = this.list.concat(list);
				this.loadingType = 0;
			}, 1500);
		},
		components: {
			loadMore
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
	background-color:#fff;
	/* padding-bottom:30upx; */
}
.content scroll-view{
	height: 100%;
	width: 100%;
}
.topImg{
	width: 100%;
	position: relative;
	/* background-color: #6a85ff; */
	height: 488upx;
}
.topImg .bgimg{
	width: 100%;
	height: 100%;
}
.topImg .bgimg image{
	width: 100%;
	height: 100%;
}
.topImg .money{
	width: 100%;
	position: absolute;
	top: 0;
	/* height: 100%; */
	padding-top: 25upx;
}
.topImg .money .moneyTop{
	width: 100%;
	text-align: center;
	margin-bottom: 40upx;
}
.topImg .money .moneyTop text{
	color: #fff;
}
.topImg .money .moneyTop text:nth-of-type(1){
	font-size: 26upx;
}
.topImg .money .moneyTop text:nth-of-type(2){
	font-size: 70upx;
	margin-top: 18upx;
	
}
.topImg .money .moneyBottom{
	display: flex;
	width: 100%;
	text-justify: space-between;
}
.topImg .money .moneyBottom view{
	flex: 1;
	text-align: center;
}
.topImg .money .moneyBottom view text{
	color: #fff;
}
.topImg .money .moneyBottom view text:nth-of-type(1){
	font-size: 36upx;
}
.topImg .money .moneyBottom view text:nth-of-type(2){
	font-size: 24upx;
	margin-top: 20upx;
}
/* licai  */
.matters{
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 35upx 0;
}
.matters navigator{
	flex: 1;
	text-align: center;
	
}
.matters navigator image{
	margin: 0 auto;
}
.matters navigator:nth-of-type(1) image{
	width: 69upx;
	height: 63upx;
	display: block;
}
.matters navigator:nth-of-type(2) image{
	width: 57upx;
	height: 55upx;
	display: block;
}
.matters navigator:nth-of-type(3) image{
	width: 54upx;
	height: 55upx;
	display: block;
}
.matters navigator text{
	color: #182462;
	font-size: 26upx;
	margin-top: 22upx;
}
/* 收益明细 */
.earings{
	width: 100%;
	border-bottom: 2upx solid #F2F2F2;
	margin-bottom: 30upx;
	padding-bottom:30upx
}
.title{
	width: 100%;
	box-sizing: border-box;
	padding-left: 20upx;
	color: #1E2A66;
	font-size: 30upx;
	margin-bottom: 36upx;
}
.earing{
	width: 100%;
	display: flex;
	justify-content: space-between;
	/* padding: 35upx 0; */
}
.earing navigator{
	flex: 1;
	text-align: center;
}
.earing navigator text{
	color: #182462;
	font-size: 26upx;
	margin-top: 22upx;
}
.earing navigator text:nth-of-type(1){
	color: #1E2A66;
	font-size: 30upx;
	margin-top: 22upx;
}
.earing navigator text:nth-of-type(2){
	color: #A8ADBA;
	font-size: 26upx;
	margin-top: 22upx;
}
.recommend {
	width: 100%;
}
.recommend .list{
	width: 100%;
}
.recommend .list .context{
	width: 692upx;
	height: 257upx;
	margin: 0 auto;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 29upx 6upx rgba(189,231,235,0.41);
	border-radius:25upx;
	margin-bottom: 29upx;
}
.recommend .list .context .cTop{
	border-bottom: 1upx solid #F7F7F7;
	width: 100%;
	box-sizing: border-box;
	padding: 0 44upx 0 34upx;
	display: flex;
	height: 103upx;
	padding-top: 28upx;
	/* line-height: 103upx; */
}
.recommend .list .context .cTop text:nth-of-type(1){
	flex: 1;
	color: #1E2A66;
	font-size: 30upx;
	text-align: left;
}
.recommend .list .context .cTop text:nth-of-type(2){
	width:112upx;
	height:48upx;
	background:linear-gradient(-268deg,rgba(115,144,255,1),rgba(67,111,255,1));
	border-radius:5upx;
	font-size: 30upx;
	color: #fff;
	text-align: center;
	line-height: 48upx;
}
.recommend .list .context .cBottom{
	display: flex;
	width: 100%;
	height: 151upx;
	box-sizing: border-box;
	padding-top: 35upx;
	justify-content: space-between;
}
.recommend .list .context .cBottom view{
	flex: 1;
	text-align: center;
}
.recommend .list .context .cBottom view text:nth-of-type(1){
	color: #6984FF;
	font-size: 30upx;
}
.recommend .list .context .cBottom view text:nth-of-type(2){
	color: #BDC1CA;
	font-size: 26upx;
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
.toast .main{
	background-color: #fff;
	height: 650upx;
	width: 708upx;
	margin:150upx 0 0 21upx;
	border-radius:28upx;
	box-sizing:border-box;
	padding-left:36upx;
}
.toast .main .sallBuy{
	position: relative;
}
.toast .main .sallBuy .tTitle{
	position:absolute;
	font-weight:bold;
	color:rgba(108,178,224,1);
	font-size: 40upx;
	right:55upx;
	top:38upx;
}
.sTop {
	position: relative;
	/* height: 102upx; */
}
.sTop .sImg{
	position:absolute;
	top:44upx;
	width:102upx;
	height:102upx;
	box-shadow:0upx 5upx 19upx 2upx rgba(45,151,198,0.2);
	border-radius:50%;
}
.sTop .sImg image{
	width: 100%;
	height: 100%;
	
}
.sTop .sTitle{
	font-size: 28upx;
	color:#192345;
	margin-left:136upx;
	padding-top:77upx;
}
.sTop .sTitle navigator{
	color:#1EACFD;
	font-size: 22upx;
}
.place-holder {
    font-size: 30upx;
	color:#DDDDDD;
}
.sMiddle .inputTitle{
	display:flex;
	width: 100%;
}
.sMiddle{
	margin-top:75upx;
}
.sMiddle .inputTitle view{
	flex:1;
	text-align:left;
}
.sMiddle .inputTitle view text{
	font-size: 24upx;
	color:#929AAD;
}
.sMiddle .inputTitle view text:nth-of-type(1){
	margin-bottom:30upx;
	display:block;
}
.sMiddle .inputTitle view:nth-of-type(2) text:nth-of-type(2){
	color: #4D4D73;
	font-size: 46upx;
}
.sMiddle .inputTitle view input{
	color:#4D4D73;
	font-size: 46upx;
	display:inline-block;
	width:188upx;
	vertical-align:middle;
}
.sMiddle .inputTitle view .hides{
	color:#F94B42;
}
.sMiddle .showTitle{
	margin-top:10upx;
	width: 100%;
}
.sMiddle .showTitle .ali{
	display: inline-block;
	width: 100%;
	width: 50%;
	text-align:left;
}
.sMiddle .showTitle .ali text{
	color:#1E2A66;
	font-size: 30upx;
}
.sMiddle .showTitle .ali image{
	width: 39upx;
	height: 39upx;
	vertical-align: middle;
	margin-right: 16upx;
}
.sMiddle .showTitle .mode{
	color: #929AAD;
	font-size: 24upx;
	margin-bottom: 20upx;
}
.sBottom {
	margin-top:70upx;
  display: flex;
}
.sBottom button{
	height: 84upx;
	/* width: 300upx; */
	line-height:84upx;
	text-align:center;
	margin:0;
	font-size: 28upx;
	display:inline-block;
  flex: 1;
}
.sBottom button::after {
	border: none
}
.sBottom .btnSall{
	background:rgba(214,214,214,1);
	box-shadow:0upx 3upx 18upx 3upx rgba(104,176,219,0.3);
	border-radius:42upx;
	border:none;
	color:#ffffff;
}
/* .sBottom .btnSall1{
	background:rgba(104,176,219,1);
	box-shadow:0upx 3upx 18upx 3upx rgba(104,176,219,0.3);
	border-radius:42upx;
	color:#fff;
} */
.sBottom .btnSall2{
	background:#4772FF;
	box-shadow:0upx 3upx 18upx 3upx rgba(104,176,219,0.3);
	border-radius:42upx;
	color:#fff;
}
.sBottom .cancel1{
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 21upx 0upx rgba(174,181,183,0.3);
	border-radius:42upx;
	margin-left:25upx;
	color:#68B0DB;
}
</style>