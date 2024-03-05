<template>
	<view class="content">
		<view class="list">
			<view class="item" @click="$utils.navTo(item.url)" v-for="item in list" :key="item.title">
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
	</view>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
	{
		title: '备忘录',
		unicode: 'icon-biaoqian',
		url: '/pages/index/index',
		color: '#1baf59',
		desc: '记事本'
	},
	{
		title: '记账',
		unicode: 'icon-jizhang',
		url: '/subPackages/jizhang/index/index',
		color: '#7e7cea',
		desc: '本月：收入5000，支出3000，结余2000'
	},
	{
		title: '日记',
		unicode: 'icon-rijix',
		url: '/pages/note/index',
		color: '#4c8bf0',
		desc: '今天是个好日子，明天也是个好日子'
	},
	{
		title: '纪念日倒数',
		unicode: 'icon-jinianriyingxiao',
		url: '/pages/note/index',
		color: '#f75e3c',
		desc: '2024年2月24日，距离2024年3月1日还有5天'
	},
	{
		title: '课程表',
		unicode: 'icon-kechengbiao',
		url: '/pages/note/index',
		color: '#ff4962',
		desc: '小初高大学课程表'
	},
	{
		title: '事项',
		unicode: 'icon-note',
		url: '/pages/note/index',
		color: '#ffa851',
		desc: '总数：2个，未完成：1个'
	},
	{
		title: '喝水',
		unicode: 'icon-quan',
		url: '/pages/note/index',
		color: '#0fb9a0',
		desc: '今日：0/1700ml'
	},
	{
		title: '习惯打卡',
		unicode: 'icon-a-rilidaka',
		url: '/pages/note/index',
		color: '#7e7de8',
		desc: '习惯成自然'
	}
])
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
