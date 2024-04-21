/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {

    if (edges.length == 0 && n == 1)
        return true;

    const graph = new Map();// a map to draw a graph each shours with array of its destinations



    for (let i = 0; i < edges.length; i++) {
        buildGraph(edges[i][0], edges[i][1])
        buildGraph(edges[i][1], edges[i][0])
    }

    const visited = new Map();
    let path = false

    dfs(source)

    return path;



    function buildGraph(s, d) {
        if (graph.has(s)) {
            graph.set(s, [d, ...graph.get(s)]);
        } else {
            graph.set(s, [d]);
        }
    }


    function dfs(s) {

        for (v of graph.get(s)) {
            if (v == destination) {
                path = true
                return true;
            }

            if (!visited.has(`${s}-${v}`)) {



                visited.set(`${s}-${v}`, true)
                if (dfs(v)) {
                    break
                }
            }
        }


    }

};