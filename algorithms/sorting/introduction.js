
const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const numbers = [2, 65, 34, 2, 1, 7, 8];

/**
 * JS sorts the elements by converting them into the string.
 */
console.log(letters.sort());
console.log(numbers.sort());

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('2'.charCodeAt(0));
console.log('1'.charCodeAt(0));
console.log('7'.charCodeAt(0));
console.log('8'.charCodeAt(0));


console.log(numbers.sort((a, b) => a - b));
/**
 * Animation of different sorting: 
 * 
 * https://www.toptal.com/developers/sorting-algorithms/random-initial-order
 */

