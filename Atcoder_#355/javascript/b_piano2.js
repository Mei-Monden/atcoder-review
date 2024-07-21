function Main(input) {
  const lines = input.trim().split("\n");

  const [N, M] = lines[0].split(' ').map(Number);

  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);

  const C = A.concat(B).sort((a, b) => a - b);

  let consecutiveInA = false;
  for (let i = 0; i < C.length - 1; i++) {
    if (A.includes(C[i]) && A.includes(C[i + 1])) {
      consecutiveInA = true;
      break;
    }
  }

  if (consecutiveInA) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);
