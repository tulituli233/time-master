<template>
    <view :class="theme">
        <view class="novel-reader" :style="{ 'opacity': brightnessPercent / 100 }">
            <view class="novel-header theme-bgc">
                <view class="back" @click="goBack">
                    <uni-icons class="theme-font" type="arrow-left" size="30"></uni-icons>
                </view>
                <view class="chapter-title ellipsis" v-if="novelChapterArr[ccIndex]">
                    第{{ novelChapterArr[ccIndex].ChapterNumber }}章&nbsp;
                    {{ novelChapterArr[ccIndex].ChapterTitle }}
                </view>
                <view class="chapter-progress">{{ (ccProgress * 100).toFixed(0) }}%</view>
            </view>
            <view class="novel-content" :style="{ 'font-size': fontSize + 'px!important' }" @click="clickContent">
                <scroll-view style="height: 100vh;" scroll-y :scroll-top="scrollTop" @scroll="handleScroll">
                    <view class="novel-chapter" :id="`novel-chapter-${index}`" v-for="(item, index) in novelChapterArr"
                        :key="index" v-html="item.ChapterContent"></view>
                </scroll-view>
            </view>
            <view class="navbar theme-bgc" v-show="showTab">
                <view @click="openMenu" class="navbar-item">
                    <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-catalog" size="30"></uni-icons>
                </view>
                <view @click="openSetting" class="navbar-item">
                    <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-setup" size="30"></uni-icons>
                </view>
                <view @click="switchTheme(4)" class="navbar-item">
                    <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-shuimian" size="30"></uni-icons>
                </view>
            </view>
            <view v-show="showMenu" class="sidebar-menu" @click="showMenu = false">
                <view class="menu-left">
                    <view class="menu-header theme-bgc-4">
                        <view class="novel-title ellipsis">名称</view>
                        <view class="chapter-num">共{{ novelChapters.length }}章</view>
                    </view>
                    <scroll-view class="chapter-list theme-bgc" scroll-y>
                        <view class="chapter-item ellipsis" v-for="chapter in novelChapters" :key="chapter.ChapterID">
                            <view @click.stop="goToChapter(chapter.ChapterNumber)">
                                第{{ chapter.ChapterNumber }}章&nbsp;
                                {{ chapter.ChapterTitle }}
                            </view>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view v-show="showSetting" class="sidebar-setting theme-bgc">
                <view class="setting-item">
                    <view class="setting-icon">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-liangdu-4"
                            size="30"></uni-icons>
                    </view>
                    <input class="range-input" type="range" :value="brightnessPercent" @input="updateBrightness" />
                    <view class="setting-icon">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-liang-8"
                            size="30"></uni-icons>
                    </view>
                </view>
                <view class="setting-item">
                    <view class="setting-icon">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-ziti-jian"
                            size="30"></uni-icons>
                    </view>
                    <input class="range-input" type="range" :value="fontSizePercent" @input="updateFontSize" />
                    <view class="setting-icon">
                        <uni-icons class="theme-font" custom-prefix="iconfont" type="icon-ziti-jia"
                            size="30"></uni-icons>
                    </view>
                </view>
                <view class="bgc-setting">
                    <view class="color-item" :style="{ 'background-color': item.color }" v-for="item in colorList"
                        :key="item.color" @click="switchTheme(item.type)"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, computed, onUpdated, onBeforeUnmount } from 'vue';
import { apiGetNovelChapter, apiGetNovelChapters } from '@/services/api/book';
import { onShow, onLoad } from '@dcloudio/uni-app';

const novelID = ref(0);
const novelName = ref('');
onLoad((query) => {
    // 获取路由参数
    novelID.value = query.id
    novelName.value = query.name
    init()
    getNovelChapters()
})
onShow(() => {
    // init()
    // getNovelChapters()
})
// #ifdef APP-PLUS
// 页面数据更新时调用addStartEnd
// onUpdated(() => {
//     addStartEnd();
//     console.log('novelChapterArr----------', novelChapterArr.value);
// })
// #endif
// 获取当前小说的历史阅读记录
const novelHistory = computed(() => {
    let novelHistoryArr = uni.getStorageSync('readHistory')
    if (novelHistoryArr) {
        let novelHistory = novelHistoryArr.find((item) => {
            return item.NovelID == novelID.value
        })
        return novelHistory
    }
    let novelHistory = {
        ChapterNumber: 1,
        Title: novelName.value,
        NovelID: novelID.value,
        ChapterProgress: 0
    }
    return novelHistory
})

// 初始化页面
const init = async () => {
    // 历史阅读记录
    let initChapterNumber = novelHistory.value.ChapterNumber;
    let chapter = await getNovelChapter(initChapterNumber);
    novelChapterArr.value.push(chapter);
    let chapter1 = await getNovelChapter(initChapterNumber + 1);
    novelChapterArr.value.push(chapter1);
}
// 滚动条回到上次阅读位置
const scrollToLastRead = (validHeight) => {
    setTimeout(() => {
        let st = validHeight * novelHistory.value.ChapterProgress
        scrollTop.value = st
        isInitialized.value = false
    }, 100)
}
const getTotalHeight = () => {
    let totalHeight = 0;
    const promiseList = novelChapterArr.value.map((item, index) => {
        return getElementHeightById(`novel-chapter-${index}`).then(height => {
            totalHeight += height;
            return totalHeight;
        })
    })
    return Promise.all(promiseList).then(() => totalHeight);
}

// 预加载下一章节
const preloadNextChapter = async () => {
    let chapter = await getNovelChapter(novelChapterArr.value[novelChapterArr.value.length - 1].ChapterNumber + 1);
    novelChapterArr.value.push(chapter);
}

const addStartEnd = () => {
    novelChapterArr.value.forEach(async (item, index) => {
        if (!item.start && !item.end) {
            item.start = index > 0 ? novelChapterArr.value[index - 1].end : 0;
            let eleHeight = await getElementHeightById(`novel-chapter-${index}`);
            item.end = item.start + eleHeight
        }
    })
}

const novelChapters = ref([])
const novelChapterArr = ref([])
const getNovelChapters = () => {
    apiGetNovelChapters(novelID.value).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            novelChapters.value = res.data
        }
    })
}
const isLoading = ref(false) // 是否正在加载
// 获取章节
const getNovelChapter = (chapterNumber = 1, callback) => {
    return new Promise((resolve, reject) => {
        apiGetNovelChapter(novelID.value, chapterNumber).then(res => {
            if (res.code === 0 || !res.code) {
                uni.showToast({
                    icon: 'error',
                    title: res.msg || '网络异常'
                });
                reject(new Error('Error in API response'));
            } else {
                callback && callback();
                isLoading.value = false;
                let chapter = res.data[0];
                chapter.ChapterContent = chapter.ChapterContent.replace(/\r\n|\r|\n/g, '<br>').replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                resolve(chapter);
            }
        }).catch(error => {
            reject(error);
        });
    });
}

const brightnessPercent = ref(70);
const updateBrightness = (e) => {
    brightnessPercent.value = e.detail.value
}
const fontSizePercent = ref(30);
const fontSize = computed(() => {
    return fontSizePercent.value / 100 * 24 + 12;
})
const updateFontSize = (e) => {
    fontSizePercent.value = e.detail.value
}

const colorList = [
    { color: '#f8f8f8', type: 1 },
    { color: '#f7f0e6', type: 2 },
    { color: '#dff2dc', type: 3 },
];

const goBack = () => {
    uni.navigateBack();
};

const showTab = ref(false);
const clickContent = () => {
    showTab.value = !showTab.value;
    showMenu.value = false;
    showSetting.value = false;
};

const showMenu = ref(false);
const openMenu = () => {
    showMenu.value = true;
};

const showSetting = ref(false);
const openSetting = () => {
    showSetting.value = true;
};
const theme = ref('day-mode');
const themeType = ref(1);
const switchTheme = (type) => {
    if (type === 1) {
        theme.value = 'day-mode';
    } else if (type === 2) {
        theme.value = 'brown-mode';
    } else if (type === 3) {
        theme.value = 'green-mode';
    } else if (type === 4) {
        if (themeType.value === 4) {
            theme.value = 'day-mode';
            themeType.value = 1;
            return;
        }
        theme.value = 'night-mode';
    }
    themeType.value = type;
};
const scrollTop = ref(1);
const goTop = ref(false);
const goToChapter = async (ChapterNumber) => {
    let chapter = await getNovelChapter(ChapterNumber, () => {
        showMenu.value = false;
        // 清空novelChapterArr
        novelChapterArr.value = [];
        ccIndex.value = 0;
        ccProgress.value = 0;
        goTop.value = true;
        scrollTop.value = 0;
    });
    novelChapterArr.value.push(chapter);
}
const ccIndex = ref(0);
const ccProgress = ref(0);
const handleScroll = (e) => {
    if (goTop.value) {
        goTop.value = false;
        scrollTop.value = 1;
    }
    if (!novelChapterArr.value[novelChapterArr.value.length - 1].end) {
        addStartEnd();
    } else {
        ccIndex.value = currentChapter(e.detail.scrollTop);
        ccProgress.value = currentChapterProgress(e.detail.scrollTop, ccIndex.value);
        if (!isLoading.value && ccProgress.value > 0.5 && novelChapterArr.value.length === ccIndex.value + 1) {
            isLoading.value = true;
            preloadNextChapter();
        }
    }
}
// 计算当前章节
const currentChapter = (scrollTop) => {
    let currIndex = 0;
    novelChapterArr.value.forEach((item, index) => {
        if (scrollTop >= item.start && scrollTop < item.end) {
            currIndex = index;
        }
    })
    return currIndex
}
// 计算当前章节阅读进度
const currentChapterProgress = (scrollTop, currentChapterIndex) => {
    let progress = (scrollTop - novelChapterArr.value[currentChapterIndex].start) / (novelChapterArr.value[currentChapterIndex].end - novelChapterArr.value[currentChapterIndex].start);
    return progress
}
// 获取元素高度
const getElementHeightById = (elementId) => {
    return new Promise((resolve, reject) => {
        const query = uni.createSelectorQuery().in(this);
        query.select('#' + elementId).boundingClientRect(data => {
            if (data) {
                const height = data.height;
                resolve(height);
            } else {
                reject();
            }
        }).exec();
    });
}
// 获取元素到顶部的距离
function getElementDistanceToTop(elementId) {
    const query = uni.createSelectorQuery().in(this);
    let distanceToTop = 0;

    query.select('#' + elementId).boundingClientRect(data => {
        if (data) {
            distanceToTop = data.top;
        } else {
            console.error('Element not found or distance not available.');
        }
    }).exec();

    return distanceToTop;
}
const isInitialized = ref(true);
onUpdated(async () => {
    if (isInitialized.value) {
        ccProgress.value = novelHistory.value.ChapterProgress;
        let totalHeight = await getTotalHeight();
        let eleHeight = await getElementHeightById(`novel-chapter-1`);
        scrollToLastRead(totalHeight - eleHeight);
    }
})
onBeforeUnmount(() => {
    saveReadRecord()
})
// 退出页面保存阅读记录
const saveReadRecord = () => {
    let nHistory = {
        NovelID: novelID.value,
        NovelName: novelName.value,
        ChapterNumber: novelChapterArr.value[ccIndex.value].ChapterNumber,
        ChapterProgress: ccProgress.value
    }
    let readHistory = uni.getStorageSync('readHistory') || [];
    let index = readHistory.findIndex((item) => {
        return item.NovelID === nHistory.NovelID
    })
    if (index > -1) {
        readHistory.splice(index, 1);
        readHistory.push(nHistory);
    } else {
        readHistory.push(nHistory);
    }
    uni.setStorageSync('readHistory', readHistory);
}
</script>

<style lang="scss" scoped>
.novel-reader {
    display: flex;
    flex-direction: column;
}

.day-mode {
    background-color: #f8f8f8;
    color: #000000;
}

.brown-mode {
    background-color: #f7f0e6;
    color: #000000;
}

.green-mode {
    background-color: #dff2dc;
    color: #000000;
}

.night-mode {
    background-color: #000000;
    color: #ffffff;

    .theme-font {
        color: #ffffff !important;
    }

    .theme-bgc {
        background-color: #333 !important;
    }

    .theme-bgc-4 {
        background-color: #444 !important;
    }
}

.novel-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    padding: 10px;
    z-index: 1;

    .back {
        margin: 0 30px 0 0;
    }

    .chapter-title {
        width: 65vw;
        height: 60rpx;
        line-height: 60rpx;
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
    }

    .chapter-progress {
        width: 10vw;
        text-align: center;
    }
}

.novel-content {
    height: 50vh;
    margin-top: 80rpx;
    flex: 1;
    padding: 10px;
}

.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #f0f0f0;

    .navbar-item {
        flex: 1;
        text-align: center;
        padding: 10px;
        cursor: pointer;
    }
}

.ellipsis {
    -webkit-line-clamp: 1;
}

.sidebar-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;

    .menu-left {
        width: 500rpx;
        height: 100vh;
        background-color: #f0f0f0;

        .menu-header {
            padding: 20rpx;
            background-color: #ddd;

            .novel-title {
                margin-bottom: 10rpx;
                font-weight: bold;
            }

            .chapter-num {
                font-size: 24rpx;
            }
        }

        .chapter-list {
            height: 100vh;

            .chapter-item {
                height: 35rpx;
                padding: 10rpx 10rpx 10rpx 30rpx;
                margin-bottom: 10rpx;
                overflow: hidden;

                &:hover {
                    background-color: #ddd;
                }
            }
        }
    }
}

.sidebar-setting {
    position: fixed;
    bottom: 120rpx;
    left: 2.5vw;
    width: 90vw;
    height: 300rpx;
    background-color: #f0f0f0;
    border-radius: 20rpx;
    padding: 20rpx;

    .setting-item {
        display: flex;
        align-items: center;

        .setting-icon {
            padding: 10rpx;
        }

        .range-input {
            width: 500rpx;
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