/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
of rows like this: (you may want to display this pattern in a fixed font for 
  better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number 
of rows:

string convert(string s, int numRows);
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/


var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }
  let row = 0, down = true;
  for (let c = 0; c < s.length; c++) {
    rows[row].push(s[c])
    if (down && row === numRows - 1) down = false;
    if (!down && row === 0) down = true;
    down ? row++ : row--;
  }
  return rows.reduce((text, row) => text + row.join(''), '');
};
// time & space complexity: O(n).

// tests
console.log(convert('PAYPALISHIRING', 1)); // 'PAYPALISHIRING'
console.log(convert('PAYPALISHIRING', 2)); // 'PYAIHRNAPLSIIG'
console.log(convert('PAYPALISHIRING', 3)); // 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 4)); // 'PINALSIGYAHRPI'

