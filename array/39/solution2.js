const combinationSum = (candidates, target) => {
    const ans = [];
    const path = [];

    const backtrack = (start, sum) => {
        if (sum === target) {
            ans.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 选择
            path.push(candidates[i]);
            sum += candidates[i];
            backtrack(i, sum);
            // 不选择。状态回滚
            path.pop();
            sum -= candidates[i];
        }
    }

    backtrack(0, 0);

    return ans;
}