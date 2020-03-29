const numTeams = rating => {
  let ans = 0;
  const max = rating.length;
  for (let i = 0; i < max; i++) {
    for (let j = i + 1; j < max; j++) {
      for (let k = j + 1; k < max; k++) {
        if (rating[i] < rating[j] && rating[j] < rating[k]) {
          ans++;
        }

        if (rating[i] > rating[j] && rating[j] > rating[k]) {
          ans++;
        }
      }
    }
  }

  return ans;
}

function getCount(count) {
  if (count < 3) {
    return 0;
  }
  return count * (count - 1) * (count - 2) / 6
}