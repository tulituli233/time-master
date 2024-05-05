<template>
    <view :class="['content', theme.mode]">
        <view id="preview-search" class="theme-bgc">
            <uni-icons type="left" size="30" :color="theme.iconColor" @click="navBack"></uni-icons>
            <input class="author-input" type="text" v-model="preViewUrl" placeholder="请输入网址"
                @focus="showOrHideStarList">
            <uni-icons class="clear" v-show="showClearIcon" @click="clearIcon" type="clear" size="25"></uni-icons>
            <view class="search-btn" @click="search">预览</view>
            <uni-icons type="gear-filled" size="30" :color="theme.iconColor" @click="showOrHideFunBtn"></uni-icons>
            <!-- 关闭按钮 -->
            <view class="close-btn" @click="closeFooter">关闭</view>
            <!-- 设置 -->
            <view v-show="showSetting" class="sidebar-setting theme-bgc">
                <view class="setting-item">
                    <view class="setting-icon" @click="setBrightness(-1)">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-liangdu-4"
                            size="30"></uni-icons>
                    </view>
                    <input class="range-input" type="range" :value="readSetting.brightnessPercent"
                        @input="updateBrightness" />
                    <view class="setting-icon" @click="setBrightness(1)">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-liang-8"
                            size="30"></uni-icons>
                    </view>
                </view>
                <view class="setting-item">
                    <view class="setting-icon" @click="setFontSize(-1)">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-ziti-jian"
                            size="30"></uni-icons>
                    </view>
                    <input class="range-input" type="range" :value="readSetting.fontSizePercent"
                        @input="updateFontSize" />
                    <view class="setting-icon" @click="setFontSize(1)">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-ziti-jia"
                            size="30"></uni-icons>
                    </view>
                </view>
            </view>
            <!-- 收藏的网址列表 -->
            <view v-show="showList" class="star-list theme-bgc">
                <view class="list-item ellipsis ellipsis-1" v-for="(item, index) in starList" :key="index"
                    @click="goTo(item)">
                    {{ item }}
                </view>
            </view>
        </view>
        <view id="webview-container">
            <web-view id="webview" :src="webUrl"></web-view>
        </view>
    </view>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { onReady } from '@dcloudio/uni-app';
var wv
onReady(() => {
    // #ifdef APP-PLUS
    //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
    // var currentWebview = this.$scope.$getAppWebview()
    var currentWebview = getCurrentInstance().proxy.$scope.$getAppWebview()
    setTimeout(() => {
        wv = currentWebview.children()[0]
        console.log("wv", wv);
        wv.setStyle({ top: 80, scalable: true, opacity: 0.5 })
        wv.setCssText("*{ color: white!important; background-color: #000!important; }");
    }, 1000); //如果是页面初始化调用时，需要延时一下
    // #endif
})
const store = useStore();
const theme = computed(() => store.state.theme)
const preViewUrl = ref('');
const webUrl = ref('https://wap.cool18.com/index.php?app=index&act=view&cid=5616945')
const showClearIcon = computed(() => preViewUrl.value.length > 0)
const clearIcon = () => {
    preViewUrl.value = ''
}
const search = () => {
    webUrl.value = preViewUrl.value
}
const navBack = () => {
    uni.navigateBack()
}
// #region 设置
// 关闭底部功能栏
const closeFooter = () => {
    wv.setStyle({ height: 700 })
}
const readSetting = ref({
    fontSizePercent: 30,
    brightnessPercent: 90,
});
const showSetting = ref(false)
const showOrHideFunBtn = () => {
    console.log("showOrHideFunBtn");
    wv.setStyle({ height: 500 })
    showSetting.value = !showSetting.value
}
// 修改第三方网页字体大小
const setThirdPartyFontSize = (num) => {
    console.log("setThirdPartyFontSize", num);
    console.log("wv", wv);
    // wv.setCssText("*{ font-size: " + num + "px!important; }");
    // wv.setCssText("*{ color: black!important; background-color: #fff!important; }");
    wv.setCssText("*{ font-size: 60px!important; }");
    // wv.evalJS("alert(1);");
}
// 修改第三方网页透明度
const setThirdPartyOpacity = (num) => {
    console.log("setThirdPartyOpacity", num);
    wv.setCssText("*{ opacity: " + num + " }");
}
const updateBrightness = (e) => {
    readSetting.value.brightnessPercent = e.detail.value
    setThirdPartyOpacity(readSetting.value.brightnessPercent / 100)
}
const updateFontSize = (e) => {
    readSetting.value.fontSizePercent = e.detail.value
    setThirdPartyFontSize(readSetting.value.fontSizePercent)
}
const setBrightness = (num) => {
    readSetting.value.brightnessPercent = parseInt(readSetting.value.brightnessPercent)
    readSetting.value.brightnessPercent += num
    setThirdPartyOpacity(readSetting.value.brightnessPercent / 100)
}
const setFontSize = (num) => {
    readSetting.value.fontSizePercent = parseInt(readSetting.value.fontSizePercent)
    readSetting.value.fontSizePercent += num
    setThirdPartyFontSize(readSetting.value.fontSizePercent)
}
// #endregion
// #region 收藏
const starList = ref([
    'https://sexinsex.net/bbs/thread-8908821-1-1.html',
    'https://wap.cool18.com/index.php?app=index&act=view&cid=5616945'
])
const showList = ref(false)
const showOrHideStarList = () => {
    showSetting.value = false
    wv.setStyle({ height: 500 })
    showList.value = !showList.value
}
const goTo = (item) => {
    webUrl.value = item
    showList.value = false
}
// #endregion
</script>

<style lang="scss" scoped>
#preview-search {
    position: relative;
    padding: 80rpx 20rpx 20rpx;
    display: flex;
    align-items: center;
    z-index: 2;

    .author-input {
        flex: 1;
        height: 60rpx;
        padding: 0 20rpx;
        border: 1px solid #ccc;
        border-radius: 10rpx;
    }

    .clear {
        width: 0;
        transform: translateX(-60rpx);
    }

    .search-btn {
        width: 100rpx;
        height: 60rpx;
        margin-left: 20rpx;
        background-color: #00b5ff;
        color: #fff;
        border-radius: 10rpx;
        text-align: center;
        line-height: 60rpx;
    }
}

#set-btn {
    position: absolute;
    top: 50vh;
    right: 10vw;
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 80rpx;
}

#webview-container {
    position: fixed;
    top: 60rpx;
    left: 0;
    // 高度为100vh-60rpx
    height: calc(100vh - 60rpx);
    // height: 40vh;
    width: 100vw;
    // z-index: v-bind("showSetting ? 1 : 0");
}

.close-btn {
    position: fixed;
    top: 600px;
    right: 2.5vw;
    width: 120rpx;
    height: 60rpx;
    border-radius: 20rpx;
    background-color: #00b5ff;
    color: #fff;
    text-align: center;
    line-height: 60rpx;
}

.star-list {
    position: fixed;
    bottom: 20rpx;
    left: 2.5vw;
    width: 90vw;
    height: 300rpx;
    background-color: #f0f0f0;
    border-radius: 20rpx;
    padding: 20rpx;

    .list-item {
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20rpx;
    }
}

.sidebar-setting {
    position: fixed;
    bottom: 20rpx;
    left: 2.5vw;
    width: 90vw;
    height: 300rpx;
    background-color: #f0f0f0;
    border-radius: 20rpx;
    padding: 20rpx;

    .setting-item {
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20rpx;

        .setting-icon {
            padding: 10rpx;
        }

        .range-input {
            width: 450rpx;
            padding: 10rpx;
        }
    }

    .bgc-setting {
        display: flex;
        justify-content: space-around;
        padding: 10rpx;

        .color-item {
            width: 150rpx;
            height: 80rpx;
            border-radius: 10rpx;
            cursor: pointer;
        }
    }
}
</style>