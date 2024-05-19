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
var distributeCoins = function (root) {

    let moves = 0

    dfs(root)

    function dfs(node) {

        if (!node) { return 0 }


        if (node.left == null && node.right == null) {
            //leave
            moves += Math.abs(node.val - 1)
            return node.val - 1
        } else {
            let left = dfs(node.left);
            let right = dfs(node.right);
            let sum = node.val + left + right - 1
            if (sum != 0) {
                moves += Math.abs(sum)
            }
            return sum
        }
    }
    return moves;
};