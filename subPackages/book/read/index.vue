<template>
    <view class="novel-reader" :class="{ 'night-mode': nightMode }">
        <view class="novel-content" :style="{ 'font-size': fontSize + 'px', 'opacity': brightness / 100 }"
            v-html="novelChapterArr.ChapterContent">
        </view>
        <view class="navbar">
            <view @click="openSidebar" class="navbar-item">
                <uni-icons custom-prefix="iconfont" type="icon-fengmi" size="30"></uni-icons>
            </view>
            <view @click="open" class="navbar-item">
                <uni-icons custom-prefix="iconfont" type="icon-fengmi" size="30"></uni-icons>
            </view>
            <view @click="showSidebar(2)" class="navbar-item">
                <uni-icons custom-prefix="iconfont" type="icon-fengmi" size="30"></uni-icons>
            </view>
        </view>
        <view v-show="sidebarVisible[0]" class="sidebar">
            <text class="sidebar-title">目录</text>
            <scroll-view class="chapter-list" scroll-y>
                <view v-for="chapter in chapters" :key="chapter.id">
                    <text @click="goToChapter(chapter.id)">{{ chapter.title }}</text>
                </view>
            </scroll-view>
        </view>
        <view v-show="sidebarVisible[1]" class="sidebar">
            <text class="sidebar-title">设置</text>
            <input type="range" v-model="brightness" min="0" max="100">
            <input type="range" v-model="fontSize" min="12" max="24">
            <select v-model="bgColor">
                <option value="#ffffff">白色</option>
                <option value="#f0f0f0">浅灰色</option>
                <option value="#d3d3d3">灰色</option>
            </select>
        </view>
        <view v-show="sidebarVisible[2]" class="sidebar">
            <text class="sidebar-title">模式切换</text>
            <input type="checkbox" v-model="nightMode">黑夜模式
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { apiGetNovelChapter, apiGetNovelChapters } from '@/services/api/book';
import { onShow, onLoad } from '@dcloudio/uni-app';

const novelID = ref(0)
onLoad((query) => {
    // 获取路由参数
    novelID.value = query.id
})
onShow(() => {
    getNovelChapter()
    getNovelChapters()
})

const novelChapters = ref([])
const novelChapterArr = ref({})
const getNovelChapters = () => {
    apiGetNovelChapters(novelID.value).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            novelChapters.value = res.data
            console.log('novelChapters', novelChapters.value)
        }
    })
}

const getNovelChapter = () => {
    apiGetNovelChapter({ novelID: novelID.value }).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            novelChapterArr.value = res.data[0]
            console.log('novelChapterArr', novelChapterArr.value)
            novelChapterArr.value.ChapterContent = novelChapterArr.value.ChapterContent.replace(/\r\n|\r|\n/g, '<br>').replace(/ {4}/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    })
}

const brightness = ref(100);
const fontSize = ref(16);
const bgColor = ref('#ffffff');
const nightMode = ref(false);
const sidebarVisible = ref([false, false, false]);

const chapters = [
    { id: 1, title: 'Chapter 1' },
    { id: 2, title: 'Chapter 2' },
    { id: 3, title: 'Chapter 3' },
    // Add more chapters as needed
];

function goToChapter(chapterId) {
    // Logic to navigate to the selected chapter
}

function showSidebar(index) {
    sidebarVisible.value = sidebarVisible.value.map((item, i) => i === index);
}
</script>

<style lang="scss" scoped>
.novel-reader {
    display: flex;
    flex-direction: column;
}

.night-mode {
    background-color: #000000;
    color: #ffffff;
}

.novel-content {
    flex: 1;
    padding: 10px;
}

.navbar {
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

.sidebar {
    display: none;
    padding: 10px;
}

.sidebar-title {
    font-weight: bold;
}

.chapter-list {
    height: 200px;
    overflow: auto;
}
</style>