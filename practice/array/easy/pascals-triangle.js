/**
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let array = [];

    for (let i = 0; i < numRows; i++) {
        if (array[i] === undefined) array[i] = [];
        if (i == 0) {
            array[i].push(1);
            if (numRows == 1) return array;
        } else {
            array[i].push(1)
            for (let j = 1; j < i; j++) {
                let sum = array[i - 1][j - 1] + array[i - 1][j];
                array[i].push(sum);
            }
            array[i].push(1);
        }
    }

    return array;
};

console.log(generate(0));