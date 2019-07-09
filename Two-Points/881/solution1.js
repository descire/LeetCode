/**
 * https://leetcode-cn.com/problems/boats-to-save-people/
 * 
 * 881. 救生艇
 * 
 * Medium
 * 
 * 标准的双指针
 * 
 * 228ms 85.00%
 * 42.9mb 20.0%
 */
const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b)

  let start = 0
  let end = people.length - 1
  let ans = 0
  while (start <= end) {
    const light = people[start]
    const weight = people[end]
    if (light + weight > limit) {
      end--
    } else {
      end--
      start++
    }
    ans++
  }
  return ans
}

console.log(numRescueBoats([1, 2], 3)) // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)) // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)) // 4