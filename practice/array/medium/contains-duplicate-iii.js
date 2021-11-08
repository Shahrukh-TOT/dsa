/**
Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true

Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (nums.length < 2) return false;

    let i = 0;
    let j = 1;

    while (j < nums.length || i < nums.length) {
        let kCondition = Math.abs(j - i) <= k;
        let tCondition = Math.abs(nums[j] - nums[i]) <= t;

        if (kCondition && tCondition) return true;
        else {
            if (kCondition) {
                j++;
            } else {
                i++;
                j = i + 1;
            }
        }
    }

    return false;
};


console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([8, 7, 15, 1, 6, 1, 9, 15], 1, 3)); // true
console.log(containsNearbyAlmostDuplicate([1, 2, 2, 3, 4, 5], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([7, 1, 3], 2, 3)); // true