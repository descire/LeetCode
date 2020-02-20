/**
 * https://leetcode-cn.com/problems/super-ugly-number/
 * 
 * 313. 超级丑数
 * 
 * Medium
 * 
 * 136ms 30.00%
 * 
 * 43mb 20.83%
 */
const nthSuperUglyNumber = (n, primes) => {
  const ans = [1];

  const currentIndex = new Array(1000).fill(0);

  for (let i = 1; i < n; i++) {
    const min = Math.min(...primes.map((item, index) => item * ans[currentIndex[index]]));

    primes.forEach((item, index) => {
      if (item * ans[currentIndex[index]] === min) {
        currentIndex[index] = currentIndex[index] + 1;
      }
    })

    ans[i] = min;
  }

  return ans[n - 1];
}