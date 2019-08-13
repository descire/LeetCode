/**
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * 
 * 779. 第K个语法符号
 * 
 * Medium
 * 
 * 76ms 64.15%
 * 33.8mb 20.00%
 * 
 * 规律
 * 
 *   0        1
 *  / \      / \
 * 0   1    1   0
 */
const kthGrammar = (N, K) => {
  if (N === 1) {
    return 0;
  }
  if (K % 2 === 0) {
    return kthGrammar(N - 1, K / 2) ? 0 : 1;
  } else {
    return kthGrammar(N - 1, (K + 1) / 2) ? 1 : 0;
  }
}