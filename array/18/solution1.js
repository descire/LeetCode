/**
 * 时间复杂度：O(n^3)
 * 空间复杂度：O(n)
 */
const fourSum = function(nums, target) {
    const record = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!record.has(nums[i])) {
            record.set(nums[i], 0);
        }
        record.set(nums[i], record.get(nums[i]) + 1);
    }

    const ans = [];
    const dupRecod = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1;j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const a = nums[i];
                const b = nums[j];
                const c = nums[k];
                const d = target - a - b - c;

                let count = 0;
                if (a === d) {
                    count++;
                }

                if (b === d) {
                    count++;
                }

                if (c === d) {
                    count++;
                }

                const item = [a, b, c, d];
                const str = item.sort().toString();

                if (record.get(d) > count && !dupRecod.has(str)) {
                    dupRecod.add(str);
                    ans.push(item);
                }
            }
        }
    }

    return ans;
};