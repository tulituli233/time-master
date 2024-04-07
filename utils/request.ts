// request.ts
import { UniAppRequestOptions, UniAppRequestSuccessCallback, UniAppRequestFailCallback } from 'uni';

let BASE_URL = 'http://192.168.0.101:3838/';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

export const request = (options: UniAppRequestOptions, assignedBaseUrl?: string): Promise<any> => {
    const baseUrl = assignedBaseUrl || BASE_URL;
    const requestOptions: UniAppRequestOptions = {
        ...options,
        url: `${baseUrl}${options.url}`,
        header: {
            ...DEFAULT_HEADERS,
            ...options.header
        }
    };

    return new Promise((resolve, reject) => {
        uni.request({
            ...requestOptions,
            success: (res: UniAppRequestSuccessCallback) => {
                resolve(res.data);
            },
            fail: (err: UniAppRequestFailCallback) => {
                reject(err);
            }
        });
    });
};

// 通过遍历指定区间的IPV4地址，测试服务器连接
const pingRange = async (oldUrl: string, start: number, end: number) => {
    const oldRes = await request({
        url: `users/ping`,
        method: 'GET'
    }, oldUrl).catch(() => { });
    if (oldRes) {
        return;
    }
    let i = start;
    const timer = setInterval(async () => {
        if (i > end) {
            clearTimeout(timer);
            return;
        }
        const res = await request({
            url: `users/ping`,
            method: 'GET'
        }, `http://192.168.0.${i}:3838/`).catch(() => { });
        if (res) {
            BASE_URL = `http://192.168.0.${i}:3838/`;
            uni.setStorageSync('BASE_URL', BASE_URL);
            clearTimeout(timer);
            return;
        }
        i++;
    }, 1000);
}

const init = () => {
    if (uni.getStorageSync('BASE_URL')) {
        BASE_URL = uni.getStorageSync('BASE_URL');
    }
    pingRange(BASE_URL, 101, 120);
}
// 初始化
init();

export const setBaseUrl = (url: string) => {
    BASE_URL = url;
    uni.setStorageSync('BASE_URL', BASE_URL);
}