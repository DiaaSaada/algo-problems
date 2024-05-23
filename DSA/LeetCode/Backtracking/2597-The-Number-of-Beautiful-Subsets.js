/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {


    const res = [];
    nums.sort((a, b) => a - b)

    function backtracking(start, k, path) {

        res.push([...path])
        for (let i = start; i < nums.length; i++) {
            if (isValid(nums[i], path)) {
                backtracking(i + 1, k, [...path, nums[i]]);
            }
        }
    }

    function isValid(num, arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (num - arr[i] > k)
                return true;
            if (Math.abs(arr[i] - num) == k)
                return false;
        }
        return true;
    }

    backtracking(0, k, []);
    return res.length - 1;

};