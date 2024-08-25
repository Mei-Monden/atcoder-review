function main(input) {
  const lines = input.split('\n');
  const [n, x] = lines[0].split(' ').map(Number);
  const a = lines[1].split(' ').map(Number);

  const sum = a.reduce((acc, val) => acc + val, 0);
  const max = Math.max(...a);
  const min = Math.min(...a);

  let currentSum = sum - max - min;

  if (currentSum + min >= x) {
    console.log(0);
  } else if ((x - currentSum) > max) {
    console.log(-1);
  } else {
    console.log(x - currentSum);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
