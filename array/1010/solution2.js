/**
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 * 
 * 1010. Pairs of Songs With Total Durations Divisible by 60
 * 
 * Easy
 * 
 * 72ms 76.61%
 * 38.6mb 14.48%
 */
const numPairsDivisibleBy60 = time => {

  const cache = new Map()
  let ans = 0
  for (let t of time) {
    ans += cache.get((60 - t % 60) % 60) || 0

    const temp = cache.get(t % 60) || 0
    cache.set(t % 60, temp + 1)
  }

  return ans
}