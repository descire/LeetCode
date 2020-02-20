/**
 * https://leetcode-cn.com/problems/super-ugly-number/
 * 
 * 313. 超级丑数
 * 
 * Medium
 * 
 * 88ms 94%
 * 38.4mb 41.67%
 */
const nthSuperUglyNumber = (n, primes) => {
  const ans = [1];
  const currentIndex = new Array(primes.length).fill(0);

  while (ans.length < n) {
    let min = Infinity;

    for (let i = 0; i < primes.length; i++) {
      min = Math.min(min, primes[i] * ans[currentIndex[i]]);
    }

    ans.push(min);

    for (let i = 0; i < primes.length; i++) {
      if (primes[i] * ans[currentIndex[i]] === min) {
        currentIndex[i]++;
      }
    }
  }

  return ans[n - 1];
}