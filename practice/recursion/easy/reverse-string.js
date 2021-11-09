/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const recursion = (i, j) => {
        if (i >= j) return;
        [s[i], s[j]] = [s[j], s[i]];
        recursion(i + 1, j - 1);
    }
    recursion(0, s.length - 1);
    return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
