class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first && !this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (!this.first) return null;

        let tempNode = this.first;
        this.first = this.first.next;
        this.length--;

        if (!this.first) this.last = null;

        return tempNode;
    }

    isEmpty() {
        return !this.first && !this.last;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(JSON.stringify(myQueue));
console.log(JSON.stringify(myQueue.peek()));
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(JSON.stringify(myQueue));
console.log(JSON.stringify(myQueue.isEmpty()));

