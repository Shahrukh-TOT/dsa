/**
 * arr1 = [0, 3, 4, 31]
 * arr2 = [4, 6, 30]
 */

/**
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @returns {Array<number>} 
 */
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    console.log(arr1, arr2);

    if (arr1.length == 0) return arr2;
    if (arr2.length == 0) return arr1;

    while (array1Item !== undefined || array2Item !== undefined) {
        if (array2Item == undefined || array1Item < array2Item) {
            if (array1Item) mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            if (array2Item) mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // O(n + m)
