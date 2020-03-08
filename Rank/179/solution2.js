const numTimesAllBlue = light => {
  let ans = 0;

  const record = [];

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < light.length; i++) {
    record[light[i] - 1] = true;

    if (ans === light[i] - 1) {
      ans++;
    } else {
      if (light[i] - 1 > max) {
        let isBlue = true;
  
        for (let j = ans; j < light[i]; j++) {
          if (!record[j]) {
            isBlue = false;
          }
        }
  
        if (isBlue) {
          ans++;
        }
      }
    }

    max = Math.max(light[i] - 1, max);
  }
  return ans;
}