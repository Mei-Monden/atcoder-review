const { endianness } = require('os');

function main(input) {
  let lines = input.split('\n');
  let [M, D] = lines[0].trim().split(' ').map(Number);
  let [y, m, d] = lines[1].trim().split(' ').map(Number);

  d += 1;

  if (d > D) {
    m += 1
    d = 1
  }

  if (m > M) {
    y += 1
    m = 1
  }

  console.log(y, m, d);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
