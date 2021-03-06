/**

You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
Example 3:

Input: nums = []
Output: []
Example 4:

Input: nums = [-1]
Output: ["-1"]
Example 5:

Input: nums = [0]
Output: ["0"]

 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    if (nums.length == 0) return [];

    let arr = [''];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] !== 1) {
            if (arr[arr.length - 1] != '') arr[arr.length - 1] += `->${nums[i]}`;
            else arr[arr.length - 1] = `${nums[i]}`;
            if (i !== nums.length - 1) arr.push('');
        } else {
            if (arr[arr.length - 1] == '') arr[arr.length - 1] = `${nums[i]}`;
        }
    }

    return arr
};


console.log([0, 2, 3, 4, 6, 8, 9]);
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));


console.log('===');
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
summaryRanges([0, 1, 2, 4, 5, 7]);