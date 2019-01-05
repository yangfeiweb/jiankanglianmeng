<template>
	<view class="content">
		<!-- 顶部订单状态 -->
		<view class="status">
			<view class="orderImg">
				<image src="../../static/orderImg.png" mode=""></image>
			</view>
			<view class="orderCar">
				<image src="../../static/shopCar.png" mode=""></image>
				<text>快递已签收，感谢您在健康联盟购物，期待您的下次购买！</text>
			</view>
			
		</view>
		<!-- 中间地址 -->
		<view class="map">
			<view class="mapImg">
				<image src="../../static/map.png" mode=""></image>
			</view>
			<view class="userInfo">
				<text>张三</text>
				<text>15888888888</text>
				<view>
					河南省郑州市郑东新区中州大道与商都路交汇处东500米路南
				</view>
			</view>
		</view>
		<!-- 商品 -->
		<view class="goodsList">
			<!-- 店铺 -->
			<navigator url="" class="store">
				<view class="icons">
					<image src="../../static/store.png" mode=""></image>
					<text>一叶子官方旗舰店</text>
				</view>
			</navigator>
			<navigator class="goodsInfo">
				<!-- 商品图片 -->
				<view class="goodsImg">
					<image src="../../static/photo.png" mode=""></image>
				</view>
				<!-- 商品左边内容 -->
				<view class="rightGoods">
					<view class="goodsDetail">
						<view class="referral">
							Swisse奶蓟草护肝片澳洲进口保健品护 肝解毒片保健品护保健品护保健品护
						</view>
						<!-- 商品类型 -->
						<view class="referrals">
							类型：180粒/瓶
						</view>
					</view>
					<!-- 单价 -->
					<view class="mold">
						<text>￥263\n</text>
						<text>x 1</text>
					</view>
				</view>
			</navigator>
		</view>
		<!-- 订单详情 -->
		<view class="detail">
			<view>
				<text>订单编号</text>
				<text>1223541545</text>
			</view>
			<view>
				<text>下单时间</text>
				<text>2018.10.25 11:35:33</text>
			</view>
			<view>
				<text>配送方式</text>
				<text>圆通速递</text>
			</view>
			<view>
				<text>支付方式</text>
				<text>在线支付</text>
			</view>
			<view>
				<text>支付时间</text>
				<text>2018.10.25 11:35:33</text>
			</view>
		</view>
		<!-- 订单金额 -->
		<view class="orderMoney">
			<view>
				<text>商品金额</text>
				<text>￥263.00</text>
			</view>
			<view>
				<text>运费</text>
				<text>+￥0.00</text>
			</view>
			<view>
				<text>优惠券</text>
				<text>-￥50.00</text>
			</view>
			<view>
				<text>实付款</text>
				<text>￥263.00</text>
			</view>
		</view>
		<!-- 根据订单状态显示不同的按钮 -->
		<view class="btn">
			<button v-if="type==1" class="sub" type="default"> 再次购买 </button>
			<button v-if="type==2" class="sub" type="default"> 立即付款 </button>
			<button v-if="type==4" class="sub" type="default"> 立即评价 </button>
			<button v-if="type==3" class="sub" type="default"> 确认收货 </button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				type:'',
			}
		},
		methods:{
			
		},
		onLoad(options) {
			console.log(options.type);
			this.type=options.type;
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
	background-color: #f7f7f7;
}
.status{
	position: relative;
	width: 100%;
	background-color:#ffffff;
	padding-bottom:15upx;
}
.status .orderImg{
	width: 100%;
}
.status .orderImg image{
	height:440upx;
	width:100%;
}
.status .orderCar{
	/* border:1upx solid #F0ECEC; */
	box-shadow:0upx 0upx 1upx 1upx rgba(240,236,236,1);
	border-radius:17px;
	position:absolute;
	bottom:5upx;
	left:60upx;
	box-sizing: border-box;
	padding:36upx 69upx 36upx 50upx;
	background-color: #fff;
}
.status .orderCar image{
	height:44upx;
	width:67upx;
	vertical-align: middle;
	display:inline-block;
	margin-right:33upx;
}
.status .orderCar text{
	color:#646464;
	font-size: 30upx;
	display:inline-block;
	width: 411upx;
	vertical-align: middle;
}
/* 地址信息 */
.map{
	position: relative;
	width: 100%;
	background-color:#ffffff;
	padding:43upx 47upx 40upx 0;
	box-sizing:border-box;
}
.map .mapImg{
	position:absolute;
	left:43upx;
	top:70upx;
}
.map .mapImg image{
	vertical-align: middle;
	width: 60upx;
	height: 60upx;
}
.map .userInfo{
	margin-left:127upx;
}
.map .userInfo text{
	font-size: 30upx;
}
.map .userInfo text:nth-of-type(1){
	color:#636161;
	margin-right:45upx;
}
.map .userInfo text:nth-of-type(2){
	color:#7F7E7E;
}
.map .userInfo view{
	margin-top:15upx;
	color:#5d5d5d;
	font-size: 20upx;
}
/* 商品列表 */
.store{
	width: 100%;
	margin-bottom:20upx;
}
.store .icons image{
	width: 36upx;
	height: 31upx;
	vertical-align: middle;
	margin-right:10upx;
}
.store .icons text{
	color:#636161;
	font-size: 28upx;
}
.goodsList{
	margin-bottom:4upx;
	margin-top:4upx;
	background-color: #fff;
	box-sizing:border-box;
	padding:20upx 28upx 0;
}
.goodsInfo{
	 position: relative;
	 background-color: #fff;
	 padding-bottom:20upx;
}
.goodsInfo .goodsImg{
	position: absolute;
	top:0;
	left:0;
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

}
.goodsDetail .referral{
	color:#757575;
	font-size: 24upx;
	line-height:38upx;
}
.goodsDetail .referrals{
	color:#B7B7B7;
	font-size: 22upx;
	margin-top:10upx;
}
.goodsDetail .referrals text:nth-of-type(2){
	color:#949292;
	font-size: 20upx;
}
.goodsDetail view:nth-of-type(1){
	/* flex:.8;
	overflow:hidden; */
    display:-webkit-box;
    text-overflow:ellipsis;
    -webkit-line-clamp:2; 
    -webkit-box-orient:vertical;
    white-space:normal;
}
.mold{
	display:flex;
	color:#636161;
	font-size: 24upx;
	margin-top:34upx;
}
.mold text{
	flex:1;
}
.mold text:nth-of-type(2){
	text-align:right;
}
/* 订单详情 */
.detail{
	box-sizing:border-box;
	width: 100%;
	padding-left:29upx;
	padding-top:30upx;
	background-color: #fff;
	margin-bottom:4upx;
	padding-bottom:30upx;
}
.detail view{
	margin-bottom:20upx;
}
.detail view:nth-of-type(5){
	margin-bottom:0upx;
}
.detail view text{
	font-size: 28upx;
}
.detail view text:nth-of-type(1){
	color:#636161;
	margin-right:50upx;
}
.detail view text:nth-of-type(2){
	color:#353333;
}
/* 订单金额 */
.orderMoney{
	box-sizing:border-box;
	width: 100%;
	padding-left:29upx;
	padding-top:30upx;
	padding-right:31upx;
	background-color: #fff;
	margin-bottom:102upx;
	padding-bottom:61upx;
	
}
.orderMoney view{
	display:flex;
	justify-content: space-between;
	margin-bottom:20upx;
}
.orderMoney view:nth-of-type(4){
	margin-bottom:0upx;
}
.orderMoney view text{
	flex:1;
	font-size: 28upx;
}
.orderMoney view text:nth-of-type(1){
	color:#636161;
	text-align:left;
}
.orderMoney view text:nth-of-type(2){
	color:#353333;
	text-align:right;
}
.orderMoney view:nth-of-type(4) text:nth-of-type(2){
	color:#3666D2;
}
/* 订单状态 */
.btn{
	height: 98upx;
	background-color: #fff;
	position:fixed;
	bottom:0;
	width: 100%;
	text-align:right;
	box-sizing:border-box;
	border-top:1upx solid #F5F4F4;
}
.btn .sub{
	display:inline-block;
	margin-right:28upx;
	height: 38upx;
	padding:5upx 15upx;
	color:#3666D2;
	font-size: 20upx;
	border:1upx solid rgba(54,102,210,1);
	border-radius:19upx;
	line-height:28upx;
	text-align:center;
	margin-top:28rpx;
}
</style>
