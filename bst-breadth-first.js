function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  if (!root) return;
  const queue = [root];
  while (queue.length > 0) {
    // get the 1st one in queue
    const node = queue.shift();
    // apply cb on it
    callback(node.value);
    // check its children
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = (grid) => {
  const rowBound = grid.length,
    colBound = grid[0].length;

  // have a notebook to record positions visited
  const visited = new Set();

  const queue = [[0, 0]];
  let steps = 0;

  while (queue.length > 0) {
    // n is used to distinguish the nodes with the same distance with others
    n = queue.length;
    for (let i = 0; i < n; i++) {
      currentPos = queue.shift();
      // now this node has been visited
      visited.add(JSON.stringify(currentPos));
      const [r, c] = currentPos;
      if (grid[r][c] === 2) return steps;
      // its children
      const possiblePositions = [
        [r - 1, c],
        [r + 1, c],
        [r, c + 1],
        [r, c - 1],
      ];
      // check if the child should be put into queue
      for (let pos of possiblePositions) {
        const [row, col] = pos;
        // can't get out of boundaries
        const rowCondition = row >= 0 && row < rowBound;
        const colCondition = col >= 0 && col < colBound;
        if (rowCondition && colCondition) {
          // if can't touch, then skip it
          if (grid[row][col] == 1) continue;
        }
        // can't be a node has been visited
        const visitCondition = !visited.has(JSON.stringify(pos));
        // if passed all tests, then add it to queue
        if (rowCondition && colCondition && visitCondition) queue.push(pos);
      }
    }
    steps += 1;
  }
  return -1;
};

module.exports = { BinarySearchTree, bfs, minimumDistance };
