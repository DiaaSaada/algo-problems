/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {


    const CIRCULAR = 0
    const SQUARE = 1
    const studentsWant = {
        0: 0,
        1: 0,
    }

    for (let a of students) {
        studentsWant[a] += 1
    }


    while (sandwiches.length > 0) {
        if (studentsWant[CIRCULAR] === 0 && sandwiches[0] === CIRCULAR) {
            return students.length
        }
        if (studentsWant[SQUARE] === 0 && sandwiches[0] === SQUARE) {
            return students.length
        }

        if (sandwiches[0] === students[0]) {
            studentsWant[students[0]] -= 1
            sandwiches.shift()
            students.shift()
        } else {
            students.push(students.shift())
        }
    }
    return 0;

};