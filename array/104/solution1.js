const combinationSum4 = function(nums, target) {
    const dp = Array(target + 1).fill(0);

    dp[0] = 1;

    let ans = 0;

    for (let sum = 1; sum <= target; sum++) {
        for (const num of nums) {
            if (num <= sum) {
                dp[sum] += dp[sum - num];
            }
        }
    }

    return dp[target];
};