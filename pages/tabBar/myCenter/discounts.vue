<template>
	<view class="content">
		<view class="discount">
			<view class="list" v-for="(value,index) in list" :key="index">
				<view :class="type!=1?'active':'left'">
					<text>￥</text>
					<text>50</text>
					<text>满100可用</text>
				</view>
				<view class="right">
					<view class="">
						<text>养生佳品宁夏枸杞购物券</text>
						<text>有效期至2019-10-10</text>
					</view>
					<view class="img">
						<navigator class="has" v-if="type!=1" url="#">立即领取</navigator>
						<navigator class="use" v-else url="#">立即使用</navigator>
						<image v-if="type==1" src="../../../static/hasBrought.png" mode=""></image>
					</view>
				</view>
			</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../../components/load-more.vue'
	export default {
		data() {
			return {
				type:'1',
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
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
	background-color: #fcfcfd;
}

page::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
.content{
	width: 100%;
	height: 100%;
	/* background-color: #fcfcfd; */
}
.discount{
	width: 100%;
	padding-top: 44upx;
}
.discount .list{
	width:707upx;
	height:203upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 2upx 31upx 7upx rgba(222,222,243,0.21);
	border-radius:10upx;
	margin: 0 auto 32upx;
	display: flex;
}
.discount .list .left{
	width: 168upx;
	text-align: center;
	border-right: 1upx dashed #E9E9EC;
	padding-top: 30upx;
	padding-left: 23upx;
}
.discount .list .left text{
	color: #23A4E1;
}
/* active的样式 */
.discount .list .active text{
	color: #FE5E0B;
}
.discount .list .active{
	width: 168upx;
	text-align: center;
	border-right: 1upx dashed #E9E9EC;
	padding-top: 30upx;
	padding-left: 23upx;
}
.discount .list .active text{
	color: #23A4E1;
}
.discount .list .active text:nth-of-type(3){
	display: block;
	font-size: 26upx;
	/* margin-top: 25upx; */
}
.discount .list .active text:nth-of-type(2){
	font-weight:bold;
	font-size: 60upx;
}
.discount .list .active text:nth-of-type(1){
	font-weight:500;
	font-size: 34upx;
}


.discount .list .left text:nth-of-type(3){
	display: block;
	font-size: 26upx;
	/* margin-top: 25upx; */
}
.discount .list .left text:nth-of-type(2){
	font-weight:bold;
	font-size: 60upx;
}
.discount .list .left text:nth-of-type(1){
	font-weight:500;
	font-size: 34upx;
}
.discount .list .right{
	display: flex;
	width: 538upx;
}
.discount .list .right view:nth-of-type(1){
	padding-top: 45upx;
	padding-left: 18upx;
	width: 358upx;
	box-sizing: border-box;
}
.discount .list .right view:nth-of-type(1) text:nth-of-type(1){
	font-weight:500;
	font-size: 30upx;
	color: #333;
	display: block;
	margin-bottom: 24upx;
}
.discount .list .right view:nth-of-type(1) text:nth-of-type(2){
	font-size: 26upx;
	color: #B3B3B3;
}
.discount .list .right .img{
	position: relative;
	text-align: right;
	width: 180upx;
}
.discount .list .right .img image{
	width: 86upx;
	height: 97upx;
	position: absolute;
	right: 0;
	bottom: 0;
}
.discount .list .right .img .has{
	width:166upx;
	height:57upx;
	background:linear-gradient(268deg,rgba(67,111,255,1),rgba(115,144,255,1));
	border-radius:29upx;
	text-align: center;
	line-height: 57upx;
	color: #fff;
	font-size: 30upx;
	margin: 72upx 18upx 0 0;
}
.discount .list .right .img .use{
	width:166upx;
	height:57upx;
	background:linear-gradient(268deg,rgba(255,88,18,1),rgba(253,101,2,1));;
	border-radius:29upx;
	text-align: center;
	line-height: 57upx;
	color: #fff;
	font-size: 30upx;
	margin: 72upx 18upx 0 0;
}
</style>
