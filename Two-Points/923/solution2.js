/**
 * https://leetcode-cn.com/problems/3sum-with-multiplicity/
 * 
 * 923. 三数之和的多种可能
 * 
 * Medium
 * 
 * 数学的处理方法 组合
 * 100ms 96.30%
 * 35.2mb 50.00%
 */
const MOD = 10 ** 9 + 7
const threeSumMulti = (A, target) => {
  let ans = 0
  const record = new Map()
  // 统计各个元素的个数
  for (let i = 0, max = A.length; i < max; i++) {
    if (!record.has(A[i])) {
      record.set(A[i], 0)
    }
    record.set(A[i], record.get(A[i]) + 1)
  }

  for (let i = 0; i <= target; i++) {
    const x = record.get(i)
    if (!x) {
      continue
    }
    for (let j = i; j <= target; j++) {
      let k = target - i - j
      // 重复
      if (k < j) {
        continue
      }
      const y = record.get(j)
      const z = record.get(k)
      if (!y) {
        continue
      }
      if (!z) {
        continue
      }
      if (i === j && j === k) {
        // 三个数相同
        if (x >= 3) {
          ans += x * (x - 1) * (x - 2) / (3 * 2)
        }
      } else if (i === j) {
        if (x >= 2) {
          ans += x * (x - 1) / 2 * record.get(k)
        }
      } else if (j === k) {
        if (y >= 2) {
          ans += y * (y - 1) / 2 * record.get(i)
        }
      } else if (i === k) {
        if (x >= 2) {
          ans += x * (x - 1) / 2 * record.get(j)
        }
      } else {
        ans += x * y * z
      }
      ans = ans % MOD
    }
  }
  return ans
}
