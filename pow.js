function pow(base, power) {
  if (power == 0) return 1;
  if (power < 0) {
    base = 1 / base;
    power = -power;
  }
  return base * pow(base, power - 1);
}

function powRecurse(base, power) {
  if (power == 0) return 1;
  if (power < 0) {
    base = 1 / base;
    power = -power;
  }
  const half = powRecurse(base, Math.floor(power / 2));
  if (power % 2) return base * half * half;
  return half * half;
}

module.exports = { pow, powRecurse };
