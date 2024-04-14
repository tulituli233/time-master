<template>
    <AppPage navTitle="记账管家" :navBgColor="'#1baf59'">
        <view class="fixed-box">
            <view class="top">
                <view class="date">
                    <picker mode="multiSelector" :range="[years, months]" :value="[yearIndex, monthIndex]" @change="onDateChange">
                        <view class="top-title">{{ selectedYear }}年</view>
                        <view class="month">{{ selectedMonth }}月</view>
                    </picker>
                </view>
                <view class="money">
                    <view class="item">
                        <view class="top-title">收入</view>
                        <view class="num">{{ incomesNum(accountList) }}</view>
                    </view>
                    <view class="item">
                        <view class="top-title">支出</view>
                        <view class="num">{{ expensesNum(accountList) }}</view>
                    </view>
                </view>
            </view>
            <!-- 功能列表 -->
            <view class="function-box theme-bgc-0">
                <view class="function-list theme-bgc">
                    <view class="function-item">
                        <view class="icon">
                            <uni-icons custom-prefix="iconfont" type="icon-zichan" size="30"
                                :color="themeColor"></uni-icons>
                        </view>
                        <view class="title">资产</view>
                    </view>
                    <view class="function-item">
                        <view class="icon">
                            <uni-icons custom-prefix="iconfont" type="icon-tongji" size="30"
                                :color="themeColor"></uni-icons>
                        </view>
                        <view class="title">统计</view>
                    </view>
                    <view class="function-item">
                        <view class="icon">
                            <uni-icons custom-prefix="iconfont" type="icon-yusuan" size="30"
                                :color="themeColor"></uni-icons>
                        </view>
                        <view class="title">预算</view>
                    </view>
                    <view class="function-item">
                        <view class="icon">
                            <uni-icons custom-prefix="iconfont" type="icon-tongyongdaoru" size="30"
                                :color="themeColor"></uni-icons>
                        </view>
                        <view class="title">导入</view>
                    </view>
                </view>
            </view>
        </view>
        <!-- 账目列表 -->
        <view class="account-list" v-if="groupedExpenses && Object.keys(groupedExpenses).length">
            <view :class="['account-item theme-bgc', index === 0 ? 'first' : '']"
                v-for="(expenses, date, index) in groupedExpenses" :key="date">
                <view class="plan-header theme-bgc-2">
                    <view class="header-title">
                        <text class="title">{{ formatDate(date) }}<text class="week">{{ getWeek(date) }}</text></text>
                    </view>
                    <view class="header-desc">
                        <text class="plan-num">
                            <!-- 正数相加 -->
                            <text class="income">收 {{ incomesNum(expenses) }}</text>
                            <text>支 {{ expensesNum(expenses) }}</text>
                        </text>
                    </view>
                </view>
                <view class="plan-body">
                    <view class="body-item" v-for="expense in expenses" :key="expense.ExpenseID"
                        @click="updateExpense(expense)" @longpress="openPopup(expense)">
                        <view class="content-box">
                            <view class="box-left" :style="{ backgroundColor: expenseCateMap[expense.Category].CategoryColor }">
                                <uni-icons custom-prefix="iconfont" :type="expenseCateMap[expense.Category].CategoryIcon"
                                    color="#fff" size="24"></uni-icons>
                            </view>
                            <view class="box-right">
                                <view class="plan-title">
                                    <text class="title">{{ expenseCateMap[expense.Category].CategoryName }}</text>
                                </view>
                                <view class="plan-desc">
                                    <text class="desc">{{ expense.Note }}</text>
                                </view>
                            </view>
                            <view class="box-last">
                                <text :class="['money', expense.Amount < 0 ? 'red' : 'green']">{{ expense.Amount
                                    }}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="no-data" v-else>暂无数据</view>
        <!-- 小浮窗 -->
        <movable-area class="movableArea">
            <movable-view class="movableView" direction="all" :x="x" :y="y" :out-of-bounds="false">
                <button class="win-service" @click="addExpense">
                    <uni-icons type="plusempty" size="30" color="#fff"></uni-icons>
                </button>
            </movable-view>
        </movable-area>
        <!-- 更多功能 -->
        <uni-popup ref="popupRef" background-color="#fff">
            <view class="popup-list">
                <view class="popup-item" @click="deleteExpense">
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
    </AppPage>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppPage from '@/components/AppPage'
import { getWeek, navTo, formatDate } from '@/utils/utils.js';
import { apiGetUserExpenses, apiGetAllExpensesCategory, apiDeleteExpense } from '@/services/api/expenses';
import { onShow, onLoad } from '@dcloudio/uni-app';

const themeColor = ref('#1baf59');
const x = ref('600rpx');
const y = ref('1000rpx');
// 获取分类数据
onLoad(() => {
    getExpenseCate();
})
onShow(() => {
    getExpenses();
})
// #region 查询
const yearIndex = ref(2);
const monthIndex = ref(3);
const years = ref(['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']);
const months = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
const selectedYear = ref(years.value[yearIndex.value]);
const selectedMonth = ref(months.value[monthIndex.value]);
let expenseCateList = ref([]);
const onDateChange = (e) => {
    selectedYear.value = years.value[e.detail.value[0]];
    selectedMonth.value = months.value[e.detail.value[1]];
    getExpenses();
}
const getExpenseCate = () => {
    apiGetAllExpensesCategory().then((res) => {
        expenseCateList.value = res.data;
    })
}

let accountList = ref([]);
const getExpenses = () => {
    apiGetUserExpenses(getApp().globalData.userInfo.UserID, selectedYear.value, selectedMonth.value).then(res => {
        accountList.value = res.data;
    })
}

// 收入计算
const incomesNum = (accountList) => {
    return accountList.reduce((sum, expense) => {
        return expense.Amount > 0 ? sum + expense.Amount : sum;
    }, 0);
}
// 支出计算
const expensesNum = (accountList) => {
    return accountList.reduce((sum, expense) => {
        return expense.Amount < 0 ? sum + expense.Amount : sum;
    }, 0);
}

// 按日期分组的计算属性
const groupedExpenses = computed(() => {
    const grouped = {};
    accountList.value.forEach(expense => {
        const dateKey = formatDate(expense.Date);
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(expense);
    });
    return grouped;
});

// 使用computed创建expenseCateList的map映射
const expenseCateMap = computed(() => {
    const map = {};
    expenseCateList.value.forEach(cate => {
        map[cate.CategoryID] = cate;
    });
    return map;
})
// 增加一条记录
const addExpense = () => {
    uni.navigateTo({
        url: '/subPackages/expenses/add/index'
    })
}
// #region 改
const updateExpense = (expense) => {
    navTo('/subPackages/expenses/add/index?isEdit=true&expense=' + JSON.stringify(expense))
}
// #endregion
// #region 删
const popupRef = ref(null)
const activeExpense = ref(null)
const openPopup = (expense) => {
    activeExpense.value = expense
    popupRef.value.open('bottom')
    // 触发手机抖动
    uni.vibrateShort();
}
const deleteExpense = () => {
    // 删除
    apiDeleteExpense(activeExpense.value.ExpenseID).then(res => {
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
            getExpenses()
        }
    })
}
// #endregion
</script>


<style lang="scss">
.win-service {
    background-color: v-bind(themeColor);
}

.fixed-box {
    position: fixed;
    width: 100%;
}

.top {
    display: flex;
    align-items: center;
    background-color: v-bind(themeColor);
    padding: 20rpx 20rpx 100rpx;
    color: #fff;

    .date {
        display: flex;
        flex-direction: column;
        width: 200rpx;
        padding-left: 20rpx;

        .month {
            font-size: 40rpx;
        }

        .top-title {
            margin-bottom: 10rpx;
        }
    }

    .money {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 400rpx;

        .item {
            display: flex;
            flex-direction: column;

            .num {
                font-size: 36rpx;
            }
        }
    }
}

.function-box {
    height: 70rpx;
    background-color: #f2f2f2;
}

.function-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 690rpx;
    margin: 0 auto;
    padding: 20rpx 0 15rpx;
    background-color: #fff;
    border-radius: 20rpx;
    // 向上偏移60%
    transform: translateY(-60%);

    .function-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 24rpx;

        .icon {
            margin-bottom: 10rpx;
        }
    }
}

.no-data {
    height: 90vh;
    text-align: center;
    line-height: 90vh;
}

.account-list {
    padding: 20rpx;

    .first {
        margin-top: 270rpx;
    }

    .account-item {
        margin-bottom: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;

        .plan-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20rpx;
            font-size: 26rpx;
            color: #888;
            background-color: #f8f8f8;
            border-radius: 20rpx;

            .header-title {

                .week {
                    margin-left: 10rpx;
                }
            }

            .income {
                margin-right: 50rpx;
            }
        }
    }
}

.body-item {
    height: 100rpx;

    .content-box {
        display: flex;
        align-items: center;

        .box-left {
            margin: 20rpx;
            padding: 10rpx;
            border-radius: 50%;
        }

        .box-right {
            width: 500rpx;

            .plan-title {
                .title {
                    font-size: 30rpx;
                }
            }

            .plan-desc {
                .desc {
                    font-size: 24rpx;
                    color: #888;
                }
            }
        }

        .box-last {
            width: 150rpx;
            margin-right: 20rpx;
            text-align: right;
            padding-right: 10rpx;

            .money {
                font-size: 32rpx;
            }

            .red {
                color: red;
            }

            .green {
                color: green;
            }
        }
    }
}
</style>
