/**
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 * 
 * 1010. Pairs of Songs With Total Durations Divisible by 60
 * 
 * Easy
 * 
 * 5468ms 30.07%
 * 38.1mb 23.34%
 */
const numPairsDivisibleBy60 = time => {
  const max = time.length
  let ans = 0
  for (let i = 0; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        ans++
      }
    }
  }

  return ans
}