/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
 const longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    const record = new Set();

    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        record.add(nums[i]);
    }

    for (const num of record.values()) {

        if (!record.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (record.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            ans = Math.max(ans, currentLength);
        }
    }

    return ans;
};