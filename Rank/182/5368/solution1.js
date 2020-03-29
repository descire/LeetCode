/**
 * 
 * https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/
 * 
 * Easy
 * 
 * 5368. 找出数组中的幸运数
 * 
 * - 哈希表
 * 
 * 60ms 100.00%
 * 
 * 35.7mb 100.00%
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const findLucky = arr => {
  const record = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!record.get(arr[i])) {
      record.set(arr[i], 0);
    }
    record.set(arr[i], record.get(arr[i]) + 1);
  }
  let ans = -1;
  for (const [key, value] of record.entries()) {
    if (+key === +value) {
      ans = Math.max(ans, +key);
    }
  }

  return ans;
}