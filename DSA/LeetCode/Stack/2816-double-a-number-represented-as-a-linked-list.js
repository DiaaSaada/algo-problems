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
var doubleIt = function (head) {

    const stack = [];

    let curr = head
    while (curr) {
        stack.push(curr)
        curr = curr.next
    }

    let acc = 0
    while (stack.length > 0) {
        let node = stack.pop()
        let val = (node.val * 2) + acc
        node.val = val % 10
        acc = Math.floor(val / 10)
    }

    return (acc > 0) ? new ListNode(acc, head) : head

};