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
					<view class="plan-list">
						<view :class="['plan-item', index === 0 ? 'first' : '']" v-for="(item, index) in newPlanList"
							:key="index">
							<view v-if="item.plans && item.plans.length">
								<view class="plan-header" @click="item.isShow = !item.isShow">
									<view class="header-title">
										<text class="title">{{ item.title }}</text>
									</view>
									<view class="header-desc">
										<text class="plan-num">{{ item.plans.length }}</text>
										<uni-icons :type="item.isShow ? 'top' : 'bottom'" size="20"></uni-icons>
									</view>
								</view>
								<view class="plan-body" v-show="item.isShow">
									<view class="body-item" v-for="item1 in item.plans" :key="item1.TaskID">
										<uni-swipe-action>
											<uni-swipe-action-item :right-options="options2"
												@click="bindClick(item1.TaskID)">
												<view class="content-box">
													<view class="box-left" @click="updateStatus(item1)">
														<uni-icons custom-prefix="iconfont"
															:type="statusIcon(item1.Status)" size="20"
															color="#4c8bf0"></uni-icons>
													</view>
													<view class="box-right">
														<view class="plan-title">
															<text class="title">{{ item1.Title }}</text>
														</view>
														<view class="plan-desc">
															<text class="desc">{{ formatDateTime(item1.DueDate)
																}}</text>
														</view>
													</view>
												</view>
											</uni-swipe-action-item>
										</uni-swipe-action>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 小浮窗 -->
		<movable-area class="movableArea">
			<movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
				<button class="win-service" @click="$refs.popupRef.open('bottom')">
					<uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
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
							@click="addPlan"></uni-icons>
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
import { ref, computed } from 'vue';
import { apiAddTask, apiGetUserTasks, apiUpdateTask } from '@/services/api/tasks';
import { formatDateTime, formatDate } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app';

// 获取任务列表
let tasks = ref([]);
onShow(() => {
	getTasks();
	// uni.onKeyboardHeightChange(res => {
	// 	console.log('键盘高度变化----', res.height)
	// })
})
const getTasks = () => {
	apiGetUserTasks(getApp().globalData.userInfo.UserID).then(res => {
		tasks.value = res.data
		console.log('tasks', tasks)
	})
}
const current = ref(0);
const items = ['全部', '工作', '生活'];
const styleType = 'button';
const activeColor = '#1baf59';
const onClickItem = (e) => {
	current.value = e.currentIndex
}

const x = ref('600rpx');
const y = ref('1000rpx');

const options2 = ref([
	{
		text: '置顶',
		style: {
			backgroundColor: '#007aff'
		}
	},
	{
		text: '失败',
		style: {
			backgroundColor: '#007aff'
		}
	},
	{
		text: '删除 ',
		style: {
			backgroundColor: '#F56C6C'
		}
	}
])
const bindClick = (e) => {
	console.log(e)
}
// 选中的类型
const modelCateList = ref([
	{
		title: '置顶',
		isShow: true,
		plans: []
	},
	{
		title: '过去',
		isShow: true,
		plans: []
	},
	{
		title: '今天',
		isShow: true,
		plans: []
	},
	{
		title: '明后天',
		isShow: true,
		plans: []
	},
	{
		title: '7天内',
		isShow: true,
		plans: []
	},
	{
		title: '未来',
		isShow: true,
		plans: []
	}, {
		title: '已完成',
		isShow: true,
		plans: []
	},
	{
		title: '已失败',
		isShow: true,
		plans: []
	}
])
let newPlanList = computed(() => {
	let currPlanList = []
	clearPlans();
	switch (current.value) {
		case 0:
			currPlanList = handleData(tasks.value);
			break
		case 1:
			currPlanList = handleData(tasks.value.filter(item => {
				return item.Type === 0
			}))
			break
		case 2:
			currPlanList = handleData(tasks.value.filter(item => {
				return item.Type === 1
			}))
			break
	}
	return currPlanList
})

// 处理数据
const handleData = (list) => {
	let cateList = modelCateList
	let today = formatDate(new Date())
	list.forEach(item => {
		const date = new Date(formatDate(item.DueDate))
		const todayTime = new Date(today)
		const diff = date - todayTime
		// 置顶
		if (item.Priority === 1 && item.Status === 0) {
			cateList.value[0].plans.push(item)
		}
		// 过去
		else if (diff < 0 && item.Status === 0) {
			cateList.value[1].plans.push(item)
		}
		// 今天
		else if (diff === 0 && item.Status === 0) {
			cateList.value[2].plans.push(item)
		}
		// 明后天
		else if (diff >= 1 * 24 * 60 * 60 * 1000 && diff <= 2 * 24 * 60 * 60 * 1000 && item.Status === 0) {
			cateList.value[3].plans.push(item)
		}
		// 7天内
		else if (diff <= 7 * 24 * 60 * 60 * 1000 && item.Status === 0) {
			cateList.value[4].plans.push(item)
		}
		// 未来
		else if (diff > 7 * 24 * 60 * 60 * 1000 && item.Status === 0) {
			cateList.value[5].plans.push(item)
		}
		// 已完成
		else if (item.Status === 1) {
			cateList.value[6].plans.push(item)
		}
		// 已失败
		else if (item.Status === 3) {
			cateList.value[7].plans.push(item)
		}
	})
	console.log('cateList', cateList);
	return cateList.value
}
// 清空modelCateList中每个对象的plans数组
const clearPlans = () => {
	modelCateList.value.forEach(item => {
		item.plans = []
	})
}
const planTitle = ref('');
const planDate = ref(formatDateTime(new Date()));
console.log('planDate', planDate.value);
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
const popupRef = ref(null);
const selectedType = ref(0);
const addPlan = () => {
	let plan = {
		UserId: 1,
		Title: planTitle.value,
		DueDate: planDate.value,
		Type: selectedType.value,
	}
	console.log('plan', plan);
	apiAddTask(plan).then(res => {
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

.plan-list {
	padding: 20rpx;

	.first {
		margin-top: 100rpx;
	}

	.plan-item {
		margin-bottom: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;

		.plan-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx;

			.header-title {
				.title {
					font-size: 30rpx;
					font-weight: bold;
				}
			}
		}
	}
}

.body-item {
	height: 100rpx;

	.content-box {
		display: flex;
		align-items: center;

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
