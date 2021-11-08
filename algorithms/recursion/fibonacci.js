// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    //code here;
    let first = 0;
    let second = 1;
    if (n == first) return first;
    if (n == second) return second;

    for (let i = 2; i <= n; i++) [second, first] = [first + second, second];

    return second;
}

console.log(fibonacciIterative(8));


/**
 * O(2^n)
 */
function fibonacciRecursive(n) {
    if (n < 2) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
