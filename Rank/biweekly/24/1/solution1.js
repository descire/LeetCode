/**
 * https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * 
 * 5372. 逐步求和得到正数的最小值
 * 
 * Easy 
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
const minStartValue = nums => {
  let ans = 0;
  let currentSum = 0;
  for (let i = 0, max = nums.length; i < max; i++) {
    currentSum += nums[i];
    if (currentSum < 1) {
      ans += Math.abs(currentSum) + 1;
      currentSum = 1;
    }
  }
  if (ans === 0) {
    return 1;
  }
  return ans;
}