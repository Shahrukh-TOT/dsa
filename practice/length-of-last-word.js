/**
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let lengthOfWord = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (char !== ' ' || lengthOfWord !== 0) {
            if (char !== ' ') lengthOfWord++;
            else return lengthOfWord;
        }
    }
    return lengthOfWord;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("luffy is still joyboy"));