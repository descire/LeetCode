  /**
   * https://leetcode.com/problems/find-peak-element/
   * 
   * 162. Find Peak Element
   * 
   * Medium
   * 
   * 52ms 90.60%
   * 33.9mb 55.70%
   * 
   */
  const findPeakElement = nums => {
    const max = nums.length
    let first = 0
    let last = max - 1

    while (first < last) {
      const mid = Math.floor(first + (last - first) / 2)
      if (nums[mid] < nums[mid + 1]) {
        first = mid + 1
      } else {
        last = mid
      }
    }
    return first
  }