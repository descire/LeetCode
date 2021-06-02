// 前缀和 + 哈希表
const findMaxLength = (nums) => {
  let maxLength = 0;
  let currentSum = 0;
  const record = new Map();
  record.set(currentSum, -1);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 0) {
      currentSum--;
    } else {
      currentSum++;
    }

    if (record.has(currentSum)) {
      const preIndex = record.get(currentSum);
      maxLength = Math.max(maxLength, i - preIndex);
    } else {
      record.set(currentSum, i);
    }
  }

  return maxLength;
}