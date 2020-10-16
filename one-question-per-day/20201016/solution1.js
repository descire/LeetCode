/**
 * 排序 
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 */
const sortedSquares = function(A) {
  const ans = A.map(item => item * item);

  return ans.sort((a, b) => a - b);
};