/**
 * 时间复杂度 O(logn) 
 */
const rangeBitwiseAnd = function(m, n) {
  while(m < n) {
    n = n & (n - 1);
  }
  return n;
};