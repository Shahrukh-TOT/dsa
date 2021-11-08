// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) return head;

    let preNode = head;
    let nxtNode = head.next;

    while (nxtNode) {
        let tempNode = nxtNode.next;
        nxtNode.next = preNode; // pointing previous node as next in the nxtNode till the end of the list
        preNode = nxtNode; // increase the pointer by 1
        nxtNode = tempNode; // increase the pointer by 1
    }
    head.next = null; // close circular loop
    head = preNode; 

    return head;
};

let list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }

console.log(JSON.stringify(reverseList(list)));