<template>
	<view class="content">
		<view class="wrapper">
			<image src="../../../static/jumpMap.png" class="box"></image>
			<image src="../../../static/jumpMap.png" class="box"></image>
			<image src="../../../static/jumpMap.png" class="box"></image>
		</view>
		<image class="img" src="../../../static/loginBg.jpg" mode=""></image>
		<view class="lTop">
			<navigator url="../login/login">登录</navigator>
		</view>
		<!-- 注册模块 -->
		<view v-if="!haveLogin" class="login">
			<view class="lMiddle">
				<view class="phone">
					<image src="../../../static/user.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" maxlength="11" v-model="userPhone" placeholder="请输入手机号"/>
					<image v-if="userPhone!=''" src="../../../static/del.png" mode="" @tap="delUserPhone"></image>
				</view>
				<view class="phone">
					<image src="../../../static/code.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" v-model="userpwd" placeholder="请输入密码"/>
					<image v-if="userpwd!=''" src="../../../static/del.png" mode="" @tap="delUserpwd"></image>
				</view>
				<view class="phone">
					<image src="../../../static/pwd.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" maxlength="6" v-model="usercode" placeholder="请输入验证码"/>
					<view class='getcode' v-if="show" @tap="getCode">获取验证码</view>
					<view class='getcode' v-else>{{count}}s后重新发送</view>
				</view>
				<view class="btn">
					<!-- 手机验证码登录 -->
					<button class="btn1" type="primary" @tap="loginCode">注册</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				userPhone:'',//手机号
				userpwd:'',//密码
				usercode:'',//验证码
				show:true,
				timer:null,
				count:'',
				type:1,//手机号码验证是否成功
			}
		},
		methods:{
			delUserPhone(){
				this.userPhone=''
			},
			delUserpwd(){
				this.userpwd=''
			},
			// 获取验证码
			getCode(){
				this.show = false;
				const TIME_COUNT = 60;    
				if (!this.timer) {        
					this.count = TIME_COUNT;        
					this.show = false;        
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
			
			// 直接注册
			loginCode(){
				var phoneReg=/^1[345789]\d{9}$/;
				if(this.userPhone.trim()==''&&this.usercode.trim()==''&&this.userpwd.trim()==''){
					uni.showToast({
						title: '请将内容填写完整!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(!(phoneReg).test(this.userPhone)){
					uni.showToast({
						title: '您输入的的手机号码有误!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(this.userPhone.trim()==''){
					uni.showToast({
						title: '手机号码不能为空!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(this.usercode.trim()==''){
					uni.showToast({
						title: '验证码不能为空!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(this.usercode.trim().length<6){
					uni.showToast({
						title: '您输入的验证码有误!',
						duration:2000,
						icon:'none'
					});
					return;
				}else if(this.userpwd==''){
					uni.showToast({
						title: '您输入的密码不能为空!',
						duration:2000,
						icon:'none'
					});
					return;
				}else{
					uni.redirectTo({
						url:'../../myCenter/myOrder'
					})
				}
			},
		}
	}
</script>

<style>
.wrapper{
	position: absolute;
	top: 31%;
	left: 9%;
	    /* -webkit-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%); */
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 500upx;
	height: 200upx;
	position:absolute;
}
.wrapper .box{
	width: 29upx;
	height: 53upx;
	margin: 0 10upx;
	position:absolute;
	    /* -webkit-transform: translateY(0) rotate(0deg); */
	    /* transform: translateY(0) rotate(0deg); */
	    /* -webkit-animation: jump 1s infinite alternate; */
	animation: jump 1.5s infinite alternate;
}
@keyframes jump {
	0% {
	  -webkit-transform: translateY(0upx);
	  transform: translateY(0upx);
	  border-radius: 0%;
	}
	50% {
	  -webkit-transform: translateY(50upx);
		transform: translateY(50upx);
		border-radius: 50%;
	}
	100% {
	  -webkit-transform: translateY(0upx);
	  transform: translateY(0upx);
	  border-radius: 0%;
	}
}
.box:nth-child(1) {
	left:176upx;
	top:-46upx;
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}
.box:nth-child(2) {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
	left:285upx;
	top:-35upx;
}
	
.box:nth-child(3) {
	top:-130upx;
	left:315upx;
	 -webkit-animation-delay: 0.5s;
	 animation-delay: 0.5s;
}
page{
	/* padding: 0 49upx;	 */
	background: url('https://oss.scsj.net.cn/images/users/testtest/d317c422-d36f-4cd9-a26f-0e2d5167c079.jpg?imageView2/2/w/650/h/1155&e=1540019119&token=lzJVdwCFPYaBjRTG0TsKRw_Eo-YXFx93AhzeX0dY:kTwf5bL06awNKrvWu6xzZ47WP6k=') no-repeat center;
	width: 100%;
	box-sizing: border-box;
	background-size: 100%;
	overflow:hidden;
}
/* 注册模块 */
.content{
	position: relative;
	height: 100%;
	width: 100%;
}
.content .img{
	width: 100%;
	height: 100%;
}
.content .login{
	z-index:999;
	position:absolute;
	bottom:124upx;
	left:50upx;
}
.lTop{
	text-align:right;
	z-index:999;
	position:absolute;
	right:30upx;
	top:14upx;

}
.lTop navigator{
	font-size: 30upx;
	color:#ffffff;
}

.lMiddle .phone{
	height: 110upx;
	background:rgba(255,255,255,.27);
	border-radius:55upx;
	margin-bottom:29upx;
	line-height:110upx;
	display:flex;
}
/* 这里要换成图片 */
.phone image:nth-of-type(1){
	width: 55upx;
	height: 55upx;
	display:inline-block;
	vertical-align: middle;
	margin:auto 40upx;
}
.phone image:nth-of-type(2){
	width: 35upx;
	height: 35upx;
	display:inline-block;
	vertical-align: middle;
	margin-left:137upx;
	margin-top:35upx;
}
.phone input{
	vertical-align: middle;
	color:#ffffff;
	font-size: 30upx;
	display:inline-block;
	width:304upx;
	/* margin-left:36upx; */
	height:100%;

}
.phone .eyeImg{
	width: 37rpx!important;
	height:25rpx!important;
}
.place-holder {
    font-size: 30upx;
	color:#fff;
}
.getcode{
	display:inline-block;
	color:#fff;
	font-size: 26upx;
	text-align: center;
	flex: 1;
}
/* 登录 */
.btn{
	text-align:center;
}
.btn .btn1{
	width:653upx;
	height:109upx;
	background-color:#25A1E1!important;
	border-radius:55upx;
	color:#fff;
	font-size: 30upx;
	line-height:109upx;
	border:0;
}
</style>
