// var MinStack = function () {
//     this.stack = [];
//     this.minNumberStack = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//     this.stack.push(val);
//     if (val <= this.minNumberStack[this.minNumberStack.length - 1] || this.minNumberStack.length == 0) this.minNumberStack.push(val);

//     console.log(this.minNumberStack);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     let popped = this.stack.pop();

//     if (popped == this.minNumberStack[this.minNumberStack.length - 1]) {
//         this.minNumberStack.pop();
//     }
//     return popped;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     return this.minNumberStack[this.minNumberStack.length - 1]
// };


var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({ val: x, min: Math.min(min, x) })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length > 0) {
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min
    }
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(3)
obj.push(1)
obj.push(4)
obj.push(0)
obj.push(2)
obj.push(-1)
// obj.pop()
// obj.pop()
console.log(obj.top());
console.log(obj.getMin());
