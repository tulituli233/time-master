<template>
	<view class="content">
		<view class="select">
			<view class="select-header">
				<view class="uni-padding-wrap">
					<uni-segmented-control :current="current" :values="items" :style-type="styleType"
						:active-color="activeColor" @clickItem="onClickItem" />
				</view>
			</view>
			<view class="content">
				<view>
					<view class="note-list">
						<view :class="{ 'note-item': true, 'top': index < 3, 'middle': index % 3 == 1 }"
							v-for="(item, index) in newPlanList" :key="item.MemoID">
							<view class="note-title">
								{{ item.Title }}
							</view>
							<view class="note-content" v-html="item.Content">
							</view>
							<view class="note-time">
								{{ formatDate(item.CreatedDate) }}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 小浮窗 -->
		<movable-area class="movableArea">
			<movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
				<button class="win-service" @click="navTo(`/subPackages/memos/add/index?type=${current}`)">
					<uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
				</button>
			</movable-view>
		</movable-area>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { apiGetUserMemos } from '@/services/api/memos';
import { navTo, formatDate } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app';

const x = ref('600rpx');
const y = ref('1000rpx');
// 获取备忘录
let memos = ref([]);
onShow(() => {
	getMemos();
})
const getMemos = () => {
	apiGetUserMemos(getApp().globalData.userInfo.UserID).then(res => {
		memos.value = res.data
		console.log('memos', memos)
	})
}
const current = ref(0);
const items = ['全部', '工作', '生活'];
const styleType = 'button';
const activeColor = '#1baf59';
const onClickItem = (e) => {
	current.value = e.currentIndex
}
let newPlanList = computed(() => {
	let currPlanList = []
	switch (current.value) {
		case 0:
			currPlanList = memos.value;
			break
		case 1:
			currPlanList = memos.value.filter(item => {
				return item.Type === 0
			})
			break
		case 2:
			currPlanList = memos.value.filter(item => {
				return item.Type === 1
			})
			break
	}
	return currPlanList
})
</script>

<style lang="scss">
.uni-padding-wrap {
	padding: 0px 40rpx
}

.select {
	.select-header {
		position: fixed;
		width: 100%;
		z-index: 1;
		background-color: #f2f2f2;
		padding: 20rpx 0;
	}
}

.win-service {
	background-color: #17b00e;
}

.note-list {
	padding: 20rpx;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	.top {
		margin-top: 100rpx;
	}

	.middle {
		margin-left: 25rpx;
		margin-right: 25rpx;
	}

	.note-item {
		height: 300rpx;
		width: 180rpx;
		padding: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 40rpx;
		text-align: left;

		.note-title {
			width: 100%;
			font-size: 30rpx;
		}

		.note-content {
			width: 100%;
			height: 230rpx;
			padding: 10rpx 0;
			font-size: 24rpx;
			color: #999;
			display: -webkit-box;
			-webkit-line-clamp: 7;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.note-time {
			width: 100%;
			font-size: 24rpx;
		}
	}

}
</style>
