/**
 * 时间复杂度 O(n)
 * 
 * 空间复杂度 O(1)
 */
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start, end) {
  while (start <= end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

const nextPermutation = nums => {
  let start = nums.length - 2;
  while (start >= 0 && nums[start] >= nums[start + 1]) {
    start--;
  }

  if (start >= 0) {
    let end = nums.length - 1;
    while (end >= 0 && nums[start] >= nums[end]) {
      end--;
    }
    swap(nums, start, end);
  }
  reverse(nums, start + 1, nums.length - 1);
}