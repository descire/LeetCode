/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
 * 22. 括号生成
 * 
 * Medium
 * 
 * 80ms 79.77%
 * 34.9mb 50.26%
 */
const generateParenthesis = n => {
  const ans = [];
  if (n > 0) {
    dfs(n, n, '', ans);
  }
  return ans;
}

function dfs(left, right, current, ans) {
  if (left + right === 0) {
    ans.push(current);
    return;
  }
  if (right < left) {
    // 无效的情况，向上回溯
    return;
  }

  if (left > 0) {
    dfs(left - 1, right, current + '(', ans);
  }

  if (right > 0) {
    dfs(left, right - 1, current + ')', ans);
  }
}