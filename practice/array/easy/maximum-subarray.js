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
 * [1, 2, 3, 4, 5, 5] = 20
 * 
 * [1, 2, -1] = 3 [1, 2]
 * 
 * [1, -1, 3, 4, -3] = 7 [3, 4] 
 * 
 * [-1, -2, -3] = -1 [-1]
 */

// Kadane’s Algorithm:
// -------------------------------
//  Initialize:
//  max_so_far = INT_MIN
//  max_ending_here = 0

// Loop for each element of the array
// (a) max_ending_here = max_ending_here + a[i]
// (b) if(max_so_far < max_ending_here)
//          max_so_far = max_ending_here
// (c) if(max_ending_here < 0)
//          max_ending_here = 0
// return max_so_far

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    let curSum = 0;
    for (const num of nums) {
        curSum = curSum + num;
        if (maxSum < curSum) maxSum = curSum;
        if (curSum < 0) curSum = 0;
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, -2, -3]));
console.log(maxSubArray([1, -1, 3, 4, -3]));
console.log(maxSubArray([-2, 1]));