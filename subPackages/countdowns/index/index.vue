<template>
    <view class="content">
        <view class="countdown-list">
            <view class="countdown-item" v-for="item in countdownList" :key="item.CountdownID">
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
                <button class="win-service" @click="$refs.addCountdownRef.open('bottom')">
                    <uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 添加倒计时 -->
        <uni-popup class="add-countdown" ref="addCountdownRef" background-color="#fff">
            <view class="add-countdown-content">
                <view class="add-countdown-header">
                    <view class="title">添加倒计时</view>
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
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { apiAddCountdown, apiGetUserCountdowns } from '@/services/api/countdown'
import { formatDate, formatDateLunar } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app'

const x = ref('600rpx');
const y = ref('1000rpx');

onShow(() => {
    getCountdowns()
})

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
let countdownList = ref([])
// 计算剩余天数
const getRemainingDays = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

const addCountdownRef = ref(null)
const countdownName = ref('')
const countdownDate = ref('')

const addCountdown = () => {
    let countdown = {
        UserId: getApp().globalData.userInfo.UserID,
        Name: countdownName.value,
        TargetDate: countdownDate.value
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
    console.log('countdown', countdown);
    apiAddCountdown(countdown).then(res => {
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