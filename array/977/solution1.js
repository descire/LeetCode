/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 * 977. Squares of a Sorted Array
 * 
 * Easy
 */
const sortedSquares = A => {
  return A.map(item => item * item).sort((x, y) => x - y)
}