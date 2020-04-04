const maxSatisfaction = satisfaction => {
  satisfaction.sort((a, b) => b - a);

  let ans = 0;
  let sum = 0;
  let current = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    current += satisfaction[i];
    sum += current;
    ans = Math.max(ans, sum);
  }

  return ans;
}