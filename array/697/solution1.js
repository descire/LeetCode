/**
 * https://leetcode.com/problems/degree-of-an-array/
 * 
 * 697. Degree of an Array
 * 
 * Easy
 * 
 * 72ms 92.28%
 * 42.8MB 8.38%
 * 
 */
const findShortestSubArray = nums => {
  const m = new Map()
  let max = 1
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (!m.has(num)) {
      m.set(num, [1, i, i])
      continue
    }
    const [count, startIndex, endIndex] = m.get(num)
    max = Math.max(count + 1, max)
    m.set(num, [count + 1, startIndex, i])
  }

  let ans = Number.MAX_SAFE_INTEGER
  for (let [num, [count, startIndex, endIndex]] of m.entries()) {
    if (count === max) {
      ans = Math.min(ans, endIndex - startIndex + 1)
    }
  }
  return ans
}