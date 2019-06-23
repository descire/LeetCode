/**
 * https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/
 * 
 * 532. 数组中的K-diff数对
 * 
 * Easy
 * 
 * 99.12%
 * 25.00%
 */
const findPairs = (nums, k) => {
  if (k < 0) {
    return 0
  }

  const record = new Set()
  const result = new Set()
  

  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i]

    if (record.has(num - k) && !result.has(num - k)) {
      result.add(num - k)
    }

    if (record.has(num + k) && !result.has(num)) {
      result.add(num)
    }

    record.add(num)
  }

  return result.size
}