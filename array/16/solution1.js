/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let ans;
    let minDis = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];

        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = a + nums[start] + nums[end];
            const dis = Math.abs(sum - target);
            if (dis < minDis) {
                minDis = dis;
                ans = sum;
            }

            if (sum < target) {
                start++;
                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
            } else {
                end--;
                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            }
        }
    }

    return ans;
};