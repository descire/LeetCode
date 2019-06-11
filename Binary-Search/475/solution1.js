/**
 * https://leetcode.com/problems/heaters/
 * 
 * 475. Heaters
 * 
 * Easy
 * 
 * 112ms 90.01%
 * 39mb 74.45%
 */
const findRadius = (houses, heaters) => {
  let ans = Number.MIN_SAFE_INTEGER
  // 排序
  heaters.sort((a, b) => a - b)
  const len = heaters.length

  for (let i = 0, max = houses.length; i < max; i++) {
    const house = houses[i]
    const first = binarySearch(heaters, 0, len - 1, house)
    let closestDistance = Number.MAX_SAFE_INTEGER
    if (first === undefined) {
      ans = Math.max(ans, 0)
      continue
    }
    const pre = heaters[first - 1]
    const cur = heaters[first]
    if (pre !== undefined) {
      closestDistance = Math.min(closestDistance, Math.abs(house - pre))
    }
    closestDistance = Math.min(closestDistance, Math.abs(house - cur))

    ans = Math.max(ans, closestDistance)
  }

  return ans
}

function binarySearch(array, first, last, target) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    const t = array[mid]
    if (t === target) {
      return undefined
    }
    if (t > target) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  return first
}