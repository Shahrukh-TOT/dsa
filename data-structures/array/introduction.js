const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// Operations

// Lookup
strings[2] // O(1)

// Push
strings.push('e'); // O(1)

// Pop
strings.pop(); // O(1)

// Unshift/Insert
strings.unshift('x'); // O(n)

// Splice/Delete/Insert
strings.splice(2, 0, 'z'); // O(n)

console.log(strings);

/**
 * Types of Array
 *
 * 1. Static Array
 * 2. Dynamic Array
 */

// Append O(1) can be O(n)


// Solve the following problems
// 1. Two Sum
// 2. Maximum Subarray 
// 3. Move Zeroes
// 4. Contains Duplicate
// 5. Rotate Arrays

/**
 * Array Review
 *
 *  PROs
 * 1. Fast lookups
 * 2. Fast push/pop
 * 3. Ordererd
 *
 * CONs
 * 1. Slow inserts
 * 2. Slow deletes
 * 3. Fixed size in static array
 */