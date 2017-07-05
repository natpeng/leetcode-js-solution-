// https://leetcode.com/problems/kth-smallest-element-in-a-bst/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    return convertToArray(root)[k - 1];
};

function convertToArray(root) {
    if (root == null) return [];
    
    else {
        var list = convertToArray(root.left);
        list.push(root.val);
        Array.prototype.push.apply(list, convertToArray(root.right)); // this won't return the orig array, it's like merge(l1, l2), it will merge l2 to l1
        return list;
    }

}