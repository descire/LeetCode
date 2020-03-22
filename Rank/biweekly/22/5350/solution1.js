const getKth = (lo, hi, k) => {
  const ans = [];
  for (let i = lo; i <= hi; i++) {
    const step = computedStep(i);
    ans.push([i, step]);
  }

  ans.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })

  return ans[k - 1][0];
}

function computedStep(number) {
  let ans = 0;
  while (number !== 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
    ans++;
  }
  return ans;
}