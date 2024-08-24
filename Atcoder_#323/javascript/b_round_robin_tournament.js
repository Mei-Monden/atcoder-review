function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const s = lines.slice(1);

  let winCounts = Array.from({ length: n }, (_, i) => [i + 1, 0]);

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (s[i][j] === 'o') {
              winCounts[i][1] += 1;
          }
      }
  }

  winCounts.sort((a, b) => {
      if (b[1] !== a[1]) {
          return b[1] - a[1];
      } else {
          return a[0] - b[0];
      }
  });

  console.log(winCounts.map(pair => pair[0]).join(' '));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
