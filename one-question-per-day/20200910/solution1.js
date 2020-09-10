/**
 * 递归 + 回溯算法
 */
const combinationSum2 = function(candidates, target) {
  const record = new Set();
  const ans = [];

  const recursion = (index, sum, path) => {
    // 递归结束条件
    if (sum > target) {
      return;
    }

    if (sum === target) {
      const newPath = [...path].sort((a, b) => a - b);
      const newPathStr = newPath.join(':');

      if (!record.has(newPathStr)) {
        record.add(newPathStr);
        ans.push(newPath);
        return;
      }
    }

    for (let i = index; i < candidates.length; i++) {
      const item = candidates[i];
      path.push(item);
      recursion(i + 1, sum + item, path);
      path.pop();
    }
  }

  recursion(0, 0, []);
  return ans;
};