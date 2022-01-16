/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const maxProfit = function(prices) {
    let ans = 0;
    let selectPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        ans = Math.max(ans, prices[i] - selectPrice);
        if (selectPrice > prices[i]) {
            selectPrice = prices[i];
        }
    }

    return ans;
};