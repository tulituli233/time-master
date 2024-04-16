<template>
    <AppPage navTitle="应用管理">
        <DragSort @success="onSuccess" style="display: flex; justify-content: center;" :controlsList="homeList"
            :containerSize="{ width: '100vw', height: '70vh' }" :controlsSize="{ width: 100, height: 60 }">
            <template #default="{ item }">
                <view class="fun-item theme-bgc">
                    <view class="left">
                        <view class="icon" :style="{ backgroundColor: item.color }">
                            <uni-icons custom-prefix="iconfont" :type="item.unicode" color="#fff" size="20"></uni-icons>
                        </view>
                    </view>
                    <view class="right">
                        <text class="title">{{ item.title }}</text>
                    </view>
                </view>
            </template>
        </DragSort>
    </AppPage>
</template>

<script setup>
import DragSort from '@/components/DragSort';
import AppPage from '@/components/AppPage'
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const homeList = computed(() => store.state.homeList)

const onSuccess = (data) => {
    store.dispatch('updateHomeList', data)
}
</script>

<style scoped lang="scss">
.fun-item {
    width: 650rpx;
    height: 100rpx;
    padding: 0 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;

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
    }
}
</style>