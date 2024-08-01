function main(input) {
  const lines = input.trim().split('\n').map(Number);
  const reversed = lines.reverse();

  reversed.forEach(num => {
    console.log(num);
  });
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
