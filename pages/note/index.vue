<template>
	<view class="content">
		<view class="select">
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
			</view>
		</view>
		<!-- 在线客服小浮窗 -->
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
import { ref } from 'vue';
const current = ref(0);
const items = ['全部', '工作', '生活'];
const styleType = 'button';
const activeColor = '#1baf59';
const onClickItem = (e) => {
	current.value = e.currentIndex
}

const x = ref('740rpx');
const y = ref('1000rpx');
</script>

<style lang="scss">
.uni-padding-wrap {
	padding: 0px 40rpx
}

.select {
	padding-top: 20rpx;
}

.movableArea {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 150rpx);
	pointer-events: none;
}

.movableView {
	position: absolute;
	top: 164rpx;
	width: 100rpx;
	height: 100rpx;
	margin-top: 164rpx;
	pointer-events: auto;
}

/* 在线客服小浮窗 */
.win-service {
	width: 100%;
	height: 100%;
	padding: 10rpx;
	border-radius: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: #17b00e;
	opacity: 1;

	.iconfont {
		flex: 1;
		font-size: 60rpx;
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	.text {
		font-size: 20rpx;
		line-height: 20rpx;
	}

	&::before,
	&::after {
		border: none;
	}
}</style>
