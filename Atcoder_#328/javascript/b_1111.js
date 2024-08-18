function main(input) {
  let lines = input.trim().split('\n');
  let n = parseInt(lines[0]);
  let days = lines[1].split(' ').map(Number);

  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= days[i - 1]; j++) {
      if (new Set(String(i)).size === 1 && new Set(String(j)).size === 1) {
        if (String(i)[0] === String(j)[0]) {
          count++;
        }
      }
    }
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
