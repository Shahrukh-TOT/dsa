// Rule 3: Different inputs should have different variables.--------------------

function compressBoxes(fullBoxes, emptyBoxes) {

    fullBoxes.forEach((box) => { // O(a)
        console.log(box);
    });

    emptyBoxes.forEach((box) => { // O(b)
        console.log(box);
    });
}

  // Time Complexity: O(a + b)