/*
If p is the perimeter of a right angle triangle with integral 
length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

class PE039 {
  triangles(p) {
    const solutions = [];
    for (let a = 1; a <= p / (2 + Math.sqrt(2)); a++) {
      for (let b = a; b < (p - a) / 2; b++) {
        let c = p - a - b;
        if (c === Math.sqrt(a * a + b * b)) {
          solutions.push([a, b, c]);
        }
      }
    }
    return solutions;
  }

  maxTriangles() {
    let max = 0, maxp;
    for (let p = 12; p <= 1000; p++) {
      let current = this.triangles(p).length;
      if (current > max) {
        max = current;
        maxp = p;
      }
    }
    return maxp;
  }

  static main() {
    const test = new PE039();
    console.log(120 / (2 + Math.sqrt(2)))
    console.log(test.triangles(120)); // 
    console.log(test.maxTriangles()); //
    console.log(test.triangles(840)); //
  }
}


// test
PE039.main();