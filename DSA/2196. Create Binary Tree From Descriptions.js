/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    /**
     *  [parenti, childi, isLefti]
     *  [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
        Output: [50,20,80,15,17,19]
     */
    const root = new Map();
    const childs = new Map();
    const parents = new Map();

    for (a of descriptions) {
        childs.set(a[1], a)
        let x = parents.get(a[0]) ?? { l: null, r: null }
        if (a[2] == 1) {
            x.l = a[1]
        } else {
            x.r = a[1]
        }
        parents.set(a[0], x)

        if (!childs.has(a[0])) {
            root.set(a[0], a)
        }

        if (root.has(a[1])) {
            root.delete(a[1])
        }

    }




    for ([r, ch] of root.entries()) {
        let ch = parents.get(r)
        return new TreeNode(r, getChild(ch.l), getChild(ch.r))
    }

    function getChild(val) {

        if (!val)
            return null

        if (!parents.has(val))
            return new TreeNode(val, null, null)

        let ch = parents.get(val)
        return new TreeNode(val, getChild(ch.l), getChild(ch.r))
    }

};