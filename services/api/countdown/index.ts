import { request } from '@/utils/request.ts';
// -- 创建倒数纪念日表
// CREATE TABLE Countdowns (
//     CountdownID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     Name VARCHAR(100) DEFAULT '',
//     TargetDate DATE,
//     CreatedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
//     Reminder BOOLEAN DEFAULT 0,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );

export interface Countdown {
    UserID: number,
    Name: string,
    TargetDate: string,
    Reminder: boolean
}

export const apiGetUserCountdowns = (userID: number): Promise<Countdown[]> => {
    return request({
        url: `countdown/list?userID=${userID}`,
        method: 'GET',
    });
}

export const apiAddCountdown = (countdown: Countdown): Promise<Countdown> => {
    return request({
        url: `countdown/add`,
        method: 'POST',
        data: countdown
    });
}