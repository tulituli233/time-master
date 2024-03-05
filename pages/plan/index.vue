<template>
	<view class="content">
		<view class="time">
			<view class="date">{{ currDate }}</view>
			<view class="week">{{ currWeek }}</view>
		</view>
		<view class="swiper-box">
			<swiper class="swiper" disable-programmatic-animation :current="currentIndex" @change="swiperChange">
				<swiper-item v-for="item in list" :key="item.date">
					<view class="swiper-item" v-if="item.plans && item.plans.length">
						<view class="content-box" v-for="item1 in item.plans" :key="item1.planID">
							<view class="box-left">
								<checkbox value="cb" />
							</view>
							<view class="box-right">
								<view class="plan-title">
									<text class="title">{{ item1.title }}</text>
								</view>
								<view class="plan-desc">
									<text class="desc">{{ item1.date }}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="swiper-item no-data" v-else>暂无数据</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 小浮窗 -->
		<movable-area class="movableArea">
			<movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
				<button class="win-service">
					<uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
				</button>
			</movable-view>
		</movable-area>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { timestampToTime, getWeek } from '@/utils/utils.js';
const x = ref('600rpx');
const y = ref('1000rpx');
onMounted(() => {
	// 使用filterPlan筛选昨天，今天，明天的计划
	const now = new Date().getTime();
	const yesterday = new Date(now - 24 * 60 * 60 * 1000);
	const tomorrow = new Date(now + 24 * 60 * 60 * 1000);
	list.value.push(filterPlan(timestampToTime(yesterday)));
	list.value.push(filterPlan(timestampToTime(now)));
	list.value.push(filterPlan(timestampToTime(tomorrow)));
	console.log(list.value);
})
const planList = [
	{
		planID: 1,
		status: 0,
		isTop: 0,
		type: 1,
		title: '吃饭',
		date: '2022-02-01'
	},
	{
		planID: 2,
		status: 0,
		isTop: 1,
		type: 1,
		title: '睡觉',
		date: '2022-02-02'
	},
	{
		planID: 3,
		status: 1,
		isTop: 0,
		type: 1,
		title: '学习',
		date: '2022-02-03'
	},
	{
		planID: 4,
		status: 3,
		isTop: 0,
		type: 1,
		title: '写代码',
		date: '2022-02-04'
	},
	{
		planID: 5,
		status: 0,
		isTop: 0,
		type: 2,
		title: '运动',
		date: '2022-03-05'
	},
	{
		planID: 6,
		status: 0,
		isTop: 0,
		type: 1,
		title: '看电影',
		date: '2024-02-27'
	},
	{
		planID: 7,
		status: 0,
		isTop: 0,
		type: 2,
		title: '跑步',
		date: '2024-02-28'
	},
	{
		planID: 8,
		status: 0,
		isTop: 0,
		type: 2,
		title: '打篮球',
		date: '2024-03-01'
	},
	{
		planID: 9,
		status: 0,
		isTop: 0,
		type: 2,
		title: '游泳',
		date: '2024-04-02'
	},
	{
		planID: 10,
		status: 0,
		isTop: 0,
		type: 2,
		title: '跳绳',
		date: '2024-02-26'
	},
	{
		planID: 11,
		status: 0,
		isTop: 0,
		type: 2,
		title: '羽毛球',
		date: '2024-02-27'
	}
]
const currDate = ref(timestampToTime(new Date().getTime()))
const currWeek = ref(getWeek(new Date().getTime()))
const list = ref([])
// 根据date筛选指定日期的计划
const filterPlan = (date) => {
	let dayPlan = {
		date,
		plans: []
	}
	dayPlan.plans = planList.filter(item => item.date === date)
	return dayPlan
}
let currentIndex = ref(1)
const swiperChange = (e) => {
	currDate.value = timestampToTime(list.value[e.detail.current].date)
	currWeek.value = getWeek(list.value[e.detail.current].date)
	console.log('currentIndex', currentIndex.value);
	console.log('e', e.detail.current);
	if (currentIndex.value < e.detail.current && !list.value[e.detail.current + 1]) {
		list.value.push(filterPlan(timestampToTime(new Date(list.value[e.detail.current].date).getTime() + 24 * 60 * 60 * 1000)))
		console.log('push', list.value);
		// currentIndex.value = e.detail.current
	}
	else if (currentIndex.value > e.detail.current && !list.value[e.detail.current - 1]) {
		list.value.unshift(filterPlan(timestampToTime(new Date(list.value[e.detail.current].date).getTime() - 24 * 60 * 60 * 1000)))
		console.log('unshift', list.value);
	}
	currentIndex.value = e.detail.current
}

</script>

<style lang="scss">
.win-service {
	background-color: #4c8bf0;
}

.time {
	position: fixed;
	width: 100%;
	z-index: 1;
	background-color: #f2f2f2;
	display: flex;
	align-items: center;
	padding: 30rpx;

	.date {
		margin-right: 10rpx;
		font-size: 40rpx;
		font-weight: bold;
		font-family: 'Courier New', Courier, monospace;
	}

	.week {
		font-size: 30rpx;
	}
}

.swiper-box {
	.swiper {
		height: 90vh;
	}

	.swiper-item {
		display: block;
		margin-top: 120rpx;

		.content-box {
			display: flex;
			align-items: center;
			width: 710rpx;
			height: 120rpx;
			border-radius: 20rpx;
			background-color: #fff;
			margin: 0 20rpx 20rpx;

			.box-left {
				margin: 20rpx;
			}

			.box-right {
				.plan-title {
					.title {
						font-size: 30rpx;
					}
				}

				.plan-desc {
					.desc {
						font-size: 24rpx;
						color: #888;
					}
				}
			}
		}
	}

	.no-data {
		text-align: center;
		font-size: 30rpx;
		color: #888;
	}
}
</style>
