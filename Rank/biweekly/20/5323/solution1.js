const sortByBits = arr => {
  arr.sort((a, b) => {
    const x = getBitCount(a);
    const y = getBitCount(b);
    if (x - y == 0) {
      return a - b;
    }
    return x - y
  })
  return arr;
}

function getBitCount(num) {
  let ans = 0;
  while (num) {
    if (num & 1 === 1) {
      ans++;
    }
    num = num >>> 1;
  }
  return ans;
}