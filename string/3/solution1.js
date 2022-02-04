/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const lengthOfLongestSubstring = function(s) {
    let start = 0;
    let ans = 0;
    const record = new Map();

    for (let end = 0; end < s.length; end++) {
       const char = s[end];
       if (record.has(char) && record.get(char) >= start) {
            start = record.get(char) + 1;
       }

       record.set(char, end);

       ans = Math.max(ans, end - start + 1);
    }

    return ans;
};