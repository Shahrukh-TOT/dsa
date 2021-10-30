
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

    if (!head || !head.next) return head;

    let first = head;

    let length = 0;

    while (first) {
        first = first.next;
        length++;
    }

    let halfLength = Math.floor(length / 2);

    first = head;
    for (let i = 0; i < halfLength; i++) {
        first = first.next;
    }

    return first;
};