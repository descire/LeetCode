/**
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * 
 * 1021. 删除最外层的括号
 * 
 * Easy
 * 
 * 60ms 97.18%
 * 36mb 61.54%
 */
const removeOuterParentheses = S => {
  let ans = '';
  let count = 0;
  for (let i = 0, max = S.length; i < max; i++) {
    const str = S[i];
    if (str === '(') {
      count++;
    } else {
      count--;
    }
    if (!((count === 1 && str === '(') || (count === 0 && str === ')'))) {
      ans += str;
    }
  }
  return ans;
}