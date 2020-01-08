/**
 * https://leetcode-cn.com/problems/backspace-string-compare/
 * 
 * 844. 比较含退格的字符串
 * 
 * Easy
 * 60ms 92.83%
 * 35.4mb 16.18%
 */
const backspaceCompare = (S, T) => {
  const stack1 = [];
  const stack2 = [];

  for (let i = 0, max = S.length; i < max; i++) {
    if (S[i] === '#') {
      stack1.pop();
    } else {
      stack1.push(S[i]);
    }
  }

  for (let i = 0, max = T.length; i < max; i++) {
    if (T[i] === '#') {
      stack2.pop();
    } else {
      stack2.push(T[i]);
    }
  }

  if (stack1.length !== stack2.length) {
    return false;
  }

  for (let i = 0, max = stack1.length; i < max; i++) {
    if (stack1[i] !== stack2[i]) {
      return false;
    }
  }
  return true;
}