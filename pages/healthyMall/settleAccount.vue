<template>
	<view class="index">
    <view class="addSite">
      <view class="addSiteLeft" v-if="siteShow"  @tap="getSite">
        <image class="siteIcon" src="../../static/siteIcon.png" mode=""></image>
        <text class="addSiteText" >请添加收货地址</text>
    	</view>
      <view class="addSiteLeft siteLeft" v-else>
      	<view class="siteInfoTop">
      		 <text class="siteName">{{siteData.name}}</text>
           <text class="siteTel">{{siteData.tel}}</text>
           <button class="siteDefalutBtn">默认</button>
      	</view>
        <text class="siteDefinite">
            {{siteData.prov+siteData.citiy+siteData.count+siteData.definite}}
        </text>
      </view>
      <image @tap="getSite" class="moveIcon" src="../../static/move.png" mode=""></image>
    </view>
    <view class="orderInfo">
        <view class="orderInfoList" v-for="(item,index) in orderInfoData" :key='index'>
        	<view class="orderHeader">
        		 <image :src="item.shopImg" mode=""></image>
             <text>{{item.shopName}}</text>
        	</view>
          <view class="orderInfoItem" v-for="(items,indexs) in item.list" :key='indexs'>
            <image :src="items.imgUrl" mode=""></image>
            <view class="orderInfoItemRight">
            	<text class="orderGoodsName">{{items.name}}</text>
              <text class="orderType">类型: {{items.type}}</text>
              <view class="orderInfoBottom">
              	<text class="orderInfoBottomPrice">￥{{items.price}}</text>
                <text class="orderInfoBottomNum">x {{items.num}}</text>
              </view>
            </view>
          </view>
        </view>
    </view>
    <view class="discountCoupon">
    	<view class="orderHeader">
    		<image src="../../static/discounts.png" mode=""></image>
    		<text>选择优惠券：本优惠券为您节省</text>
    	</view>
      <view class="discountCouponText" @tap="getDiscounts">
      	 <text v-if='discountsShow' class="discountsMoney">-￥{{discountsMoney}}</text>
         <text v-else class="discountsMoney">{{discountsMoney}}</text>
         <image src="../../static/move.png" mode=""></image>
      </view>
    </view>
    <view class="leaveWord">
    	<view class="orderHeader">
    		<image src="../../static/leaveWord.png" mode=""></image>
    		<text>卖家留言: </text>
        <input type="text" value="" @input="getInputLeaveWord" @confirm='getLeaveWord' placeholder="对本次交易的说明"/>
    	</view>
    </view>
    <view class="totalPrice">
    	<view class="orderHeader">
    		<image src="../../static/settle.png" mode=""></image>
    		<text>共有{{goodsTotal.goodsNum}}件商品 </text>
    	</view>
      <view class="totalContent">
        <view class="totalContentItem">
        	<text class="totalName">商品总额:</text>
          <text class="totalText">￥{{goodsTotal.totalAmount}}</text>
      	</view>
        <view class="totalContentItem">
        	<text class="totalName">运费:</text>
        	<text class="totalText">￥{{goodsTotal.carriage}}</text>
        </view>
        <view class="totalContentItem">
        	<text class="totalName">优惠券:</text>
        	<text class="totalText">-￥{{discountsMoney}}</text>
        </view>
        <view class="totalContentItem">
        	<text class="totalName">总计:</text>
        	<text class="totalText colorBlue">￥{{goodsTotal.total}}</text>
        </view>
      </view>
    </view>
    <view class="settle">
    	 <view class="sum">
    	 	 <text class="sumName">总金额：</text>
         <text class="sumIcon">￥</text>
         <text class="sumText">{{goodsTotal.total}}</text>
    	 </view>
       <button :disabled='settleBtnDisabled'>马上结算</button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        // 默认地址信息
        siteData:{
          tel:'15638521342',
          name:'张三',
          prov:'河南省',
          citiy:'郑州市',
          count:'郑东新区',
          definite:"中州大道与商都路交汇处东500米路南",
        },
        // 结算按钮
        settleBtnDisabled:true,
        // 优惠卷选择与否
        discountsShow:true,
        // 地址是否显示
        siteShow:true,
        // 优惠券的面值
        discountsMoney:'50.00',
        // 商品结算信息
        goodsTotal:{
          goodsNum:"2",
          totalAmount:526,
          carriage:0,
          total:526,
        },
        // 订单的商品信息
        orderInfoData:[
          {
            shopName:'阿里康达药房',
            shopImg:"../../static/shopImg.png",
            list:[
              {
                name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
                imgUrl:'../../static/tuijian.png',
                price:'263',
                num:1,
                type:'180粒/瓶'
              },
              {
              	name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
              	imgUrl:'../../static/tuijian.png',
              	price:'263',
              	num:1,
              	type:'180粒/瓶'
              },
            ]
          },
          {
            shopName:'啊康达药房',
          	shopImg:"../../static/shopImg.png",
          	list:[
          		{
          			name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
          			imgUrl:'../../static/tuijian.png',
          			price:'263',
          			num:1,
          			type:'180粒/瓶'
          		},
          		{
          			name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
          			imgUrl:'../../static/tuijian.png',
          			price:'263',
          			num:1,
          			type:'180粒/瓶'
          		},
          	]
          }
        ]
			
      }
		},
    onLoad:function(){
      // 判断是否有收获地址
      
    },
		methods: {
      getDiscounts:function(){
        console.log('点击选择优惠券')
      },
      getLeaveWord:function(e){
        console.log('输入留言')
        console.log(e.detail.value)
      },
      getInputLeaveWord:function(e){
        console.log('留言')
        console.log(e.detail.value)
      },
      getSite:function(){
        console.log('点击地址')
        if(this.siteShow === true){
          console.log('已经有默认地址')
          uni.navigateTo({
          	url:'/pages/healthyMall/shippingAddress'
          })
        }else{
          console.log('没有默认地址')
          uni.navigateTo({
          	url:"/pages/healthyMall/addShippingAddress?name=settleAccount"
          })
        }
      }
		}
	}
</script>

<style>
  .index{
  }
  /* 地址栏 */
  .addSite{
    width:694upx;
    height:142upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 0upx 9upx rgba(245,244,244,1);
    border-radius:14upx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 28upx 28upx;

  }
  .addSiteLeft{
    display: flex;
    height: 142upx;
    align-items: center;
  }
  .siteLeft{
    flex-direction: column;
    width: 620upx;
    height: 74upx;
  }
  .siteInfoTop{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    width:620upx;
    margin: 0upx 0 10upx;
  }
  .siteName{
    font-size: 30upx;
    margin-left: 32upx;
    margin-right: 48upx;
    color: #636161;
  }
  .siteTel{
    font-size: 28upx;
    color:#7F7E7E;
    margin-right: 48upx;
  }
  .siteDefinite{
    font-size: 22upx;
    color: #969595;
    margin-left: 30upx;
    margin-top:10upx;
  }
  .siteDefalutBtn{
    width:74upx;
    height:30upx;
    line-height: 30upx;
    margin: 0;
    font-weight: 500;
    font-size: 24upx;
    background:linear-gradient(105deg,rgba(136,223,251,1),rgba(115,182,249,1));
    box-shadow:0upx 0upx 4upx rgba(99,202,242,1);
    border-radius:9upx;
    color: #fff;
    padding: 0upx 0upx;
  }
  .addSiteText{
    font-size:28upx;
    font-weight:400;
    color:rgba(117,117,117,1);
    line-height:70upx;
    margin-left: 42upx;
  }
  .siteIcon{
    width: 127upx;
    height: 110upx;
    margin-left: 28upx;
  }
  .moveIcon{
    width:20upx;
    height: 36upx;
    margin-right: 37upx;
  }
  /* 订单信息 */
  .orderInfo{
    width:694upx;
    /* height:314upx; */
    background:rgba(255,255,255,1);
    box-shadow:0upx 0upx 9upx rgba(245,244,244,1);
    border-radius:14upx;
    margin-bottom: 28upx;
    margin: 0upx 28upx;
  }
  .orderInfoList{
    padding: 39upx 26upx 28upx 31upx;
    margin:  0 10upx;
    border-bottom:1upx solid rgba(237,236,236,1)
  }
  .orderInfoList:last-child{
    border-bottom: none;
  }
  .orderHeader{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 44upx;
  }
  .orderHeader image{
    width: 33upx;
    height: 25upx;
  }
  .orderHeader text{
    font-size: 28upx;
    font-weight: 500;
    color: #636161;
    margin-left: 20upx;
  }
  .orderInfoItem{
    display: flex;
    flex-direction: row;
    margin-bottom: 20upx;
  }
  .orderInfoItem image{
    width:151upx;
    height:156upx;
    border-radius:10upx;
    margin-right: 25upx;
  }
  .orderInfoItemRight{
    display: flex;
    flex-direction: column;
    width: 435upx;
  }
  .orderGoodsName{
    font-size:26upx;
    font-weight:400;
    color:rgba(117,117,117,1);
    line-height:33upx;
    margin-bottom: 8upx;
  }
  .orderType{
    font-size:18upx;
    font-weight:400;
    color:rgba(183,183,183,1);
    line-height:25upx;
  }
  .orderInfoBottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 38upx;
  }
  .orderInfoBottomPrice{
    font-size:26upx;
    font-weight:500;
    color:rgba(99,97,97,1);
    line-height:25upx;
  }
  .orderInfoBottomNum{
    font-size:22upx;
    font-weight:400;
    color:rgba(64,113,171,1);
    line-height:25upx;
  }
  /* 优惠券 */
  .discountCoupon{
    width:621upx;
    height:101upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 0upx 9upx rgba(245,244,244,1);
    border-radius:14upx;
    margin-bottom: 28upx;
    margin: 28upx 28upx;
    padding: 36upx 35upx 27upx 38upx;
    display: flex;
    flex-direction: column;
  }
  .discountCoupon .orderHeader image{
    width:28upx;
    height:26upx;
  }
  .discountCouponText{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
  }
  .discountCouponText .discountsMoney{
    font-size:26upx;
    font-weight:400;
    color:rgba(255,74,74,1);
    line-height:70upx;
    margin-right: 30upx;
  }
  .discountCouponText image{
    width:18upx;
    height:34upx;
  }
  /* 留言 */
  .leaveWord{
    width:624upx;
    height:87upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 0upx 9upx rgba(245,244,244,1);
    border-radius:14upx;
    margin-bottom: 28upx;
    margin: 0upx 28upx;
    padding: 37upx 35upx 0upx;
  }
  .leaveWord .orderHeader image{
    height: 25upx;
    width: 25upx;
  }
  .leaveWord input{
    font-size:24upx;
    color: #BFBFBF;
    margin-left: 16upx;
    width: 430upx;
  }
  /* 价格总和 */
  .totalPrice{
    width:624upx;
    height:274upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 0upx 9upx rgba(245,244,244,1);
    border-radius:14upx;
    margin-bottom: 60upx;
    margin: 28upx 28upx;
    padding:34upx  35upx 0upx;
  }
  .totalPrice .orderHeader{
    margin-bottom: 0upx;
  }

  .totalPrice .orderHeader image{
     height: 35upx;
     width: 28upx;
  }
  .totalContent{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 5upx;
      justify-content: flex-end;
      align-items: flex-end;
  }
  .totalContentItem{
      width: 234upx;
  }
  .totalContentItem text{
     font-size: 24upx;
     color: #636161;
     line-height: 20upx;
     text-align: right;
     display: inline-block;
  }
    .totalName{
    width: 104upx;
  }
  .totalText{
    width:130upx;
  }
  .totalContentItem .colorBlue{
    color:#2E90C0;
  }
  .settle{
    width:750upx;
    height:99upx;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 9upx rgba(245,244,244,1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .settle .sum{
    margin-left: 47upx;
  }
  .sumName{
    color: #3D3D3D;
    font-size: 26upx;
    font-weight: 400;
  }
  .sumIcon{
    color: #2E90C0;
    font-size: 18upx;
    font-weight: 400;
  }
  .sumText{
    color: #2E90C0;
    font-size: 26upx;
    font-weight: 400;
  }
  .settle button{
    width:206upx;
    height:47upx;
    line-height: 47upx;
    background:rgba(251,83,79,1);
    border-radius:6upx;
    border: none;
    color: #fff;
    font-size: 28upx;
    font-weight: bold;
    margin-right: 28upx;
  }
  .settle button[disabled] {
    color: #fff;
    background:#E5E4E4;
  }
</style>
