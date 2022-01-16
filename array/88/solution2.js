/**
 * 双指针 由于本身两个数组就是有序的。
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(m + n)
 */
const merge = function(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    const ans = [];
    while (p1 < m || p2 < n) {
        const item1 = nums1[p1];
        const item2 = nums2[p2];

        if (p1 === m) {
            ans.push(item2);
            p2++;
        } else if (p2 === n) {
            ans.push(item1);
            p1++
        } else if (item1 <= item2) {
            ans.push(item1);
            p1++;
        } else {
            ans.push(item2);
            p2++;
        }
    }
    ans.forEach((item, index) => nums1[index] = ans[index]);

    return nums1;
}