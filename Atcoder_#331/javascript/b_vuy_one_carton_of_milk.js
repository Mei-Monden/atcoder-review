function main(input) {
  const [n, s, m, l] = input.trim().split(' ').map(Number);

  let minCost = Infinity;

  for (let i = 0; i <= Math.floor(n / 6) + 1; i++) {
      for (let j = 0; j <= Math.floor(n / 8) + 1; j++) {
          for (let k = 0; k <= Math.floor(n / 12) + 1; k++) {
              const totalEggs = i * 6 + j * 8 + k * 12;
              if (totalEggs >= n) {
                  const cost = i * s + j * m + k * l;
                  minCost = Math.min(minCost, cost);
              }
          }
      }
  }

  console.log(minCost);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
