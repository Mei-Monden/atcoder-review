function maxCurrency(n, a, s, t) {
  for (let i = 0; i < n - 1; i++) {
      if (a[i] >= s[i]) {
          a[i + 1] += Math.floor(a[i] / s[i]) * t[i];
      }
  }

  return a[n - 1];
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let a = [];
let s = [];
let t = [];

rl.on('line', (input) => {
  if (!n) {
      n = parseInt(input);
  } else if (a.length === 0) {
      a = input.split(' ').map(Number);
  } else {
      const [si, ti] = input.split(' ').map(Number);
      s.push(si);
      t.push(ti);
  }
}).on('close', () => {
  console.log(maxCurrency(n, a, s, t));
});
