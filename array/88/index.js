var merge = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  const ans = [];
  let current = 0;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      current = nums2[p2++];
    } else if (p2 === n) {
      current = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      current = nums1[p1++];
    } else {
      current = nums2[p2++];
    }

    ans[p1 + p2 - 1] = current;
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = ans[i];
  }

  return nums1;
};