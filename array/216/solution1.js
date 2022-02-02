const combinationSum3 = function(k, n) {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const ans = [];

    const path = [];

    const backtrack = (start, sum) => {
        if (path.length === k && sum === n) {
            ans.push([...path]);
            return;
        }

        if (path.length > k || sum > n) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            sum += candidates[i];

            backtrack(i + 1, sum);

            path.pop();
            sum -= candidates[i];
        }
    }

    backtrack(0, 0);
    
    return ans;
};