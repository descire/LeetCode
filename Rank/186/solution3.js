const longestSubarray = (nums, limit) => {
  let n = nums.length;
  let ans = 0;

  let startIndex = 0;
  let endIndex = 0;

  const record = new Map();
  record.set(nums[0], 1);

  while (endIndex < n && startIndex <= endIndex) {
    const diff = help(record);
    if (diff <= limit) {
      ans = Math.max(ans, endIndex - startIndex + 1);
      endIndex++;
      if (!record.has(nums[endIndex])) {
        record.set(nums[endIndex], 0); 
      }
      record.set(nums[endIndex], record.get(nums[endIndex]) + 1);
    } else {
      startIndex++;
      record.set(nums[startIndex - 1], record.get(nums[startIndex - 1]) - 1);
      if (record.get(nums[startIndex - 1]) === 0) {
        record.delete(nums[startIndex - 1]);
      }
    }
  }
  return ans;
}

function help(record) {
  const newArray = Array.from(record.keys()).sort((a, b) => a - b);
  return newArray[newArray.length - 1] - newArray[0];
}

// function help(start, end, nums) {
//   const newArray = nums.slice(start, end + 1).sort((a, b) => a - b);
//   return newArray[newArray.length - 1] - newArray[0];
// }
console.log(longestSubarray([8,2,4,7], 4) === 2);
console.log(longestSubarray([10,1,2,4,7,2], 5) === 4);
console.log(longestSubarray([4,2,2,2,4,4,2,2], 0) === 3);