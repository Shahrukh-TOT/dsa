/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let initial = 1;
    let set = new Set(arr);

    let missingNums = [];

    while (missingNums.length !== k) {
        if (!set.has(initial)) {
            missingNums.push(initial);
        }
        initial++;
    }
    return missingNums[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));