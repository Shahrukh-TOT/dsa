/**
 * Time Complexity
 *
 * insert : O(1)
 * lookup : O(1)
 * delete : O(1)
 * search : O(1)
 */

let user = {
    age: 27,
    name: 'Shahrukh Mansuri',
    magic: true,
    scream: function () {
        console.log('ahhhhhhhhhhhhh!');
    }
}

console.log(user.age); // O(1)
user.spell = 'chadiosaaa'; // O(1)
user.scream(); // O(1)

console.log(user);

/**
 * Hash Collision
 *
 * data gets stored in the same memory location for multiple values.
 * these values are managed by linked list
 *
 * in the collision case the read time complexity is O(n)
 */

/**
 * Others types of hash tables
 */
const a = new Map(); // manages insertion order which helps in iteration
const b = new Set(); // it stores only keys

/**
 * Hash Table Review
 *
 * PROs
 * 1. Fast lookups* (good collision resolution needed)
 * 2. Fast inserts
 * 3. Flexible keys
 *
 * CONs
 * 1. Unordered
 * 2. Slow key iteration
 *
 */