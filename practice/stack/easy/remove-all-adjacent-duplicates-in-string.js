/**
Input: s = "abbaca"
Output: "ca"

Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  
The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    for(let i = 0; i < S.length; ++i) {
        if(!stack.length)
            stack.push(S[i]);
        else {
            S[i] == stack[stack.length - 1] ? stack.pop() : stack.push(S[i]);
        }
        console.log(stack);
    }
    return stack.join('');
};


console.log(removeDuplicates("abbaca"));