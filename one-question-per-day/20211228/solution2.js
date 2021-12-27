var twoSum = function(nums, target) {
    const record = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!record.has(nums[i])) {
            record.set(nums[i], i);
        }

        const j = record.get(target - nums[i]);

        if (j !== undefined && i !== j) {
            return [j, i];
        }
    }
};