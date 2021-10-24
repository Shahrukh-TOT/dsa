/**
10 -- > 5 -- > 16
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    } // O(1)

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    } // O(1)

    insert(index, value) {
        if (index == 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        let newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        console.log(leader);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;

    } // O(n)

    remove(index) {
        if (index < 0 || index >= this.length) return;

        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let leader = this.traverseToIndex(index - 1);
        let deleteNode = leader.next;
        leader.next = deleteNode.next;
        this.length--;
    }

    traverseToIndex(index) {
        let curNode = this.head;
        let i = 0;
        while (i !== index) {
            curNode = curNode.next;
            i++;
        }
        return curNode;
    } // O(n)

    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    reverse() {
        if (this.length === 1) return this;

        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }
}

const myLinkedList = new SinglyLinkedList(10);
console.log(myLinkedList.append(5));
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(5, 99);
myLinkedList.insert(0, 0);
myLinkedList.printList();
myLinkedList.remove(5);
myLinkedList.remove(5);
myLinkedList.remove(0);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
