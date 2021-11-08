// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    if (!headA || !headB) return null;
    if (headA.val == headB.val && !headA.next && !headB.next && headA.next == headB.next) return headA;

    let length1 = 0;
    let length2 = 0;

    let currNode1 = headA;
    let currNode2 = headB;

    while (currNode1) {
        length1++;
        currNode1 = currNode1.next;
    }

    while (currNode2) {
        length2++;
        currNode2 = currNode2.next;
    }

    currNode1 = headA;
    currNode2 = headB;

    for (let i = 0; i < Math.abs(length1 - length2); i++) {
        if (length1 < length2) {
            currNode2 = currNode2.next;
        } else {
            currNode1 = currNode1.next;
        }
    }

    while (true) {
        if (currNode1.next == currNode2.next)
            return length2 == length1 ? currNode1 : currNode1.next;
        else {
            currNode1 = currNode1.next;
            currNode2 = currNode2.next;
        }
    }
};