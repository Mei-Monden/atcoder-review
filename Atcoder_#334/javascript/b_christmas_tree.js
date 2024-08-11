function countTrees(a, m, l, r) {
  let z;

  if (l <= a && r >= a) {
      z = (a - l) / m + (r - a) / m + 1n;
  } else {
      z = (r - l + 1n) / m;

      if ((r - l + 1n) % m && (a < l ? (r - a) : (a - l)) % m < (r - l + 1n) % m) {
          z++;
      }
  }

  return z;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(BigInt);
const [a, m, l, r] = input;

console.log(countTrees(a, m, l, r).toString());
