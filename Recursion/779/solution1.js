/**
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * 
 * 779. 第K个语法符号
 * 
 * Medium
 */
const kthGrammar = (N, K) => {
  const str = getString(N);
  return str[K - 1];
}

function getString(N) {
  if (N === 1) {
    return '0';
  }
  const str = getString(N - 1);
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (s === '0') {
      newStr += '01';
    } else {
      newStr += '10';
    }
  }
  return newStr;
}