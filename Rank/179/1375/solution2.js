/**
 * https://leetcode-cn.com/problems/bulb-switcher-iii/
 * 
 * 1375. 灯泡开关 III
 * 
 * Medium
 * 
 * 64ms 100.00%
 * 41.1mb 100.00%
 * 
 * 重点如何保证当前是 前 n 盏灯全亮
 */

const numTimesAllBlue = light => {
  let ans = 0;
  let currentMaxIndex = 0;
  for (let i = 0, max = light.length; i < max; i++) {
    currentMaxIndex = Math.max(currentMaxIndex, light[i])
    if (currentMaxIndex === i + 1) {
      ans++;
    }
  }
  return ans;
}