/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {



    function dfs(i, set) {
        if (i >= s.length)
            return 0

        let res = 0
        for (let j = i; j < s.length; j++) {
            let substr = s.substring(i, j + 1)

            if (set.has(substr))
                continue

            set.add(substr);
            res = Math.max(res, 1 + dfs(j + 1, set))
            set.delete(substr);

        }
        return res
    }

    return dfs(0, new Set());
};