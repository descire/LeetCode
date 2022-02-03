/**
 * 时间复杂度：O(n*n!)
 * 空间复杂度：O(n)
 */
const permuteUnique = function(nums) {

    const ans = [];
    const path = [];
    const used = [];
    const record = new Set();


    const backtrack = (count) => {
        if (count === nums.length) {
            const item = [...path];
            const key = item.toString();
            if (!record.has(key)) {
                record.add(key);
                ans.push(item);
            }
            return;
        }

        for (let i = 0; i < nums.length; i++) {

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