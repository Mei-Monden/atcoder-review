function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const s = lines[i].trim();
    if (s === "Takahashi") {
      count++;
    }
  }

  console.log(count);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
