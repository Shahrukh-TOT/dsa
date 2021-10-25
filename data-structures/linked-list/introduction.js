/**
 * Time Complexity
 *
 * prepend : O(1)
 * append : O(1)
 * insert : O(n)
 * lookup : O(n)
 * delete : O(n)
 *
 */

/**
 * What is pointer?
 * A reference to another place in memory.
 */
let obj1 = { s: true };
let obj2 = obj1; // example of pointer;

obj1.s = 'test';
delete obj1.s;
delete obj1;
// delete obj2;
console.log('1', obj1);
console.log('2', obj2);

/**
 * Linked List Review
 *
 * PROs
 * 1. Fast Insertion
 * 2. Deletion
 * 3. Ordered
 * 4. Flexible Size
 *
 * CONs
 * 1. Slow Lookup
 * 2. More Memory
 */