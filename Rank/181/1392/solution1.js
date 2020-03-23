/**
 * https://leetcode-cn.com/problems/longest-happy-prefix/
 * 
 * 1392. 最长快乐前缀
 * 
 * Hard
 */
const longestPrefix = s => {
  let ans = 0;
  for (let i = 0, max = s.length; i < max; i++) {
    const prefix = s.slice(0, i);
    const suffix = s.slice(-i);
    if (prefix === suffix) {
      ans = i;
    }
  }

  if (ans === 0) {
    return '';
  }
  return s.slice(0, ans);
}