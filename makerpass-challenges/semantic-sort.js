/*
A "semantic version" is a string of format x.y.z, where x is the 
major version number, y is the minor version number, and z is the 
patch version number. Given a newline-separated string with these 
version numbers, return a newline-separated string with the versions 
sorted from highest to lowest. When sorting, x takes priority over 
y, and y takes priority over z.

Examples
Input	-> Output
"2.0.0\n1.0.0\n3.0.0"	-> "3.0.0\n2.0.0\n1.0.0"
"1.0.0\n2.99.5"	-> "2.99.5\n1.0.0"
"1.0.1\n1.0.10"	-> "1.0.10\n1.0.1"
*/

const semSort = versions =>
  versions.split('\n').map(v => v.split('.'))
    .sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2])
    .map(v => v.join('.')).join('\n');
// time complexity: O(n * log(n)) due to the sort
// space complexity: O(n) due to the splits & maps


// tests:
console.log(semSort("1.0.0\n2.99.5") === "2.99.5\n1.0.0");
console.log(semSort("2.0.0\n1.0.0\n3.0.0") === "3.0.0\n2.0.0\n1.0.0");
console.log(semSort("1.0.1\n1.0.10") === "1.0.10\n1.0.1");
console.log(semSort("3.0.2\n3.0.3\n3.0.1\n3.0.2") === "3.0.3\n3.0.2\n3.0.2\n3.0.1");
console.log(semSort("10.2.3\n2.0.11\n0.1.7\n0.10.7\n2.0.12\n1.23.45") === "10.2.3\n2.0.12\n2.0.11\n1.23.45\n0.10.7\n0.1.7");