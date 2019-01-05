<template>
	<view class="index">
    <view class="header">
      <view class="search" @tap="searchTap">
        <view class="uni-icon uni-icon-search"></view>
        <input class="searchInput" type="text" value=""  placeholder="点击搜索商品或者店铺"/>
      </view>
      <image class="deteleImg" src="../../static/cancel_icon.png" mode=""></image>
      <text class="cancelText">取消</text>
    </view>
    <view class="searchContent">
        <view class="searchContentHeader">
            <text class="find">搜索发现</text>
            <text class="recordDelete">消除搜索记录</text>
        </view>
        <view class="searchFindText">
            <view class="searchFindTextItem" v-for="(item,index) in searchFindTextData" :key='index'>
                {{item.name}}
            </view>
        </view>
        <view class="searchList">
          <view class="searchListItem" v-for="(item,index) in searchListData" :key='index'>
            <view class="">
              <image class="searchListItemIcon1" src="../../static/s-search.png" mode=""></image>
              <text class="searchName">{{item.name}}</text>
            </view>
              <image class="searchListItemIcon2" src="../../static/suo_icon.png" mode=""></image>
          </view>
        </view>
    </view>
	</view>
</template>
<script>
  import uniNavBar from '../../components/uni-nav-bar.vue'
  import uniIcon from '../../components/uni-icon.vue'
	export default {
		 components:{
       uniNavBar,
       uniIcon
     },
     data() {
			return {
        searchFindTextData:[
          {
            name:'进口 卸妆水',
            id:'1',
            href:''
          },
          {
          	name:'鲜活好蟹 阳澄湖大闸蟹',
          	id:'1',
          	href:''
          },
          {
          	name:'新米上市 有机大米',
          	id:'1',
          	href:''
          },
          {
          	name:'进口婴幼儿奶粉',
          	id:'1',
          	href:''
          }
        ],
        searchListData:[
          {
            id:'1',
            name:'维生素C钙片'
          },
          {
          	id:'1',
          	name:'茅台原浆'
          },
        ]
      }
		},
    onLoad:function(){
     
    },
    onUnload:function(){
      
    },
		methods: {
      // 点击搜索
      searchTap:function(){
         console.log('点击搜索')
      },
    }
	}
</script>

<style>
   .index{
    height: 100%;
    background: #FFFFFF;
   }
   /* #ifdef APP-PLUS	*/
   	.header{
   		margin-top:50upx;
   	}
   /* #endif */
    .header{
      display: flex;
      flex-direction: row;
      /* margin-top: 60upx; */
      height: 80upx;
      align-items: center;
      justify-content: center;
      background-color: #FFFFFF;
      border-bottom: 2upx solid #F6F6F6;
      /* padding-bottom: 10upx; */
    }
		.search {
      width: 550upx;
      margin-left: 40upx;
      border: none;
      display: flex;
      flex-direction: row;
		}
     .searchInput {
      width: 480upx;
      height: 61upx;
      border: none;
      display: flex;
      text-align: center;
		}
	
		.uni-icon-search {
			color: #999;
      margin-top: 8upx;
		}
    .deteleImg{
      height:36upx;
      width: 36upx;
      margin: 10upx 49upx 17upx 0upx;
    }
    .searchContent{
      display: flex;
      flex-direction: column;
      border-bottom: 2upx solid #F6F6F6;
    }
    .searchContentHeader{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width:95%;
      padding: 0 2.5%;
    }
    .cancelText{
        font-size:30upx;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:70upx;
    }
    .find{
      font-size:26upx;
      font-weight:400;
      color:rgba(138,140,138,1);
      line-height:70upx;
      
    }
    .recordDelete{
      font-size:26upx;
      font-weight:400;
      color:rgba(138,140,138,1);
      line-height:70upx;
    }
    .searchFindText{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      width:95%;
      padding: 0 2.5%;
    }
    .searchFindTextItem{
      background:rgba(242,242,242,1);
      border-radius:5upx;
      color: #333333;
      font-size: 24upx;
      padding: 19upx 35upx;
      margin-right: 13upx;
      margin-bottom: 20upx;
    }
    .searchList{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    .searchListItem{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      border-top:  2upx solid #F6F6F6;
      width:95%;
      padding: 0 2.5%;
      height: 90upx;
    }
    .searchListItemIcon1{
      width: 31upx;
      height: 31upx;
      margin-right: 27upx;
    }
    .searchListItemIcon2{
      width:23upx;
      height: 23upx;
    }
    .searchName{
      font-size: 26upx;
      font-weight: 400;
      color: #333;
    }
</style>
