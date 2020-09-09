const combinationSum = function(candidates, target) {
  const ans = [];
  const record = new Set();
  dfs([]);
  return ans;
  function dfs(current) {
    let sum = current.reduce((a, b) => a + b, 0);
    if (sum === target) {
      if (!record.has(current.sort().join(''))) {
        record.add(current.sort().join(''));
        ans.push([...current]);
      }
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      const item = candidates[i];
      current.push(item);
      dfs(current);
      current.pop();
      dfs(current);
    }
  }
};