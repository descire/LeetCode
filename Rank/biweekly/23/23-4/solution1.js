/**
 * https://leetcode-cn.com/problems/reducing-dishes/
 * 
 * 做菜顺序
 * 
 * Hard
 * 
 * 64ms 100.00%
 * 34.6mb 100.00%
 */
const maxSatisfaction = satisfaction => {
  satisfaction.sort((a, b) => b - a);

  let ans = 0;
  let sum = 0;
  let current = 0;
  for (let i = 0, max = satisfaction.length; i < max; i++) {
    current += satisfaction[i];
    sum += current;
    ans = Math.max(ans, sum);
  }

  return ans;
}