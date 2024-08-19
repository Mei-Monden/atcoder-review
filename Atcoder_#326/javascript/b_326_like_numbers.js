function calculation(num) {
  let digits = num.toString().split('').map(Number);
  return digits[0] * digits[1] === digits[2];
}

function search(n) {
  while (true) {
    if (calculation(n)) {
      return n;
    }
    n += 1;
  }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let n = parseInt(input, 10);

let result = search(n);
console.log(result);
