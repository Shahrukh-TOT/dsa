// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number === 1) return 1;
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    //code here

    let answer = 1;
    for (let i = number; i >= 1; i--) {
        answer *= i;
    }

    return answer;
}


// console.log(findFactorialIterative(3));
console.log(findFactorialRecursive(3));