/*
Delta Storage source control software stores versions of files in diffs. 
In other words, if a developer added 3 lines to myfile.txt, then those 
three line additions will be what gets saved when committed.

Given a list of changes for a single “file”, construct the final result 
as a single string.
*/

function reconstruct(changes) {
  let lines = [];
  for (let array of changes) {
    for (let change of array) {
      switch (change.type) {
        case 'add':
          lines.splice(change.line, 0,
            ...change.text.slice(0, -1).split('\n'));
        case 'rem':
          lines.splice(change.line, change.count);
      }
    }
  }
  return lines.join('\n') + '\n';
}
// time complexity: O(N) for N changes
// space complexity: O(N)
// possibly O(1) space could be achieved by mutating the input array
// that doesn't seem worthwhile though


// tests
console.log(reconstruct([[{ "type": "add", "line": 0, "text": "pillow\nhogs\n" }],
[{ "type": "rem", "line": 1, "count": 1 }],
[{ "type": "add", "line": 0, "text": "fluffy\n" },
{ "type": "add", "line": 2, "text": "carnivores\n" }]])); // fluffy\npillow\ncarnivores\n
console.log(reconstruct([[{ "type": "add", "line": 0, "text": "there\n" }],
[{ "type": "add", "line": 0, "text": "hi\n" }]])); // hi\nthere\n
console.log(reconstruct([[{ "type": "add", "line": 0, "text": "x\ny\n" }],
[{ "type": "rem", "line": 0, "count": 1 }],
[{ "type": "rem", "line": 0, "count": 1 }],
[{ "type": "add", "line": 0, "text": "x\ny\n" }],
[{ "type": "rem", "line": 0, "count": 2 }],
[{ "type": "add", "line": 0, "text": "y\n" }],
[{ "type": "add", "line": 0, "text": "x\n" }]])); // x\ny\n
console.log(reconstruct([[{ "type": "add", "line": 0, "text": "a\nX\nc\n" }],
[{ "type": "rem", "line": 1, "count": 1 },
{ "type": "add", "line": 1, "text": "b\n" }]])); // a\nb\nc\n