/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let stack = [];

    let depth = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char == "(") {
            stack.push(char);
            if (stack.length > depth) depth = stack.length;
        } else if (char == ")") {
            stack.pop();
        }
    }

    return depth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("1+(2*3)/(2-1)"));
console.log(maxDepth("1"));