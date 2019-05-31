/**
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/
 * 
 * 717. 1-bit and 2-bit Characters
 * 
 * Easy
 * 
 * 60ms 82.77%
 * 
 * 34.4MB 51.98%
 */
const isOneBitCharacter = bits => {
  const max = bits.length

  for (let i = 0; i < max;) {
    const bit = bits[i]
    if (bit === 1) {
      i += 2
      continue
    }
    if (bit === 0 && i === max - 1) {
      return true
    }
    i++
  }
  return false
}