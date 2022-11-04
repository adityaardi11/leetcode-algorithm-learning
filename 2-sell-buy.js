// question : https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length-1; i++) {
        if(prices[i+1] - prices[i] > 0) profit += prices[i+1] - prices[i]; 
    }
    return profit;
};

//input
let prices = [7,1,5,3,6,4];

//output
console.log(maxProfit(prices))
prices = [1,2,3,4,5];

console.log(maxProfit(prices))

prices = [7,6,4,3,1]
console.log(maxProfit(prices))