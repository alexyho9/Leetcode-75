/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {

    let merged = new TreeNode(null);
    if (root1 == null && root2 == null) {
        return null;
    }
    else if (root1 == null) {
        merged.val = root2.val;
        merged.left = mergeTrees(null, root2.left);
        merged.right = mergeTrees(null, root2.right);
    }
    else if (root2 == null) {
        merged.val = root1.val;
        merged.left = mergeTrees(root1.left, null);
        merged.right = mergeTrees(root1.right, null);
    }
    else {
        merged.val = root1.val + root2.val;
        merged.left = mergeTrees(root1.left, root2.left);
        merged.right = mergeTrees(root1.right, root2.right);
    }
    return merged;
};