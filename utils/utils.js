// 跳转
export const navTo = (url) => {
    console.log('url', url);
    uni.navigateTo({
        url
    })
}