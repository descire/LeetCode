/**
 * 暴力解法
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1);
 * @param {*} nums 
 * @param {*} target 
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}