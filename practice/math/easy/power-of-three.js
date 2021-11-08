/**
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:

Input: n = 27
Output: true

Example 2:

Input: n = 0
Output: false

Example 3:

Input: n = 9
Output: true

Example 4:

Input: n = 45
Output: false

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n == 0) return false;
    if (n == 1) return true;
    if (n % 3 !== 0) return false;
    return isPowerOfFour(n / 3);
};

console.log(isPowerOfFour(45));