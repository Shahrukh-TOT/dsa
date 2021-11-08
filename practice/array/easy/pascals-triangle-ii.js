/**
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (numRows) {
    let array = [];
    numRows++;
    for (let i = 0; i < numRows; i++) {
        if (array[i] === undefined) array[i] = [];
        if (i == 0) {
            array[i].push(1);
            if (numRows == 1) return array[0];
        } else {
            array[i].push(1)
            for (let j = 1; j < i; j++) {
                let sum = array[i - 1][j - 1] + array[i - 1][j];
                array[i].push(sum);
            }
            array[i].push(1);
        }
    }

    return array[array.length - 1];
};

console.log(getRow(3));