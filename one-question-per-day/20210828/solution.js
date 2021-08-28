/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const ans = [];
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    ans.push(current);
  }

  return ans;
};