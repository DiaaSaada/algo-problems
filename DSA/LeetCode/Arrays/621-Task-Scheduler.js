/**
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 *
 * Output: 8
 *
 * Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {


    let map= new Map();
    tasks.forEach((t) =>{
        let f = map.has(t) ? map.get(t) : 0
        map.set(t ,  f +1)
    });
    const sortedArray = Array.from(map).sort((a, b) =>    b[1] - a[1]);
    let heat =1;

    for (let [key, value] of sortedArray) {
        console.log(key + " = " + value);
    }

   let mostNeededBuffer =


};