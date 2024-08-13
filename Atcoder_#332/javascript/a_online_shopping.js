function main(input) {
  let lines = input.split('\n');
  let [n, s, k] = lines[0].split(' ').map(Number);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
      let [p, q] = lines[i].split(' ').map(Number);
      sum += p * q;
  }

  if (sum < s) {
      console.log(sum + k);
  } else {
      console.log(sum);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
