function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);

  let x_sum = 0;
  let y_sum = 0;

  for (let i = 1; i <= n; i++) {
      const [x, y] = lines[i].split(' ').map(Number);
      x_sum += x;
      y_sum += y;
  }

  if (x_sum > y_sum) {
      console.log("Takahashi");
  } else if (x_sum < y_sum) {
      console.log("Aoki");
  } else {
      console.log("Draw");
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
