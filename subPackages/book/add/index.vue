<template>
    <view class="content">
        <!-- 章节标题 -->
        <view class="chapter-title">
            <view class="text">章节标题：</view>
            <input class="title-input" type="text" v-model="chapter.ChapterTitle" placeholder="请输入章节标题" />
        </view>
        <!-- 章节内容 -->
        <view class="chapter-content">
            <view class="text">章节内容：</view>
            <textarea class="content-textarea" :adjust-position="false" placeholder="请输入章节内容" maxlength="-1"
                v-model="chapter.ChapterContent"></textarea>
        </view>
        <!-- 内容编辑功能面板 -->
        <view class="edit-function">
            <!-- 内容字符数 -->
            <view class="char-num">已输入{{ chapter.ChapterContent.length }}个字符</view>
        </view>
        <!-- 小浮窗 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
                <button class="win-service theme-bgc" @click="saveChapter">
                    <uni-icons type="folder-add" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { apiAddNovelChapter } from '@/services/api/book';
import { onLoad } from '@dcloudio/uni-app';

onLoad((query) => {
    chapter.NovelID = query.novelID
})

const x = ref('600rpx');
const y = ref('300rpx');
// #region 内容编辑功能

// #endregion
// #region 新增
const chapter = reactive({
    NovelID: 0,
    ChapterTitle: '',
    ChapterContent: ''
});

const saveChapter = () => {
    apiAddNovelChapter(chapter).then((res) => {
        console.log('saveChapter res', res);
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            });
        } else {
            uni.navigateBack()
        }
    })
}
// #endregion
</script>

<style lang="scss" scoped>
.win-service {
    background-color: #aaa;
    opacity: 0.7;
}

.text {
    margin-bottom: 20rpx;
}

.chapter-title {
    padding: 20rpx;

    .title-input {
        font-size: 40rpx;
    }
}

.chapter-content {
    padding: 0 20rpx;
    padding-bottom: 50vh;

    .content-textarea {
        width: 92vw;
        height: 70vh;
        padding: 10rpx;
        background-color: #e9e9e9;
    }
}

.edit-function {
    position: fixed;
    bottom: 120rpx;
    left: 2.5vw;
    width: 90vw;
    display: flex;
    justify-content: space-between;
    padding: 10rpx;

    .char-num {
        padding: 10rpx;
    }

    .fun-btn {
        padding: 10rpx;
        background-color: #f0f0f0;
        border-radius: 10rpx;
    }
}
</style>