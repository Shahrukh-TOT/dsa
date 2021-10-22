/**

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let low = 0;
    let sum = nums.reduce((pre, next) => pre + next, 0);
    let removeFromLeft = true;

    while (true) {
        if (removeFromLeft) {
            nums.splice(0, 1);
            low = nums.reduce((pre, next) => pre + next, 0);
        } else {
            nums.splice(nums.length - 1, 1);
            low = nums.reduce((pre, next) => pre + next, 0);
        }
        if (low < sum) {
            removeFromLeft = false;
        } else {
            removeFromLeft = true;
        }

        if (low == 0) break
        console.log(low);
    }



};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])