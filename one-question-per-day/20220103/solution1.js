/**
 * 手动计算
 * @param {*} day 
 * @param {*} month 
 * @param {*} year 
 * @returns 
 */
const dayOfTheWeek = function(day, month, year) {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    /* 输入年份之前的年份的天数贡献 */
    let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
    /* 输入年份中，输入月份之前的月份的天数贡献 */
    for (let i = 0; i < month - 1; ++i) {
        days += monthDays[i];
    }
    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
        days += 1;
    }
    /* 输入月份中的天数贡献 */
    days += day;
    return week[(days + 3) % 7];
};