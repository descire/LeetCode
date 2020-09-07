/**
 * sort hashmap
 * 
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 */
const topKFrequent = (nums, k) => {
  const record = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!record.has(nums[i])) {
      record.set(nums[i], 0);
    }
    record.set(nums[i], record.get(nums[i]) + 1);
  }

  const arr = Array.from(record.entries());
  arr.sort((a, b) => b[1] - a[1]);
  
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0]);
  }
  return ans;
}