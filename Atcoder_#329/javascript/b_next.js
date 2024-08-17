function main(input) {
  let lines = input.trim().split('\n');
  let n = parseInt(lines[0], 10);
  let a = lines[1].split(' ').map(Number);

  let maxValue = Math.max(...a);

  a = a.filter(value => value !== maxValue);

  console.log(Math.max(...a));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
