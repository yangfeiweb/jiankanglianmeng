<template>
	<view class="content">
		<!-- 商品详细信息 -->
		<view class="goodsDetail">
			<!-- 顶部商品图片 -->
			<view class="goodsImg">
				<image src="../../../static/photo.png" mode=""></image>
			</view>
			<!-- 商品购买 -->
			<view class="goodsBuy">
				<view class="left">
					<text>精品双肩包 商务包\n</text>
					<text>市场价:  ￥666\n</text>
					<text>{{needFruit}}</text>
					<text>生命果</text>
				</view>
				<view class="left right">
					<text>剩余生命果</text>
					<text>{{lifeFruit}}个</text>
					<view class="addNum">
						<text>兑换</text>
						<view class="titlte">
							<text @tap="reduce">-</text>
							<text>{{count}}</text>
							<text @tap="addNum">+</text>
						</view>
						<text>份</text>
					</view>
				</view>
			</view>
			<!-- 数量图片等信息 -->
			<view class="goodsInfo">
				<text>商品详情</text>
				<view class="info">
					<text>名称:精品双肩包\n</text>
					<text>材质:纯棉精仿\n</text>
					<text>重量:105g\n</text>
					<text>颜色:黑色</text>
				</view>
			</view>
		</view>
		<!-- 底部立即兑换 -->
		<view class="btn">
			<button type="default" @tap="convert">立即兑换</button>
		</view>
		<!-- 弹窗 -->
		<view class="toast" v-if="toast">
			<view class="main">
				<view class="top">
					<image v-if="allFruit>lifeFruit" src="../../../static/unconvert.png" mode=""></image>
					<image v-else src="../../../static/convert.png" mode=""></image>
					<text>{{title}}</text>
				</view>
				<view class="bottom">
					<text @tap="confrim">确定</text>
					<text @tap="cancel">取消</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toast:false,
				count:0,
				lifeFruit:'2666',//剩余生命果
				needFruit:'2300',//需要的生命果
				title:'确定兑换商品',
				allFruit:'',//总共需要的生命果
				allfruit:'',//计算后的总生命果
			};
		},
		methods: {
			addNum() {
				this.count++;
			},
			reduce(){
				if(this.count<=0){
					uni.showToast({
						title: '购买数量不能小于0!',
						duration:2000,
						icon:'none'
					});
					this.count=0;
				}else{
					this.count-=1;
				}
			},
			// 兑换商品
			convert(){
				if(this.count==0){
					uni.showToast({
						title: '购买数量不能小于0',
						duration:2000,
						icon:'none'
					});
					return;
				}else{
					this.toast=true;
					this.allFruit=this.count*this.needFruit;
					if(this.allFruit>this.lifeFruit){
						this.title='对不起，生命果不足'
					}else{
						this.title='确定兑换商品'
					}
				}
			},
			// 确定兑换
			confrim(){
				this.toast=false;
			},
			cancel(){
				this.toast=false;
			},
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
	background-color:#fff;
	/* padding-bottom:30upx; */
}
/* 商品详情 */
/* 商品图片 */
.goodsDetail{
	width: 100%;
}
.goodsDetail .goodsImg{
	width: 100%;
	text-align: center;
	height: 336upx;
	border-bottom: 2upx solid #f5f5f5;
}
.goodsDetail .goodsImg image{
	width: 229upx;
	height: 227upx;
	margin-top: 46upx;
}
/* 数量加减 */
.goodsDetail .goodsBuy{
	width: 100%;
	text-align: center;
	height: 197upx;
	border-bottom: 2upx solid #f5f5f5;
	padding: 0 22upx 0 19upx;
	box-sizing: border-box;
	display: flex;
}
.goodsDetail .goodsBuy .left{
	width: 50%;
	padding-top: 19upx;
}
.goodsDetail .goodsBuy .left:nth-of-type(1){
	text-align: left;
}
.goodsDetail .goodsBuy .left:nth-of-type(1) text:nth-of-type(1){
	color: #333;
	font-size: 28upx;
}
.goodsDetail .goodsBuy .left:nth-of-type(1) text:nth-of-type(2){
	color: #999;
	font-size: 20upx;
	text-decoration: line-through;
}
.goodsDetail .goodsBuy .left:nth-of-type(1) text:nth-of-type(3){
	color: #FF4F4F;
	font-size: 34upx;
	margin-right: 6upx;
	vertical-align: middle;
}
.goodsDetail .goodsBuy .left:nth-of-type(1) text:nth-of-type(4){
	color: #999;
	font-size: 20upx;
}
.goodsDetail .goodsBuy .left:nth-of-type(2){
	text-align: right;
}
.goodsDetail .goodsBuy .right text:nth-of-type(1){
	color: #999;
	font-size: 22upx;
}
.goodsDetail .goodsBuy .right text:nth-of-type(2){
	color: #999;
	font-size: 26upx;
}
.goodsDetail .goodsBuy .right .addNum{
	margin-top: 45upx;
	height: 50upx;
	display: flex;
	padding-left:85upx;
	box-sizing: border-box;
}
.goodsDetail .goodsBuy .right .addNum text:nth-of-type(1){
	color: #333;
	font-size: 26upx;
}
.goodsDetail .goodsBuy .right text:nth-of-type(2){
	color: #999;
	font-size: 26upx;
}
/* 加减数量的按钮 */
.goodsDetail .goodsBuy .right .addNum .titlte{
	width: 155upx;
	border: 1upx solid #999;
	border-radius:5upx;
	display: flex;
	text-align: center;
	margin: 0 16upx 0 12upx;
}
.goodsDetail .goodsBuy .right .addNum .titlte text{
	color: #333;
	font-size: 28upx;
	flex: 1;
}
.goodsDetail .goodsBuy .right .addNum .titlte text:nth-of-type(2){
	height: 100%;
	width: 51upx;
	border-right:1upx solid #999;
	border-left:1upx solid #999;
}
/* 商品书香详情图片 */
.goodsDetail .goodsInfo{
	width: 100%;
	pause-after: 30upx;
	box-sizing: border-box;
	padding-left: 21upx;
	padding-top:30rpx;
}
.goodsDetail .goodsInfo text{
	color: #333;
	font-size: 26upx;
}
.goodsDetail .goodsInfo .info{
	width: 100%;
}
.goodsDetail .goodsInfo .info text{
	color: #666;
	font-size: 26upx;
}
.btn{
	text-align: center;
	width: 100%;
	height: 97upx;
	position: fixed;
	bottom: 0;
	padding-top: 21upx;
	background-color: #fff;
	box-shadow:0upx 2upx 29upx 6upx rgba(52,57,57,0.41);
}
.btn button{
	width:367upx;
	height:82upx;
	background:rgba(113,189,218,1);
	border-radius:10upx;
	color: #fff;
	font-size: 34upx;
	margin: 0 auto;
}
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
	height: 475upx;
	width: 539upx;
	margin:320upx 0 0 106upx;
	border-radius:28upx;
	box-sizing:border-box;
	/* padding-left:36upx; */
}
.toast .main .top{
	width: 100%;
	text-align: center;
	padding-top: 65upx;
}
.toast .main .top image{
	width: 256upx;
	height: 239upx;
	display: block;
	margin: 0 auto;
	margin-bottom: 15upx;
}
.toast .main .top text{
	color: #1296DB;
	font-size: 34upx;
}
.toast .main .bottom{
	height: 83upx;
	line-height: 83upx;
	margin-top: 14upx;
	border-top: 2upx solid #F4F2F2;
	display: flex;
	width: 100%;
}
.toast .main .bottom text{
	flex: 1;
	color: #000033;
	font-size: 30upx;
	text-align: center;
}
.toast .main .bottom text:nth-of-type(1){
	border-right: 2upx solid #F4F2F2;
}
</style>
