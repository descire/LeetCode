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
  const cache = {}
  return help(0, max - 1) >= 0

  function help (start, end) {
    const index = start * max + end
    if (start === end) {
      cache[index] = nums[start]
      return cache[index]
    }

    if (cache[index] === undefined) {
      cache[index] = Math.max(nums[start] - help(start + 1, end), nums[end] - help(start, end - 1))
    }

    return cache[index]
  }
}