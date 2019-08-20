/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
 * 22. 括号生成
 * 
 * Medium
 * 
 * 没毛病
 */
const generateParenthesis = n => {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return ['()'];
  }
  const pre = generateParenthesis(n - 1);
  const ans = []
  for (let i = 0; i < pre.length; i++) {
    const item = pre[i];
    ans.push(`(${item})`);
    // 相同的情况去除掉
    const l = `()${item}`;
    const r = `${item}()`;
    if (l === r) {
      ans.push(l);
    } else {
      ans.push(l);
      ans.push(r);
    }
  }
  return ans;
}