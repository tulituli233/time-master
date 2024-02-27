<template>
	<view class="content">
		<view class="fixed-box">
			<view class="top">
				<view class="date">
					<view class="top-title">2024年</view>
					<view class="month">2月</view>
				</view>
				<view class="money">
					<view class="item">
						<view class="top-title">收入</view>
						<view class="num">0.00</view>
					</view>
					<view class="item">
						<view class="top-title">支出</view>
						<view class="num">0.00</view>
					</view>
				</view>
			</view>
			<!-- 功能列表 -->
			<view class="function-box">
				<view class="function-list">
					<view class="function-item">
						<view class="icon">
							<uni-icons type="calendar" size="30" :color="themeColor"></uni-icons>
						</view>
						<view class="title">资产</view>
					</view>
					<view class="function-item">
						<view class="icon">
							<uni-icons type="calendar" size="30" :color="themeColor"></uni-icons>
						</view>
						<view class="title">统计</view>
					</view>
					<view class="function-item">
						<view class="icon">
							<uni-icons type="calendar" size="30" :color="themeColor"></uni-icons>
						</view>
						<view class="title">预算</view>
					</view>
					<view class="function-item">
						<view class="icon">
							<uni-icons type="calendar" size="30" :color="themeColor"></uni-icons>
						</view>
						<view class="title">导入</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 账目列表 -->
		<view class="account-list" v-if="accountList && accountList.length">
			<view class="account-item" v-for="item in accountList"></view>
		</view>
		<view class="no-data" v-else>暂无数据</view>

	</view>
</template>

<script setup>
import { ref } from 'vue';
// 页面主题色
const themeColor = ref('#1baf59');

const accountList = [

]
</script>

<style lang="scss">
.fixed-box {
	position: fixed;
	width: 100%;
}

.top {
	display: flex;
	align-items: center;
	background-color: v-bind(themeColor);
	padding: 20rpx 20rpx 100rpx;
	color: #fff;

	.date {
		display: flex;
		flex-direction: column;
		width: 200rpx;
		padding-left: 20rpx;

		.month {
			font-size: 40rpx;
		}
		.top-title {
			margin-bottom: 10rpx;
		}
	}

	.money {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 400rpx;

		.item {
			display: flex;
			flex-direction: column;

			.num {
				font-size: 36rpx;
			}
		}
	}
}

.function-box {
	height: 70rpx;
	background-color: #f2f2f2;
}

.function-list {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 690rpx;
	margin: 0 auto;
	padding: 20rpx 0 15rpx;
	background-color: #fff;
	border-radius: 20rpx;
	// 向上偏移60%
	transform: translateY(-60%);

	.function-item {
		display: flex;
		align-items: center;
		flex-direction: column;
		font-size: 24rpx;
		.icon {
			margin-bottom: 10rpx;
		}
	}
}
</style>
