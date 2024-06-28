/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = [];
    nums.sort((a, b) => b - a);
    let val = Math.floor(nums.length / 2);
    for (let x = 0; x < val; x++) {
        let a = nums.pop();
        let b = nums.pop();
        arr.push(b);
        arr.push(a);
    }
    return arr;
};