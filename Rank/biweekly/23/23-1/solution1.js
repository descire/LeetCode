/**
 * https://leetcode-cn.com/problems/count-largest-group/
 * 
 * 统计最大组的数目
 * 
 * Easy
 * 
 * 84ms 100.00%
 * 37.8mb 100.00%
 */
const countLargestGroup = n => {
  const record = new Map();
  for (let i = 1; i <= n; i++) {
    const item = String(i).split('');
    const sum = item.reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0);
    if (!record.has(sum)) {
      record.set(sum, 0);
    }
    record.set(sum, record.get(sum) + 1);
  }

  let maxCount = 0;
  for (const count of record.values()) {
    maxCount = Math.max(count, maxCount);
  }

  let ans = 0;
  for (const count of record.values()) {
    if (count === maxCount) {
      ans++;
    }
  }

  return ans;
}