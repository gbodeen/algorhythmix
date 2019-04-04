/*
Write a function linkedListIntersection that returns the node at 
which the intersection of two linked lists begins, or null if 
there is no such intersection.

Example:

Given the following two linked lists list1 and list2, 
linkedListIntersection(list1,list2) should return D as the node 
of intersection.

   A → B → C
            ↘
              D → E → F
            ↗
       X → Y

Given the following two linked lists list1 and list2, 
linkedListIntersection(list1,list2) should return NULL as there 
is no point of intersection.

   A → B → C → D
   X → Y → Z
*/


const linkedListIntersection = (list1, list2) => {
  const stack1 = list2stack(list1),
    stack2 = list2stack(list2);
  let lastMatch = null, n1, n2;
  do {
    n1 = stack1.pop();
    n2 = stack2.pop();
    if (n1 === n2) {
      lastMatch = n1;
    }
  } while (n1 === n2);
  return lastMatch;
}
// time complexity: linear
// space complexity: linear

function list2stack(head) {
  const stack = [];
  do {
    stack.push(head);
    head = head.next;
  } while (head);
  return stack;
}


// tests
var stringify = function (list) {
  var res = [];
  while (list !== null) {
    res.push(list.value);
    list = list.next;
  }
  return res.join("");
}


describe('linkedListIntersection', function () {
  it('should be exist', function () {
    should.exist(linkedListIntersection);
  });

  it('should be a function', function () {
    linkedListIntersection.should.be.a.Function;
  });

  it('should return the correct node in the case of two merged linked lists of the same size', function () {
    var list1 = Node('A');
    var nodeB = list1.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');
    var nodeF = nodeE.next = Node('F');

    var list2 = Node('X')
    var nodeY = list2.next = Node('Y');
    var nodeZ = nodeY.next = Node('Z');
    nodeZ.next = nodeD;

    var expected = 'DEF';
    var result = stringify(linkedListIntersection(list1, list2));

    expected.should.be.equal(result);
  });


  it('should return the correct node in the case of two merged linked lists of different sizes', function () {
    var list1 = Node('A');
    var nodeB = list1.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');
    var nodeF = nodeE.next = Node('F');

    var list2 = Node('X')
    var nodeY = list2.next = Node('Y');
    nodeY.next = nodeD;

    var expected = 'DEF';
    var result = stringify(linkedListIntersection(list1, list2));

    expected.should.be.equal(result);
  });

  it('should return null if the two lists have no intersection', function () {
    var list1 = Node('N');
    var list2 = Node('O');

    var expected = null;
    var result = linkedListIntersection(list1, list2);

    should.equal(result, expected);
  });

});