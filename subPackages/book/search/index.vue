<template>
    <view :class="['content', theme.mode]">
        <view id="search">
            <input class="author-input" type="text" v-model="searchString" placeholder="请输入作者">
            <uni-icons class="clear" v-show="showClearIcon" @click="clearIcon" type="clear" size="25"></uni-icons>
            <view class="search-btn" @click="search">搜索</view>
        </view>
        <view id="book-list" v-if="searchResults.length">
            <view class="book-item" v-for="(result, index) in searchResults" :key="index">
                <view class="book-title ellipsis">{{ result.name }}</view>
                <view :class="['get-btn', result.url ? '' : 'done']" @click="getNovelByUrl(result.url, index)">{{
                result.url ? '获取' : '已获取' }}</view>
            </view>
        </view>
        <view id="empty" v-else>{{ tipMsg }}</view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { apiGetNovelUrlByAuthor, apiGetNovelByUrl } from '@/services/api/book';
import { useStore } from 'vuex';

const store = useStore();
const theme = computed(() => store.state.theme)
const searchString = ref('');
const searchResults = ref([]);
const showClearIcon = computed(() => searchString.value.length > 0)
const clearIcon = () => {
    searchString.value = ''
}
const search = () => {
    getNovelUrlByAuthor(searchString.value)
}
const tipMsg = ref('')
const getNovelUrlByAuthor = (author) => {
    apiGetNovelUrlByAuthor(author).then((res) => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            searchResults.value = res.data
            if (searchResults.value.length === 0) {
                tipMsg.value = '未搜索到与' + author + '相关小说'
            }
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

#empty {
    padding: 20rpx;
    text-align: center;
}
</style>