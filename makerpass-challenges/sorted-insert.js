/*
Given a sorted stack of integers (smallest integer at the top) 
and an element to insert, write a function – sortedInsert(stack, element) 
– which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the 
original stack.

The stack will have the methods, isEmpty, peek, push, and pop. You can 
also use count to view how many elements are in the stack. The stack 
implementation is available to view below.

Helper function Stack is provided.
*/

function sortedInsert(stack, element) {
  const storage = new Stack();
  while (stack.peek() < element) {
    storage.push(stack.pop());
  }
  stack.push(element);
  while (!storage.isEmpty()) {
    stack.push(storage.pop());
  }
  return stack;
}
// time complexity: linear
// space complexity: linear also

var Stack = function (initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function () {
  return !this.count;
};

Stack.prototype.peek = function () {
  return this.store[this.count];
};

Stack.prototype.push = function (val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function () {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};


// tests
describe("sortedInsert", function () {
  it("exists", function () {
    expect(sortedInsert).to.be.a('function')
  });

  it("returns the original stack", function () {
    var a = new Stack();
    var result = sortedInsert(a, 0);

    expect(a).to.equal(result);
  });

  it("inserts the element at the top when appropriate", function () {
    var a = new Stack();
    sortedInsert(a, 3);

    expect(a.peek()).to.equal(3);
    expect(a.count).to.equal(1);

    var b = new Stack(20);
    b.push(15);
    b.push(10);

    expect(sortedInsert(b, 5).peek()).to.equal(5);
    expect(b.count).to.equal(4);
  });

  it("inserts the element in the middle correctly", function () {
    var a = new Stack();
    a.push(9);
    a.push(7);
    a.push(5);
    a.push(3);
    sortedInsert(a, 6);

    var a_result = [];
    while (!a.isEmpty()) {
      a_result.push(a.pop());
    }

    expect(a_result.join("")).to.equal("35679");

    var b = new Stack();
    b.push(5);
    b.push(3);
    b.push(2);
    b.push(1);
    sortedInsert(b, 4);

    var b_result = [];
    while (!b.isEmpty()) {
      b_result.push(b.pop());
    }

    expect(b_result.join("")).to.equal("12345");
  });

  it("inserts the element to the bottom correctly", function () {
    var a = new Stack(3);
    sortedInsert(a, 6);

    expect(a.pop()).to.equal(3);
    expect(a.pop()).to.equal(6);

    var b = new Stack(6);
    b.push(4);
    b.push(2);
    b.push(0);
    sortedInsert(b, 8);

    var b_result = [];
    while (!b.isEmpty()) {
      b_result.push(b.pop());
    }

    expect(b_result.join("")).to.equal("02468");
  });
});