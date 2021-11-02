/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let str = '';

    for (let i = 0; i < s.length; i++) {
        const charLower = s[i].toLowerCase();
        if (str.length > 0 && charLower == str[str.length - 1].toLowerCase()) {
            if (str[str.length - 1] !== s[i]) {
                str = str.substring(0, str.length - 1)
            } else {
                str += s[i];
            }
        }
        else {
            str += s[i];
        }
    }

    return str;
};


console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));