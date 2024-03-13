import { request } from '@/utils/request.ts';
// -- 创建用户表
// CREATE TABLE Users (
//     UserID INT PRIMARY KEY AUTO_INCREMENT,
//     Username VARCHAR(50) DEFAULT '',
//     Password VARCHAR(100) DEFAULT '',
//     Gender VARCHAR(1) DEFAULT '',
//     Phone VARCHAR(20) DEFAULT '',
//     Address VARCHAR(255) DEFAULT '',
//     TargetWater INT DEFAULT 0,
//     Avatar VARCHAR(255) DEFAULT ''
// );

export interface User {
    UserID: number,
    Username: string,
    Password: string,
    Gender: string,
    Phone: string,
    Address: string,
    TargetWater: number,
    Avatar: string
}

export const apiLogin = (credentials: { Phone: string, Password: string }): Promise<User> => {
    return request({
        url: `users/login`,
        method: 'POST',
        data: credentials
    });
};

export const apiRegister = (userData: { Phone: string, Password: string }): Promise<User> => {
    return request({
        url: `users/reguster`,
        method: 'POST',
        data: userData
    });
};

