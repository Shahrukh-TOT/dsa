/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Example 2:
Input: nums = [0]
Output: [0]
 */

/**
zi=0;

for 0...length
if arr[i] == 0 skip
else {
    let temp = arr[zi];
    arr[zi] = arr[i];
    arr[i] = temp;
    zi++;
}
0: [0, 1, 0, 3, 12]
zi = 0; 

1: [1, 0, 0, 3, 12]
zi = 1;

2: zi = 1;

3: [1, 3, 0, 0, 12]
zi = 2;

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[zeroIndex];
            nums[zeroIndex] = nums[i];
            nums[i] = temp;
            zeroIndex++;
        }
    }
};