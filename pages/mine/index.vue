<template>
	<view class="content">
		<view class="top">
			<view class="left">
				<view class="head">
					<image src="@/static/head.png" />
				</view>
			</view>
			<view class="right">
				<text class="name" v-if="userInfo">{{ userInfo.Username || userInfo.Phone || '昵称' }}</text>
				<text class="desc">用一句话让人记住你！</text>
			</view>
		</view>
		<view class="middle">
			<div class="item" v-for="item in middleList" :key="item.unicode">
				<div class="mtop">
					<uni-icons custom-prefix="iconfont" :type="item.unicode" :color="item.color" size="30"></uni-icons>
				</div>
				<div class="mbottom">{{ item.title }}</div>
			</div>
		</view>
		<view class="bottom">
			<view class="list-item" v-for="item in list" :key="item.unicode" @click="navTo(item.url)">
				<view class="left">
					<uni-icons custom-prefix="iconfont" :type="item.unicode" size="30"></uni-icons>
				</view>
				<view class="right">
					<view class="title">{{ item.title }}</view>
					<view class="arrow">
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import { navTo } from '@/utils/utils'

const userInfo = ref(null)
onMounted(() => {
	userInfo.value = uni.getStorageSync('userInfo')
	console.log('userInfo', userInfo.value);
	console.log('userInfo', userInfo.value.Username);
})

const middleList = ref([
	{
		title: '自定义APP',
		unicode: 'icon-shoujizhendong',
		color: '#f75e3c',
		url: '/pages/index/index'
	},
	{
		title: '应用管理',
		unicode: 'icon-yingyong',
		color: '#1baf59',
		url: '/pages/index/index'
	},
	{
		title: '高级功能',
		unicode: 'icon-gaojigongneng',
		color: '#7e7cea',
		url: '/pages/index/index'
	},
	{
		title: '桌面小组件',
		unicode: 'icon-zhuomianzujianguanli',
		color: '#4c8bf0',
		url: '/pages/index/index'
	}
])
const list = ref([
	{
		title: '我的消息',
		unicode: 'icon-xiaoxi',
		url: '/pages/index/index'
	},
	{
		title: '帮助中心',
		unicode: 'icon-bangzhu',
		url: '/pages/index/index'
	},
	{
		title: '设置',
		unicode: 'icon-shezhi',
		url: '/subPackages/mine/setting/index'
	}
])
</script>

<style lang="scss">
.top {
	width: 670rpx;
	height: 100rpx;
	padding: 40rpx 20rpx;
	border-radius: 10rpx;
	margin-bottom: 20rpx;
	display: flex;
	align-items: center;

	.left {
		margin-left: 20rpx;

		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
	}

	.right {
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;

		.name {
			font-size: 36rpx;
		}

		.desc {
			font-size: 24rpx;
			color: #888;
		}
	}
}

.middle {
	height: 250rpx;
	display: flex;
	align-items: center;
	border-radius: 20rpx;
	background-color: #fff;
	margin: 20rpx;

	.item {
		width: 190rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.mtop {
			margin-bottom: 40rpx;
			padding: 15rpx;
			border: #d5d5d5 solid 1rpx;
			border-radius: 50%;
			box-shadow: 0px 4px 15px -6px;
		}
	}
}

.bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20rpx;
	background-color: #fff;
	margin: 0 20rpx;

	.list-item {
		width: 670rpx;
		height: 100rpx;
		padding: 10rpx 20rpx;
		display: flex;
		align-items: center;

		.left {
			padding: 0 20rpx;
		}

		.right {
			width: 600rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
}
</style>
