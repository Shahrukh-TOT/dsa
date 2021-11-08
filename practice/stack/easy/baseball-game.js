/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    let stack = [];
    let total = 0;
    for (let i = 0; i < ops.length; i++) {
        const op = ops[i];
        if (isNaN(op)) {
            switch (op) {
                case 'C':
                    total -= stack.pop();
                    break;
                case 'D':
                    let lastItem = stack.pop();
                    total += 2 * lastItem;
                    stack.push(lastItem, lastItem * 2);
                    break;
                case '+':
                    let last = stack.pop();
                    let secondLast = stack.pop();
                    let sum = last + secondLast;
                    total += sum;
                    stack.push(secondLast, last, sum);
                    break;
            }
        } else {
            stack.push(Number(op));
            total += Number(op);
        }
    }

    return total;
};


console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));