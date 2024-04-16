<template>
    <AppPage navTitle="自定义APP">
        <DragSort @success="onSuccess" style="display: flex; justify-content: center;" :isHorizontal="true" :controlsList="tabbarList"
            :containerSize="{ width: '100vw', height: '70vh' }" :controlsSize="{ width: 25, height: 60 }" :dargItemSize="{ width: 20 }">
            <template #default="{ item }">
                <view class="fun-item theme-bgc">
                    <view class="left">
                        <view class="icon">
                            <uni-icons custom-prefix="iconfont" :type="item.icon" :color="theme.iconColor" size="20"></uni-icons>
                        </view>
                        <text class="title">{{ item.text }}</text>
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
  const theme = computed(() => store.state.theme)
  const tabbarList = computed(() => store.state.tabbarList)
  
  const onSuccess = (data) => {
    store.dispatch('updateTabbarList', data)
  }
  </script>
  
  <style scoped lang="scss">
  .fun-item {
    padding: 10rpx 30rpx;
    background-color: #fff;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    box-shadow: 0px 4px 15px -6px;
  
    .left {
        .icon {
            padding: 10rpx;
            border-radius: 50%;
        }
    }
  }
  </style>