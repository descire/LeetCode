/**
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 * 
 * 532. K-diff Pairs in an Array
 * 
 * Easy
 * 
 * 52ms 100%
 * 37.9mb 70.39%
 */
const findPairs = (nums, k) => {

  if (k < 0) {
    return 0
  }

  if (k === 0) {
    let ans = 0
    const m = new Map()
    for (let i = 0, max = nums.length; i < max; i++) {
      const num = nums[i]
      m.set(num, (m.get(num) || 0) + 1)
    }

    for (let [key, value] of m) {
      if (value > 1) {
        ans++
      }
    }

    return ans
  }

  const cache = new Set()

  let ans = 0

  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i]
    if (cache.has(num)) {
      continue
    }

    cache.add(num)

    if (cache.has(num - k)) {
      ans += 1
    }
    if (cache.has(num + k)) {
      ans += 1
    }
  }
  return ans
}