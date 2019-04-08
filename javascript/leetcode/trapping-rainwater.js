/*
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, compute how much water it 
is able to trap after raining.
*/

var trap = function(heights) {
    const leftMaxes = heights.slice();
    const rightMaxes = heights.slice();
    let water = 0;
    for (let i = 1; i < heights.length; i++) {
        if (leftMaxes[i] < leftMaxes[i - 1]) leftMaxes[i] = leftMaxes[i - 1];
        let j = heights.length - 1 - i;
        if (rightMaxes[j] < rightMaxes[j + 1]) rightMaxes[j] = rightMaxes[j + 1];
    }
    for (let k = 0; k < heights.length; k++) {
        water += Math.min(leftMaxes[k], rightMaxes[k]) - heights[k];
    }

    return water;
};
// time & space complexity: O(n)
// I know it's possible to reduce the space complexity in a clever fashion

// tests
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([])); // 0
console.log(trap([5])); // 0
console.log(trap([2, 4])); // 0
console.log(trap([3, 2, 4])); // 1
console.log(trap([0, 1, 0, 1, 2, 0, 1, 2, 3, 2, 1, 2, 1, 2, 0, 0])); // 6
console.log(trap([8, 6, 5, 4, 7, 5, 4, 3, 5, 3, 2, 1, 3, 2, 2, 2])); // 12

