function main(input) {
  const h = parseInt(input.trim(), 10);

  let height = 0;

  let days = 0;

  while (height <= h) {
    height += 2 ** days;
    days += 1;
  }

  console.log(days);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
