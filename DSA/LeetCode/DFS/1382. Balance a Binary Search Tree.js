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
 * @return {TreeNode}
 */
var balanceBST = function (root) {


    function dfs(node) {
        if (!node)
            return []

        return [...dfs(node.left), node.val, ...dfs(node.right)];
    }
    const res = dfs(root);

    function rec(start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);


        return new TreeNode(
            res[mid],
            rec(start, mid - 1),
            rec(mid + 1, end)
        );
    }

    return rec(0, res.length - 1)

};