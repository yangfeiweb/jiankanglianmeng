<template>
	<view class="service">
    <view class="serviceHeaderView">
      <image class="serviceBg" src="../../static/serviceBg.png" mode=""></image>
      <view class="HeaderView">
        <view class="serviceHeader">
           <text class="title">在线客服</text>
           <text class="serviceTime">人工服务时间: 工作日{{serviceTime}}</text>
           <text class="serviceBtn">立即咨询</text>
         </view>
      </view>
		</view>
    <view class="serviceList">
    	<view class="serviceListTitle">
    		<text class="line"></text>
        <text class="title">热门问题</text>
        <text class="line"></text>
    	</view>
      <view class="uni-card">
      	<view class="uni-list">
      		<block v-for="(list,index) in lists" :key="index">
      			<view class="uni-list-cell uni-collapse">
      				<view class="uni-list-cell-navigate uni-navigate-bottom" :class="list.show ? 'uni-active' : ''" @click="trigerCollapse(index)">
      					{{list.title}}
      				</view>
      				<view class="uni-collapse-content" :class="list.show ? 'uni-active' : ''">
      					<view v-if="list.type === 'pay'" >
                    <view class="uni-list">
                      充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。
                    </view>
      					</view>
      					<view v-if="list.type === 'withdraw'" class="page-pd">
      						<view class="uni-list">
                    充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。
      						</view>
      					</view>
      					<view v-if="list.type === 'shopEnter'">
      						<view class="uni-list">
      							充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。
      						</view>
      					</view>
                <view v-if="list.type === 'brokerage'">
                	<view class="uni-list">
                		充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。
                	</view>
                </view>
                <view v-if="list.type === 'interest'">
                	<view class="uni-list">
                		充值对充值人事免费的，手续费由平台承担。充值对充值人事免费的，手续由平台承担。
                	</view>
                </view>
      				</view>
      			</view>
      		</block>
      	</view>
      </view>
    </view>
  </view>
</template>
<script>
	export default {
		data() {
			return {
        serviceTime:'9:00-18:00',
        lists: [{
        		title: "充值是否收费？",
        		type: 'pay',
        		show: false
        	},
        	{
        		title: "是否能提现？",
        		type: 'withdraw',
        		show: false
        	},
        	{
        		title: "购物商城商家怎么入住？",
        		type: 'shopEnter',
        		show: false
        	},
        	{
        		title: "我的佣金能花费？？",
        		type: 'brokerage',
        		show: false
        	},
        	{
        		title: "健康银行利息率？？",
        		type: 'interest',
        		show: false
        	}
        ],
			}
		},
		components: {
		},
   
    methods:{
      trigerCollapse(e) {
      	for (let i = 0, len = this.lists.length; i < len; ++i) {
      		if (e === i) {
      			this.lists[i].show = !this.lists[i].show;
      		} else {
      			this.lists[i].show = false;
      		}
      	}
      }
    }
	}
</script>

<style>
  .serviceHeaderView{
    position: relative;
    height: 544upx;
  }
  .serviceBg{
    width:100%;
    position: absolute;
    top:0%;
    left: 0%;
    height: 544upx;
  }
  .HeaderView{
      position: absolute;
      top:63upx;
      left: 0%;
      height: 544upx;
      width: 100%;
  }
   .serviceHeader{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .serviceHeader text{
    text-align: center;
  }
  .serviceHeader .title{
    font-size:34upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-bottom: 23upx;
  }
  .serviceHeader .serviceTime{
    font-size:24upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-bottom: 40upx;
  }
  .serviceHeader .serviceBtn{
  	width:221upx;
    height:61upx;
    border:1upx solid rgba(255,255,255,1);
    border-radius:9upx;
    height: 61upx;
    font-size:34upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .serviceList{
    
  }
  .serviceListTitle{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70upx;
    justify-content: center;
  }
  .serviceListTitle .line{
    width:280upx;
    height:1upx;
    background:rgba(238,238,238,1);
  }
  .serviceListTitle .title{
    font-size:26upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(165,165,165,1);
  }
  .list-collapse {
  	padding-left: 36upx;
  	box-sizing: border-box;
  }
  .uni-card {
    width: 100%;
    margin:0 !important;
    box-shadow: none;
  }
  .page-pd{
    border: none !important;
  }
  .uni-list{
   /* width: 674upx;
    text-align: center; */
    border: none !important;
    font-size:30upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(153,153,153,1);
    line-height:54upx;
  }
  .uni-navigate-bottom{
    font-size:30upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height:70upx;
    height: 89upx;
  }
  .uni-list-cell-navigate.uni-active {
    background:#fff;
   }
  .uni-collapse-content{
    padding:0 36upx;
    width: 678upx;
  }
</style>
