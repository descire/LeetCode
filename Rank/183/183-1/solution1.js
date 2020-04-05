/**
 * https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order/submissions/
 * 
 * 非递增顺序的最小子序列
 * 
 * Easy
 * 
 * 80ms 100%
 * 35.5mb 100.00%
 */
const minSubsequence = nums => {
  nums.sort((a, b) => b - a);

  const sum = nums.reduce((a, b) => a + b, 0);

  let ans = [];
  let subSum = 0;
  for (let i = 0, max = nums.length; i < max; i++) {
    subSum += nums[i];
    ans.push(nums[i]);
    if (subSum > sum - subSum) {
      return ans;
    }
  }
  return ans;
}