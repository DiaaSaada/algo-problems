/**
 * 2192. All Ancestors of a Node in a Directed Acyclic Graph.js
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {

    /**
     * Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
     * Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
     */
    const res = Array(n)
    for (let i = 0; i < n; i++) {
        res[i] = []
    }

    for ([i, j] of edges) {
        res[j].push(i)
    }
    /**
     *  0:[]
        1:[]
        2:[]
        3:(2) [0, 1]
        4:(2) [0, 2]
        5:(1) [3]
        6:(2) [3, 4]
        7:(2) [2, 3]
     */

    let visited = {}
    for (let i = 0; i < n; i++) {
        for (let j of res[i]) {
            visited = {}

            res[i].push(...getParent(j))
        }
        res[i] = Array.from(new Set(res[i])).sort((a, b) => a - b)
    }

    function getParent(k) {
        if (res[k].length == 0)
            return []
        return [...res[k]]
    }

    console.log(res)
    return res

};
getAncestors(8, [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]])