/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {}

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                map[num] = nums2[j];
                break;
            } else {
                map[num] = -1
            }
        }
    }

    let arr = [];

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (map[num]) arr.push(map[num]);
        else arr.push(-1)
    }

    return arr;
};


console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
