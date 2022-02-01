/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 *
 */
const threeSum = nums => {
    const record = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!record.has(nums[i])) {
            record.set(nums[i], 0);
        }

        record.set(nums[i], record.get(nums[i]) + 1);
    }

    const ans = [];
    const repeatRecord = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];

            let count = 0;
            if (-sum === nums[i]) {
                count++;
            }

            if (-sum === nums[j]) {
                count++;
            }

            if (record.has(-sum) && record.get(-sum) > count) {
                const temp = [nums[i], nums[j], -sum];
                const str = temp.sort().toString();
                if (repeatRecord.has(str)) {
                    continue;
                }
                repeatRecord.add(str);
                ans.push(temp);
            }
        }
    }

    return ans;
}