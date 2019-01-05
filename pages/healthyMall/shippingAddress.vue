<template>
	<view class="index">
    <view class="siteView">
    	<view class="siteViewItem" v-for="(item,index) in siteData" :key='index'>
        <label class="radio">
        	<radio color='#87BBF8' :value="item.id" :checked="item.checked===0?true:false" @tap="checkedSite(item)"/>
        </label>
         <view class="siteDefalut">
         	<view class="siteInfoTop">
         		<text class="siteName">{{item.name}}</text>
         		<text class="siteTel">{{item.tel}}</text>
            <text class="defalutbtn" v-show="item.checked===0?true:false">默认地址</text>
         	</view>
         	<text class="siteDefinite">
         			{{item.prov+item.citiy+item.count+item.definite}}
         	</text>
         </view>
         <view class="imgView">
         	 <image class="complieIcon" @tap="complie(item)" src="../../static/compile_icon.png" mode=""></image>
           <text class="imgViewBorder"></text>
           <image class="deteleIocn" @tap="detele(item)" src="../../static/delete_icon.png" mode=""></image>
         </view>
    	</view>
      <view class="addSiteView">
        <text class="addSite" @tap="addSite">新增收货地址</text>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        checkedId:0,
        siteData:[
          {
          	tel:'15638521342',
          	name:'张三',
          	prov:'河南省',
          	citiy:'郑州市',
          	count:'郑东新区',
          	definite:"中州大道与商都路交汇处东500米路南",
            checked:0,
            id:1,
          },
          {
          	tel:'15638521342',
          	name:'张三',
          	prov:'河南省',
          	citiy:'郑州市',
          	count:'郑东新区',
          	definite:"中州大道与商都路交汇处东500米路南",
            checked:1,
            id:2,
          },
          {
          	tel:'15638521342',
          	name:'张三',
          	prov:'河南省',
          	citiy:'郑州市',
          	count:'郑东新区',
          	definite:"中州大道与商都路交汇处东500米路南",
            checked:1,
            id:3,
          },
        ]
			}
		},
   onUnload:function(){
      let h = this.siteData.length
      for(let i = 0;i<h;i++){
      	if(this.siteData[i].checked===0){
          this.checkedId = this.siteData[i].id
      	}
      }
   },
		methods: {
      complie:function(item){
        console.log(item,'编辑')
        let data = JSON.stringify(item)
        console.log(data)
        uni.navigateTo({
        	url:'/pages/healthyMall/addShippingAddress?name=shippingAddress&siteData='+data
        })
      },
      detele:function(item){
        console.log(item,'删除')
        let id = item.id
      },
      checkedSite:function(item){
        console.log(item)
        let id = item.id
        this.checkedId = id
        let h = this.siteData.length
          for(let i = 0;i<h;i++){
            if(this.siteData[i].id===id){
            this.siteData[i].checked=0
          }else{
            this.siteData[i].checked=1
          }
        }
      },
      addSite:function(){
        uni.navigateTo({
        	url:'/pages/healthyMall/addShippingAddress'
        })
      }
		}
	}
</script>

<style>
  .index{
    margin-top: 10upx;
    background: #fff;
    height: 100%;
  }
  .siteView{
    height: 100%;
  }
  .siteViewItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 152upx;
    width:690upx;
    margin:0 30upx;
    border-bottom: 2upx solid #F2F2F2;
  }
  .siteInfoTop{
  	display: flex;
  	flex-direction: row;
  	justify-content:flex-start;
  	align-items: center;
  	width:482upx;
  }
  .defalutbtn{
    width:128upx;
    height:28upx;
    background:rgba(135,187,248,1);
    border-radius:14upx;
    color: #fff;
    font-size: 16upx;
    text-align: center;
    line-height: 28upx;
  }
  .siteName{
  	font-size: 30upx;
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
  	margin-top:5upx;
    width:482upx;
    display: inline-block;
  }
  .complieIcon{
    width:29upx;
    height:29upx;
  }
  .imgViewBorder{
    display: inline-block;
    width:2upx;
    height:26upx;
    background:rgba(240,240,240,1);
    margin:  0 24upx;
  }
  .deteleIocn{
    width:26upx;
    height:30upx;
  }
  .imgView{
    width:105upx;
  }
  .addSiteView{
    display: flex;
    width:100%;
    justify-content: center;
  }
  .addSite{
    display: inline-block;
    width:653upx;
     height:82upx;
     background:rgba(81,158,247,1);
     border-radius:5upx;
     color: #fff;
     text-align: center;
     line-height: 82upx;
     margin-top: 60upx;
  }
</style>
