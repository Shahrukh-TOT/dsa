
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (l1 && !l2) return l1;
    if (l2 && !l1) return l2;

    let newNode = null;

    if (l1.val < l2.val) {
        newNode = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        newNode = new ListNode(l2.val);
        l2 = l2.next;
    }

    newNode.next = mergeTwoLists(l1, l2);
    return newNode;
};


let l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
let l2 = { val: 1, next: { val: 3, next: null } }


console.log(JSON.stringify(mergeTwoLists(null, null)));
