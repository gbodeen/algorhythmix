/*
Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and 
subtraction. Your functions will only have to handle integer math.

EXAMPLES:
multiply(5, 2) === 10
divide(5, 2) === 2
modulo(5, 2) === 1
*/

var multiply = function (x, y) {
  if (y < 0) return -multiply(x, -y);

  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return product;
};

var divide = function (x, y) {
  if (y === 0) return 'NaN';
  if (x < 0) return -divide(-x, y);
  if (y < 0) return -divide(x, -y);

  let quotient = 0;
  while (x >= y) {
    x -= y;
    quotient++;
  }
  return quotient;
};

var modulo = function (x, y) {
  if (y === 0) return 'NaN';
  if (x < 0) return -modulo(-x, y);
  if (y < 0) return modulo(x, -y);

  while (x >= y) {
    x -= y;
  }
  return x;
};
// time complexity of each: linear
// space complexity of each: constant

