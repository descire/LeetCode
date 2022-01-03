/**
 * 调用方法
 */
 const dayOfTheWeek = function(day, month, year) {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[new Date(year, month - 1, day).getDay()];
};