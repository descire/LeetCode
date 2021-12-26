/**
 * 排序时间复杂度为 O(nlogn) ，双指针的时间复杂度为 O(n)
 * 
 * 排序使用的空间复杂度为 O(logn)
 * 
 * @param {*} ages 
 * @returns 
 */
const numFriendRequests = function(ages) {
    const max = ages.length;
    ages.sort((a, b) => a - b);
    let left = 0;
    let right = 0;
    let ans = 0;

    for (const age of ages) {
        if (age < 15) {
            continue;
        }
        while (ages[left] <= 0.5 * age + 7) {
            ++left;
        }
        while (right + 1 < max && ages[right + 1] <= age) {
            ++right;
        }
        ans += right - left;
    }

    return ans;
};