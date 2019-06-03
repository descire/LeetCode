/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 * 
 * 849. Maximize Distance to Closest Person
 * 
 * Easy
 * 
 * 60ms 91.69%
 * 36mb 27.07%
 */
const maxDistToClosest = seats => {

  const max = seats.length

  let empty = 0
  let maxDistance = 1
  
  let startZero = 0
  for (let i = 0; i < max; i++) {
    if (seats[i] === 0) {
      startZero++
      continue
    }
    break
  }

  let endZero = 0
  for (let i = max - 1; i >= 0; i--) {
    if (seats[i] === 0) {
      endZero++
      continue
    }
    break
  }

  maxDistance = Math.max(maxDistance, startZero, endZero)

  for (let i = 0; i < max; i++) {
    const seat = seats[i]
    if (seat === 1 && empty !== 0) {
      if (empty % 2 === 0) {
        maxDistance = Math.max(maxDistance, Math.floor(empty / 2))
      } else {
        maxDistance = Math.max(maxDistance, Math.floor(empty / 2) + 1)
      }
      empty = 0
      continue
    }
    if (seat === 0) {
      empty++
    }
  }

  return maxDistance
}