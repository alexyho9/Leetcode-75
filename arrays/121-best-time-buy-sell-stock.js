/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max_profit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let difference = prices[right] - prices[left];
            if (difference > max_profit) {
                max_profit = difference;
            }
        }
        else {
            left = right;
        }
        right++;
    }
    console.log(max_profit);
    return max_profit;
};


prices1 = [7,1,5,3,6,4];  // 5
prices2 = [7,6,4,3,1];  // 0

maxProfit(prices1);
maxProfit(prices2);