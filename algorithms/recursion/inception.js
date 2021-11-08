let counter = 0;

function inception() {
    /**
     * Base case started
     */
    console.log(counter);
    if (counter > 3) return 'done!';
    counter++;
    /**
     * Base case ended
     */

    /** 
     * Recursion
     */
    return inception();
}


console.log(inception());