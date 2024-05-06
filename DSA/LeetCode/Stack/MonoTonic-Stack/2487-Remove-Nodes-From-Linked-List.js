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
var removeNodes = function (head) {

    curr = head

    const monStack = [];

    while (curr) {


        while (monStack.length > 0 && curr.val > monStack[monStack.length - 1].val) {
            monStack.pop();
        }

        if (monStack.length > 0) {
            monStack[monStack.length - 1].next = curr
        }

        monStack.push(curr)

        curr = curr.next
    }

    console.log(monStack)
    return monStack[0];

};