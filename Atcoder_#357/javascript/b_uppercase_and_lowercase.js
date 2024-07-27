function Main(input) {
  const lines = input.trim().split("\n");
  const s = lines[0];
  const n = s.length;

  let upcase_count = 0;
  let downcase_count = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upcase_count += 1;
    } else {
      downcase_count += 1;
    }
  }

  let ans;

  if (upcase_count > downcase_count) {
    ans = s.toUpperCase();
  } else {
    ans = s.toLowerCase();
  }

  console.log(ans);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);
