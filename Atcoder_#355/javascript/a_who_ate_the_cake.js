function main(input) {
  const [a, b] = input.trim().split(' ').map(Number);
  let result;

  if (a === b) {
    result = -1;
  } else if ((a === 1 && b === 2) || (a === 2 && b === 1)) {
    result = 3;
  } else if ((a === 2 && b === 3) || (a === 3 && b === 2)) {
    result = 1;
  } else {
    result = 2;
  }

  console.log(result);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
