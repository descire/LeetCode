/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(logn)
 *
 */
 const threeSum = nums => {
    nums.sort((a, b) => a - b);

    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) {
            return ans;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            const sum = a + nums[start] + nums[end];
            if (sum > 0) {
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                ans.push([a, nums[start], nums[end]]);

                start++;
                end--;

                while(start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            }
        }
    }

    return ans;
}