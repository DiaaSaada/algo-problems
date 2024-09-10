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
var insertGreatestCommonDivisors = function (head) {

    let curr = head

    while (curr && curr.next) {


        let newNode = new ListNode(gcd(curr.val, curr.next.val), curr.next)
        curr.next = newNode
        curr = curr.next.next;

    }

    return head


};

const gcd = function (a, b) {
    const smaller = Math.min(a, b);
    let gcdVal = 1;

    for (let i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            gcdVal = i;
        }
    }

    return gcdVal;
}

