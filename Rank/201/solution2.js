/** 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
const findKthBit = function(n, k) {
  let current = n;
  let reverseCount = 0;
  if (n === 1) {
    return '0'
  }
  while (current > 1) {
    const total = 2 ** current - 1;
    const mid = Math.ceil(total / 2);
    if (k === mid) {
      if (reverseCount % 2 === 0) {
        return '1';
      }
      return '0';
    }
    if (k > mid) {
      reverseCount++;
      k = mid * 2 - k;
    }
    current--;
  }
  if (reverseCount % 2 === 0) {
    return '0';
  }
  return '1';
};