/**
 * https://leetcode.com/problems/find-right-interval/
 * 
 * 436. Find Right Interval
 * 
 * Medium
 * 
 * 972ms 17.50%
 * 
 * 45.3mb 85.00%
 * 
 */
const findRightInterval = intervals => {
  const ret = []
  const max = intervals.length
  const indexMap = new Map()
  // O(n)
  let starts = intervals.map((item, index) => {
    indexMap.set(item[0], index)
    return item[0]
  })

  // O(n^2)
  for (let i = 0; i < max; i++) {
    const [,end] = intervals[i]
    let diff = Number.MAX_SAFE_INTEGER
    let index = -1
    for (let j = 0, len = starts.length; j < len; j++) {
      const start = starts[j]
      if (start >= end && start - end <= diff) {
        diff = start - end
        index = indexMap.get(start)
      }
    }

    ret.push(index)
  }

  return ret
}