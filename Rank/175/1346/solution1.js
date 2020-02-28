/**
 * https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/
 * 
 * 1346. 检查整数及其两倍数是否存在
 * 
 * Easy
 * 
 * 考察点
 * - 哈希表
 * - 注意对零的特殊处理
 * 
 * 60ms 89.72%
 * 35.7mb 100.00%
 */
const checkIfExist = arr => {
  const record = new Set();
  let zeroCount = 0;

  for (let i = 0, max = arr.length; i < max; i++) {
    record.add(arr[i]);
    if (arr[i] === 0) {
      zeroCount++;
    }
    
    if (zeroCount > 1) {
      return true;
    }
  }

  for (let i = 0, max = arr.length; i < max; i++) {
    if (arr[i] !== 0 && record.has(arr[i] * 2)) {
      return true;
    }
  }
  return false;
}