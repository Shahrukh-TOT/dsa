/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxCandy = 0;
    let arr = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandy) maxCandy = candies[i];
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandy) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    return arr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));