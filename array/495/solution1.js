/**
 * https://leetcode.com/problems/teemo-attacking/
 * 
 * 495. Teemo Attacking
 * 
 * Medium
 * 
 * 60ms 93.14%
 * 37.9mb 98.41%
 */
const findPoisonedDuration = (timeSeries, duration) => {
  const max = timeSeries.length
  if (max === 0) {
    return 0
  }
  let pre = timeSeries[0]
  let ans = 0
  for (let i = 1; i < max;i++) {
    const time = timeSeries[i]
    const diff = time - pre
    if (diff > duration) {
      ans += duration
    } else {
      ans += diff
    }
    pre = time
  }
  
  return ans + duration
}