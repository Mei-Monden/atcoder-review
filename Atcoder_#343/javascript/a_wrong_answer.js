function main(input) {
  const [a, b] = input.trim().split(' ').map(Number);

  if (a + b == 9) {
    console.log(0);
  } else {
    console.log(a + b + 1);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
