<template>
    <view :class="theme.mode">
        <view class="novel-reader" :style="{ 'opacity': readSetting.brightnessPercent / 100 }">
            <view class="novel-header theme-bgc">
                <view class="chapter-title ellipsis" v-if="novelChapterArr[ccIndex]">
                    第{{ novelChapterArr[ccIndex].ChapterNumber }}章&nbsp;
                    {{ novelChapterArr[ccIndex].ChapterTitle }}
                </view>
                <view class="chapter-progress">{{ (ccProgress * 100).toFixed(0) }}%</view>
            </view>
            <!-- 顶部功能栏 -->
            <view class="header-fun theme-bgc" v-show="showTab">
                <view class="back" @click="goBack">
                    <uni-icons class="theme-font" type="arrow-left" size="30"></uni-icons>
                </view>
                <view class="star" @click="createStar">
                    <uni-icons class="theme-font" type="star" size="30"></uni-icons>
                </view>
            </view>
            <!-- 小说内容 -->
            <view class="novel-content" :style="{ 'font-size': fontSize + 'px!important' }" @click="clickContent">
                <scroll-view style="height: 100vh;" scroll-y :scroll-top="scrollTop" @scroll="handleScroll">
                    <view class="novel-chapter" :id="`novel-chapter-${index}`" v-for="(item, index) in novelChapterArr"
                        :key="index" v-html="item.ChapterContent"></view>
                </scroll-view>
            </view>
            <!-- 导航栏 -->
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
            <!-- 底部状态栏 -->
            <view class="statusbar theme-bgc">
                <view class="statusbar-item">
                    <!-- 时间 -->
                    <view class="time">{{ nowTime }}</view>
                </view>
                <view class="statusbar-item">
                    <!-- 总阅读进度 -->
                    <view class="progress">{{ totalReadProgress }}%</view>
                </view>
            </view>
            <!-- 目录 -->
            <view v-show="showMenu" class="sidebar-menu" @click="closeMenu">
                <view class="menu-left">
                    <view class="menu-header theme-bgc-4">
                        <view class="left-menu">
                            <view class="novel-title ellipsis">{{ novelName }}</view>
                            <view class="chapter-num">共{{ novelChapters.length }}章</view>
                        </view>
                        <view class="right-menu" @click.stop="openStar">
                            <uni-icons class="theme-font" type="star" size="30"></uni-icons>
                        </view>
                    </view>
                    <view v-show="!showStar">
                        <scroll-view class="chapter-list theme-bgc" scroll-y :scroll-top="menuScrollTop">
                            <view
                                :class="{ 'chapter-item': true, 'theme-bgc-4': true, 'active': chapter.ChapterNumber === novelChapterArr[ccIndex].ChapterNumber }"
                                v-for="chapter in novelChapters" :key="chapter.ChapterID">
                                <view @click.stop="goToChapter(chapter.ChapterNumber)">
                                    第{{ chapter.ChapterNumber }}章&nbsp;
                                    {{ chapter.ChapterTitle }}
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                    <view v-show="showStar">
                        <scroll-view class="chapter-list theme-bgc" scroll-y>
                            <view class="chapter-item book-mark-item theme-bgc-4"
                                v-for="(bookmark, index) in novelHistory.BookMarkList" :key="index">
                                <view class="book-mark-title"
                                    @click.stop="goToBookmark(bookmark.ChapterNumber, bookmark.ChapterProgress)">
                                    第{{ bookmark.ChapterNumber }}章&nbsp;
                                    {{ bookmark.BookMarkTitle }}
                                </view>
                                <!-- 删除 -->
                                <view class="delete-btn" @click.stop="deleteBookmark(bookmark)">
                                    <uni-icons class="theme-font" type="closeempty" size="25"></uni-icons>
                                </view>
                                <!-- 编辑 -->
                                <view class="edit-btn" @click.stop="showEditBookmark(index, bookmark)">
                                    <uni-icons class="theme-font" type="compose" size="25"></uni-icons>
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                </view>
            </view>
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
                <view class="bgc-setting">
                    <view class="color-item" :style="{ 'background-color': item.color }" v-for="item in colorList"
                        :key="item.color" @click="switchTheme(item.type)"></view>
                </view>
            </view>
        </view>
        <!-- 编辑浮窗 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" v-show="showTab" direction="all" :x="x" :y="y" :out-of-bounds="false">
                <button class="win-service theme-bgc" @click="editChapter">
                    <uni-icons type="gear" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 下一章按钮 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" v-show="showTab" direction="all" :x="nextX" :y="nextY"
                :out-of-bounds="false">
                <button class="win-service theme-bgc" @click="goToChapter(novelChapterArr[ccIndex].ChapterNumber + 1)">
                    <uni-icons type="right" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 上一章按钮 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" v-show="showTab" direction="all" :x="prevX" :y="prevY"
                :out-of-bounds="false">
                <button class="win-service theme-bgc" @click="goToChapter(novelChapterArr[ccIndex].ChapterNumber - 1)">
                    <uni-icons type="left" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 书签编辑弹窗 -->
        <uni-popup ref="editBookmarkRef" id="edit-bookmark" :background-color="theme.bgc">
            <view class="popup-content">
                <view class="popup-header">
                    <view class="title">书签编辑</view>
                </view>
                <view class="popup-body">
                    <view class="input-item">
                        <view class="input-label">书签名：</view>
                        <input class="input" v-model="activeBookmark.BookMarkTitle" placeholder="请输入书名" />
                    </view>
                </view>
                <view class="popup-footer">
                    <view class="btn" @click="$refs.editBookmarkRef.close()">取消</view>
                    <view class="btn btn-primary" @click="editBookmark(activeIndex, activeBookmark)">确定</view>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref, computed, onUpdated, onBeforeUnmount } from 'vue';
import { apiGetNovelChapter, apiGetNovelChapters } from '@/services/api/book';
import { onReady, onShow, onLoad, onUnload } from '@dcloudio/uni-app';
import { navTo, formatDateToTime } from '@/utils/utils'

const novelID = ref(0);
const novelName = ref('');
const novelHistory = ref({});
const readSetting = ref({});
const x = ref('600rpx');
const y = ref('600rpx');
const prevX = ref('50rpx');
const prevY = ref('850rpx');
const nextX = ref('600rpx');
const nextY = ref('850rpx');
onLoad((query) => {
    // 获取路由参数
    novelID.value = query.id
    novelName.value = query.name
    novelHistory.value = getNovelHistory()
    readSetting.value = uni.getStorageSync('readSetting') || {
        fontSizePercent: 30,
        brightnessPercent: 70,
        themeType: 1
    }
    // 更新时间
    updateNowTime()
    // 屏幕高度
    getScreenHeight();
    init()
    getNovelChapters()
})
const keyboardHeight = ref(0);
onReady(() => {
    // #ifdef APP-PLUS
    uni.onKeyboardHeightChange(res => {
        console.log('键盘高度变化----', res.height)
        keyboardHeight.value = res.height
    })
    // #endif
})
onShow(() => {
    // #ifdef APP-PLUS
    plus.navigator.setFullscreen(true);
    // #endif
    uni.$on('updateOk', (newChapter) => {
        novelChapterArr.value[ccIndex.value].oldContent = newChapter;
        novelChapterArr.value[ccIndex.value].ChapterContent = newChapter.replace(/\r\n|\r|\n/g, '<br>').replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    })
})
const getNovelHistory = () => {
    let novelHistoryArr = uni.getStorageSync('readHistory')
    if (novelHistoryArr) {
        let novelHistory = novelHistoryArr.find((item) => {
            return item.NovelID == novelID.value
        })
        if (novelHistory) {
            return novelHistory
        }
        novelHistory = {
            ChapterNumber: 1,
            Title: novelName.value,
            NovelID: novelID.value,
            ChapterProgress: 0,
            BookMarkList: []
        }
        return novelHistory
    }
}

// 初始化页面
const init = async () => {
    // 历史阅读记录
    let initChapterNumber = novelHistory.value.ChapterNumber - 1;
    let preLoadChapterCount = 3; // 可控制预加载章节数
    preLoadChapters(initChapterNumber, preLoadChapterCount);
}
// 预加载X个章节
const preLoadChapters = async (currentChapterNumber, count) => {
    for (let i = 1; i <= count; i++) {
        let chapter = await getNovelChapter(currentChapterNumber + i);
        novelChapterArr.value.push(chapter);
    }
}
// #region 目录
const showMenu = ref(false);
const openMenu = () => {
    showMenu.value = true;
    showTab.value = false;
    setTimeout(() => {
        menuScrollTop.value = (novelChapterArr.value[ccIndex.value].ChapterNumber - 1) * 31.18 - 350;
        console.log('menuScrollTop', menuScrollTop.value);
    }, 100);
};
const closeMenu = () => {
    showMenu.value = false;
    showStar.value = false;
}
const menuScrollTop = ref(1);
// 滚动条回到上次阅读位置
const scrollToLastRead = (validHeight, chaProgress = 0) => {
    chaProgress = chaProgress == 0 ? novelHistory.value.ChapterProgress : chaProgress
    setTimeout(() => {
        let st = validHeight * chaProgress
        scrollTop.value = st
        if (chaProgress) ccProgress.value = chaProgress
        isInitialized.value = false
    }, 100)
}
// #endregion
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
// 没有该小说章节
const noChapter = ref(false)
// 获取章节
const getNovelChapters = () => {
    apiGetNovelChapters(novelID.value).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else if (res.code === 2) {
            noChapter.value = true
            console.log('res', res);
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
                chapter.oldContent = chapter.ChapterContent;
                chapter.ChapterContent = chapter.ChapterContent.replace(/\r\n|\r|\n/g, '<br>').replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                resolve(chapter);
            }
        }).catch(error => {
            reject(error);
        });
    });
}
// #region 设置
const updateBrightness = (e) => {
    readSetting.value.brightnessPercent = e.detail.value
}
const fontSize = computed(() => {
    return readSetting.value.fontSizePercent / 100 * 24 + 12;
})
const updateFontSize = (e) => {
    readSetting.value.fontSizePercent = e.detail.value
}
const setBrightness = (num) => {
    readSetting.value.brightnessPercent = parseInt(readSetting.value.brightnessPercent)
    readSetting.value.brightnessPercent += num
}
const setFontSize = (num) => {
    readSetting.value.fontSizePercent = parseInt(readSetting.value.fontSizePercent)
    readSetting.value.fontSizePercent += num
}
// #endregion
const colorList = [
    { color: '#f8f8f8', type: 1 },
    { color: '#f7f0e6', type: 2 },
    { color: '#dff2dc', type: 3 },
];
// #region 顶部功能栏
const goBack = () => {
    uni.navigateBack();
};
const createStar = () => {
    const bookMark = {
        ChapterNumber: novelChapterArr.value[ccIndex.value].ChapterNumber,
        BookMarkTitle: novelChapterArr.value[ccIndex.value].ChapterTitle,
        ChapterProgress: ccProgress.value
    }
    let nHistory = {
        NovelID: novelID.value,
        NovelName: novelName.value,
        ChapterNumber: novelChapterArr.value[ccIndex.value].ChapterNumber,
        ChapterProgress: ccProgress.value,
        BookMarkList: [bookMark]
    }
    let readHistory = uni.getStorageSync('readHistory') || []
    let index = readHistory.findIndex((item) => item.NovelID === nHistory.NovelID)
    if (index > -1) {
        // 兼容旧数据
        if (!readHistory[index].BookMarkList) {
            readHistory[index].BookMarkList = []
        }
        readHistory[index].BookMarkList.push(bookMark)
    } else {
        readHistory.push(nHistory)
    }
    uni.setStorageSync('readHistory', readHistory)
    uni.showToast({
        icon: 'success',
        title: '成功添加书签'
    })
}
const showStar = ref(false)
const openStar = () => {
    novelHistory.value = getNovelHistory()
    showStar.value = !showStar.value
}
// 跳转到指定书签
const goToBookmark = async (chapterNumber, chaProgress) => {
    await goToChapter(chapterNumber);
    // 可能未渲染
    let eleHeight = await getElementHeightById(`novel-chapter-0`);
    console.log('eleHeight', eleHeight);
    scrollToLastRead(eleHeight, chaProgress);
    showMenu.value = false;
    showStar.value = false
}
// 删除指定书签
const deleteBookmark = (index) => {
    let readHistory = uni.getStorageSync('readHistory') || []
    let bookIndex = readHistory.findIndex((item) => {
        return item.NovelID === novelID.value
    })
    if (bookIndex > -1) {
        readHistory[bookIndex].BookMarkList.splice(index, 1)
        novelHistory.value.BookMarkList.splice(index, 1)
        uni.setStorageSync('readHistory', readHistory)
    }
}
const editBookmarkRef = ref(null)
const activeBookmark = ref(null)
const activeIndex = ref(0)
const showEditBookmark = (index, bookmark) => {
    activeBookmark.value = bookmark
    activeIndex.value = index
    editBookmarkRef.value.open('bottom')
}
// 编辑指定书签
const editBookmark = (index, newBookmark) => {
    let readHistory = uni.getStorageSync('readHistory') || []
    let bookIndex = readHistory.findIndex((item) => {
        return item.NovelID === novelID.value
    })
    if (bookIndex > -1) {
        readHistory[bookIndex].BookMarkList[index].BookMarkTitle = newBookmark.BookMarkTitle
        novelHistory.value.BookMarkList[index].BookMarkTitle = newBookmark.BookMarkTitle
        uni.setStorageSync('readHistory', readHistory)
    }
    editBookmarkRef.value.close()
}
// #endregion
const showTab = ref(false);
const currScrollTop = ref(0);
const clickContent = (e) => {
    // 0.03即(3vh)为顶部标题栏高度
    const viewHeight = screenHeight.value * (1 - 0.07);
    // 结合screenHeight和x、y判断用户点击了屏幕的上方、下方还是在中间
    if (e.detail.y < screenHeight.value / 3) {
        if (currScrollTop.value < screenHeight.value) {
            scrollTop.value = scrollTop.value ? 0 : 1;
        } else {
            scrollTop.value = currScrollTop.value - viewHeight;
        }
    } else if (e.detail.y > screenHeight.value / 3 && e.detail.y < screenHeight.value * 2 / 3) {
        showTab.value = !showTab.value;
        showMenu.value = false;
        showSetting.value = false;
    } else if (e.detail.y > screenHeight.value * 2 / 3) {
        scrollTop.value = currScrollTop.value + viewHeight;
    }
    console.log('scrollTop', scrollTop.value);
};

const showSetting = ref(false);
const openSetting = () => {
    showSetting.value = true;
};
const theme = computed(() => {
    switch (readSetting.value.themeType) {
        case 1:
            return { mode: 'day-mode', bgc: '#fff' };
        case 2:
            return { mode: 'brown-mode', bgc: '#f7f0e6' };
        case 3:
            return { mode: 'green-mode', bgc: '#dff2dc' };
        case 4:
            return { mode: 'night-mode', bgc: '#000' };
        default:
            return { mode: 'day-mode', bgc: '#fff' };
    }
});
const switchTheme = (type) => {
    if (type === 4) {
        if (readSetting.value.themeType === 4) {
            readSetting.value.themeType = 1;
            return;
        }
    }
    readSetting.value.themeType = type;
    console.log('readSetting', readSetting.value);
};
const scrollTop = ref(1);
const goTop = ref(false);
// 跳转到指定章节
const goToChapter = async (ChapterNumber) => {
    // 如果章节相等，直接返回
    if (ChapterNumber === novelChapterArr.value[ccIndex.value].ChapterNumber) return
    // 如果章节不存在，直接返回
    if (ChapterNumber < 1 || ChapterNumber > novelChapters.value.length) return
    let chapter = await getNovelChapter(ChapterNumber, () => {
        showMenu.value = false;
        // 清空novelChapterArr，使用pop，直到数组长度为0
        // 不能使用novelChapterArr.value = []，这会触发页面重新渲染，出现页面闪动的问题，影响体验
        while (novelChapterArr.value.length > 1) {
            novelChapterArr.value.pop();
        }
        ccIndex.value = 0;
        ccProgress.value = 0;
        goTop.value = true;
        scrollTop.value = 0;
    });
    novelChapterArr.value[0] = chapter;
    preLoadChapters(chapter.ChapterNumber, 2);
}
const ccIndex = ref(0);
const ccProgress = ref(0);
const handleScroll = (e) => {
    currScrollTop.value = e.detail.scrollTop;
    if (goTop.value) {
        goTop.value = false;
        scrollTop.value = 1;
    }
    if (!novelChapterArr.value[novelChapterArr.value.length - 1].end) {
        addStartEnd();
    } else {
        ccIndex.value = currentChapter(e.detail.scrollTop);
        ccProgress.value = currentChapterProgress(e.detail.scrollTop, ccIndex.value);
        // 当前章节仅剩0.5屏幕高度时，预加载下一章
        if (!isLoading.value && !noChapter.value && (e.detail.scrollTop + screenHeight.value * 1.5 > novelChapterArr.value[ccIndex.value].end) && novelChapterArr.value.length === ccIndex.value + 1) {
            isLoading.value = true;
            preloadNextChapter();
        }
        // 最新章节仅剩0.2屏幕高度时，预加载下一章
        if (!isLoading.value && !noChapter.value && (e.detail.scrollTop + screenHeight.value * 1.2 > novelChapterArr.value[novelChapterArr.value.length - 1].end) && ccIndex.value > 0) {
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
const screenHeight = ref(0);
// 计算当前章节剩余进度
const currentChapterRemainProgress = (scrollTop, currentChapterIndex) => {
    // 当前章节高度
    let eleHeight = (novelChapterArr.value[currentChapterIndex].end - novelChapterArr.value[currentChapterIndex].start);
    // 当前章节剩余高度
    let remainHeight = eleHeight - scrollTop - screenHeight.value;
    let progress = remainHeight / eleHeight
    return progress
}
// 获取屏幕高度
const getScreenHeight = () => {
    return new Promise((resolve, reject) => {
        uni.getSystemInfo({
            success: function (res) {
                screenHeight.value = res.windowHeight
                resolve(res.windowHeight);
            }
        });
    });
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
// 编辑章节内容
const editChapter = () => {
    uni.setStorageSync('editChapter', novelChapterArr.value[ccIndex.value]);
    navTo(`/subPackages/book/edit/index?progress=${ccProgress.value}&themeColor=${theme.value.mode}&brightnessPercent=${readSetting.value.brightnessPercent}&fontSizePercent=${readSetting.value.fontSizePercent}`);
}

const isInitialized = ref(true);
onUpdated(async () => {
    if (isInitialized.value) {
        ccProgress.value = novelHistory.value ? novelHistory.value.ChapterProgress : 0;
        let eleHeight = await getElementHeightById(`novel-chapter-0`);
        scrollToLastRead(eleHeight);
    }
})
onBeforeUnmount(() => {
    saveReadRecord()
    saveReadSetting()
})
//如果不加这句，会导致跳转到别的页面后也是全屏
onUnload(() => {
    // #ifdef APP-PLUS
    plus.navigator.setFullscreen(false);
    // #endif
})
// 保存阅读配置
const saveReadSetting = () => {
    uni.setStorageSync('readSetting', readSetting.value);
}
// 退出页面保存阅读记录
const saveReadRecord = () => {
    let nHistory = {
        NovelID: novelID.value,
        NovelName: novelName.value,
        ChapterNumber: novelChapterArr.value[ccIndex.value].ChapterNumber,
        ChapterProgress: ccProgress.value,
        BookMarkList: []
    }
    let readHistory = uni.getStorageSync('readHistory') || [];
    let index = readHistory.findIndex((item) => {
        return item.NovelID === nHistory.NovelID
    })
    if (index > -1) {
        // 更新
        readHistory[index].ChapterProgress = nHistory.ChapterProgress;
        readHistory[index].ChapterNumber = nHistory.ChapterNumber;
        readHistory[index].NovelName = nHistory.NovelName;
    } else {
        readHistory.push(nHistory);
    }
    uni.setStorageSync('readHistory', readHistory);
}
// #region 底部状态栏
// 当前时间，每1分钟更新一次，格式：00:00
const nowTime = ref('00:00');
const updateNowTime = () => {
    nowTime.value = formatDateToTime(new Date());
    setInterval(() => {
        nowTime.value = formatDateToTime(new Date());
    }, 60000);
}
const totalReadProgress = computed(() => {
    if (novelChapters.value.length == 0) {
        return 0;
    }
    return ((novelChapterArr.value[ccIndex.value].ChapterNumber / novelChapters.value.length) * 100).toFixed(0);
})
// #endregion
</script>

<style lang="scss" scoped>
.win-service {
    background-color: #aaa;
    opacity: v-bind("readSetting.brightnessPercent / 100");
}

.novel-reader {
    display: flex;
    flex-direction: column;
}

.header-fun {
    position: fixed;
    top: 0;
    left: 0;
    width: 95vw;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    z-index: 2;
}

.novel-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 95vw;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rpx 20rpx;
    z-index: 1;

    .chapter-title {
        width: 65vw;
        height: 3vh;
        line-height: 3vh;
        font-size: 24rpx;
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
    margin-top: 3vh;
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
    z-index: 1;

    .navbar-item {
        flex: 1;
        text-align: center;
        padding: 10px;
        cursor: pointer;
    }
}

.statusbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 4vh;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .statusbar-item {
        padding: 20rpx;
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
            display: flex;
            align-items: center;

            .left-menu {
                .novel-title {
                    margin-bottom: 10rpx;
                    font-weight: bold;
                }

                .chapter-num {
                    font-size: 24rpx;
                }
            }

            .right-menu {
                margin-left: auto;
            }
        }

        .chapter-list {
            height: 90vh;
            font-size: 20rpx;

            .chapter-item {
                height: 35rpx;
                padding: 10rpx 10rpx 10rpx 30rpx;
                margin-bottom: 10rpx;
                overflow: hidden;

                &:hover {
                    background-color: #ddd;
                }
            }

            .active {
                background-color: #ddd !important;
                color: #000;
            }

            .book-mark-item {
                display: flex;
                align-items: center;

                .book-mark-title {
                    width: 350rpx;
                }

                .delete-btn {
                    margin-right: 20rpx;
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

// 书签编辑
#edit-bookmark {
    position: fixed;
    bottom: v-bind("keyboardHeight + 'px'");
    left: 0;
    width: 100vw;
    z-index: 2;
}
</style>