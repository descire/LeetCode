const sumFourDivisors = nums => {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = help(nums[i]);
    if (temp.size === 4) {
      ans += Array.from(temp.values()).reduce((a, b) => a + b, 0);
    }
  }
  return ans;
}

function help(num) {
  const max = Math.floor(Math.sqrt(num));
  const ans = new Set();
  let min = 1;
  while (min <= max) {
    if ((num / min) % 1 === 0) {
      ans.add(min);
      ans.add(num / min);
    }
    min++;
  }
  return ans;
}