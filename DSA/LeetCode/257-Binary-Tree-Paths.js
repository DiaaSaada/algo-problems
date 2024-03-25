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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

    const queue = [root];
    const res = []
    dfs(root, "")
    return res;

    /**
     * @param {TreeNode} node
     * @param {string} path
     */
    function dfs(node, path) {

        if( !node){
            return
        }
        if (!node.left && ! node.right) {
            return res.push( [...path, node.val].join("->") );

        }
        dfs(node.left, [...path, node.val])
        dfs(node.right, [...path, node.val])
    }

};