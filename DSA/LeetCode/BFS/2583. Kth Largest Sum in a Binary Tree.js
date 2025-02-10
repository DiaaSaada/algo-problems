/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {



    function bfs(node, l) {
        if (!node)
            return

        if (temp[l] ?? null) {
            temp[l] += node.val
        } else {
            temp[l] = node.val
        }
        bfs(node.left, l + 1)
        bfs(node.right, l + 1)
    }
    let temp = []

    if (!root)
        return -1

    bfs(root, 0)

    temp.sort((a, b) => b - a)

    return temp[k - 1] ?? -1
};