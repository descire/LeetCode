/**
 * https://leetcode.com/problems/sort-array-by-parity/
 * 
 * 905. Sort Array By Parity
 * 
 * Easy
 */
const sortArrayByParity = A => {
  const ans = []
  for (let i = 0, max = A.length; i < max; i++) {
    const item = A[i]
    if (item % 2 === 0) {
      ans.unshift(item)
    } else {
      ans.push(item)
    }
  }
  return ans
}