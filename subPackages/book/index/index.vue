<template>
    <view class="content">
        <view class="book-list">
            <view :class="['book-item', index % 3 == 1 ? 'book-middle' : '']" v-for="(item, index) in novels"
                :key="index">
                <view v-if="index != novels.length - 1"
                    @click="navTo(`/subPackages/book/read/index?id=${item.NovelID}&name=${item.Title}`)">
                    <view class="book-img">
                        <view class="book-pad">
                            <view class="book-text ellipsis">
                                {{ item.Title }}
                            </view>
                        </view>
                    </view>
                    <view class="book-info">
                        <view class="book-title ellipsis">{{ item.Title }}</view>
                        <!-- <view class="book-plan">读到第1章</view> -->
                    </view>
                </view>
                <view v-else class="book-add" @click="$refs.uploads.select()">
                    <view class="add-icon">
                        <uni-icons type="plusempty" size="50" color="#ccc"></uni-icons>
                    </view>
                    <view class="add-text">上传本地书</view>
                </view>
            </view>
        </view>
        <yt-uploads ref="uploads" :options="options" @selected="selectedHandler" @success="successHandler"
            @fail="failHandler" @process="processHandler"></yt-uploads>
        <!-- 更多功能 -->
        <uni-popup ref="popupRef" background-color="#fff">
            <view class="popup-list">
                <view class="popup-item" @click="deleteBook">
                    <view class="popup-icon">
                        <uni-icons type="trash" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        删除
                    </view>
                </view>
                <view class="popup-close" @click="$refs.popupRef.close()">取消</view>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref } from 'vue'; // 导入需要的Vue Composition API
import { apiGetNovels, apiDeleteBook } from '@/services/api/book';
import { onShow } from '@dcloudio/uni-app';
import { navTo } from '@/utils/utils'

onShow(() => {
    getNovels()
})

const novels = ref([])
const getNovels = () => {
    apiGetNovels().then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            novels.value = res.data
            console.log('novels', novels.value)
        }
        novels.value.push({})
    })
}

const baseUrl = uni.getStorageSync('BASE_URL');
const options = ref({
    type: 2,
    host: `${baseUrl}book/upload`,
});
console.log('options', options);
const selectedHandler = (selectedData) => {
    console.log('Selected data:', selectedData);
};

const successHandler = (successData) => {
    console.log('Success data:', successData);
    let res = successData[0];
    if (res.code === 0 || !res.code) {
        uni.showToast({
            icon: 'error',
            title: res.msg || '网络异常'
        });
    } else {
        uni.showToast({
            title: res.msg
        });
        getNovels();
    }
};

const failHandler = (error) => {
    console.error('Error:', error);
    uni.showToast({
        icon: 'error',
        title: 'fail上传失败',
    });
};

const processHandler = (progress) => {
    console.log('Upload progress:', progress);
};
// #region 删
const popupRef = ref(null)
const activeBook = ref(null)
const openPopup = (book) => {
    activeBook.value = book
    popupRef.value.open('bottom')
    // 触发手机抖动
    uni.vibrateShort();
}
const deleteBook = () => {
    apiDeleteBook(activeBook.value.NovelID).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            uni.showToast({
                title: res.msg
            })
            popupRef.value.close()
            getNovels()
        }
    })
}
// #endregion
</script>

<style lang="scss" scoped>
.content {
    background-color: #fff;
}

.book-list {
    display: flex;
    flex-wrap: wrap;
    padding: 30rpx;

    .book-item {
        width: 200rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20rpx;

        .book-img {
            padding: 15rpx;
            background-color: #f8f8f8;
            border: 1rpx solid #eee;
            box-shadow: 0 10rpx 10rpx #ccc;

            .book-pad {
                width: 160rpx;
                height: 250rpx;
                border: 5rpx solid #eee;
                background-color: #f1f1f1;

                .book-text {
                    margin-top: 30rpx;
                    padding: 10rpx;
                    font-size: 24rpx;
                    text-align: center;
                }
            }
        }

        .book-info {
            width: 200rpx;
            display: flex;
            flex-direction: column;

            .book-title {
                padding: 20rpx 10rpx;
                font-size: 28rpx;
            }
        }

        .book-add {
            width: 200rpx;
            height: 300rpx;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f1f1f1;

            .add-icon {
                padding: 15rpx;
            }

            .add-text {
                font-size: 24rpx;
                color: #ccc;
            }
        }
    }

    .book-middle {
        margin: 0 45rpx;
    }
}

.ellipsis {
    -webkit-line-clamp: 2;
}
</style>