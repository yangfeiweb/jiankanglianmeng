<template>
	<view class="index">
    <view class="addSiteView">
      <view class="siteName siteViewItem">
      	<text>收货人: </text>
      	<input type="text" @input="getName"/>
      </view>
      <view class="siteName siteViewItem">
      	<text>手机号: </text>
      	<input type="text" @input="getTel"/>
      </view>
      <view class="setDefalut siteViewItem" @tap='region'>
        <view class="regionTitle">
          <text class="regionName">所在地区: </text>
          <text>{{regionText.label}}</text>
      	</view>
        <image src="../../static/move.png" mode=""></image>
      </view>
      <view class=" siteViewItem">
      	<input type="text" color='#519EF7' @input="getSiteDetails" placeholder="请填写详细地址：如街道，门牌号，小区，楼栋号，单元等..."/>
      </view>
      <view class="setDefalut">
      	<text>设为默认地址:</text>
        <switch @change="changeSiteDefalut" color="#519EF7"/>
      </view>
      	<text class="addSite" @tap="save">保存</text>
    </view>
    <mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
    @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
  import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
  import cityData from '../../common/city.data.js';
	export default {
    components:{
      mpvueCityPicker
    },
		data() {
			return {
        cityPickerValueDefault:[0, 0, 1],
        themeColor: '#007AFF',
        siteData:{
          name:'',
          tel:'',
          details:'',
          regionCode:''
        },
        regionText:"",
			}
		},
    onLoad:function(option){
    	let name = option.name
      if(name === 'shippingAddress'){
        this.siteData = JSON.parse(option.siteData) 
        console.log(this.siteData)
      }
    },
    onUnload:function(){
    	this.$refs.mpvueCityPicker.pickerCancel()
    },
		methods: {
      save:function(){
        uni.navigateBack({
            delta: 1
        });
      },
      getTel:function(e){
      	console.log('输入电话')
        console.log(e.detail)
      },
      getName:function(){
      	console.log('输入名称')

      },
      region:function(){
        console.log('选择地区')
        this.$refs.mpvueCityPicker.show()
      },
      onConfirm(e) {
      	this.regionText = e
        console.log(this.regionText)
        this.siteData.regionCode = this.regionText.cityCode
      },
      changeSiteDefalut:function(){
        console.log('是否设置为默认')
      }
		}
	}
</script>

<style>
  .index{
    background: #fff;
  }
  .addSiteView{
    display: flex;
    width:694upx;
    margin:0 28upx;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .siteViewItem{
      width: 100%;
      border-bottom: 4upx solid #F7F7F7;
      height: 84upx;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
  }
  .siteViewItem text{
    font-size:28upx;
    font-weight:400;
    color:rgba(99,97,97,1);
    line-height:70upx;
  }
  .siteViewItem input{
    font-size:22upx;
    font-weight:400;
    color:rgba(197,192,192,1);
    line-height:54upx;
    height: 54upx;
    width: 575upx;
    padding: 15upx 15upx;
    color:rgba(99,97,97,1);
  }
  .siteName{
  }
  .setDefalut{
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
    height: 84upx;
    align-items: center;
  }
  .setDefalut text{
    font-size:28upx;
    font-weight:400;
    color:rgba(99,97,97,1);
    line-height:70upx;
  }
  .setDefalut switch{
    /* width:55upx;
    height:33upx */
  }
  .siteViewItem image{
    width:12upx;
    height:22upx;
  }
  .addSite{
    width:100%;
    height:82upx;
    background:rgba(81,158,247,1);
    border-radius:5upx;
    color: #fff;
    text-align: center;
    line-height: 82upx;
    margin-top: 60upx;
  }
</style>
