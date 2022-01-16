/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 
 * 超出时间限制
 */
 const maxProfit = function(prices) {
    let ans = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            ans = Math.max(ans, prices[j] - prices[i]);
        }
    }

    return ans;
};