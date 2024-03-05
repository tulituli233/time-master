<template>
    <view class="content">
        <view class="fixed-box">
            <view class="top">
                <view class="date">
                    <view class="top-title">2024年</view>
                    <view class="month">2月</view>
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
            <view class="function-box">
                <view class="function-list">
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
            <view :class="['account-item', index === 0 ? 'first' : '']"
                v-for="(expenses, date, index) in groupedExpenses" :key="date">
                <view class="plan-header">
                    <view class="header-title">
                        <text class="title">{{ date }}<text class="week">{{ getWeek(date) }}</text></text>
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
                    <view class="body-item" v-for="expense in expenses" :key="expense.ExpenseID">
                        <view class="content-box">
                            <view class="box-left"
                                :style="{ backgroundColor: accountCateEnum.getCategory(expense.Category).color }">
                                <uni-icons custom-prefix="iconfont" :type="getIconType(expense.Category)" color="#fff"
                                    size="24"></uni-icons>
                            </view>
                            <view class="box-right">
                                <view class="plan-title">
                                    <text class="title">{{ expense.Category }}</text>
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
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getWeek } from '@/utils/utils.js';
import accountCateEnum from '/enums/accountCateEnum';
// 页面主题色
const themeColor = ref('#1baf59');
const x = ref('600rpx');
const y = ref('1000rpx');

// 账单列表
const accountList = [
    {
        ExpenseID: 1,
        UserID: 1,
        Amount: -50.00,
        Category: 1,
        Date: '2024-03-01T12:00:00Z',
        Note: 'Bought groceries for the week'
    },
    {
        ExpenseID: 2,
        UserID: 1,
        Amount: -30.00,
        Category: 2,
        Date: '2024-03-02T12:00:00Z',
        Note: 'Dinner with friends'
    },
    {
        ExpenseID: 3,
        UserID: 2,
        Amount: -20.00,
        Category: 1,
        Date: '2024-03-02T12:00:00Z',
        Note: 'Bus fare'
    },
    {
        ExpenseID: 4,
        UserID: 1,
        Amount: -100.00,
        Category: 2,
        Date: '2024-03-03T12:00:00Z',
        Note: 'Bought new clothes'
    },
    {
        ExpenseID: 5,
        UserID: 1,
        Amount: 5000.00,
        Category: 3,
        Date: '2024-03-03T12:00:00Z',
        Note: '工资'
    }
];
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
// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric'
    });
}

// 按日期分组的计算属性
const groupedExpenses = computed(() => {
    const grouped = {};
    accountList.forEach(expense => {
        const dateKey = formatDate(expense.Date);
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(expense);
    });
    console.log('grouped', grouped);
    return grouped;
});

// 根据类别获取对应的图标类型
const getIconType = (category) => {
    return accountCateEnum.getCategory(category).icon || 'icon-shoujizhendong';
};

// 增加一条记录
const addExpense = () => {
    uni.navigateTo({
        url: '/subPackages/jizhang/add/index'
    })
    // uni.navigateTo({
    //     url: '/subPackages/test/NumericKeypad/index'
    // })
}
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
