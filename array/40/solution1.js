/**
 * 时间复杂度：O(2^n)
 * 空间复杂度：O(n)
 */
const combinationSum2 = function(candidates, target) {
    const ans = [];
    const path = [];

    candidates.sort((a, b) => a - b);

    const backtrack = (start, sum) => {
        if (sum === target) {
            ans.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 剪枝：过滤掉同层相同的元素
            if (i - 1 >= start && candidates[i - 1] === candidates[i]) {
                continue;
            }
            // 选择
            path.push(candidates[i]);
            sum += candidates[i];
            backtrack(i + 1, sum);
            // 不选择。状态回滚
            path.pop();
            sum -= candidates[i];
        }
    }

    backtrack(0, 0);

    return ans;
};