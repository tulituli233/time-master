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

// -- 创建喝水类型
// CREATE TABLE WaterTypes (
//     WaterID INT PRIMARY KEY AUTO_INCREMENT,
//     WaterName VARCHAR(10),
//     WaterIcon VARCHAR(30),
//     WaterColor VARCHAR(10) DEFAULT '',
//     HydratePercent INT DEFAULT 100
// );

export interface WaterRecord {
    UserID: number,
    WaterID: number,
    DateTime: string,
    Amount: number
}

export interface WaterType {
    WaterID: number,
    WaterName: string,
    WaterIcon: string,
    WaterColor: string,
    HydratePercent: number
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

// 修改喝水记录
export const apiUpdateWaterRecord = (record: WaterRecord): Promise<WaterRecord> => {
    return request({
        url: `water/update`,
        method: 'POST',
        data: record
    })
}

// 删除喝水记录
export const apiDeleteWaterRecord = (recordID: number): Promise<WaterRecord> => {
    return request({
        url: `water/delete?RecordID=${recordID}`,
        method: 'GET',
    })
}

// 获取所有喝水类型
export const apiGetAllWaterTypes = (): Promise<WaterType[]> => {
    return request({
        url: `water/allTypes`,
        method: 'GET',
    })
}