<template>
    <view :class="themeColor">
        <view :style="{ 'opacity': brightnessPercent / 100 }">
            <scroll-view scroll-y class="edit-scroll" :scroll-top="scrollTop">
                <textarea id="edit-textarea" class="content-textarea"
                    :style="{ 'padding-bottom': windowHeight / 2 + 'px' }" :cursor="20" auto-height
                    :adjust-position="false" maxlength="-1" v-model="chapter.oldContent"
                    @input="handleInput"></textarea>
            </scroll-view>
            <!-- 小浮窗 -->
            <movable-area class="movableArea">
                <movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
                    <button class="win-service theme-bgc" @click="saveChapter">
                        <uni-icons type="cloud-upload" size="30" color="#fff"></uni-icons>
                    </button>
                </movable-view>
            </movable-area>
            <!-- 撤销 ctrl+z -->
            <movable-area class="movableArea">
                <movable-view class="movableView" direction="all" :x="prevX" :y="prevY" :out-of-bounds="false">
                    <button class="win-service theme-bgc" @click="recallPreviousInput">
                        <uni-icons type="arrow-left" size="30" color="#fff"></uni-icons>
                    </button>
                </movable-view>
            </movable-area>
            <!-- 重做 ctrl+y -->
            <movable-area class="movableArea">
                <movable-view class="movableView" direction="all" :x="nextX" :y="nextY" :out-of-bounds="false">
                    <button class="win-service theme-bgc" @click="recallNextInput">
                        <uni-icons type="arrow-right" size="30" color="#fff"></uni-icons>
                    </button>
                </movable-view>
            </movable-area>
            <!-- 编辑功能框 -->
            <view class="edit-function theme-bgc">
                <!-- 内容字符数 -->
                <view class="char-num">已输入{{ chapter.oldContent.length }}个字符</view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, onUpdated, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { apiUpdateNovelChapter } from '@/services/api/book';

const x = ref('600rpx');
const y = ref('150rpx');
const prevX = ref('600rpx');
const prevY = ref('300rpx');
const nextX = ref('600rpx');
const nextY = ref('450rpx');
const windowHeight = ref(0);
const chapter = ref({});
const themeColor = ref('day-mode');
const brightnessPercent = ref(70);
const fontSizePercent = ref(30);
const fontSize = computed(() => {
    return fontSizePercent.value / 100 * 24 + 12;
})
onLoad(async (query) => {
    let progress = query.progress
    themeColor.value = query.themeColor
    brightnessPercent.value = query.brightnessPercent
    fontSizePercent.value = query.fontSizePercent
    chapter.value = uni.getStorageSync('editChapter') || ''
    windowHeight.value = await getScreenHeight();
    // 初始化inputHistory
    inputHistory.value.push(chapter.value.oldContent);
    // #ifdef APP
    uni.onKeyboardHeightChange(res => {
        keyboardHeight.value = res.height
    })
    // #endif
    setTimeout(async () => {
        let eleHeight = await getElementHeightById('edit-textarea');
        scrollTop.value = (eleHeight - windowHeight.value / 2) * progress - windowHeight.value / 3
    }, 1000)
})
const scrollTop = ref(1)

// 获取屏幕高度
const getScreenHeight = () => {
    return new Promise((resolve, reject) => {
        uni.getSystemInfo({
            success: function (res) {
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
// #region 更多功能
const keyboardHeight = ref(0);
const inputHistory = ref([]);
const currentHistoryIndex = ref(0);
const handleInput = () => {
    inputHistory.value.push(chapter.value.oldContent);
    currentHistoryIndex.value = inputHistory.value.length - 1
    console.log('inputHistory', inputHistory.value);
}
const recallPreviousInput = () => {
    if (currentHistoryIndex.value > 0) {
        chapter.value.oldContent = inputHistory.value[--currentHistoryIndex.value]
    }
}
const recallNextInput = () => {
    if (currentHistoryIndex.value < inputHistory.value.length - 1) {
        chapter.value.oldContent = inputHistory.value[++currentHistoryIndex.value]
    }
}
// #endregion
// #region 编辑功能
const saveChapter = () => {
    console.log('chapter', chapter.value);
    apiUpdateNovelChapter({
        ChapterID: chapter.value.ChapterID,
        ChapterContent: chapter.value.oldContent
    }).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            });
        }
        else {
            uni.showToast({
                title: res.msg
            });
            uni.$emit('updateOk', chapter.value.oldContent);
            uni.navigateBack()
        }
    })
}
// #endregio
</script>

<style lang="scss" scoped>
.win-service {
    background-color: #aaa;
    opacity: 0.7;
}

.edit-scroll {
    height: 100vh;
    padding: 20rpx;
}

.content-textarea {
    width: 100vw;
    font-size: v-bind("fontSize + 'px'");
}

.edit-function {
    position: fixed;
    bottom: v-bind("keyboardHeight + 'px'");
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #f2f2f2;

    .fun-btn {
        padding: 0 20rpx;
        margin: 0 40rpx;
    }

    .char-num {
        color: #999;
        margin-right: 80rpx;
    }
}
</style>