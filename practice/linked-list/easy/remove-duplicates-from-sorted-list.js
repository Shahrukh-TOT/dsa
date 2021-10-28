
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    let currentNode = head;

    while (currentNode.next) {
        if (currentNode.val == currentNode.next.val) {
            let tempNode = currentNode.next.next;
            currentNode.next = tempNode;
        } else {
            currentNode = currentNode.next;
            currentNode.next = currentNode.next.next;
        }
    }

    return head;
};