const MAX_INT = 10 ** 9 + 7;
const findGoodStrings = (n, s1, s2, evil) => {
  let ans = 0;

  if (n === 0) {
    return 0;
  }

  let c1 = 0
  for (let i = s1[0].charCodeAt(0) + 1; i < s2[0].charCodeAt(0); i++) {
    if (evil.indexOf(String.fromCharCode(i)) === -1) {
      c1++;
    }
  }
  ans += getCount(c1, evil.length, n - 1);

  for (let i = 1; i < s1.length; i++) {
    const item = s1[i];
    let count = 0;
    let start = item.charCodeAt(0);
    let max1 = s1[i - 1] === s2[i - 1] ? s2[i].charCodeAt(0) : 122;
    while (start <= max1) {
      if (evil.indexOf(String.fromCharCode(start)) === -1) {
        count++;
      }
      start++;
    }
    ans += getCount(count, evil.length, n - i - 1);

    if(s2[i - 1] !== s1[i - 1]) {
      const item2 = s2[i];
      let count2 = 0;
      let start2 = item2.charCodeAt(0);
      while (start2 >= s1[i].charCodeAt(0)) {
        if (evil.indexOf(String.fromCharCode(start2)) === -1) {
          count2++;
        }
        start2--;
      }

      ans += getCount(count2, evil.length, n - i - 1);
    }
      
  }
  return ans;
}

function getCount(count, length, n) {
  let ans = count;
  while (n > 0) {
    ans *= (26 - length);
    ans %= MAX_INT;
    n--;
  }
  return ans;
}