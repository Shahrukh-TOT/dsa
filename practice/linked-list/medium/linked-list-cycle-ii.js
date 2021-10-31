
//   Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // Use Floyd's Tortoise 🐢 and Hare 🐇 algorithm for cycle detection
    if (head === null) return null;

    let tort = head.next;
    let hare = head.next ? head.next.next : null;

    while (hare) {
        if (tort === hare) {
            let p = head;
            while (p !== hare) {
                p = p.next;
                hare = hare.next;
            }
            return p;
        }
        tort = tort.next;
        hare = hare.next ? hare.next.next : null;
    }

    return null;

    // let s = new Set();

    // let currentNode = head;

    // while (currentNode) {
    //     if (s.has(currentNode)) return currentNode;
    //     s.add(currentNode);
    //     currentNode = currentNode.next;
    // }

    // return null;
};