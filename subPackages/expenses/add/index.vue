<template>
    <view class="content">
        <!-- tabbar选择栏 -->
        <view class="tabbar">
            <view class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                :class="{ 'active': activeTab === index }">
                {{ tab }}
            </view>
        </view>
        <!-- 分类选择 -->
        <view class="select" v-if="activeTab === 0">
            <view class="select-item" v-for="(cate, index) in incomeCate" :key="index"
                @click="selectCate(cate.CategoryID)">
                <view class="icon"
                    :style="{ border: selectedExpenseCateID === cate.CategoryID ? `5rpx solid ${cate.CategoryColor}` : 'none' }">
                    <view class="padding" :style="{ backgroundColor: cate.CategoryColor }">
                        <uni-icons custom-prefix="iconfont" :type="cate.CategoryIcon" color="#fff"
                            size="30"></uni-icons>
                    </view>
                </view>
                <view class="name">{{ cate.CategoryName }}</view>
            </view>
        </view>
        <view class="select" v-if="activeTab === 1">
            <view class="select-item" v-for="(cate, index) in expenseCate" :key="index"
                @click="selectCate(cate.CategoryID)">
                <view class="icon"
                    :style="{ border: selectedIncomeCateID === cate.CategoryID ? `5rpx solid ${cate.CategoryColor}` : 'none' }">
                    <view class="padding" :style="{ backgroundColor: cate.CategoryColor }">
                        <uni-icons custom-prefix="iconfont" :type="cate.CategoryIcon" color="#fff"
                            size="30"></uni-icons>
                    </view>
                </view>
                <view class="name">{{ cate.CategoryName }}</view>
            </view>
        </view>
        <view class="select" v-if="activeTab === 2">转账</view>
        <!-- 记账输入器固定在页面底部，互动包括备注添加、金额输入（数字键盘）、分类选择 -->
        <view class="numeric-keypad">
            <view class="date">
                <uni-datetime-picker class="no-border" type="datetime" v-model="dateValue" @change="selectDate" />
            </view>
            <view class="display">
                <input class="note" type="text" placeholder="添加备注" v-model="noteValue" />
                <view class="input">{{ inputValue }}</view>
            </view>
            <table>
                <tr v-for="(row, rowIndex) in keypadLayout" :key="rowIndex">
                    <td v-for="(key, keyIndex) in row" :key="keyIndex" @click="handleKeyPress(key)">
                        {{ key }}
                    </td>
                </tr>
            </table>
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { apiGetAllExpensesCategory, apiAddExpense } from '@/services/api/expenses';
import { onLoad } from '@dcloudio/uni-app';
import { formatDateTime } from '@/utils/utils.js';

// 获取分类数据
onLoad(() => {
    getExpenseCate();
})
let expenseCateList = ref([]);
const getExpenseCate = () => {
    apiGetAllExpensesCategory().then((res) => {
        expenseCateList.value = res.data;
        console.log('expenseCateList', expenseCateList.value);
    })
}

const incomeCate = computed(() => {
    return expenseCateList.value.filter(cate => {
        return cate.CategoryType === 1
    })
})
const expenseCate = computed(() => {
    return expenseCateList.value.filter(cate => {
        return cate.CategoryType === 2
    })
})

const tabs = ['支出', '收入', '转账'];
const activeTab = ref(0);

const selectTab = (index) => {
    activeTab.value = index;
    // uni.showToast({
    //     title: `切换到${tabs[index]}`,
    // })
};
// 选中的支出分类
const selectedExpenseCateID = ref(1);
// 选中的收入分类
const selectedIncomeCateID = ref(1);
const selectCate = (cateID) => {
    if (activeTab.value === 0) {
        selectedExpenseCateID.value = cateID;
    } else {
        selectedIncomeCateID.value = cateID;
    }
}

// 数字键盘
const keypadLayout = [
    [1, 2, 3, '+'],
    [4, 5, 6, '-'],
    [7, 8, 9, '完成'],
    ['.', 0, 'DEL', '=']
];
const noteValue = ref('');
const inputValue = ref('');
const handleKeyPress = (key) => {
    if (key === 'DEL') {
        // Handle delete key press
        inputValue.value = inputValue.value.slice(0, -1);
    } else if (key === '=') {
        // Handle equal key press
        // Example: Evaluate the expression
        inputValue.value = eval(inputValue.value);
    } else if (key === '完成') {
        // Handle done key press
        // Example: Submit the form or close the keypad
        addExpense();
    } else {
        // Append the pressed key to the input value
        inputValue.value += key;
    }
};
const dateValue = ref(formatDateTime(new Date()));
// 选择日期
const selectDate = (e) => {
    // 弹出uni日期选择器
    console.log('选择日期', e);
}
// ##region 新增记账
const addExpense = async () => {
    let Amount = activeTab.value === 0 ? -inputValue.value : inputValue.value;
    let Category = activeTab.value === 0 ? selectedExpenseCateID.value : selectedIncomeCateID.value;
    let expense = {
        UserID: getApp().globalData.userInfo.UserID,
        Amount,
        Category,
        Date: dateValue.value,
        Note: noteValue.value
    }
    let errMsg = ''
	if (!expense.Amount) {
		errMsg = '请输入金额'
	} else if (!expense.Date) {
		errMsg = '请选择日期'
	}
	if (errMsg) {
		uni.showToast({
			icon: 'error',
			title: errMsg
		})
		return
	}
    console.log('expense', expense);
    let res = await apiAddExpense(expense);
    if (res.code === 0) {
        uni.showToast({
            title: res.msg,
        })
    } else {
        uni.showToast({
            title: res.msg,
        })
    }
};
// ##endregion
</script>

<style lang="scss">
.tabbar {
    width: 750rpx;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
}

.tab {
    width: 100rpx;
    padding: 10px;
}

.active {
    color: #1baf59;
    font-weight: bold;
    border-bottom: #1baf59 5rpx solid;
}

.select {
    width: 750rpx;
    display: flex;
    flex-wrap: wrap;

    .select-item {
        width: 149rpx;
        height: 180rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .icon {
            padding: 5rpx;
            border-radius: 50%;
            border: 5rpx solid #1baf59;

            .padding {
                padding: 10rpx;
                border-radius: 50%;
            }
        }

        .name {
            font-size: 24rpx;
        }
    }
}

::v-deep .uni-date-x--border {
    border: none;
}

.numeric-keypad {
    position: fixed;
    bottom: 0;
    left: 0;
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
        height: 100rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-top: 1px solid #ddd;

        .note {
            width: 350rpx;
            margin-left: 20rpx;
        }

        .input {
            width: 250rpx;
            margin-right: 20rpx;
            font-size: 50rpx;
            font-weight: bold;
            color: red;
            text-align: right;
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
        font-size: 40rpx;

        &:hover {
            background-color: #ddd;
        }
    }
}
</style>
