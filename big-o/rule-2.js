/**
 * Rule 2 : Remove Constant from the annotation
 */

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    // O(n/2)
    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    // O(100)
    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

/**
 * O(3 + n/2 + 100)
 * Just drop the constant as it does not matter when input increases
 *
 * So O(n)
 */

