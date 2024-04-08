<template>
    <view class="content">
        <view class="setting-item" @click="openSetBaseUrl">
            <view class="title">设置服务请求地址</view>
            <view class="icon" @click.stop="refreshBaseUrl">
                <uni-icons type="refreshempty" size="20" color="#999"></uni-icons>
            </view>
        </view>
        <view class="setting-item" @click="handleLogout">
            <view class="title">退出登录</view>
        </view>
        <!-- 设置服务请求地址 -->
        <uni-popup ref="setBaseUrlPopupRef" background-color="#fff">
            <view class="popup-content">
                <view class="popup-header">
                    <view class="title">设置服务请求地址</view>
                </view>
                <view class="popup-body">
                    <view class="input-item">
                        <view class="input-label">地址:</view>
                        <input class="input" v-model="baseUrl" placeholder="请输入服务请求地址" />
                    </view>
                </view>
                <view class="popup-footer">
                    <view class="btn" @click="$refs.setBaseUrlPopupRef.close()">取消</view>
                    <view class="btn btn-primary" @click="setUrl()">确定</view>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import { setBaseUrl, pingRange } from '@/utils/request'

const baseUrl = ref('')
const setBaseUrlPopupRef = ref(null)
const openSetBaseUrl = () => {
    baseUrl.value = uni.getStorageSync('BASE_URL')
    setBaseUrlPopupRef.value.open('bottom')
}
const setUrl = () => {
    if (baseUrl.value) {
        setBaseUrl(baseUrl.value)
        setBaseUrlPopupRef.value.close()
        uni.showToast({
            title: '设置成功',
            icon: 'success'
        })
    }
}
// 刷新服务请求地址
const refreshBaseUrl = async () => {
    let res = await pingRange(uni.getStorageSync('BASE_URL'))
    console.log('res', res)
    if (res.code === 0) {
        uni.showToast({
            title: '服务器地址更新失败',
            icon: 'error'
        })
    }
    else {
        if (res.code === 2) msg = '服务器地址未改变'
        msg = `当前服务器地址为${res.msg}`
        uni.showToast({
            title: msg,
            icon: 'success'
        })
    }
}
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
.content {
    padding-top: 20rpx;
}

.setting-item {
    width: 650rpx;
    height: 50rpx;
    margin: 0 auto;
    margin-bottom: 20rpx;
    line-height: 50rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 32rpx;
    }
}
</style>