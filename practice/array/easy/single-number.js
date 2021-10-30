/**
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) map.set(nums[i], 1);
        else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    let keys = Array.from(map.keys());
    let values = Array.from(map.values());
    return keys[values.findIndex(k => k == 1)];
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));