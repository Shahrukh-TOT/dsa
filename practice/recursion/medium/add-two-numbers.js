/**
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const recurse = (l1, l2, carry) => {
        if (!l1 && !l2) return (carry === 0) ? null : new ListNode(carry)
        let sum = ((l1) ? l1.val : 0) + ((l2) ? l2.val : 0) + carry
        carry = 0
        if (sum > 9) {
            carry = 1
            sum -= 10
        }
        const retVal = new ListNode(sum)
        retVal.next = recurse(((l1) ? l1.next : l1), ((l2) ? l2.next : l2), carry) // add next two nodes
        return retVal
    }
    return recurse(l1, l2, 0)
};

let l1 = { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } }
let l2 = { val: 9, next: { val: 9, next: { val: 9, next: null } } }

console.log(JSON.stringify(addTwoNumbers(l1, l2)));


