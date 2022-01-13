/**
 * hash + 排序
 * 
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 * @param {*} nums 
 * @returns 
 */
const dominantIndex = function(nums) {
    if (nums.length < 2) {
        return 0
    }
    const record = new Map(nums.map((item, index) => [item, index]));

    nums.sort((a, b) => b - a);
    if (nums[0] >= 2 * nums[1]) {
        return record.get(nums[0]);
    }
    return -1;
};