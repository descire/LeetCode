/**
 * 排序 + 双指针
 * 时间复杂度 O(mlogm + nlogn)
 * 空间复杂度 O(min(m + n))
 */
const intersect = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    const maxLen1 = nums1.length;
    const maxLen2 = nums2.length;

    let p1 = 0;
    let p2 = 0;

    const ans = [];

    while (p1 < maxLen1 || p2 < maxLen2) {
        const num1 = nums1[p1];
        const num2 = nums2[p2];

        if (num1 < num2) {
            p1++;
        } else if (num1 > num2) {
            p2++;
        } else if (num1 === num2) {
            ans.push(num1);
            p1++;
            p2++;
        } else {
            p1++;
            p2++;
        }
    }

    return ans;
}