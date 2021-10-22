
let arr = [1, 1, 1, 1];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.filter((ite => ite == nums[i])).length > 1)
            nums.splice(nums.indexOf(nums[i]) + 1, nums.filter((ite => ite == nums[i])).length - 1);
    }
    return nums.length;
};

console.log(removeDuplicates(arr));