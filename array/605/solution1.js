/**
 * https://leetcode.com/problems/can-place-flowers/
 * 
 * 605. Can Place Flowers
 * 
 * Easy
 * 
 * 60ms 96.15%
 * 36.4mb 41.31%
 */
const canPlaceFlowers = (flowerbed, n) => {
  const max = flowerbed.length

  let ans = 0

  let zero = 0

  let startIndex = 0
  let endIndex = max - 1
  // 左边
  for (let i = 0; i < max; i++) {
    if (flowerbed[i] === 1) {
      startIndex = i
      break
    }
    zero++
  }

  // 全部为空的情况
  if (zero === max) {
    return Math.floor((zero + 1) / 2) >= n
  }

  ans += Math.floor(zero / 2)

  zero = 0

  // 右边
  for (let i = max - 1; i >= 0; i--) {
    if (flowerbed[i] === 1) {
      endIndex = i
      break
    }
    zero++
  }

  ans += Math.floor(zero / 2)
  zero = 0

  for (let i = startIndex; i <= endIndex;i++) {
    const item = flowerbed[i]
    if (item === 0) {
      zero++
      continue
    }

    if (zero >= 3) {
      ans += Math.floor((zero - 1) / 2)
    }
    zero = 0
  }

  return ans >= n
}