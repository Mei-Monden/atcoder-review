function main(input) {
  const lines = input.split('\n');
  const n = parseInt(lines[0].trim());
  const a = lines[1].trim().split(' ').map(Number);

  const allEqual = a.every(e => e === a[0]);

  if (allEqual) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
