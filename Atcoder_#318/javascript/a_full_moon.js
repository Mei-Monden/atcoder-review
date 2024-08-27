function main(input) {
  const [n, m, p] = input.split(' ').map(Number);

  let count = 0;
  let i = 0;

  while (true) {
    if (m + p * i > n) {
      break;
    } else {
      count += 1;
      i += 1;
    }
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
