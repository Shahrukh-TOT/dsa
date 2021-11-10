
/**
 * 
 * @param {number[]} nums 
 * @param {number} index
 * @param {number} length
 * @returns number
 */
const findMaximum = (nums, index = 0) => {
    let length = nums.length;
    let max;
    if (index >= length - 2) {
        if (nums[index] > nums[index + 1]) return nums[index]
        else return nums[index + 1]
    }

    max = findMaximum(nums, index + 1, length);

    if (nums[index] > max) return nums[index];
    else return max;
}

console.log(findMaximum([70, 250, 50, 80, 140, 12, 14]));