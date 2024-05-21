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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {

    const stack = []

    function dfs(node, parent = null) {
        if (!node)
            return
        stack.push([node, parent])

        dfs(node.left, node)
        dfs(node.right, node)

    }
    dfs(root);

    while (stack.length > 0) {
        let pair = stack.pop();
        let node = pair[0]
        let parent = pair[1]
        if (node.val == target && node.left == null && node.right == null) {


            if (parent?.left == node) {
                node = null
                parent.left = null;
            } else if (parent?.right == node) {
                node = null
                parent.right = null;

            }

        }
    }

    if (root.val == target && root.left == null && root.right == null) {
        return null
    }

    return root
};