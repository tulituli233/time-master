<template>
	<view class="content">
		<view class="diary-list">
			<view class="diary-item" v-for="item in diaries" :key="item.DiaryID" @click="editDiary(item)"
				@longpress="openPopup(item)">
				<view class="diary-left">
					<view class="month">
						{{ formatDateToMonth(item.Date) }}
					</view>
					<view class="day">
						{{ formatDateToDay(item.Date) }}
					</view>
					<view class="time">
						{{ formatDateToTime(item.Date) }}
					</view>
				</view>
				<view class="diary-right">
					<view class="title">
						{{ item.Title }}
					</view>
					<view class="diary-content" v-html="item.Content"></view>
				</view>
			</view>
		</view>
		<!-- 小浮窗 -->
		<movable-area class="movableArea">
			<movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
				<button class="win-service" @click="navTo(`/subPackages/diary/add/index`)">
					<uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
				</button>
			</movable-view>
		</movable-area>
		<!-- 更多功能 -->
		<uni-popup ref="popupRef" background-color="#fff">
			<view class="popup-list">
				<view class="popup-item" @click="deleteDiary">
					<view class="popup-icon">
						<uni-icons type="trash" size="30" color="#999"></uni-icons>
					</view>
					<view class="popup-text">
						删除
					</view>
				</view>
				<view class="popup-close" @click="$refs.popupRef.close()">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { apiGetUserDiaries, apiDeleteDiary } from '@/services/api/diary';
import { navTo, formatDateToMonth, formatDateToDay, formatDateToTime } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app';

const x = ref('600rpx');
const y = ref('1000rpx');
// 获取日记
let diaries = ref([]);
onShow(() => {
	getDiaries();
})
const getDiaries = () => {
	apiGetUserDiaries(getApp().globalData.userInfo.UserID).then(res => {
		diaries.value = res.data
		console.log('diaries', diaries.value)
	})
}

// #region 改
const editDiary = (item) => {
	navTo(`/subPackages/diary/add/index?isEdit=true&diary=${JSON.stringify(item)}`)
}
// #endregion
// #region 删
const popupRef = ref(null)
const activeDiary = ref(null)
const openPopup = (diary) => {
	activeDiary.value = diary
	popupRef.value.open('bottom')
	// 触发手机抖动
	uni.vibrateShort();
}
const deleteDiary = () => {
	// 删除
	apiDeleteDiary(activeDiary.value.DiaryID).then(res => {
		if (res.code === 0 || !res.code) {
			uni.showToast({
				icon: 'error',
				title: res.msg || '网络异常'
			})
		} else {
			uni.showToast({
				title: res.msg
			})
			popupRef.value.close()
			getDiaries();
		}
	})
}
// #endregion
</script>

<style lang="scss">
.win-service {
	background-color: #db4ef8;
}

.content {
	width: 100vw;
	background-image: url('@/static/diary-bg.webp');
	background-size: cover;
}

.diary-list {
	padding: 20rpx;

	.diary-item {
		display: flex;
		align-items: center;
		height: 150rpx;
		padding: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;

		.diary-left {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-right: 40rpx;

			.month {
				font-size: 30rpx;
			}

			.day {
				font-size: 40rpx;
				font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			}

			.time {
				font-size: 24rpx;
			}
		}

		.diary-right {
			height: 100%;
			width: 500rpx;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;

			.title {
				font-size: 32rpx;
				font-weight: 600;
				margin-bottom: 10rpx;
			}

			.diary-content {
				font-size: 24rpx;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
