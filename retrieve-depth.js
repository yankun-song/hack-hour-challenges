/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

const retrieveDepth = (arr, depth) => {
  // O(n) time and O(n) space
  const res = [];
  compareDepth(arr, 1, depth, res);
  return res;

  // create a helper function to compare current depth with allowed depth
  // and add qualified elements into result bucket
  function compareDepth(arr, depth, allowedDepth, res) {
    if (depth > allowedDepth) return;
    for (const el of arr) {
      if (Array.isArray(el)) compareDepth(el, depth + 1, allowedDepth, res);
      else res.push(el);
    }
  }
};

/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

const flattenDepth = (arr, depth) => {
  // O(n) time and O(n) space
  // exit of recursion
  if (depth <= 0) return arr;

  let res = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      // way 1:  res = [...res, ...flattenDepth(el, depth - 1)];
      //this one-line code looks simple, but wasting time and space
      // way 2
      for (const ele of flattenDepth(el, depth - 1)) {
        res.push(ele);
      }
    } else res.push(el);
  }
  return res;
};

module.exports = { retrieveDepth, flattenDepth };
