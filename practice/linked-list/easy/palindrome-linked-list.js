function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Using stack approach
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeUsingStack = function (head) {
    if (!head || !head.next) return true;
    // 

    let first = head;
    let arr = [];
    while (first) {
        arr.push(first.val);
        first = first.next;
    }
    first = head;
    while (first) {
        let popItem = arr.pop();
        if (popItem !== first.val) return false;
        first = first.next;
    }
    return true;
};  // TC: O(n), SC: O(n)

let list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }
let list1 = { val: 1, next: { val: 1, next: { val: 2, next: { val: 1, next: null } } } }

console.log(JSON.stringify(isPalindromeUsingStack(list)));
console.log(JSON.stringify(isPalindromeUsingStack(list1)));



/**
 * Reversing half linked list
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeHalfReverse = (head) => {
    if (!head || !head.next) return true;

    let first = head;
    let second = head;

    while (first) {
        first = first.next;
        if (first) {
            second = second.next;
            first = first.next;
        }
    }

    let reverse = reverseLinkedList(second);
    second.next = null;

    first = head;
    while (first && reverse) {
        if (first.val !== reverse.val) return false;
        first = first.next;
        reverse = reverse.next;
    }

    return true;
};  // TC: O(n), SC: O(1)

/**
 * Reversing half linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = (head) => {

    if (!head || !head.next) return head;

    let first = head;
    let second = first.next;

    while (second) {
        let tempNode = second.next;
        second.next = first;
        first = second;
        second = tempNode;
    }
    head.next = null;
    head = first;
    return head;
}

console.log(JSON.stringify(isPalindromeHalfReverse(list)));
console.log(JSON.stringify(isPalindromeHalfReverse(list1)));
