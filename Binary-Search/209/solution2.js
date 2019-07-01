/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * 209. Minimum Size Subarray Sum
 * 
 * Medium
 * 
 * 52ms 96.09%
 * 35.9mb 17.26%
 * 
 * 第一眼看过去 这哪是一道二分搜索的题目
 * 
 * 两重循环直接搞定 O(n^2)
 * 
 * 第一种解法 
 * 首先构建一个有序数组 前缀和数组
 * 
 * 那么只要在该有序数组中找出 sums[j] - sums[i] >= s 
 * 
 * 记录每一组的长度，最后给出最小长度即可。
 */
const minSubArrayLen = (s, nums) => {
  const sums = [0]
  nums.forEach((item, index) => sums[index + 1] = sums[index] + item)
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0, max = sums.length; i < max; i++) {
    const sum = sums[i]
    // 二分搜索满足的和值
    const index = binarySearch(sums, i, max, s, sum)
    if (sums[index] - sum >= s) {
      ans = Math.min(ans, index - i)
    }
  }

  if (ans === Number.MAX_SAFE_INTEGER) {
    return 0
  }
  return ans
}

function binarySearch(array, start, end, target, base) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (array[mid] - base < target) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}