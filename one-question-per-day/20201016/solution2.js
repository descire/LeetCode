/**
 * 双指针
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const sortedSquares = function(A) {
  const ans = [];
  let position = A.length - 1;
  let start = 0;
  let end = A.length - 1;
  while (start <= end) {
    const x = A[start] * A[start];
    const y = A[end] * A[end];
    if (x >= y) {
      ans[position] = x;
      start++;
    } else {
      ans[position] = y;
      end--;
    }
    position--;
  }

  return ans;
};