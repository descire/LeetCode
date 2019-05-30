/**
 * https://leetcode.com/problems/height-checker/
 * 
 * Easy
 * 
 * 56ms  88.59%
 * 
 * 35MB 100%
 * 
 */
const heightChecker = heights => {
  const sortHeights = heights.map(item => item).sort((a, b) => a - b)
  let ans = 0
  for (let i = 0, max = heights.length; i < max; i++) {
    const x = heights[i]
    const y = sortHeights[i]
    if (x !== y) {
      ans++
    }
  }
  return ans
}