<template>
	<view class="button-sp-area">
		<button type="primary" plain="true" @click="showRichAlert()">点击显示弹窗</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			}
		},
		onLoad() {

		},
		methods: {
			showRichAlert() {
				const dcRichAlert = uni.requireNativePlugin('CRGG-Plugin');
				dcRichAlert.setcalendar({
				                    title: '我是提醒',  
				                    location: "上海市普陀区",  
				                    allDay: "1",
									description:"测试测试描述",
									startDate: "2020-04-15 15:40:33",
									endDate: "2020-04-15 15:40:32",
									alarmArray_ios: ["-7.f","-17.f","-27.5f"],
									alarmArray_android: [1,2,10],
									
				                }, result => {  
									if(result.type=="0"){
										//失败 message
									}else{
										//成功
									}
				                });
			},

			// 			nvueclick() {
			// 				uni.navigateTo({
			// 					url: '/pages/nvue/index2'
			// 				});
			// 			}
		}
	}
</script>

<style>
	button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.wrapper {
		flex-direction: column;
		justify-content: center;
	}

	.button {
		width: 200px;
		margin-top: 30px;
		margin-left: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
		border-width: 2px;
		border-style: solid;
		border-color: #458B00;
		background-color: #458B00;
	}

	.text {
		font-size: 30px;
		color: #666666;
		text-align: center;
	}
</style>
