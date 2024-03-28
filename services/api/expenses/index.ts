import { request } from '@/utils/request.ts';

// -- 创建记账表
// CREATE TABLE Expenses (
//     ExpenseID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     Amount FLOAT DEFAULT 0,
//     Category INT NOT NULL,
//     Date DATETIME DEFAULT CURRENT_TIMESTAMP,
//     Note TEXT,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );

// -- 创建记账类别
// CREATE TABLE ExpensesCategory (
//     CategoryID INT PRIMARY KEY AUTO_INCREMENT,
//     CategoryName VARCHAR(10),
//     CategoryIcon VARCHAR(30),
//     CategoryColor VARCHAR(10),
//     CategoryType INT
// );

interface Expense {
    UserID: number;
    Amount: number;
    Category: number;
    Date: string;
    Note: string;
}

interface ExpensesCategory {
    CategoryID: number;
    CategoryName: string;
    CategoryIcon: string;
    CategoryColor: string;
    CategoryType: number;
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

// 获取所有分类
export const apiGetAllExpensesCategory = (): Promise<ExpensesCategory[]> => {
    return request({
        url: `expenses/allCate`,
        method: 'GET',
    });
}

// 修改记录
export const apiUpdateExpense = (expense: Expense): Promise<Expense> => {
    return request({
        url: `expenses/update`,
        method: 'POST',
        data: expense
    });
}

// 删除记录
export const apiDeleteExpense = (expenseID: number): Promise<Expense> => {
    return request({
        url: `expenses/delete?ExpenseID=${expenseID}`,
        method: 'GET',
    });
}