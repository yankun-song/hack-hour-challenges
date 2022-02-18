/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = (n) => {
  if (n <= 0) return;
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(i);
    console.log(spaces + stars);
  }
};
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = (n) => {
  // handle edge cases
  if (n <= 0 || n % 2 == 0) return;
  // here I used the idea of modulization
  // separating the functionality of a program into independent functions
  // so it will be easier to write and debug, and for others to read
  for (let level = 1; level <= n; level++) {
    if (level === (n + 1) / 2) printMid(n);
    else if (level < (n + 1) / 2) printUpper(level, n);
    else printLower(level, n);
  }
};

// this function is used to print the middle part
function printMid(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    if (i === (n - 1) / 2) output += "+";
    else output += "-";
  }
  console.log(output);
}

// this function is used to print the first half
function printUpper(level, n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i === level) output += "\\";
    else if (i === n + 1 - level) output += "/";
    else if (i === (n + 1) / 2) output += "|";
    else output += " ";
  }
  console.log(output);
}

// this function is used to print the second half
function printLower(level, n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i === n + 1 - level) output += "/";
    else if (i === level) output += "\\";
    else if (i === (n + 1) / 2) output += "|";
    else output += " ";
  }
  console.log(output);
}

module.exports = { drawStairs, drawStar };
