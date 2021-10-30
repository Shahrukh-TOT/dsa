/**
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16

Example 4:

Input: height = [1,2,1]
Output: 2
 */

var maxAreaBF = function (heights) {
    let maxSurface = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);
            let area = width * height;
            maxSurface = Math.max(maxSurface, area);
        }
    }
    return maxSurface;
};

// console.log(maxAreaBF([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxAreaBF([4, 3, 2, 1, 4]));
// console.log(maxAreaBF([1, 1]));
// console.log(maxAreaBF([1, 2, 1]));
// console.log(maxAreaBF([2, 3, 4, 5, 18, 17, 6]));
// console.log(maxAreaBF([1, 1000, 1000, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxAreaBF([2, 3, 10, 5, 7, 8, 9]));

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {

    let i = 0;
    let j = heights.length - 1;

    let maxSurface = 0;
    while (i < j) {
        let width = (j - i);
        let height = Math.min(heights[i], heights[j]);

        let area = width * height;
        maxSurface = Math.max(maxSurface, area);

        if (heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxSurface;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
console.log(maxArea([1, 1000, 1000, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));
