function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstSum = (root) => {
  if (!root) return 0;
  return bstSum(root.left) + root.value + bstSum(root.right);
};

/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

// const bstReverse = root => {
//   if (!root) return null;
//   const reversedLeft = bstReverse(root.left);
//   const reversedRight = bstReverse(root.right);
//   root.left = reversedRight;
//   root.right = reversedLeft;
//   return root;
// };

const bstReverse = (root) => {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    node = queue.shift();
    // invert its left and right
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    // push children in queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

module.exports = { BinarySearchTree, bstSum, bstReverse };
