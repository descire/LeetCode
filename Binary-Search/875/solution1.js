/**
 * https://leetcode.com/problems/koko-eating-bananas/
 * 
 * 875. Koko Eating Bananas
 * 
 * Medium
 * 
 * 72ms 91.82%
 * 37.8mb 71.83%
 */
const minEatingSpeed = (piles, H) => {
  const max = piles.length
  let start = 1
  let end = Math.max(...piles)
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    let hour = computeHour(piles, mid)
    if (hour > H) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return start
}

function computeHour (piles, per) {
  let hours = 0
  for (let p of piles) {
    hours += Math.ceil(p / per)
  }
  return hours
}