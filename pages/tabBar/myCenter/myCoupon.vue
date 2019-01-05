<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<view class="tab">
			<view data-type='0' :class="type=='0'? 'active' : ''" @tap='selectTab'>未使用</view>
			<view data-type='1' :class="type=='1'? 'active' : ''" @tap='selectTab'>已使用</view>
			<view data-type='2' :class="type=='2'? 'active' : ''" @tap='selectTab'>已过期</view>
		</view>
		<!-- 卡券列表 -->
		<view v-if="list.length>0" class="list">
		 	<view class="coupon" v-for="(value,index) in list" :key="index">
		 		<view :class="type=='0'&&coupon=='1'?'top1 top':type=='0'&&coupon=='2'?'top2 top':'top3 top'">
		 			<view class="left">
		 				<text v-if="coupon=='1'">66.</text>
						<text v-if="coupon=='1'">00元\n</text>
						<text v-else>折扣券</text>
						<text>单适用于健康商城购物优惠\n单笔商城账单满500元可用</text>
		 			</view>
					<view class="right">
						<image v-if="type=='1'" src="../../../static/haveUse.png" mode=""></image>
						<image v-if="type=='2'" src="../../../static/stale.png" mode=""></image>
						<image v-if="type=='0'" src="../../../static/unused.png" mode=""></image>
						<text>2019-02-20至\n2019-02-23</text>
					</view>
		 		</view>
				<view class="bottom">
					<text>红包优惠券</text>
					<text>新人红包</text>
				</view>
		 	</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			<!-- <view class="coupon">
				<view :class="type==0&&coupon==1?'top1 top':type==0&&coupon==2?'top2 top':'top3 top'">
					<view class="left">
						<text v-if="coupon==1">66.</text>
						<text v-if="coupon==1">00元\n</text>
						<text v-else>折扣券</text>
						<text>单适用于健康商城购物优惠\n单笔商城账单满500元可用</text>
					</view>
					<view class="right">
						<image v-if="type==1" src="../../../static/haveUse.png" mode=""></image>
						<image v-if="type==2" src="../../../static/stale.png" mode=""></image>
						<image v-if="type==0" src="../../../static/unused.png" mode=""></image>
						<text>2019-02-20至\n2019-02-23</text>
					</view>
				</view>
				<view class="bottom">
					<text>红包优惠券</text>
					<text>充值赠送红包</text>
				</view>
			</view> -->
		 </view>
		 <!-- 空卡券 -->
		 <view v-else class="empty">
		 	<image src="../../../static/empty.png" mode=""></image>
			<text>您还没有可用卡券哦</text>
		 </view>
	</view>
</template>

<script>
	import loadMore from '../../../components/load-more.vue'
	export default {
		data() {
			return {
				type:'0',
				coupon:'1',//使用优惠券
				discount:'1',//折扣券
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
		},
		onLoad() {
			let list = [];
			for (let i = 1; i < 11; i++) {
				list.push(i);
			}
			this.list = list;
		},
		methods: {
			selectTab(e) {
				this.type = e.currentTarget.dataset.type;
				// var tyep1 =this.type
// 				if(this.type==2){
// 					this.type=1;
// 				}
				console.log(this.type)
				uni.showNavigationBarLoading() //在标题栏中显示加载
				//模拟加载
				setTimeout(() => {
					uni.hideNavigationBarLoading() //完成停止加载
				}, 1000);
			}
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let list = [],
				maxItem = this.list[this.list.length - 1],
				length = maxItem + 5;
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
			}, 800);
		},
		components: {
			loadMore
		}
	}
</script>

<style>
page {
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
	background-color: #fff;
	width:100%;
	height:100%;
}
.tab {
    height: 88upx;
    background-color: #fff;
    width: 100%;
	position: fixed;
	top: 0;
	left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow:0px 3px 37px 1px rgba(50,157,198,0.1);
	margin-bottom: 41upx;
	z-index: 999;
}

.tab view {
    flex: 1;
    height: 100%;
    line-height: 88upx;
    text-align: center;
    font-size: 28upx;
    color: #9c9c9c;
}

.tab .active {
    color: #0AC867;
    position: relative;
	border-bottom: 2upx solid #0AC867;
}

.active::before {
    /* position: absolute;
    content: "";
    bottom: 0;
    width: 24upx;
    height: 4upx;
    background-color: #539EF6;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2upx; */
}
/*卡券列表 */
.list{
	background-color: #fff;
padding-top:112rpx;
}
.list .coupon{
	width:671upx;
	/* height:311upx; */
	box-shadow:0upx 3upx 24upx 3upx rgba(50,157,198,0.3);
	border-radius:20upx;
	margin-left: 40upx;
	margin-bottom: 34upx;
}
.list .coupon .top{
	display: flex;
	width: 100%;
	height: 240upx;
	border-top-left-radius:20upx;
	border-top-right-radius:20upx;
	background:rgba(119,203,212,1);
	padding-bottom: 25upx;
}
.list .coupon .top2{
	background:#8AF6BF;
}
.list .coupon .top1{
	background:rgba(119,203,212,1);
}
.list .coupon .top3{
	background:#D3D4D5;
}
.list .coupon .top .left{
	width: 404upx;
	height: 100%;
	box-sizing:border-box;
	padding-left:29rpx;
	position: relative;
}
.list .coupon .top .left text{
	color: #fff;
}
.list .coupon .top .left text:nth-of-type(1){
	font-size: 120upx;
	font-weight:500;
	line-height: 175upx;
}
.list .coupon .top .left text:nth-of-type(1) text{
	font-size: 36upx;
}
.list .coupon .top .left text:nth-of-type(3){
	font-size: 24upx;
	display:inline-block;
}

.list .coupon .top .right{
	/* width: 299upx; */
	height: 100%;
	padding-left: 40upx;
}
.list .coupon .top .right image{
	width: 227upx;
	display: block;
	height: 172upx;
	margin-bottom:13upx;
}
.list .coupon .top .left::before{
    position: absolute;
    content: "";
    bottom: 0;
    width: 2upx;
    height: 127upx;
    background-color: #fff;
    right: 0;
	bottom: 0upx;
    /* transform: translateX(-50%); */
}
.list .coupon .top .right text{
	color: #fff;
	font-size: 20upx;
	display:inline-block;

}
/* .list .coupon .top .right view{
	color: #fff;
	font-size: 20upx;
	width: 282upx;
} */
.list .coupon .bottom{
	height: 56upx;
	line-height: 56upx;
	display: flex;
	background-color: #fff;
	border-bottom-left-radius:20upx;
	border-bottom-right-radius:20upx;
}
.list .coupon .bottom text{
	flex: 1;
	color: #999;
	font-size: 24upx;
}
.list .coupon .bottom text:nth-of-type(1){
	padding-left: 26upx;
	text-align: left;
}
.list .coupon .bottom text:nth-of-type(2){
	padding-right: 45upx;
	text-align: right;
}
.empty{
	width: 100%;
	background-color: #fff;
	padding-top: 178upx;
	text-align: center;
}
.empty image{
	width: 453upx;
	height: 340upx;
	display: block;
	margin: 0 auto;
	margin-bottom: 42upx;
}
.empty text{
	color: #908F8F;
	font-size: 30upx;
}
</style>
