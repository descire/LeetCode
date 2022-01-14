/**
 * 时间复杂度 O(klogk)
 * 空间复杂度 O(k)
 * @param {*} nums1 
 * @param {*} nums2 
 * @param {*} k 
 * @returns 
 */
const kSmallestPairs = function (nums1, nums2, k) {
    const res = [];
    const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });

    for (let i = 0; i < Math.min(k, nums1.length); i++) pq.enqueue([i, 0]);

    while (res.length < k && pq.size()) {
        const [i, j] = pq.dequeue();
        if (j + 1 < nums2.length) pq.enqueue([i, j + 1]);
        res.push([nums1[i], nums2[j]]);
    }

    return res;
};