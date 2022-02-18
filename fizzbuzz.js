/*
======== BASIC ========
*/
const fizzbuzz = (num) => {
  const output = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) output.push("fizzbuzz");
    else if (i % 3 === 0) output.push("fizz");
    else if (i % 5 === 0) output.push("buzz");
    else output.push(i);
  }
  return output;
};

/*
======== EXTENSION ========
*/

const fizzbuzzbazz = (num) => {
  const output = [];
  for (let i = 1; i <= num; i++) {
    const flagFizz = i % 3 === 0;
    const flagBuzz = i % 5 === 0;
    const flagBazz = i % 7 === 0;
    let res = "";
    if (flagFizz) res += "fizz";
    if (flagBuzz) res += "buzz";
    if (flagBazz) res += "bazz";
    if (res === "") res = i;
    output.push(res);
  }
  return output;
};

module.exports = { fizzbuzz, fizzbuzzbazz };
