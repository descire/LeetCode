/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 * 
 * 739. 每日温度
 * 
 * Medium
 * 
 * 140ms 100.00%
 * 42.6mb 44.44%
 */
const dailyTemperatures = T => {
  const max = T.length;
  const ans = new Array(max).fill(0);

  const stack = [];

  for (let i = 0, max = T.length; i < max; i++) {
    while(stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }
  return ans;
}