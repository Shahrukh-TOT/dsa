/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length == 1) return stones[0]
    if (stones.length == 0) return 0

    stones.sort((a, b) => a - b);
    while (stones.length > 1) {
        let lastStone = stones.pop()
        let secondLastStone = stones.pop()
        let brokerStone = lastStone - secondLastStone;

        if (brokerStone !== 0) {
            let lastStone = stones[stones.length - 1];
            stones.push(brokerStone);
            if (lastStone > brokerStone) stones.sort((a, b) => a - b);
        };
    }

    return stones.length > 0 ? stones[0] : 0
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([7, 6, 7, 6, 9]));