<template>
    <view :class="themeColor">
        <scroll-view scroll-y class="edit-scroll" :scroll-top="scrollTop">
            <textarea id="edit-textarea" class="content-textarea" :style="{ 'padding-bottom': windowHeight / 2 + 'px' }" :cursor="20" auto-height :adjust-position="false"
                maxlength="-1" v-model="chapter.oldContent"></textarea>
        </scroll-view>
        <!-- 小浮窗 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
                <button class="win-service theme-bgc" @click="saveChapter">
                    <uni-icons type="cloud-upload" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
    </view>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { apiUpdateNovelChapter } from '@/services/api/book';

const x = ref('600rpx');
const y = ref('500rpx');
const windowHeight = ref(0);
const chapter = ref({});
const themeColor = ref('day-mode');
onLoad(async (query) => {
    let progress = query.progress
    themeColor.value = query.themeColor
    chapter.value = uni.getStorageSync('editChapter') || ''
    windowHeight.value = await getScreenHeight();
    console.log('windowHeight', windowHeight.value);
    setTimeout(async () => {
        let eleHeight = await getElementHeightById('edit-textarea');
        console.log('eleHeight', eleHeight);
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
    font-size: 42rpx;
}
</style>