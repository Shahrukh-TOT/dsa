let numbers = [3, 2, 4];
let target = 6;

let num1 = [1, 2, 3, 4, 5, 6];
let target1 = 6;

let nums3 = [2, 7, 11, 15], target3 = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};

    let index = 0;
    while (index < nums.length) {
        let remaining = map[target - nums[index]];
        if (remaining != undefined && nums[remaining] + nums[index] == target) {
            return [index, remaining];
        } else {
            map[nums[index]] = index;
            index++;
        }
    }
};

// console.log(twoSum(nums, target))
// console.log(twoSum(num1, target1))
console.log(twoSum(nums3, target3))