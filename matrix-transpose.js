/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

const matrixTranspose = (matrix) => {
  // edge case
  if (!matrix.length) return [];
  // create the transposed matrix
  const row = Array(matrix.length).fill(0);
  const res = [];
  // have to make a deep copy, there should be a better way to do so
  for (let i = 0; i < matrix[0].length; i++) {
    res.push([...row]);
  }

  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
};

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

const matrixRotate = (matrix) => {
  // edge case
  if (!matrix.length) return [];
  if (matrix.length !== matrix[0].length) return;

  // rotate counter-clock-wise is easier to implement
  const matrixCounterWise = (matrix) => {
    // swap by diagonal
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }

    // swap rows
    for (let i = 0; i < matrix.length / 2; i++) {
      [matrix[i], matrix[matrix.length - 1 - i]] = [
        matrix[matrix.length - 1 - i],
        matrix[i],
      ];
    }
    return matrix;
  };
  // roate counter-clock-wise 3 times to achieve the expect result
  for (let i = 0; i < 3; i++) {
    matrix = matrixCounterWise(matrix);
  }
  return matrix;
};

module.exports = { matrixTranspose, matrixRotate };
