/**
 * 时间复杂度：O(S)，其中 S 为所有可行解的长度之和
 * 空间复杂度：O(target)
 */
const combinationSum = (candidates, target) => {
    const ans = [];

    const dfs = (target, combine, index) => {
        if (index === candidates.length) {
            return;
        }

        if (target === 0) {
            ans.push(combine);
            return;
        }

        // 不选择当前数字
        dfs(target, combine, index + 1);

        // 选择该数字
        if (target - candidates[index] >= 0) {
            dfs(target - candidates[index], [...combine, candidates[index]], index);
        }
    }

    dfs(target, [], 0);

    return ans;
}