/**
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * 
 * 面试题62. 圆圈中最后剩下的数字
 * 
 * Easy
 * 
 * 64ms 96.77%
 * 35mb 100.00%
 */
const lastRemaining = (n, m) => {
  let ans = 0;
  for (let i = 2; i != n + 1; i++) {
    ans = (m + ans) % i;
  }
  return ans;
}