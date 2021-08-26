/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  // 贪心
  // nlog(n)
  people.sort((a, b) => a - b);

  let ans = 0;
  let start = 0;
  let end = people.length - 1;
  // O(n)
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
    } else {
      end--;
    }
    ans++;
  }

  return ans;
};