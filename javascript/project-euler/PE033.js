/*
The fraction 49/98 is a curious fraction, as an inexperienced 
mathematician in attempting to simplify it may incorrectly 
believe that 49/98 = 4/8, which is correct, is obtained by 
cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial 
examples.

There are exactly four non-trivial examples of this type of 
fraction, less than one in value, and containing two digits 
in the numerator and denominator.

If the product of these four fractions is given in its lowest 
common terms, find the value of the denominator.
*/


class PE033 {
  findCuriousFractions() {
    const results = [];
    for (let n = 10; n <= 99; n++) {
      for (let d = 10; d <= 99; d++) {
        if (n >= d) continue;
        if (this.digitsCancel(n, d)) {
          results.push(n + '/' + d);
        }
      }
    }
    return results;
  }

  digitsCancel(n, d) {
    const ns = n.toString();
    const ds = d.toString();
    let ni, di;
    for (let i = 1; i <= 9; i++) {
      if (ns.includes(i) && ds.includes(i)) {
        ni = parseInt(ns.slice().replace(i, ''));
        di = parseInt(ds.slice().replace(i, ''));
        if (ni * d == n * di) return true;
      }
    }
    return false;
  }

  solution() {
    return Math.round(1 / this.findCuriousFractions().map(x => {
      let [n, d] = x.split('/');
      return n / d;
    }).reduce((prod, num) => prod * num, 1));
  }

  static main() {
    const test = new PE033();
    console.log(test.digitsCancel(49, 98)); // true
    console.log(test.digitsCancel(30, 50)); // false
    console.log(test.digitsCancel(32, 64)); // false
    console.log(test.digitsCancel(36, 63)); // false
    console.log(test.findCuriousFractions()); //
    console.log(test.solution()); // 100
  }
}


// test
PE033.main();