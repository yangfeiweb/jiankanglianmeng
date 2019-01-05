<template>
	<view class="content">
		<view class="wx">
			<view class="login">
				<text>您已更新到最新版本</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color:#fff;
}
.content{
	width: 100%;
	/* height: 1726upx; */
	background-color:#f4f4f4;
	/* padding-bottom:30upx; */
	padding-top: 10upx;
}
.wx{
	width: 100%;
	background-color: #fff;
	padding: 0 37upx 0 31upx;
	box-sizing: border-box;
	
}
.wx .login{
	height: 104upx;
	line-height: 104upx;
	text-align: left;
	border-bottom: 1upx solid #EFEFEF;
}

.wx .login text{
	color: #333;
	font-size: 28upx;
}

</style>
