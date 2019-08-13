"""
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
"""


class MinStack:

  def __init__(self):
    self.stack = []
    self.mins = []

  def push(self, x: int) -> None:
    self.stack.append(x)
    if len(self.mins) == 0:
      self.mins.append(x)
    else:
      self.mins.append(min(x, self.getMin()))

  def pop(self) -> None:
    self.mins.pop()
    self.stack.pop()

  def top(self) -> int:
    return self.stack[-1]

  def getMin(self) -> int:
    return self.mins[-1]
