// request.ts

import { UniAppRequestOptions, UniAppRequestSuccessCallback, UniAppRequestFailCallback } from 'uni';

// const BASE_URL = 'http://localhost:3838/';
const BASE_URL = 'http://192.168.0.104:3838/';

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
