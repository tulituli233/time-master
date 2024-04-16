<template>
	<AppPage navTitle="事项" :showTab="true">
		<view id="select">
			<view class="select-header theme-bgc">
				<view class="uni-padding-wrap">
					<uni-segmented-control :current="current" :values="items" :style-type="styleType"
						:active-color="activeColor" @clickItem="onClickItem" />
				</view>
			</view>
			<view class="plan-content">
				<view>
					<view class="plan-list">
						<view :class="['plan-item theme-bgc', index === 0 ? 'first' : '', index === newPlanList.length - 1 ? 'last' : '']" v-for="(item, index) in newPlanList"
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
												@click="bindClick($event, item1)">
												<view class="content-box">
													<view class="box-left" @click="updateStatus(item1)">
														<uni-icons custom-prefix="iconfont"
															:type="statusIcon(item1.Status)" size="20"
															color="#4c8bf0"></uni-icons>
													</view>
													<view class="box-right" @click="editTask(item1)">
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
				<button class="win-service" @click="openAddPopup">
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
	</AppPage>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppPage from '@/components/AppPage'
import { apiAddTask, apiGetUserTasks, apiUpdateTask } from '@/services/api/tasks';
import { formatDateTime, formatDate } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app';

const x = ref('600rpx');
const y = ref('1200rpx');
const popupBottom = ref(0);
// 获取任务列表
let tasks = ref([]);
onShow(() => {
	getTasks();
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
const bindClick = (e, note) => {
	if (e.index === 0) {
		// 置顶
		updateTaskStatus(note, { Priority: 1 });
	} else if (e.index === 1) {
		// 失败
		updateTaskStatus(note, { Status: 3 });
	} else if (e.index === 2) {
		// 删除
		updateTaskStatus(note, { Status: 2 });
	}
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
// #region 改
const updateTaskStatus = (item, params = {}) => {
	const data = {
		TaskID: item.TaskID,
		...params
	}
	apiUpdateTask(data).then(res => {
		if (res.code === 0 || !res.code) {
			uni.showToast({
				icon: 'error',
				title: res.msg || '网络异常'
			})
		} else {
			uni.showToast({
				title: res.msg
			})
			Object.assign(item, params);
		}
	})
}

const updateStatus = (item) => {
	const newStatus = item.Status === 0 ? 1 : 0;
	updateTaskStatus(item, { Status: newStatus });
}
const popupRef = ref(null);
const selectedType = ref(0);
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
			getTasks();
			popupRef.value.close()
		}
	})
}
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
.uni-padding-wrap {
	padding: 0px 40rpx
}

#select {
	.select-header {
		position: fixed;
		top: 150rpx;
		left: 0;
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

	.last {
		margin-bottom: 120rpx!important;
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

::v-deep [name="content"] {
	bottom: v-bind("popupBottom + 'px'")!important;
}

.popup-content {
	padding: 20rpx;
	height: 350rpx;

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
