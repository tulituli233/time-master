<template>
    <view class="content">
        <view class="setting-item" @click="handleLogout">退出登录</view>
    </view>
</template>

<script setup>
import { ref } from 'vue'
// 退出登录
const handleLogout = () => {
    uni.removeStorageSync('token')
    uni.removeStorageSync('userInfo')
    uni.reLaunch({
        url: '/subPackages/login/index/index'
    })
}
</script>

<style lang="scss" scoped>
.setting-item {
    width: 650rpx;
    height: 50rpx;
    margin: 0 auto;
    line-height: 50rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    padding: 20rpx;
    text-align: center;
}
</style>