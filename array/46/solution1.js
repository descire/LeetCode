/**
 * 时间复杂度：O(n*n!)
 * 空间复杂度：O(n)
 */
const permute = function(nums) {
    const ans = [];
    const path = [];

    const backtrack = (nums) => {
        if (nums.length === 0) {
            ans.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i]);

            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)]);

            path.pop();
        }
    }

    backtrack(nums);

    return ans;
};