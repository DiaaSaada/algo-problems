/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let i = 2;
    let curr = head.next
    let prev = head.val
    let prevCritical = -1
    const res = [-1, -1]
    let firstCritical = -1;
    while (curr && curr.next) {
        if (
            (prev > curr.val && curr.next.val > curr.val) ||
            (prev < curr.val && curr.next.val < curr.val)) {

            if (firstCritical < 0) {
                firstCritical = i

            } else if (prevCritical > 0) {
                res[0] = Math.min(res[0], prevCritical);
                res[1] = Math.max(res[1], i - firstCritical);
            }

            prevCritical = i
        }

        console.log({ i, prevCritical, val: curr.val, res })
        i++
        prev = curr.val
        curr = curr.next

    }
    return res
};