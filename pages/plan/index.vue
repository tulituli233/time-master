<template>
	<view class="content">
		<view class="time">
			<view class="date">02/25</view>
			<view class="week">周二</view>
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
import { ref } from 'vue';

const x = ref('740rpx');
const y = ref('1000rpx');
</script>

<style lang="scss">
.win-service {
	background-color: #4c8bf0;
}

</style>
