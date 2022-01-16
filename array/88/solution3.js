/**
 * 双指针 去掉一次数组遍历
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(1)
 */
 const merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let tail = m + n - 1;
    let current;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            current = nums2[p2--];
        } else if (p2 === -1) {
            current = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            current = nums1[p1--];
        } else {
            current = nums2[p2--];
        }
        nums1[tail--] = current;
    }
}