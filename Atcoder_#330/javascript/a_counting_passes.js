const { endianness } = require('os');

function main(input) {
  let lines = input.split('\n');
  let [n, l] = lines[0].trim().split(' ').map(Number);
  let a = lines[1].trim().split(' ').map(Number);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (a[i] >= l) (
      count += 1
    )
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
