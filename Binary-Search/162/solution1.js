  /**
   * https://leetcode.com/problems/find-peak-element/
   * 
   * 162. Find Peak Element
   * 
   * Medium
   * 
   * 64ms 21.79%
   * 
   * 34.4mb 25.00%
   * 
   * O(n)
   */
  const findPeakElement = nums => {
    const max = nums.length
    if (max === 1) {
      return 0
    }

    for (let i = 1; i < max - 1; i++) {
      const cur = nums[i]
      const pre = nums[i - 1]
      const next = nums[i + 1]
      if (pre < cur && cur > next) {
        return i
      }
    }

    if (nums[max - 1] > nums[max - 2]) {
      return max - 1
    }

    if (nums[0] > nums[1]) {
      return 0
    }
  }