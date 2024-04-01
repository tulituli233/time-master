import LunarCalendar from 'lunar-calendar';

// 跳转
export const navTo = (url) => {
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

// 将时间戳转换为周几
export const getWeek = (date) => {
    let week = new Date(date).getDay() === 0 ? '周日' : '周' + '日一二三四五六'.charAt(new Date(date).getDay())
    return week
}

// 格式化时间，格式为 YYYY-MM-DD
export function formatDate(date) {
    date = new Date(date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}
// 格式化时间，格式为 YYYY-MM-DD HH:mm:ss
export function formatDateTime(date) {
    date = new Date(date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return `${formattedDate} ${formattedTime}`;
}
// formatDateToMonth 输出一月，二月...
export function formatDateToMonth(date) {
    date = new Date(date);
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return monthNames[date.getMonth()];
}
// formatDateToDay 输出01、02...
export function formatDateToDay(date) {
    return ('0' + new Date(date).getDate()).slice(-2);
}
// formatDateToTime 输出00:00
export function formatDateToTime(date) {
    const hours = ('0' + new Date(date).getHours()).slice(-2);
    const minutes = ('0' + new Date(date).getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
}
// 格式化农历
// export function formatDateLunar(date) {
//     date = new Date(date);
//     const lunar = lunarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
//     return lunar; // 返回农历日期的字符串表示
// }

export function formatDateLunar(date) {
    date = new Date(date);
    const lunarDate = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return `(${lunarDate.lunarMonthName}${lunarDate.lunarDayName})`; // 返回农历日期的字符串表示
}