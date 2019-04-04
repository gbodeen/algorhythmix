/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

export const range = (start, end, step) => {
  if (!end) end = start;
  if (!step) {
    step = (start <= end) ? 1 : -1;
  }
  if (typeof start !== 'number' ||
    typeof end !== 'number' ||
    typeof step !== 'number' ||
    isNaN(start) || isNaN(end) || isNaN(step)) {
    return null;
  }

  const nums = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      nums.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      nums.push(i);
    }
  }

  return nums;
}

export const arraySum = (nums) => {
  return nums.reduce((sum, x) => sum + x, 0);
}

function PE001(n) {
  return arraySum(range(3, n).filter(x => {
    return x % 3 === 0 || x % 5 === 0;
  }));
}

// tests:
console.log(PE001(10)); // 23
console.log(PE001(1000)); // 233168

