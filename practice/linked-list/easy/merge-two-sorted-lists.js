/**
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
 */

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

    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val > l2.val) [l1, l2] = [l2, l1];

    let solution = l1;
    console.log(JSON.stringify(l1));
    console.log(JSON.stringify(l2));
    console.log(JSON.stringify(solution));

    let i = 0;
    while (l1.next && l2) {
        if (l1.next.val > l2.val) [l1.next, l2] = [l2, l1.next];
        else {
            console.log('[l1 replaced]');
            l1 = l1.next;
        };
        console.log(i);
        console.log(JSON.stringify(l1));
        console.log(JSON.stringify(l2));
        console.log(JSON.stringify(solution));
        i++;
    }

    l1.next = l2;

    console.log(i);
    console.log(JSON.stringify(l1));
    console.log(JSON.stringify(l2));
    console.log(JSON.stringify(solution));
    return solution;
};


let l1 = { val: 3, next: { val: 4, next: { val: 5, next: null } } };
let l2 = { val: 0, next: { val: 6, next: { val: 8, next: null } } };;

mergeTwoLists(l1, l2);

/**
def mergeTwoLists(self, first_list: Optional[ListNode], second_list: Optional[ListNode]) -> Optional[ListNode]:
# Check None on first_list, second_list
if first_list is None and second_list is None:
    return None
elif first_list is None:
    return second_list
elif second_list is None:
    return first_list

# first_list initially gets smaller value
if first_list.val > second_list.val:
    first_list, second_list = second_list, first_list

# Make pointer to head of first_list
solution = first_list

while first_list.next and second_list:
    if first_list.next.val > second_list.val:
        first_list.next, second_list = second_list, first_list.next
    else:
        first_list = first_list.next

# Merge the remaining of second_list
first_list.next = second_list

return solution
 */