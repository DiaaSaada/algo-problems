/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {

    const arr = []
    let i = 0
    let sum = 0
    let curr = head.next
    while (curr) {
        sum += curr.val
        if (curr.val == 0) {
            arr.push(sum)
            sum = 0
        }
        curr = curr.next
    }
    if (!arr) {
        return null
    }
    const res = new ListNode(arr[0], null)
    curr = res
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i], null)
        curr = curr.next
    }
    return res;
};