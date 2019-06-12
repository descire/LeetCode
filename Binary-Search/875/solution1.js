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
  let first = 1
  let last = Math.max(...piles)
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    let hour = computeHour(piles, mid)
    if (hour > H) {
      first = mid + 1
    } else {
      last = mid
    }
  }

  return first
}

function computeHour (piles, per) {
  let hours = 0
  for (let p of piles) {
    hours += Math.ceil(p / per)
  }
  return hours
}