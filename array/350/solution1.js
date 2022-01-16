/**
 * 哈希表
 * 
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(min(m + n))
 * 
 */
const intersect = (nums1, nums2) => {
  const record = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const item = nums1[i];
    if (!record.has(item)) {
      record.set(item, 0);
    }
    record.set(item, record.get(item) + 1);
  }

  const ans = [];

  for (let i = 0; i < nums2.length; i++) {
    const item = nums2[i];
    if (record.get(item) > 0) {
      record.set(item, record.get(item) - 1);
      ans.push(item);
    }
  }

  return ans;
}