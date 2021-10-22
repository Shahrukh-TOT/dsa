/**
    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length == 0) return "";

    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            console.log(prefix);
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix == "") return ""
        }
    }

    return prefix;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));