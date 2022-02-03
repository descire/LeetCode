/**
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 */
const longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let ans = 1;
    let pre = nums[0];
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        if (nums[i] - pre === 1) {
            current++;
            ans = Math.max(ans, current);
        } else {
            current = 1;
        }
        pre = nums[i];
    }

    return ans;
};