<template>
	<AppPage navTitle="时间管家" :showTab="true">
		<view class="list">
			<view class="item theme-bgc" @click="linkTo(item.url)" v-for="item in list" :key="item.title">
				<view class="left">
					<view class="icon" :style="{ backgroundColor: item.color }">
						<uni-icons custom-prefix="iconfont" :type="item.unicode" color="#fff" size="30"></uni-icons>
					</view>
				</view>
				<view class="right">
					<text class="title">{{ item.title }}</text>
					<text class="desc">{{ item.desc }}</text>
				</view>
			</view>
		</view>
	</AppPage>
</template>

<script setup>
import { ref, computed } from 'vue'
import { navTo } from '@/utils/utils'
import AppPage from '@/components/AppPage'
import { useStore } from 'vuex';

const store = useStore();
const list = computed(() => store.state.homeList)
const linkTo = (url) => {
	if (url !== '/pages/note/index') {
		navTo(url)
	} else {
		uni.switchTab({
			url: '/pages/note/index'
		})
	}
}
</script>

<style lang="scss">
.list {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20rpx;

	.item {
		width: 670rpx;
		height: 100rpx;
		padding: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
}

.left {
	.icon {
		padding: 10rpx;
		background-color: #9bc6fc;
		border-radius: 50%;
	}
}

.right {
	display: flex;
	flex-direction: column;
	margin-left: 20rpx;

	.desc {
		font-size: 24rpx;
		color: #888;
	}
}
</style>
