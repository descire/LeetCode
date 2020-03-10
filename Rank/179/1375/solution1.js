/**
 * https://leetcode-cn.com/problems/bulb-switcher-iii/
 * 
 * 1375. 灯泡开关 III
 * 
 * Medium
 * 
 * 64ms 100.00%
 * 41mb 100.00%
 * 
 * 重点如何保证当前是 前 n 盏灯全亮
 */

const numTimesAllBlue = light => {
  let ans = 0;
  let currentSum = 0;
  for (let i = 0; i < light.length; i++) {
    currentSum += light[i];
    if (currentSum === (i + 1)*(i + 2) / 2) {
      ans++;
    }
  }
  return ans;
}