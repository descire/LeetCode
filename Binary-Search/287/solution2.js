/**
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 * 
 * 287. 寻找重复数
 * 
 * Medium
 * 
 * 二分搜索方法
 * 
 * 不使用额外空间
 * 
 * 有序数组 1 ~ n - 1
 * 
 * 小于等于中间数的个数 来判断 重复数字落在那个区间
 * 
 * O(nlogn)
 * 
 * 84ms 86.83%
 * 35.2mb 71.43%
 */
const findDuplicate = nums => {
  const max = nums.length - 1

  let start = 1
  let end = max
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    const smallerNum = computeCount(nums, mid)
    if (smallerNum > mid) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}

function computeCount(nums, target) {
  let count = 0
  nums.forEach(num => {
    if (num <= target) {
      count++
    }
  })
  return count
}