/**
 * Insertion Sort
 * 
 * It is the type of elementary sort
 * This sorting algorithm is most useful for almost sorted array.
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
} // O(n^2)

insertionSort(numbers);

console.log(numbers);