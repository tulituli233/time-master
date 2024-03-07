import { request } from '@/utils/request.ts';

// -- 创建待办事项表
// CREATE TABLE Tasks (
//     TaskID INT PRIMARY KEY AUTO_INCREMENT,
//     UserID INT,
//     Title VARCHAR(100) DEFAULT '',
//     Description TEXT,
//     DueDate DATETIME DEFAULT CURRENT_TIMESTAMP,
//     Priority INT DEFAULT 0,
//     Status INT DEFAULT 0,
//     FOREIGN KEY (UserID) REFERENCES Users(UserID)
// );
export interface Task {
    UserID: number,
    Title: string,
    Description: string,
    DueDate: string,
    Priority: number,
    Status: number,
}

// 获取指定用户的待办事项
export const apiGetUserTasks = (userID: number): Promise<Task[]> => {
    return request({
        url: `tasks/list?userID=${userID}`,
        method: 'GET',
    });
}

// 添加任务
export const apiAddTask = (task: Task): Promise<Task> => {
    return request({
        url: `tasks/add`,
        method: 'POST',
        data: task
    });
}
// 修改tasks
export const apiUpdateTask = (task: Task): Promise<Task> => {
    return request({
        url: `tasks/update`,
        method: 'POST',
        data: task
    });
}