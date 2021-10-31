class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top && !this.bottom) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if (!this.top) return null;

        let tempNode = this.top;
        this.top = this.top.next;
        if (!this.top) this.bottom = null;
        this.length--;
        return tempNode;
    }

    isEmpty() {
        return !this.top && !this.bottom;
    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
// myStack.pop();
// console.log(myStack);
console.log(JSON.stringify(myStack));