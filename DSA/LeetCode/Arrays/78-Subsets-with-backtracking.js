/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (arr) {
    const result = [];
    const subset = [];

    function backtrack(index) {
        if (index === arr.length) {
            result.push([...subset]);
            return;
        }

        // Include arr[index]
        subset.push(arr[index]);
        backtrack(index + 1);

        // Exclude arr[index]
        subset.pop();
        backtrack(index + 1);
    }

    backtrack(0);
    return result;
};