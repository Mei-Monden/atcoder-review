function main(input) {
  let lines = input.split('\n');
  let [n, x] = lines[0].trim().split(' ').map(Number);
  let a = lines[1].trim().split(' ').map(Number);

  a = a.filter(num => num <= x);

  let sum = a.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
