// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0] >= target ? 0 : 1;

    let tempArray = [...nums];

    middleIndex = Math.floor(tempArray.length / 2);

    while (tempArray.length !== 1) {
        let midItem = tempArray[middleIndex];
        if (midItem > target) {
            tempArray = tempArray.slice(0, middleIndex);
        } else if (midItem == target) {
            tempArray = [target];
        }
        else {
            tempArray = tempArray.slice(middleIndex, tempArray.length);
        }
        middleIndex = Math.floor(tempArray.length / 2);
        console.log(tempArray);
    }
    return tempArray[0] >= target ? nums.indexOf(tempArray[0]) : nums.indexOf(tempArray[0]) + 1;
};

console.log(searchInsert([2, 7, 8, 9, 10], 9));