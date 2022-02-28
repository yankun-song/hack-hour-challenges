/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
  // have to use Map() rather than Object
  //cuz Object cannot use "number" type variable as key
  const cache = new Map();
  const common = [];

  // Iterate all elements and count their occurance
  for (const array of args) {
    for (const el of array) {
      if (!cache.has(el)) cache.set(el, 0);
      cache.set(el, cache.get(el) + 1);
    }
  }

  // if we have x arrays, then elements which occurred x times are common elements
  for (const [key, value] of cache) {
    if (value === args.length) common.push(key);
  }

  if (common.length > 0) return common;
  return "Nothing in Common!";
};

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
  let compareSet = new Set(args[0]);
  for (let i = 0; i < args.length; i++) {
    compareSet = findCommon(args[i], compareSet);
  }
  return compareSet.size > 0 ? Array.from(compareSet) : "Nothing in Common!";

  function findCommon(array, compareSet) {
    commonElements = new Set();
    array.forEach((el) => {
      if (compareSet.has(el)) commonElements.add(el);
    });
    return commonElements;
  }
};

module.exports = { commonElements, commonElementsOptimized };
