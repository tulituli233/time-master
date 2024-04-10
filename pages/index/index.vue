<template>
	<view class="content">
		<view class="list">
			<view class="item" @click="linkTo(item.url)" v-for="item in list" :key="item.title">
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
import { ref, computed } from 'vue'
import { navTo } from '@/utils/utils'

const list = ref([
	{
		title: '备忘录',
		unicode: 'icon-biaoqian',
		url: '/subPackages/memos/index/index',
		color: '#1baf59',
		desc: '记事本'
	},
	{
		title: '记账',
		unicode: 'icon-jizhang',
		url: '/subPackages/expenses/index/index',
		color: '#7e7cea',
		desc: '本月：收入5000，支出3000，结余2000'
	},
	{
		title: '日记',
		unicode: 'icon-rijix',
		url: '/subPackages/diary/index/index',
		color: '#4c8bf0',
		desc: '今天是个好日子，明天也是个好日子'
	},
	{
		title: '纪念日倒数',
		unicode: 'icon-jinianriyingxiao',
		url: '/subPackages/countdowns/index/index',
		color: '#f75e3c',
		desc: '2024年2月24日，距离2024年3月1日还有5天'
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
		unicode: 'icon-shui',
		url: '/subPackages/water/index/index',
		color: '#00b5ff',
		desc: '今日：0/1700ml'
	},
	{
		title: '小说',
		unicode: 'icon-xuexi',
		url: '/subPackages/book/index/index',
		color: '#ce9178',
		desc: '已读：1章，未读：5章'
	},
	{
		title: '课程表',
		unicode: 'icon-kechengbiao',
		url: '/pages/note/index',
		color: '#ff4962',
		desc: '小初高大学课程表'
	},
	{
		title: '习惯打卡',
		unicode: 'icon-a-rilidaka',
		url: '/subPackages/test/NumericKeypad/index',
		color: '#7e7de8',
		desc: '习惯成自然'
	}
])
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
