/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * 
 * 154. 寻找旋转排序数组中的最小值 II
 * 
 * Hard
 * 
 * 64ms 97.87%
 * 34.1mb 57.14%
 */
const findMin = nums => {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)

    if (nums[start] === nums[end]) {
      start++
      continue
    }

    if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return nums[start]
}

console.log(findMin([1, 3, 5]))
console.log(findMin([2, 2, 2, 0, 1]))