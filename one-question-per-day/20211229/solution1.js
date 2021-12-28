/**
 * 直接枚举
 * 空间复杂度 O(1)
 * 时间复杂度 O(n^4)
 * @param {*} nums 
 */
const countQuadruplets = function(nums) {
    const max = nums.length;
    let ans = 0;

    for (let i = 0; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            for (let k = j + 1; k < max; k++) {
                for (let q = k + 1; q < max; q++) {
                    if (nums[i] + nums[j] + nums[k] === nums[q]) {
                        ans++;
                    }
                }
            }
        }
    }

    return ans;
};