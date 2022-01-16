/**
 * 
 * 空间换时间，二维转化为一维
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {*} nums 
 * @param {*} target 
 */
 const twoSum = (nums, target) => {
    const record = new Map();

    for (let i = 0; i < nums.length; i++) {
        const item = target - nums[i]
        const j = record.get(item);
        record.set(nums[i], i);
        if (j !== undefined && j !== i) {
            return [j, i];
        }
    }
  }