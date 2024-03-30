<template>
    <view class="content">
        <view class="book-list">
            <view :class="['book-item', index % 3 == 1 ? 'book-middle' : '']" v-for="(item, index) in novels"
                :key="index">
                <view v-if="index != novels.length - 1" @longpress="openPopup(item)"
                    @click="navTo(`/subPackages/book/read/index?id=${item.NovelID}&name=${item.Title}`)">
                    <!-- @click="openPopup(item)"> -->
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
                <view v-else class="book-add" @click="$refs.uploads.select()" @longpress="openAddPopup()">
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
                <!-- 编辑书籍信息 -->
                <view class="popup-item" @click="openEditPopup">
                    <view class="popup-icon">
                        <uni-icons type="compose" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        编辑书籍
                    </view>
                </view>
                <!-- 新增章节 -->
                <view class="popup-item" @click="toAddPage">
                    <view class="popup-icon">
                        <uni-icons type="plus" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        新增章节
                    </view>
                </view>
                <!-- 下载书籍 -->
                <view class="popup-item" @click="downloadBook">
                    <view class="popup-icon">
                        <uni-icons type="download" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        下载书籍
                    </view>
                </view>
                <!-- 删除书籍 -->
                <view class="popup-item" @click="deleteBook">
                    <view class="popup-icon">
                        <uni-icons type="trash" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        删除书籍
                    </view>
                </view>
                <view class="popup-close" @click="$refs.popupRef.close()">取消</view>
            </view>
        </uni-popup>
        <!-- 长按添加 -->
        <uni-popup ref="addPopupRef" background-color="#fff">
            <view class="popup-list">
                <view class="popup-item" @click="openCreatePopup">
                    <view class="popup-icon">
                        <uni-icons type="plus" size="30" color="#999"></uni-icons>
                    </view>
                    <view class="popup-text">
                        创建书籍
                    </view>
                </view>
                <view class="popup-close" @click="$refs.addPopupRef.close()">取消</view>
            </view>
        </uni-popup>
        <!-- 添加或编辑书籍名称和作者 -->
        <uni-popup ref="createOreditPopupRef" background-color="#fff">
            <view class="popup-content">
                <view class="popup-header">
                    <view class="title">{{ isEdit ? '编辑书籍' : '添加书籍' }}</view>
                </view>
                <view class="popup-body">
                    <view class="input-item">
                        <view class="input-label">书名：</view>
                        <input class="input" v-model="bookInfo.Title" placeholder="请输入书名" />
                    </view>
                    <view class="input-item">
                        <view class="input-label">作者：</view>
                        <input class="input" v-model="bookInfo.Author" placeholder="请输入作者" />
                    </view>
                </view>
                <view class="popup-footer">
                    <view class="btn" @click="$refs.createOreditPopupRef.close()">取消</view>
                    <view class="btn btn-primary" @click="createOrEdit()">确定</view>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue'; // 导入需要的Vue Composition API
import { apiGetNovels, apiDeleteNovel, apiCreateNovel, apiUpdateNovel, apiDownloadNovel } from '@/services/api/book';
import { onShow } from '@dcloudio/uni-app';
import { navTo } from '@/utils/utils'

const popupBottom = ref(0);
onShow(() => {
    getNovels()
    // #ifdef APP-PLUS
    uni.onKeyboardHeightChange(res => {
        if (res.height === 0) {
            popupBottom.value = 0
        } else {
            popupBottom.value = 100
        }
    })
    // #endif
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

// #region 手动添加
const popupRef = ref(null)
const activeBook = ref(null)
const openPopup = (book) => {
    activeBook.value = book
    popupRef.value.open('bottom')
    // 触发手机抖动
    uni.vibrateShort();
}
const addPopupRef = ref(null)
const openAddPopup = () => {
    addPopupRef.value.open('bottom')
    // 触发手机抖动
    uni.vibrateShort();
}
const openCreatePopup = () => {
    isEdit.value = false
    bookInfo.Title = ''
    bookInfo.Author = ''
    addPopupRef.value.close()
    createOreditPopupRef.value.open('bottom')
}
const openEditPopup = () => {
    isEdit.value = true
    bookInfo.Title = activeBook.value.Title
    bookInfo.Author = activeBook.value.Author
    bookInfo.NovelID = activeBook.value.NovelID
    popupRef.value.close()
    createOreditPopupRef.value.open('bottom')
}
const isEdit = ref(false)
const createOreditPopupRef = ref(null)
const bookInfo = reactive({
    Title: '',
    Author: ''
})
const createOrEdit = () => {
    let api = isEdit.value ? apiUpdateNovel : apiCreateNovel
    api(bookInfo).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        }
        else {
            uni.showToast({
                title: res.msg
            })
            createOreditPopupRef.value.close()
            getNovels()
        }
    })
}
// #endregion
// #region 新增章节
const toAddPage = () => {
    popupRef.value.close()
    navTo(`/subPackages/book/add/index?novelID=${activeBook.value.NovelID}`)
}
// #region 下载书籍
const downloadBook1 = async (novel) => {
    let res = await saveTextFileToStorage1('myexample')
    console.log('download res', res);
}
function saveTextFileToStorage1(txtContent) {
    return new Promise(resolve => {
        plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, fs => {
            const fileName = 'books/example.txt'; // Specify the file path as storage/1/example.txt
            fs.root.getFile(fileName, { create: true }, fileEntry => {
                fileEntry.createWriter(writer => {
                    plus.nativeUI.showWaiting("Saving text file");
                    writer.seek(writer.length);
                    writer.write(txtContent);
                    writer.onerror = function () {
                        console.log("Error writing to file: " + writer.error.message);
                        plus.nativeUI.closeWaiting();
                        plus.nativeUI.toast("Failed to save text file, please try again");
                        return;
                    };
                    writer.onsuccess = function () {
                        plus.nativeUI.closeWaiting();
                        plus.nativeUI.toast("Text file saved successfully");
                        resolve(fileEntry.toURL()); // Return the file path
                    };
                }, error => {
                    console.log("Error creating file writer: " + error);
                    plus.nativeUI.toast("Failed to save text file, please try again");
                    return;
                });
            }, error => {
                console.log("Error getting file: " + error);
                plus.nativeUI.toast("Failed to save text file, please try again");
                return;
            });
        }, e => {
            console.log("Error requesting file system: " + e.message);
            plus.nativeUI.toast("Failed to request file system, please try again");
            return;
        });
    });
}
// 方案1
// 服务器生成txt文件
const serverCreateTempFile = () => {
    return new Promise((resolve, reject) => {
        apiDownloadNovel(activeBook.value.NovelID).then(res => {
            console.log('res', res);
            if (res.code === 0 || !res.code) {
                uni.showToast({
                    icon: 'error',
                    title: res.msg || '网络异常'
                })
                reject()
            }
            resolve(res.data.fileName)
        })
    })
}

// 本地保存txt文件
const downloadBook = async () => {
    let tempFilePath = await serverCreateTempFile()
    console.log('tempFilePath', tempFilePath);
    uni.downloadFile({
        url: `${baseUrl}downloads/${tempFilePath}`,
        //  存储文件到手机本地文件夹
        success: (res) => {
            // return
            if (res.statusCode === 200) {
                // 文件到本地
                uni.saveFile({
                    tempFilePath: res.tempFilePath, //临时路径
                    success: function (data) {
                        var savedFilePath = data.savedFilePath
                        console.log('savedFilePath', savedFilePath);
                        // 在app端执行
                        // #ifdef APP-PLUS
                        let osname = plus.os.name
                        // 如果是安卓的话弹出提示
                        if (osname == 'Android') {
                            uni.showToast({
                                mask: true,
                                title: '下载成功',
                                duration: 1000
                            })
                        }
                        // Assuming you have a button or some other event trigger to initiate the copy action
                        uni.setClipboardData({
                            data: activeBook.value.Title,
                            showToast: false,
                            success: function () {
                                console.log('setClipboardData success');
                            }
                        });
                        // #endif
                        //ios手机直接打开文件，手动存储文件到手机，Android手机从根目录创建文件夹，保存文件并改名
                        setTimeout(() => {
                            //打开文档查看
                            uni.openDocument({
                                filePath: data.savedFilePath,
                                success: function (ress) {
                                    console.log("成功打开文件")
                                },
                                fail() {
                                    console.log("打开文件失败")
                                }
                            })
                        }, 1000)
                    }
                })
            }
        }
    })
}
// #endregion
// #region 删除
const deleteBook = () => {
    uni.showModal({
        title: '删除提示',
        content: `确定要删除《${activeBook.value.Title}》吗？`,
        success: res => {
            if (res.confirm) {
                apiDeleteNovel(activeBook.value.NovelID).then(res => {
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
        }
    })
}
// #endregion
</script>

<style lang="scss" scoped>
.content {
    background-color: #fff;
}

::v-deep [name="content"] {
    bottom: v-bind("popupBottom + 'px'") !important;
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

.popup-content {
    padding: 40rpx;
    display: flex;
    flex-direction: column;
    align-items: center;

    .popup-header {
        text-align: center;
        margin-bottom: 40rpx;
    }

    .popup-body {
        width: 100%;
        display: flex;
        flex-direction: column;

        .input-item {
            display: flex;
            align-items: center;
            margin-bottom: 20rpx;

            .input-label {
                width: 200rpx;
                color: #888;
                text-align: right;
                margin-right: 20rpx;
            }

            .input {
                flex: 1;
            }
        }
    }

    .popup-footer {
        padding: 20rpx;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .btn {
            width: 150rpx;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            border-radius: 50rpx;
            border: 1px solid #aaa;
        }

        .btn-primary {
            margin-left: 80rpx;
            background-color: #0084ff;
            color: #fff;
        }
    }
}
</style>