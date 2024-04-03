// request.ts
import { UniAppRequestOptions, UniAppRequestSuccessCallback, UniAppRequestFailCallback } from 'uni';

let BASE_URL = 'http://192.168.0.101:3838/';

const init = () => {
    if (uni.getStorageSync('BASE_URL')) {
        BASE_URL = uni.getStorageSync('BASE_URL');
    }
}
// 初始化
init();

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

export const request = (options: UniAppRequestOptions): Promise<any> => {
    const requestOptions: UniAppRequestOptions = {
        ...options,
        url: `${BASE_URL}${options.url}`,
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

export const setBaseUrl = (url: string) => {
    BASE_URL = url;
    uni.setStorageSync('BASE_URL', BASE_URL);
}