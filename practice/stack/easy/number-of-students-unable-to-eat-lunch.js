/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
    let i = 0;
    while (i < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            i = 0;
        } else {
            let count = students.length;
            while (count > 0) {
                if (students[0] === sandwiches[0]) {
                    break;
                }
                students.push(students[0]);
                students.shift();
                count--;
                i++;
            }
        }
    }

    return students.length;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));