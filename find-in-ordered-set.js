/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  // binary search
  let left = 0,
    right = array.length - 1;

  // updating the boundaries
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] == target) return true;
    if (array[mid] < target) left = mid;
    else right = mid;
  }
  // check end case
  if (array[left] == target || array[right] == target) return true;
  return false;
};

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  // helper function
  // search the value by 1D-idx so can run binary search in 1-pass
  const getNumByIdx = (idx) => {
    const rowNum = Math.floor(idx / matrix[0].length);
    const colNum = idx - rowNum * matrix[0].length;
    return matrix[rowNum][colNum];
  };

  // binary search
  let left = 0,
    right = matrix[0].length * matrix.length - 1;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (getNumByIdx(mid) == target) return true;
    if (getNumByIdx(mid) < target) left = mid;
    else right = mid;
  }
  if (getNumByIdx(left) == target || getNumByIdx(right) == target) return true;
  return false;
};

module.exports = { findInOrderedSet, findIn2dMatrix };
