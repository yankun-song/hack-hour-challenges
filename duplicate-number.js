/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = (array) => {
  const visited = new Set();
  for (let num of array) {
    if (visited.has(num)) return num;
    visited.add(num);
  }
};

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = (array) => {
  const minNum = Math.min(...array);
  const maxNum = Math.max(...array);
  const arraySum = array.reduce((accu, curr) => accu + curr);
  const noDupSum = ((minNum + maxNum) * (maxNum - minNum + 1)) / 2;
  return arraySum - noDupSum;
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
