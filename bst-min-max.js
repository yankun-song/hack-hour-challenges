function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

// Iterative way, O(N) time and O(1) space
const bstMinMax = (root) => {
  max_pointer = root;
  min_pointer = root;

  // find min val
  while (min_pointer.left) {
    min_pointer = min_pointer.left;
  }
  // find max val
  while (max_pointer.right) {
    max_pointer = max_pointer.right;
  }
  return max_pointer.value - min_pointer.value;
};

/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

// Recursive way: O(N) space
// const lowestCommonAncestor = (root, p, q) => {
//   if (root.value < p.value && root.value < q.value)
//     return lowestCommonAncestor(root.right, p, q);
//   if (root.value > p.value && root.value > q.value)
//     return lowestCommonAncestor(root.left, p, q);
//   return root;
// };

// Iterative way: O(1) space
const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (root.value < p.value && root.value < q.value) root = root.right;
    else if (root.value > p.value && root.value > q.value) root = root.left;
    else return root;
  }
};

module.exports = { BinarySearchTree, bstMinMax, lowestCommonAncestor };
