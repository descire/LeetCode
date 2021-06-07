// 回溯
const findTargetSumWays = (nums, target) => {
  let ans = 0;

  const backtrack = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        ans++;
      }
    } else {
      backtrack(nums, target, index + 1, sum + nums[index]);
      backtrack(nums, target, index + 1, sum - nums[index]);
    }
  }

  backtrack(nums, target, 0, 0);

  return ans;
}