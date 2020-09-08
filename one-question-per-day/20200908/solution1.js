/**
 * 递归枚举
 * 
 * 时间复杂度 O(2^n)
 * 空间复杂度 O(nk)
 */
const combine = function(n, k) {
  const ans = [];
  if (k > n || !n) {
    return [];
  }
  let temp = [];

  dfs(1);
  return ans;
  function dfs(current) {
    if (temp.length === k) {
      ans.push([...temp]);
      return;
    }

    if (current === n + 1) {
      return;
    }

    // 选择当前数字
    temp.push(current);
    dfs(current + 1);
    // 状态回滚
    temp.pop();
    // 不选择当前数字
    dfs(current + 1);
  }
};