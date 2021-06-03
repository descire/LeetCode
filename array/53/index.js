const maxSubArray = (nums) => {
  let preSum = 0;
  let ans = nums[0];

  for (let i = 0; i < nums.length; i++) {
    preSum = Math.max(preSum + nums[i], nums[i]);
    ans = Math.max(ans, preSum);
  };

  return ans;
}