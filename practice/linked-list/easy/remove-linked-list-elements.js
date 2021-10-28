
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;
    
    let first = head;
    let second = head.next;

    while (second) {
        let tempNode = second.next;
        if (second.val == val) {
            first.next = tempNode;
        } else {
            first = first.next;
        }
        second = tempNode;
    }

    if (head && head.val == val) head = head.next;

    return head;
};