/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {

    const res = []
    for (let i = 0; i < m; i++) {
        res.push(new Array(n).fill(-1))
    }


    let curr = head
    let uLimit = 1
    let bLimit = m - 1
    let rLimit = n - 1
    let lLimit = 0
    let moveR = 0   // move in row
    let moveC = 1   // move in col
    let r = 0
    let c = -1
    let dir = 'r'

    while (curr) {

        r = r + moveR
        c = c + moveC

        res[r][c] = curr.val
        curr = curr.next

        if (dir == 'r' && c >= rLimit) {
            moveR = 1
            moveC = 0

            rLimit--
            dir = 'b'
        } else if (dir == 'b' && r >= bLimit) {
            moveR = 0
            moveC = -1
            bLimit--

            dir = 'l'
        } else if (dir == 'l' && c <= lLimit) {
            moveR = -1
            moveC = 0
            lLimit++

            dir = 'u'
        } else if (dir == 'u' && r <= uLimit) {
            moveR = 0
            moveC = 1

            uLimit++
            dir = 'r'
        }



    }

    return res

};