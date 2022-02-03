/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
 const checkSubarraySum = (nums, k) => {
    const length = nums.length;
    if (length < 2) {
      return false;
    }
  
    const preSum = Array(length + 1).fill(0);
  
    for (let i = 1; i <= length; i++) {
      preSum[i] = (preSum[i - 1] + nums[i - 1]) % k;
    }

    const record = new Map();

    for (let i = 0; i <= length; i++) {
        const index = record.get(preSum[i]);
        if (index !== undefined) {
            if (i - index >= 2) {
                return true;
            }
        } else {
            record.set(preSum[i], i); 
        }
    }

    return false;
  }