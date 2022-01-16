/**
 * 直接合并两个数组，然后排序处理
 * 
 * 时间复杂度 O((m + n)log(m+n))
 * 空间复杂度 O(m + n)
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 * @returns 
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  return nums1.sort((a, b) => a - b);
};