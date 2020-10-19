/**
 * 数据结构 -- 栈
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
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