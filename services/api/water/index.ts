import { request } from '@/utils/request.ts';

// -- 创建喝水记录表
// CREATE TABLE WaterRecords (
//     RecordID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     WaterID INT,
//     DateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
//     Amount INT DEFAULT 0,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );

export interface WaterRecord {
    UserID: number,
    WaterID: number,
    DateTime: string,
    Amount: number
}

// 添加喝水记录
export const apiAddWaterRecord = (record: WaterRecord): Promise<WaterRecord> => {
    return request({
        url: `water/add`,
        method: 'POST',
        data: record
    })
}

// 获取指定用户的喝水记录
export const apiGetUserWaterRecords = (userID: number): Promise<WaterRecord[]> => {
    return request({
        url: `water/list?userID=${userID}`,
        method: 'GET',
    })
}