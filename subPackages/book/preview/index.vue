<template>
    <AppPage navTitle="预览网页">
        <view id="search">
            <input class="author-input" type="text" v-model="searchString" placeholder="请输入网址">
            <uni-icons class="clear" v-show="showClearIcon" @click="clearIcon" type="clear" size="25"></uni-icons>
            <view class="search-btn" @click="search">预览</view>
        </view>
        <view id="book-list" v-if="searchResults">
            <view v-html="searchResults"></view>
        </view>
        <view id="empty" v-else>{{ tipMsg }}</view>
    </AppPage>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppPage from '@/components/AppPage'
import { apiGetHtmlByUrl } from '@/services/api/book';

const searchString = ref('');
const searchResults = ref('');
const showClearIcon = computed(() => searchString.value.length > 0)
const clearIcon = () => {
    searchString.value = ''
}
const search = () => {
    getHtmlByUrl(searchString.value)
}
// 获取网页内容
const getHtmlByUrl = (url) => {
    apiGetHtmlByUrl(url).then((res) => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            searchResults.value = res.data
            console.log('searchResults', searchResults.value)
        }
    })
}
const tipMsg = ref('')
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
}

#empty {
    padding: 20rpx;
    text-align: center;
}
</style>