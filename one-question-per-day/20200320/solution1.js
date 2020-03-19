/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 
 * 最小的k个数
 * 
 * Easy
 * 
 * 184ms 27.33%
 * 39.5mb 100.00%
 */
const getLeastNumbers = (arr, k) => {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
}