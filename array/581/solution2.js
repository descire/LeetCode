/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const findUnsortedSubarray = function(nums) {
    const maxIndex = nums.length - 1;
    let start = 0;
    let end = -1;
    let max =  nums[0];
    let min = nums[nums.length - 1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < max) {
            end = i;
        } else {
            max = nums[i];
        }

        if (nums[maxIndex - i] > min) {
            start = maxIndex - i;
        } else {
            min = nums[maxIndex - i];
        }
    }

    return end - start + 1;
};