<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top">
			<view class="topBg">
			</view>
			<view class="title">
				<view class="tTop">
					<view class="tLeft">
						<view class="tImg">
							<image src="../../../static/photo.png" mode=""></image>
						</view>
						<view class="tName">
							<text>MyName\n</text>
							<text>15888888888</text>
						</view>
					</view>
					<view class="tLeft">
						<image src="../../../static/qrcode.png" mode=""></image>
						<text>数据钱包</text>
					</view>
				</view>
				<view class="tMiddle">
					<view class="lifeNum">
						<text>生命果(个)\n</text>
						<text>6,666</text>
					</view>
					<view class="lifeNum">
						<text>余额(人民币)\n</text>
						<text>6666,6666</text>
					</view>
				</view>
				<view class="tBottom">
					<view class="manage" data-sall='1' @tap="toastShow">
						<image src="../../../static/manage1.png" mode=""></image>
						<text>买入</text>
					</view>
					<view class="manage" data-sall='2' @tap="toastShow">
						<image src="../../../static/hammer.png" mode="">锤子</image>
						<text>卖出</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 中间曲线图 -->
		<!-- <view class="line">
			<mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" />
		</view> -->
		<view class="canvasView">
			<view class="canvasing">
				<view class="canvase">
					市场涨幅
				</view>
				<view class="canvase">
					<text :class="type1=='0'? 'active1' : ''" @tap="choice1" data-type1='0'>10MIN</text>
					<text :class="type1=='1'? 'active1' : ''" @tap="choice1" data-type1='1'>1H</text>
					<text :class="type1=='2'? 'active1' : ''" @tap="choice1" data-type1='2'>24H</text>
					<text :class="type1=='3'? 'active1' : ''" @tap="choice1" data-type1='3'>1Y</text>
					<text :class="type1=='4'? 'active1' : ''" @tap="choice1" data-type1='4'>1M</text>
				</view>
			</view>
			<mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" style="width:100%;height:400px;"/>
		</view>
		<!-- 底部详细列表 -->
		<view class="list">
			<view class="listTop">
				<view class="listLeft">
					交易明细(每日交易时间9：00~22：00)
				</view>
				<view class="listLeft">
					<text :class="type=='0'? 'active' : ''" @tap="choice" data-type='0'>所有</text>
					<text :class="type=='1'? 'active' : ''" @tap="choice" data-type='1'>买入</text>
					<text :class="type=='2'? 'active' : ''" @tap="choice" data-type='2'>卖出</text>
				</view>
			</view>
			<!-- 详细列表 -->
			<view class="listDetail">
				<view class="mde">
					<view class="five">
						<text>时间</text>
						<text>数量</text>
						<text>单价</text>
						<text>金额</text>
						<text>类型</text>
					</view>
					<scroll-view scroll-y="true">
						<block>
							<view>
								<text>09-01 09：00</text>
								<text>66个</text>
								<text>￥66.66</text>
								<text>￥666.66</text>
								<text>卖出(代售)</text>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<view v-if="toast" class="toast">
			<view class="main">
				<!-- 卖出交易 -->
				<view v-if="sall==2" class="sallBuy">
					<view class="sTop">
						<view class="sImg">
							<image src="../../../static/photo.png" mode=""></image>
						</view>
						<view class="sTitle">
							<text>MyName</text>
						</view>
					</view>
					<view class="tTitle">
						卖出交易
					</view>
					<view class="sMiddle">
						<view class="inputTitle">
							<view>
								<text>卖出果实(个)\n</text>
								<input placeholder-class="place-holder" type="number" placeholder="输入卖出数量" v-model="sallNum" @blur="judge"/>
								<text v-if="sallNum>haveNum" class="hides">(数量不足)</text>
							</view>
							<view>
								<text>果实单价(元)\n</text>
								<input placeholder-class="place-holder" type="number" placeholder="输入果实单价" v-model="unitPrice" @blur="count"/>
							</view>
						</view>
						<view class="showTitle">
							<view>
								<text>获得收益(元)\n</text>
								<text>{{earnings}}</text>
							</view>
							<view>
								<text>剩余果实(个)</text>
								<image src="../../../static/break.png" mode=""></image>
								<text>\n{{haveNum}}</text>
							</view>
						</view>
					</view>
					<view class="sBottom">
						<button v-if="sallNum>haveNum" class="btnSall" type="default" disabled="true">卖出</button>
						<button v-else class="btnSall1" type="default">卖出</button>
						<button class="cancel" type="default" @tap="toastHide">取消</button>
					</view>
				</view>
				<!-- 买入交易 -->
				<view v-if="sall==1" class="sallBuy">
					<view class="sTop">
						<view class="sImg">
							<image src="../../../static/photo.png" mode=""></image>
						</view>
						<view class="sTitle">
							<text>MyName</text>
							<navigator>立即充值</navigator>
						</view>
					</view>
					<view class="tTitle">
						买入交易
					</view>
					<view class="sMiddle">
						<view class="inputTitle">
							<view>
								<text>购买果实(个)\n</text>
								<text class="frits">66666</text>
							</view>
							<view>
								<text>果实单价(元)\n</text>
								<text class="frits">66666</text>
							</view>
						</view>
						<view class="showTitle">
							<view>
								<text>支付金额(元)\n</text>
								<text>77777</text>
							</view>
							<view>
								<text>钱包金额(元)</text>
								<image src="../../../static/break.png" mode=""></image>
								<text>\n6666</text>
								<text class="warn">(金额不足)</text>
							</view>
						</view>
					</view>
					<view class="sBottom">
						<button class="btnSall" type="default" disabled="true">买入</button>
						<!-- <button class="btnSall2" type="default">买入</button> -->
						<button class="cancel" type="default" @tap="toastHide">取消</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import * as echarts from '../../../components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue';
	
	export default {
		data(){
			return{
				echarts,
				type:0,
				type1:0,
				sall:'',
				num:30,
				toast:false,
				sallNum:'',//卖出个数
				haveNum:6666,//剩余个数
				earnings:'0.00',//卖出收益
				unitPrice:'',//果实单价
				lineChart:{}
			}
		},
		onLoad(options) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#2a99de',
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
		},
		methods:{
			// 折线图初始化函数
			lineInit: function (canvas, width, height) {
				let lineChart = this.echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(lineChart);
				lineChart.setOption(this.getLineOption());
				// this.lineChart=lineChart
				// return lineChart
			},
			// 折线图基本配置项
			getLineOption() {
				let option={
					animation: false,
					color: ['#ffffff'],
					animation: true,
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['','']
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataZoom : {show: true},
							magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
							restore : {show: true},
							saveAsImage : {show: true},
						}
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							axisLine: {
							lineStyle: {
								width: '1',
								color: "#ffffff", //坐标线颜色	
							}
						},
					splitLine: {
						show: true, //y轴线是否显示
						lineStyle: {
							width: '1', //线的宽度
							color: "#ffffff", //线的颜色
							type : 'dashed' 
						},
					},
					data : function (){
						var list = [];
						for (var i = 1; i <= 30; i++) {
							list.push('3-' + i);
						}
						return list;
						}()
					}
					],
					yAxis : [
						{
							type : 'value',
							axisLine: {
							lineStyle: {
								width: '1',
								color: "#ffffff", //坐标线颜色	
							}
						},
						position:'right',
						splitLine: {
							show: true, //y轴线是否显示
							lineStyle: {
							width: '1', //线的宽度
							color: "#ffffff", //线的颜色
							type : 'dashed' 
							},
						},
					}
					],
					series : [
						{
						name:'最高',
						type:'line',
						data:function (){
							var list = [];
							for (var i = 1; i <= 30; i++) {
								list.push(Math.round(Math.random()* 30));
								}
							return list;
							}()
						},
					]
				}
				return option;
			},
			choice(e){
				this.type = e.currentTarget.dataset.type;
				console.log(this.type)
			},
			choice1(e){
				this.type1 = e.currentTarget.dataset.type1;
				// this.lineChart.setOption(this.getLineOption());
				console.log(this.lineChart,this.type1)
			},
			// 显示弹窗
			toastShow(e){
				this.sall = e.currentTarget.dataset.sall;
				this.toast=true;
				console.log(this.sall)
			},
			// 关闭弹窗
			toastHide(){
				this.toast=false;
			},
			// 判断算量是否够
			judge(){
				
			},
			// 计算果实总价格
			count(){
				if(this.sallNum.trim()==''){
					uni.showToast({
						title: '请输入要卖出的数量!',
						duration:2000,
						icon:'none'
					});
					this.earnings='0.00'
					return;
				}else{
					this.earnings=this.sallNum*this.unitPrice;
				}
			},
			// 曲线图加载
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
.canvasView {
	flex: 1;
	flex-direction: column;
	height: 500upx;
	width: 100%;
	margin-top:50upx;
}
/* 折线图 */
.canvasView .canvasing{
	/* padding:0 33upx 0 32upx; */
	box-sizing:border-box;
	display:flex;
}
.canvasView .canvasing .canvase{
	color:#fff;
	font-size: 23upx;
}
.canvasView .canvasing .canvase:nth-of-type(1){
	flex:.7;
	display:inline-block;
	/* margin-right:63upx; */
	padding-left:32upx
}
.canvasView .canvasing .canvase:nth-of-type(2){
	flex:.8;
	display:inline-block;
	padding-right:33upx;
}
.canvasView .canvasing .canvase:nth-of-type(2) text{
	display:inline-block;
	margin-right:39upx;
}
.canvasView .canvasing .canvase:nth-of-type(2) text:nth-of-type(5){
	margin-right:0;
}
.canvasView .canvasing .canvase:nth-of-type(2) .active1{
	border-bottom:2upx solid #fff;
}
.navigate {
	color: #007AFF;
}
page::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.content{
	width: 100%;
	height: 100%;
	background:linear-gradient(top,rgba(18,194,233,1),rgba(110,40,181,1));
}
.top{
	position: relative;
	height:380upx;

}
.top .topBg{
	height: 29upx;
	background-color: #2a99de;
}
.top .title{
	position:absolute;
	box-sizing:border-box;
	top:0;
	left:21upx;
	width: 708upx;
	height: 400upx;
	background-color:rgba(210,239,249,.6);
	border-radius:28upx;
	z-index:999;
}
.tTop{
	width: 100%;
	box-sizing:border-box;
	display:flex;
	
	justify-content: space-between;
	padding-left:34upx;
}
.tTop .tLeft{
	flex:1;
	position: relative;
}
.tTop .tLeft .tImg image{
	width: 133upx;
	height: 133upx;
	border-radius:50%;
}
.tTop .tLeft .tImg{
	position:absolute;
	top:25upx;
}
.tTop .tLeft .tName{
	margin-left:137upx;
	margin-top:41upx;
}
.tTop .tLeft .tName text:nth-of-type(1){
	color:#192345;
	font-size: 28upx;
	font-weight:bold;
}
.tTop .tLeft .tName text:nth-of-type(2){
	color:#192345;
	font-size: 28upx;
}
.tTop .tLeft:nth-of-type(2){
	text-align:center;
}
.tTop .tLeft:nth-of-type(2) image{
	height: 41upx;
	width: 41upx;
	display:block;
	margin:58upx 88upx 0upx 225upx;
}
.tTop .tLeft:nth-of-type(2) text{
	color:#1296DB;
	font-size: 22upx;
	margin-left:138upx;
}
.tMiddle{
	width: 100%;
	box-sizing:border-box;
	display:flex;
	justify-content: space-between;
	padding-left:48upx;
}
.tMiddle .lifeNum{
	flex:1;
	text-align:left;
}
.tMiddle .lifeNum text:nth-of-type(1){
	color:#8bbfcf;
	font-size: 22upx;
}
.tMiddle .lifeNum text:nth-of-type(2){
	color:#1d9bdd;
	font-size: 40upx;
}
.tBottom{
	width: 100%;
	height: 63upx;
	line-height:63upx;
	box-sizing:border-box;
	display:flex;
	justify-content: space-between;
	margin-top:37upx;
}
.tBottom .manage{
	flex:1;
	text-align:center;
	height: 100%;
	
}
.tBottom .manage image{
	width: 40upx;
	height: 40upx;
	margin-right:32upx;
	vertical-align: middle;
}
.tBottom .manage text{
	font-size: 30upx;
	color:#333;
}
.tBottom .manage:nth-of-type(1){
	border-right:3upx solid #9FBAF8;
}
/* 详细 */
.list{
	margin-top:486upx;
	position:fixed;
	bottom:0;
	width: 100%;
}
.list .listTop{
	/* padding:0 33upx 0 32upx; */
	box-sizing:border-box;
	margin-bottom:38upx;
	display:flex;
}
.list .listTop .listLeft{
	color:#fff;
	font-size: 23upx;
}
.list .listTop .listLeft:nth-of-type(1){
	flex:1.8;
	display:inline-block;
	margin-right:63upx;
	padding-left:32upx
}
.list .listTop .listLeft:nth-of-type(2){
	flex:1;
	display:inline-block;
	padding-right:33upx;
}
.list .listTop .listLeft:nth-of-type(2) text{
	display:inline-block;
	margin-right:39upx;
}
.list .listTop .listLeft:nth-of-type(2) text:nth-of-type(3){
	margin-right:0;
}
.list .listTop .listLeft:nth-of-type(2) .active{
	border-bottom:2upx solid #fff;
}
/* 详细列表 */
.listDetail{
	box-sizing:border-box;
	width: 100%;
	padding:0 10upx;
	
}
.listDetail .mde{
	background-color: #25a2de;
	width: 100%;
	border-radius:10upx;
}
.listDetail .mde .five{
	height: 47upx;
	line-height:47upx;
	display:flex;
	justify-content: space-between;
	background-color: #71e4dd;
	border-radius:10upx;
}
.listDetail .mde .five text{
	flex:1;
	text-align:center;
	color:#fff;
	font-size: 22upx;
}
.listDetail .mde scroll-view{
	margin-top:43upx;
}
.listDetail .mde scroll-view view{
	display:flex;
	justify-content: space-between;
	margin-bottom:33upx;
	padding-left:15upx;
	box-sizing:border-box;
}
.listDetail .mde scroll-view view text{
	color:#fff;
	font-size: 22upx;
	flex:1;
	text-align:center;
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
	height: 102upx;
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
.sMiddle .inputTitle view input{
	color:#4D4D73;
	display:inline-block;
	width:188upx;
	vertical-align:middle;
}
.sMiddle .inputTitle view .hides{
	color:#F94B42;
}
.sMiddle .showTitle{
	margin-top:60upx;
	display:flex;
	width: 100%;
}
.sMiddle .showTitle view{
	flex:1;
	text-align:left;
}
.sMiddle .showTitle view text:nth-of-type(1){
	color:#929AAD;
	font-size: 24upx;
}
.sMiddle .showTitle view text:nth-of-type(2){
	color:#4D4D73;
	font-size: 30upx;
}
.sMiddle .showTitle view .warn{
	color:#F94B42;
	font-size: 24upx;
}
.sMiddle .showTitle view image{
	width: 25upx;
	height: 29upx;
	vertical-align: middle;
}
.sBottom {
	margin-top:70upx;
}
.sBottom button{
	height: 84upx;
	width: 300upx;
	line-height:84upx;
	text-align:center;
	margin:0;
	font-size: 28upx;
	display:inline-block;
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
.sBottom .btnSall1{
	background:rgba(104,176,219,1);
	box-shadow:0upx 3upx 18upx 3upx rgba(104,176,219,0.3);
	border-radius:42upx;
	color:#fff;
}
.sBottom .btnSall2{
	background:rgba(75,185,49,1);
	box-shadow:0upx 3upx 18upx 3upx rgba(104,176,219,0.3);
	border-radius:42upx;
	color:#fff;
}
.sBottom .cancel{
	background:rgba(255,255,255,1);
	box-shadow:0upx 3upx 21upx 0upx rgba(174,181,183,0.3);
	border-radius:42upx;
	margin-left:25upx;
	color:#68B0DB;
}
</style>
