/**

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false



 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // let map = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     if (map.get(nums[i])) {
    //         let values = map.get(nums[i]);
    //         map.set(nums[i], [...values, i])
    //     } else {
    //         map.set(nums[i], [i])
    //     }
    // }

    // for (const key of map.keys()) {
    //     let indexes = map.get(key);
    //     if (indexes.length >= 2) {
    //         for (let i = 0; i < indexes.length - 1; i++) {
    //             if (Math.abs((indexes[i] - indexes[i + 1])) <= k) return true;
    //         }
    //     }
    // }
    // return false;

    let ind = {}, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] in ind && i - ind[nums[i]] <= k) {
            return true;
        }
        ind[nums[i]] = i;
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1));
