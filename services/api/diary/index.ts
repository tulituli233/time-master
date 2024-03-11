import { request } from '@/utils/request.ts';
// -- 创建日记表
// CREATE TABLE Diaries (
//     DiaryID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     Title VARCHAR(100) DEFAULT '',
//     Content TEXT,
//     Date DATETIME DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );

export interface Diary {
    UserID: number,
    Title: string,
    Content: string,
    Date: string
}

export const apiGetUserDiaries = (userID: number): Promise<Diary[]> => {
    return request({
        url: `diary/list?userID=${userID}`,
        method: 'GET',
    });
}

export const apiAddDiary = (diary: Diary): Promise<Diary> => {
    return request({
        url: `diary/add`,
        method: 'POST',
        data: diary
    });
}