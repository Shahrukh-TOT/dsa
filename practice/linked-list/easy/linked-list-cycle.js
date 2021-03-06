
//   Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || head.next == null) return false;

    let fast = head.next.next;
    let slow = head;
    if (fast == slow) return true;
    while (fast !== slow) {
        if (!fast || fast.next == null) return false;
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) return true;
    }

    return false;
};