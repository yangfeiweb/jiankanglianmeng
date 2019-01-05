<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top">
			<view class="money">
				<text>6666</text>
				<view>
					<navigator url="">生命果明细</navigator>
					<navigator url="convertList">兑换记录</navigator>
				</view>
			</view>
			<view class="middle">
				<text data-type='0' :class="type==0? 'active' : ''" @tap='selectTab'>热门</text>
				<text data-type='1' :class="type==1? 'active' : ''" @tap='selectTab'>推荐</text>
			</view>
			<view class="bottom">
				<swiper class='swiper' :indicator-dots="dots" autoplay="false" current="0" interval="2000" duration="500" circular="true" vertical="true">
					<block>
						<swiper-item>
							<view class='view'>
								<image src="../../../static/laba.png" mode=""></image>
								<view class="texts">
									兑换播报:恭喜用户
									<text>123456</text>兑换
									<text>iPhone X 256G</text>一台
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class='view'>
								<image src="../../../static/laba.png" mode=""></image>
								<view class="texts">
									兑换播报:恭喜用户
									<text>123456</text>兑换
									<text>iPhone X 256G</text>一台
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class='view'>
								<image src="../../../static/laba.png" mode=""></image>
								<view class="texts">
									兑换播报:恭喜用户
									<text>123456</text>兑换
									<text>iPhone X 256G</text>一台
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class='view'>
								<image src="../../../static/laba.png" mode=""></image>
								<view class="texts">
									兑换播报:恭喜用户
									<text>123456</text>兑换
									<text>iPhone X 256G</text>一台
								</view>
							</view>
						</swiper-item>
					</block>
				</swiper>
			</view>
		</view>
		<!-- 列表 -->
		<view class="goodsList">
			<view class="goodsTop">
				<text>热门兑换</text>
				<navigator url="">
					更多
					<image src="../../../static/blackArrow.png" mode=""></image>
				</navigator>
			</view>
			<view class="list">
				<view class="main" v-for="(value,index) in list" :key="index">
					<view class="img">
						<image src="../../../static/photo.png" mode=""></image>
					</view>
					<view class="title">
						<text>精选黑色双肩背包\n</text>
						<text>666</text>
						<text>生命果\n</text>
						<button type="default">立即兑换</button>
					</view>
				</view>
				<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			</view>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../../components/load-more.vue'
	export default {
		data() {
			return {
				dots:false,
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
		onLoad() {
			let list = [];
			for (let i = 1; i < 11; i++) {
				list.push(i);
			}
			this.list = list;
		},
		methods: {
			selectTab(e){
				this.type = e.currentTarget.dataset.type;
			},
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
			}, 800);
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
}
page::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#F7F9F9;
	/* padding-bottom:30upx; */
}
/* 顶部 */
.top{
	width: 100%;
	box-sizing: border-box;
	background-color: #fff;
}
.top .money{
	height:212upx;
	width: 100%;
	background:linear-gradient(-48deg,rgba(138,246,191,1),rgba(108,177,224,1));
	text-align: center;
	padding-top:57rpx
}
.top .money text{
	color: #fff;
	font-size: 90upx;
	display: block;
	line-height: 90upx;
}
.top .money view{
	margin-top: 40upx;
}
.top .money view navigator{
	width:131upx;
	height:53upx;
	line-height: 53upx;
	border:1upx solid rgba(255,255,255,1);
	border-radius:27upx;
	color: #fff;
	font-size: 24upx;
	display: inline-block;
}
.top .money view navigator:nth-of-type(1){
	margin-right: 100upx;
}
.top .middle{
	display: flex;
	height: 80upx;
	line-height: 80upx;
	width: 100%;
	box-sizing:border-box;
	border-bottom: 2upx solid #EDF1F5;
}
.top .middle text{
	flex: 1;
	color: #797979;
	font-size: 30upx;
}
.top .middle text:nth-of-type(1){
	text-align: right;
	padding-right: 143upx;
	box-sizing: border-box;
}
.top .middle text:nth-of-type(2){
	text-align: left;
	padding-left: 30upx;
}
.top .middle .active{
	color: #72BFD9;
	position: relative;
}
.top .middle .active:nth-of-type(1)::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 50upx;
    height: 4upx;
    background-color: #72BFD9;
    right: 150upx;
    /* transform: translateX(-50%); */
    border-radius: 2upx;
}
.top .middle .active:nth-of-type(2)::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 50upx;
    height: 4upx;
    background-color: #72BFD9;
    left: 35upx;
    /* transform: translateX(-50%); */
    border-radius: 2upx;
}
.top .bottom{
	height: 80upx;
	line-height: 80upx;
	width: 100%;
	padding: 0 25upx;
	box-sizing: border-box;
}
.top .bottom .swiper{
	width: 100%;
	height: 100%;
}
.top .bottom .swiper .view{
	color: #4A5257;
	font-size: 30upx;
	width: 100%;
	box-sizing: border-box;
	top: 0;
	position: absolute;
	height: 100%;
	display: flex;
	font-weight:500;
}
.top .bottom .swiper .view image{
	width: 31upx;
	height: 27upx;
	margin-top: 28upx;
}
.top .bottom .swiper .view .texts{
	display:inline;
}
.top .bottom .swiper .view .texts text{
	font-size: 26upx;
	color: #E69E33;
}
/* 热门推荐列表 */
.goodsList{
	width: 100%;
	background-color: #fff;
	margin-top: 20upx;
	box-sizing: border-box;
}
.goodsList .goodsTop{
	width: 100%;
	box-sizing: border-box;
	padding: 0 26upx 0 37upx;
	height: 80upx;
	line-height: 80upx;
	display: flex;
}
.goodsList .goodsTop text{
	flex: 1;
	text-align: left;
	color: #333;
	font-size: 30upx;
}
.goodsList .goodsTop navigator{
	flex: 1;
	text-align: right;
	color: #333;
	font-size: 30upx;
}
.goodsList .goodsTop navigator image{
	width: 12upx;
	height: 22upx;
	margin-left: 10upx;
	vertical-align: middle;
}
.goodsList .list{
	width: 100%;
	box-sizing: border-box;
	padding: 0 23upx 0 24upx;
}
.goodsList .list .main{
	width: 345upx;
	height: 440upx;
	border: 1upx solid #f8f8f8;
	margin-bottom: 25upx;
	display:inline-block;
}
.goodsList .list .main:nth-of-type(2n-1){
	margin-right: 7upx;
}
.goodsList .list .main .img{
	width: 100%;
	height: 269upx;
	background-color: #F8F8F8;
	text-align:center;
}
.goodsList .list .main .img image{
	display: inline-block;
	margin: 0 auto;
	margin-top: 37upx;
	width: 198upx;
	height: 230upx;
}
.goodsList .list .main .title{
	width: 100%;
	text-align: center;
}
.goodsList .list .main .title text:nth-of-type(1){
	color: #333;
	font-weight:500;
	display: block;
	font-size: 32upx;
	margin-top:10upx;
	line-height:32upx;
}
.goodsList .list .main .title text:nth-of-type(2){
	color: #E69E33;
	font-size: 24upx;
}
.goodsList .list .main .title text:nth-of-type(3){
	color: #666;
	font-size: 24upx;
}
.goodsList .list .main .title button{
	margin-top: 18upx;
	width:150upx;
	height:47upx;
	border:2upx solid rgba(85,171,255,1);
	border-radius:24upx;
	background-color: #fff;
	line-height: 44upx;
	font-size: 22upx;
	color: #5FB0FF;
	margin: 0 auto;
	margin-top:10upx;
}
</style>
