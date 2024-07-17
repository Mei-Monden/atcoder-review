function Main(input) {
  const lines = input.trim().split('\n');
  const [n, a] = lines[0].split(" ").map(Number);
  const t = lines[1].split(" ").map(Number);

  let ans = 0

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      ans +=  t[i] + a;
    } else if (ans >= t[i]) {
      ans += a
    } else {
      ans = t[i] + a
    }
    console.log(ans);
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);


