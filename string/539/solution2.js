/**
 * https://leetcode-cn.com/problems/minimum-time-difference/
 * 
 * 539. 最小时间差
 * 
 * Medium
 * 
 * 优化
 * 
 * 前一种解法主要消耗的时间在于 列表的长度 
 * 
 * 所有的时间字符串的种类只有 24 * 60 ，所以一旦超过这个数量就会存在重复，那么最小时间差就是 0 
 * 
 * 108ms 94.59%
 * 37.1mb 85.71%
 *
 */
const findMinDifference = timePoints => {
  if (timePoints.length > 60 * 24) {
    return 0
  }
  const timestamps = timePoints.map(str => computedTimstmp(str));
  timestamps.sort((a, b) => a - b);
  let ans = Number.MAX_SAFE_INTEGER;
  const max = timestamps.length;
  for (let i = 1; i < max; i++) {
    ans = Math.min(timestamps[i] - timestamps[i - 1], ans);
  }
  // 连接点
  ans = Math.min(timestamps[0] + 24 * 60 - timestamps[max - 1], ans);
  return ans;
}

function computedTimstmp(str) {
  const [hours, minutes] = str.split(':');
  const hoursNumber = Number.parseInt(hours, 10);
  const minutesNumner = Number.parseInt(minutes, 10);
  return hoursNumber * 60 + minutesNumner;
}