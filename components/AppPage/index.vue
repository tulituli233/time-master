<template>
    <view :class="['content', theme.mode]" :style="{ 'background-image': theme.mode !== 'night-mode' ? `url(${backgroundImage})` : 'none'}">
        <!-- 顶部导航栏 -->
        <view v-if="showNav" class="top-nav theme-bgc" :style="{ backgroundColor: navBgColor == '' ? '#fff' : `${navBgColor} !important` }">
            <view v-if="!showTab" class="back">
                <uni-icons type="left" size="30" @click="navBack" :color="theme.iconColor"></uni-icons>
            </view>
            <view class="title theme-font">
                {{ navTitle }}
            </view>
        </view>
        <!-- 自定义顶部导航插槽 -->
        <slot name="custom-nav"></slot>
        <view class="page-content">
            <!-- 内容插槽 -->
            <slot></slot>
        </view>
        <!-- tabbar -->
        <view v-if="showTab" class="tabbar theme-bgc">
            <view class="tabbar-item" v-for="(item, index) in tabbarList" :key="item.icon"
                @click="switchTab(item.pagePath)">
                <view class="icon">
                    <uni-icons custom-prefix="iconfont" :type="item.icon" size="25"
                        :color="iconColor(index, theme.mode)"></uni-icons>
                </view>
                <view class="text" :style="{ color: iconColor(index, theme.mode) }">{{ item.text }}</view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { switchTab } from '@/utils/utils'
import { onLoad } from '@dcloudio/uni-app';

onLoad(() => {
    uni.hideTabBar()
    console.log('hideTabBar');
})

const store = useStore();
const theme = computed(() => store.state.theme)
const commonCss = computed(() => store.state.commonCss)
const props = defineProps({
    navTitle: {
        type: String,
        default: '时间管家'
    },
    showNav: {
        type: Boolean,
        default: true
    },
    navBgColor: {
        type: String,
        default: ''
    },
    havePadTab: {
        type: Boolean,
        default: true
    },
    showTab: {
        type: Boolean,
        default: false
    },
    activeIndex: {
        type: Number,
        default: 0
    },
    backgroundImage: {
        type: String,
        default: ''
    }
});
const navBack = () => {
    uni.navigateBack();
};

const tabbarList = computed(() => store.state.tabbarList)
const iconColor = (index, mode) => {
    if (mode === 'night-mode') {
        return index === props.activeIndex ? '#4c8bf0' : '#fff';
    } else {
        return index === props.activeIndex ? '#4c8bf0' : '#000';
    }
}
</script>

<style lang="scss" scoped>
.content {
    box-sizing: border-box;
    min-height: 100vh;
    // background-image: v-bind('backgroundImage ? `url(${backgroundImage})` : "none"');
	background-size: cover;
}

.top-nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: v-bind('commonCss.pageNavHeight + "rpx"');
    padding-top: 30rpx;
    background-color: #f2f2f2;
    color: #000;
    z-index: 1;

    .back {
        transform: translateX(20rpx);
        width: 0;
    }

    .title {
        width: 100%;
        text-align: center;
        font-size: 34rpx;
    }
}

.page-content {
    margin-top: v-bind('havePadTab ? commonCss.pageNavHeight + "rpx" : "0"');
}

.tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 120rpx;
    background-color: #fff;

    .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            margin-bottom: 10rpx;
        }

        .text {
            font-size: 24rpx;
        }
    }
}
</style>