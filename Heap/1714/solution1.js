/**
 * https://leetcode-cn.com/problems/smallest-k-lcci/
 * 
 * 最小K个数
 * 
 * Medium
 * 
 * 164ms 100.00%
 * 41.6mb 100.00%
 */
const smallestK = (arr, k) => {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
}