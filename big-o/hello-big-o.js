const nemo = ['nemo'];
const fishColony = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArray = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log('running!');
        if (element == 'nemo') console.log('Found Nemo!');
    }
}

/**
 * Horrible to Excellent
 * <------ Horrible -------><--- Bad ---><- Fair -><- Good -><- Excellent ->
 * O(n!) > O(2^n) > O(n^2) > O(n log n) >   O(n) > O(log n) >   O(1)
 * 
 * O(n) --> Linear Time
 * O(1) --> Constant Time
 */

// 
// findNemo(nemo); // O(1) 
findNemo(fishColony); // O(10) 
// findNemo(largeArray); // O(100000)

let boxes = [1, 2, 3, 4, 5, 6];

function printFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

printFirstTwoBoxes(boxes); // O(2) or simply O(1) Constant Time
