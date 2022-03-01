/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = (input) => {
  // record the pairs
  const leftParts = { "{": "}", "[": "]", "(": ")" };
  const rightParts = { "}": "{", "]": "[", ")": "(" };

  // use stack to store the parenthesis
  const stack = [];

  // iterate through the input
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    // if not in the pairs, skip
    if (!(ch in leftParts || ch in rightParts)) continue;
    // if it is a right part, it has to pair with the top element in stack
    // if stack is empty or can't pair, then return false
    // else delete the top element because it pairs with the current character
    if (ch in rightParts) {
      if (stack.length == 0 || stack[stack.length - 1] != rightParts[ch])
        return false;
      stack.pop();
    }
    // if it is a left part, push to stack
    else stack.push(ch);
  }
  // the stack should be empty in the end
  return stack.length === 0;
};

module.exports = { balancedParens };
