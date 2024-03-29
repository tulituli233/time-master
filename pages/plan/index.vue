<template>
	<view class="content">
		<view class="time">
			<view class="date">{{ currDate }}</view>
			<view class="week">{{ currWeek }}</view>
		</view>
		<view class="swiper-box">
			<swiper class="swiper" disable-programmatic-animation :current="currentIndex" @change="swiperChange">
				<swiper-item v-for="item in dayPlan" :key="item.date">
					<view class="swiper-item" v-if="item.plans && item.plans.length">
						<view class="content-box" v-for="item1 in item.plans" :key="item1.TaskID">
							<view class="box-left" @click="updateStatus(item1)">
								<uni-icons custom-prefix="iconfont" :type="statusIcon(item1.Status)" size="20"
									color="#4c8bf0"></uni-icons>
							</view>
							<view class="box-right" @click="editTask(item1)">
								<view class="plan-title">
									<text class="title">{{ item1.Title }}</text>
								</view>
								<view class="plan-desc">
									<text class="desc">{{ formatDateTime(item1.DueDate) }}</text>
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
				<button class="win-service" @click="openAddPopup">
					<uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
				</button>
			</movable-view>
		</movable-area>
		<!-- 今天小浮窗 -->
		<movable-area class="movableArea">
			<movable-view class="movableView" direction="all" :x="todayX" :y="todayY" :out-of-bounds="false">
				<button class="win-service" @click="currentIndex = todayIndex">
					<uni-icons class="today-icon" custom-prefix="iconfont" type="icon-jinri" size="30"
						color="#fff"></uni-icons>
				</button>
			</movable-view>
		</movable-area>
		<!-- 添加弹窗 -->
		<uni-popup ref="popupRef" background-color="#fff">
			<view class="popup-content">
				<view class="input-box">
					<input class="input" type="text" v-model="planTitle" placeholder="把事情记录下来吧~" />
					<view class="btn">
						<uni-icons custom-prefix="iconfont" type="icon-send" size="30" color="#4c8bf0"
							@click="addOrEdit"></uni-icons>
					</view>
				</view>
				<!-- 属性 -->
				<view class="attr">
					<view class="date">
						<uni-datetime-picker class="no-border" type="datetime" v-model="planDate" />
					</view>
					<view class="type-list">
						<view class="type-box"
							:style="{ border: selectedType === index ? '5rpx solid ' + item.color : 'none' }"
							v-for="(item, index) in typeList" :key="index" @click="selectedType = index">
							<view class="type" :style="{ backgroundColor: item.color }">
								<uni-icons custom-prefix="iconfont" :type="item.icon" size="20"
									color="#fff"></uni-icons>
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { timestampToTime, getWeek, formatDateTime, formatDate } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app';
import { apiAddTask, apiGetUserTasks, apiUpdateTask } from '@/services/api/tasks';

const previewDays = 31;//预览天数
const x = ref('600rpx');
const y = ref('1000rpx');

const todayX = ref('600rpx');
const todayY = ref('850rpx');

// 获取任务列表
let tasks = ref([]);
const getTasks = () => {
	return new Promise((resolve, reject) => {
		apiGetUserTasks(getApp().globalData.userInfo.UserID).then(res => {
			tasks.value = res.data;
			console.log('tasks', tasks.value);
			filterPlans(previewDays, tasks, dayPlan);
			resolve();
		}).catch(error => {
			reject(error);
		});
	});
};

const popupBottom = ref(0);
onShow(async () => {
	await getTasks();
	// #ifdef APP-PLUS
	uni.onKeyboardHeightChange(res => {
		console.log('键盘高度变化----', res.height)
		if (res.height === 0) {
			popupBottom.value = 0
		} else {
			popupBottom.value = 100
		}
	})
	// #endif
});

const currDate = ref(timestampToTime(new Date().getTime()))
const currWeek = ref(getWeek(new Date().getTime()))

// 初始化dayPlan数组，包含30个元素，每个元素为一个对象，包含日期和计划数组
const initializeDayPlanArray = (days) => {
	const dayPlanArray = Array(days).fill().map((_, index) => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() - (Math.floor(days / 2) - index)); // 计算近指定天数的日期
		return { date: currentDate.toISOString().split('T')[0], plans: [] };
	});
	return dayPlanArray;
};

// 使用示例
const dayPlan = ref(initializeDayPlanArray(previewDays));

// 使用forEach方法将tasks中的数据按照日期分组加入到dayPlan数组中
const filterPlans = (days, tasks, dayPlan) => {
	// 重新初始化dayPlan数组
	dayPlan.value = initializeDayPlanArray(days);

	// 使用forEach方法将tasks中的数据按照日期分组加入到dayPlan数组中
	tasks.value.forEach(task => {
		const taskDate = new Date(formatDate(task.DueDate));
		const firstDate = new Date(formatDate(dayPlan.value[0].date)); // 数组第一天的日期
		const diffTime = Math.abs(firstDate - taskDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		if (diffDays <= days) {
			const index = diffDays; // 计算日期在dayPlan数组中的索引
			dayPlan.value[index].plans.push(task);
		}
	});
}
const todayIndex = Math.ceil(previewDays / 2 - 1)
let currentIndex = ref(todayIndex);
const swiperChange = (e) => {
	currDate.value = timestampToTime(dayPlan.value[e.detail.current].date)
	currWeek.value = getWeek(dayPlan.value[e.detail.current].date)
	planDate.value = currDate.value
	currentIndex.value = e.detail.current
}
const planTitle = ref('');
const planDate = ref(formatDateTime(currDate.value));
let typeList = [
	{
		name: '工作',
		icon: 'icon-gongzuo',
		color: '#76c681',
	},
	{
		name: '生活',
		icon: 'icon-zhufang',
		color: '#13bceb',
	}
]
// 状态 0 未完成 1 已完成 2 已删除 3 失败 
// 是否置顶 0 不置顶 1 置顶
// 类型 1 工作 2 生活
const statusIcon = (status) => {
	switch (status) {
		case 0:
			return 'icon-quan'
		case 1:
			return 'icon-duigou'
		case 3:
			return 'icon-cuo'
		default:
			return 'icon-quan'
	}
}
const updateTaskStatus = (item, newStatus) => {
	apiUpdateTask({
		TaskID: item.TaskID,
		Status: newStatus
	}).then(res => {
		if (res.code === 0 || !res.code) {
			uni.showToast({
				icon: 'error',
				title: res.msg || '网络异常'
			})
		} else {
			uni.showToast({
				title: res.msg
			})
			item.Status = newStatus;
		}
	})
}

const updateStatus = (item) => {
	const newStatus = item.Status === 0 ? 1 : 0;
	updateTaskStatus(item, newStatus);
}
const selectedType = ref(0);
const popupRef = ref(null);
const isEdit = ref(false);
const addOrEdit = () => {
	if (isEdit.value) {
		updatePlan()
	} else {
		addPlan()
	}
}
const openAddPopup = () => {
	isEdit.value = false
	popupRef.value.open('bottom')
	planTitle.value = ''
	planDate.value = formatDateTime(new Date())
}
const addPlan = () => {
	let plan = {
		UserId: getApp().globalData.userInfo.UserID,
		Title: planTitle.value,
		DueDate: planDate.value,
		Type: selectedType.value,
	}
	let errMsg = ''
	if (!plan.Title) {
		errMsg = '请填写计划标题'
	} else if (!plan.DueDate) {
		errMsg = '请选择计划日期'
	}
	if (errMsg) {
		uni.showToast({
			icon: 'error',
			title: errMsg
		})
		return
	}
	console.log('plan', plan);
	apiAddTask(plan).then(res => {
		if (res.code === 0 || !res.code) {
			uni.showToast({
				icon: 'error',
				title: res.msg || '网络异常'
			})
		} else {
			uni.showToast({
				title: res.msg
			})
			getTasks()
			popupRef.value.close()
		}
	})
}
// #region 编辑
const editTask = (item) => {
	isEdit.value = true
	editTaskID.value = item.TaskID
	planTitle.value = item.Title
	planDate.value = item.DueDate
	selectedType.value = item.Type
	popupRef.value.open('bottom')
}
const editTaskID = ref(0)
const updatePlan = () => {
	let plan = {
		TaskID: editTaskID.value,
		Title: planTitle.value,
		DueDate: formatDateTime(new Date(planDate.value)),
		Type: selectedType.value,
	}
	let errMsg = ''
	if (!plan.Title) {
		errMsg = '请填写计划标题'
	} else if (!plan.DueDate) {
		errMsg = '请选择计划日期'
	}
	if (errMsg) {
		uni.showToast({
			icon: 'error',
			title: errMsg
		})
		return
	}
	apiUpdateTask(plan).then(res => {
		if (res.code === 0 || !res.code) {
			uni.showToast({
				icon: 'error',
				title: res.msg || '网络异常'
			})
		} else {
			getTasks();
			popupRef.value.close()
		}
	})
}
// #endregion
</script>

<style lang="scss">
.win-service {
	background-color: #4c8bf0;
}

.today-icon {
	display: flex;
	align-items: center;
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

::v-deep uni-swiper-item {
	overflow: scroll;
}

.swiper-box {
	.swiper {
		height: 100vh;
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

::v-deep [name="content"] {
	bottom: v-bind("popupBottom + 'px'") !important;
}

.popup-content {
	padding: 20rpx;
	height: 400rpx;

	.input-box {
		display: flex;
		align-items: center;
		padding: 20rpx;

		.input {
			width: 600rpx;
		}

		.btn {
			width: 100rpx;
			text-align: center;
		}
	}

	.attr {
		display: flex;
		align-items: center;
		padding: 20rpx 0;

		.date {
			width: 400rpx;
			margin-right: 20rpx;
			padding: 20rpx;
		}

		.type-list {
			display: flex;
			align-items: center;

			.type-box {
				padding: 5rpx;
				border-radius: 50%;
				margin: 0 20rpx;

				.type {
					padding: 10rpx;
					border-radius: 50%;
				}
			}
		}
	}
}
</style>
