<template>
	<view class="content">
		<view class="wrapper">
			<image src="../../../static/jumpMap.png" class="box"></image>
			<image src="../../../static/jumpMap.png" class="box"></image>
			<image src="../../../static/jumpMap.png" class="box"></image>
		</view>
		<image class="img" src="../../../static/loginBg.jpg" mode=""></image>
		<view class="lTop">
			<navigator url="../register/register">注册</navigator>
		</view>
		<!-- 登录模块 -->
		<view class="login">
			<!-- 手机验证码登录 -->
			<view v-if="type==1" class="lMiddle">
				<view class="phone">
					<image src="../../../static/user.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" maxlength="11" v-model="phone" placeholder="请输入手机号"/>
					<image v-if="phone!=''" src="../../../static/del.png" mode="" @tap="delPhone"></image>
				</view>
				<view class="phone">
					<image src="../../../static/pwd.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" maxlength="6" v-model="code" placeholder="请输入验证码"/>
					<view class='getcode' v-if="show" @tap="getCode">获取验证码</view>
					<view class='getcode' v-else>{{count}}s后重新发送</view>
				</view>
				<view class="btn">
					<!-- 手机验证码登录 -->
					<button class="btn1" type="primary" @tap="loginCode">登录</button>
				</view>
				<view class="deal">
					<image src="../../../static/select.png" mode=""></image>
					<view class="">
						阅读并同意
						<navigator url='../../myCenter/serviceTitle'>《用户服务协议》</navigator>
						和
						<navigator url="../../myCenter/privacyUser">《用户隐私政策》</navigator>
					</view>
				</view>
			</view>
			<!-- 用户账号和 密码登录-->
			<view v-if="type!=1" class="lMiddle">
				<view class="phone">
					<image src="../../../static/user.png" mode=""></image>
					<input placeholder-class="place-holder" type="text" maxlength="11" v-model="user" placeholder="手机号/账号"/>
					<image v-if="user!=''" src="../../../static/del.png" mode="" @tap="showUser"></image>
				</view>
				<view class="phone">
					<image src="../../../static/code.png" mode=""></image>
					<input placeholder-class="place-holder" v-if="havePwd" type="password" v-model="pwd" placeholder="请输入密码"/>
					<input placeholder-class="place-holder" v-if="!havePwd" type="text" v-model="pwd" placeholder="请输入密码"/>
					<image class="eyeImg" src="../../../static/eyeLook.png" v-if="havePwd" @tap="showPwd"></image>
					<image class="eyeImg" src="../../../static/eyeUnlook.png" v-if="!havePwd" @tap="showPwd"></image>
				</view>
				
				<view class="btn">
					<!-- 通过账号密码登录 -->
					<button class="btn1" type="primary" @tap="loginCode">登录</button>
				</view>
				<view class="deal">
					<image src="../../../static/select.png" mode=""></image>
					<view class="">
						阅读并同意
						<navigator url>《用户服务协议》</navigator>
						和
						<navigator url="#">《用户隐私政策》</navigator>
					</view>
				</view>
			</view>
			<!-- 三方登录 -->
			<view class="threeLogin">
				<image src="../../../static/wx.png" mode=""></image>
				<image src="../../../static/phone.png" mode="" @tap="tabChange"></image>
				<image src="../../../static/ali.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data(){
			return{
				show:true,
				timer:null,
				show1:true,
				timer1:null,
				count1:'',
				count:'',
				type:1,
				user:"",//账号
				pwd:'',//密码
				phone:'',//手机号码
				code:'',//验证码
				havePwd:true,
				
			}
		},
		methods:{
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
			getCode1(){
				this.show1 = false;
				const TIME_COUNT = 60;      
				if (!this.timer1) {        
					this.count1 = TIME_COUNT;        
					this.show1 = false;        
					this.timer1 = setInterval(() => {        
					if (this.count1 > 0 && this.count1 <= TIME_COUNT) {          
						this.count1--;         
					} else {          
						this.show1 = true;          
						clearInterval(this.timer1);          
							this.timer1 = null;         
						}        
					}, 1000)       
				}    
			},
			tabChange(){
				if(this.type==1){
					this.type=2
				}else{
					this.type=1
				}
			},
			// 对密码看见
			showPwd(){
				if(this.pwd.trim()==''){
					uni.showToast({
						title: '请输入密码!',
						duration:2000,
						icon:'none'
					});
					return;
				}
				this.havePwd=!this.havePwd;
			},
			// 点击可以删除账号
			showUser(){
				this.user=''
			},
			// d点击删除手机号
			delPhone(){
				this.phone=''
			},
			// 点击按钮开始登录
			loginCode(){
				// 验证码登录
				var phoneReg=/^1[345789]\d{9}$/;
				if(this.type==1){
					if(this.phone.trim()==''&&this.code.trim()==''){
						uni.showToast({
							title: '请将内容填写完整!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(!(phoneReg).test(this.phone)){
						uni.showToast({
							title: '您输入的的手机号码有误!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(this.phone.trim()==''){
						uni.showToast({
							title: '手机号码不能为空!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(this.code.trim()==''){
						uni.showToast({
							title: '验证码不能为空!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(this.code.trim().length<6){
						uni.showToast({
							title: '您输入的的验证码有误!',
							duration:2000,
							icon:'none'
						});
						return;
					}else{
						uni.redirectTo({
							url:'../../myCenter/myOrder'
						})
					}
				}else{
					if(this.user.trim()==''&&this.pwd.trim()==''){
						uni.showToast({
							title: '请将内容填写完整!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(this.user.trim()==''){
						uni.showToast({
							title: '您输入的的账号不能为空!',
							duration:2000,
							icon:'none'
						});
						return;
					}else if(this.pwd.trim()==''){
						uni.showToast({
							title: '您输入的的密码不能为空!',
							duration:2000,
							icon:'none'
						});
						return;
					}else{
						uni.redirectTo({
							url:'../../myCenter/myOrder'
						})
					}
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
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	overflow:hidden;
}
/* 登录模块样式 */
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
	bottom:46upx;
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
	display: flex;
}
/* 这里要换成图片 */
.phone image:nth-of-type(1){
	width: 55upx;
	height: 55upx;
	display:inline-block;
	vertical-align: middle;
	margin: auto 40upx;
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
.btn .btn2{
	width:653upx;
	height:85upx;
	background:rgba(237,237,237,1)!important;
	box-shadow:0upx 0upx 0upx rgba(136,204,233,0.2);
	border-radius:43upx;
	color:#fff;
	font-size: 30upx;
	line-height:85upx;
	border:0;
}
.btn button::after {
	border: none
}
.deal{
	/* margin-top:31upx; */
	width:100%;
	text-align:center;
}
.deal view{
	color:#fff;
	display:inline-block;
	font-size: 20upx;
}
.deal image{
	display:inline-block;
	width: 31upx;
	height: 31upx;
	vertical-align: middle;
	margin-right:15upx;
}
.deal navigator{
	color:#77FC6D;
	display:inline-block;
	font-size: 20upx;
}
/* 三方登录 */
.threeLogin{
	width: 100%;
	text-align:center;
	display:flex;
	justify-content: space-around;
	margin-top:28upx;
}

.threeLogin image{
	width: 90upx;
	height: 90upx;
}
/* 选择登录方式样式 */
.switchs{
	padding:0 50upx;
	margin-top:197upx;
}
.switchs navigator{
	color:#40BBF7;
	font-size: 28upx;
	display:inline-block;
	width: 325upx;
	text-align:right;
}
.switchs text{
	color:#40BBF7;
	font-size: 28upx;
	width: 325upx;
	display:inline-block;
	text-align:left;
}
</style>
