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
interface PingResult {
    code: number;
    msg: string;
}
export const pingRange = (oldUrl: string, start: number = 100, end: number = 120): Promise<PingResult> => {
    return new Promise<PingResult>(async (resolve, reject) => {
        let timeOut = setTimeout(() => {
            // 查找新地址
            console.log(`开始ping 192.168.0.${start}到192.168.0.${end}`);
            let i = start;
            const timer = setInterval(async () => {
                if (i > end) {
                    clearInterval(timer);
                    resolve({
                        code: 0,
                        msg: `从192.168.0.${start}到192.168.0.${end} 未能ping通`
                    });
                }
                const currentI = ++i;
                try {
                    const res = await request({
                        url: `users/ping`,
                        method: 'GET'
                    }, `http://192.168.0.${currentI}:3838/`);
                    if (res) {
                        BASE_URL = `http://192.168.0.${currentI}:3838/`;
                        uni.setStorageSync('BASE_URL', BASE_URL);
                        clearInterval(timer);
                        resolve({
                            code: 1,
                            msg: BASE_URL
                        });
                    }
                } catch (error) {
                    console.log(`192.168.0.${currentI} ping 失败`);
                }
            }, 1000);
        }, 3000);
        // 尝试旧地址
        try {
            console.log(`开始ping ${oldUrl}`);
            const oldRes = await request({
                url: `users/ping`,
                method: 'GET'
            }, oldUrl);
            if (oldRes) {
                console.log(`旧地址${oldUrl} ping成功`);
                resolve({
                    code: 2,
                    msg: oldUrl
                });
                clearTimeout(timeOut);
                return;
            }
        } catch (error) {
            console.log(`旧地址${oldUrl} ping失败`);
        }
    });
}

const init = () => {
    if (uni.getStorageSync('BASE_URL')) {
        BASE_URL = uni.getStorageSync('BASE_URL');
    }
    pingRange(BASE_URL, 100, 120);
}
// 初始化
init();

export const setBaseUrl = (url: string) => {
    BASE_URL = url;
    uni.setStorageSync('BASE_URL', BASE_URL);
}