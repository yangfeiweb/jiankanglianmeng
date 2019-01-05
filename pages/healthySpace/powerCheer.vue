<template>
	<view class="content">
		<!-- 顶部图片 -->
		<view class="mainImg">
			<image src="../../../static/powe.png" mode=""></image>
		</view>
		<view class="title">
			<view class="time">
				<image src="../../../static/time.png" mode=""></image>
				<text>日常任务</text>
			</view>
			<!-- 任务列表 -->
			<view class="list active">
				<view class="listImg">
					<image src="../../../static/timeLogin.png" mode="" style="width: 63upx;height: 56upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>每日签到</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n每日登陆签到送体力</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<image v-if="status==1" src="../../../static/doIt.png" mode=""></image>
					<navigator v-else src='#'>去完成</navigator>
				</view>
			</view>
			<view class="list">
				<view class="listImg">
					<image src="../../../static/healthGoods.png" mode="" style="width: 53upx;height: 51upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>健康商城</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n根据商城购物金额数量赠送不定量体力</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
			<view class="list active">
				<view class="listImg">
					<image src="../../../static/invinit.png" mode="" style="width: 54upx;height: 47upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>邀请好友</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n邀请好友注册，购物赠送一定体力</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
		</view>
		<!-- 推荐任务 -->
		<view class="title">
			<view class="time">
				<image src="../../../static/recommend.png" mode="" style="width: 43upx;height: 55upx;"></image>
				<text>推荐任务</text>
			</view>
			<!-- 任务列表 -->
			<view class="list active">
				<view class="listImg">
					<image src="../../../static/common.png" mode="" style="width: 49upx;height: 51upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>关注公众号</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n关注“健康联盟”微信公众号获取体力</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
			<view class="list">
				<view class="listImg">
					<image src="../../../static/idCard.png" mode="" style="width: 56upx;height: 51upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>实名认证</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n完善个人信息，绑定钱包信息</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
			<view class="list active">
				<view class="listImg">
					<image src="../../../static/quality.png" mode="" style="width: 56upx;height: 48upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>正品溯源</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n为好友分享正品商品，赠送一定体力</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
			<view class="list">
				<view class="listImg">
					<image src="../../../static/bindMap.png" mode="" style="width: 51upx;height: 51upx;"></image>
				</view>
				<view class="goDo">
					<view class="left">
						<text>地址绑定</text>
						<view class="goal">
							<image src="../../../static/goal.png" mode=""></image>
							<text>+5体力</text>
						</view>
						<text>\n绑定我的收货地址，获取体力值</text>
					</view>
				</view>
				<!-- 任务完成状态 -->
				<view class="state">
					<navigator src='#'>去完成</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				status:'1'
			}
		},
		methods:{
			
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
	background-color:#fff;
}
.mainImg{
	width: 100%;
	box-sizing:border-box;
	padding:23upx 25upx 0 22upx;
	text-align:center;
}
.mainImg image{
	width: 703upx;
	height: 198upx;
}
/* 日常任务 */
.title{
	width: 100%;
}
.title .time{
	box-sizing:border-box;
	width: 100%;
	padding-left:20upx;
	height: 89upx;
	line-height:89upx;
}
.title .time image{
	width: 49upx;
	height: 49upx;
	vertical-align: middle;
	margin-right:21upx;
}
.title .time text{
	color:#333;
	font-size: 32upx;
}
.title .active{
	background-color: #f9fcfd;
}
.title .list{
	height: 129upx;
	width: 100%;
	position: relative;
}
.title .list .listImg{
	position: absolute;
	left:37upx;
	top:29upx;
}
.title .list .listImg image{
}
/* 左边内容 */
.title .list .goDo{
	margin-left:137upx;
	height: 100%;
	width: 403upx;
}
.title .list .goDo .left{
	/* height: 100%; */
	 position: relative;
	 padding-top:10upx;
}
.title .list .goDo .left .goal{
	width: 146upx;
	position: absolute;
	top:10upx;
	right:0;
	text-align:right
}
.title .list .goDo .left text:nth-of-type(1){
	color:#333;
	font-size: 28upx;
}
.title .list .goDo .left text:nth-of-type(2){
	color:#909090;
	font-size: 22upx;
}
.title .list .goDo .left .goal text{
	color:#fff;
	text-align:center;
	font-size: 24upx;
	display:inline-block;
	width: 128upx;
	height: 34upx;
	line-height:34upx;
	background:linear-gradient(268deg,rgba(18,194,233,1),rgba(47,144,219,1));
	box-shadow:0upx 3upx 30upx 2upx rgba(26,180,229,0.51);
	border-radius:10upx;
}
.title .list .goDo .left .goal image{
	width: 36upx;
	height: 46upx;
	position:absolute;
	left:0;
}
.title .list .state{
	position: absolute;
	top:35upx;
	right:19upx;
}
.title .list .state navigator{
	color:#fff;
	font-size: 28upx;
	display:inline-block;
	width: 123upx;
	height: 60upx;
	text-align:center;
	background:rgba(35,164,225,1);
	border-radius:30upx;
	line-height:60upx;
}
.title .list .state image{
	width: 55upx;
	height: 55upx;
	vertical-align: middle;
	margin-right: 35upx;
}
</style>
