<template>
    <view class="content">
        <view class="countdown-list">
            <view class="countdown-item" v-for="item in countdownList" :key="item.CountdownID"
               @click="openAddOrEditCountdown(item, true)" @longpress="openPopup(item)">
                <view class="countdown-left">
                    <view class="title">
                        {{ item.Name }}
                    </view>
                    <view class="date">
                        {{ formatDate(item.TargetDate) }}
                        {{ formatDateLunar(item.TargetDate) }}
                    </view>
                </view>
                <view class="countdown-right">
                    <view class="day-remaining" v-if="getRemainingDays(item.TargetDate) > 0">
                        还剩<text class="remaining">{{ getRemainingDays(item.TargetDate) }}</text>天
                    </view>
                    <view class="day-remaining" v-else-if="getRemainingDays(item.TargetDate) < 0">
                        已过<text class="remaining">{{ Math.abs(getRemainingDays(item.TargetDate)) }}</text>天
                    </view>
                    <view class="day-remaining" v-else>
                        <text class="today">今天</text>
                    </view>
                </view>
            </view>
        </view>
        <!-- 小浮窗 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
                <button class="win-service" @click="openAddOrEditCountdown">
                    <uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 添加倒计时 -->
        <uni-popup class="add-countdown" ref="addCountdownRef" background-color="#fff">
            <view class="add-countdown-content">
                <view class="add-countdown-header">
                    <view class="title">{{ isEdit ? '编辑倒计时' : '添加倒计时' }}</view>
                </view>
                <view class="countdown-name">
                    <input type="text" class="name-input" v-model="countdownName" placeholder="倒计时名称" />
                </view>
                <view class="countdown-date">
                    <view class="target">目标日</view>
                    <uni-datetime-picker type="date" v-model="countdownDate" />
                </view>
                <view class="add-countdown-input">
                    <view class="btn" @click="$refs.setTargetRef.close()">取消</view>
                    <view class="btn btn-primary" @click="addCountdown()">确定</view>
                </view>
            </view>
        </uni-popup>
        <!-- 更多功能 -->
        <uni-popup ref="popupRef" background-color="#fff">
            <view class="popup-list">
                <view class="popup-item" @click="deleteCountdown">
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
import { ref } from 'vue';
import { apiAddCountdown, apiGetUserCountdowns, apiUpdateCountdown, apiDeleteCountdown } from '@/services/api/countdown'
import { formatDate, formatDateLunar } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app'

const x = ref('600rpx');
const y = ref('1200rpx');

onShow(() => {
    getCountdowns()
})
// #region 查
let countdownList = ref([])
const getCountdowns = () => {
    apiGetUserCountdowns(getApp().globalData.userInfo.UserID).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            countdownList.value = res.data
            console.log('countdownList', countdownList.value)
        }
    })
}
// #endregion
// 计算剩余天数
const getRemainingDays = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
// #region 增/改
const addCountdownRef = ref(null)
const isEdit = ref(false)
const openAddOrEditCountdown = (countdown, openEdit = false) => {
    isEdit.value = openEdit
    if (openEdit) {
        activeCountdownID.value = countdown.CountdownID
        countdownName.value = countdown.Name
        countdownDate.value = countdown.TargetDate
    }
    addCountdownRef.value.open('bottom')
}
const countdownName = ref('')
const countdownDate = ref('')

const addCountdown = () => {
    let countdown = {
        UserId: getApp().globalData.userInfo.UserID,
        Name: countdownName.value,
        TargetDate: formatDate(countdownDate.value),
    }
    let errMsg = ''
    if (!countdown.Name) {
        errMsg = '请输入倒计时名称'
    } else if (!countdown.TargetDate) {
        errMsg = '请选择目标日期'
    }
    if (errMsg) {
        uni.showToast({
            icon: 'error',
            title: errMsg
        })
        return
    }
    if (isEdit.value) countdown.CountdownID = activeCountdownID.value
    console.log('countdown', countdown);
    let api = isEdit.value ? apiUpdateCountdown : apiAddCountdown
    api(countdown).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            uni.showToast({
                title: res.msg
            })
            getCountdowns()
            addCountdownRef.value.close()
        }
    })
}
// #endregion

// #region 删
const popupRef = ref(null)
const activeCountdownID = ref(null)
const openPopup = (countdown) => {
    activeCountdownID.value = countdown.CountdownID
    popupRef.value.open('bottom')
    // 触发手机抖动
    uni.vibrateShort();
}
const deleteCountdown = () => {
    // 删除
    apiDeleteCountdown(activeCountdownID.value).then(res => {
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
            getCountdowns()
        }
    })
}
// #endregion
</script>

<style lang="scss" scoped>
.content {
    width: 100vw;
    background-image: url('@/static/countdown-bg.png');
    background-size: cover;
    /* 或者使用 contain，根据需要选择合适的值 */
    background-color: #fff;
}

.win-service {
    background-color: #ccc;
}

.countdown-list {
    padding: 20rpx;
    color: #fff;

    .countdown-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10rpx 10rpx 20rpx;

        .countdown-left {
            display: flex;
            flex-direction: column;
            padding: 20rpx;

            .title {
                font-size: 36rpx;
                margin-bottom: 15rpx;
            }

            .date {
                font-size: 26rpx;
                color: #ccc;
            }
        }

        .countdown-right {
            .day-remaining {
                font-size: 30rpx;

                .remaining {
                    padding: 0 10rpx;
                    font-size: 75rpx;
                }

                .today {
                    font-size: 50rpx;
                }
            }
        }
    }
}

::v-deep[name="content"],
::v-deep.uni-popup__wrapper {
    border-radius: 40rpx 40rpx 0 0;
}

.add-countdown-content {
    padding: 20rpx;

    .add-countdown-header {
        .title {
            font-size: 30rpx;
            text-align: center;
        }
    }

    .countdown-name {
        padding: 20rpx;

        .name-input {
            font-size: 50rpx;
        }
    }

    .countdown-date {
        padding: 20rpx;
        display: flex;
        align-items: center;

        .target {
            font-size: 34rpx;
            margin-right: 20rpx;
        }
    }

    .add-countdown-input {
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
            background-color: #0084ff;
            color: #fff;
        }
    }
}
</style>