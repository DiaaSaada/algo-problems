// 988. Smallest String Starting From Leaf

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
 * @return {string}
 */
var smallestFromLeaf = function (root) {

    const strings = []
    function helper(node, curr) {
        if (!node) {

            return
        }
        curr = String.fromCharCode((("a".charCodeAt(0) + node.val))) + curr
        if (!node.left && !node.right) {
            strings.push(curr)
        }
        helper(node.left, curr);
        helper(node.right, curr);

    }

    helper(root, "")
    strings.sort()
    return strings[0]

};