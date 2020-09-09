/**
 * 回溯算法
 */
const combinationSum = function(candidates, target) {
  const ans = [];
  dfs([], target, 0);
  return ans;
  function dfs(current, sum, index) {
    if (index === candidates.length) {
      return;
    }
    if (0 === sum) {
      ans.push([...current]);
      return;
    }

    dfs(current, sum, index + 1);
    if (sum - candidates[index] >= 0) {
      current.push(candidates[index]);
      dfs(current, sum - candidates[index], index);
      current.pop();
    }
  }
};