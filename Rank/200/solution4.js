/**
 * 时间复杂度 O(n)
 * 
 * 124ms 46.4mb
 */
const maxSum = function(nums1, nums2) {
  let sum1 = 0;
  let sum2 = 0;

  let maxSum = 0;
  let startNums1Index = 0;
  let startNums2Index = 0;

  while (startNums1Index < nums1.length && startNums2Index < nums2.length) {
    if (nums1[startNums1Index] === nums2[startNums2Index]) {
      maxSum += (Math.max(sum1, sum2) + nums1[startNums1Index]);
      sum1 = 0;
      sum2 = 0;
      startNums1Index++;
      startNums2Index++;
    } else if (nums1[startNums1Index] < nums2[startNums2Index]) {
      sum1 += nums1[startNums1Index];
      startNums1Index++;
    } else {
      sum2 += nums2[startNums2Index];
      startNums2Index++;
    }
  }

  while(startNums1Index < nums1.length) {
    sum1 += nums1[startNums1Index];
    startNums1Index++;
  }

  while(startNums2Index < nums2.length) {
    sum2 += nums2[startNums2Index];
    startNums2Index++;
  }
  maxSum += Math.max(sum1, sum2);
  return maxSum % (10 ** 9 + 7);
};