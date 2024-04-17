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
                <uni-datetime-picker class="no-border" type="datetime" v-model="expenseData.Date"
                    @change="selectDate" />
            </view>
            <view class="display">
                <input class="note" type="text" placeholder="添加备注" v-model="expenseData.Note" />
                <view class="input">{{ expenseData.Amount }}</view>
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
import { ref, reactive, computed } from 'vue';
import { apiGetAllExpensesCategory, apiAddExpense, apiUpdateExpense } from '@/services/api/expenses';
import { onLoad } from '@dcloudio/uni-app';
import { formatDateTime } from '@/utils/utils.js';

// 获取分类数据
const isEdit = ref(false);
onLoad((e) => {
    isEdit.value = e.isEdit ? true : false
    if (isEdit.value) {
        let expense = JSON.parse(e.expense)
        expenseData.ExpenseID = expense.ExpenseID
        expenseData.Date = expense.Date
        expenseData.Note = expense.Note
        expenseData.Amount = Math.abs(expense.Amount)
        expense.Amount > 0 ? activeTab.value = 1 : activeTab.value = 0
        expense.Amount > 0 ? selectedIncomeCateID.value = expense.Category : selectedExpenseCateID.value = expense.Category
    }
    getExpenseCate();
})
const expenseData = reactive({
    UserID: getApp().globalData.userInfo.UserID,
    Date: formatDateTime(new Date()),
    Amount: '',
    Category: 1,
    Note: '',
});
let expenseCateList = ref([]);
const getExpenseCate = () => {
    apiGetAllExpensesCategory().then((res) => {
        expenseCateList.value = res.data;
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

const tabs = ['支出', '收入'];
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
        expenseData.Amount = expenseData.Amount + ''
        expenseData.Amount = expenseData.Amount.slice(0, -1);
    } else if (key === '=') {
        if (!calculate()) {
            return
        }
    } else if (key === '完成') {
        if (!calculate()) {
            return
        }
        addExpense();
    } else {
        key += '';
        expenseData.Amount += key;
    }
};
// 使用eval计算
const calculate = () => {
    try {
        expenseData.Amount = eval(expenseData.Amount).toFixed(2);
    } catch (error) {
        uni.showToast({
            icon: 'error',
            title: '计算错误,输入有误'
        })
        return false
    }
    return true
}
const dateValue = ref(formatDateTime(new Date()));
// 选择日期
const selectDate = (e) => {
    // 弹出uni日期选择器
}
// ##region 新增记账
const addExpense = async () => {
    expenseData.Category = activeTab.value === 0 ? selectedExpenseCateID.value : selectedIncomeCateID.value;
    expenseData.Date = formatDateTime(expenseData.Date);
    let errMsg = ''
    if (expenseData.Amount == '') {
        errMsg = '请输入金额'
    } else if (isNaN(parseFloat(expenseData.Amount))) {
        errMsg = '请输入正确的金额'
        expenseData.Amount = ''
    } else if (expenseData.Amount < 0) {
        errMsg = '不能输入负金额'
        expenseData.Amount = Math.abs(expenseData.Amount)
    } else if (!expenseData.Date) {
        errMsg = '请选择日期'
    }
    if (errMsg) {
        uni.showToast({
            icon: 'error',
            title: errMsg
        })
        return
    }
    expenseData.Amount = activeTab.value === 0 ? -expenseData.Amount : expenseData.Amount;
    let api = isEdit.value ? apiUpdateExpense : apiAddExpense
    let res = await api(expenseData);
    if (res.code === 0 || !res.code) {
        uni.showToast({
            icon: 'error',
            title: res.msg || '网络异常'
        })
        expenseData.Amount = Math.abs(expenseData.Amount)
    } else {
        uni.showToast({
            title: res.msg
        })
        uni.navigateBack()
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
