/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  let count = 0;
  array.forEach((el) => {
    if (Array.isArray(el)) count += keywordCount(el, keyword);
    count += el === keyword ? 1 : 0;
  });
  return count;
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array) => {
  // count the frequency
  const count = {};
  let maxFreq = 0;
  countFreq(array, count);
  // find the max
  const res = [];
  for (let key in count) {
    if (count[key] == maxFreq) res.push(key);
  }
  return res.sort();

  // helper function
  function countFreq(arr, count) {
    if (!Array.isArray(arr)) {
      count[arr] = (count[arr] || 0) + 1;
      maxFreq = Math.max(maxFreq, count[arr]);
      return;
    }
    arr.forEach((el) => countFreq(el, count));
  }
};

module.exports = { keywordCount, keywordMode };
