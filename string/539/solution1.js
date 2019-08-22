/**
 * https://leetcode-cn.com/problems/minimum-time-difference/
 * 
 * 539. 最小时间差
 * 
 * Medium
 * 
 * 144ms 64.86%
 * 39.3mb 23.81%
 * 
 * 特别需要注意 这是一个环。
 * 
 * 1、将字符串转化为分钟数
 * 2、排序
 * 3、计算临界点
 * 
 * O(nlogn) 
 */
const findMinDifference = timePoints => {
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