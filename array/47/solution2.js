const permuteUnique = function(nums) {
    const ans = [];
    const path = [];
    const used = [];

    nums.sort((a, b) => a - b);
    const backtrack = (count) => {
        if (count === nums.length) {
            return ans.push([...path]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            if (used[i]) {
                continue;
            }

            path.push(nums[i]);
            used[i] = true;

            backtrack(count + 1);

            path.pop();
            used[i] = false;
        }
    }

    backtrack(0);
    return ans;
};