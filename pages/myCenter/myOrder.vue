<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<view class="tab">
			<view data-type='0' :class="type=='0'? 'active' : ''" @tap='selectTab'>全部</view>
			<view data-type='1' :class="type=='1'? 'active' : ''" @tap='selectTab'>待付款</view>
			<view data-type='2' :class="type=='2'? 'active' : ''" @tap='selectTab'>待发货</view>
			<view data-type='3' :class="type=='3'? 'active' : ''" @tap='selectTab'>待收货</view>
			<view data-type='4' :class="type=='4'? 'active' : ''" @tap='selectTab'>待评价</view>
		</view>
		<!-- 订单列表 -->
		<view class="scroll-view" v-if="list.length>0">
			<!-- 循环开始 -->
			<view class="list" v-for="(value,index) in list" :key="index">
				<!-- 店铺 -->
				<navigator url="" class="store">
					<view class="icons">
						<image src="../../static/store.png" mode=""></image>
						<text>一叶子官方旗舰店</text>
					</view>
					<view class="state">
						{{statusTitle}}
					</view>
				</navigator>
				<!-- 一个店铺呦多个商品商品列表循环开始-->
				<navigator class="goodsInfo">
					<!-- 商品图片 -->
					<view class="goodsImg">
						<image src="../../static/photo.png" mode=""></image>
					</view>
					<!-- 商品左边内容 -->
					<view class="rightGoods">
						<view class="goodsDetail">
							<view class="referral">
								<text class="refDetail">Swisse奶蓟草护肝片澳洲进口保健品护 肝解毒片保健品护保健品护保健品护保健品护保健品护保健品护保健品护</text>
							</view>
							<view class="referrals">
								<text>￥263\n</text>
								<text>x 1</text>
							</view>
						</view>
						<!-- 商品类型 -->
						<view class="mold">
							类型：180粒/瓶
						</view>
					</view>
				</navigator>
				<!-- 商品总量 -->
				<view class="goodsNum">
					<view class="numLeft">
						<text>共1件商品</text>
						<text>合计: ￥263</text>
					</view>
					<view class="numLeft">
						<button class="btn" v-if="type=='0'" type="default" @tap="goPay">查看详情</button>
						<button class="btn" v-if="type=='1'" type="default" @tap="goPay">立即付款</button>
						<button class="btn" v-if="type=='2'" type="default" @tap="goPay">提醒发货</button>
						<button class="btn" v-if="type=='3'" type="default" @tap="goPay">确认收货</button>
						<button class="btn" v-if="type=='4'" type="default" @tap="goPay">去评价</button>
					</view>
				</view>
			</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 没有订单显示空状态 -->
		<view v-else class="empty">
			<image src="../../../static/empty.png" mode=""></image>
			<text>您还没有可用卡券哦</text>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	export default {
		data(){
			return{
				type:0,
				statusTitle:'',
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		methods:{
			selectTab(e){
				this.type = e.currentTarget.dataset.type;
				console.log(this.type);
				uni.showNavigationBarLoading() //在标题栏中显示加载
				//模拟加载
				setTimeout(() => {
					uni.hideNavigationBarLoading() //完成停止加载
				}, 1000);
				this.getData()
			},
			// 路由跳转传参
			goPay(){
				if(this.type==1){
					uni.navigateTo({
						url:'orderDetail?type='+this.type
					})
				}else if(this.type==2){
					uni.showToast({
						title: '已提醒商家发货。!',
						duration:1000,
						icon:'none'
					});  
				}else if(this.type==3){
					uni.navigateTo({
						url:'orderDetail?type='+this.type
					})
				}else if(this.type==4){
					uni.navigateTo({
						url:'orderDetail?type='+this.type
					})
				}
			},
			getData(){
				if(this.type==1){
					this.statusTitle='等待交易完成'
				}else if(this.type==2){
					this.statusTitle='付款已完成'
				}else if(this.type==3){
					this.statusTitle='商家已发货'
				}else if(this.type==4){
					this.statusTitle='订单已完成'
				}
			}
		},
		// 获取页面的参数
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
				length = maxItem + 6;
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
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
}
.tab {
	position: fixed;
    height: 88upx;
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2upx solid #F6F6F6;
	z-index: 999;
	top: 0;
	z-index: 999;
}

.tab view {
    flex: 1;
    height: 100%;
    line-height: 88upx;
    text-align: center;
    font-size: 30upx;
    color: #333;
}

.tab .active {
    color: #539EF6;
    position: relative;
}

.active::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 24upx;
    height: 4upx;
    background-color: #539EF6;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2upx;
}
/* 订单列表 */
.scroll-view{
	margin-top: 88upx;
	width: 100%;
}
.list{
	padding:29upx 27upx 72upx 29upx;
	margin-bottom:4upx;
	background-color: #fff;
	box-sizing: border-box;
	overflow:hidden;
	
}
.list .store{
	width: 100%;
	display:flex;
	justify-content: space-between;
}
.list .store view{
	flex:1;
}
.list .store .icons image{
	width: 36upx;
	height: 31upx;
	vertical-align: middle;
	margin-right:10upx;
}
.list .store .icons text{
	color:#636161;
	font-size: 28upx;
}
.list .store .state{
	vertical-align: middle;
	text-align:right;
	color:#FC4848;
	font-size: 24upx;
	line-height:48rpx;
}
.goodsInfo{
	margin-top:33upx;
	 position: relative;
	 height: 156upx;
}
.goodsInfo .goodsImg{
	position: absolute;
	top:0;
	margin-right:16upx;
}
.goodsInfo .goodsImg image{
	width: 152upx;
	height: 156upx;
}
.goodsInfo .rightGoods{
	margin-left:167upx;
}
.goodsDetail{
	display:flex;
	justify-content: space-between;
}
.goodsDetail .referral text{
	color:#757575;
	font-size: 24upx;
}
.goodsDetail .referrals text:nth-of-type(1){
	color:#616161;
	font-size: 22upx;
}
.goodsDetail .referrals text:nth-of-type(2){
	color:#949292;
	font-size: 20upx;
}
.goodsDetail view:nth-of-type(1){
	flex:.8;
	overflow:hidden;
    display:-webkit-box;
    text-overflow:ellipsis;
    -webkit-line-clamp:2; 
    -webkit-box-orient:vertical;
    white-space:normal;
}
.goodsDetail view:nth-of-type(2){
	text-align:right;
}
.mold{
	color:#B7B7B7;
	font-size: 18upx;
	/* margin-bottom:48upx; */
}
.goodsNum{
	display:flex;
	justify-content: space-between;
	padding-left:167upx;
	box-sizing: border-box;
}
.goodsNum view:nth-of-type(1){
	text-align:left;
	flex:.8;
}
.goodsNum view:nth-of-type(2){
	text-align:right;
}
.numLeft text:nth-of-type(1){
	margin-right:10upx;
	color:#636161;
	font-size: 18upx;
}
.numLeft text:nth-of-type(2){
	color:#636161;
	font-size: 20upx;
}
.numLeft .btn{
	box-sizing: border-box;
	height: 44upx;
	padding:10upx 20upx;
	border:1upx solid rgba(188,188,188,1)!important;
	background:#fff!important;
	border-radius:19upx;
	color:#BCBCBC;
	font-size: 20upx;
	line-height:20upx;
	text-align:center;
	margin:0;
}
.numLeft .btn::after {
	border: none
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
