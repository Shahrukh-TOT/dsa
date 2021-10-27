
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let currentNode = head;
    let array = [];
    while (currentNode) {
        array.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let power = 0;
    let decimalNum = 0;
    while (array.length > 0) {
        let poppedNum = array.pop();
        decimalNum += poppedNum * Math.pow(2, power);
        power++;
    }

    return decimalNum;
};

let list = { val: 1, next: { val: 0, next: { val: 1, next: 0 } } }

console.log(getDecimalValue(list));