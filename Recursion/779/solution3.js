/**
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * 
 * 779. 第K个语法符号
 * 
 * Medium
 * 
 * heap out of memory
 * 
 */
const kthGrammar = (N, K) => {
  let str = '0';
  if (N > 1) {
    for (let i = 1; i < N; i++) {
      let newStr = ''
      for (let i = 0; i < str.length; i++) {
        const s = str[i]
        if (s === '0') {
          newStr += '01';
        } else {
          newStr += '10';
        }
      }
      str = newStr;
    }
  }
  return str[K - 1];
}
