const kLengthApart = (nums, k) => {
  let currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentCount === 0 && i === 0 && nums[i] === 1) {
      continue
    }

    if (nums[i] !== 1) {
      currentCount++;
    } else {
      if (currentCount < k) {
        return false;
      } else {
        currentCount = 0;
      }
    }
  }
  return true;
}

console.log(kLengthApart([1,0,0,0,1,0,0,1], 2) === true);
console.log(kLengthApart([1,0,0,1,0,1], 2) === false);
console.log(kLengthApart([1,1,1,1,1], 0) === true);
console.log(kLengthApart([0,1,0,1], 1) === true);