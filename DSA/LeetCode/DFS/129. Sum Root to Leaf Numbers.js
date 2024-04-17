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
 * @return {number}
 */
var sumNumbers = function (root) {

    let sum = 0
    function dfs(node, curr) {
        if (!node) {
            return curr
        }
        curr += node.val
        if (!node.left && !node.right) {
            sum += parseInt(curr)
            return sum
        }
        dfs(node.left, curr)
        dfs(node.right, curr)

    }

    dfs(root, "")
    return sum

};