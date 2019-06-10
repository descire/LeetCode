/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * 
 * 744. Find Smallest Letter Greater Than Target
 * 
 * Easy
 * 
 * 48ms 100.00%
 * 36.3mb 72.67%
 */
const nextGreatestLetter = (letters, target) => {
  const max = letters.length
  // 边界处理
  if (letters[max - 1] <= target) {
    return letters[0]
  }
  const last = binarySearch(letters, 0, max - 1, target)
  return letters[last]
}

function binarySearch(array, first, last, target) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (target < array[mid]) {
      last = mid
    } else {
      first = mid + 1
    }
  }

  return last
}