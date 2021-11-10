
/**
 * 
 * @param {number[]} nums 
 * @param {number} index
 * @param {number} length
 * @returns number
 */
const findMinimum = (nums, index = 0) => {
    let length = nums.length;
    let min;
    if (index >= length - 2) {
        console.log('first if');
        if (nums[index] < nums[index + 1]) return nums[index]
        else return nums[index + 1]
    }

    min = findMinimum(nums, index + 1, length);
    console.log('end', nums[index], min, index);
    if (nums[index] < min) return nums[index];
    else return min;
}

console.log(findMinimum([70, 250, 50, 80, 140, 12, 14]));