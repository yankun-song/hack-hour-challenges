/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const maxDepth = (arr) => {
  const str = JSON.stringify(arr);
  let leftParenthesis = 0;
  let maxDepth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === "[") {
      leftParenthesis += 1;
      maxDepth = Math.max(maxDepth, leftParenthesis);
    } else if (ch === "]") leftParenthesis -= 1;
  }
  return maxDepth;
};
module.exports = { maxDepth };
