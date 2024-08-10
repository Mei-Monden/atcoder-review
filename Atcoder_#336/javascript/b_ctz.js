function main(input) {
  const n = parseInt(input.trim(), 10);
  const binary = n.toString(2);
  let count = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
      if (binary[i] === '1') {
          break;
      }
      count++;
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
