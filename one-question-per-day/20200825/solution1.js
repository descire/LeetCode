/**
 * DFS 
 */
const findSubsequences = function(nums) {
  const ans = []
  const record = new Set();
  const path = [];

  dfs(0, nums.length - 1);

  return ans;

  function dfs(startIndex, endIndex) {
    if (path.length >= 2) {
      const str = path.join(',');
      if (!record.has(str)) {
        ans.push([...path]);
        record.add(str);
      }
    }
  
    for (let i = startIndex; i <= endIndex; i++) {
      const pre = path[path.length - 1];
      const cur = nums[i];
      if (path.length === 0 || pre <= cur) {
        path.push(cur);
        dfs(i + 1, endIndex);
        path.pop(); // 状态回滚
      }
    }
    return ans;
  }
};
