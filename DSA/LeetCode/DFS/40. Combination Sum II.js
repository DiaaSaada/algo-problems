/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {

    const res = []
    candidates.sort((a, b) => a - b)


    function dfs(i, curr, total) {
        if (total == target) {
            res.push([...curr])
            return
        }
        if (total > target || i >= candidates.length)
            return

        curr.push(candidates[i])
        dfs(i + 1, curr, total + candidates[i])
        curr.pop()

        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }
        dfs(i + 1, curr, total)
    }

    dfs(0, [], 0)
    return res

};