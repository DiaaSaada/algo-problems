// STILL NOT SOLVED!!!!!!!!!!!!!!!!!!!!!!!!

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {

    // while (char in key )
    // target key char
    // curent ring char
    // check if current is the target
    // step++
    // find nearest target in right side of ring
    // find nearest target in left side of ring
    // choose one and update the ring
    // steps = steps+ needed_steps

    // return steps

    let steps = 0
    let newRing = ring.split("")
    for (c of key.split("")) {
        if (c == newRing[0]) {

            steps++
            console.log("no rotate, just click", steps)
        } else {
            let r = newRing.indexOf(c)
            let l = newRing.length - newRing.lastIndexOf(c)
            console.log({ r, l })
            if (r <= l) {
                console.log("rotate right")
                // update ring
                // update steps
                while (c != newRing[0]) {
                    newRing.push(newRing.shift());

                    steps++
                    console.log(newRing, steps)
                }

            } else {
                console.log("rotate left")
                // rotate left
                // update ring
                // update steps
                while (c != newRing[0]) {
                    newRing.unshift(newRing.pop());

                    steps++
                    console.log(newRing, steps)
                }

            }
            steps++
            console.log(c, "----------", steps)
        }
    }



    return steps;
};