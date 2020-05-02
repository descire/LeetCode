const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  let ans = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      ans[i] = true;
    } else {
      ans[i] = false;
    }
  }
  return ans;
}