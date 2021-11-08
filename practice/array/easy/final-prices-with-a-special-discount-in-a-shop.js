/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        for (let j = i + 1; j < prices.length; j++) {
            const disPrice = prices[j];
            if (disPrice <= price) {
                prices[i] = price - disPrice;
                break;
            } 
        }
    }

    return prices;
};


console.log(finalPrices([10, 1, 1, 6]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([8, 4, 6, 2, 3]));