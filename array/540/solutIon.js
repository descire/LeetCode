/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const singleNonDuplicate = function(nums) {
    let current = 0;

    while (nums[current] === nums[current + 1]) {
        current += 2;
    }

    return nums[current];
};