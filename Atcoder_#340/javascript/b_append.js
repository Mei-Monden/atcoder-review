const fs = require('fs');

function main(input) {
  const lines = input.trim().split('\n');
  const Q = parseInt(lines[0], 10);
  const A = [];

  for (let i = 1; i <= Q; i++) {
    const query = lines[i].split(' ');
    const type = parseInt(query[0], 10);

    if (type === 1) {
      const x = parseInt(query[1], 10);
      A.push(x);
    } else if (type === 2) {
      const k = parseInt(query[1], 10);
      console.log(A[A.length - k]);
    }
  }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
