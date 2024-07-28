function main(input) {
  const lines = input.trim().split("\n");
  const [n, m] = lines[0].split(' ').map(Number);
  const h = lines[1].split(' ').map(Number);

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += h[i];
    if (sum > m) {
      console.log(i);
      return;
    } else if (sum === m) {
      console.log(i + 1);
      return;
    }
  }

  console.log(n);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
