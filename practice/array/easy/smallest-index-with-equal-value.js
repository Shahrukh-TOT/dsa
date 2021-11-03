/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) return i;
    }
    return -1;
};


console.log(smallestEqual([2, 1, 3, 5, 2]));
console.log(smallestEqual([4, 3, 2, 1]));
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(smallestEqual([0, 1, 2]));
console.log(smallestEqual([6, 5, 4, 4, 9, 1, 5, 0, 8, 8, 5, 8, 0, 9, 8, 3, 6, 5, 2, 7, 7, 6, 6, 8, 9, 6, 5, 6, 5, 6, 8, 6, 9, 5, 1, 0, 5, 5]));

