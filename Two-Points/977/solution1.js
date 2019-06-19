/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 * 977. Squares of a Sorted Array
 * 
 * Easy
 * 
 * 一般的思路
 * 
 * 先求出所有的数的 平方 O(n)
 * 
 * 再排序 O(nlogn)
 * 
 * 题目本身就是一个非递减的数组
 * 
 * 负数 非负数 
 * O(n)
 * 
 * 100ms 99.39%
 * 41.7mb 99.46%
 */
const sortedSquares = A => {
  const result = []
  let max = A.length
  let start = 0
  let end = max - 1
  while (start <= end) {
    const x = A[start] ** 2
    const y = A[end] ** 2
    if (x <= y) {
      result.push(y)
      end--
    } else {
      result.push(x)
      start++
    }
  }
  return result.reverse()
}