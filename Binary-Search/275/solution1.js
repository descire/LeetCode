/**
 * https://leetcode.com/problems/h-index-ii/
 * 
 * 275. H-Index II
 * 
 * Medium
 * 
 * 48ms 97.30%
 * 37.1mb 45.71%
 */
const hIndex = citations => {
  const max = citations.length
  if (max === 0) {
    return 0
  }
  const index = binarySearch(citations, 0, max - 1)
  // 边界条件
  return citations[index] > max - index ? max - index : citations[index]
}

function binarySearch(array, start, end) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (array[mid] >= array.length - mid) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}