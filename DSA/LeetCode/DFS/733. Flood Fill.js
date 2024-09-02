/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    if (image[sr][sc] == color)
        return image
    const originalColor = image[sr][sc]

    const visited = new Map()
    function bfs(r, c) {
        if (r >= image.length || c >= image[0].length || r < 0 || c < 0)
            return


        if (visited.has(`${r}-${c}`))
            return

        visited.set(`${r}-${c}`, true)
        if (image[r][c] == originalColor) {
            image[r][c] = color


            bfs(r - 1, c)
            bfs(r + 1, c)
            bfs(r, c - 1)
            bfs(r, c + 1)
        }


    }

    bfs(sr, sc)
    return image

};