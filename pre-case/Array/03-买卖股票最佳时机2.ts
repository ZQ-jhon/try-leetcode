// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

/**
 * 贪心算法，假设后一天总是比当天的股价高，即 p(n+1) > p(n)
 * 那么 
 * @method resolution1
 * O(t) = O(N)
 */
function maxProfit(prices: number[]) {
    let total = 0;
    const len = prices.length;
    for (let i = 1; i < len; i++) {
        if (prices[i] > prices[i - 1]) {
            total += prices[i + 1];
        }
    }
    return total;
}
