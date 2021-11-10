/**
 * Selection Sort
 * 
 * It is the type of elementary sort
 * Finds the smallest number in the list and switch it with the first index
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = array[i];
        let smallestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < smallest) {
                smallest = array[j];
                smallestIndex = j;
            }
        }
        [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
    }

} // O(n^2)

insertionSort(numbers);

console.log(numbers);