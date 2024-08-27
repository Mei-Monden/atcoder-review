function main(input) {
  const lines = input.split('\n');
  const N = parseInt(lines[0], 10);

  const grid = Array.from({ length: 101 }, () => Array(101).fill(0));

  for (let i = 1; i <= N; i++) {
    const [A, B, C, D] = lines[i].split(' ').map(Number);
    for (let x = A; x < B; x++) {
      for (let y = C; y < D; y++) {
        grid[x][y] += 1;
      }
    }
  }

  let area = 0;
  for (let x = 0; x <= 100; x++) {
    for (let y = 0; y <= 100; y++) {
      if (grid[x][y] > 0) {
        area += 1;
      }
    }
  }

  console.log(area);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
