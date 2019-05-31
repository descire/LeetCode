  /**
   * https://leetcode.com/problems/missing-number/
   * 
   * 268. Missing Number
   * 
   * Easy
   * 
   * 60ms 94.90%
   * 
   * 36.3MB 47.46%
   */
  const missingNumber = nums => {

    const len = nums.length

    let max = Number.MIN_SAFE_INTEGER

    let sum = 0

    let isZero = false

    for (let i = 0; i < len; i++) {
      const num = nums[i]
      if (num === 0) {
        isZero = true
      }
      sum += num
      max = Math.max(num, max)
    }

    const total = max * (max + 1) / 2
    const dis = total - sum
    if (dis === 0) {
      if (!isZero) {
        return 0
      }
      return max + 1
    }
    return dis
  }