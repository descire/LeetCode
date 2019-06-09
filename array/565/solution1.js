/**
 * https://leetcode.com/problems/array-nesting/
 * 
 * 565. Array Nesting
 * 
 * Medium
 * 
 * 76ms 94.27%
 * 40.1mb 40.37%
 */
const arrayNesting = nums => {
  const len = nums.length
  const visited = new Set()
  let ans = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < len; i++) {
    if (visited.has(i)) {
      continue
    }
    let item = i
    let count = 0
    while (!visited.has(item)) {
      visited.add(item)
      count++
      item = nums[item]
    }
    ans = Math.max(count, ans)
  }

  return ans
}