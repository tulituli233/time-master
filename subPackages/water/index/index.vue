<template>
    <view class="content">
        <!-- 已喝水量的百分比 -->
        <view class="water">
            <view class="water-percent">
                {{ percent }}
            </view>
            <view class="percent">
                %
            </view>
        </view>
        <!-- 温馨提示 -->
        <view class="tips">
            {{ tips }}
        </view>
        <!-- 已喝(ml)、目标(ml)、剩余(ml) -->
        <view class="info">
            <view class="info-item">
                <view class="label">已喝(ml)</view>
                <view class="value">{{ consumedWater }}</view>
            </view>
            <view class="info-item">
                <view class="label">目标(ml)</view>
                <view class="value">{{ targetWater }}</view>
            </view>
            <view class="info-item">
                <view class="label">剩余(ml)</view>
                <view class="value">{{ targetWater - consumedWater }}</view>
            </view>
        </view>
        <!-- 喝水 -->
        <view class="water-btn">
            <uni-icons custom-prefix="iconfont" type="icon-water" size="50" color="#00b7ff"
                @click="$refs.popupRef.open('bottom')" />
        </view>
        <!-- 水位 -->
        <view class="water-level" :style="{ height: percent + '%' }"></view>
        <!-- 弹出层 -->
        <uni-popup class="popup" ref="popupRef" background-color="#fff">
            <view class="popup-content">
                <view class="popup-header">
                    <view class="title">添加饮水</view>
                </view>
                <view class="popup-swiper">
                    <swiper :indicator-dots="true" :autoplay="false">
                        <swiper-item class="swiper-page" v-for="(item, index) in swiperList" :key="index">
                            <view class="water-item" v-for="(item1, index) in item" :key="index"
                                @click="selectWater(item1.WaterID)">
                                <view :class="['water-icon', currentWaterType == item1.WaterID ? 'active' : '']">
                                    <uni-icons custom-prefix="iconfont" :type="item1.icon" size="50" color="#00b7ff" />
                                </view>
                                <view class="water-name">
                                    {{ item1.name }}
                                </view>
                            </view>
                        </swiper-item>
                    </swiper>
                </view>

                <view class="numeric-keypad">
                    <view class="display">{{ inputValue }}</view>
                    <view class="quick-keypad">
                        <view class="key" v-for="(keyNum, index) in quickKeys" :key="index"
                            @click="inputValue = keyNum">
                            {{ keyNum }}ml
                        </view>
                    </view>
                    <table>
                        <tr v-for="(row, rowIndex) in keypadLayout" :key="rowIndex">
                            <td v-for="(key, keyIndex) in row" :key="keyIndex" @click="handleKeyPress(key)">
                                <view v-if="key != 'date'">{{ key }}</view>
                                <view v-else>
                                    <!-- 时间选择器 -->
                                    <picker ref="timePicker" mode="time" :value="waterTime" @change="bindTimeChange">
                                        <view class="uni-input">{{ waterTime }}</view>
                                    </picker>
                                </view>
                            </td>
                        </tr>
                    </table>
                </view>
            </view>
        </uni-popup>

    </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAddWaterRecord, apiGetUserWaterRecords } from '@/services/api/water'
import { formatDateTime } from '@/utils/utils.js';
import { onShow } from '@dcloudio/uni-app'

// 获取饮水记录
let waterRecords = ref([])
onShow(() => {
    getWaterRecords()
})
const getWaterRecords = () => {
    apiGetUserWaterRecords(1).then(res => {
        waterRecords.value = res.data
        console.log('waterRecords', waterRecords.value)
    })
}
const percent = computed(() => {
    return Math.floor((consumedWater.value / targetWater.value) * 100).toFixed(0)
})
const tips = ref('')
const targetWater = ref(2000)
// 计算已喝水的量
const consumedWater = computed(() => {
    let sum = 0
    waterRecords.value.forEach(item => {
        sum += item.Amount
    })
    return sum
})
// 水的种类
const waterType = ref([
    {
        WaterID: 1,
        name: '水',
        icon: 'icon-shuibei',
    },
    {
        WaterID: 2,
        name: '矿泉水',
        icon: 'icon-kuang',
    },
    {
        WaterID: 3,
        name: '碳酸饮料',
        icon: 'icon-kele',
    },
    {
        WaterID: 4,
        name: '汤',
        icon: 'icon-tang',
    },
    {
        WaterID: 5,
        name: '豆奶',
        icon: 'icon-dounai',
    },
    {
        WaterID: 6,
        name: '牛奶',
        icon: 'icon-milk',
    },
    {
        WaterID: 7,
        name: '奶茶',
        icon: 'icon-naicha',
    },
    {
        WaterID: 8,
        name: '果汁',
        icon: 'icon-guozhi',
    },
    {
        WaterID: 9,
        name: '茶',
        icon: 'icon-cha',
    },
    {
        WaterID: 10,
        name: '咖啡',
        icon: 'icon-kafei',
    },
    {
        WaterID: 11,
        name: '椰汁',
        icon: 'icon-yezi',
    },
    {
        WaterID: 12,
        name: '啤酒',
        icon: 'icon-pijiu',
    },
    {
        WaterID: 13,
        name: '蜂蜜水',
        icon: 'icon-fengmi',
    },
    {
        WaterID: 14,
        name: '红酒',
        icon: 'icon-xianxinghongjiu',
    },
    {
        WaterID: 15,
        name: '柠檬茶',
        icon: 'icon-ningmengcha',
    },
])
// 将waterType中的元素按每10个元素拆分一个swiper数组
const swiperList = computed(() => {
    const arr = []
    for (let i = 0; i < waterType.value.length; i += 10) {
        arr.push(waterType.value.slice(i, i + 10))
    }
    console.log('arr', arr);
    return arr
})

const currentWaterType = ref(1)
const selectWater = (WaterID) => {
    currentWaterType.value = WaterID
    console.log('currentWaterType', currentWaterType.value);
}

// 键盘
const keypadLayout = [
    [1, 2, 3, 'date'],
    [4, 5, 6, 'DEL'],
    [7, 8, 9, 'AC'],
    ['', 0, '', '完成']
];
const quickKeys = ['100', '200', '250', '500']
const inputValue = ref('');
const getTime = () => {
    // 返回当前时间,格式为HH:mm
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}
const handleKeyPress = (key) => {
    if (key === 'DEL') {
        inputValue.value = inputValue.value.slice(0, -1);
    } else if (key === 'AC') {
        inputValue.value = '';
    } else if (key === '完成') {
        addWater();
    } else if (key === 'date') {
        console.log('timePicker.value', timePicker.value);
    } else {
        inputValue.value += key;
    }
};
const timePicker = ref(null);
const waterTime = ref(getTime());
const bindTimeChange = (e) => {
    waterTime.value = e.detail.value
}
// 添加饮水记录
const addWater = () => {
    let water = {
        UserID: 1,
        WaterID: currentWaterType.value,
        DateTime: formatDateTime(convertToTodayTime(waterTime.value)),
        Amount: inputValue.value
    }
    console.log('water', water);
    apiAddWaterRecord(water).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            uni.showToast({
                title: res.msg
            })
        }
    })
}
const convertToTodayTime = (timeString) => {
    const today = new Date();

    const [hours, minutes] = timeString.split(':').map(Number);
    today.setHours(hours);
    today.setMinutes(minutes);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return today;
}
</script>

<style lang="scss">
.content {
    // 水的颜色
    color: #00b7ff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.water {
    width: 750rpx;
    padding-top: 120rpx;
    display: flex;
    justify-content: center;
    align-items: center;

    .water-percent {
        font-size: 150rpx;
    }
}

.tips {
    width: 750rpx;
    height: 45vh;
    text-align: center;
    padding: 20rpx;
    font-size: 24rpx;
}

.info {
    width: 750rpx;
    height: 150rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .value {
            font-size: 60rpx;
        }
    }
}

.water-btn {
    width: 750rpx;
    padding-top: 50rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}

.water-level {
    background: linear-gradient(to top, rgba(0, 183, 255, 0.7), rgba(0, 183, 255, 0));
    position: absolute;
    bottom: 0;
    width: 100%;
    pointer-events: none;
    /* 将元素设置为不可点击 */
}

// 给name=content的元素设置样式
::v-deep[name="content"],
::v-deep.uni-popup__wrapper {
    border-radius: 40rpx 40rpx 0 0;
}

::v-deep uni-swiper {
    height: 450rpx !important;
}

.popup-content {
    color: #000;

    .popup-header {
        text-align: center;
        padding: 20rpx;

        .title {
            font-size: 36rpx;
        }
    }

    .popup-swiper {
        height: 450rpx;
    }

    .swiper-page {
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size: 24rpx;

        .water-item {
            width: 130rpx;
            display: flex;
            flex-direction: column;
            align-items: center;

            .water-icon {
                border-radius: 10rpx;
                padding: 10rpx;
                margin-bottom: 10rpx;
            }

            .active {
                background-color: rgba(0, 183, 255, 0.2);
            }
        }
    }
}

// 键盘
.numeric-keypad {
    width: 750rpx;

    .date {
        width: 750rpx;
        height: 100rpx;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-top: 1px solid #ddd;

        .date-text {
            margin-left: 10rpx;
            font-size: 24rpx;
        }
    }

    .display {
        width: 750rpx;
        height: 140rpx;
        line-height: 140rpx;
        text-align: center;
        font-size: 70rpx;
    }

    .quick-keypad {
        padding: 20rpx 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .key {
            width: 160rpx;
            height: 70rpx;
            line-height: 70rpx;
            text-align: center;
            border-radius: 50rpx;
            border: 1px solid #aaa;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    td {
        width: 25%;
        height: 70rpx;
        padding: 10px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
        font-size: 50rpx;

        &:hover {
            background-color: #ddd;
        }
    }
}
</style>