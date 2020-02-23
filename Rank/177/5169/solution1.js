/**
 * https://leetcode-cn.com/problems/number-of-days-between-two-dates/
 * 
 * 5169. 日期之间隔几天
 * 
 * Easy
 * 
 * 80ms 100.00%
 * 34mb 100.00%
 */
const ONE_DAY = 24 * 60 * 60 * 1000;

const daysBetweenDates = (date1, date2) => {
  const [y1, m1, d1] = date1.split('-');
  const [y2, m2, d2] = date2.split('-');
  const time1 = new Date(y1, m1 - 1, d1, 0, 0, 0);
  const time2 = new Date(y2, m2 - 1, d2, 0, 0, 0);
  return Math.abs(time2 - time1) / ONE_DAY;
}