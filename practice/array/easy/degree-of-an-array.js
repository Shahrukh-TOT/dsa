/**
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let range = new Map(), maxDegree = 0, minLength = Infinity;
    
    for(let i = 0; i < nums.length; i++){
        if(range.has(nums[i])) {
            let start = range.get(nums[i])[0];
            let degree = range.get(nums[i])[2];
            degree++;
            range.set(nums[i], [start, i, degree]);
            if(degree > maxDegree) maxDegree = degree;
        } else {
            let degree = 1;
            range.set(nums[i],[i, i, degree]);
            if(degree > maxDegree) maxDegree = degree;
        }
    }

    console.log(range, maxDegree);
    for (let key of range.keys()){
        let val = range.get(key)
        if(val[2] === maxDegree){
            let diff = (val[1] - val[0]) + 1;
            if(diff < minLength) minLength = diff;
        }
    }
    
    return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
console.log(findShortestSubArray([1,1]));

