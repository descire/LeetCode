/**
 * https://leetcode-cn.com/problems/create-target-array-in-the-given-order/submissions/
 * 
 * 5364. 按既定顺序创建目标数组
 * 
 * Easy
 * 
 * 72ms 100.00%
 * 34mb 100.00%
 */
const createTargetArray = (nums, index) => {
  const target = [];
  for (let i = 0, max = nums.length; i < max; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
}