/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

class MinStack {
  Stack<Integer> stack = new Stack<>();
  Stack<Integer> mins = new Stack<>();

  public void push(int x) {
    stack.push(x);
    if (mins.empty()) {
      mins.push(x);
    } else {
      mins.push(Math.min(x, getMin()));
    }
  }

  public void pop() {
    mins.pop();
    stack.pop();
  }

  public int top() {
    return stack.peek();
  }

  public int getMin() {
    return mins.peek();
  }
}
