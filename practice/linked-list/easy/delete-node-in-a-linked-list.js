
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} node
* @return {void} Do not return anything, modify node in-place instead.
*/
var deleteNode = function (node) {
    /**
     * Delete current node from the linked list.. input is the current node only
     */
    let nextNode = node.next; // pointer of nextNode
    node.val = nextNode.val; // replace the nextNode value in the current node
    node.next = nextNode.next; // and replace it's pointer as well
};