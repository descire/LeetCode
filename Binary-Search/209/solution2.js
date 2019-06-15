/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * 209. Minimum Size Subarray Sum
 * 
 * Medium
 * 
 * 52ms 96.09%
 * 35.9mb 17.26%
 */
const minSubArrayLen = (s, nums) => {
  let ans = Number.MAX_SAFE_INTEGER
  const sums = [0]
  nums.forEach((item, index) => sums[index + 1] = sums[index] + item)

  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i]
    const index = binarySearch(sums, 0, sums.length - 1, sums[i], s)
    if (sums[index] - sums[i] >= s) {
      ans = Math.min(ans, index - i)
    }
  }
  if (ans === Number.MAX_SAFE_INTEGER) {
    return 0
  }
  return ans
}

function binarySearch(array, first, last, target, s) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (array[mid] - target >= s) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  return first
}