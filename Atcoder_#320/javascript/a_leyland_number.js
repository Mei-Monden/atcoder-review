function main(input) {
  const lines = input.split('\n');
  const [a, b] = lines[0].split(' ').map(Number);

  console.log(Math.pow(a, b) + Math.pow(b, a))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
