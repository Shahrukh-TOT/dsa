/**
 * @param {string} str 
 */
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str != 'string') return str;

    let tempStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        tempStr += str[i];
    }
    return tempStr;
}

/**
 * @param {string} str 
 */
function reverse2(str) {
    if (!str || str.length < 2 || typeof str != 'string') return str;

    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Hello World'));
console.log(reverse2('Hello World'));
console.log(reverse3('Hello World'));