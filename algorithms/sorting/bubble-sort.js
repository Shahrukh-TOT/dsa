/**
 * Bubble Sort
 * 
 * It is the type of elementary sort
 * It bubble up the largest number at the end of list
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    let j = array.length - 1;
    let i = 0;
    let count = 0;
    while (j !== 0) {
        if (j == i) {
            i = 0;
            j--;
        };

        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
        i++;
        count++
    }
    console.log(count);

} // O(n^2)

function bubbleSort1(array) {

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
            count++
        }

    }

    console.log(count);

} // O(n^2)

bubbleSort(numbers);
bubbleSort1(numbers);