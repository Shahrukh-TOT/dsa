/**
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false

Example 4:
Input: nums = [1,2,4,5]
Output: true

Example 5:
Input: nums = [1,1,1]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let isMonotonic = false;
    let i = 0;
    let isDecrease = nums[i] > nums[i + 1];

    if (nums.length == 1) return true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            isDecrease = nums[i] > nums[i + 1];
            break;
        }
    }

    while (i < nums.length - 1) {
        if ((isDecrease && nums[i] >= nums[i + 1]) || !isDecrease && nums[i] <= nums[i + 1]) {
            isMonotonic = true;
        } else {
            return false;
        }
        i++;
    }

    return isMonotonic;
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 2, 4, 5]));
console.log(isMonotonic([1, 1, 1]));
console.log(isMonotonic([5, 3, 2, 4, 1]));
console.log(isMonotonic([11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]));
console.log(isMonotonic([1, 1, 0]));
console.log(isMonotonic([9]));