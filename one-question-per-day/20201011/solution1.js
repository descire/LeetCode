/**
 * 记忆化剪枝 +　递归 
 */
const canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) {
    return false;
  }

  const halfSum = sum / 2;
  const record = new Map();

  // 记忆化递归
  const help = (currentSum, index) => {
    const key = `${currentSum}-${index}`;
    if (record.has(key)) {
      return record.get(key);
    }

    if (currentSum > halfSum || index > nums.length - 1) {
      return false;
    }

    if (currentSum === halfSum) {
      return true;
    }

    const sum = help(currentSum + nums[index], index + 1) || help(currentSum, index + 1);
    record.set(key, sum);
    return sum;
  }

  return help(0, 0);
};