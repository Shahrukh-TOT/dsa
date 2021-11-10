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
    if (headA === null || headB === null) return null;

    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        if (currentA == currentB) return currentA;
        if (currentA === null) currentA = headB;
        if (currentB === null) currentB = headA;
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return currentA;
};

let intersectVal = { val: 8, next: { val: 4, next: { val: 5, next: null } } };
let listA = { val: 4, next: { val: 1, next: intersectVal } };
let listB = { val: 5, next: { val: 6, next: { val: 1, next: intersectVal } } };

console.log(JSON.stringify(getIntersectionNode(listA, listB)));