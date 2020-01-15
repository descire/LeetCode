/**
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 
 * 347. 前 K 个高频元素
 * 
 * Medium
 * 
 * 76ms 93.75%
 * 38.6mb 22.92%
 */
const topKFrequent = (nums, k) => {
  const record = new Map();
  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i];
    if (!record.has(num)) {
      record.set(num, 0);
    }
    record.set(num, record.get(num) + 1);
  }

  const temp = [];
  for (let [key, value] of record.entries()) {
    temp.push({ key, value});
  }

  temp.sort((a, b) => b.value - a.value);

  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(temp[i].key);
  }
  return ans;
}