/**
 * https://leetcode-cn.com/problems/smallest-string-starting-from-leaf/
 * 
 * 988. 从叶结点开始的最小字符串
 * 
 * Medium
 * 
 * 104ms 100.00%
 * 37.7mb 100.00%
 */
const smallestFromLeaf = root => {
  const record = new Map();
  for (let i = 0; i < 26; i++) {
    record.set(i, String.fromCharCode(97 + i));
  }
  let ans = 'z';
  dfs(root, '');
  return ans
  function dfs(root, path) {
    if (!root) {
      return;
    }
    const _path = record.get(root.val) + path;
    dfs(root.left, _path);
    dfs(root.right, _path);
    if (!root.left && !root.right) {
      ans = _path <= ans ? _path : ans;
    }
  }
}