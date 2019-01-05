<template>
	<view class="content">
		<view class="top">
			身份验证
			<text>本次操作需要短信验证</text>
		</view>
		<view class="chart">
			<!-- 图片验证码 -->
			<view class="getPhone">
				<!-- <input type="text" placeholder-class="place-holder" maxlength="4" v-model="code" placeholder="请输入图片验证码:"/> -->
				<input type="text" placeholder-class="place-holder" maxlength="4" placeholder="请输入图片验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
				<button type="default" class="yzm" @click="createCode">{{checkCode}}</button>
				<!-- <input type="button" class="yzm" @click="createCode" v-model="checkCode"/> <br> -->
				<!-- <view class="code" @click="refreshCode">
					<s-identify :identifyCode="identifyCode"></s-identify>
				</view> -->
			</view>
			<!-- 短信验证码 -->
			<view class="getPhone">
				<text>1589699999</text>
				<view class='getcode' v-if="show" @tap="getCode">获取验证码</view>
				<view class='getcode1' v-else>{{count}}s</view>
			</view>
			<!-- 输入短信验证码 -->
			<view class="getPhone">
				<input placeholder-class="place-holder" type="text" maxlength="6" v-model="code" placeholder="请输入短信验证码:"/>
			</view>
			<!-- 登录密码设置 -->
			<!-- <view class="getPhone">
				<input placeholder-class="place-holder" v-if="havePwd" type="password" v-model="pwd" placeholder="请设置登录密码:"/>
				<input placeholder-class="place-holder" v-if="!havePwd" type="text" v-model="pwd" placeholder="请设置登录密码:"/>
				<view class="pwdEye">
					<image class="eyeImg" src="../../../static/eyeLook1.png" v-if="havePwd" @tap="showPwd"></image>
					<image class="eyeImg" src="../../../static/eyeUnlook.png" v-if="!havePwd" @tap="showPwd"></image>
				</view>
			</view> -->
			<!-- 确认密码 -->
			<!-- <view class="getPhone">
				<input placeholder-class="place-holder" v-if="havePwd1" type="password" v-model="pwd1" placeholder="确认密码:"/>
				<input placeholder-class="place-holder" v-if="!havePwd1" type="text" v-model="pwd1" placeholder="确认密码:"/>
				<view class="pwdEye">
					<image class="eyeImg" src="../../../static/eyeLook1.png" v-if="havePwd1" @tap="showPwd1"></image>
					<image class="eyeImg" src="../../../static/eyeUnlook.png" v-if="!havePwd1" @tap="showPwd1"></image>
				</view>
			</view> -->
		</view>
		<!-- 、提交按钮 -->
		<view class="submits">
			<button type="default" @tap="sub">提交</button>
		</view>
	</view>
</template>

<script>
	// import SIdentify from './identify' 
	export default {
// 		name: "SIdentify",
// 		components:{
// 			SIdentify
// 		},
		data() {
			return {
// 				identifyCodes: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// 				identifyCode: "",
				show:true,
				timer:null,
				count:'',
// 				havePwd:true,
// 				havePwd1:true,
// 				pwd:'',//，密码
// 				pwd1:'',//二次密码
				code:'',
				checkCode:'',
				picLyanzhengma:''
			};
		},
		mounted() {
// 			this.identifyCode = "";
// 			this.makeCode(this.identifyCodes, 4);
		},
		onLoad(){
			this.createCode()
		},
		methods: {
			
			// 获取验证吗
			getCode(){
				this.show = false;
				const TIME_COUNT = 60;      
				if (!this.timer) {        
					this.count = TIME_COUNT;        
					this.show = false;
					uni.showToast({
						title: '验证码已发送至您的手机，请注意查收。!',
						duration:1000,
						icon:'none'
					});    
					this.timer = setInterval(() => {        
					if (this.count > 0 && this.count <= TIME_COUNT) {          
						this.count--;         
					} else {          
						this.show = true;          
						clearInterval(this.timer);          
							this.timer = null;         
						}        
					}, 1000)       
				}    
			},
			
			// 生成随机验证码
			createCode(){
				let code = "";    
				var codeLength = 4;//验证码的长度   
				var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
                 'S','T','U','V','W','X','Y','Z');//随机数   
				for(var i = 0; i < codeLength; i++) {
					//循环操作   
					var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
					code += random[index];//根据索引取得随机数加到code上   
				}   
				this.checkCode = code;//把code值赋给验证码  
				console.log(this.checkCode)
			},
			checkLpicma(){          
				this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写         
				if(this.picLyanzhengma == '') {
					//代码是直接复制项目内容，这里选择器选择时 请根据自己的需求来实现提示语效果，很简单，我懒，就不改了 ~
					uni.showToast({
						title: '请输入验证码!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { 
					//若输入的验证码与产生的验证码不一致时    
					console.log( this.picLyanzhengma.toUpperCase())
					//代码是直接复制项目内容，这里选择器选择时 请根据自己的需求来实现提示语效果，很简单，我懒，就不改了 ~        
					uni.showToast({
						title: '验证码不正确!',
						duration:2000,
						icon:'none'
					});
					return;
					this.createCode();//刷新验证码   
					this.picLyanzhengma = '';
				}else {
					return true;
				} 
			},
			sub(){
				if(this.code.trim()==''){
					uni.showToast({
						title: '短信验证码不能为空!',
						duration:2000,
						icon:'none'
					});
					return;
				}else{
					uni.redirectTo({
						url:'../../myCenter/setting'
					})
				}
			},

		}
	}
</script>

<style>
.place-holder {
	font-size: 34upx;
	color:#C2C0C0;
}
page{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color:#fff;
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
	padding-top:6upx;
}
.code {
  /* margin: 400upx auto; */
  width: 171upx;
  height: 58upx;
  border: 1upx solid #E7E7E7;
}
.top{
	color: #333;
	font-size: 66upx;
	width: 100%;
	box-sizing: border-box;
	padding-left: 81upx;
	margin-top: 115upx;
	margin-bottom: 90upx;
}
.top text{
	color: #747373;
	font-size: 28upx;
	margin-top: 38upx;
}
.chart{
	width: 100%;
	box-sizing: border-box;
	padding: 0 85upx 0 76upx;
}
.chart .getPhone{
	border-bottom: 1upx solid #DCDBDB;
	height: 102upx;
	line-height: 102upx;
	display: flex;
}
.chart .phone{
	border-bottom: 0;
}
.chart .getPhone text{
	color: #333;
	width: 410upx;
	font-size: 32upx;
}
.chart .getPhone .getcode{
	color:#519EF7;
	font-size: 24upx;
	border: 1upx solid #519EF7;
	height: 50upx;
	padding: 0 22upx;
	box-sizing: border-box;
	border-radius:25upx;
	margin-top:26upx;
	line-height:44upx;
	text-align: center;
}
.chart .getPhone .getcode1{
	color:#666;
	width: 175upx;
	font-size: 24upx;
	text-align: center;
}
.chart .getPhone input{
	width: 410upx;
	height: 100%;
}
.chart .getPhone .yzm{
	border:1upx solid #fff;
	height:60upx;
	width:170upx;
	margin-top:21upx;
	background-color:#fff;
	color: #C2C0C0;
	line-height: 56upx;
}
.chart .getPhone .pwdEye{
	flex: .9;
	text-align: right;
}
.chart .getPhone .pwdEye image{
	vertical-align: middle;
	width: 41upx;
	height: 26upx;
}
.submits{
	margin-top: 85upx;
	width: 100%;
}
.submits button{
	width:690upx;
	height:82upx;
	background:rgba(81,158,247,1);
	border-radius:5upx;
	font-size: 36upx;
	color: #fff;
	line-height: 82upx;
	margin: 0 auto;
}
</style>
