/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {

    let visited = new Set();
    let group = 0;  // each group of stones that can be accessed from another stone

    let findConnectedGroup = function (row, col) {
        let key = `${row}-${col}`;
        if (visited.has(key)) return;

        visited.add(key);

        for (let [x, y] of stones) {
            if (row == x || col == y)
                findConnectedGroup(x, y);
        }
    }

    for (let [x, y] of stones) {
        let key = `${x}-${y}`;

        if (!visited.has(key)) {
            // if vsited => Already connected to a group
            findConnectedGroup(x, y);
            group++;
        }
    }
    // we can remove all stones from each group excpet one
    return stones.length - group;
};