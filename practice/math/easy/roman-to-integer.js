/**
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 */

/**
    Example 1:
    Input: s = "III"
    Output: 3

    Example 2:
    Input: s = "IV"
    Output: 4

    Example 3:
    Input: s = "IX"
    Output: 9

    Example 4:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

    Example 5:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let sum = 0;

    for (let c = 0, n = c + 1; c < s.length; c++, n++) {
        if (map[s[c]] >= map[s[n]] || n == s.length) sum += map[s[c]];
        else sum -= map[s[c]]
    }

    return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
