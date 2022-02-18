function binToDec(binString) {
  let output = 0;
  let power = 0;
  for (let i = binString.length - 1; i >= 0; i--) {
    output += binString[i] * 2 ** power;
    power += 1;
  }
  return output;
}

module.exports = { binToDec };
