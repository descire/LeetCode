/**
 * https://leetcode.com/problems/find-right-interval/
 * 
 * 436. Find Right Interval
 * 
 * Medium
 * 
 * 108ms 100.00%
 * 46.6mb 100.00%
 */
const findRightInterval = intervals => {
  const ret = []
  const max = intervals.length
  const indexMap = new Map()
  // O(n)
  const starts = intervals.map((item, index) => {
    indexMap.set(item[0], index)
    return item[0]
  })
  // O(nlogn)
  starts.sort((a, b) => a - b)



  // O(nlogn)
  for (let i = 0; i < max; i++) {
    const interval = intervals[i][1]
    const index = binarySearch(starts, 0, max - 1, interval)
    const start = starts[index]
    ret[i] = start - interval < 0 ? -1 : indexMap.get(start)
  }
  return ret
}

function binarySearch(array, first, last, target) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (array[mid] >= target) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  return first
}