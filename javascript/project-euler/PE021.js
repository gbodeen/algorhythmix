/*
Let d(n) be defined as the sum of proper divisors of n 
(numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are 
an amicable pair and each of a and b are called amicable 
numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 
10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so 
d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

class PE021 {
  isAmicable(n) {
    const m = this.sum(this.divisors(n));
    return m !== n && this.sum(this.divisors(m)) === n;
  }

  divisors(n) {
    if (n === 1) return [1];
    const divs = [1];
    for (let i = 2; i * i < n; i++) {
      if (n % i === 0) {
        let L = (divs.length + 1) / 2;
        divs.splice(L, 0, i, n / i);
      }
    }
    const sqrtN = Math.floor(Math.sqrt(n));
    if (sqrtN * sqrtN === n) {
      divs.splice(divs.length, 0, sqrtN);
    }
    return divs;
  }

  sum(arr) {
    return arr.reduce((total, x) => total + x);
  }

  main() {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      if (this.isAmicable(i)) {
        sum += i;
      }
    }
    return sum;
  }
}


// test
const test = new PE021();
console.log(test.divisors(60));
console.log(test.isAmicable(220)); // true
console.log(test.main()); // 31626