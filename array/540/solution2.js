/**
 * 时间复杂度：O(logn)
 * 空间复杂度：O(1)
 */
const singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((end - start) / 2) + start;
        if (nums[mid] == nums[mid ^ 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
};