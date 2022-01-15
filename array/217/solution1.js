/**
 * 哈希表
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * 
 * 因为本题只需要记录是否重复，所以直接使用 JavaScript 中的 Set 数据结构记录是否重复即可。
 * @param {*} nums 
 * @returns 
 */
const containsDuplicate = function(nums) {
  const record = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!record.has(nums[i])) {
      record.add(nums[i]);
    } else {
      return true;
    }
  }

  return false;
};