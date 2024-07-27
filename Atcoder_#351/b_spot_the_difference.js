function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);

  const gridA = [];
  const gridB = [];

  for (let i = 1; i <= n; i++) {
    gridA.push(lines[i].split(''));
  }

  for (let i = n + 1; i <= 2 * n; i++) {
    gridB.push(lines[i].split(''));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (gridA[i][j] !== gridB[i][j]) {
        console.log(`${i + 1} ${j + 1}`);
        return;
      }
    }
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
