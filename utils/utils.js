// 跳转
export const navTo = (url) => {
    console.log('url', url);
    uni.navigateTo({
        url
    })
}

// 将时间戳转换为2021-06-01
export const timestampToTime = (timestamp) => {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    return Y + M + D
}