<template>
  <view class="index cartNull" v-if="cartNull">
  	<image src="../../static/cartNull.png" mode=""></image>
    <text>您还没有商品加入购物车哦!</text>
  </view>
	<view v-else class="index">
     <view class="goodsList">
        <view class="goodsListItem" v-for="(item,index) in goodsInfoData" :key='index'>
          <view class="goodsListItemHeader">
            <view class="goodsListItemHeaderLeft">
             <label class="radio">
              	<radio  color='#87BBF8' :value="item.shopId" :checked="item.checked===0" @tap="getShopStatus(item)"/>
              </label>
              <image :src="item.shopImg" mode=""></image>
              <text>{{item.shopName}}</text>
            </view>
            <text class="coupons" @tap="getCoupons(item)">领劵</text>
          </view>
          <view class="goodsInfo" v-for="(items,indexs) in item.list" :key='indexs'>
            <label class="radio">
            	<radio  color='#87BBF8' :value="items.goodsId" :checked="items.checked===0" @tap="getGoodsStatus(item,items)"/>
            </label>
            <image :src="items.imgUrl" mode=""></image>
            <view class="goodsInfoRight">
              <text class="goodsName">{{items.name}}</text>
              <text class="goodsType">类型: {{items.type}}</text>
              <view class="goodsInfoBottom">
                <text class="goodsInfoBottomPrice">￥{{items.price}}</text>
              </view>
            </view>
            <view class="goodsNum">
            	<image class="goodsNumAdd" src="../../static/cartTop.png" mode="" @tap="goodsNumAdd(item,items)"></image>
              <text class="goodsNumText">{{items.num}}</text>
              <image class="goodsNumReduce" src="../../static/cartDown.png" @tap="goodsNumReduce(item,items)" mode=""></image>
            </view>
          </view>
        </view>
      </view>
      <view class="loseEfficacyGoods">
      	 <view class="loseEfficacyTitle">
      	 	  <text class="title">失效宝贝{{loseEfficacyData.loseEfficacyGoodsNum}}件</text>
            <text class="deteleBtn" @tap='deteleModalTap'>删除失效商品！</text>
      	 </view>
         <view class="goodsInfo" v-for="(items,indexs) in loseEfficacyData.list" :key='indexs'>
         	<image :src="items.imgUrl" mode=""></image>
         	<view class="goodsInfoRight">
         		<text class="goodsName">{{items.name}}</text>
         		<text class="loseEfficacyInfo">商品已不能购买，请重新添加 </text>
         		<view class="goodsInfoBottom">
         			<text class="loseEfficacyTime">失效日期: {{items.loseEfficacyTime}}</text>
         		</view>
         	</view>
         </view>
      </view>
      <view class="operation">
        <view v-if="payShow" class="operationPay">
          <view class="operationPayLeft">
            <label class="radio">
              <radio  color='#87BBF8' value="checkedAll" :checked="checkedAll" @tap="getCheckedAll"/>全选
            </label>
            <view class="goodsDetails">
              <text class="goodsDetailsTop">一共{{checkedGoodsNum}}件商品</text>
              <view class="goodsDetailsBottom">
                  <text class="moneyTitle">总金额</text>
                  <text class="moneySmall">￥</text> 
                  <text class="moneyBig">{{moneyUnit}}.</text>
                  <text class="moneySmall">{{moneyAngle}}</text>
              </view>
            </view>
        	</view>
          <view class="">
            <text class="editBtn" @tap="edit">编辑</text>
            <text class="payBtn" @tap="getPay">马上支付</text>
          </view>
        </view>
        <view v-else class="operationDetele">
        	<view class="operationPayLeft">
       	  <label class="radio">
       	  	<radio  color='#87BBF8' value="checkedAll" :checked="checkedAll" @tap="getCheckedAll"/>全选 
       	  </label>
        	</view>
        	<view class="operationDeteleRight">
            <view class="goodsDetails">
        			<text class="goodsDetailsTop">一共{{checkedGoodsNum}}件商品</text>
        			<view class="goodsDetailsBottom">
        					<text class="moneyTitle">总金额</text>
        					<text class="moneySmall">￥</text> 
        					<text class="moneyBig">{{moneyUnit}}</text>
        					<text class="moneySmall">.{{moneyAngle}}</text>
        			</view>
        		</view>
        		<text class="payBtn" @tap="deleteGoods">立即删除</text>
        	</view>
        </view>
      </view>
      <view class="mask" v-show="showMaskCart" @click="hide"></view>
      <view class="popup popup-middle" v-show="showStateCart">
        <view class="popupView">
          <image src="../../static/deleteImg.png" mode=""></image>
          <image src="../../static/detelepop.png" @tap="confirmDetele" mode=""></image>
        </view>
      </view>
      <!-- 优惠券的弹框 -->
      <view class="mask" v-show="showMaskCoupons" @tap="hideMaskCoupons"></view>
      <view class="popup popup-bottom" v-show="showCoupons">
        <text class="popupShopName">{{currentShopName}}</text>
        <view class="shopCouponsList">
        	<view class="shopCouponsListItem" v-for="(item,index) in shopCouponsData" :key='index'>
        		<view class="shopCouponsListItemLeft">
              <view class="money">
                <text class="couponsMoney">{{item.money}}</text><text class="couponsMoneyIcon">元</text>
        			</view>
              <text class="meetMoney">订单满{{item.meetMoney}}元使用</text>
              <text class="couponsTime">使用期限{{item.startTime}}-{{item.endTime}}</text>
        		</view>
            <text :class="item.get===false?'active shopCouponsListItemRight':'shopCouponsListItemRight'" @tap="getShopCoupons(item)">{{item.get===false?'领取':'已领取'}}</text>
        	</view>
        </view>
        <text class="hideBtn" v-show="showMaskCoupons" @tap="hideMaskCoupons">关闭</text>
      </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
        currentShopName:'',
        showMaskCoupons:false,
        showCoupons:false,
        cartNull:false,
        payShow:false,
        checkedGoodsNum:5,
        checkedGoodsmoney:'986.5',
        moneyUnit:'',
        moneyAngle:'',
        checkedAll:false,
        shopCouponsData:[
          {
            money:'50',
            meetMoney:'500',
            startTime:'2018.11.1',
            endTime:'2018.11.1',
            get:false
          },
          {
          	money:'50',
          	meetMoney:'500',
          	startTime:'2018.11.1',
          	endTime:'2018.11.1',
          	get:false
          },
          {
          	money:'50',
          	meetMoney:'500',
          	startTime:'2018.11.1',
          	endTime:'2018.11.1',
          	get:false
          }
        ],
        goodsInfoData:[
        		{
        			shopName:'阿里康达药房',
        			shopImg:"../../static/shopImg.png",
              shopId:1,
              checked:0,
        			list:[
        				{
                  goodsId:11,
        					name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
        					imgUrl:'../../static/tuijian.png',
        					price:'263.8',
        					num:1,
        					type:'180粒/瓶',
                  checked:0
        				},
        				{
                  goodsId:12,
        					name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
        					imgUrl:'../../static/tuijian.png',
        					price:'263.8',
        					num:1,
        					type:'180粒/瓶',
                  checked:0,
                  // 0是选中
        				},
        			]
        		},
        		{
        			shopName:'啊康达药房',
        			shopImg:"../../static/shopImg.png",
              shopId:2,
              checked:0,
        			list:[
        				{
                  goodsId:21,
        					name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
        					imgUrl:'../../static/tuijian.png',
        					price:'263.8',
        					num:1,
        					type:'180粒/瓶',
                  checked:0
        				},
        				{
                  goodsId:22,
        					name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
        					imgUrl:'../../static/tuijian.png',
        					price:'263.8',
        					num:1,
        					type:'180粒/瓶',
                  checked:0
        				}
        			]
        		}
        ],
        loseEfficacyData:{
          loseEfficacyGoodsNum:1,
          list:[
            {
              name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
              imgUrl:'../../static/tuijian.png',
              loseEfficacyTime:'2018.09.28'
            },
            {
              name:'Swisse奶蓟草护肝片澳洲进口保健品护肝解毒片....',
              imgUrl:'../../static/tuijian.png',
              loseEfficacyTime:'2018.09.28'
            },
           ]
        },
        checkedData:[],
        showMaskCart:false,
        showStateCart:false
      }
		},
    onLoad(){
      this.getcheckedGoods()
      console.log(this.moneyUnit,this.moneyAngle)
      let h = this.goodsInfoData.length
      console.log(h)
      if(h===0){
        this.cartNull = true
      }else{
        this.cartNull = false
      }
      let checkAll
      for(let i = 0;i<h;i++){
        if(this.goodsInfoData[i].checked===1){
        		checkAll = false
        }
      }
      if(checkAll === false){
      		this.checkedAll = false
      }else{
      		this.checkedAll = true
      }
    },
    onUnload() {
    },
		methods: {
      getcheckedGoods(){
        this.checkedGoodsmoney=0
        let h = this.goodsInfoData.length
        for(let i = 0;i<h;i++){
        		if(this.goodsInfoData[i].checked===0){
        			for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
                this.checkedGoodsmoney+=this.goodsInfoData[i].list[j].num*this.goodsInfoData[i].list[j].price
        			}
        		}else{
        			for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
                if(this.goodsInfoData[i].list[j].checked === 0){
                  this.checkedGoodsmoney+=this.goodsInfoData[i].list[j].num*this.goodsInfoData[i].list[j].price
                }
        			}
        		}
        }
        this.checkedGoodsmoney = this.checkedGoodsmoney.toFixed(2)
        this.checkedGoodsmoney = this.checkedGoodsmoney.toString()
//         console.log(this.checkedGoodsmoney)
        let money = this.checkedGoodsmoney.split('.')
        this.moneyUnit = money[0]
        this.moneyAngle = money[1]
        console.log(this.checkedGoodsmoney)
      },
      deteleModalTap: function (e) {
      	uni.showModal({
      		content: "确认清空失效商品吗？",
      		confirmText: "删除",
      		cancelText: "取消",
          confirmColor:'#4C94ED',
          cancelColor:'#4C94ED',
          success: function (res) {
              if (res.confirm) {
                  console.log('点击删除');
                  
              } else if (res.cancel) {
                  console.log('点击取消');
              }
          }
      	})
      },
      // 编辑
      edit(){
        console.log('编辑')
        this.payShow = false
        // 编辑完成之后删除
      },
      goodsNumAdd(item,items){
         console.log('数量的增加',item,items)
         items.num++
         console.log('数量的增加',items.num)
         this.getcheckedGoods()
      },
      goodsNumReduce(item,items){
          console.log('数量的减少',item,items)
          items.num>1?items.num--:items.num
          console.log('数量的减少',items.num)
          this.getcheckedGoods()
      },
      getCoupons(item){
        console.log('领取优惠卷')
        let shopId = item.shopId
        this.currentShopName = item.shopName
        // 请求接口获取店铺的相关优惠券
        this.showMaskCoupons = true
        this.showCoupons = true
      },
      getShopStatus(item){
        console.log('选中整个店铺的商品')
        console.log(item)
        let id =  item.shopId
        let h = this.goodsInfoData.length
        for(let i = 0;i<h;i++){
          if(id===this.goodsInfoData[i].shopId){
            if(this.goodsInfoData[i].checked===0){
              this.goodsInfoData[i].checked = 1
              for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
              		this.goodsInfoData[i].list[j].checked = 1
              }
             }else{
              this.goodsInfoData[i].checked = 0
              for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
                  this.goodsInfoData[i].list[j].checked = 0
              }
            }
          }
        }
        let checkAll
        for(let o = 0;o<h;o++){
          if(this.goodsInfoData[o].checked===1){
              checkAll = false
          }
        }
        if(checkAll === false){
            this.checkedAll = false
        }else{
        	  this.checkedAll = true
        }
        this.getcheckedGoods()
      },
      getGoodsStatus(item,items){
         console.log('选中某个商品',item,items)
         let id =  item.shopId
         let goodsId = items.goodsId
         let h = this.goodsInfoData.length
         let index
         for(let i = 0;i<h;i++){
         	if(id===this.goodsInfoData[i].shopId){
            index=i
            for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
              if(goodsId===this.goodsInfoData[i].list[j].goodsId){
                if(this.goodsInfoData[i].list[j].checked===0){
                	this.goodsInfoData[i].list[j].checked = 1
                }else{
                	this.goodsInfoData[i].list[j].checked = 0
                }
              }
            }
         	}
         }
         let z = this.goodsInfoData[index].list.length
         let data = this.goodsInfoData[index].list
         let checkAll
         for(let o = 0;o<z;o++){
         	if(data[o].checked===1){
         	   checkAll = false
         	}
         }
         if(checkAll === false){
           this.goodsInfoData[index].checked = 1
           this.checkedAll = false
         }else{
           this.goodsInfoData[index].checked = 0
            let checkAll
            for(let o = 0;o<h;o++){
              if(this.goodsInfoData[o].checked===1){
                  checkAll = false
              }
            }
            if(checkAll === false){
            		this.checkedAll = false
            }else{
            		this.checkedAll = true
            }
         }
         this.getcheckedGoods()
      },
      getPay(){
        uni.navigateTo({
        	url:'/pages/healthyMall/settleAccount'
        })
      },
      // 删除弹框
      deleteGoods(){
        console.log('立即删除')
        this.showMaskCart=true
        this.showStateCart=true
      },
      // 确定删除
      confirmDetele(){
        this.payShow = true
      },
      getCheckedAll(){
        console.log('全选')
        this.checkedGoodsmoney = 0
        if(this.checkedAll === false){
          this.checkedAll = true
        }else{
          this.checkedAll = false
        }
        let h = this.goodsInfoData.length
        for(let i = 0;i<h;i++){
          if(this.checkedAll===false){
          		this.goodsInfoData[i].checked = 1
          }else{
          		this.goodsInfoData[i].checked = 0
          }
          for(let j = 0;j<this.goodsInfoData[i].list.length;j++){
            if(this.checkedAll===false){
                this.goodsInfoData[i].list[j].checked = 1
            }else{
                this.goodsInfoData[i].list[j].checked = 0
                this.checkedGoodsmoney+=this.goodsInfoData[i].list[j].num*this.goodsInfoData[i].list[j].price
            }
          }
        }
        // this.getcheckedGoods()
      },
      hide() {
				this.showMaskCart = false;
				this.showStateCart = false;
			},
      hideMaskCoupons(){
        this.showMaskCoupons = false;
        this.showCoupons = false
      },
      getShopCoupons(item){
        console.log('点击优惠券',item.get)
        if(item.get===false){
          item.get= true
        }
        console.log('点击优惠券',this.shopCouponsData)
      }
		}
	}
</script>

<style>
  /* 空购物车 */
  .cartNull{
    display: flex;
    width:100%;
    align-items: center;
    flex-direction: column;
    background: #fff;
    /* background:linear-gradient(5deg,rgba(,248,248,248,1),rgba(255,255,255,1)) */
  }
  .cartNull image{
    margin-top: 178upx;
    width: 453upx;
    height: 340upx;
  }
  .cartNull text{
    font-size:30upx;
    font-weight:400;
    color:rgba(144,143,143,1);
    line-height:70upx;
  }
  /* 失效宝贝 */
  .loseEfficacyGoods{
    width:710upx;
    background: #fff;
    padding: 0 20upx;
    padding-bottom: 33upx;
  }
  
  .loseEfficacyTitle{
    width: 710upx;
    height: 98upx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .loseEfficacyTitle .title{
    font-size:30upx;
    font-weight:500;
    color:rgba(99,97,97,1);
    line-height:70upx;
  }
  .loseEfficacyTitle .deteleBtn{
    width:117upx;
    height:30upx;
    line-height: 30upx;
    border:1upx solid rgba(255,0,0,1);
    border-radius:15upx;
    font-size:18upx;
    font-weight:400;
    color:rgba(214,35,35,1);
    display: inline-block;
    text-align: center;
  }
  .loseEfficacyInfo{
    font-size:20upx;
    font-weight:400;
    color:rgba(111,111,111,1);
    line-height:25upx;
  }
  .loseEfficacyTime{
    font-size:18upx;
    font-weight:400;
    color:rgba(168,168,168,1);
    line-height:25upx;
  }
  .goodsList{
    width:100%;
    background-color: #fff;
  }
  .goodsListItem{
  	width:704upx;
  	background:rgba(255,255,255,1);
  	padding: 40upx 20upx 43upx 26upx;
    border-bottom:2upx solid rgba(237,236,236,1);
  }
  .goodsListItemHeader{
  	width: 100%;
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
  	margin-bottom: 33upx;
    height: 50upx;
  }
  .goodsListItemHeaderLeft{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50upx;
  }
  .goodsListItemHeaderLeft image{
  	width: 36upx;
  	height: 31upx;
  }
  .goodsListItemHeaderLeft text{
  	font-size: 28upx;
  	font-weight: 500;
  	color: #636161;
  	margin-left: 20upx;
  }
  .coupons{
    width:70upx;
    height:30upx;
    background:rgba(251,83,79,1);
    font-size:22upx;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:30upx;
    text-align: center;
    display: inline-block;
  }
  .goodsInfo{
  	display: flex;
  	flex-direction: row;
  	margin-bottom: 33upx;
  }
  .goodsInfo label{
    display: flex;
    align-items: center;
  }
 .goodsInfo:last-child{
    margin-bottom: 0;
  }
  .goodsInfo image{
  	width:151upx;
  	height:156upx;
  	border-radius:10upx;
  	margin-right: 25upx;
  }
  .goodsInfoRight{
  	display: flex;
  	flex-direction: column;
  	width: 435upx;
  }
  .goodsName{
  	font-size:26upx;
  	font-weight:400;
  	color:rgba(117,117,117,1);
  	line-height:33upx;
  	margin-bottom: 8upx;
  }
  .goodsType{
  	font-size:20upx;
  	font-weight:400;
  	color:rgba(183,183,183,1);
  	line-height:25upx;
  }
  .goodsNum{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .goodsInfo .goodsNumAdd{
    width:24upx;
    height:13upx;
    margin: 0;
  }
  .goodsNumText{
    font-size:20upx;
    font-weight:400;
    color:rgba(64,113,171,1);
    line-height:25upx;
    margin: 50upx 0upx;
  }
  .goodsInfo .goodsNumReduce{
    width:24upx;
    height:13upx;
    margin: 0;
  }
  .goodsInfoBottom{
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  	margin-top: 38upx;
  }
  .goodsInfoBottomPrice{
  	font-size:26upx;
  	font-weight:500;
  	color:rgba(99,97,97,1);
  	line-height:25upx;
  }
  .goodsInfoBottomNum{
  	font-size:22upx;
  	font-weight:400;
  	color:rgba(64,113,171,1);
  	line-height:25upx;
  }
  /* 底部支付 */
  .operation{
    background: #fff;
    padding-top: 100upx;
    height: 99upx;
  }
  .operationPay{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 695upx;
    height: 99upx;
    padding: 0 29upx 0 26upx;
    background:rgba(255,255,255,1);
    box-shadow:0px -3px 30px 0px rgba(0, 0, 0, 0.04);
    justify-content: space-between;
  }
  .operationPayLeft{
    display: flex;
    flex-direction: row;
  }
  .goodsDetails{
    display: flex;
    flex-direction: column;
    margin-left: 18upx;
  }
  .goodsDetailsTop{
    font-size:20upx;
    font-weight:400;
    color:rgba(176,176,176,1);
    margin-bottom: 10upx;
    line-height: 18upx;
  }
  .goodsDetailsBottom{
    line-height: 25upx;
  }
  .moneyBig{
    color: #2E90C0;
    font-size: 28upx;
  }
  .moneySmall{
    color: #2E90C0;
    font-size: 18upx;
  }
  .moneyTitle{
    color: #3D3D3D;
    font-size: 26upx;
  }
  .editBtn{
    margin-right:20upx;
    display: inline-block;
    width:100upx;
    height:50upx;
    border:1upx solid rgba(46,144,192,1);
    border-radius:25upx;
    font-size:28upx;
    font-weight:400;
    color:rgba(46,144,192,1);
    line-height:50upx;
    text-align: center;
  }
  .payBtn{
    width:200upx;
    height:50upx;
    display: inline-block;
    background:rgba(251,83,79,1);
    border-radius:5upx;
    font-size:28upx;
    font-weight:bold;
    color:rgba(248,251,251,1);
    line-height:50upx;
    text-align: center;
  }
  .operationDetele{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 695upx;
    height: 99upx;
    padding: 0 29upx 0 26upx;
    background:rgba(255,255,255,1);
    box-shadow:0px -3px 30px 0px rgba(0, 0, 0, 0.04);
    justify-content: space-between;
  }
  .operationDeteleRight{
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  .operationDeteleRight .goodsDetails{
    margin-right: 20upx;
  }
  /* 弹出框 */
.mask {
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
}
.popup {
		position: fixed;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
    bottom: 457upx;
    left: 155upx;
    width:440upx;
    height:500upx;
    border-radius:5upx;
	}
  .popupView{
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .popupView image:nth-child(1){
    width:334upx;
    height: 257upx;
  }
  .popupView image:nth-child(2){
  	width:80upx;
    height:40upx;
    margin-top: 80upx;
  }
  /* 优惠券弹框 */
  .popup-bottom{
  	bottom: 0upx;
  	left:0upx;
  	width: 100%;
  	height: 1034upx;
    background: #fff;
  }
  .popupShopName{
    display: inline-block;
    width: 100%;
    font-size:30upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:25upx;
    text-align: center;
    margin: 49upx 0upx;
  }
  .shopCouponsList{
    display: flex;
    flex-direction: column;
  }
  .shopCouponsListItem{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 704upx;
    height: 161upx;
    margin: 0 23upx;
    /* align-items: ; */
    border-bottom:1upx solid rgba(199,194,194,0.38);
    /* opacity:0.38; */
  }
  .shopCouponsListItemLeft{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .couponsMoney{
    font-size:36upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:#FE4242;
    line-height:25upx;
  }
  .couponsMoneyIcon{
    font-size:26upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:#F94747;
    line-height:25upx;
    margin-bottom:5upx;
  }
  .meetMoney{
    font-size:24upx;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:25upx;
    margin-bottom: 10upx;
  }
  .couponsTime{
    font-size:20upx;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(150,150,150,1);
    line-height:25upx;
  }
  .popup-bottom .active{
    width:114upx;
    height:58upx;
    border:2upx solid rgba(255,0,0,1);
    border-radius:5upx;
    font-size:28upx;
    font-weight:500;
    color:rgba(248,57,57,1);
    line-height:58upx;
  }
  .shopCouponsListItemRight{
    width:146upx;
    height:58upx;
    border:2upx solid rgba(199,194,194,1);
    border-radius:5upx;
    font-size:28upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(181,181,181,1);
    line-height:58upx;
    text-align: center;
  }
  .hideBtn{
    width:554upx;
    height:84upx;
    display: inline-block;
    background:rgba(254,78,78,1);
    border-radius:15upx;
    margin-left: 98upx;
    font-size:28upx;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(251,247,247,1);
    line-height:84upx;
    margin-top: 227upx;
    text-align: center;
  }
</style>
