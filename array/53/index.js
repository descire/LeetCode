/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 
 * 单独一段 还是连续一段
 * 
 * max = Number.max(连续的一段，新的起点)
 * @param {*} nums 
 */
const maxSubArray = (nums) => {
  let ans = nums[0]
  let pre = nums[0];

  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    ans = Math.max(ans, pre);
  }

  return ans;
}