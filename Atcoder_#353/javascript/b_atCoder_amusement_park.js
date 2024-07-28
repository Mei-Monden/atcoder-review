function main(input) {
  const lines = input.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  let startCount = 0;
  let seats = K;

  for (let i = 0; i < N; i++) {
    if (A[i] > seats) {
      startCount++;
      seats = K;
    }
    seats -= A[i];
  }

  if (seats < K) {
    startCount++;
  }

  console.log(startCount);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
