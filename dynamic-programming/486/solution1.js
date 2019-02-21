/**
 * 
 * 
 * https://leetcode.com/problems/predict-the-winner/
 * 
 * 
 * 486. Predict the Winner
 * 
 * Medium
 */
const PredictTheWinner = nums => {
  const max = nums.length

  return help(0, max - 1) >= 0

  function help (start, end) {
    if (start === end) {
      return nums[start]
    }

    return Math.max(nums[start] - help(start + 1, end), nums[end] - help(start, end - 1))
  }
}