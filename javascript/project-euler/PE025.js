/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence 
to contain 1000 digits?
*/

class PE025 {
  *nextFibonacci() {
    let [a, b] = [BigInt(1), BigInt(1)];
    yield a;
    yield b;
    while (true) {
      [a, b] = [b, a + b];
      yield b;
    }
  }

  countDigits(n) {
    return n.toString().length;
  }

  firstToNDigits(n) {
    const fibgen = this.nextFibonacci();
    let i = 1;
    while (true) {
      let fib = fibgen.next().value;
      if (this.countDigits(fib) >= n) {
        return i;
      }
      i++;
    }
  }
}


// tests
const test = new PE025();
const fibgen = test.nextFibonacci();
console.log(fibgen.next()); // 1
console.log(fibgen.next()); // 1
console.log(fibgen.next()); // 2
console.log(fibgen.next()); // 3
console.log(fibgen.next()); // 5
console.log(fibgen.next()); // 8
console.log(test.countDigits(100)); // 3
console.log(test.firstToNDigits(3)); // 12
console.log(test.firstToNDigits(1000)); // 4782