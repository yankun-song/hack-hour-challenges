/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree) => {
  // // Left tree has an upper bound, and right tree has a lower bound
  // // Define a helper function to consider these boundaries
  // const validateBSTwithRange = (root, low, high) => {
  //   if (!root) return true;
  //   if (root.value >= high || root.value <= low) return false;
  //   const leftOK = validateBSTwithRange(root.left, low, root.value);
  //   const rightOK = validateBSTwithRange(root.right, root.value, high);
  //   return leftOK && rightOK;
  // };

  // return validateBSTwithRange(tree, -Infinity, Infinity);

  // One feature of BST is: if you in-order traverse it, it should be always increasing
  // IN-order traverse the BST and save the results in an array, check if the array keeps increasing

  // Step1: Helper function to traverse and save results
  const inOrderTraversal = (root, result) => {
    if (!root) return;
    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
  };
  // Step2: Put the tree root in, get the result
  const values = [];
  inOrderTraversal(tree, values);
  // Step3: Check if the values keep increasing
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) return false;
  }
  return true;
};

module.exports = { BinaryTree, validBST };
