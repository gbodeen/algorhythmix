/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

var MinStack = function () {
  this.stack = [];
  this.mins = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  let min = this.getMin();
  if (min === undefined) {
    this.mins.push(x);
  } else {
    this.mins.push(Math.min(min, x));
  }
};

MinStack.prototype.pop = function () {
  this.mins.pop();
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1];
};


// tests
const test = new MinStack();
test.push(5);
test.push(3);
test.push(1);
test.push(4);
test.push(6);
test.push(2);
test.push(0);
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());
console.log(test.getMin());
console.log(test.pop());