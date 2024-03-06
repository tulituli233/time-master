import { request } from '@/utils/request.ts';

interface Expense {
    UserID: number;
    Amount: number;
    Category: number;
    Date: string;
    Note: string;
}
// 添加记录
export const apiAddExpense = (expense: Expense): Promise<Expense> => {
    return request({
        url: `expenses/add`,
        method: 'POST',
        data: expense
    });
}

// 获取指定用户支出
export const apiGetUserExpenses = (userID: number): Promise<Expense[]> => {
    return request({
        url: `expenses/list?userID=${userID}`,
        method: 'GET',
    });
}