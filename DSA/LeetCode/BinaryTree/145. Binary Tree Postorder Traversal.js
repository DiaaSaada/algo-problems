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
 * @return {number[]}
 */
var postorderTraversal = function (root) {

    const res = []
    function trev(node) {
        if (!node)
            return

        trev(node.left)
        trev(node.right)
        res.push(node.val)

    }

    trev(root)
    return res
};