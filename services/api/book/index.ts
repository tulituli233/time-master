import { request } from '@/utils/request.ts';

// -- 创建小说表
// CREATE TABLE Novels (
//     NovelID INT PRIMARY KEY AUTO_INCREMENT,
//     Title VARCHAR(100) DEFAULT '',
//     Author VARCHAR(100) DEFAULT '',
//     CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );

// -- 创建小说章节表
// CREATE TABLE NovelChapters (
//     ChapterID INT PRIMARY KEY AUTO_INCREMENT,
//     NovelID INT,
//     Title VARCHAR(100) DEFAULT '',
//     Author VARCHAR(100) DEFAULT '',
//     ChapterNumber INT,
//     ChapterTitle VARCHAR(100) DEFAULT '',
//     ChapterContent TEXT
// );

export interface Novel {
    NovelID: number,
    Title: string,
    Author: string,
    CreatedAt: string,
    UpdatedAt: string
}

export interface NovelChapter {
    ChapterID: number,
    NovelID: number,
    Title: string,
    Author: string,
    ChapterNumber: number,
    ChapterTitle: string,
    ChapterContent: string
}

// 获取小说列表
export const apiGetNovels = (): Promise<Novel[]> => {
    return request({
        url: 'book/list',
        method: 'GET',
    });
}

// 获取小说章节列表
export const apiGetNovelChapters = (novelID: number): Promise<NovelChapter[]> => {
    return request({
        url: `book/chapters?NovelID=${novelID}`,
        method: 'GET',
    })
}

// 根据NovelID或者ChapterID获取指定小说章节
export const apiGetNovelChapter = ({ chapterID, novelID }: { chapterID?: number, novelID?: number }): Promise<NovelChapter> => {
    return request({
        url: `book/chapter?${chapterID ? `ChapterID=${chapterID}` : `NovelID=${novelID}`}`,
        method: 'GET',
    })
}