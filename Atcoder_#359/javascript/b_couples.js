function Main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0])
  const a = lines[1].split(" ").map(Number);

  const num_of_people = 2 * n;
  let ans = 0

  for (let i = 0; i < num_of_people - 2; i++) {
    if (a[i] === a[i + 2]) {
      ans += 1;
    }
  }

  console.log(ans);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);
