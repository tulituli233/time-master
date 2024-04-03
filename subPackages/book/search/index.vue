<template>
    <div>
        <view id="search">
            <input class="author-input" type="text" v-model="searchString" placeholder="请输入作者">
            <view class="search-btn" @click="search">搜索</view>
        </view>
        <view id="book-list">
            <view class="book-item" v-for="(result, index) in searchResults" :key="index">
                <view class="book-title ellipsis">{{ result.name }}</view>
                <view :class="['get-btn', result.url ? '' : 'done']" @click="getNovelByUrl(result.url, index)">{{ result.url ? '获取' : '已获取' }}</view>
            </view>
        </view>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { apiGetNovelUrlByAuthor, apiGetNovelByUrl } from '@/services/api/book';

const searchString = ref('');
const searchResults = ref([]);
const search = () => {
    getNovelUrlByAuthor(searchString.value)
}

const getNovelUrlByAuthor = (author) => {
    apiGetNovelUrlByAuthor(author).then((res) => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            searchResults.value = res.data
        }
    })
}

const getNovelByUrl = (url, index) => {
    if (!url) {
        return
    }
    apiGetNovelByUrl(url).then((res) => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            searchResults.value[index].url = ''
            // navTo(`/subPackages/book/read/index?id=${res.data.id}&name=${res.data.name}`)
        }
    })
}
</script>

<style lang="scss" scoped>
#search {
    padding: 20rpx;
    display: flex;
    align-items: center;

    .author-input {
        flex: 1;
        height: 60rpx;
        padding: 0 20rpx;
        border: 1px solid #ccc;
        border-radius: 10rpx;
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

#book-list {
    padding: 20rpx;

    .book-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20rpx;
        margin-bottom: 20rpx;

        .book-title {
            font-size: 32rpx;
        }

        .ellipsis {
            -webkit-line-clamp: 2;
        }

        .get-btn {
            width: 200rpx;
            height: 60rpx;
            background-color: #1baf59;
            color: #fff;
            border-radius: 10rpx;
            text-align: center;
            line-height: 60rpx;
        }

        .done {
            background-color: #ccc;
        }
    }
}
</style>