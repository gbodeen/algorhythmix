/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, 
for which, a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function PE009() {
    let c;
    for (let a = 1; a < 334; a++) {
        for (let b = a + 1; b < 500; b++) {
            c = 1000 - a - b;
            if (c <= b) break;
            if (a * a + b * b - c * c === 0) {
                return [a, b, c, a * b * c];
            }
        }
    }
}

console.log(PE009()); // 31875000