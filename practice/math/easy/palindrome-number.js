/**
 * Example 1:
 * Input: x = 121
 * Output: true
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Example 4:
 * Input: x = -101
 * Output: false
 *  
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 & x != 0)) return false;
    let reverted = 0;
    while (x > reverted) {
        reverted = Math.floor(reverted * 10 + x % 10);
        x =Math.floor(x/ 10);
    }
    return x == reverted || x == Math.floor(reverted / 10);
};

console.log(isPalindrome(121))