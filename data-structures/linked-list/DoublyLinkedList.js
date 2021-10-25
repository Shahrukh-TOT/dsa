class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
        return this;
    } // O(1)

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    } // O(1)

    insert(index, value) {
        if (index == 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        let newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let follower = leader.next;

        // append tail
        newNode.next = follower;
        follower.prev = newNode;

        // append leader
        newNode.prev = leader;
        leader.next = newNode;
        this.length++;

    } // O(n)

    remove(index) {
        if (index < 0 || index >= this.length) return;

        if (index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return;
        }

        let leader = this.traverseToIndex(index - 1);
        let deleteNode = leader.next;
        let follower = deleteNode.next;

        leader.next = follower;
        if (follower) follower.prev = leader;
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
        let items = this.printList();
        let linkedList = new DoublyLinkedList(items[items.length - 1]);
        for (let i = items.length - 2; i >= 0; i--) {
            const item = items[i];
            linkedList.append(item);
        }
        this.head = linkedList.head;
        this.tail = linkedList.tail;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.printList();
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.printList();
myLinkedList.insert(5, 99);
myLinkedList.printList();
myLinkedList.insert(0, 0);
myLinkedList.printList();
myLinkedList.remove(5);
myLinkedList.printList();
myLinkedList.remove(5);
myLinkedList.printList();
myLinkedList.remove(0);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();