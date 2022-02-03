/**
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 */
const findUnsortedSubarray = function(nums) {
    const sortNums = [...nums].sort((a, b) => a - b );

    let start = 0;
    let end = nums.length - 1;

    while (start < nums.length - 1 && sortNums[start] === nums[start]) {
        start++;
    }

    while (end >= 0 && sortNums[end] === nums[end]) {
        end--;
    }

    return end > start ? end - start + 1 : 0;
};