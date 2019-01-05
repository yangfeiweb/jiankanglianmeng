<template>
	<view class="content">
		<view class="scsj">
			<view class="contentTop">
				<view class="ctLeft">
					<image v-if="orderState!=1" src="../../../static/manageUn.png" mode="" @tap="changOrder" data-state='2'></image>
					<image v-if="orderState==1" src="../../../static/manageSelect.png" mode="" @tap="changOrder" data-state='1'></image>
				</view>
				<view class="ctLeft">
					<image v-if="orderState1!=1" src="../../../static/myOrderSelect.png" mode="" @tap="changOrder1" data-states='1'></image>
					<image v-if="orderState1==1" src="../../../static/myOrderUn.png" mode="" @tap="changOrder1" data-states='2'></image>
				</view>
			</view>
			<!-- 分类 所有  售卖 完成 -->
			<view class="classify">
				<view class="threeClass">
					<view class="" v-bind:class="{select:type==1&&isActive}" @tap="change" data-type='1'>
						<text>所有</text>
					</view>
					<view class="" v-bind:class="{select:type==2&&isActive}" @tap="change" data-type='2'>
						<image src="../../../static/circle1.png" mode=""></image>
						<text>售卖</text>
					</view>
					<view class=""  v-bind:class="{select:type==3&&isActive}" @tap="change" data-type='3'>
						<image src="../../../static/circle.png" mode=""></image>
						<text>完成</text>
					</view>
					
				</view>
				<view class="screen">
					<view id="time" @tap="change1" data-selected='1' v-bind:class="{select:selected==1&&isActive}">
						<text>时间</text>
						<image v-if='selecteds==2' src="../../../static/botArrow.png" mode=""></image>
						<image v-if="selecteds==5" src="../../../static/topArrow.png" mode=""></image>
					</view>
					<view id="time" @tap="change1" data-selected='2' v-bind:class="{select:selected==2&&isActive}">
						<text>数量</text>
						<image v-if='selecteds1==3' src="../../../static/botArrow.png" mode=""></image>
						<image v-if="selecteds1==6" src="../../../static/topArrow.png" mode=""></image>
					</view>
					<view id="time"  @tap="change1" data-selected='3' v-bind:class="{select:selected==3&&isActive}">
						<text>单价</text>
						<image v-if='selecteds2==4' src="../../../static/botArrow.png" mode=""></image>
						<image v-if="selecteds2==7" src="../../../static/topArrow.png" mode=""></image>
					</view>
					<view id="time" @tap="change1" data-selected='4' v-bind:class="{select:selected==4&&isActive}">
						<text>类型</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="contentar">
			<view class='scroll-view'>
				<view id="list" :class="indexs==index? 'active' : ''" @tap='selectDel' :data-indexs='index'  v-for="(value,index) in list" :key="index">
					<view class="nyr">
						<image src="../../../static/circle.png" mode=""></image>
						<text n>10-23 9:09\n</text> 
						<text>正在出售</text>
					</view>
					<view class="num">
						<text>60个</text>
					</view>
					<view class="money">
						<text>21.00元/个\n</text>
						<text>1,260.00元</text>
					</view>
					<view class="goBuy">
						<text>立即购买</text>
						<image v-if="type==2&&indexs==index" src="../../../static/delete.png" mode="" @tap="delOrde"></image>
					</view>
				</view>
				<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			</view>
		</view>
		<!-- 弹窗 -->
		<view class="toast" v-if="toast">
			<view class="delOrder">
				<view class="top">
					<image src="../../../static/delOrder.png" mode=""></image>
					<text>确定取消订单</text>
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
	import loadMore from '../../../components/load-more.vue'
	export default {
		data(){
			return{
				type:1,
				toast:false,
				indexs:'-1',
				orderState:'1',
				orderState1:'1',
				selected:1,
				isActive:true,
				selecteds:2,
				selecteds1:3,
				selecteds2:4,
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
			// 订单类型切换
			changOrder(e){
				var el=e.currentTarget;
				this.orderState=el.dataset.state;
				console.log(this.orderState)
				if(this.orderState==1){
					this.orderState1=2;
					return;
				}else if(this.orderState==2){
					this.orderState1=1;
					this.orderState=1;
					console.log(this.orderState+'-----2')
					
				}
			},
			changOrder1(e){
				var el=e.currentTarget;
				this.orderState1=el.dataset.states;
				console.log(this.orderState1)
				if(this.orderState1==1){
					this.orderState=2;
					this.orderState1=2;
					return;
				}else if(this.orderState1==2){
					this.orderState=2;
					console.log(this.orderState+'----1');
					return;
				}
			},
			// 切换样式
			change(e){
				var el=e.currentTarget;
				this.type=el.dataset.type;
				this.indexs='-1'
			},
			// 列表的点击选中
			selectDel(e){
				var el=e.currentTarget;
				this.indexs=el.dataset.indexs;
				console.log(e)
			},
			change1(e){
				var el=e.currentTarget;
				this.selected=el.dataset.selected;
				// 按时间顺序分
				if(this.selected==1){
					if(this.selecteds===2){
						this.selecteds=5
					}else{
						this.selecteds=2
					}
				}
				// 按数量分
				if(this.selected==2){
					if(this.selecteds1===3){
						this.selecteds1=6
					}else{
						this.selecteds1=3
					}
				}
				// 按单价分
				if(this.selected==3){
					if(this.selecteds2===4){
						this.selecteds2=7
					}else{
						this.selecteds2=4
					}
				}
			},
			// 滚动到底部会触发的时间
			lower(e) {
				console.log(e);
				var page1=10
				this.page++;
				if(this.page>this.totalPage){
					uni.showToast({
						title: '暂无更多!',
						duration:2000,
						icon:'none'
					});
					return;
				}else{
					uni.showLoading({
						title: '加载中'
					});
					this.list.push(this.list)
					setTimeout(function () {
						uni.hideLoading();
					}, 2000);
				}
			},
			confrim(){
				this.toast=false;
			},
			cancel(){
				this.toast=false;
			},
			// 显示弹窗
			delOrde(){
				this.toast=true
			}
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
page{
	box-sizing: border-box;
	/* overflow:hidden; */
}
page::-webkit-scrollbar{
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	background-color:#fff;
}
.content .scsj{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
	background-color: #fff;
}
.contentTop{
	display:flex;
	margin-top:20upx;
	padding:0 49upx;
	box-sizing:border-box;
	justify-content:space-between;
}
.contentTop view{
	flex:1;
	/* border:2upx solid #eee; */
	/* box-shadow: eee 10upx 10upx 30upx 5upx ; */
}
/* .ctLeft{
	margin:0 50upx 0;
} */
.contentTop view image{
	width:325upx;
	height: 178upx;
	vertical-align:middle;
}
/* 分类 */
.classify{
	padding:0 49upx;
}
.threeClass{
	display:flex;
	margin-bottom:20upx;
	justify-content: space-between;
	height: 80upx;
	line-height:80upx;
	border-bottom:2upx solid #E8E5E5;
}
.threeClass view{
	display:inline-block;
	flex:1;
	color:#999;
	font-size: 24upx;
	text-align:center;
}
.threeClass view image{
	width: 12upx;
	height: 12upx;
	vertical-align:middle;
	margin-right:10upx;
}
.select{
	color:#333;
	border-bottom:2upx solid #6BD1E2;
}
.screen{
	display:flex;
	justify-content: space-between;
	height: 80upx;
	line-height:80upx;
	border-bottom:2upx solid #E8E5E5;
}
.screen #time{
	display:inline-block;
	flex:1;
	color:#999;
	font-size: 24upx;
	text-align:center;
}
.screen #time text{
	/* display:inline-block; */
	width: 100%;
}
.screen #time image{
	display:inline-block;
	width: 18upx;
	height: 10upx;
	vertical-align:middle;
	margin-left:5upx;
}
/* 列表循环 */
.contentar{
	/* over-flow:hidden; */
	padding-top: 376upx;
}
.contentar::-webkit-scrollbar{
	width: 0;
	height: 0;
	color: transparent;
}
.scroll-view{
	padding-left:23upx;
	width: 100%;
	box-sizing:border-box;
}
.scroll-view .active{
	background:rgba(255,255,255,1);
	box-shadow:10rpx 1rpx 10rpx 10rpx rgba(189,231,235,0.33);
	border-radius:10upx;
	padding:20upx 0;
	padding-left:20rpx;
	box-sizing:border-box;
}
.-view .active .nyr{
	flex:.7;
	text-align:left;
	padding-left:20rpx;
}
.scroll-view .active .num{
	flex:.7;
	text-align:left;
}
.scroll-view .active .money{
	flex:.7;
	text-align:left;
}
#list{
	padding:20upx 0;
	box-sizing:border-box;
	display:flex;
	width: 100%;
	justify-content: space-between;
	border-bottom:2upx solid #F1EFEF;
}
.scroll-view view:nth-of-type(1){
	/* flex:1; */
	/* height: 107upx; */
}
.nyr{
	text-align:center;
}
.num{
	flex:.9;
	text-align:center;
}
.money{
	flex:1.1;
	text-align:center;
	
}
.goBuy{
	flex:.8;
}
/* 年月日 */
.nyr image{
	width: 12upx;
	height: 12upx;
	vertical-align:middle;
	margin-right:8upx;
}
.nyr text:nth-of-type(1){
	color:#333333;
	font-size: 22upx;
}
.nyr text:nth-of-type(2){
	color:#4BB931;
	font-size: 20upx;
	margin-left:20rpx;
}
.money text:nth-of-type(1){
	color:#333333;
	font-size: 20upx;
}
.money text:nth-of-type(2){
	color:#89F5C0;
	font-size: 18upx;
}
.num text{
	color:#1296DB;
	font-size: 20upx;
}
.num{
	height: 100%;
	line-height:107upx;
}
.goBuy{
	height: 100%;
	line-height:107upx;
}
.goBuy text{
	color:#1296DB;
	font-size: 26upx;
}
.goBuy image{
	vertical-align:middle;
	margin-left:31upx;
	width: 31upx;
	height: 31upx;
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
.toast .delOrder{
	background-color: #fff;
	height: 517upx;
	width: 539upx;
	margin:320upx 0 0 106upx;
	border-radius:28upx;
	box-sizing:border-box;
	/* padding-left:36upx; */
}
.toast .delOrder .top{
	width: 100%;
	text-align: center;
	padding-top: 65upx;
}
.toast .delOrder .top image{
	width: 256upx;
	height: 239upx;
	display: block;
	margin: 0 auto;
	margin-bottom:46upx;
}
.toast .delOrder .top text{
	color: #1296DB;
	font-size: 34upx;
}
.toast .delOrder .bottom{
	height: 83upx;
	line-height: 83upx;
	margin-top: 30upx;
	border-top: 2upx solid #F4F2F2;
	display: flex;
	width: 100%;
}
.toast .delOrder .bottom text{
	flex: 1;
	color: #000033;
	font-size: 30upx;
	text-align: center;
}
.toast .delOrder .bottom text:nth-of-type(1){
	border-right: 2upx solid #F4F2F2;
}
</style>
