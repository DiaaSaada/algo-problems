function generateDownComps(input, queue, elm) {
    for (let i = 0; i < 4; i++) {
        let x = input.split("")
        x[i] = parseInt(x[i])
        x[i] = x[i] == 0 ? 9 : x[i] - 1
        queue.push([x.join(""), elm[1] + 1]);
    }
}

function generateUpComps(input, queue, elm) {
    for (let i = 0; i < 4; i++) {
        let x = input.split("")
        x[i] = (parseInt(x[i]) + 1) % 10
        queue.push([x.join(""), elm[1] + 1]);
    }
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {


    if (deadends.includes("0000")) {
        return -1
    }


    const queue = [["0000", 0]];

    let visited = new Map();

    while (queue.length > 0) {

        let elm = queue.shift()
        let input = elm[0]
        if (visited.has(input)) {
            continue
        }
        visited.set(input, true);
        if (deadends.includes(input)) {
            continue

        }


        if (input == target) {


            return elm[1]
        }

        generateUpComps(input, queue, elm);

        generateDownComps(input, queue, elm);


    }


    return -1


};