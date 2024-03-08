import { request } from '@/utils/request.ts';
// -- 创建备忘录表
// CREATE TABLE Memos (
//     MemoID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     Title VARCHAR(100) DEFAULT '',
//     Content TEXT,
//     Type INT DEFAULT 0,
//     CreatedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );
export interface Memo {
    MemoID: number,
    UserID: number,
    Title: string,
    Content: string,
    Type: number,
    CreatedDate: string
}

// 获取指定用户的备忘录
export const apiGetUserMemos = (userID: number): Promise<Memo[]> => {
    return request({
        url: `memos/list?userID=${userID}`,
        method: 'GET',
    });
};

// 添加备忘录
export const apiAddMemo = (memo: Memo): Promise<Memo> => {
    return request({
        url: `memos/add`,
        method: 'POST',
        data: memo
    });
}