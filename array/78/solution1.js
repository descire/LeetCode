/**
 * https://leetcode.com/problems/subsets/
 * 
 * 78. Subsets
 * 
 * Medium
 * 
 * 84ms 5.38%
 * 40.5mb 5.06%
 */
const subsets = nums => {
  const ans = [[]]

  for (let i = 0; i < nums.length; i++) {
    ans.push(...combine(nums, i + 1))
  }
  return ans

}

function combine(sourceArray, count) {
  if (count === 1) {
    return sourceArray.map(item => [item])
  }

  const combineResult = []

  sourceArray.forEach((item, index) => {

    const smallerCombineResult = combine(
      sourceArray.slice(index + 1),
      count - 1
    )

    smallerCombineResult.forEach(sub => combineResult.push([item].concat(sub)))
  })

  return combineResult
}