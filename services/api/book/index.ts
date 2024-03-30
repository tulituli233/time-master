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

// 根据小说ID和ChapterNumber获取小说章节
export const apiGetNovelChapter = (novelID: number, chapterNumber: number): Promise<NovelChapter> => {
    return request({
        url: `book/chapter?NovelID=${novelID}&ChapterNumber=${chapterNumber}`,
        method: 'GET',
    })
}

// 根据chapterID修改小说章节内容
export const apiUpdateNovelChapter = (data: { ChapterID: number, ChapterContent: string }): Promise<NovelChapter> => {
    return request({
        url: `book/updateChapter`,
        method: 'POST',
        data
    })
}

// 删除小说
export const apiDeleteNovel = (novelID: number): Promise<Novel> => {
    return request({
        url: `book/delete?NovelID=${novelID}`,
        method: 'GET',
    })
}

// 创建小说
export const apiCreateNovel = (data: { Title: string, Author: string }): Promise<Novel> => {
    return request({
        url: 'book/create',
        method: 'POST',
        data
    })
}

// 修改小说
export const apiUpdateNovel = (data: { NovelID: number, Title: string, Author: string }): Promise<Novel> => {
    return request({
        url: 'book/update',
        method: 'POST',
        data
    })
}

// 新增章节
export const apiAddNovelChapter = (data: { NovelID: number, ChapterTitle: string, ChapterContent: string }): Promise<NovelChapter> => {
    return request({
        url: 'book/addChapter',
        method: 'POST',
        data
    })
}

// 下载小说
export const apiDownloadNovel = (novelID: number): Promise<Novel> => {
    return request({
        url: `book/download?NovelID=${novelID}`,
        method: 'GET',
    })
}