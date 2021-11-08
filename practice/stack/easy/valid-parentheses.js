/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = { '(': ')', '{': '}', '[': ']' }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let paranthesis = s[i];

        if (map[paranthesis]) {
            stack.push(paranthesis);
        } else {
            if (map[stack[stack.length - 1]] == paranthesis) stack.pop();
            else stack.push(paranthesis);
        }
    }

    return stack.length == 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("(])"));